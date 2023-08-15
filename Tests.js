/*______________ Tableau des mots valides ____________________
Il y en a 2 parce qu'il y aura une version facile (noms communs, verbes et adjectifs usuels) et une difficile (mots admis au scrabble)
__________________A retravailler __________________________*/

let dico01 = ['ABAT', 'ABBE', 'ABEE', 'ABER', 'ABOI', 'ABOT', 'ABRI', 'ABUS', 'ACCU', 'ACES', 'ACHE', 'ACME', 'ACNE', 'ACRA', 'ACRE', 'ACTA', 'ACTE', 'ACTU', 'ADOS', 'AEDE', 'AERA', 'AERE', 'AFIN', 'AFRO', 'AGEE', 'AGES', 'AGIE', 'AGIO', 'AGIR', 'AGIS', 'AGIT', 'AHAN', 'AIDA', 'AIDE', 'AIES', 'AIGU', 'AILE', 'AILS', 'AIMA', 'AIME', 'AINE', 'AIRA', 'AIRE', 'AIRS', 'AISE', 'ALEA', 'ALES', 'ALFA', 'ALLA', 'ALLE', 'ALLO', 'ALOI', 'ALPE', 'ALTI', 'ALTO', 'ALUN', 'AMAS', 'AMEN', 'AMER', 'AMES', 'AMIE', 'AMIS', 'AMUI', 'ANAL', 'ANAR', 'ANAS', 'ANEE', 'ANES', 'ANGE', 'ANIS', 'ANKH', 'ANON', 'ANSE', 'ANTE', 'ANUS', 'AOUT', 'APEX', 'APIS', 'APRE', 'APTE', 'ARAC', 'ARAK', 'ARAS', 'ARCS', 'ARDU', 'AREC', 'ARES', 'AREU', 'ARIA', 'ARMA', 'ARME', 'ARTS', 'ARTY', 'ARUM', 'ASES', 'ASIC', 'ASIN', 'ASPE', 'ASPI', 'ASSE', 'ASTE', 'ASTI', 'ATRE', 'AUBE', 'AUGE', 'AULX', 'AUNE', 'AURA', 'AUTO', 'AVAL', 'AVEC', 'AVEN', 'AVEU', 'AVEZ', 'AVIS', 'AXAI', 'AXAS', 'AXAT', 'AXEE', 'AXEL', 'AXER', 'AXES', 'AXEZ', 'AYEZ', 'AZUR', 'BABA', 'BABY', 'BACS', 'BADA', 'BADE', 'BAIE', 'BAIL', 'BAIN', 'BAIS', 'BALE', 'BALS', 'BANC', 'BANG', 'BANI', 'BANS', 'BARS', 'BASA', 'BASE', 'BATA', 'BATE', 'BATI', 'BATS', 'BAUX', 'BAVA', 'BAVE', 'BAYA', 'BAYE', 'BEAI', 'BEAS', 'BEAT', 'BEAU', 'BEBE', 'BECS', 'BEDE', 'BEER', 'BEES', 'BEEZ', 'BELA', 'BELE', 'BELS', 'BENI', 'BERK', 'BERS', 'BETA', 'BETE', 'BEUR', 'BEYS', 'BIBI', 'BICS', 'BIDE', 'BIEF', 'BIEN', 'BILA', 'BILE', 'BINA', 'BINE', 'BING', 'BIOS', 'BIPA', 'BIPE', 'BIPS', 'BISA', 'BISE', 'BITA', 'BITE', 'BLED', 'BLES', 'BLET', 'BLEU', 'BLOC', 'BLOG', 'BLOT', 'BOAS', 'BOBO', 'BOCK', 'BOER', 'BOIS', 'BOIT', 'BOLS', 'BOME', 'BOND', 'BONI', 'BONS', 'BORD', 'BORE', 'BOSS', 'BOTS', 'BOUC', 'BOUE', 'BOUH', 'BOUM', 'BOUS', 'BOUT', 'BOXA', 'BOXE', 'BOYS', 'BRAI', 'BRAS', 'BREF', 'BRIE', 'BRIK', 'BRIN', 'BRIO', 'BRIS', 'BROC', 'BROU', 'BRUI', 'BRUN', 'BRUS', 'BRUT', 'BUEE', 'BUES', 'BUGS', 'BUIS', 'BURE', 'BUSE', 'BUSH', 'BUTA', 'BUTE', 'BUTS', 'BUZZ', 'CACA', 'CADE', 'CADI', 'CAFE', 'CAGE', 'CAID', 'CAKE', 'CALA', 'CALE', 'CALS', 'CAMA', 'CAME', 'CAMP', 'CANA', 'CANE', 'CAPA', 'CAPE', 'CARI', 'CARS', 'CARY', 'CASA', 'CASE', 'CASH', 'CATI', 'CAVA', 'CAVE', 'CECI', 'CEDA', 'CEDE', 'CELA', 'CELE', 'CENE', 'CENS', 'CENT', 'CEPE', 'CEPS', 'CERF', 'CEUX', 'CHAI', 'CHAR', 'CHAS', 'CHAT', 'CHEF', 'CHER', 'CHEZ', 'CHIA', 'CHIC', 'CHIE', 'CHIP', 'CHOC', 'CHOU', 'CHTI', 'CHUE', 'CHUS', 'CHUT', 'CIAO', 'CIEL', 'CILS', 'CIME', 'CINE', 'CINQ', 'CIRA', 'CIRE', 'CITA', 'CITE', 'CIVE', 'CLAC', 'CLAN', 'CLAP', 'CLEF', 'CLES', 'CLIC', 'CLIM', 'CLIN', 'CLIP', 'CLOS', 'CLOT', 'CLOU', 'CLUB', 'COCA', 'COCO', 'COCU', 'CODA', 'CODE', 'COIN', 'COIS', 'COIT', 'COKE', 'COLA', 'COLO', 'COLS', 'COLT', 'COMA', 'CONE', 'CONS', 'COOL', 'COQS', 'CORS', 'COSY', 'COTA', 'COTE', 'COUD', 'COUP', 'COUR', 'COUS', 'COUT', 'CRAC', 'CRAN', 'CREA', 'CREE', 'CRET', 'CRIA', 'CRIC', 'CRIE', 'CRIN', 'CRIS', 'CROC', 'CRUE', 'CRUS', 'CRUT', 'CUBA', 'CUBE', 'CUBI', 'CUIR', 'CUIS', 'CUIT', 'CULA', 'CULE', 'CULS', 'CURA', 'CURE', 'CUTI', 'CUVA', 'CUVE', 'CYAN', 'CZAR', 'DABE', 'DACE', 'DADA', 'DAIM', 'DAIS', 'DAMA', 'DAME', 'DAMS', 'DANS', 'DARD', 'DATA', 'DATE', 'DEAL', 'DECA', 'DECI', 'DECO', 'DECU', 'DEFI', 'DEJA', 'DELA', 'DEMI', 'DEMO', 'DENI', 'DENT', 'DEOS', 'DERS', 'DEUX', 'DIAM', 'DICO', 'DIEU', 'DIME', 'DINA', 'DINE', 'DIOT', 'DIRA', 'DIRE', 'DISE', 'DITE', 'DITO', 'DITS', 'DIVA', 'DIVE', 'DOCK', 'DOCS', 'DOCU', 'DODO', 'DODU', 'DOGE', 'DOIS', 'DOIT', 'DOJO', 'DOLS', 'DOME', 'DONC', 'DONS', 'DONT', 'DOPA', 'DOPE', 'DORA', 'DORE', 'DORS', 'DORT', 'DOSA', 'DOSE', 'DOTA', 'DOTE', 'DOTS', 'DOUE', 'DOUX', 'DOXA', 'DRAP', 'DROP', 'DRUE', 'DRUS', 'DUCE', 'DUCS', 'DUEL', 'DUES', 'DUNE', 'DUOS', 'DUPA', 'DUPE', 'DURA', 'DURE', 'DURS', 'EAUX', 'EBAT', 'ECHE', 'ECHO', 'ECHU', 'ECOT', 'ECRU', 'ECUS', 'EDAM', 'EDEN', 'EDIT', 'EGAL', 'ELAN', 'ELFE', 'ELIE', 'ELIS', 'ELIT', 'ELLE', 'ELUE', 'ELUS', 'ELUT', 'EMET', 'EMEU', 'EMIA', 'EMIE', 'EMIR', 'EMIS', 'EMIT', 'EMOI', 'EMUE', 'EMUS', 'EMUT', 'ENTA', 'ENTE', 'ENVI', 'EONS', 'EPAR', 'EPEE', 'EPIA', 'EPIE', 'EPIS', 'ERES', 'ERGS', 'EROS', 'ERRA', 'ERRE', 'ERSE', 'ESSE', 'ESTE', 'ETAI', 'ETAL', 'ETAT', 'ETAU', 'ETES', 'ETRE', 'ETUI', 'EUES', 'EURO', 'EXAM', 'EXIL', 'EXIT', 'EXOS', 'EXPO', 'FACE', 'FACS', 'FADA', 'FADE', 'FADO', 'FAFS', 'FAIM', 'FAIS', 'FAIT', 'FAIX', 'FAME', 'FANA', 'FANE', 'FANS', 'FAON', 'FARD', 'FARE', 'FARO', 'FARS', 'FART', 'FATE', 'FATS', 'FAUT', 'FAUX', 'FAXA', 'FAXE', 'FEAL', 'FEES', 'FELA', 'FELE', 'FEND', 'FERA', 'FERS', 'FERU', 'FETA', 'FETE', 'FETU', 'FEUE', 'FEUS', 'FEUX', 'FEVE', 'FIAI', 'FIAS', 'FIAT', 'FIEE', 'FIEF', 'FIEL', 'FIER', 'FIES', 'FIEZ', 'FIGE', 'FILA', 'FILE', 'FILM', 'FILS', 'FINE', 'FINI', 'FINS', 'FION', 'FISC', 'FIXA', 'FIXE', 'FLAC', 'FLAN', 'FLIC', 'FLIP', 'FLOC', 'FLOP', 'FLOT', 'FLOU', 'FLUA', 'FLUE', 'FLUO', 'FLUX', 'FOCS', 'FOGS', 'FOHN', 'FOIE', 'FOIL', 'FOIN', 'FOIS', 'FOLK', 'FOND', 'FONS', 'FONT', 'FOOT', 'FORA', 'FORE', 'FORS', 'FORT', 'FOUI', 'FOUR', 'FOUS', 'FOUT', 'FRAC', 'FRAI', 'FRET', 'FRIC', 'FRIS', 'FRIT', 'FROC', 'FUEL', 'FUGU', 'FUIE', 'FUIR', 'FUIS', 'FUIT', 'FULL', 'FUMA', 'FUME', 'FUNK', 'FUNS', 'FUSA', 'FUSE', 'FUTE', 'FUTS', 'GAGA', 'GAGE', 'GAGS', 'GAIE', 'GAIN', 'GAIS', 'GALA', 'GALE', 'GALS', 'GANG', 'GANT', 'GAPS', 'GARA', 'GARE', 'GARS', 'GATA', 'GATE', 'GAVA', 'GAVE', 'GAYS', 'GAZA', 'GAZE', 'GEAI', 'GEEK', 'GELA', 'GELE', 'GELS', 'GEMI', 'GENA', 'GENE', 'GENS', 'GENT', 'GERA', 'GERE', 'GIGA', 'GINS', 'GIRL', 'GITA', 'GITE', 'GLAS', 'GLUE', 'GNON', 'GNOU', 'GOAL', 'GOBA', 'GOBE', 'GODA', 'GODE', 'GOGO', 'GOIS', 'GOJI', 'GOLF', 'GOND', 'GONE', 'GONG', 'GORE', 'GOTH', 'GOUR', 'GOUT', 'GOYS', 'GRAF', 'GRAS', 'GRAU', 'GREA', 'GREC', 'GREE', 'GRES', 'GRIL', 'GRIP', 'GRIS', 'GROG', 'GROS', 'GRUE', 'GUES', 'GUET', 'GUIS', 'GYMS', 'HAIE', 'HAIR', 'HAIS', 'HAIT', 'HAKA', 'HALA', 'HALE', 'HALL', 'HALO', 'HANS', 'HARD', 'HARO', 'HASE', 'HATA', 'HATE', 'HAUT', 'HAVE', 'HEIN', 'HELA', 'HELE', 'HERE', 'HEUR', 'HIER', 'HIES', 'HIFI', 'HITS', 'HOAX', 'HOIR', 'HOLA', 'HOME', 'HOMO', 'HOPI', 'HORS', 'HOTE', 'HOTS', 'HOUE', 'HOUX', 'HUAI', 'HUAS', 'HUAT', 'HUBS', 'HUEE', 'HUER', 'HUES', 'HUEZ', 'HUIS', 'HUIT', 'HUMA', 'HUME', 'HUNE', 'HUNS', 'HURE', 'HUTU', 'IBIS', 'IDEE', 'IDEM', 'IDES', 'IGNE', 'ILES', 'ILET', 'ILOT', 'IMAM', 'IMAN', 'IMBU', 'INCA', 'INCH', 'INDE', 'INDU', 'INFO', 'INNE', 'INOX', 'INSU', 'IODA', 'IODE', 'IONS', 'IOTA', 'IRAI', 'IRAS', 'IRES', 'IREZ', 'IRIS', 'ISBA', 'ISSU', 'ITEM', 'ITOU', 'IULE', 'IVES', 'IVRE', 'JABS', 'JACK', 'JADE', 'JAIS', 'JAJA', 'JAMS', 'JARD', 'JARS', 'JASA', 'JASE', 'JAVA', 'JAZZ', 'JEAN', 'JEEP', 'JERK', 'JETA', 'JETE', 'JETS', 'JEUN', 'JEUX', 'JOBS', 'JOIE', 'JOJO', 'JOLI', 'JONC', 'JOUA', 'JOUE', 'JOUG', 'JOUI', 'JOUR', 'JUDO', 'JUGE', 'JUIF', 'JUIN', 'JUPE', 'JURA', 'JURE', 'JURY', 'JUTA', 'JUTE', 'KAKI', 'KALE', 'KAPO', 'KART', 'KATA', 'KEPI', 'KERN', 'KEUF', 'KEUM', 'KHAN', 'KHAT', 'KHOL', 'KIDS', 'KIFA', 'KIFE', 'KIFS', 'KIKI', 'KILO', 'KILS', 'KILT', 'KINE', 'KIRS', 'KITS', 'KIWI', 'KOKA', 'KOLA', 'KSAR', 'KVAS', 'KWAS', 'LABO', 'LACA', 'LACE', 'LACS', 'LADS', 'LADY', 'LAIC', 'LAID', 'LAIE', 'LAIS', 'LAIT', 'LAMA', 'LAME', 'LAPA', 'LAPE', 'LAPS', 'LARD', 'LARE', 'LAVA', 'LAVE', 'LAZE', 'LEDS', 'LEGE', 'LEGO', 'LEGS', 'LENT', 'LESA', 'LESE', 'LEST', 'LEUR', 'LEVA', 'LEVE', 'LIAI', 'LIAS', 'LIAT', 'LICE', 'LIDO', 'LIED', 'LIEE', 'LIEN', 'LIER', 'LIES', 'LIEU', 'LIEZ', 'LIFT', 'LIGE', 'LIMA', 'LIME', 'LINO', 'LINS', 'LION', 'LIRA', 'LIRE', 'LISE', 'LITA', 'LITE', 'LITS', 'LIVE', 'LOBA', 'LOBE', 'LOCH', 'LOCO', 'LOFA', 'LOFE', 'LOFS', 'LOFT', 'LOGE', 'LOGO', 'LOGS', 'LOIN', 'LOIR', 'LOIS', 'LOLO', 'LOMO', 'LONE', 'LONG', 'LOOK', 'LOPE', 'LORD', 'LORI', 'LORS', 'LOTE', 'LOTI', 'LOTO', 'LOTS', 'LOUA', 'LOUE', 'LOUF', 'LOUP', 'LOVA', 'LOVE', 'LUES', 'LUGE', 'LUIS', 'LUIT', 'LUMP', 'LUNE', 'LUTA', 'LUTE', 'LUTH', 'LUXA', 'LUXE', 'LYNX', 'LYRE', 'MACH', 'MAFE', 'MAGE', 'MAIE', 'MAIL', 'MAIN', 'MAIS', 'MAKI', 'MALE', 'MALT', 'MAMA', 'MAMY', 'MARC', 'MARE', 'MARI', 'MARK', 'MARS', 'MASO', 'MATA', 'MATE', 'MATH', 'MATI', 'MATS', 'MAUL', 'MAUX', 'MAXI', 'MAYA', 'MAYO', 'MEAT', 'MECS', 'MEDE', 'MEGA', 'MELA', 'MELE', 'MELO', 'MELS', 'MEME', 'MEMO', 'MENA', 'MENE', 'MENS', 'MENT', 'MENU', 'MERE', 'MERS', 'MESA', 'MESS', 'META', 'METS', 'MEUF', 'MEUH', 'MEUS', 'MEUT', 'MEZE', 'MIAM', 'MICA', 'MIDI', 'MIEL', 'MIEN', 'MIES', 'MILE', 'MIMA', 'MIME', 'MIMI', 'MINA', 'MINE', 'MING', 'MINI', 'MIRA', 'MIRE', 'MIRO', 'MISA', 'MISE', 'MISO', 'MISS', 'MITA', 'MITE', 'MIXA', 'MIXE', 'MOAI', 'MOBS', 'MODE', 'MOIS', 'MOKA', 'MOLE', 'MOME', 'MONO', 'MONT', 'MORD', 'MORS', 'MORT', 'MOTO', 'MOTS', 'MOUD', 'MOUE', 'MOUS', 'MOUT', 'MUAI', 'MUAS', 'MUAT', 'MUEE', 'MUER', 'MUES', 'MUET', 'MUEZ', 'MUGI', 'MUGS', 'MUID', 'MULE', 'MUNI', 'MUON', 'MURA', 'MURE', 'MURI', 'MURS', 'MUSA', 'MUSC', 'MUSE', 'MUST', 'MUTA', 'MUTE', 'NABI', 'NAGE', 'NAIF', 'NAIN', 'NAIS', 'NAIT', 'NAJA', 'NANA', 'NARD', 'NASE', 'NAVE', 'NAZE', 'NAZI', 'NEES', 'NEFS', 'NEMS', 'NENE', 'NEON', 'NEPE', 'NERF', 'NETS', 'NEUF', 'NEVE', 'NEWS', 'NIAI', 'NIAS', 'NIAT', 'NIDS', 'NIEE', 'NIER', 'NIES', 'NIET', 'NIEZ', 'NOCA', 'NOCE', 'NOEL', 'NOIE', 'NOIR', 'NOIX', 'NOMS', 'NONE', 'NONO', 'NORD', 'NORI', 'NOTA', 'NOTE', 'NOUA', 'NOUE', 'NOUS', 'NOYA', 'NOYE', 'NUAI', 'NUAS', 'NUAT', 'NUEE', 'NUER', 'NUES', 'NUEZ', 'NUIS', 'NUIT', 'NULS', 'OBEI', 'OBIS', 'OBIT', 'OBUS', 'OCRA', 'OCRE', 'ODES', 'OEIL', 'OEUF', 'OGRE', 'OHMS', 'OIES', 'OINS', 'OINT', 'OMET', 'OMIS', 'OMIT', 'ONCE', 'ONDE', 'ONYX', 'ONZE', 'OPEN', 'OPES', 'OPTA', 'OPTE', 'OPUS', 'ORAL', 'ORBE', 'ORDI', 'OREE', 'ORES', 'ORGE', 'ORME', 'ORNA', 'ORNE', 'ORYX', 'OSAI', 'OSAS', 'OSAT', 'OSEE', 'OSER', 'OSES', 'OSEZ', 'OSSU', 'OSTS', 'OTAI', 'OTAS', 'OTAT', 'OTEE', 'OTER', 'OTES', 'OTEZ', 'OUAH', 'OUCH', 'OUDS', 'OUED', 'OUIE', 'OUIR', 'OUIS', 'OUIT', 'OURS', 'OUST', 'OUZO', 'OVEE', 'OVES', 'OVIN', 'OVNI', 'OYAT', 'OYES', 'OYEZ', 'PACK', 'PACS', 'PAFS', 'PAGE', 'PAIE', 'PAIN', 'PAIR', 'PAIS', 'PAIT', 'PAIX', 'PALE', 'PALI', 'PALS', 'PALU', 'PAMA', 'PAME', 'PANA', 'PANE', 'PANS', 'PAON', 'PAPA', 'PAPE', 'PAPI', 'PAPY', 'PARA', 'PARC', 'PARE', 'PARI', 'PARS', 'PART', 'PARU', 'PASS', 'PATE', 'PATI', 'PATS', 'PAVA', 'PAVE', 'PAYA', 'PAYE', 'PAYS', 'PEAN', 'PEAU', 'PEDE', 'PELA', 'PELE', 'PEND', 'PENE', 'PEPE', 'PEPS', 'PERD', 'PERE', 'PERF', 'PERI', 'PERM', 'PERS', 'PESA', 'PESE', 'PESO', 'PETA', 'PETE', 'PETS', 'PEUL', 'PEUR', 'PEUT', 'PEUX', 'PEZE', 'PIAF', 'PICA', 'PICS', 'PIED', 'PIES', 'PIEU', 'PIFA', 'PIFE', 'PIFS', 'PIGE', 'PILA', 'PILE', 'PILS', 'PINE', 'PINS', 'PION', 'PIPA', 'PIPE', 'PIPI', 'PIPO', 'PIRE', 'PISE', 'PITA', 'PLAF', 'PLAN', 'PLAT', 'PLIA', 'PLIE', 'PLIS', 'PLOT', 'PLUS', 'PLUT', 'PNEU', 'POCO', 'POGO', 'POIL', 'POIS', 'POIX', 'POLE', 'POLI', 'POLO', 'POND', 'PONT', 'POOL', 'POPE', 'POPS', 'PORC', 'PORE', 'PORT', 'POSA', 'POSE', 'POTE', 'POTS', 'POUF', 'POUM', 'POUR', 'POUX', 'PRES', 'PRET', 'PRIA', 'PRIE', 'PRIS', 'PRIT', 'PRIX', 'PROF', 'PROS', 'PROU', 'PSYS', 'PUAI', 'PUAS', 'PUAT', 'PUBS', 'PUCA', 'PUCE', 'PUEE', 'PUER', 'PUES', 'PUEZ', 'PUIS', 'PULL', 'PUMA', 'PUNI', 'PUNK', 'PURE', 'PURS', 'PUTE', 'PUTT', 'PUYS', 'QATS', 'QUAD', 'QUAI', 'QUEL', 'QUID', 'QUIZ', 'QUOI', 'RABS', 'RACA', 'RACE', 'RACK', 'RADA', 'RADE', 'RADS', 'RAFT', 'RAGE', 'RAID', 'RAIE', 'RAIL', 'RAIS', 'RAJA', 'RAKI', 'RALA', 'RALE', 'RAMA', 'RAME', 'RAMI', 'RANG', 'RANI', 'RAPA', 'RAPE', 'RAPT', 'RARE', 'RASA', 'RASE', 'RATA', 'RATE', 'RATS', 'RAVE', 'RAVI', 'RAYA', 'RAYE', 'RAYS', 'REAC', 'REAI', 'REAL', 'REAS', 'REAT', 'REBU', 'RECU', 'REEL', 'REER', 'REES', 'REEZ', 'REGI', 'REIN', 'REIS', 'RELU', 'REMS', 'REND', 'RENE', 'REPS', 'REPU', 'RETS', 'REVA', 'REVE', 'REVU', 'RHUM', 'RIAD', 'RIAL', 'RIAS', 'RIDA', 'RIDE', 'RIEN', 'RIES', 'RIEZ', 'RIFF', 'RIFS', 'RIFT', 'RIMA', 'RIME', 'RING', 'RIOS', 'RIPA', 'RIPE', 'RIRA', 'RIRE', 'RITE', 'RITS', 'RIVA', 'RIVE', 'RIXE', 'ROBA', 'ROBE', 'ROCK', 'ROCS', 'RODA', 'RODE', 'ROIS', 'ROLE', 'ROMS', 'ROND', 'ROOF', 'ROSA', 'ROSE', 'ROSI', 'ROTA', 'ROTE', 'ROTI', 'ROTS', 'ROUA', 'ROUE', 'ROUI', 'ROUX', 'RUAI', 'RUAS', 'RUAT', 'RUDE', 'RUEE', 'RUER', 'RUES', 'RUEZ', 'RUGI', 'RUNE', 'RUSA', 'RUSE', 'RUSH', 'RUTS', 'RYAD', 'RYAL', 'RYES', 'SACS', 'SADO', 'SAGA', 'SAGE', 'SAIE', 'SAIN', 'SAIS', 'SAIT', 'SAKE', 'SALA', 'SALE', 'SALI', 'SAMU', 'SANA', 'SANG', 'SANS', 'SAPA', 'SAPE', 'SARI', 'SATE', 'SAUF', 'SAUR', 'SAUT', 'SAXE', 'SAXO', 'SCAN', 'SCAT', 'SCIA', 'SCIE', 'SCUD', 'SEAU', 'SECS', 'SECU', 'SEIN', 'SELF', 'SELS', 'SEMA', 'SEME', 'SENE', 'SENS', 'SENT', 'SEPS', 'SEPT', 'SERA', 'SERF', 'SERS', 'SERT', 'SETS', 'SEUL', 'SEVE', 'SEVI', 'SEXA', 'SEXE', 'SEXY', 'SHAH', 'SHIT', 'SHOW', 'SIAL', 'SIDA', 'SIDI', 'SIED', 'SIEN', 'SIKH', 'SILO', 'SILS', 'SIRE', 'SIRS', 'SISE', 'SITE', 'SKAI', 'SKAT', 'SKIA', 'SKIE', 'SKIS', 'SLAM', 'SLIM', 'SLIP', 'SLOW', 'SMIC', 'SMOG', 'SNIF', 'SNOB', 'SOCS', 'SODA', 'SODE', 'SOFA', 'SOFT', 'SOIE', 'SOIF', 'SOIN', 'SOIR', 'SOIS', 'SOIT', 'SOJA', 'SOLE', 'SOLI', 'SOLO', 'SOLS', 'SONO', 'SONS', 'SONT', 'SORS', 'SORT', 'SOTS', 'SOUE', 'SOUK', 'SOUL', 'SOUS', 'SPAM', 'SPAS', 'SPIS', 'SPOT', 'STAR', 'STAT', 'STEM', 'STOP', 'STUC', 'STUP', 'SUAI', 'SUAS', 'SUAT', 'SUBI', 'SUCA', 'SUCE', 'SUCS', 'SUEE', 'SUER', 'SUES', 'SUEZ', 'SUIE', 'SUIF', 'SUIS', 'SUIT', 'SUMO', 'SURE', 'SURF', 'SURI', 'SURS', 'TACO', 'TACS', 'TACT', 'TAEL', 'TAFS', 'TAGS', 'TAIE', 'TAIN', 'TAIS', 'TAIT', 'TALA', 'TALC', 'TALE', 'TANK', 'TANS', 'TANT', 'TAON', 'TAPA', 'TAPE', 'TAPI', 'TARA', 'TARD', 'TARE', 'TARI', 'TATA', 'TATE', 'TATI', 'TAUX', 'TAXA', 'TAXE', 'TAXI', 'TEAM', 'TECK', 'TEES', 'TEKS', 'TELE', 'TELS', 'TEND', 'TENU', 'TEST', 'TETA', 'TETE', 'TETS', 'TETU', 'TEUF', 'TEVE', 'THAI', 'THES', 'THON', 'THYM', 'TIAN', 'TICS', 'TIEN', 'TIFS', 'TIGE', 'TILT', 'TINS', 'TINT', 'TIPI', 'TIRA', 'TIRE', 'TIRS', 'TITI', 'TOCS', 'TOFU', 'TOGE', 'TOIT', 'TOLA', 'TOLE', 'TOMA', 'TOME', 'TOND', 'TONG', 'TONS', 'TOPA', 'TOPE', 'TOPO', 'TOPS', 'TORD', 'TORE', 'TORS', 'TORT', 'TOTO', 'TOUA', 'TOUE', 'TOUR', 'TOUS', 'TOUT', 'TOUX', 'TRAC', 'TRAM', 'TREK', 'TRES', 'TRIA', 'TRIE', 'TRIO', 'TRIP', 'TRIS', 'TROC', 'TROP', 'TROT', 'TROU', 'TRUC', 'TSAR', 'TUAI', 'TUAS', 'TUAT', 'TUBA', 'TUBE', 'TUBS', 'TUEE', 'TUER', 'TUES', 'TUEZ', 'TURC', 'TURF', 'TUTU', 'TYPA', 'TYPE', 'TYPO', 'TZAR', 'UBAC', 'ULNA', 'ULVE', 'UNAU', 'UNES', 'UNIE', 'UNIR', 'UNIS', 'UNIT', 'UREE', 'URES', 'URGE', 'URNE', 'USAI', 'USAS', 'USAT', 'USEE', 'USER', 'USES', 'USEZ', 'UTES', 'UVEE', 'VAGI', 'VAIN', 'VAIR', 'VAIS', 'VALS', 'VALU', 'VAMP', 'VANS', 'VAPE', 'VAPO', 'VASA', 'VASE', 'VAUT', 'VAUX', 'VEAU', 'VECU', 'VELA', 'VELE', 'VELO', 'VELU', 'VEND', 'VENT', 'VENU', 'VERS', 'VERT', 'VETE', 'VETO', 'VETS', 'VETU', 'VEUF', 'VEUT', 'VEUX', 'VEXA', 'VEXE', 'VICE', 'VIDA', 'VIDE', 'VIES', 'VIET', 'VIFS', 'VILE', 'VILS', 'VINS', 'VINT', 'VIOL', 'VIRA', 'VIRE', 'VISA', 'VISE', 'VISU', 'VITE', 'VITS', 'VIVE', 'VLAN', 'VOEU', 'VOIE', 'VOIR', 'VOIS', 'VOIT', 'VOIX', 'VOLA', 'VOLE', 'VOLS', 'VOLT', 'VOMI', 'VONT', 'VOTA', 'VOTE', 'VOUA', 'VOUE', 'VOUS', 'VRAC', 'VRAI', 'VUES', 'WASP', 'WATT', 'WEBS', 'WHIG', 'WIFI', 'WIKI', 'WOKS', 'WRAP', 'YACK', 'YANG', 'YARD', 'YENS', 'YETI', 'YETS', 'YEUX', 'YEYE', 'YINS', 'YOGA', 'YOGI', 'YOLE', 'YOYO', 'YUAN', 'YUZU', 'ZAIN', 'ZEBU', 'ZELE', 'ZENS', 'ZERO', 'ZEST', 'ZETA', 'ZIGS', 'ZINC', 'ZIPS', 'ZIST', 'ZIZI', 'ZOBS', 'ZONA', 'ZONE', 'ZOOM', 'ZOOS', 'ZOUK', 'ZOZO'];

