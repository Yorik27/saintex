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

//_____________ Détermination du mot à deviner ______________

// Fonction déclenchée lorsque l'utilisateur choisit le niveau de difficulté

function choixprop(form4){
	// Filtrer selon la longueur choisie (4 ou 5 lettres)
	const longueurChoisie = form4.choix[0].checked ? 4 : 5;
    // Masquer l'élément de navigation	
	const nav = document.getElementById("nav");
	nav.style.visibility= "hidden";

    // Générer un mot aléatoire à partir de la liste de mots choisie

// Guard : vérifier que le dico est chargé
	if (Object.keys(window.DICO).length === 0) {
		alert("Le dictionnaire est en cours de chargement, veuillez réessayer dans un instant.");
		return;
	}
	// Sélectionner un mot playable de la longueur choisie
	const motsPlayables = Object.entries(window.DICO)
		.filter(([mot, info]) => mot.length === longueurChoisie && info.playable)
		.map(([mot]) => mot);
	const myString = motsPlayables[Math.floor(Math.random() * motsPlayables.length)];

    // Extraire les caractères individuels du mot sélectionné

let premier = myString.charAt(0);
let deuxieme = myString.charAt(1);
let troisieme = myString.charAt(2);
let quatrieme = myString.charAt(3);

    // Initialiser les variables pour compter les tentatives et suivre les longueurs des listes de mots

let cpt = 0;
let number = 4;
// Dico chargé via window.DICO


    // Obtenir les éléments DOM pour l'entrée de l'utilisateur et la sortie du jeu
const form = document.getElementById('form');
const input1 = document.getElementById('input1');
const output = document.getElementById('output');
const resultat = document.getElementById('result');
const err = document.getElementById('error');
const gagne = document.querySelector('.gagne');
const rejouer = document.getElementById('rejouer');
const chat = document.getElementById('chat');
const triche = document.getElementById('triche');
const definition = document.getElementById("definition");


/*
const commentJouer = document.getElementById('commentJouer');
function toggleExplic() {
	const explic = document.getElementById('explic');
	explic.classList.toggle("showExplic");
}
*/

// Afficher le mot sélectionné à des fins de triche
triche.textContent = myString;

// Gérer le clic sur le bouton "Définition"
chat.onclick = function() {
	triche.style.visibility= 'visible';
	rejouer.style.visibility = 'visible';
	definition.style.visibility = 'visible';

// Ouvrir une nouvelle fenêtre/onglet avec la définition du mot
	definition.addEventListener('click', () =>{
		window.open('https://www.cnrtl.fr/definition/'+ (myString) +'', 'définition');
	
	});
	};

    // Gérer la soumission de l'entrée de l'utilisateur
form.onsubmit = (e) => {
	e.preventDefault(); //empeche le rafraichissement de la page
	err.style.visibility = 'hidden';
	
	// Obtenir le mot soumis par l'utilisateur
	const proposition = input1.value.toUpperCase();

	// Vérifier si le mot soumis est dans les listes de mots
	const indice = proposition in window.DICO && proposition.length === myString.length;
	cpt++;
	
	
	if (!indice) {
		err.style.visibility = 'visible';
		
	}
	// Afficher la soumission de l'utilisateur dans la zone de sortie
	const first = proposition.charAt(0);
	const second = proposition.charAt(1);
	const third = proposition.charAt(2);
	const fourth = proposition.charAt(3);
	
	// Initialiser une variable pour compter les lettres correctement devinées
	let count = 0;

	// Comparer la soumission de l'utilisateur avec le mot sélectionné
	for (let i = 0; i < myString.length; i++) {
		if (proposition[i] == myString[i]) count++;
		console.log("count = "+ count );
	}
	
    // Afficher les commentaires en fonction de la justesse de la soumission de l'utilisateur
	
    if (!indice) {
		let lignes = document.createElement('div');
		lignes.classList.add("lignes");
		let texte = document.createElement("span");
		texte.classList.add("zero");
		lignes.innerText = proposition + " : "; 
		texte.innerText = "Inconnu";
		lignes.appendChild(texte);
		document.querySelector(".pave").appendChild(lignes);	

	}else{
		
		if
		(count == 0) {

			
			let lignes = document.createElement('div');
			lignes.classList.add("lignes");
			let texte = document.createElement("span");
			texte.classList.add("zero");
			lignes.innerText = proposition + " : "; 
			texte.innerText = count;
			lignes.appendChild(texte);
			document.querySelector(".pave").appendChild(lignes);	
		}
		if
		(count == 1) {

			let lignes = document.createElement('div');
			lignes.classList.add("lignes");
			let texte = document.createElement("span");
			texte.classList.add("une");
			lignes.innerText = proposition + " : "; 
			texte.innerText = count;
			lignes.appendChild(texte);
			document.querySelector(".pave").appendChild(lignes);	
		}
		if(count == 2) {
		//	resultat.innerHTML += count + " lettres" +'<br>' ;
			let lignes = document.createElement('div');
			lignes.classList.add("lignes");
			let texte = document.createElement("span");
			texte.classList.add("deux");
			lignes.innerText = proposition + " : "; 
			texte.innerText = count;
			lignes.appendChild(texte);
			document.querySelector(".pave").appendChild(lignes);	
		}
		if(count == 3) {
			let lignes = document.createElement('div');
			lignes.classList.add("lignes");
			let texte = document.createElement("span");
			texte.classList.add("trois");
			lignes.innerText = proposition + " : "; 
			texte.innerText = count;
			lignes.appendChild(texte);
			document.querySelector(".pave").appendChild(lignes);	
		}
    }
    // Afficher le message "Félicitations" si le mot est correctement deviné
	if (count == myString.length) {
		let lignes = document.createElement('div');
		lignes.classList.add("trois");
		let texte = document.createElement("span");
		texte.classList.add("trois");
		lignes.innerText = proposition + " : "; 
		texte.innerText = count;
		lignes.appendChild(texte);
		document.querySelector(".pave").appendChild(lignes);	
		gagne.style.visibility = 'visible';
		gagne.style.transition = "1s";
		rejouer.style.visibility = 'visible';
		definition.style.visibility = 'visible';
		
		definition.addEventListener('click', () =>{
			window.open('https://www.cnrtl.fr/definition/'+ (myString) +'', 'définition');
			
		});
	}
        // Effacer le contenu du champ d'entrée	input et affichage du nombre de tentatives
	input1.value = '';
	const nombreCoups = document.getElementById("nombreCoups");
	nombreCoups.innerHTML = " " + cpt + " coups ! Bravo !";
	
};


}

