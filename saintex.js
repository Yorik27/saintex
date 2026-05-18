/* ============================================================
   SaintEx — Jeu de lettres
   Dictionnaire chargé depuis dicos_saintex.json
   Structure : { mot: { cats, playable, argot } }
   ============================================================ */

// Chargement du dictionnaire au démarrage
window.DICO = {};

fetch('dicos_saintex.json')
  .then(r => r.json())
  .then(data => {
    window.DICO = data;
    console.log('Dico chargé :', Object.keys(data).length, 'mots');
  })
  .catch(err => console.error('Erreur chargement dico :', err));

// ─── État de la partie ───────────────────────────────────────
let motSecret   = '';
let saisieEnCours = '';
let cpt         = 0;
let partieTerminee = false;
let indicesRestants = 1;
const lettresProposees = new Set(); // lettres déjà vues dans les propositions

// ─── Lancement de la partie ──────────────────────────────────
function choixprop() {

  // Guard : dico chargé ?
  if (Object.keys(window.DICO).length === 0) {
    alert("Le dictionnaire est en cours de chargement, veuillez réessayer dans un instant.");
    return;
  }

  // Longueur choisie (radio "longueur")
  const radios = document.querySelectorAll('input[name="longueur"]');
  let longueurChoisie = 4;
  radios.forEach(r => { if (r.checked) longueurChoisie = parseInt(r.value); });

  // Catégories cochées
  const checkboxes = document.querySelectorAll('input[name="categorie"]:checked');
  const catsChoisies = Array.from(checkboxes).map(c => c.value);

  // Thème choisi (optionnel)
  const themeRadio = document.querySelector('input[name="theme"]:checked');
  const themeChoisi = themeRadio ? themeRadio.value : '';

  // Filtrer les mots playables
  let motsPlayables = Object.entries(window.DICO)
    .filter(([mot, info]) =>
      mot.length === longueurChoisie &&
      info.playable &&
      (catsChoisies.length === 0 || info.cats.some(c => catsChoisies.includes(c)))
    )
    .map(([mot]) => mot);

  // Filtrer par thème si sélectionné
  if (themeChoisi && window.THEMES && window.THEMES[themeChoisi]) {
    const motsDuTheme = window.THEMES[themeChoisi]
      .filter(m => m.length === longueurChoisie && m in window.DICO);
    if (motsDuTheme.length > 0) motsPlayables = motsDuTheme;
  }

  if (motsPlayables.length === 0) {
    alert("Aucun mot disponible pour cette combinaison. Essayez d'autres filtres.");
    return;
  }

  // Choisir le mot secret
  motSecret = motsPlayables[Math.floor(Math.random() * motsPlayables.length)];
  saisieEnCours = '';
  cpt = 0;
  partieTerminee = false;
  indicesRestants = 1;
  lettresProposees.clear();

  // Afficher le titre de la partie
  const titre = document.getElementById('titrePartie');
  if (titre) {
    titre.textContent = themeChoisi
      ? themeRadio.closest('label').textContent.trim()
      : longueurChoisie + ' lettres';
  }

  // Basculer l'affichage
  document.getElementById('nav').style.display      = 'none';
  document.getElementById('zone-jeu').style.display = 'block';
  document.getElementById('header').style.display   = 'block';
  document.getElementById('footer').style.display   = 'block';

  // Réinitialiser le bouton indice
  const btnIndice = document.getElementById('btn-indice');
  const compteur  = document.getElementById('compteur-indice');
  if (btnIndice) { btnIndice.disabled = false; btnIndice.classList.remove('indice-epuise'); }
  if (compteur)  { compteur.textContent = indicesRestants; }

  // Réinitialiser la zone de jeu
  document.getElementById('pave').innerHTML = '';
  const g = document.getElementById('gagne'); g.style.display = 'none'; g.classList.remove('visible');
  document.getElementById('error').style.display = 'none';
  document.getElementById('triche').textContent  = '';
  document.getElementById('rejouer').style.display = 'none';

  // Affichage initial des tirets
  majAffichageMot();
}

// ─── Retour à l'accueil ──────────────────────────────────────
function retourAccueil() {
  document.getElementById('nav').style.display      = 'block';
  document.getElementById('zone-jeu').style.display = 'none';
  document.getElementById('header').style.display   = 'block';
  motSecret = '';
  saisieEnCours = '';
}

// ─── Clavier intégré ─────────────────────────────────────────
function ajouterLettre(lettre) {
  if (partieTerminee) return;
  if (saisieEnCours.length < motSecret.length) {
    saisieEnCours += lettre;
    majAffichageMot();
  }
}

function effacer() {
  if (partieTerminee) return;
  saisieEnCours = saisieEnCours.slice(0, -1);
  majAffichageMot();
}

function majAffichageMot() {
  const el = document.getElementById('affichage-mot');
  if (!el) return;
  const longueur = motSecret.length || 4;
  el.innerHTML = '';
  for (let i = 0; i < longueur; i++) {
    const div = document.createElement('div');
    div.classList.add('case-lettre');
    if (saisieEnCours[i]) {
      div.classList.add('case-saisie');
      div.textContent = saisieEnCours[i];
    } else {
      div.classList.add('case-vide');
      div.textContent = '';
    }
    el.appendChild(div);
  }
}

