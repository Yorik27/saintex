/*
 * SaintEx — Jeu de lettres
 * 4 dictionnaires : 4 lettres (facile/difficile), 5 lettres (facile/difficile)
 * Le dico "difficile" = facile + supplément
 */

/* ============================================================
   DICTIONNAIRES 4 LETTRES
   ============================================================ */

const dico4_facile = ['ABAT','ABBE','ABOI','ABRI','ABUS','ACHE','ACME','ACNE','ACRE','ACTE','ACTU','ADOS','AFIN','AFRO','AGES','AGIR','AIDE','AIGU','AILE','AIME','AINE','AIRE','AIRS','AISE','ALFA','ALLA','ALLO','ALPE','ALTO','ALUN','AMAS','AMEN','AMER','AMES','AMIE','AMIS','ANAL','ANAR','ANES','ANGE','ANIS','ANON','ANSE','ANUS','AOUT','APRE','APTE','ARIA','ARME','ARTS','ATRE','AUBE','AUGE','AUNE','AURA','AUTO','AVAL','AVEC','AVEN','AVEU','AVEZ','AVIS','AZUR','BABA','BABY','BACS','BAIE','BAIL','BAIN','BALE','BALS','BANC','BANG','BANS','BARS','BASE','BATI','BATS','BAUX','BAVE','BEAT','BEAU','BEBE','BECS','BEDE','BENI','BERK','BETA','BETE','BEUR','BIBI','BIDE','BIEF','BIEN','BILE','BISE','BLED','BLEU','BLOC','BLOG','BOAS','BOBO','BOCK','BOIS','BOIT','BOLS','BOND','BONI','BONS','BORD','BOSS','BOUC','BOUE','BOUM','BOUT','BOXE','BOYS','BRAS','BREF','BRIE','BRIK','BRIN','BRIO','BRIS','BROC','BROU','BRUN','BRUT','BUGS','BUIS','BURE','BUSE','BUSH','BUTS','BUZZ','CACA','CADE','CAFE','CAGE','CAKE','CALE','CAME','CAMP','CANE','CAPE','CARI','CARS','CASA','CASE','CASH','CAVE','CECI','CEDE','CELA','CENT','CERF','CEUX','CHAR','CHAT','CHEF','CHER','CHEZ','CHIC','CHOC','CHOU','CIEL','CILS','CIME','CINE','CINQ','CIRE','CITE','CLAP','CLEF','CLES','CLIC','CLIM','CLIN','CLIP','CLOS','CLOU','CLUB','COCA','COCO','COCU','CODA','CODE','COIN','COKE','COLA','COLO','COLT','COMA','CONE','CONS','COOL','COQS','CORS','COSY','COTE','COUP','COUR','COUT','CRAC','CRAN','CREE','CRIC','CRIE','CRIN','CRIS','CROC','CRUE','CUBA','CUBE','CUBI','CUIR','CUIT','CURE','CUVE','CYAN','DADA','DAIM','DAME','DANS','DARD','DATA','DATE','DEAL','DECA','DECI','DECO','DEFI','DEJA','DELA','DEMI','DEMO','DENI','DENT','DEUX','DICO','DIEU','DIME','DINE','DIRA','DIRE','DITE','DITS','DIVA','DOCK','DOCS','DOCU','DODO','DODU','DOIS','DOIT','DOJO','DOME','DONC','DONS','DONT','DOPE','DORE','DORS','DORT','DOSE','DOTE','DOUE','DOUX','DRAP','DROP','DUCS','DUEL','DUNE','DUOS','DUPE','DURE','DURS','EAUX','ECHO','EDAM','EDEN','EDIT','EGAL','ELAN','ELFE','ELLE','ELUE','ELUS','EMIR','EMIS','EMIT','EMOI','EMUE','EMUS','EPEE','EPIS','ERRE','ETAL','ETAT','ETAU','ETES','ETRE','ETUI','EURO','EXAM','EXIL','EXIT','EXPO','FACE','FADA','FADE','FADO','FAIM','FAIS','FAIT','FANA','FANE','FANS','FAON','FARD','FAUT','FAUX','FEES','FELE','FEND','FERA','FERS','FETA','FETE','FEVE','FIEF','FIEL','FIER','FIGE','FILA','FILE','FILM','FILS','FINE','FINI','FINS','FION','FISC','FIXE','FLAN','FLIC','FLIP','FLOP','FLOT','FLOU','FLUO','FLUX','FOHN','FOIE','FOIN','FOIS','FOLK','FOND','FONT','FOOT','FORT','FOUR','FOUS','FOUT','FRET','FRIC','FRIT','FUEL','FUIR','FUIS','FUIT','FULL','FUMA','FUME','FUNK','GAGA','GAGE','GAGS','GAIE','GAIN','GALA','GALE','GANG','GANT','GARE','GARS','GATE','GAVE','GAZE','GEAI','GEEK','GELE','GELS','GEMI','GENE','GENS','GERE','GIGA','GINS','GIRL','GITE','GLAS','GLUE','GNON','GNOU','GOAL','GOBE','GODE','GOGO','GOJI','GOLF','GOND','GONE','GONG','GOUT','GRAS','GREC','GRES','GRIL','GRIP','GRIS','GROG','GROS','GRUE','GUET','GYMS','HAIE','HAIR','HAKA','HALE','HALL','HALO','HARD','HATE','HAUT','HEIN','HIER','HIFI','HITS','HOLA','HOME','HOMO','HORS','HOTE','HOUX','HUBS','HUER','HUIS','HUIT','HUME','HUNE','IBIS','IDEE','IDEM','ILES','ILOT','IMAM','INCA','INDE','INFO','INOX','INSU','IODE','IVRE','JACK','JADE','JAIS','JAVA','JAZZ','JEAN','JEEP','JERK','JETE','JETS','JEUX','JOBS','JOIE','JOJO','JOLI','JOUE','JOUR','JUDO','JUGE','JUIF','JUIN','JUPE','JURE','JURY','JUTE','KAKI','KART','KEPI','KIDS','KIKI','KILO','KILT','KINE','KITS','KIWI','LABO','LACE','LACS','LADY','LAIC','LAID','LAIE','LAIT','LAMA','LAME','LAPS','LARD','LAVA','LAVE','LEDS','LEGO','LEGS','LENT','LEST','LEUR','LIED','LIEN','LIER','LIEU','LIFT','LIMA','LIME','LINO','LION','LIRE','LITS','LIVE','LOBE','LOCH','LOCO','LOFT','LOGE','LOGO','LOIN','LOIR','LOIS','LOLO','LOMO','LONG','LOOK','LORD','LORS','LOTI','LOTO','LOTS','LOUE','LOUP','LOVE','LUGE','LUIT','LUMP','LUNE','LUTE','LUTH','LUXE','LYNX','LYRE','MAGE','MAIL','MAIN','MAIS','MAKI','MALE','MALT','MAMA','MAMY','MARC','MARE','MARI','MARK','MARS','MASO','MATE','MATH','MATS','MAXI','MAYO','MECS','MEGA','MELE','MELO','MEME','MEMO','MENE','MENU','MERE','MESS','META','METS','MEUF','MEUH','MIAM','MIDI','MIEL','MIEN','MILE','MIME','MIMI','MINE','MINI','MIRE','MISE','MISO','MISS','MITE','MIXE','MODE','MOIS','MOKA','MOLE','MOME','MONO','MONT','MORS','MORT','MOTO','MOTS','MOUE','MUER','MUES','MUET','MUGS','MULE','MUNI','MURE','MURS','MUSC','MUSE','MUST','NAGE','NAIF','NAIN','NAIS','NAIT','NAJA','NANA','NARD','NASE','NAZE','NAZI','NEMS','NENE','NEON','NERF','NETS','NEUF','NEVE','NEWS','NIDS','NIER','NOCE','NOEL','NOIE','NOIR','NOIX','NOMS','NONE','NONO','NORD','NOTA','NOTE','NOUS','NUIT','NULS','OBUS','OCRE','OEIL','OEUF','OGRE','OIES','ONCE','ONDE','ONYX','ONZE','OPEN','OPUS','ORAL','ORDI','ORGE','ORME','OURS','OUZO','OVIN','OVNI','PACK','PACS','PAGE','PAIE','PAIN','PAIR','PAIX','PALE','PALU','PANE','PANS','PAON','PAPA','PAPE','PAPI','PAPY','PARA','PARC','PARE','PARI','PARS','PART','PARU','PASS','PATE','PAVE','PAYE','PAYS','PEAU','PELE','PEND','PERE','PERI','PEUR','PEUT','PEUX','PIAF','PICS','PIED','PIEU','PILE','PINE','PINS','PION','PIPE','PIPI','PIRE','PLAN','PLAT','PLIE','PLUS','PNEU','POIL','POIS','POLE','POLI','POLO','POND','PONT','POOL','POPE','PORC','PORT','POSE','POTE','POTS','POUF','POUR','PRES','PRET','PRIE','PRIS','PRIT','PRIX','PROF','PROS','PUBS','PUCE','PUIS','PULL','PUMA','PUNI','PUNK','PURE','PURS','PUTE','PUTT','QUAD','QUAI','QUEL','QUID','QUIZ','QUOI','RACE','RACK','RADE','RAFT','RAGE','RAID','RAIE','RAIL','RAJA','RAKI','RAME','RAMI','RANG','RAPE','RAPT','RARE','RASE','RATA','RATE','RATS','RAVE','RAVI','REAC','REAL','RECU','REEL','REIN','RELU','REND','REPS','REVE','REVU','RHUM','RIDE','RIEN','RIFF','RIME','RING','RIRE','RITE','RIVE','ROBE','ROCK','RODE','ROIS','ROLE','ROND','ROOF','ROSE','ROTI','ROUE','ROUX','RUDE','RUEE','RUER','RUES','RUNE','RUSE','RUSH','SACS','SADO','SAGA','SAGE','SAIN','SAIS','SAIT','SAKE','SALE','SALI','SAMU','SANA','SANG','SANS','SAPE','SARI','SAUF','SAUT','SAXE','SAXO','SCAN','SCAT','SCIE','SEAU','SECU','SEIN','SELF','SELS','SENS','SENT','SEPT','SERS','SERT','SETS','SEUL','SEVE','SEXE','SEXY','SHAH','SHIT','SHOW','SIDA','SIEN','SILO','SIRE','SITE','SKIS','SLAM','SLIM','SLIP','SLOW','SMOG','SNOB','SODA','SOFA','SOFT','SOIE','SOIF','SOIN','SOIR','SOIS','SOIT','SOJA','SOLE','SOLO','SONS','SONT','SORS','SORT','SOTS','SOUK','SOUL','SOUS','SPAM','SPAS','SPOT','STAR','STOP','SUBI','SUCE','SUIE','SUIS','SUIT','SUMO','SURE','SURF','TACO','TACT','TAGS','TAIN','TAIS','TAIT','TALC','TANK','TANT','TAON','TAPE','TAPI','TARD','TARE','TATA','TATI','TAUX','TAXE','TAXI','TEAM','TECK','TEES','TELE','TELS','TEND','TENU','TEST','TETE','TETU','TEUF','THAI','THON','THYM','TIEN','TIGE','TILT','TIPI','TIRE','TIRS','TITI','TOFU','TOGE','TOIT','TOLE','TOME','TOND','TONG','TONS','TOPO','TORD','TORT','TOTO','TOUR','TOUS','TOUT','TOUX','TRAC','TRAM','TREK','TRES','TRIO','TRIP','TRIS','TROC','TROP','TROT','TROU','TRUC','TSAR','TUBA','TUBE','TUER','TURC','TURF','TUTU','TYPE','TYPO','UNES','UNIE','UNIR','UNIS','UNIT','URGE','URNE','USER','VAIN','VALU','VAMP','VASE','VAUT','VEAU','VECU','VELO','VEND','VENT','VENU','VERS','VERT','VETO','VEUF','VEUT','VEUX','VICE','VIDE','VIES','VINS','VINT','VIOL','VIRE','VISA','VISE','VISU','VITE','VIVE','VOEU','VOIE','VOIR','VOIS','VOIT','VOIX','VOLE','VOLS','VOLT','VOMI','VONT','VOTE','VOUE','VOUS','VRAC','VRAI','VUES','WATT','WIFI','WIKI','YARD','YENS','YETI','YEUX','YOGA','YOGI','YOYO','ZEBU','ZELE','ZERO','ZINC','ZIZI','ZONA','ZONE','ZOOM','ZOOS','ZOUK','ZOZO'];

