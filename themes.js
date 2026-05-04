/* ============================================================
   THÈMES — SaintEx
   Chaque thème contient des listes de mots de 4 et 5 lettres
   tirés des dictionnaires principaux
   ============================================================ */

const THEMES = {

    cuisine: {
        label: '🍽️ Cuisine',
        4: ['ANIS','BABA','BEUR','BOCK','BOLS','BRIE','BRIN','CAFE','CAKE','CARI',
            'CHOU','COCO','COLA','CUBE','DORE','FETA','FLAN','FOND','FUME','GELE',
            'GRAS','LAIT','LARD','MALT','MARC','MIEL','MOKA','NOIX','ORGE','PAIN',
            'PATE','PORC','RHUM','ROTI','SAKE','SALE','SELS','SOJA','SOLE','THON',
            'THYM','TIAN','VEAU','ZEST'],
        5: ['BOEUF','BUCHE','CARRE','COEUR','CREME','CREPE','CUIRE','CUITE','DINDE',
            'ECUME','EPICE','FARCE','FIGUE','FRUIT','FUMEE','GARNI','HUILE','LATTE',
            'MELON','MEROU','MORUE','MOULE','OLIVE','POELE','POMME','RADIS','SAUCE',
            'SAUGE','SAUTE','SECHE','SIROP','SOUPE','TARTE','TASSE','TIEDE','TRUIE',
            'VIGNE','ZESTE']
    },

    nature: {
        label: '🌿 Nature',
        4: ['ALPE','AUBE','AUNE','BAIE','BOIS','BRIN','BUIS','DUNE','FLOT','FLOU',
            'FOND','GRES','HAIE','HALE','IRIS','LACS','LAME','LAVE','LUNE','MARE',
            'MONT','ONDE','ORGE','ORME','PICS','ROCS','ROSE','SEVE','SOLE','VENT'],
        5: ['ALGUE','ARBRE','BERGE','BRISE','BRUME','CRANE','DIGUE','ECUME','ETANG',
            'FLEUR','FORET','FRUIT','GIVRE','GLAND','GORGE','GRAIN','GRELE','GREVE',
            'HAVRE','HERBE','LANDE','LARGE','LENTE','NEIGE','PLAGE','ROCHE','SABLE',
            'TERRE','VAGUE','VIGNE']
    },

    sport: {
        label: '⚽ Sport',
        4: ['BOXE','FOOT','GOLF','JUDO','KART','MOTO','PARI','POLO','RACE','RAID',
            'RING','RUSH','SAUT','SKIS','SURF','TEAM','TREK','TURF','VELO','SLAM'],
        5: ['BALLE','BOXER','DROIT','ELITE','GARDE','GRADE','LUTTE','PISTE','PLEIN',
            'POINT','PRISE','RECUL','RIDER','RONDE','ROUGE','ROULE','RUGBY','SPORT',
            'SUITE','TALON','TITRE','TRACE','TRAME','TRAPU','TREVE','TRIER','TROUE',
            'ULTRA']
    },

    animaux: {
        label: '🐾 Animaux',
        4: ['ANES','BOAS','BOUC','BUSE','CANE','CERF','CHAT','COQS','FAON','GEAI',
            'GNOU','GRUE','HASE','IBIS','JARS','LAMA','LION','LOIR','LOUP','LYNX',
            'MULE','NAJA','OIES','OURS','PIES','PUMA','RATS','VEAU'],
        5: ['AIGLE','BARGE','BICHE','BISON','CARPE','COBRA','DINGO','FAUVE','GENET',
            'GRIVE','HERON','LAPIN','LOTTE','MERLE','MILAN','OKAPI','ORVET','PANDA',
            'TAPIR','TIGRE','VARAN','VISON','ZEBRE']
    },

    vetements: {
        label: '👗 Vêtements',
        4: ['CAPE','COLS','DRAP','GANT','JEAN','JUPE','PULL','ROBE','SLIP','TUTU'],
        5: ['BOTTE','CACHE','CALOT','CAPOT','CHALE','COTTE','DUVET','FICHU','GILET',
            'HABIT','LACET','LINGE','PARKA','SHORT','TALON','TISSU','TOILE','TENUE',
            'VESTE','VOILE']
    },

    corps: {
        label: '🫀 Corps',
        4: ['AINE','BILE','BRAS','CILS','DENT','JOUE','LOBE','MAIN','NASE','OEIL',
            'PEAU','PIED','POIL','RATE','REIN','SANG','SEIN','TETE','YEUX'],
        5: ['COEUR','CORPS','COUDE','CRANE','DENTS','DOIGT','GENOU','GORGE','JAMBE',
            'LEVRE','MOLLET','NUQUE','ONGLE','ORTEIL','TEMPE','TIBIA','TORSE','VEINE']
    },

    maison: {
        label: '🏠 Maison',
        4: ['CAVE','CLEF','CLES','COUR','DECO','DOME','LOGE','MURS','PAVE','SILO',
            'TOIT','TOLE'],
        5: ['CADRE','DALLE','DEPOT','FOYER','HOTEL','LOQUE','MECHE','ORDRE','PORTE',
            'SOCLE','TABLE','TOILE','VOILE','VOLET']
    },

    mer: {
        label: '🌊 Mer',
        4: ['BAIE','BORD','BOUE','BRAS','CALE','COTE','DUNE','FLOT','FOND','HUNE',
            'LAME','MARE','ONDE','RADE'],
        5: ['ALGUE','ANCRE','BARGE','BRISE','BRUME','ECUME','OCEAN','PLAGE','ROCHE',
            'SABLE','VAGUE','VOILE']
    }
};

/* Construire le dico de jeu pour un thème donné */
function construireTheme(nbLettres, themeKey) {
    const theme = THEMES[themeKey];
    if (!theme) return [];
    return theme[nbLettres] || [];
}