// ─── Validation ───────────────────────────────────────────────
function valider() {
  if (partieTerminee) return;

  const proposition = saisieEnCours.toUpperCase();
  const errEl = document.getElementById('error');

  // Vérif longueur
  if (proposition.length !== motSecret.length) {
    errEl.textContent = 'Mot trop court';
    errEl.style.display = 'block';
    return;
  }

  // Vérif dans le dico
  const valide = proposition in window.DICO;
  cpt++;

  if (!valide) {
    errEl.textContent = 'Mot inconnu du dictionnaire';
    errEl.style.display = 'block';
    // Afficher quand même la ligne
    ajouterLigne(proposition, -1);
    saisieEnCours = '';
    majAffichageMot();
    return;
  }

  errEl.style.display = 'none';

  // Enregistrer les lettres proposées
  for (const lettre of proposition) lettresProposees.add(lettre);

  // Compter les lettres bien placées
  let count = 0;
  for (let i = 0; i < motSecret.length; i++) {
    if (proposition[i] === motSecret[i]) count++;
  }

  ajouterLigne(proposition, count);
  saisieEnCours = '';
  majAffichageMot();

  // Victoire
  if (count === motSecret.length) {
    partieTerminee = true;
    const gagneEl = document.getElementById('gagne');
    gagneEl.style.display = 'block';
    gagneEl.classList.add('visible');
    const msg = cpt === 1 ? 'Parfait !' : cpt + ' coups ! Bravo !';
    document.getElementById('nombreCoups').textContent = msg;
    document.getElementById('rejouer').style.display = 'inline-block';
    // Retirer l'indice éclairé
    document.querySelectorAll('.touche').forEach(btn => btn.classList.remove('indice-eclaire'));
  }
}

// ─── Langue au chat ───────────────────────────────────────────
function langueAuChat() {
  partieTerminee = true;
  const tricheEl = document.getElementById('triche');
  if (tricheEl) {
    tricheEl.textContent = 'Le mot était : ' + motSecret;
    tricheEl.style.display = 'block';
  }
  document.getElementById('rejouer').style.display = 'inline-block';
  // Retirer l'indice éclairé
  document.querySelectorAll('.touche').forEach(btn => btn.classList.remove('indice-eclaire'));
}

// ─── Ajouter une ligne de résultat ───────────────────────────
function ajouterLigne(proposition, count) {
  const pave = document.getElementById('pave');
  const ligne = document.createElement('div');
  ligne.classList.add('lignes');

  const classes = ['zero', 'une', 'deux', 'trois', 'quatre', 'cinq'];
  const cls = count < 0 ? 'zero' : (classes[count] || 'zero');

  const label = document.createElement('span');
  label.classList.add('label-mot');
  label.textContent = proposition + ' : ';

  const score = document.createElement('span');
  score.classList.add(cls);
  score.textContent = count < 0 ? '🚫' : count;

  ligne.appendChild(label);
  ligne.appendChild(score);
  pave.appendChild(ligne);
  pave.scrollTop = pave.scrollHeight;
}


// ─── Bouton indice ────────────────────────────────────────────
function demanderIndice() {
  if (partieTerminee || indicesRestants <= 0) return;

  // Lettres du mot secret non encore proposées
  const lettresSecret = [...new Set(motSecret.split(''))];
  const candidates = lettresSecret.filter(l => !lettresProposees.has(l));

  if (candidates.length === 0) {
    // Toutes les lettres du mot ont déjà été proposées — éclairer une lettre aléatoire du mot
    const lettreIndice2 = lettresSecret[Math.floor(Math.random() * lettresSecret.length)];
    document.querySelectorAll('.touche').forEach(btn => {
      btn.classList.remove('indice-eclaire');
      if (btn.textContent.trim() === lettreIndice2) btn.classList.add('indice-eclaire');
    });
    indicesRestants--;
    const compteur2 = document.getElementById('compteur-indice');
    if (compteur2) compteur2.textContent = indicesRestants;
    if (indicesRestants <= 0) {
      const btnI = document.getElementById('btn-indice');
      if (btnI) { btnI.disabled = true; btnI.classList.add('indice-epuise'); }
    }
    return;
  }

  // Choisir une lettre aléatoire parmi les candidates
  const lettreIndice = candidates[Math.floor(Math.random() * candidates.length)];

  // Éclairer la touche correspondante
  document.querySelectorAll('.touche').forEach(btn => {
    btn.classList.remove('indice-eclaire');
    if (btn.textContent.trim() === lettreIndice) {
      btn.classList.add('indice-eclaire');
    }
  });

  // Décrémenter
  indicesRestants--;
  const compteur = document.getElementById('compteur-indice');
  if (compteur) compteur.textContent = indicesRestants;

  if (indicesRestants <= 0) {
    const btnIndice = document.getElementById('btn-indice');
    if (btnIndice) {
      btnIndice.disabled = true;
      btnIndice.classList.add('indice-epuise');
    }
  }
}

// ─── Support clavier physique ─────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (!motSecret) return;
  if (e.key === 'Enter') { valider(); return; }
  if (e.key === 'Backspace') { effacer(); return; }
  if (/^[a-zA-Z]$/.test(e.key)) { ajouterLettre(e.key.toUpperCase()); }
});