const dico4_suppl = ['ABLE','AGIO','ALOI','ANKH','APEX','ARUM','ASTI','AXIS','BARD','BATH','BAUD','BEGU','BIGE','BILL','BOBS','BOGS','BOOK','BOOM','BRAN','BURG','CANT','CEPE','CLAM','COBS','CZAR','DAIL','DEME','DEYS','DOLE','DOMS','DONA','DRAG','DUAL','DUIT','DYKE','DYNE','EMBU','EVOE','FICS','FLET','GABA','GADE','GAUR','GLEY','GORD','GOUM','GRAM','HADJ','HAIK','HART','HAST','HAVI','HILE','HOCA','HOTU','HYPE','IGUE','IXIA','JAIN','JALE','JANS','JOTA','JUBE','KADI','KALI','KAMI','KANA','KANS','KAVA','KAWA','KICK','KIEF','KINA','KORE','KOTO','KRAK','LACK','LARI','LEMS','LOBS','LODS','LYSE','MACS','MAIA','MALI','MAME','MANA','MANS','MAZE','MILS','MIRS','MOCO','MOLY','MOXA','MUGE','MYES','NAOS','NIXE','NOME','NOVA','NOVE','OBEL','OGAM','OLIM','ORDO','ORIN','ORLE','PACA','PEON','PHOT','PIAN','PIER','PITE','PIVE','PLOC','PRAO','PUNA','PUPE','QUIA','RABE','RAIA','RANZ','RASH','REGS','ROBS','ROUF','RUPE','SAKI','SATI','SHED','SIMA','SIPO','SIUM','SKIP','SOMA','SONE','SORE','SPIC','SPIN','TAOS','TARO','TAUD','TELL','TINE','TOLU','TORR','TORY','TUFS','TUNE','TUPI','UPAS','URUS','UVAL','VARS','VEDA','VELD','VENE','VINA','VINE','VIOC','WADS','YASS','YAWL','YODS','ZANI','ZEES','ZEND','ZOES'];

