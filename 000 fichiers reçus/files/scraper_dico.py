#!/usr/bin/env python3
"""
Scraper des définitions — lalanguefrancaise.com
Récupère les définitions des mots de 4 et 5 lettres
pour identifier les mots courants vs hapax scrabble.

Usage :
    python3 scraper_dico.py

Résultat :
    resultats_4.json  — mots 4 lettres avec définition courte + catégorie
    resultats_5.json  — mots 5 lettres avec définition courte + catégorie

Durée estimée : 2-3 heures (pause de 1s entre requêtes)
"""

import requests
import json
import time
import re
from pathlib import Path

# --- Configuration ---
PAUSE        = 1.2     # secondes entre chaque requête (respectueux du serveur)
FICHIER_4    = Path('resultats_4.json')
FICHIER_5    = Path('resultats_5.json')
PROGRESSION  = Path('progression.json')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
                  'AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/120.0.0.0 Safari/537.36'
}

def sans_accent(s):
    import unicodedata
    return ''.join(
        c for c in unicodedata.normalize('NFD', s.upper())
        if unicodedata.category(c) != 'Mn'
    )

def recuperer_liste_mots(nb_lettres):
    """Récupère la liste complète des mots depuis lalanguefrancaise.com"""
    url = f"https://www.lalanguefrancaise.com/dictionnaire/mots-de-{nb_lettres}-lettres"
    print(f"Récupération de la liste {nb_lettres} lettres...")
    r = requests.get(url, headers=HEADERS, timeout=15)
    r.raise_for_status()
    # Extraire les mots des liens
    mots = re.findall(r'/dictionnaire/definition/([^"]+)"', r.text)
    # Nettoyer les URLs encodées
    from urllib.parse import unquote
    mots_propres = []
    for m in mots:
        mot = unquote(m).lower()
        # Normaliser sans accent
        norm = sans_accent(mot)
        if re.match(r'^[A-Z]+$', norm) and len(norm) == nb_lettres:
            mots_propres.append({'original': mot, 'normalise': norm})
    print(f"  {len(mots_propres)} mots trouvés")
    return mots_propres

def recuperer_definition(mot_original):
    """Récupère la définition d'un mot depuis lalanguefrancaise.com"""
    from urllib.parse import quote
    url = f"https://www.lalanguefrancaise.com/dictionnaire/definition/{quote(mot_original)}"
    try:
        r = requests.get(url, headers=HEADERS, timeout=10)
        if r.status_code != 200:
            return None
        html = r.text

        # Extraire la catégorie grammaticale
        cat_match = re.search(
            r'<span[^>]*class="[^"]*pos[^"]*"[^>]*>([^<]+)</span>', html)
        categorie = cat_match.group(1).strip() if cat_match else '?'

        # Extraire la première définition
        def_match = re.search(
            r'<p[^>]*class="[^"]*definition[^"]*"[^>]*>(.*?)</p>', html, re.DOTALL)
        if not def_match:
            # Essai avec une balise différente
            def_match = re.search(r'<li[^>]*>(.*?)</li>', html, re.DOTALL)

        definition = ''
        if def_match:
            # Nettoyer le HTML
            raw = def_match.group(1)
            definition = re.sub(r'<[^>]+>', '', raw).strip()
            definition = re.sub(r'\s+', ' ', definition)[:200]

        return {
            'categorie': categorie,
            'definition': definition,
        }
    except Exception as e:
        return {'erreur': str(e)}

def charger_progression():
    if PROGRESSION.exists():
        with open(PROGRESSION) as f:
            return json.load(f)
    return {'traites_4': [], 'traites_5': []}

def sauvegarder_progression(prog):
    with open(PROGRESSION, 'w') as f:
        json.dump(prog, f)

def charger_resultats(fichier):
    if fichier.exists():
        with open(fichier) as f:
            return json.load(f)
    return {}

def sauvegarder_resultats(fichier, resultats):
    with open(fichier, 'w', encoding='utf-8') as f:
        json.dump(resultats, f, ensure_ascii=False, indent=2)

def traiter(nb_lettres):
    fichier = FICHIER_4 if nb_lettres == 4 else FICHIER_5
    resultats = charger_resultats(fichier)
    prog = charger_progression()
    cle_prog = f'traites_{nb_lettres}'

    mots = recuperer_liste_mots(nb_lettres)
    deja_faits = set(prog.get(cle_prog, []))
    a_traiter = [m for m in mots if m['normalise'] not in deja_faits]

    print(f"\nTraitement {nb_lettres} lettres : {len(a_traiter)} mots restants")
    print("Ctrl+C pour interrompre (la progression est sauvegardée)\n")

    for i, mot in enumerate(a_traiter):
        norm = mot['normalise']
        orig = mot['original']

        defn = recuperer_definition(orig)
        if defn:
            resultats[norm] = {
                'original': orig,
                **defn
            }

        deja_faits.add(norm)
        prog[cle_prog] = list(deja_faits)

        # Sauvegarder toutes les 50 entrées
        if i % 50 == 0:
            sauvegarder_resultats(fichier, resultats)
            sauvegarder_progression(prog)
            pct = (len(deja_faits) / len(mots)) * 100
            print(f"  [{pct:5.1f}%] {len(deja_faits)}/{len(mots)} — dernier : {norm}")

        time.sleep(PAUSE)

    # Sauvegarde finale
    sauvegarder_resultats(fichier, resultats)
    sauvegarder_progression(prog)
    print(f"\n✓ {nb_lettres} lettres terminé — {len(resultats)} définitions")
    return resultats

if __name__ == '__main__':
    print("=" * 50)
    print("Scraper SaintEx — lalanguefrancaise.com")
    print("=" * 50)
    print()

    try:
        traiter(4)
        print()
        traiter(5)
        print("\n✓ Terminé ! Fichiers : resultats_4.json et resultats_5.json")
    except KeyboardInterrupt:
        print("\n\nInterrompu — progression sauvegardée.")
        print("Relancez le script pour reprendre.")
