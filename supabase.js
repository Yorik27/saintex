// ═══════════════════════════════════════════
// SaintEx — Client Supabase
// ═══════════════════════════════════════════

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://vrdjytcbiddvvvielcdz.supabase.co';
const SUPABASE_KEY = 'sb_publishable_f8VIFlJD4LasEWwLgSttZw_Gn7RFwLz';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ─── Joueurs ───────────────────────────────

// Créer ou récupérer un joueur par pseudo
export async function connexionJoueur(pseudo) {
    // Chercher si le pseudo existe déjà
    const { data: existing } = await supabase
        .from('joueurs')
        .select('*')
        .eq('pseudo', pseudo)
        .single();

    if (existing) {
        // Mettre à jour le statut en ligne
        const { data } = await supabase
            .from('joueurs')
            .update({ en_ligne: true, last_seen: new Date().toISOString() })
            .eq('id', existing.id)
            .select()
            .single();
        return data;
    } else {
        // Créer un nouveau joueur
        const { data } = await supabase
            .from('joueurs')
            .insert({ pseudo, en_ligne: true })
            .select()
            .single();
        return data;
    }
}

// Mettre le joueur hors ligne
export async function deconnexionJoueur(joueurId) {
    await supabase
        .from('joueurs')
        .update({ en_ligne: false, last_seen: new Date().toISOString() })
        .eq('id', joueurId);
}

// Récupérer les joueurs en ligne (sauf moi)
export async function getJoueursEnLigne(monId) {
    const { data } = await supabase
        .from('joueurs')
        .select('*')
        .eq('en_ligne', true)
        .neq('id', monId)
        .order('pseudo');
    return data || [];
}

// ─── Invitations ───────────────────────────

// Envoyer une invitation
export async function envoyerInvitation(deJoueurId, versPseudo, longueurPreferee) {
    // Trouver l'id du joueur destinataire
    const { data: dest } = await supabase
        .from('joueurs')
        .select('id, pseudo')
        .eq('pseudo', versPseudo)
        .single();

    if (!dest) return null;

    const { data: moi } = await supabase
        .from('joueurs')
        .select('pseudo')
        .eq('id', deJoueurId)
        .single();

    const { data } = await supabase
        .from('invitations')
        .insert({
            de_joueur_id: deJoueurId,
            vers_joueur_id: dest.id,
            de_pseudo: moi.pseudo,
            vers_pseudo: dest.pseudo,
            longueur_preferee: longueurPreferee,
            statut: 'en_attente'
        })
        .select()
        .single();

    return data;
}

// Répondre à une invitation
export async function repondreInvitation(invitationId, accepte, longueurChoisie) {
    if (accepte) {
        // Créer la partie
        const { data: inv } = await supabase
            .from('invitations')
            .select('*')
            .eq('id', invitationId)
            .single();

        const { data: partie } = await supabase
            .from('parties')
            .insert({
                joueur_a: inv.de_joueur_id,
                joueur_b: inv.vers_joueur_id,
                pseudo_a: inv.de_pseudo,
                pseudo_b: inv.vers_pseudo,
                longueur: longueurChoisie,
                tour_actuel: 'a', // le challenger commence
                statut: 'en_cours'
            })
            .select()
            .single();

        // Mettre à jour l'invitation
        await supabase
            .from('invitations')
            .update({ statut: 'acceptee', partie_id: partie.id })
            .eq('id', invitationId);

        return partie;
    } else {
        await supabase
            .from('invitations')
            .update({ statut: 'refusee' })
            .eq('id', invitationId);
        return null;
    }
}

// ─── Parties ───────────────────────────────

// Soumettre une proposition
export async function soumettreProposition(partieId, joueur, mot, score, numeroTour) {
    const { data } = await supabase
        .from('propositions')
        .insert({ partie_id: partieId, joueur, mot, score, numero_tour: numeroTour })
        .select()
        .single();

    // Passer le tour
    const prochainTour = joueur === 'a' ? 'b' : 'a';
    await supabase
        .from('parties')
        .update({ tour_actuel: prochainTour, updated_at: new Date().toISOString() })
        .eq('id', partieId);

    return data;
}

// Enregistrer le mot secret (à chiffrer côté client avant envoi)
export async function enregistrerMotSecret(partieId, joueur, motChiffre) {
    const col = joueur === 'a' ? 'mot_secret_a' : 'mot_secret_b';
    await supabase
        .from('parties')
        .update({ [col]: motChiffre })
        .eq('id', partieId);
}

// Terminer une partie
export async function terminerPartie(partieId, gagnant) {
    await supabase
        .from('parties')
        .update({ statut: 'terminee', gagnant, updated_at: new Date().toISOString() })
        .eq('id', partieId);
}

// ─── Realtime ──────────────────────────────

// Écouter les changements d'une partie
export function ecouterPartie(partieId, callback) {
    return supabase
        .channel('partie-' + partieId)
        .on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'parties',
            filter: `id=eq.${partieId}`
        }, callback)
        .subscribe();
}

// Écouter les nouvelles propositions d'une partie
export function ecouterPropositions(partieId, callback) {
    return supabase
        .channel('props-' + partieId)
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'propositions',
            filter: `partie_id=eq.${partieId}`
        }, callback)
        .subscribe();
}

// Écouter les invitations reçues
export function ecouterInvitations(joueurId, callback) {
    return supabase
        .channel('invitations-' + joueurId)
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'invitations',
            filter: `vers_joueur_id=eq.${joueurId}`
        }, callback)
        .subscribe();
}

// Écouter les réponses à mes invitations
export function ecouterReponseInvitation(invitationId, callback) {
    return supabase
        .channel('inv-rep-' + invitationId)
        .on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'invitations',
            filter: `id=eq.${invitationId}`
        }, callback)
        .subscribe();
}

// Écouter les joueurs en ligne
export function ecouterJoueursEnLigne(callback) {
    return supabase
        .channel('joueurs-ligne')
        .on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'joueurs'
        }, callback)
        .subscribe();
}

// Se déconnecter proprement à la fermeture de la page
window.addEventListener('beforeunload', () => {
    const joueurId = sessionStorage.getItem('joueur_id');
    if (joueurId) deconnexionJoueur(joueurId);
});