/* ============================================================
   DICTIONNAIRES 5 LETTRES
   ============================================================ */

const dico5_facile = ['ABIME','ABORD','ABRIS','ACHAT','ACIDE','ACIER','ACTES','ACTIF','ADIEU','ADORE','ADULE','AGENT','AGILE','AGITE','AGREE','AIDES','AIGLE','AILES','AIMER','AIMES','AIOLI','ALBUM','ALGUE','ALLEE','ALORS','AMANT','AMBRE','AMENE','AMERE','AMIES','AMOUR','AMPLE','AMUSE','ANCRE','ANIME','ANNEE','AORTE','APERO','APPEL','APPUI','APRES','ARBRE','ARCHE','ARDUE','ARMES','ARRET','ASSEZ','ASSIS','ASTRE','ATOME','ATONE','ATOUT','AUDIO','AUDIT','AUSSI','AUTEL','AUTRE','AVALE','AVARE','AVIDE','AVION','AVISE','AVOIR','AVOUE','BAGNE','BAGUE','BALLE','BANAL','BANDE','BARBU','BARGE','BARON','BARRE','BASSE','BATON','BATTU','BAZAR','BELLE','BERGE','BETON','BICHE','BIGOT','BILAN','BLANC','BLASE','BLEME','BLOND','BLUES','BLUFF','BOCAL','BOEUF','BOIRE','BOMBE','BONDE','BONNE','BONUS','BOTTE','BOUDE','BOUEE','BOUGE','BOULE','BOURG','BOXER','BRAVE','BREVE','BRIDE','BRISE','BRODE','BRUME','BRUNE','BUCHE','BULLE','BURIN','BUSTE','CABLE','CACHE','CADRE','CALME','CANNE','CANON','CANOT','CAPOT','CARAT','CARRE','CARTE','CAUSE','CEDER','CELLE','CERNE','CHAMP','CHANT','CHAOS','CHAUD','CHIEN','CHOSE','CLAIR','CLONE','CLOSE','COEUR','COHUE','COLLE','COMME','COMTE','CONGE','CONTE','CORDE','CORPS','CORSE','COUDE','COUPE','COURT','CRANE','CREUX','CRIER','CRIME','CROIX','CRUEL','CUIRE','CUITE','CULOT','CUMUL','DAGUE','DALLE','DANSE','DEBIT','DEBUT','DENSE','DEPOT','DERBY','DESIR','DETTE','DEVIN','DIGUE','DINDE','DINER','DIODE','DISCO','DIVIN','DROIT','DROLE','DRONE','DUVET','ECART','ECLAT','ECOLE','ECRAN','ECRIT','ECUME','EFFET','EGOUT','ELEVE','EMOIS','ENCRE','ENFER','ENJEU','ENTRE','ENVIE','EPAIS','EPAVE','EPICE','EPINE','EPOUX','ESSOR','ETAGE','ETANG','ETAPE','ETUDE','EVADE','EVEIL','EXACT','FABLE','FACHE','FAIRE','FAITE','FAITS','FARCE','FASTE','FAUTE','FAUVE','FEINT','FERME','FERRE','FESSE','FETER','FICHE','FICHU','FIERE','FIGER','FIGUE','FILET','FILLE','FLAIR','FLEUR','FLORE','FOLIE','FONDS','FONTE','FORCE','FORGE','FOSSE','FOUET','FOULE','FRAIS','FRANC','FREIN','FRERE','FRIME','FRUIT','FUGUE','FUMET','FUSEE','FUTUR','GAGNE','GALON','GARDE','GARNI','GENOU','GENRE','GILET','GIVRE','GLAND','GLOBE','GOMME','GORGE','GOSSE','GOUTE','GRACE','GRADE','GRAIN','GRAND','GRAVE','GRELE','GREVE','GRIME','GRISE','GUIDE','GUISE','HABIT','HAVRE','HERBE','HEROS','HEURE','HIBOU','HORDE','HOTEL','HUILE','HUMUS','HYMNE','IDOLE','IMAGE','IMPUR','INDEX','INDUE','INEPT','INTER','INTRO','JAMBE','JEUNE','JOUER','JOUET','JUGER','JUMBO','JUPON','JURER','JURON','JUSTE','KAYAK','LACET','LAIDE','LANCE','LANDE','LARGE','LASER','LATTE','LAVIS','LECON','LEGER','LENTE','LEVER','LIBRE','LIEGE','LINGE','LISSE','LITRE','LIVRE','LOGER','LOQUE','LOUER','LOUPE','LOYAL','LUEUR','LUIRE','LUTTE','MAGIE','MALIN','MALLE','MANGE','MARGE','MARIN','MASSE','MAUVE','MENER','MERCI','METRE','MEUTE','MINCE','MIXTE','MONDE','MONTE','MORUE','MOTIF','MOULE','MOYEN','MULET','MUSEE','MYOPE','MYTHE','NAPPE','NATTE','NAVAL','NEIGE','NOBLE','NOCES','NOIRE','NORME','NOTER','NOTRE','NOUER','NUAGE','NUIRE','ODEUR','OFFRE','OLIVE','OMBRE','OPERA','ORDRE','ORGUE','ORNER','OTAGE','OUATE','OURSE','OUTRE','OUVRE','PAIRE','PALME','PARCE','PARER','PARLE','PARMI','PASSE','PATTE','PAUSE','PAYER','PEINE','PERCE','PERTE','PHASE','PIANO','PIECE','PIEGE','PISTE','PIXEL','PLACE','PLAGE','PLANE','PLATE','PLEIN','PLIER','PLUIE','PLUME','POCHE','POELE','POIDS','POINT','POKER','POLAR','POMME','PONTE','PORTE','POSER','POULE','PRISE','PROSE','PURGE','QUETE','QUEUE','RADAR','RADIO','RADIS','RAFLE','RAIDE','RAMPE','RANGE','RASEE','RASER','RATIO','RAVIN','RECIT','RECUL','REFUS','REGLE','REJET','RELAX','REPAS','REPOS','RETRO','REVER','REVUE','RICHE','RIDER','RIEUR','ROBOT','ROCHE','ROMAN','RONDE','RONGE','ROUGE','ROULE','ROUTE','RUGBY','RUINE','RUSSE','SABLE','SABOT','SAUCE','SAUGE','SAULE','SAUTE','SAUVE','SCEAU','SCENE','SECHE','SELON','SEMER','SERGE','SERIE','SERRE','SERUM','SERVE','SIEGE','SIGNE','SIROP','SOBRE','SOCLE','SOEUR','SOMME','SONDE','SONGE','SORTE','SOUCI','SOUDE','SOUPE','SOURD','SPORT','SUITE','SUPER','TABLE','TACHE','TALON','TARDE','TARTE','TASSE','TAUPE','TEINT','TEMPE','TEMPS','TENIR','TENTE','TERME','TERRE','TIEDE','TIENS','TIENT','TIRET','TITRE','TOILE','TOMBE','TORSE','TRACE','TRAME','TRAPU','TREVE','TRIER','TRIPE','TRONE','TROUE','TRUIE','TUILE','TURBO','TYRAN','ULTRA','USAGE','USINE','USURE','UTILE','VAGUE','VALET','VALSE','VALVE','VEINE','VENIR','VENTE','VENUE','VERGE','VERSE','VESTE','VEUVE','VIDEO','VIEUX','VIGNE','VISER','VISEE','VITRE','VIVRE','VOILE','VOLEE','VOLET','VOTER','VOUER','VOUTE','YACHT','ZEBRE','ZESTE'];