let dico02 = ['ABLE', 'ACAI', 'ACON', 'ACUL', 'ADAC', 'ADAS', 'ADAV', 'ADNE', 'ADON', 'AFAR', 'AFAT', 'AGAS', 'AGHA', 'AGNI', 'AGUI', 'AIDS', 'AISY', 'AJUT', 'AKAN', 'ALEM', 'ALPA', 'ALUS', 'ALYA', 'AMAN', 'AMMI', 'AMOK', 'ANEL', 'ANIL', 'APAX', 'ARCH', 'AREG', 'AROL', 'AUNA', 'AULA', 'AXIS', 'AXOA', 'BAES', 'BAHT', 'BAOU', 'BARD', 'BARN', 'BASI', 'BATH', 'BAUD', 'BEGU', 'BEKE', 'BENE', 'BENS', 'BETI', 'BEUH', 'BEUS', 'BIGE', 'BIGO', 'BILL', 'BINZ', 'BIRR', 'BITS', 'BITU', 'BIWA', 'BOBS', 'BODY', 'BOGE', 'BOGS', 'BOOK', 'BOOM', 'BOOT', 'BOPS', 'BORA', 'BORT', 'BOTE', 'BOUR', 'BRAN', 'BREN', 'BROL', 'BRRR', 'BULB', 'BULL', 'BUNA', 'BUNS', 'BURG', 'BUSA', 'BUSC', 'BUTO', 'BYTE', 'CABS', 'CALF', 'CALL', 'CALO', 'CANT', 'CAPO', 'CAPS', 'CATA', 'CATE', 'CAYE', 'CEBE', 'CEDI', 'CERS', 'CHAH', 'CHAN', 'CHEB', 'CHOP', 'CHUM', 'CHVA', 'CLAM', 'CLAY', 'CLUE', 'COBS', 'COEF', 'COIR', 'COMS', 'COPS', 'CORE', 'COTI', 'COTS', 'COUV', 'COXA', 'COXE', 'CRAU', 'CRIB', 'CROW', 'CUCU', 'CUTS', 'CYME', 'CYON', 'DABA', 'DABS', 'DAHS', 'DAHU', 'DAIL', 'DAOS', 'DARI', 'DAUW', 'DAWS', 'DEBS', 'DECK', 'DEME', 'DEMS', 'DESK', 'DEUG', 'DEVI', 'DEYS', 'DIAL', 'DIAS', 'DIBI', 'DING', 'DIOL', 'DOLA', 'DOLE', 'DOLO', 'DOMS', 'DONA', 'DONF', 'DONG', 'DOPS', 'DOUA', 'DOUM', 'DRAG', 'DRAM', 'DRYS', 'DUAL', 'DUBS', 'DUIT', 'DUNK', 'DUSE', 'DYKE', 'DYNE', 'DZOS', 'ECHA', 'ECOS', 'EJET', 'ELIA', 'ELUA', 'EMBU', 'EMOU', 'ENOL', 'EPOI', 'ETOC', 'EVES', 'EVOE', 'EWEE', 'EWES', 'EXON', 'EYRA', 'FANG', 'FAQS', 'FEDE', 'FEUJ', 'FICS', 'FIEU', 'FIFI', 'FILO', 'FINN', 'FIQH', 'FITS', 'FIUS', 'FIZZ', 'FLAG', 'FLAT', 'FLET', 'FLOE', 'FLOW', 'FOXE', 'FUNE', 'GABA', 'GADE', 'GANS', 'GARI', 'GAUR', 'GEOS', 'GIFS', 'GIFT', 'GLEY', 'GLIE', 'GLUA', 'GLUI', 'GLUS', 'GOGE', 'GOIM', 'GONS', 'GORD', 'GOUM', 'GOYA', 'GOYM', 'GRAM', 'GRAY', 'GRRR', 'GUAI', 'GUEA', 'GUEE', 'GUIB', 'GUNZ', 'GURS', 'GURU', 'GUSS', 'GYRE', 'HADJ', 'HAIK', 'HAJE', 'HAND', 'HART', 'HAST', 'HAVA', 'HAVI', 'HEME', 'HERO', 'HIAI', 'HIAS', 'HIAT', 'HIEE', 'HIEZ', 'HILE', 'HOCA', 'HOKI', 'HORA', 'HOST', 'HOTU', 'HOUA', 'HOUP', 'HOVA', 'HYPE', 'IBNS', 'IBOS', 'IGBO', 'IGUE', 'IKAT', 'INNU', 'INTI', 'INUK', 'IPES', 'ISME', 'ISSA', 'IWAN', 'IXAI', 'IXAS', 'IXAT', 'IXEE', 'IXER', 'IXES', 'IXEZ', 'IXIA', 'JACO', 'JAIN', 'JALE', 'JANS', 'JASS', 'JATI', 'JESE', 'JEZE', 'JIVE', 'JOTA', 'JUBE', 'JUDD', 'JUMP', 'JUNK', 'KADI', 'KALI', 'KAMI', 'KANA', 'KANS', 'KAON', 'KATS', 'KAVA', 'KAWA', 'KAWI', 'KEAS', 'KEKE', 'KELP', 'KENA', 'KENS', 'KETS', 'KICK', 'KIEF', 'KINA', 'KIPS', 'KITE', 'KIVA', 'KOAN', 'KOBS', 'KOIS', 'KOPS', 'KORA', 'KORE', 'KOTA', 'KOTE', 'KOTO', 'KOTS', 'KRAK', 'KRUS', 'KUNA', 'KURU', 'KYAT', 'KYUS', 'LACK', 'LAKH', 'LALA', 'LAMB', 'LAND', 'LAOS', 'LARI', 'LATS', 'LAYA', 'LAYE', 'LEHM', 'LEKS', 'LEMS', 'LEUS', 'LEVS', 'LISP', 'LOAS', 'LOBI', 'LOBS', 'LOCI', 'LODS', 'LULU', 'LUMA', 'LUOS', 'LUTS', 'LUTZ', 'LYRA', 'LYSA', 'LYSE', 'MAAR', 'MACS', 'MAIA', 'MAJE', 'MALI', 'MALM', 'MALS', 'MAME', 'MANA', 'MANS', 'MANX', 'MAOS', 'MARA', 'MATU', 'MAYE', 'MAZA', 'MAZE', 'MEGI', 'MEOS', 'MERL', 'MILS', 'MINS', 'MIPS', 'MIRS', 'MOAS', 'MOCO', 'MOHO', 'MOIE', 'MOKO', 'MONS', 'MOLY', 'MOOC', 'MORE', 'MOXA', 'MOYA', 'MOYE', 'MUGE', 'MULL', 'MYES', 'NAAN', 'NACS', 'NAFE', 'NAGA', 'NAGI', 'NANS', 'NAOS', 'NAYS', 'NECK', 'NEEM', 'NELL', 'NEMI', 'NEOS', 'NERD', 'NERE', 'NEYS', 'NIDA', 'NIFE', 'NIFS', 'NIMS', 'NITS', 'NIVE', 'NIXE', 'NOMA', 'NOME', 'NOUC', 'NOVA', 'NOVE', 'NOVI', 'NOVO', 'NUBA', 'OBAS', 'OBEL', 'OCTA', 'OGAM', 'OING', 'OKAS', 'OKRA', 'OLAS', 'OLIM', 'OLLE', 'OMRA', 'OPEX', 'ORDO', 'ORIN', 'ORLE', 'OSTO', 'OUFS', 'OUIN', 'OUPS', 'OXER', 'PACA', 'PAGI', 'PALA', 'PECS', 'PEON', 'PEUF', 'PEUH', 'PFFT', 'PFUT', 'PHOS', 'PHOT', 'PIAN', 'PIER', 'PITE', 'PIVE', 'PLOC', 'POLY', 'POST', 'POTU', 'POUH', 'POYA', 'PRAO', 'PROD', 'PSST', 'PUCK', 'PUJA', 'PULA', 'PUNA', 'PUNT', 'PUNU', 'PUPE', 'PURO', 'PUTS', 'QING', 'QINS', 'QUIA', 'RAAG', 'RABE', 'RAGA', 'RAIA', 'RAKU', 'RAND', 'RANZ', 'RAPS', 'RASH', 'RECK', 'REDU', 'REGS', 'RHES', 'RIEL', 'RISS', 'ROBS', 'ROTO', 'ROUF', 'RUMB', 'RUPA', 'RUPE', 'SACY', 'SAKI', 'SALS', 'SAME', 'SAMI', 'SARA', 'SARS', 'SART', 'SATI', 'SEGA', 'SERE', 'SHAN', 'SHED', 'SIEE', 'SILA', 'SILE', 'SILT', 'SILY', 'SIMA', 'SIPO', 'SIUM', 'SKAS', 'SKIF', 'SKIN', 'SKIP', 'SKUA', 'SMOK', 'SOAP', 'SOMA', 'SOMS', 'SONE', 'SONG', 'SORE', 'SOUM', 'SOYA', 'SPAT', 'SPET', 'SPIC', 'SPIN', 'SRAS', 'STEP', 'STOT', 'STUD', 'SUET', 'SUFI', 'SUPA', 'SUPE', 'SWAP', 'SWIN', 'SYLI', 'TAAL', 'TACK', 'TAKA', 'TAMA', 'TANN', 'TAOS', 'TARO', 'TARS', 'TATS', 'TAUD', 'TEJU', 'TEKE', 'TELL', 'THUG', 'TIKI', 'TINE', 'TIPA', 'TIPE', 'TIPS', 'TISA', 'TISE', 'TOBY', 'TOLU', 'TOMS', 'TORR', 'TORY', 'TOSA', 'TOSS', 'TRAX', 'TRIC', 'TRIN', 'TROY', 'TUFS', 'TUNA', 'TUNE', 'TUPI', 'TWIN', 'UGNI', 'UMMA', 'UNIF', 'UNIV', 'UPAS', 'URDU', 'URUS', 'USUS', 'UVAL', 'VARA', 'VARS', 'VATU', 'VEDA', 'VELD', 'VENE', 'VINA', 'VINE', 'VIOC', 'VOCS', 'WADS', 'WALE', 'WALI', 'WAPS', 'WECH', 'WHIP', 'WITZ', 'WONS', 'WURM', 'YAKA', 'YAKS', 'YAMS', 'YASS', 'YAWL', 'YODS', 'YORK', 'YOUP', 'YUES', 'YUKO', 'ZAMU', 'ZANI', 'ZARB', 'ZECS', 'ZEES', 'ZEFS', 'ZEKS', 'ZEND', 'ZIKR', 'ZIRE', 'ZOES', 'ZUPS'];