const dico5_suppl = ['ABCES','ACERB','ALESE','AMBLE','ARETE','ATOLL','AZYME','BAFFE','BARDE','BERME','BERNE','BESAC','BETEL','BIJOU','BIOME','BISON','BLINI','BOCCE','BOGEY','BONZE','BORAX','BOYAU','BUGLE','BULBE','BUTOR','CABOT','CAIEU','CALAO','CAMEE','CAMPO','CAPRE','CAREX','CASTE','CAURI','CHAPE','CHAUX','CHYLE','CIPPE','CIRRE','CLAIE','COLZA','COPAL','CORNU','COXAL','CRABE','CROUP','CULEX','CYCAS','DARSE','DECOR','DECRI','DELIT','DELTA','DEUCE','DIETE','DIGIT','DILUE','DIVOT','DOGME','DOLCE','DOLME','DORIS','DOUVE','DROME','DUCAT','EDILE','ELITE','EMERI','EMULE','ENCAS','ENCAN','ENFEU','ENTAM','ENVOI','EPODE','EPURE','ERGOT','ESPAR','ETALE','EVASE','EXODE','EXPAT','FADET','FAGNE','FALOT','FASCE','FAVEL','FECAL','FELON','FENEC','FERAL','FIOLE','FLUET','FOEHN','FOLIO','FORET','FOYER','FRELE','FRENE','FRISE','FURET','GAFFE','GAINE','GAIZE','GALOP','GAMME','GAUFE','GAULE','GENET','GERCE','GESTE','GIBET','GIBUS','GLANE','GLEBE','GLOME','GODET','GOLEM','GOUGE','GOURE','GRIOT','GUERE','HANAP','HARET','HERPE','HILUM','HOTTE','HUARD','HUPPE','ICTUS','IMAGO','INFUS','ISARD','JABOT','JARRE','JASPE','JAVEL','JETON','JOUAL','JOUTE','KNOUT','KRACH','LABEL','LABRE','LACIS','LAITE','LAIUS','LAMPE','LARVE','LAXER','LECHE','LEMME','LEPRE','LESTE','LIARD','LILAS','LIMON','LODEN','LOPIN','LOUET','LURON','MACLE','MAGMA','MAOUS','MAREE','MARTE','MATIR','MAZOT','MECHE','MEDOC','MELEE','MELON','MEROU','METIS','MOREL','MOTET','MOULT'];

/* ============================================================
   ÉTAT GLOBAL
   ============================================================ */

let partieEnCours = false;
let dicoValidation = null;
let motSecret = '';
let nbLettresPartie = 4;
let cpt = 0;

/* ============================================================
   FONCTIONS
   ============================================================ */

function demarrerPartie(nbLettres, niveau) {
    nbLettresPartie = nbLettres;

    const dicoFacile = (nbLettres === 4) ? dico4_facile : dico5_facile;
    const dicoSuppl  = (nbLettres === 4) ? dico4_suppl  : dico5_suppl;

    dicoValidation = new Set([...dicoFacile, ...dicoSuppl]);

    const dicoPioche = (niveau === 'difficile')
        ? [...dicoFacile, ...dicoSuppl]
        : [...dicoFacile];

    motSecret = dicoPioche[Math.floor(Math.random() * dicoPioche.length)];
    cpt = 0;
    partieEnCours = true;

    document.getElementById('nav').style.display        = 'none';
    document.getElementById('zone-jeu').style.display   = 'flex';
    document.getElementById('pave').innerHTML            = '';
    document.getElementById('error').style.visibility   = 'hidden';
    document.getElementById('triche').style.visibility  = 'hidden';
    document.getElementById('triche').textContent       = motSecret;
    document.getElementById('gagne').style.visibility   = 'hidden';
    document.getElementById('rejouer').style.display    = 'none';
    document.getElementById('btn-retour').style.display = 'inline-block';

    const niveauLabel = (niveau === 'difficile') ? 'Difficile' : 'Facile';
    document.getElementById('titrePartie').textContent =
        nbLettres + ' lettres · ' + niveauLabel;

    const input = document.getElementById('input1');
    input.maxLength   = nbLettres;
    input.placeholder = 'Mot de ' + nbLettres + ' lettres';
    input.value       = '';
    input.focus();
}