//_____________ Détermination du mot à deviner ______________


function choixprop(form4){
	if (form4.choix[0].checked){
	dico02 = dico01;
	}
	
	const nav = document.getElementById("nav");
	nav.style.visibility= "hidden";
	//affichExp.style.display= "none"; 


let choixMot = Math.floor(Math.random() * dico01.length);
let choixMot02 = Math.floor(Math.random() * dico02.length);
let motUltime = [dico01[choixMot], dico02[choixMot02]];
let choixMotUltime = Math.floor(Math.random() * motUltime.length);
let myString = motUltime[choixMotUltime];

let premier = myString.charAt(0);
let deuxieme = myString.charAt(1);
let troisieme = myString.charAt(2);
let quatrieme = myString.charAt(3);

let cpt = 0;
let number = 4;
const longueur01 = (dico01.length);
const longueur02 = ((dico01.length) + (dico02.length));



const form = document.getElementById('form');
const input1 = document.getElementById('input1');
const output = document.getElementById('output');
/* const resultat = document.querySelector('.result');  */
const resultat = document.getElementById('result');
const err = document.getElementById('error');
const gagne = document.querySelector('.gagne');
const rejouer = document.getElementById('rejouer');
const chat = document.getElementById('chat');
const triche = document.getElementById('triche');
const definition = document.getElementById("def");
triche.textContent = myString;


chat.onclick = function() {
	triche.style.visibility= 'visible';
	rejouer.style.visibility = 'visible';
	definition.style.visibility = 'visible';
	definition.addEventListener('click', () =>{
		window.open('https://www.cnrtl.fr/definition/'+ (myString) +'', 'définition');
		
	});
	};







form.onsubmit = (e) => {
	e.preventDefault(); //empeche le rafraichissement de la page
	err.style.visibility = 'hidden';
	//resultat.innerHTML = ''; //on efface resultat
	
	const proposition = input1.value.toUpperCase();
	//	cpt++;
	const indice = dico01.includes(proposition) || dico02.includes(proposition);
	cpt++;
	
	
	if (!indice) {
		err.style.visibility = 'visible';
		
	}
	
	output.innerHTML += proposition + '<br>';
	
	const first = proposition.charAt(0);
	const second = proposition.charAt(1);
	const third = proposition.charAt(2);
	const fourth = proposition.charAt(3);
	
	let count = 0;
	console.log(count);
	
	for (let i = 0; i < myString.length; i++) {
		if (proposition[i] == myString[i]) count++;
	}
    if (!indice) {
		resultat.innerHTML += "non pris en compte" +'<br>' ;
	}else{
		
		if
		(count < 2) {
			resultat.innerHTML += count + " lettre" +'<br>' ;
			
		}
		if(count > 1) {
			resultat.innerHTML += count + " lettres" +'<br>' ;
		}
    }
	if (count == 4) {
		gagne.style.visibility = 'visible';
		gagne.style.transition = "1s";
		rejouer.style.visibility = 'visible';
		definition.style.visibility = 'visible';
		
		definition.addEventListener('click', () =>{
			window.open('https://www.cnrtl.fr/definition/'+ (myString) +'', 'définition');
			
		});
	}
	
	input1.value = ''; //on efface le contenu de l'input
	const nombreCoups = document.getElementById("nombreCoups");
	nombreCoups.innerHTML = " " + cpt + " coups ! Bravo !";
	//rejouer.addEventListener("click", resetGame);
	
};


}