function retourAccueil() {
    partieEnCours = false;
    document.getElementById('zone-jeu').style.display   = 'none';
    document.getElementById('nav').style.display        = 'block';
    document.getElementById('titrePartie').textContent  = '';
    document.getElementById('btn-retour').style.display = 'none';
}

function choixprop() {
    const nbLettres = parseInt(document.querySelector('input[name="longueur"]:checked').value);
    const niveau    = document.querySelector('input[name="niveau"]:checked').value;
    demarrerPartie(nbLettres, niveau);
}

/* ============================================================
   INIT — attaché une seule fois au chargement
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (!partieEnCours) return;

        const input = document.getElementById('input1');
        const err   = document.getElementById('error');
        err.style.visibility = 'hidden';

        const proposition = input.value.toUpperCase().trim();

        if (proposition.length !== nbLettresPartie) {
            err.textContent      = 'Le mot doit faire ' + nbLettresPartie + ' lettres';
            err.style.visibility = 'visible';
            return;
        }

        if (!dicoValidation.has(proposition)) {
            err.textContent      = 'Ce mot n\'appartient pas au dictionnaire';
            err.style.visibility = 'visible';
            input.value = '';
            return;
        }

        cpt++;

        let count = 0;
        for (let i = 0; i < motSecret.length; i++) {
            if (proposition[i] === motSecret[i]) count++;
        }

        // Créer la ligne
        const pave  = document.getElementById('pave');
        const ligne = document.createElement('div');
        const score = document.createElement('span');
        ligne.classList.add('lignes');

        if      (count === 0)                   score.classList.add('zero');
        else if (count === 1)                   score.classList.add('une');
        else if (count === 2)                   score.classList.add('deux');
        else if (count === nbLettresPartie - 1) score.classList.add('trois');
        else if (count === nbLettresPartie)     score.classList.add('quatre');

        ligne.textContent = proposition + ' : ';
        score.textContent = count;
        ligne.appendChild(score);

        // Insérer EN HAUT de la liste
        pave.insertBefore(ligne, pave.firstChild);

        // Victoire
        if (count === nbLettresPartie) {
            ligne.classList.add('degrade');
            document.getElementById('nombreCoups').textContent =
                cpt + ' coup' + (cpt > 1 ? 's' : '') + ' !';
            document.getElementById('gagne').style.visibility = 'visible';
            document.getElementById('rejouer').style.display  = 'inline-block';
            partieEnCours = false;
        }

        input.value = '';
        input.focus();
    });

    document.getElementById('chat').addEventListener('click', function() {
        document.getElementById('triche').style.visibility = 'visible';
        document.getElementById('rejouer').style.display   = 'inline-block';
        partieEnCours = false;
    });

});
