import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  breeds: [
    {
      title: 'rottweiller',
      img: 'https://i.f1g.fr/media/cms/orig/2021/08/31/63e1b9ec646748091ea4a3d0678b2fbb7e025fc58d2f810fb5b794a974ba8909.jpg',
      brief:
        'Le Rottweiler est un chien solide, qui évoque la force. Son corps très musclé fait de lui un chien bien proportionné, à la fois souple et endurant ! Il dispose d’un corps bien équilibré, harmonieux, élégant. Il s’agit d’un des chiens de garde les plus populaires du monde à notre époque.',
      history:
        'Le Rottweiler est l’une des plus anciennes races de chiens. Importé dans la région de Rottweil en Allemagne par les Romains, il aurait été croisé avec un chien de berger, donnant la race que l’on connaît aujourd’hui. Longtemps, il servit à la protection du bétail des bouchers. Son courage, sa ténacité et son instinct de protection en ont fait un chien de garde exceptionnel. Début 1900, la loi interdisant le transport de bétail par la route, le Rottweiler fût recruté par la police allemande et autrichienne pour son flair et sa robustesse. Il fût officiellement reconnu comme chien de police en 1910. Mais il faut attendre 1935 pour que la race soit acceptée officiellement aux États-Unis et 1970 en France. Aujourd’hui encore, le Rottweiler est l’un des chiens de garde les plus populaires et on le retrouve dans de nombreuses brigades du monde entier.',
      physical:
        'Son poil : constitué d’un sous-poil complètement recouvert par les poils de couverture, sa robe est de longueur moyenne, lisse, dure et bien serrée. Les poils des membres postérieurs sont très légèrement plus longs. Sa couleur : noire avec des marques de couleur feu bien définies sur les joues, le museau, le dessous du cou, le poitrail, les membres, au-dessus des yeux et sous la racine de la queue. Sa tête : de taille moyenne, assez large entre les oreilles. Le front est légèrement courbé et la mâchoire est développée et puissante. Ses oreilles : très écartées l’une de l’autre et plantées haut sur le crâne. Leur forme est triangulaire et elles tombent sur l’avant, augmentant visuellement la taille de la tête. Ses yeux : de couleur marron foncé en forme d’amande. Son corps : plutôt trapu avec une ossature forte, un buste bien développé et des cuisses très musclées. Ni court sur pattes, ni levretté, c’est un molosse bien proportionné à l’allure robuste, souple et endurante. Petite particularité : il peut avoir les pattes palmées ! Sa queue : à l’état naturel, elle s’inscrit dans le prolongement horizontal du dos ou un peu relevée. Au repos, elle peut être pendante. Elle est courte et recouverte d’un poil dur et lisse.',
      behaviour:
        'Le Rottweiler est un formidable chien de garde qui fera tout pour protéger son maître et sa maison, quitte à y laisser la vie. S’il sent un danger, il n’hésitera pas à se mettre en première ligne, mais une fois en confiance, il sera « doux comme un agneau ». Contrairement aux idées reçues et malgré son apparence dissuasive, c’est un compagnon très affectueux, voire parfois « pot de colle ». Joueur et curieux, il s’entend bien avec les enfants et les animaux plus petits que lui. Il aura tendance à prendre les plus chétifs sous son aile. Mais étant costaud et n’ayant pas conscience de sa force, il peut s’avérer maladroit.',
      education:
        'Très intelligent et sûr de lui, le Rottweiler doit être éduqué le plus tôt possible. Chien de nature dominante et difficile à impressionner, il lui faut un maître avec beaucoup de caractère et d’autorité ! Il se révèle néanmoins travailleur, docile et tolérant, son éducation doit être basée sur la socialisation dès son plus jeune âge, de sorte à ce que son tempérament de chien dominant ne ressorte pas excessivement. dans l’apprentissage, d’où son utilisation fréquente dans la police.',
      condition:
        'Le Rottweiler est un chien familial, joueur et curieux qui supporte mal l’enfermement et la solitude. Cependant, bien que les grands espaces semblent attractifs pour un tel gabarit, il sera plus épanoui au milieu des siens avec un petit carré de jardin que dans un grand terrain tout seul. Il peut donc s’adapter parfaitement à la vie en ville, à condition de le promener tous les jours.',
      health:
        'Comme de nombreux molossoïdes, son allure dissuasive exprime sa robustesse. Ce grand gaillard n’est que rarement malade, mais sa croissance rapide peut entraîner des déformations du squelette qu’il convient de surveiller. La sélection des reproducteurs permet de limiter la propagation du gène responsable de dysplasie de la hanche.',
      lifespan:
        "L'espérance de vie d'un Rottweiler se situe, en moyenne, entre 8 ans et 11 ans.",
      hygiene:
        "Le Rottweiler est un chien facile à vivre qui demande peu d’entretien. Il supporte le vent, la pluie, la neige et même le gel, mais son pire ennemi est la chaleur. Son poil lisse et bien serré s’entretient en un coup de brosse. Il faut cependant soigner son alimentation qui est déterminante pour sa santé, dès son plus jeune âge. Son poil est lisse et brillant naturellement. Un coup de brosse dure suffit à le rendre plus doux et soyeux. Les bains nuisent à la santé de son poil, donc mieux vaut ne pas en abuser. Si un lavage est vraiment nécessaire, il convient d’utiliser un shampoing neutre adapté au type de poil, suivi d’un après-shampoing. Les dents sont à brosser régulièrement afin d'éliminer l'accumulation de tartre et la prolifération de bactéries. Ses yeux et ses oreilles sont à vérifier fréquemment pour s'assurer qu'il n'y ait aucune trace de saletés ou d'une quelconque infection.",
      food: 'Le régime alimentaire du Rottweiler doit être strict et particulièrement riche pour favoriser le développement de sa musculature et le maintien en bon état de son squelette. Ainsi, les magasins spécialisés mettent à disposition de la nourriture pour Rottweiler, à base de croquettes. Il doit en ingérer environ 800 grammes par jour distribués en 2 repas. Un léger le matin et un plus copieux le soir.',
      activity:
        'Véritable boule d’énergie, le Rottweiler a besoin de se dépenser quotidiennement pour entretenir sa musculature. Course et natation sont ses activités préférées. Attention cependant, car le Rottweiler doit éviter les balades au soleil en plein été.',
    },
    {
      title: 'berger belge malinois',
      img: 'https://img.passeportsante.net/1200x675/2022-01-31/shutterstock-1856511172.webp',
      brief:
        "Le Berger Belge Malinois est un extraordinaire chien de protection, de garde et de défense. Il est attachant, intelligent, vif et se montre d’une fabuleuse loyauté envers son maître. Il est joueur et présente un avantage à l’entretien par rapport à ses cousins belges. De plus, sa santé, solide, ne demande aucune dépense superflue. Le Berger Belge Malinois est notamment reconnaissable à son masque s'étendant des lèvres aux paupières.",
      history:
        "Le Berger Belge Malinois est l'une des 4 variétés de chien de berger belge, avec les Groenendaels, Tervuerens et Laekenois, dont il se distingue notamment par son poil court et sa robe fauve-charbonnée. Il descend donc des chiens bergers du pays du 19e siècle en Belgique dans la région de Malines. Le Club du chien de Berger Belge est fondé en septembre 1891 avec le lancement des premières sélections. La variété du Berger Belge Malinois est officiellement reconnue en tant que telle en 1909. Le standard actuellement en vigueur de la race a été établi en 2001.",
      physical:
        "Son poil : court sur l'ensemble du corps, davantage sur la tête, le revers des oreilles et les parties basses des pattes. Le cou, l'arrière des cuisses et la queue sont plus fournis. Sa couleur : fauve charbonné (poil de couleur fauve mais dont l'extrémité est noire), ombrant la couleur de base. Le masque est bien prononcé. De légères taches blanches au poitrail et aux doigts sont tolérées. Sa tête : rectiligne, sèche. Le museau n'est que très légèrement plus long que le crâne. Le front est plutôt aplati, le stop modéré et les joues sèches, musclées et plates. Ses oreilles : de forme triangulaire et relativement petites. Attachées et portées haut et droit lorsque le chien est en éveil. Ses yeux : en forme d'amande, de moyenne taille, obliques, brunâtres à foncés. Affichent une expression éveillée et intelligente. Son corps : puissant, harmonieux, avec une ligne du dos et du rein droite. Le garrot est accentué, le rein solide, large et musclé. La croupe, musclée, ne s'incline que très modérément.",
      behaviour:
        'Le Malinois vit pour son maître. Il est très affectueux, proche de sa famille adoptive et de son maître. Il est investi et se montre très réactif au moindre ordre. Il possède une grande capacité d’attention. Il est dynamique, dévoué, loyal et fidèle. Il est toujours prêt à défendre voire même à sauver la vie de son maître, quitte à donner la sienne en échange. Il est courageux et il ne laisse personne venir s’imposer sur son territoire. Ainsi, il fait un excellent chien de garde. Il est très intelligent, vif d’esprit. Ce n’est pas pour rien qu’il est prisé par les polices et armées du monde entier. Il est également joueur avec les enfants, qu’il protège contre tout.',
      education:
        'Sensible, intelligent et plein d’humanité, le Malinois doit être éduqué avec douceur, gentillesse mais également fermeté. L’éducation doit commencer dès son plus jeune âge. Il a envie de faire plaisir à son maître et c’est un avantage indéniable. Il faut le sociabiliser au maximum pour qu’il ne connaisse aucune difficulté dans son approche aux autres lorsqu’il sera adulte. Ne jamais faire preuve de violence. S’il désobéit, il ne faut pas hésiter à le bouder. Il a toujours besoin de son maître et comprend vite qu’il n’a pas fait ce qu’on lui demandait. Il peut aussi apprendre par le jeu et ne doit pas avoir à faire des exercices trop répétitifs, sous peine de se lasser.',
      condition:
        "Le Berger Belge Malinois est essentiellement un chien de travail et d'activité. Il préférera la vie en campagne ou dans une grande maison avec jardin, mais pourra s'adapter à la vie en appartement s'il est fréquemment sorti. La vie urbaine n’est pas à proscrire pour autant, mais il sera d’autant plus à son aise et heureux dans une maison avec un jardin. Il a besoin de sortir pour se dépenser et canaliser son énergie.",
      health:
        "Le Berger Belge Malinois est un chien robuste et rustique. Il n'y a pas d'affection propre à la race, mais la possibilité de faire face à une dysplasie de la hanche n'est jamais à écarter totalement, bien que le Berger Belge Malinois soit relativement moins concerné que d'autres chiens de grande ou moyenne taille. Dans l'ensemble, il n'a pas grand-chose à craindre côté santé tant qu'on s'en occupe correctement. Il ne craint ni le froid ni le chaud et encore moins les intempéries. Toutefois, avant d'envisager une opération chirurgicale, il est important de discuter avec le vétérinaire. En effet, le Berger Belge Malinois se révèle très sensible à l'anesthésie. En raison de son rapport muscles/graisses, le taux de mortalité est supérieur à la moyenne lorsqu'il est soumis à une anesthésie.",
      lifespan:
        "L'espérance de vie d'un Berger Belge Malinois se situe, en moyenne, entre 10 ans et 12 ans.",
      hygiene:
        "Le Berger Belge Malinois demeure sujet à une mue printanière et une autre en automne. Il est néanmoins facile à entretenir, car son poil est court. Ce dernier doit être régulièrement examiné et nettoyé afin d'en préserver la capacité de protection. Il est recommandé de brosser le chien une fois par semaine. Pendant les mues, il est conseillé d'utiliser une étrille avant de passer au brossage, de manière à assurer la propreté du sous-poil. Le nettoyage des yeux se fait à l'aide de gaze et de sérum physiologique, et les oreilles avec des gouttes auriculaires. Comme pour toutes les races, ses ongles doivent être coupés régulièrement s'ils ne s'usent pas naturellement afin d'éviter des risques de fissuration, lesquelles peuvent provoquer des douleurs. Afin de préserver ses dents, il est également important de les brosser. Ce soin permet d'éliminer l'accumulation de tartre et la prolifération de bactéries.",
      food: 'Son alimentation doit être adaptée à sa dépense physique quotidienne. Son régime alimentaire devra surtout être riche en protéines et en glucides. Sans grande dépense, des croquettes de haute qualité sont suffisantes. Des croquettes qui conviennent également à ce chien en cas de forte activité. Par ailleurs, comme pour les Bergers Allemands ou toutes les races sujettes aux torsions de l’estomac, le Malinois doit ingérer son repas en 2 fois. Une ration le matin assez légère et une plus copieuse le soir.',
      activity:
        "Le Berger Belge Malinois a besoin de rester actif. De longues sorties quotidiennes doivent lui être proposées, tout comme des jeux et idéalement des obstacles à franchir (randonnées en forêt et parcours d'agility, par exemple). Contrairement aux adultes, les chiots ont un besoin moindre en termes d'activités physiques en raison de leur gabarit. En-dessous de 4 mois, 15 à 20 minutes de jeu à l'extérieur, matin et soir, sont suffisantes. De 4 à 6 mois, le chiot, en plus de continuer à profiter de jeux à l'extérieur, peut être amené à effectuer des promenades courtes. De 6 mois à un an, la durée des exercices à l'extérieur (par exemple avec une balle ou un frisbee) peut être allongée à 40 minutes. À partir de un an, le Berger Belge Malinois peut commencer à suivre son maître lors de ses séances de jogging, dont la durée est à augmenter progressivement. À noter que les surfaces dures, comme l'asphalte et le béton, sont à éviter.",
    },
    {
      title: 'Berger Allemand',
      img: 'https://www.woopets.fr/assets/races/000/006/bannerbig2021/berger-allemand_2.jpg',
      brief:
        'Le Berger Allemand est un chien robuste, athlétique et endurant. Il est doté d’un corps très harmonieux et bâti pour l’effort physique. Depuis 10 ans, il règne en maître sur la 1e place du podium des chiens préférés des Français. Le Berger Allemand est un chien complet, infatigable, docile, vigilant et très attaché à son propriétaire.',
      history:
        "L’élevage méthodique a démarré en 1889. Cette race a été créée par le capitaine Max Frédéric Emile Von Stephanitz à partir du croisement des chiens de berger du centre et du sud de l’Allemagne. Le but était de créer un chien d’utilité, très intelligent et fort physiquement pour la garde des troupeaux. Ce n’est qu’à partir de la fin du 19e siècle et de la révolution industrielle en Allemagne que les premiers Bergers Allemands sont élevés. Puis, le capitaine Von Stephanitz définit la race. Un Berger Allemand est essentiellement un chien de travail. Chien dit polyvalent, le Berger Allemand est utile à de nombreux domaines. Pendant la Première Guerre mondiale, il accompagne l’armée allemande et notamment destinée à secourir les soldats blessés. Au fur et à mesure de la disparition des troupeaux, l'évolution de la race a poussé l’homme à utiliser les facultés du Berger Allemand pour en faire un chien policier, de guerre, chien d’aveugle ou sanitaire.",
      physical:
        'Son poil : court et dur se révèle très dense. Doublé d’un sous-poil fourni, le poil reste couché le long du corps. Sa couleur : la plus répandue est noire et feu. Il peut aussi avoir du noir avec des nuances de brun, de brun rouge ou de jaune jusqu’au gris clair. Sa tête : bien proportionnée à la taille du chien avec une largeur raisonnable entre les oreilles. Elle n’est pas trop lourde ni trop allongée. D’aspect général, la tête possède un museau prononcé et puissant. Ses oreilles : sont de taille moyenne et larges à la base. Symétriques, elles sont portées bien droites et se terminent en pointe. Ses yeux : demeurent en amandes et doivent être le plus sombre possible. Son corps : plutôt allongé et assez rectiligne laisse place à un dos musclé et légèrement plongeant. Il possède une croupe un peu oblique. Pur trotteur, il possède une allure harmonieuse aux mouvements amples Sa queue : doit au moins atteindre le jarret. Sur sa face intérieure, le poil est plus long. Elle est portée tombante, mais lorsqu’il se trouve en pleine action ou excité elle se relève de manière considérable sans aller au-dessus de l’horizontale.',
      behaviour:
        "Très joyeux et joueur, il est doté d’une grande intelligence. Il reste fidèle et attaché à son maître. Patient et courageux, c’est aussi un chien protecteur avec les enfants. D’un tempérament assez souple, il n’en est pas moins vif et assez dominateur. Affectueux et d’un naturel paisible, il a besoin de se dépenser chaque jour. Il est d’un dévouement sans faille pour son propriétaire. Il s’agit d’un animal très sensible, qui apprécie les félicitations après un bon acte. Il s’agit d’un chien très sportif et très joueur. C'est un chien facile au quotidien à condition d’être attentif avec lui. S’il est très reconnaissant du temps passé avec lui et de l’amour reçu, il peut se sentir abandonné, délaissé.",
      education:
        "Le Berger Allemand incarne la polyvalence à la perfection. Chien de travail par excellence, on peut l’éduquer en tant que chien policier, de troupeau, pisteur et comme chien guide d’aveugle. Comme chien de compagnie, sa nature méfiante à l’égard des étrangers et son passé de chien de berger fait de lui un bon garde puisqu’il défend naturellement son territoire. Pour l’éducation, il se révèle très docile et très intelligent, même s'il ne reconnaît qu’un seul maître. Il est important de le sociabiliser et de l'habituer aux étrangers ou lieux publics, car sa méfiance pour l'inconnu est importante à prendre en compte. De plus, cette race peut parfois souffrir de l'anxiété de la séparation et vous serez donc souvent amené à effectuer l'essentiel de vos déplacements en sa compagnie.",
      condition:
        "Très actif, le Berger Allemand peut rester dehors en toute saison. Il est plus adapté à la vie à la campagne. Cependant, la vie en ville et dans un appartement n’est pas impossible à condition de le sortir fréquemment et de lui proposer des activités physiques régulièrement. C’est aussi un chien qui supporte mal la solitude. S'il se sent seul, s'ennuie ou pas assez exercé, il témoignera de sa frustration en mastiquant tout ce qu'il peut ou en aboyant de manière excessive.",
      health:
        "De nature robuste, le Berger Allemand, comme tous les chiens de taille moyenne et de grande taille, est génétiquement sujet à la dysplasie de la hanche ou du coude, l'hypothyroïdie et la maladie de von Willebrand. Le dépistage et la sélection des animaux lors de la reproduction ont fortement réduit les risques. Hormis cela, son espérance de vie est bonne (12 ans).",
      lifespan:
        "L'espérance de vie d'un Berger Allemand se situe, en moyenne, entre 10 ans et 12 ans.",
      hygiene:
        "Le Berger Allemand est un chien fait pour vivre à l’extérieur même s'il aime aller et venir librement dans la maison ou dans le jardin. Il subit une mue deux fois par an (au printemps et en automne) en lien avec le changement de luminosité à ces périodes. Les chiens vivant en intérieur perdent leurs poils toute l’année avec des périodes plus fortes au printemps et en automne. Par sa forte densité de poils, le Berger Allemand doit être brossé chaque jour pendant la période de mue. En dehors de cette période, ce chien peut se contenter d’un bon brossage 2 fois par semaine pour avoir le poil plus doux et brillant. Des lavages trop fréquents peuvent être nocifs. En effet, le bain élimine la couche de sébum sur la peau du chien et c’est cette substance huileuse qui le protège contre la pluie et le froid. La fréquence de lavage peut varier entre les chiens vivants dehors à la campagne (tous les 2 mois) et ceux en appartement. Ces derniers peuvent se contenter d’un bon brossage pour avoir le poil plus doux et brillant. Tâchez de couper soigneusement ses ongles régulièrement avec un coupe-ongles, en effet,ces derniers connaissent une croissance très rapide. Les oreilles doivent être vérifiées pour écarter le risque d'accumulation de cire ou de débris pouvant causer une infection. Les dents nécessitent un brossage régulier pour éviter la formation de tartre.",
      food: "Généralement, il est recommandé de lui servir l'équivalent de 3 à 4 tasses de croquettes par jour et de qualité premium auprès des marchands industriels. Il est conseillé de suivre les indications inscrites sur l'emballage du paquet. Bien sûr, il est recommandé d'adapter les rations en fonction de l'âge, du métabolisme et de l'activité physique de votre chien. Pour un chiot Berger Allemand, la croissance est très forte entre l'âge et 4 et 7 mois, il lui faut donc un régime de haute qualité faible en calories et des taux de protéines et graisses mesurés pour éviter une croissance trop rapide. Un Berger Allemand devra ingérer au minimum 3 000 calories par jour. Ce chiffre peut doubler s’il est actif toute la journée, notamment s’il appartient à une brigade de gendarmerie.",
      activity:
        "Cette race a besoin d’explorer plusieurs territoires. Qu’il vive en appartement ou en maison, ce chien ne peut se contenter d'une simple sortie de 5 minutes pour les besoins. Rester bloqué dans un jardin n'est pas fait pour lui. Il lui faut donc une promenade quotidienne. A l'origine, c'est un chien élevé pour diriger les troupeaux, il a donc besoin d'une grosse activité au cours de la journée.",
    },
    {
      title: 'Golden Retriever',
      img: 'https://www.woopets.fr/assets/races/000/195/bannerbig2021/golden-retriever_2.jpg',
      brief:
        "Le Golden Retriever est l'une des races les plus populaires au monde tant il respire une attitude joviale et amicale. Son intelligence et son image de chien affectueux et parfait pour la famille expliquent ce succès. Son manteau or est caractéristique. C'est également un excellent nageur et apte pour le travail. La chasse, chien-guide d'aveugles, recherche et sauvetage sont des domaines où il excelle.",
      history:
        "Le Golden Retriever est un chien aux origines controversées. L’une des théories qui s’y rapportent en fait un descendant de bergers du Caucase acquis en 1858 par Lord Tweedmouth. Une autre histoire voudrait qu’on ait croisé un Spaniel d’eau à un Wavy Coated, ne conservant de chaque portée que les chiots à la robe dorée. Une autre légende raconte que le Golden Retriever est né d’un croisement entre un Spaniel d’eau et un Bloodhound. C’est en 1909 que la race apparaît pour la première fois dans une exposition canine. Elle est enregistrée en Angleterre en 1913 avant d’y être reconnue en 1931 comme étant une race pure. La France importe les premiers individus en 1925. L’élevage ne prend toutefois son essor qu’à la fin de la guerre mondiale. Depuis les années 1990, c'est une race très populaire.",
      physical:
        'Son poil : long et frangé, il peut être ondulé ou plat. Le sous-poil serré et épais est imperméable. Sa couleur : les nuances vont du blanc crème au doré foncé. Sa tête : large, elle est dotée d’un stop très marqué et d’une truffe noire. Le crâne est aussi long que le museau. Ses oreilles : pendantes et de taille moyenne, elles sont attachées à la hauteur des yeux. Ses yeux : bien écartés, ils sont marron foncé. Les bords des paupières sont également foncés. Son corps : harmonieux et robuste. Sa queue : attachée à la hauteur du dos, elle atteint le jarret sans jamais s’enrouler.',
      behaviour:
        "Le Golden Retriever est défini par le standard FCI comme étant un chien sociable, affectueux, loyal et docile. C’est une race intelligente qui peut s’avérer un animal de chasse exceptionnel, mais aussi un compagnon extrêmement doux pour les personnes âgées et les enfants de tout âge. Sûr de lui, c'est un travailleur de nature. Il préfère toutefois la compagnie de ses maîtres à la solitude. Il demande beaucoup d’affection et d’attention. C'est un amuseur public, capable de toutes les facéties pour attirer l'attention de son maître ou de son assistance.",
      education:
        'Dans le cas du chiot Golden Retriever, on ne parle jamais de dressage. En effet, cette race d’une grande sensibilité doit être éduquée à travers plus d’encouragements que de réprimandes. Son caractère têtu et indépendant pourrait refaire surface s’il se sent obligé de faire quelque chose contre son gré. Le tact et la patience seront donc les atouts d’un bon maître. Il cherche continuellement à plaire à son propriétaire et le satisfaire. Enfin, il est important de lui assurer une socialisation précoce.',
      condition:
        'Le Golden Retriever peut s’accommoder d’une vie en intérieur du moment qu’il peut rester près de ses maîtres et qu’il est sorti tous les jours. Malgré tout, il sera nettement plus heureux s’il dispose d’un espace extérieur où il pourra courir et s’amuser jusqu’à en perdre haleine.',
      health:
        'Le Golden Retriever est un chien robuste qui adore l’eau. Il faut tout de même veiller à bien sécher sa queue, surtout à la base, afin d’éviter que les muscles se contractent de manière douloureuse. Les oreilles sont également assez fragiles et il peut être sujet aux allergies, dermites et autres maladies de la peau. Parmi les risques les plus courants, il présente également quelques prédispositions aux cancers, à la dysplasie de la hanche ou encore la cataracte lors de ses vieilles années.',
      lifespan:
        "L'espérance de vie d'un Golden Retriever se situe, en moyenne, entre 12 ans et 14 ans.",
      hygiene:
        "Il présente un sous-poil épais. La mue du Golden Retriever est régulière, mais elle s'accentue au printemps. À cette saison, la quantité de poils perdus est importante. Il possède un poil autonettoyant qui doit être brossé tous les jours pour éviter la formation des nœuds. Un bain tous les 2 ou 3 mois lui suffit. Comme pour toutes les races, ses ongles doivent être coupés régulièrement, environ une à 2 fois par mois s'il ne les use pas naturellement. Il est toujours important de demander des conseils à un vétérinaire ou un toiletteur, car les ongles du chien contiennent des vaisseaux sanguins. Couper trop loin engendrerait des saignements. Brosser ses dents est tout aussi important afin de les préserver. Ce soin permet d'éliminer l'accumulation de tartre et la prolifération de bactéries. Le Golden Retriever est une race pouvant être sujette aux infections de l'oreille. Ses oreilles doivent donc être vérifiées chaque semaine et essuyées avec du coton imbibé de nettoyant auriculaire au pH neutre.",
      food: "Le Golden Retriever a besoin d’une alimentation équilibrée pour éviter les embonpoint. Sa ration journalière est idéalement prise en 2 repas. On estime qu'il mange en moyenne 400 grammes de croquettes premium. Les quantités augmentent ou diminuent en fonction de la qualité des croquettes.",
      activity:
        "Il s’adapte assez facilement à la vie en appartement. Ce qui ne l’empêche pas d’apprécier au moins une sortie par jour, de préférence dans des endroits à proximité d’eau ou de marécage. Il a besoin de se dépenser vigoureusement pendant 30 minutes et deux fois par jour afin de canaliser son énergie débordante. C'est un chien qui déborde de vie et qui adore jouer à l'extérieur notamment avec des jouets mous.",
    },
    {
      title: 'Carlin',
      img: 'https://www.woopets.fr/assets/races/000/104/bannerbig2021/carlin_2.jpg',
      brief:
        'Le Carlin est un chien assez populaire en Europe. Il est très apprécié par les familles ou même les personnes seules, qui n’ont pas forcément besoin de le sortir très souvent pour qu’il soit heureux. Il est doux et attentionné envers son maître, avec lequel il passe la grande majorité de ses journées. Il se montre calme et joueur. Cependant, son éducation n’est pas des plus simples. Il faut souvent faire preuve de patience.',
      history:
        "Si le développement de la race s'est principalement fait en Grande-Bretagne, les origines plus profondes du Carlin se trouvent en Chine. Il est ensuite arrivé en Hollande au cours du 17e siècle avec les marchands de la Compagnie néerlandaise des Indes orientales. L'accession au trône de Guillaume III a favorisé l'introduction de la race en Angleterre. Le Carlin doit sans doute son nom au comédien italien Carlo Antonio Bertinazzi (1710-1783), peut-être en raison de son masque noir qui évoque ceux portés par l'artiste durant ses représentations. Le standard d'origine en vigueur de la race a été publié le 26 mars 2009.",
      physical:
        "Son poil : court, fin, lisse, doux et brillant. Jamais dur ni laineux. Sa couleur : fauve, abricot, noir ou argent. Les couleurs sont très nettes et des contrastes clairs. Sa tête : large, ronde, avec le dessus plat, le visage renfrogné et des rides sur le front clairement marquées. Ses oreilles : petites, fines et douces. En rose (petite, se repliant en arrière) ou en bouton (pavillon retombant en avant, l'extrémité couvrant l'orifice de l'oreille). Ses yeux : grands, globuleux et de couleur sombre. Ils affichent une expression mêlant douceur, affection et souci. Son corps : s'inscrit dans un carré, court, avec une ligne du dessus droite, une poitrine large et des côtés bien cintrés. Sa queue : attachée haut avec une boucle prononcée, idéalement une double boucle.",
      behaviour:
        "Le Carlin est un véritable concentré de douceur. Extrêmement attaché à son maître, il peut aussi se montrer très amical avec les étrangers, ce qui en fait un chien de compagnie fort agréable, mais surtout pas un bon gardien. C'est surtout son tempérament jovial qui est recherché, notamment par les enfants avec lesquels il s'entend parfaitement. Il a même ce côté clown qui amuse toute la famille, tout comme ses ronflements et ronronnements. Le Carlin peut également parfois se montrer têtu. Il apprécie la compagnie et ne supporte pas de rester seul.",
      education:
        "Sensible, le Carlin ne supportera pas les remontrances exagérées et le rapport de force. Il doit être éduqué dans la douceur, mais aussi dans la fermeté pour éviter que son côté 'forte tête' ne prenne le dessus dans certaines situations. Son envie de faire plaisir à son maître et son tempérament enjoué feront le reste. On pourrait croire que son dressage se révèle simple, il n’en est rien. Il ne comprend pas toujours du premier coup ce qu’on lui demande. Son éducation requiert de la patience et de la dextérité. Il ne faut jamais s’énerver ni se montrer violent, ce serait contre-productif.",
      condition:
        "Le Carlin est un chien d'intérieur. Il n'est pas bâti pour supporter les conditions météo difficiles (grosses chaleurs, grands froids, intempéries...). La vie en appartement lui convient tout à fait et la vie de famille également. La race peut convenir à tout type de maître, qu'il soit expérimenté ou pas. Ce à quoi il aspire ? À une vie calme, reposante, à côté de son maître. Il n’a besoin de sortir que pour ses besoins et se dégourdir les pattes de temps en temps.",
      health:
        "Le Carlin supporte assez mal la chaleur. De plus, il peut faire face à des difficultés respiratoires à cause de son museau aplati. Le Carlin est surtout sujet à des affections oculaires en raison de la sensibilité de ses yeux : rougeurs et inflammations peuvent facilement survenir s'ils ne sont pas régulièrement nettoyés. Chez la femelle, des problèmes à la mise-bas sont assez fréquents.",
      lifespan:
        "L'espérance de vie d'un Carlin se situe, en moyenne, entre 12 ans et 15 ans.",
      hygiene:
        "Le Carlin n'est pas un chien particulièrement difficile à entretenir. Il demande simplement à être brossé régulièrement, notamment durant la mue. Son poil, sa peau et ses yeux doivent être propres et soignés pour éviter les maladies. Il est recommandé de brosser le chien toutes les semaines en utilisant une simple carde (peigne de cardeur à la main, formé d'une planche garnie de pointes d'acier recourbées). Le brossage devient quotidien en période de mue. Le Carlin peut prendre un bain s'il s'est beaucoup sali, mais il ne faut pas le baigner trop fréquemment. Après un bain, les plis du visage, foyers d'infections, sont a sécher correctement. Les yeux sont à nettoyer avec un sérum physiologique. Les plis sous le nez et les yeux sont aussi à nettoyer. Il ne faut également pas hésiter à vérifier de temps en temps l’état de ses oreilles. Couper ses ongles est également recommandé. Si vous êtes novice en la matière, il est préférable de demander des conseils à un vétérinaire. Enfin, brosser ses dents régulièrement permet d'éliminer l'accumulation de tartre et la prolifération de bactéries.",
      food: "Le Carlin a besoin d’une alimentation adaptée à sa dépense énergétique, souvent peu importante. Dès lors, son régime alimentaire est composé de croquettes de haute qualité, qui rassembleront toutes les vitamines et nutriments indispensables à la bonne santé de ce canidé. Sa nourriture doit être divisée en 2 repas par jour. Pour éviter tout risque d'obésité dont le Carlin peut être sujet, il est important de lui donner des proportions appropriées.",
      activity:
        "Le Carlin ne demande que peu d'exercice. C'est un chien relativement casanier. Ses sorties quotidiennes et quelques jeux lui permettent de s'épanouir et de rester vif. Quelques promenades peuvent lui convenir, du moment qu’il est en bonne compagnie.",
    },
    {
      title: 'Bouledogue Francais',
      img: 'https://www.woopets.fr/assets/races/000/070/bannerbig2021/bouledogue-francais_2.jpg',
      brief:
        'Le Bouledogue français est un molosse de petite taille. Il est parfois perçu comme féroce alors qu’il cache une affection extrême pour son propriétaire et un caractère joyeux, joueur, au tempérament très agréable pour les plus grands et les enfants. Ce canidé se veut très doux, même s’il n’y paraît pas au premier abord. Il est très recommandé pour les personnes âgées, car il n’a pas besoin d’exercice pour être comblé. Ainsi, il convient également à la vie d’intérieur, car il ne demande pas de grands espaces pour se défouler. Ses sorties quotidiennes lui suffisent amplement.',
      history:
        'L’histoire du Bouledogue français remonte au 19e siècle. Néanmoins, il est intéressant de revenir au 3e siècle avant J.-C. pour mieux le comprendre. Surnommé Le Molosse, Alexandre 1er d’Epire aurait offert à Alexandre Le Grand un chien qui serait l’ancêtre du Bouledogue Anglais et un ratier. Apparu dans les années 1980 à Paris, et plus principalement aux Abattoirs de la Villette, le Bouledogue Français est rapidement devenu l’égérie de grandes célébrités parisiennes. Ce dernier, auquel on a enlevé toute forme d’agressivité au fil des années, est apparu après 1835 et l’interdiction des combats de chiens outre-Manche. Le Bouledogue Français, lui, naît à l’issue d’un croisement entre le Toy Bulldog et le Doguin. C’est en 1880 que son nom actuel apparaît. Il est apparu les premières fois du côté des Abattoirs de la Villette.',
      physical:
        'Son poil : généralement assez court. Sa couleur : fauve, s’il s’agit d’un chien bringé (coloration du pelage, caractérisée par des rayures discontinues de couleurs différentes), avec une charbonnure foncée (taches noires) et différentes nuances allant du rouge au café au lait ; ou blanc et bringé. Sa tête : large, carrée et très forte, avec des plis et des rides. Ses oreilles : attachées hautes, portées droites. Ses yeux : grands, ronds et foncés. Son corps : doté d’un dos de carpe, large et musclé, la croupe est bien inclinée et la poitrine assez cylindrique, son poitrail (devant du corps du chien) est bien ouvert. Sa queue : courte, elle est souvent tordue ou coupée naturellement et pointue.',
      behaviour:
        "Le Bouledogue Français est un chien de compagnie d’un tempérament très joyeux. Doux et joueur, il est considéré comme un camarade de jeu idéal pour les enfants. Il représente un gentil allié pour les personnes âgées. En vieillissant, il peut aussi bien être l'amuseur public ou rester relativement paisible. Il demeure toujours dépendant de son maître auprès de qui il a besoin de rester. Il est un excellent chien de compagnie pour les plus jeunes et les plus anciens.",
      education:
        'Différents exercices, effectués avec ce chien dès son plus jeune âge, permettent de le rendre agréable et sociable. Il faut aussi lui enseigner la propreté, l’obéissance et le désensibiliser à la solitude. En l’occurrence, ce chien, toujours en quête de choses à apprendre, peut se montrer jaloux et possessif, c’est pourquoi il faut l’éduquer très tôt pour qu’il ne développe pas ce trait de caractère.',
      condition:
        'Chien d’appartement par excellence, le Bouledogue Français n’aboie pas souvent et s’adapte à toutes les circonstances. Ce chien n’a aucun besoin particulier d’exercice physique. Il n’est guère endurant et se satisfait d’une vie de pantouflard. Les simples promenades quotidiennes lui vont comme un gant. Il adore jouer, à condition que ça ne soit pas très physique ou que cela dure un bref instant.',
      health:
        'Le Bouledogue Français, par son museau très court, peut souffrir d’un problème de respiration, notamment en cas de fortes chaleurs. Il faut donc éviter de le laisser trop longtemps exposé au soleil. Il dispose d’une sensibilité importante aux pathologies respiratoires et du dos. En effet, son museau plutôt court favorise les brachycéphales, occasionnés par un allongement du voile du palais et des narines pincées. Dès lors, il n’est pas rare d’entendre le Bouledogue Français ronfler lorsqu’il dort. Par ailleurs, ses yeux sont relativement fragiles et nécessitent un entretien régulier à l’aide d’une lotion adaptée. Enfin, ce chien étant sujet aux hernies discales, il est essentiel de veiller à son alimentation pour éviter tout risque d’obésité.',
      lifespan:
        "L'espérance de vie d'un Bouledogue Français se situe, en moyenne, entre 9 ans et 11 ans.",
      hygiene:
        "Grâce à son poil ras, le Bouledogue Français ne demande qu’un simple entretien, un coup de brosse par semaine est suffisant. Une pince spéciale existe pour la coupe des griffes. Pour son bain, il est conseillé d’utiliser un shampoing au PH neutre. Les yeux se nettoient avec du dacryosérum ou de l’ocryl. Les oreilles sont à vérifier et à nettoyer régulièrement afin de repérer et d'éviter d'éventuelles infections. Enfin, les rides et plis, qui demandent une attention particulière, peuvent être nettoyés avec du sérum physiologique. Une fois bien secs, il faut y appliquer de la vaseline.",
      food: 'Le Bouledogue Français doit avoir une alimentation équilibrée, car il est sujet à des problèmes digestifs. Ainsi, son poids doit stagner entre 8 et 14 kg à l’âge adulte. Son régime alimentaire se compose essentiellement de croquettes premium que l’on trouve dans les magasins spécialisés. Les croquettes à l’agneau, viande appréciée des Bouledogues Français, sont recommandées. Il doit avoir deux rations quotidiennes au maximum.',
      activity:
        "Le Bouledogue Français est un citadin, mais il apprécie particulièrement les balades, d’autant que sa musculature puissante a besoin d’exercices réguliers. En revanche, il est déconseillé de faire un jogging ou de se balader avec lui près d’un plan d’eau. Doté d'un mauvais souffle, il souffre également de quelques difficultés pour nager.",
    },
    {
      title: 'Bouledogue Anglais',
      img: 'https://www.woopets.fr/assets/races/000/099/bannerbig2021/bulldog-anglais_2.jpg',
      brief:
        'Le Bulldog Anglais se distingue au premier abord par sa tête massive et inégalement plus grande que le reste du corps qui lui donne un air grognon. Ses babines toujours en suspension font également partie de ses principaux traits. Dès qu’on voit l’animal, on note une grande robustesse malgré ses pattes très courtes.',
      history:
        "Au XIIIe siècle, les Bulldog Anglais ont été sélectionnés pour leur férocité. Ils étaient alors utilisés en Angleterre pour le bullbaiting. C’est un type de sport qui mettait en confrontation ces chiens aux taureaux. La pratique a ensuite disparu en 1837 et la race commença à se faire rare jusqu’à ce que des chasseurs passionnés s'en occupent. Une nouvelle éducation leur fut inculquée et il en résulte aujourd’hui des animaux de compagnie idéals. Leurs origines leur confèrent un grand courage et une grande férocité tandis que le dressage dont ils ont bénéficié en fait des animaux très affectueux et très sociables. Le standard de la race actuel en vigueur date de 2010.",
      physical:
        'Son poil : très court avec une structure lisse et fine. Sa couleur : uniforme (rouge, noire, fauve, blanc, etc.) sur tout le corps sauf au niveau du masque qui est noir ; ou panachée avec du blanc Sa tête : très imposante est couverte d’une peau très ridée avec un front assez plat et non proéminent. Un sillon frontal traverse le haut des yeux. Ses oreilles : assez petites en forme plus ou moins courbée. Elles sont assez écartées l’une de l’autre. Ses yeux : de dimension moyenne et de forme circulaire. Ils ont une couleur noire qui ne laisse presque aucune place au blanc. Son corps : est trapu avec un poitrail robuste. D’où la capacité de l’animal à vite courir. Il est néanmoins peu endurant. Sa queue : n’est pas couverte de poils rudes et est ronde. Elle est plus ou moins courte et ne se lève jamais au-dessus de la hauteur du corps.',
      behaviour:
        "Le Bulldog Anglais est un animal d’une grande force. Affectueux, il sait faire preuve d'une grande docilité. Sa douceur extrême lui vaut parfois qu'on le traite de paresseux. Le Bulldog Anglais aime beaucoup s’amuser et être entouré de sa famille. Intelligent, il s’adapte à presque tous les jeux et se révèle être une formidable compagnie pour les enfants. Le Bulldog Anglais est très protecteur avec les siens et méfiant avec les étrangers.",
      education:
        "Têtu et sensible, il est capable de ne plus vous marquer la moindre attention pendant plusieurs jours s'il juge une réprimande injustifiée. Le plus important pour le chiot Bulldog est de lui apprendre la signification du non. Le dresseur doit être très rigoureux et faire attention à tout ce qui lui est autorisé et interdit. Le Bulldog Anglais a également besoin de beaucoup d’attention.",
      condition:
        'Paresseux, le Bulldog Anglais aime la vie sédentaire et ne se lasse pas de passer du temps à la maison ou en appartement. Il peut se coucher près de vous pendant des heures. De petites balades de temps à autre sont les bienvenues.',
      health:
        "Le Bulldog Anglais est très sensible au froid et aux fortes chaleurs. Il faut veiller à ne pas le sortir en cas de températures extrêmes. En effet, la chaleur peut provoquer une suffocation de l'animal ou à l'inverse de violents tremblements en cas d'environnement froid. L’animal n’a pas une grande endurance, il ne faut pas le soumettre à de longues courses. Si le chien a la sténose des narines ou manifeste des maux de dos, il est conseillé de consulter rapidement un vétérinaire.",
      lifespan:
        "L'espérance de vie d'un Bulldog Anglais se situe, en moyenne, entre 8 ans et 10 ans.",
      hygiene:
        "Les yeux du Bulldog Anglais sont particulièrement irritables. Il est conseillé de les nettoyer régulièrement avec du sérum physiologique et du coton. Quant aux oreilles, il existe des produits à utiliser pour les nettoyer ne serait-ce qu’une fois par semaine. L’entretien de ce chien nécessite une attention particulière au niveau de la peau en raison des nombreux plis cutanés, qui renferment l'humidité et la chaleur. Pour cela, vous pouvez faire usage d’un linge propre et non humide afin d’éviter les infections. Le Bulldog Anglais peut être amené à baver énormément, dans ce cas-là, il faudra lui essuyer la bouche régulièrement.",
      food: 'Le régime alimentaire du Bulldog Anglais se fait à base de croquettes de haute qualité, adaptées à sa morphologie et à sa croissance rapide. Ces croquettes sont à retrouver dans les animaleries ou boutiques spécialisées.',
      activity:
        "Vu son irritabilité à la chaleur, le Bulldog ne doit pas être régulièrement sorti dans les conditions de grandes fraîcheurs et de fortes chaleurs. Mais lorsque le temps est agréable, des balades de quelques dizaines de minutes lui seront d’un grand bien. Mais de préférence, ne pas l’associer à votre séance de footing, car son cœur est trop fragile pour ce genre d'activités.",
    },
    {
      title: 'Braque de Weimar',
      img: 'https://www.woopets.fr/assets/races/000/087/bannerbig2021/braque-de-weimar_2.jpg',
      brief:
        'Chien d’arrêt d’origine allemande, le Braque de Weimar est de taille moyenne à grande. Il arbore un corps athlétique, à la fois élancé et musclé. Compagnon de vie idéal pour les familles, il est également le chien de chasse par excellence.',
      history:
        'On raconte que les origines du Braque de Weimar remontent à une meute de chiens gris que Louis IX aurait ramenée de Palestine. Son arrivée en Allemagne daterait du 15e siècle, mais aucune source ne peut affirmer qu’il soit vraiment né à Weimar. Le Grand Duc Karl-August aurait été le premier possesseur d’un Braque de couleur grise en Saxe-Weimar au 17e siècle. Il faisait appel à son chien pour chasser des loups et des sangliers ou pour tuer des renards. Les croisements du Braque de Weimar avec d’autres races prennent fin en 1890. Il est donc le plus ancien chien d’arrêt en provenance d’Allemagne. Ce n’est qu’au 20e siècle que la variété de Braque à poil long apparaît.',
      physical:
        'Son poil : il est court, dru et très épais la plupart du temps, mais certains individus ont un poil assez long. Sa couleur : toujours des nuances de gris : gris souris, gris argenté ou gris foncé ressemblant au bleu. Sa tête : proportionnelle au corps, elle est moins large chez les femelles. Le stop est très peu marqué. La truffe est grande et le nez, long. Ses oreilles : larges et longues, elles atteignent la commissure des babines. Elles sont attachées haut. Ses yeux : arrondis et légèrement obliques, ils sont bleus de la naissance à 6 mois, puis prennent une couleur ambre. Son corps : long et ferme. Sa queue : puissante, elle est portée assez bas. Elle peut être coupée.',
      behaviour:
        "Le Braque de Weimar est aussi doué pour la chasse que pour les jeux avec des enfants. Son dynamisme inépuisable en fait un véritable chien d’action. Il s’adapte facilement à n’importe quelle activité sportive même si son flair étonnant le prédispose pour la chasse. Il peut retrouver des gibiers ou même des personnes sans difficulté. Il se montre très affectueux envers son propriétaire et peut se montrer méfiant à l'égard des étrangers.",
      education:
        'Le Braque de Weimar a besoin de fermeté dès son plus jeune âge. Il peut être têtu ou se transformer en pot de colle. Il s’attache très facilement à ses maîtres et se sent un peu comme un membre à part entière de la famille. C’est un chien qui doit donc être habitué au mode de vie de la maisonnée le plus tôt possible pour ne pas se sentir délaissé ou pire, s’ennuyer. Un Braque de Weimar qui s’ennuie devient rapidement un fléau pour ses maîtres.',
      condition:
        'Le Braque de Weimar peut vivre dans un appartement à condition d’être sorti plusieurs fois par jour et assez longuement. Marcher au pas ne l’intéresse pas vraiment, il a besoin de gambader pour donner libre cours à son énergie débordante. Le foyer idéal pour le Braque est une résidence avec cour et/ou jardin ou une maison à la campagne pour qu’il ne soit pas frustré à force de rester enfermé.',
      health:
        'Le Braque de Weimar est très robuste et ne rencontre aucun problème de santé majeur. Il faut toutefois veiller à ce que ses vaccinations soient à jour, en particulier s’il participe à des concours et/ou des missions (recherche pour les forces de l’ordre ou accompagnement de personnes aveugles par exemple). C’est une race prédisposée à des retournements d’estomac et certaines dysplasies, mais peu d’individus sont atteints par ces maladies. De simples dépistages permettent de vérifier l’état de santé du Braque.',
      lifespan:
        "L'espérance de vie d'un Braque de Weimar se situe, en moyenne, entre 10 ans et 12 ans.",
      hygiene:
        "Le Braque de Weimar est un sportif né. Il a de ce fait besoin de bouger tout le temps. Son pelage n’a pas besoin d’un entretien particulier. Le Braque de Weimar ne demande qu’un brossage par semaine. Il faut bien nettoyer son poil durant la période de mue et procéder à des déparasitages réguliers. Il peut prendre un bain quand cela se révèle vraiment nécessaire. Vérifier ses yeux et ses oreilles régulièrement permet de s'assurer qu'il n'y ait pas de traces de saletés ou d'une quelconque infection. Ses dents sont à brosser régulièrement pour éliminer l'accumulation de tartre et la prolifération de bactéries. Enfin, s'ils ne s'usent pas naturellement, ses ongles sont à couper. Si vous êtes novices en la matière, il est recommandé de demander des conseils à un vétérinaire.",
      food: 'En raison du risque de distorsion de l’estomac, le Braque de Weimar doit manger 2 fois par jour à des heures régulières. Il est important de ne pas pratiquer d’exercices physiques avant et après les repas. Son régime alimentaire est à base de croquettes de haute qualité. La quantité varie en fonction de sa dépense énergétique journalière.',
      activity:
        'Le Braque de Weimar ne supporte ni l’inactivité ni le fait de rester enfermé toute une journée. Il faut plus de 2 heures de promenade par jour pour le satisfaire. L’Agility, l’obéissance ou le canicross sont autant d’activités potentielles pour ce canidé qui a besoin de se dépenser. Il apprécie également les séances de jeu avec son propriétaire et sa famille.',
    },
    {
      title: 'Fox Terrier',
      img: 'https://www.woopets.fr/assets/races/000/192/bannerbig2021/fox-terrier_2.jpg',
      brief:
        "Le Fox Terrier est un petit chien plein d'énergie et de force, malgré ses dimensions réduites. Il est harmonieusement construit et dégage une impression de grande fierté, notamment lorsqu'il est en position debout. Sa stature évoque alors celle du cheval de chasse. On distingue 2 variétés de Fox Terrier : celle à poil lisse (standard FCI N°12) et celle à poil dur (standard FCI N°169). Cette dernière est reconnaissable à la barbe et la moustache que porte le chien.",
      history:
        "D'origine britannique, le Fox Terrier est l'une des plus anciennes races de terriers. Elle descend probablement du même type de chien ayant engendré le Manchester Terrier et le Bull Terrier. Le premier standard de la race a été rédigé en 1876. Si le Fox Terrier est aujourd'hui un excellent chien d'exposition et de compagnie, c'est surtout pour la chasse que la race a été développée. Comme son nom l'indique, sa spécialité est de débusquer le renard qui se cache dans son terrier afin de permettre aux chasseurs de poursuivre leur tâche. Il est également doué pour déloger les rongeurs et toutes sortes de nuisibles. Les qualités recherchées pour le travail sont donc la vitesse, la petite taille, la détermination et le courage. La race du Fox Terrier à poil lisse a été définitivement reconnue par la FCI en juin 1993, tandis que celle à poil dur l'a été en mai 1955.",
      physical:
        "Son poil : lisse, droit, plat et dense chez le Fox Terrier à poil lisse. Dur et dense chez le Fox Terrier à poil dur, avec une longueur de 2 cm sur les épaules et de 4 cm sur le dos, le garrot, l'arrière-main et les côtes. Chez la variété à poil dur, toujours, la texture est rêche au niveau des mâchoires et des membres. Sa couleur : majoritairement blanche avec des marques feu et/ou noires, chez les 2 variétés. Sa tête : crâne plat et dont la largeur s'amenuise à mesure que l'on se rapproche des yeux. Le stop est très légèrement marqué, la truffe est noire et les mâchoires sont dotées d'une forte musculature. Ses oreilles : en forme de V, de petite taille, tombant en avant et contre les joues. Ses yeux : de couleur foncée, de forme arrondie, bien enfoncés dans l'orbite et affichant une expression de vitalité et d'intelligence. Son corps : dos court, horizontal et solide. Le rein est puissant, la poitrine bien descendue sans être large, les côtes arrière légèrement cintrées et celles postérieures de bonne longueur. Sa queue : forte, attachée haut, portée droite et gaiement, jamais enroulée. Etait écourtée par le passé.",
      behaviour:
        "Le Fox Terrier est un chien débordant d'énergie et de vivacité. Alerte, courageux et intelligent, il sait se montrer à son avantage lorsqu'il garde la maison de son maître. Ce qui ne l'empêche pas d'être un excellent chien de compagnie, notamment vis-à-vis des enfants grâce à son goût prononcé pour le jeu. Son entente avec ses congénères et les autres animaux est tributaire de la qualité de sa socialisation, car le Fox Terrier est une forte tête qui aime prendre le dessus sur son entourage.",
      education:
        "Le Fox Terrier nécessite une éducation ferme, car le chien est assez têtu et dominant. Il ne s'agit toutefois pas de rechercher le rapport de force, mais plutôt de lui montrer très tôt les limites à ne pas outrepasser. Un Fox Terrier bien éduqué cherchera toujours à faire plaisir à son maître. Convenablement socialisé, il cohabitera mieux avec son entourage. Attention à son penchant très prononcé pour l'aboiement !",
      condition:
        "Le Fox Terrier est bien plus heureux à la campagne qu'en milieu urbain. Bien qu'il soit de petite taille, il apprécie beaucoup moins la vie en appartement que celle dans une maison avec un grand jardin clôturé, lui laissant la possibilité d'évoluer librement et de monter la garde, rôle qu'il affectionne tout particulièrement. Le Fox Terrier conviendrait à un maître actif, capable de lui consacrer du temps et de l'énergie au quotidien.",
      health:
        "Le Fox Terrier est un chien particulièrement résistant. Il est néanmoins recommandé de surveiller l'état de ses vertèbres, de ses yeux et sa santé cardiaque. Le Fox Terrier fait, par ailleurs, partie des races prédisposées au mégaoesophage congénital, au même titre que le Berger Allemand, le Golden-Retriever, le Labrador-Retriever ou encore le Setter Irlandais.",
      lifespan:
        "L'espérance de vie d'un Fox Terrier se situe, en moyenne, entre 10 ans et 13 ans.",
      hygiene:
        "La mue du Fox Terrier est très peu marquée chez les 2 variétés. L'entretien est peu contraignant chez le Fox Terrier à poil lisse, mais plus fastidieux chez celui à poil dur. Le brossage doit être au moins hebdomadaire. Chez le Fox Terrier à poil dur, épilations (tous les 3 mois environ) et toilettages s'imposent, car de ces soins dépendent non seulement l'aspect du chien, mais aussi la santé de sa peau. Ils doivent toutefois être pratiqués par des professionnels : s'ils sont mal réalisés, ils risquent d'altérer la qualité du poil et sa couleur.",
      food: 'Le régime alimentaire du Fox Terrier doit être à base de croquettes de haute qualité. Une ration équilibrée et en lien avec sa dépense énergétique lui conviendra et répondra à ses besoins quotidiens.',
      activity:
        "Le Fox Terrier a besoin de beaucoup d’exercice pour maintenir son équilibre physique et mental. C'est un chien débordant d'activité et qui doit donc pouvoir se dépenser. Les jeux agrémentant ses longues sorties quotidiennes lui permettent d'exprimer pleinement ses qualités d'éveil et d'intelligence.",
    },
    {
      title: 'Basset des Alpes',
      img: 'https://www.woopets.fr/assets/races/000/022/bannerbig2021/basset-des-alpes_2.jpg',
      brief:
        'Le Basset des Alpes est un chien de chasse robuste, de construction solide et bas sur pattes. Il est également caractérisé par une musculature ferme et une ossature bien développée.',
      history:
        "Le Basset des Alpes correspond à une race très ancienne, puisque les ancêtres de ce chien présentant une apparence similaire étaient déjà utilisés par les chasseurs de l'Antiquité. Durant la première moitié des années 1880, il était le chien de chasse préféré du prince héritier Rodolphe de Habsbourg, si bien qu'il les emmenait systématiquement avec lui lors de ses battues en Turquie et en Egypte. D'abord appelé Basset des Alpes de l’Erzgebirge, il a été reconnu par l'association cynologique faîtière autrichienne comme 3e race de chien de rouge (recherche au sang) en 1932. Ce n'est que 43 ans plus tard que la dénomination actuelle, celle du Basset des Alpes, sera adoptée. C'est la date à laquelle la Fédération Cynologique Internationale (FCI) reconnaît la race à titre définitif. La FCI la reclasse ensuite (en 1991) parmi les chiens de recherche au sang dans le groupe 6.",
      physical:
        "Son poil : très dense, bien couché, couvrant tout le corps. Le poil de couverture est associé à un sous-poil épais. Sa couleur : fauve foncé à rouge, avec ou sans étiquetage noir. Ou noir avec des marques rouge-brun au niveau de la tête, du poitrail, des membres, des pieds et de la face intérieure de la queue. Sa tête : crâne légèrement bombé et stop marqué. La truffe est noire et le museau fort. Ses oreilles : attachées haut, dépourvues de plis, larges, pendantes, moyennement longues (atteignent les canines) et aux extrémités arrondies. Ses yeux : de couleur marron foncé. Les paupières sont bien noires et bien appliquées sur le globe oculaire. Son corps : le rapport entre la hauteur au garrot et la longueur du corps est de 2:3. Le tronc est solide, plutôt long et bien musclé, le garrot légèrement sorti, le dos droit, le rein court et large, la poitrine large et bien descendue, le ventre légèrement remonté. Sa queue : épaisse à sa base, attachée haut, portée légèrement basse, de bonne longueur (atteint tout juste le sol), garnie d'un poil plus long sur sa face intérieure.",
      behaviour:
        "Le Basset des Alpes est un chien éveillé, aimable et dégageant une certaine assurance. Courageux et infatigable, il est un très bon chien de chasse en milieu alpin. Il est également un chien de famille agréable et peut même s'avérer bon gardien.",
      education:
        "Pour ce genre de chien plutôt indépendant et actif, il convient de lui apporter une éducation précoce, faite d'un mélange de fermeté et de douceur. Pris en charge suffisamment tôt, il apprend vite et bien.",
      condition:
        "Le Basset des Alpes est le chien de chasse par excellence. A ce titre, il ne peut s'adapter à un mode de vie citadin qu'à la condition de pouvoir se dépenser longuement et fréquemment. Si c'est le cas, il fera un excellent compagnon pour toute la famille, notamment les enfants. Son environnement de prédilection reste une maison avec jardin clôturé.",
      health:
        "Le Basset des Alpes est un chien robuste et résistant. Il n'y a pas de prédisposition particulière à une maladie chez cette race, qui jouit par ailleurs d'une assez bonne espérance de vie (entre 12 et 15 ans).",
      lifespan:
        "L'espérance de vie d'un Basset des Alpes se situe, en moyenne, entre 10 ans et 12 ans.",
      hygiene:
        "Même si le Basset des Alpes est doté d'un poil double qui lui confère une assez bonne protection contre les rigueurs des paysages alpins, ce chien est plutôt facile à entretenir et ne réclame pas de gros efforts sur ce point. L'entretien doit cependant rester régulier. Il est recommandé de brosser le chien toutes les semaines pour nettoyer son pelage et protéger sa peau. Ses oreilles pendantes sont à inspecter après les sorties et de manière régulière.",
      food: 'eh bah il faut manger. Il faut te forcer',
      activity:
        'Il a besoin de rester actif et stimulé pour être heureux. Chasseur-né, il ne peut se contenter de brèves sorties. Pour le satisfaire sur ce plan, de longues promenades quotidiennes sont nécessaires, idéalement sur des étendues de campagne ou boisées.',
    },
    {
      title: 'Husky Siberien',
      img: 'https://www.woopets.fr/assets/races/000/213/bannerbig2021/husky-siberien_2.jpg',
      brief:
        "De taille moyenne, le Husky Sibérien est un chien à l’allure élégante et souple. Hyperactif, il sert traditionnellement de chien de traîneau. C'est un chien qui sait se montrer indépendant, mais il n’apprécie pas la solitude pour autant.",
      history:
        'Comme son nom l’indique le Husky Sibérien est originaire de Sibérie. Une région connue pour son froid. À la base, leur apparition est due aux Indiens Chukchies qui souhaitaient disposer de chiens capables de tirer leurs traîneaux. Leur légende associe la naissance du Husky de Sibérie au fruit de l’amour entre un loup et la lune. Ce qui explique pourquoi il a l’allure d’un loup doté d’une queue en forme de croissant de lune. Au début du 20e siècle, un marchand de fourrure d’origine russe importe les premiers Huskies Sibériens en Alaska pour prendre part à une course de 653 km. Cette race a été officiellement reconnue en 1966.',
      physical:
        'Son poil : droit et d’une longueur moyenne, il forme une fourrure épaisse. Sa couleur : la robe peut être noire, blanche, grise, sable ou d’une tout autre couleur. Les taches et marques faciales caractérisent les individus bicolores. Sa tête : elle est de forme ronde. Le museau, proportionnel au crâne, s’affine en se rapprochant de la truffe. Ses oreilles : triangulaires, mais légèrement arrondies à la pointe, elles sont dressées, attachées haut et assez rapprochées. Elles sont garnies, épaisses et de taille moyenne. Ses yeux : légèrement obliques, elles sont en forme d’amande. Ils peuvent être bleus, marron ou présenter des iris de couleurs différentes. Son corps : modérément compact, il est très bien proportionné. Sa musculature est bien développée. Sa queue : recourbée sans former une boucle, elle ne retombe ni sur les côtés ni sur le dos.',
      behaviour:
        'Le Husky de Sibérie possède une intelligence au-dessus de la moyenne. Bien qu’hyperactif, il sait se montrer doux et docile. Il est d’une grande fidélité à son maître, sans pour autant se montrer possessif comme peuvent l’être des chiens de garde. Il peut être placé dans la catégorie des chiens de garde, même s’il n’est pas forcément très méfiant à l’encontre d’étrangers. l n’est également pas agressif envers ses congénères. Particulièrement gentil, le Husky convient parfaitement aux familles avec enfant. Il est indépendant mais pas solitaire puisqu’il a l’habitude de vivre en groupe. Ainsi, son maître doit être constamment présent à ses côtés.',
      education:
        'L’éducation du Husky Sibérien doit commencer avant qu’il n’atteigne l’âge de 6 mois parce que cette race devient très rapidement adulte. C’est lui qui décide si ses maîtres sont dignes de lui ou pas. D’où l’intérêt de le traiter avec respect, affection et cohérence dès le départ. Faute de quoi, il sera difficile à contrôler et aura même tendance à fuguer. L’éducation du Husky de Sibérie passe donc forcément par la patience et le calme, sans pour autant devoir céder à tous les caprices du chien.',
      condition:
        "Le Husky Sibérien peut s'adapter à la plupart des modes de vie à condition de lui donner fréquemment la possibilité de se dépenser. S'il reste trop longtemps enfermé, il risque de s'ennuyer et de développer un comportement destructeur. En raison de leur pelage épais adapté au froid, il est important de les maintenir à l'abri de trop fortes chaleurs.",
      health:
        'Les parasites comme les tiques et puces s’attaquent fréquemment au Husky Sibérien. Mais c’est un chien d’une grande robustesse qui supporte aussi bien les fortes chaleurs que les températures frisant -40°C. Son espérance de vie est d’environ 13 ans. Il peut être affecté par des maladies oculaires (cataracte, atrophie rétinienne) et de troubles digestifs. Chien de grande taille, le Husky sibérien peut également être sujet à la dysplasie de la hanche qui touche les canidés de sa morphologie.',
      lifespan:
        "L'espérance de vie d'un Husky Sibérien se situe, en moyenne, entre 11 ans et 13 ans.",
      hygiene:
        "Il a besoin d’un brossage hebdomadaire, mais le toilettage est formellement interdit. Seuls les poils qui poussent entre les doigts ou couvrent les pieds peuvent être égalisés. Ce qui est également valable pour la moustache. Brosser régulièrement les dents du chien permet d'éliminer l'accumulation de tartre et la prolifération de bactéries. Ses oreilles et ses yeux sont aussi à vérifier fréquemment pour s'assurer qu'il n'y ait aucune trace de saletés ou d'une éventuelle infection.",
      food: 'Le régime alimentaire du husky doit être riche en protéines et en lipides pour répondre à ses besoins énergétiques assez importants. Constamment en mouvement, il a besoin d’une alimentation adaptée à son mode de vie. Des croquettes de haute qualité font la plupart du temps l’affaire. Il est conseillé de se rapprocher d’un vétérinaire pour adapter cette alimentation.',
      activity:
        'Le Husky Sibérien a besoin de s’activer physiquement. Il faut donc envisager plusieurs sorties par jour ou à défaut, une promenade qui peut durer de très longues minutes. Il est sportif et très endurant.',
    },
    {
      title: 'Samoyede',
      img: 'https://www.woopets.fr/assets/races/000/276/bannerbig2021/samoyede_2.jpg',
      brief:
        "Le Samoyède est un chien de type Spitz de taille moyenne. Élégant, digne et assuré, il se distingue également par sa force et son endurance. Le Samoyède donne, par ailleurs, l'impression de sourire grâce à la position particulière des commissures de ses babines et de ses yeux. Le Samoyède est à la base un chien de traîneau. Au fil du temps, il s’est parfaitement accommodé à une vie de chien de compagnie, du moment qu’il dispose d’assez d’espaces pour se divertir et courir. Il est doux et amical, spécifiquement avec les enfants. Toujours joyeux, il apporte un bonheur constant dans son foyer. Il ne présente aucune tare et n’est pas fragile au niveau de sa santé.",
      history:
        'Race très ancienne, originaire des régions froides du nord de la Russie et de la Sibérie, le Samoyède doit son nom à la tribu qui vivait dans cette contrée extrêmement marquée par les rigueurs hivernales. Apprécié pour son endurance et énergie débordante, le Samoyède a rapidement été utilisé comme chien de traîneau par les habitants locaux. Des représentants de la race ont été ramenés en Angleterre en 1889 par le zoologiste britannique Ernest Kilburn. Le premier standard du Samoyède a été rédigé en Angleterre en 1909. La race a été reconnue à titre définitif par la FCI le 26 juin 1959.',
      physical:
        "Son poil : long, abondant, épais, dur et dense. Le sous-poil est plus court et plus doux, mais tout aussi dense. Collerette autour du cou et des épaules, plus prononcée chez les chiens mâles. Sa couleur : entièrement d'un blanc pur avec ou sans quelques marques crème. Jamais beige. Sa tête : forte, en forme de coin. Le crâne est légèrement convexe, légèrement plus large entre les oreilles. Le stop est nettement marqué. La truffe est bien développée et pigmentée, idéalement noire. Le museau est fort et haut. Ses oreilles : de petite taille, épaisses, de forme triangulaire et légèrement arrondies au sommet, droites, attachées haut et mobiles. Ses yeux : assez écartés, de couleur brun foncé, en forme d'amande, affichant une expression souriante. Son corps : légèrement plus long que haut. Le garrot est nettement marqué, le dos musclé et droit (plus long chez la femelle), le rein court et bien dessiné, la croupe bien musclée et légèrement inclinée, la poitrine large et bien descendue. Sa queue : attachée haut, courbée vers l'avant lorsque le chien est actif, parfois pendante lorsqu'il est au repos, atteignant le jarret.",
      behaviour:
        'Le Samoyède est un chien indépendant, qui aime posséder son territoire. Il n’est jamais contre des caresses, surtout en provenance des enfants qu’il adore. En effet, il est d’une nature joueuse, joyeuse et joviale. Sa bonhomie en fait un excellent chien de compagnie. Il ne doit pas être utilisé comme chien de garde car il n’en a pas les qualités ni les caractéristiques. Il ne saura pas se montrer méfiant à l’égard d’un étranger. Il préfère jouer et s’amuser. Même s’il est indépendant, il apprécie la compagnie de son maître. Il est doux et attentionné.',
      education:
        'La relation entre le Samoyède et son maître doit se faire sur la base de la confiance. Une fois gagnée par le chien, elle sera insubmersible. Cependant, le Samoyède n’est pas une race facilement éducable. En effet, il est têtu et n’hésite pas à désobéir si cette relation de confiance est bancale. Elle doit débuter dès son plus jeune âge. Il doit apprendre les bases de l’éducation rapidement et convenablement. Il faut faire preuve de patience pour arriver à ses fins, et ne pas hésiter à passer par un dresseur professionnel qui enseignera les meilleurs gestes à faire. Autrement, il peut parfois se montrer quelque peu têtu et avoir tendance à aboyer fréquemment.',
      condition:
        "Le Samoyède est heureux dans une maison avec un grand jardin clôturé. Il faut néanmoins lui éviter les chaleurs trop fortes d'une habitation en hiver. Il apprécie la vie de famille et la compagnie des enfants. Il s'adresse donc à toutes les situations familiales, pour peu que son maître ne se laisse pas dépasser et puisse lui permettre de se dépenser régulièrement. Chien nordique, le Samoyède a besoin de courir et de se dégourdir les pattes tout au long de la journée. Ainsi, des sorties épisodiques ne lui suffisent pas. Surtout, la vie en intérieur n’est pas faite pour lui.",
      health:
        "Robuste, résistant et doté d'un poil double abondant, le Samoyède supporte très bien les climats rigoureux de l'hiver, mais nettement moins les fortes chaleurs. Le Samoyède ne tombe que très rarement malade. Ainsi, il ne présente aucune pathologique héréditaire. Comme tous les chiens de grande taille, il convient de faire attention à la dysplasie de la hanche et donc modérer son activité physique les premières années de sa vie.",
      lifespan:
        "L'espérance de vie d'un Samoyède se situe, en moyenne, entre 10 ans et 14 ans.",
      hygiene:
        "Le Samoyède mâle connaît une mue par an. La femelle, en revanche, mue 2 fois par an. Ces mues sont abondantes et gênantes pour les personnes n'aimant pas les poils dans leur habitation. Le poil long et blanc du chien nécessite un entretien permanent qui n’est pas de tout repos pour le Samoyède, surtout pendant les périodes de mue. Il est recommandé de brosser le chien avec une carde ou une brosse à picots rigides. Le brossage doit être hebdomadaire en temps habituel, mais devient quotidien en période de mue. Le bain peut être donné au début de la mue, ce qui permet d'éliminer un maximum de poils morts. Il est préférable d'utiliser un shampoing spécial chien à poil blanc pour laver le Samoyède. Brosser régulièrement les dents du chien permet d'éliminer l'accumulation de tartre et la prolifération de bactéries. Ses oreilles et ses yeux doivent être vérifiés fréquemment. S'ils ne s'usent pas naturellement, ses ongles doivent être coupés. Trop longs, ils risquent d'engendrer des douleurs et des problèmes pour se déplacer. À noter que les ongles de chien contiennent des vaisseaux sanguins ; pour éviter tout accident, il est donc conseillé de demander des conseils à un vétérinaire.",
      food: 'Comme tous les chiens nordiques, le Samoyède a besoin d’un fort apport en vitamines, corps gras et en oligo-éléments. Des éléments à ajouter dans de la nourriture humaine qu’il peut ingérer sans difficulté comme de la viande, des légumes frais et des féculents. La nourriture industrielle comme des croquettes de haute qualité passe très bien également.',
      activity:
        "Le Samoyède a besoin de beaucoup d’exercice pour se dépenser. Il a été sélectionné pour ses aptitudes en tant que chien de traîneau, ce qui en fait un chien avide d'activité. De simples promenades quotidiennes ne suffisent donc pas à favoriser son équilibre et son bien-être.",
    },
    {
      title: 'Akita Inu',
      img: 'https://www.woopets.fr/assets/races/000/010/bannerbig2021/akita-inu_2.jpg',
      brief:
        "L'Akita Inu est un chien majestueux, de constitution robuste et au caractère bien trempé. De type Spitz, il est de grande taille et bien proportionné. Ce chien séduit par son aspect peluche et la grande sérénité qu'il dégage. Akita Inu est un chien parfait en tout point pour la vie de famille. Il peut être à la fois sportif ou non, tout dépend du besoin de son maître. Il est calme, prévenant, attentionné, indépendant, fidèle et n’aboie que très modérément. Son éducation est plutôt aisée et sa santé, malgré 2 maladies héréditaires, assez solide.",
      history:
        "L’Akita Inu est une race japonaise, originaire de la province d'Akita au Japon. Dès le début du 17e siècle, des canidés du nom d’Akita Matagis étaient utilisés comme chien de combat. Ce chien chassait également les sangliers, les cerfs et les ours. Puis, au milieu du 19e siècle, la race fut croisée avec le Tosa et le Mastiff. À la suite de l’interdiction des combats de chien en 1908, la race fut améliorée. En 1931, l’Akita Inu fut désigné « Monument Historique » grâce à 9 de ses chiens. Comme de nombreux chiens, l’Akita Inu a failli disparaître en même temps que la Seconde Guerre mondiale, où tous les chiens sauf les Bergers Allemands étaient capturés. Puis, des éleveurs ont réussi à le sauver et la popularité de l’Akita n’a cessé, depuis, de grandir. La volonté des éleveurs de retrouver les caractéristiques de la race d’origine a porté ses fruits si bien que celle que l’on trouve aujourd’hui est la vraie, la pure. La Fédération Cynologique Internationale a reconnu la race le 13 mars 1964.",
      physical:
        "Son poil : assez court et dur, la densité du sous-poil l'isole parfaitement tandis que le poil de couverture, bien fourni au garrot et à la croupe, le protège du mauvais temps. Sa couleur : robe généralement composée de rouge fauve, de blanc, bringée, mais plus rarement sésame (poils rouge-fauve à pointes noires). Sa tête : bien proportionnée par rapport au corps, elle présente un front large. La base du museau, large, va en s'amenuisant, mais ne se termine pas en pointe. Ses oreilles : de forme triangulaire, petites et épaisses. Légèrement arrondies en pointe, elles sont dressées et inclinées vers l'avant. Ses yeux : assez petits et en amande (presque triangulaires), brun très foncé. Son corps : une silhouette compacte avec une belle musculature, un dos droit, solide et un ventre bien relevé. Les femelles sont plus longues de corps que les mâles. Sa queue : épaisse, elle est portée haute et elle reste constamment enroulée sur le dos, telle une ellipse.",
      behaviour:
        "Très sociable, l'Akita Inu est très affectueux avec les intimes. Méfiant envers les étrangers, cela en fait un excellent chien de garde. Même s'il montre une certaine indépendance, il aime la présence humaine. Bien éduqué, il adore la compagnie des enfants et fait preuve d'une grande patience avec eux. Calme, docile et réceptif, il aboie seulement quand il le faut. Doué d'une belle intelligence, il comprend vite ce qu'on lui demande. L’Akita Inu est doté d’une très grande intelligence, qui lui permet de cerner au mieux son environnement.",
      education:
        'Très agréable à vivre, ce chien possède un fort caractère. Ainsi, une éducation stricte et ferme doit être opérée dès le plus jeune âge pour éviter qu’il ne prenne le pouvoir dans son foyer. La confiance entre lui et son maître doit être de mise. Ce dernier doit également faire preuve de douceur pour arriver à ses fins. Comme tous ses congénères, il doit savoir dès le départ qui est le maître. Bien éduqué, il se montre très propre et facile à vivre.',
      condition:
        "L'Akita Inu s'accommode très bien de la vie à la campagne ou en ville, en maison comme en appartement. C'est un chien connu pour son calme qui n'aboiera pas continuellement lorsqu'il se retrouve seul. Très discret, il ne prend pas beaucoup de place et peut se coucher tranquillement dans un coin de la pièce tout en gardant un œil ouvert sur les alentours.",
      health:
        "Même si c'est une race de chien robuste, il existe deux maladies auto-immunes qui peuvent l'affecter : l'adénite sébacée (maladie de la peau, perte de poil) et le VKH (dépigmentation de la peau, inflammation de l’œil et du cerveau). La première est une maladie de peau auto-immune qui favorise la perte de ses poils. La seconde est également une maladie auto-immune et héréditaire qui occasionne une inflammation du cerveau et de l’iris de l’œil. Les tests préventifs ne sont pas encore à l’ordre du jour. Dès lors, l’historique des pedigrees de la ligne de son chien est prépondérant avant toute adoption. Par ailleurs, comme tout chien primitif, sa santé est en tout point solide. Il ne craint pas les intempéries.",
      lifespan:
        "L'espérance de vie d'un Akita Inu se situe, en moyenne, entre 11 ans et 15 ans.",
      hygiene:
        "L'Akita Inu demande peu d'entretien, on peut le brosser une à deux fois par semaine. En période de mue, à l'automne et au printemps, il perd son poil et son sous-poil, sous forme de touffes que l'on peut facilement enlever à la main. Pendant les trois ou quatre semaines de mue, il est donc nécessaire de faire un brossage quotidien. Il est réputé très propre, car il fait sa toilette un peu comme un chat. Même pour faire ses besoins, il prend tout le temps nécessaire pour choisir l'endroit approprié. Vu qu'il est de nature propre et élégante, un bain annuel est suffisant. En plus du brossage hebdomadaire, l’Akita Inu ne demande quasiment pas d’attention. Ne pas hésiter à lui laver les yeux et les oreilles régulièrement. Pour éliminer l'accumulation de tartre et la prolifération de bactéries, les dents du chien doivent aussi être brossées régulièrement. S'ils ne s'usent pas naturellement, les ongles sont à couper. Si vous êtes novice en la matière, il est recommandé de demander des conseils à un vétérinaire.",
      food: 'L’Akita Inu est assez difficile au sujet de la nourriture. Il ne supportera pas toujours très bien la nourriture industrielle à base de croquettes, surtout si elles sont à base de céréales, très allergènes. Il faut plutôt privilégier les croquettes à base de viande ou de la nourriture traditionnelle comme de la viande crue, des légumes frais et des féculents. Carnivore, il en raffolera.',
      activity:
        "L’Akita Inu convient aux sportifs et non-sportifs. L'Akita Inu adore les balades et peut vous accompagner facilement lors de vos sorties à vélo ou pendant le jogging. Il doit être sorti quotidiennement et supporte tous les types de temps. Mais il convient aussi aux non-sportifs puisqu'il aime rester au contact de l'être humain.",
    },
    {
      title: 'Shiba Inu',
      img: 'https://www.woopets.fr/assets/races/000/284/bannerbig2021/shiba-inu_2.jpg',
      brief:
        'Le Shiba Inu est un chien vif et très intelligent. Petit, mais bien proportionné, il est doté d’une forte personnalité. Malgré son caractère indépendant, il est très fidèle et protecteur. Il n’est pas le plus câlin des chiens, mais possède de nombreuses qualités qui raviront petits et grands. Il est sincère et fidèle dans son approche comme dans sa démarche. Il est cependant difficile à éduquer car il n’obéit pas facilement. Sa santé et son entretien sont des atouts car ils ne demandent pas beaucoup de temps. Enfin, seul principal défaut : c’est un aboyeur né.',
      history:
        'Le Shiba Inu est une race japonaise installée depuis des milliers d’années. Dans les années 1898-1912, des races comme les Pointers et les Setters Anglais furent importées au Japon pour la chasse. Son nom « Shiba » désigne quelque chose de petit, comme un petit chien. Il habitait jadis dans les montagnes japonaises face à la mer et était utilisé par les humains dans la chasse au gibier ainsi qu’aux oiseaux. Du fait des croisements, la race pure des Shiba Inu commença à disparaître. Grâce à des passionnés, inquiets de cette extinction, un standard de race fut établit en 1934. Pour cela, ils avaient recherché des chiens non touchés par les croisements dans les contrées montagneuses reculées du Japon. En décembre 1936, le gouvernement japonais déclare le Shiba Inu « monument naturel » et « animal indigène du Japon ». À l’origine chien de chasse aux petits gibiers et aux oiseaux, il est maintenant plutôt un chien de compagnie.',
      physical:
        'Son poil : est dur et très rêche et le sous-poil plus doux et très dense. Sa couleur : différentes robes sont acceptées comme le roux, le sésame noir ou rouge et le noir et feu. Le sésame signifie que des poils très noirs sont mélangés au reste des poils, surtout sur le dos. On trouve des Shibas Inu couleur crème et blanc ou pinto (blanc sur plus de 50 % du corps avec des taches asymétriques), mais ils ne font pas partie des standards de la race. Sa tête : arbore un crâne au front large et un museau assez épais qui diminue en largeur vers l’avant. La truffe est noire. Ses oreilles : assez petites et de forme triangulaire, elles sont bien dressées et inclinées vers l’avant. Son corps : est solide avec le dos droit. Les muscles sont bien développés, mais l’allure générale reste légère. Sa queue : est épaisse. Elle se porte dressée vers le haut et enroulée sur elle-même vers l’intérieur.',
      behaviour:
        'Le Shiba Inu est un chien craintif, mais très protecteur. Il a la réputation de ne pas être très affectueux, mais cela dépend vraiment de la manière dont il a été élevé. Il est par contre toujours très fidèle. C’est un animal très éveillé et attentif. Assez dominateur, il ne s’entend pas toujours avec les autres mâles. Néanmoins, il apprécie grandement la présence de son maître, même s’il aime aussi son indépendance et quelque moment bien à lui, de solitude. Il est très joueur, notamment avec les enfants. Il sera un très bon gardien pour eux.',
      education:
        "Le Shiba Inu est un chien dit primitif, c’est-à-dire que sa race n’a été que très peu modifiée par l’homme et que ses instincts sont plus développés. De ce fait, son éducation n’est pas des plus simples. Il faut que le maître sache faire preuve d'autorité sans violence et soit rigoureux surtout dans les premiers mois du chiot. Comme il est peu docile naturellement, il faut faire preuve de patience pour lui apprendre les bases. Lui apprendre des tours est possible si on le récompense à chaque réussite. L’éducation doit rester positive pour renforcer la confiance du chien. L’apprentissage du rappel suit les mêmes règles de récompenses positives. Il faudra aussi, très jeune, le sociabiliser aux enfants, aux bébés et aux autres animaux.",
      condition:
        'Ce chien peut vivre en appartement à la condition de le sortir très souvent. Plusieurs promenades par jours sont nécessaires. Une maison avec jardin lui conviendra parfaitement, mais ne dispensera pas de quelques sorties. Très actif, il pourrait sinon détruire tout ce qui se trouve sur son passage puisqu’il a besoin de se dépenser quotidiennement. C’est un chien idéalement fait pour la vie à la campagne ou dans une maison avec un jardin, dans lequel il pourra flâner, courir et s’épanouir.',
      health:
        'Le Shiba Inu ne pose pas de problèmes de santé particuliers. C’est une race rustique qui ne tombe malade que rarement et qui n’est pas touchée par de graves maladies génétiques. C’est même un chien qui vieillit bien. S’il est suivi convenablement par le vétérinaire pour les vaccins, vermifuges et soins habituels, le Shiba Inu vivra assez vieux. Il s’agit de faire attention aux coups de froid ou de chaud et aux tiques. Le Shiba mâle a cependant plus de soucis que la femelle puisque sa région buccale peut être infectée. Quelques soucis digestifs sont à noter tout comme des petites allergies.',
      lifespan:
        "L'espérance de vie d'un Shiba Inu se situe, en moyenne, entre 12 ans et 15 ans.",
      hygiene:
        "Le Shiba Inu perd ses poils de couverture un peu toute l’année. Toutefois, il est sujet à 2 périodes de mues principales : au printemps et en automne. À cette période, le sous-poil tombe par paquets, c’est impressionnant. Il faut même prévoir un bon aspirateur. Par contre, son poil est autonettoyant. S’il se salit, il suffit de le laisser sécher à l’abri et la poussière tombera d’elle-même au sol. Sa robe demande cependant un brossage régulier pour lui permettre de garder sa brillance et sa beauté. Le Shiba Inu n’a pas besoin de bains fréquents. Un ou deux par an suffisent, car il est propre et son poil n’est pas malodorant. Il faut le brosser avec une carde quotidiennement en période de mue. On peut le brosser à rebrousse-poil pour donner plus de volume à sa fourrure. Il conviendra de bien vérifier l’état de ses dents, de sa bouche afin d’éviter tout développement d’infections dont il est sujet. Comme pour toutes les races, ses ongles doivent être coupés régulièrement afin d'éviter des risques de fissuration, lesquelles peuvent provoquer des douleurs. Les ongles des pattes de chien abritant des vaisseaux sanguins, il est essentiel de consulter un vétérinaire ou un toiletteur si vous êtes novice en la matière. Afin de préserver ses dents, il est également important de les brosser. Ce soin permet d'éliminer l'accumulation de tartre et la prolifération de bactéries.",
      food: 'Le régime alimentaire du Shiba doit se faire à base de nourriture dite traditionnelle, c’est-à-dire à base de croquettes de haute gamme. Ces dernières ne sont trouvables qu’en animalerie ou en magasin spécialisé. Il est important de bien vérifier que la ration journalière soit en lien avec la dépense énergétique de ce chien qui pourrait souffrir d’embonpoint s’il est suralimenté. Sa nourriture est divisée en 2 repas par jour.',
      activity:
        'Ce chien a besoin de nombreuses sorties. Il lui faut donc un maître assez sportif et qui aime passer du temps dehors. Il est possible de faire du sport avec lui.',
    },
    {
      title: 'Cane Corso',
      img: 'https://www.woopets.fr/assets/races/000/102/bannerbig2021/cane-corso_2.jpg',
      brief:
        'Le Cane Corso est un chien d’Italie. Chien de garde par excellence, il est surtout un adorable compagnon de vie pour les familles avec ou sans enfant. Il est doux, attentionné, fidèle et loyal. C’est un chien sportif qui a besoin d’une activité quotidienne. Il possède une santé robuste et s’avère très simple à entretenir.',
      history:
        "Le Cane Corso, ou chien de cour italien, descend tout droit des grands molosses romains et du Canis pugnax lors de l’époque romaine. Son nom provient du latin et désigne un chien « protecteur », « gardien des fermes ». Longtemps considéré comme le compagnon idéal des Italiens, ceux-ci avaient pour habitude de l'avoir à leurs côtés pour garder leurs biens, leur famille, leurs troupeaux et pour les accompagner à la chasse. Le Cane Corso est encore aujourd’hui bien présent dans le sud de l’Italie. Au 20e siècle, la race du Cane Corso est proche de la disparition, mais elle sera sauvée par quelques passionnés qui créent une association dans les années 1970. L’Italie reconnaît la race en 1979.",
      physical:
        'Son poil : court. Sa couleur : noir, gris plomb, ardoise, gris clair, fauve clair, fauve cerf, fauve foncé, bringé : d’où le terme de cane corso bleu pour certains d’entre eux. Sa tête : le crâne est large et légèrement arqué, le stop très marqué. Le museau est très large et profond. Ses oreilles : triangulaires et tombent vers l’avant de la tête. Généralement de couleur châtaigne, elles peuvent aussi être blanches ou tachetées. Ses yeux : de grandeur moyenne. Son corps : compact, robuste et musclé. Sa queue : insérée plutôt haute sur la croupe, elle est grosse au niveau de la racine puis effilée.',
      behaviour:
        "Intelligent, le Cane Corso est aussi énergique et très équilibré. Excellent chien de garde et de défense, docile et affectueux avec son maître, il aime aussi les enfants et leur famille. Il ne devient un redoutable défenseur qu’en cas de nécessité. Assez facile à dresser si l'on adopte les bons réflexes, il peut cependant s’avérer un peu têtu : il a besoin d’être confié à une main résolue et expérimentée. Quand il est vraiment convaincu de l’utilité de son travail, il l’accomplit avec un engagement dévoué. Le Cane Corso est avant tout un chien de garde. Il excelle dans ce domaine et sera un parfait protecteur pour son maître et sa famille adoptive. Il est avant tout dissuasif.",
      education:
        'L’éducation du Cane Corso doit être rigoureuse mais pas sévère. Il est connu pour sa robustesse et son fort tempérament : si vous êtes débutant en matière de dressage, faire appel à un éducateur canin serait appréciable. Son maître ne doit pas se laisser déborder. Il doit se montrer confiant et posséder une démarche assurée, sans quoi ce canidé sentira la possibilité de prendre le dessus et de n’en faire qu’à sa tête. En général, ce chien possède l’intelligence nécessaire pour écouter lorsqu’il comprend l’intérêt de l’exercice.',
      condition:
        "Le Cane Corso peut vivre à l'intérieur, mais de préférence à l'extérieur. Ses poils tombent peu et il aboie à bon escient. De plus, il ne bave pas, il fait donc preuve d'une propreté très appréciable. Le Cane Corso est un grand sportif. Il a besoin d’espaces pour se divertir et courir. Ainsi, il sera bien plus à son aise à la campagne ou dans une maison avec un jardin. Il doit pouvoir être sorti très régulièrement, souvent longtemps. Il peut aussi accompagner son maître dans ses joggings ou balades à vélo.",
      health:
        'Fort et costaud, il ne présente pas de problèmes particuliers, mais certains chiens de la même race souffrent de dysplasie coxo-fémorale, une affection qu’il faut surveiller de près.',
      lifespan:
        "L'espérance de vie d'un Cane Corso se situe, en moyenne, entre 10 ans et 12 ans.",
      hygiene:
        "Le Cane Corso connaît 2 périodes de mue dans l'année. L’entretien du Cane Corso se réduit à son strict minimum : un petit coup de brosse de temps en temps, une inspection du poil au retour de chaque promenade suffiront amplement. Il faut habituer le Cane Corso au brossage et au nettoyage des yeux dès son plus jeune âge afin qu’il s’habitue de façon naturelle et durable. Les dents sont à brosser régulièrement pour éliminer l'accumulation de tartre et la prolifération de bactéries. Pour lui éviter de potentielles douleurs et des problèmes pour marcher et courir, les ongles sont à couper régulièrement aussi. Il est préférable de demander des conseils à un vétérinaire, notamment à cause des vaisseaux sanguins contenus dans les ongles des chiens. Les yeux et les oreilles sont à vérifier fréquemment pour détecter d'éventuelles traces d'infection.",
      food: 'L’alimentation de ce chien peut être à base de nourriture industrielle. Des croquettes de haute qualité lui vont parfaitement. Il conviendra de réguler son régime alimentaire en fonction de sa dépense énergétique quotidienne. Sa nourriture est à divisée en 2 repas par jour.',
      activity:
        'Le travail du maître est important pour que le chiot puisse s’adapter ensuite à sa vie d’adulte : des promenades régulières pour ce chien sportif sont nécessaires pour qu’il ait un équilibre satisfaisant et qu’il se sente bien avec toute la famille. Il peut ainsi pratiquer plusieurs activités canines comme l’agility, l’obéissance, le pistage sportif ou utilitaire. Son flair est excellent puisqu’il servait par le passé comme chien de chasse pour le gros gibier. Il peut accompagner son maître lors de balades en vélo ou de joggings. Cela permettra de renforcer la relation entre lui et son maître.',
    },
    {
      title: 'Chihuahua',
      img: 'https://www.woopets.fr/assets/races/000/159/bannerbig2021/chihuahua_2.jpg',
      brief:
        "Le Chihuahua est un chien racé aux proportions harmonieuses. Tête ronde à l'expression vive, le Chihuahua est devenu au fil du temps un chien très populaire en Europe et aux États-Unis. Considéré comme le plus petit chien de race du monde, il adore être pris dans les bras par ses propriétaires et être câliné. Il a un tempérament très apprécié. De plus, il ne se montre pas gourmand en entretien ni en nourriture, et dispose d’une bonne santé alors que son gabarit pourrait faire croire l’inverse.",
      history:
        "Le Chihuahua est une race de chien très ancienne. Il est considéré comme le plus petit au monde. Son nom provient tout simplement du plus grand État de la République du Mexique : l'État de Chihuahua. Il y aurait vécu en totale liberté avant d'être domestiqué par des indigènes au temps des Toltèques. À la fin du 19e siècle, ce chien est exporté en masse vers les États-Unis et l’Europe suit.",
      physical:
        "Son poil : peut être de 2 variétés. Le premier à poil court est couché sur le corps, brillant et doux. Le deuxième à poil long demeure fin, soyeux, lisse ou légèrement ondulé. Sa couleur : toutes les couleurs et nuances possibles. Sa tête : arrondie en forme de pomme avec un museau court. Ses oreilles : dressées, grandes et très écartées. Elles s'affinent vers l'extrémité. Ses yeux : peu saillants avec une forte expression. Ils restent grands, très arrondis et de couleur foncée. Son corps : compact et bien structuré, garrot peu marqué, dos court et ferme, poitrine large et bien descendue. Sa queue : attachée haut, d'une longueur modérée et large à la base. Elle s'amincit vers l'extrémité.",
      behaviour:
        "Le Chihuahua déborde de vie et d'énergie. Son fort tempérament et son dynamisme le rend méfiant, voire agressif à l'encontre des étrangers qu’il accueille par des aboiements censés les faire fuir ! Ce trait caractéristique fait du Chihuahua un très bon chien d'alarme. Contrairement aux idées reçues, c'est un chien très actif et surtout très courageux. Il ne se laissera pas impressionner par des congénères beaucoup plus costauds que lui. Avec son maître et sa famille adoptive, il se montrera très câlin, très attachant, doux et affectueux. Il adore être pris dans les bras de son propriétaire. Son intelligence est réelle et lui permet notamment de s’adapter à tous les environnements et situations.",
      education:
        "Le Chihuahua ne présente pas de difficulté dans son éducation même s'il est préférable comme tout petit chien au fort caractère de s'y prendre dès le plus jeune âge. Il s'agit d'être ferme et il sera rapidement propre, fidèle et discret. Très têtu, il pourrait ensuite se montrer incontrôlable et n’en faire qu’à sa tête. Il ne faut pas ménager ce canidé qui répondra ensuite parfaitement aux ordres. Il est suggéré de le sociabiliser très rapidement pour qu’il puisse se montrer agréable avec les intrus et les autres animaux.",
      condition:
        'Le Chihuahua est prédisposé à vivre dans une maison. La vie en appartement lui est aussi idéale. Toutefois, il ressent souvent le besoin de passer des moments en extérieur. Il aime se défouler dans les espaces verts.',
      health:
        "À l'aspect fragile, le Chihuahua est pourtant robuste et profite d'une bonne espérance de vie. Il n’est pas du tout fragile et peut vivre jusqu’à plus de 20 ans. Il est sujet aux irritations oculaires si ses yeux ne sont pas entretenus régulièrement. Les mises-bas sont parfois difficiles en raison de sa très petite taille. On relève aussi quelques maladies congénitales du cœur (sténose pulmonaire ou endocardiose mitrale) et neurologiques (hydrocéphalie). Il peut parfois être frileux et doit donc être écarté des courants d’air et de l’extérieur en hiver.",
      lifespan:
        "L'espérance de vie d'un Chihuahua se situe, en moyenne, entre 14 ans et 18 ans.",
      hygiene:
        "Le Chihuahua est un petit chien naturellement propre qui demande peu d'entretien. Il perd de petites quantités de poils tout au long de l'année, mais un peu plus lors des mues au printemps et en automne. Le Chihuahua à poil long demandera plus d'entretien pour éviter les noeuds. Qu'il soit à poil long ou court, son pelage n'a pas d'odeur. Il convient de le brosser régulièrement – le toilettage ne prend que quelques minutes chaque semaine –, puisqu'en tant que chien de compagnie il fait partie de votre intimité. Pour le brossage, vous pouvez utiliser un gant en caoutchouc ou une brosse à poils courts et naturels. Pour le Chihuahua à poil long, il est nécessaire de le brosser au moins 3 fois par semaine pour éviter les enchevêtrements, avec une brosse démêlante. Il faut le laver de temps en temps avec de l'eau chaude et un shampooing doux. Les oreilles et les yeux sont à vérifier régulièrement pour déceler la moindre trace de saleté ou d'infection. Les ongles sont à couper s'ils deviennent trop longs. Si vous êtes novice en la matière, il est préférable de demander des conseils à un vétérinaire. Brosser les dents du chien permet également d'éliminer l'accumulation de tartre et la prolifération de bactéries.",
      food: 'L’alimentation du Chihuahua doit être à base de croquettes de haute qualité. Elle ne doit pas être trop bourrative pour ne pas venir altérer son système digestif et provoquer quelques soucis de santé. Son alimentation doit être adaptée à son âge, son activité, son état de santé et son poids.',
      activity:
        "Le Chihuahua a besoin de sorties quotidiennes. Très énergique, il a besoin de se dégourdir les pattes régulièrement. En plus des promenades, le Chihuahua peut se laisser tenter par des séances de jeu, ce qui renforcera d'ailleurs son lien avec son propriétaire. Il convient de faire attention aux conditions climatiques extrêmes (surtout le froid), car le Chihuahua demeure très frileux.",
    },
    {
      title: 'Bichon Maltais',
      img: 'https://www.woopets.fr/assets/races/000/062/bannerbig2021/bichon-maltais_2.jpg',
      brief:
        "Le Bichon Maltais est un chien de petit format, calme et très intelligent qui possède un tronc étroit et long, avec un long poil blanc et soyeux. C'est un petit chien très élégant avec un port de tête fier et distingué. Le Bichon Maltais est un adorable chien de compagnie, au pelage très fin qu’il conviendra de prendre soin avec la plus grande délicatesse. L’entretien de ce canidé est particulier. Pour le reste, son éducation et son alimentation sont plutôt aisées. C’est un chien très agréable à vivre, attaché à son maître, aux enfants et qui adore les câlins. Il est vif et éveillé et possède une santé robuste.",
      history:
        "La race du Bichon Maltais est très ancienne et remonterait à l'Antiquité. Le célèbre Aristote (384-322 av. J.-C.) fait référence à une race de petits chiens qu'il nomme 'canes melitenses' dans sa nomenclature des chiens existants à l'époque. La traduction française veut dire 'chien maltais'. À Rome, au 1er siècle avant J.-C., le nom du Bichon Maltais est Matrones. Lors de la Renaissance, bien plus tard, il fait souvent partie des œuvres de Rubens et Goya. Les plus belles dames de l’époque le bichonnent, notamment en raison de sa fourrure très agréable au toucher Son nom pourrait dériver du phénicien 'màlat' qui veut dire 'refuge' ou 'port', et dont la racine sémantique se retrouve dans la ville sicilienne de Melita. En effet, les ancêtres de ces petits chiens vivaient alors sur le pourtour de la Méditerranée Centrale dans les ports et sur les navires, où ils chassaient les rats et souris qui infestaient les magasins portuaires et les cales des bateaux. Il ne vivait pas spécialement à Malte, où il ne tire pas son nom. Le Bichon Maltais va donc être importé sur le continent sud-américain entre le 8e et le 11e siècle, donnant notamment le Bichon Havanais.",
      physical:
        "Son poil : texture soyeuse, sans ondulation, dense, brillant et très long. Il atteint facilement les 20 cm de long et il peut dépasser la hauteur du garrot. Sa couleur : blanc pur, mais il peut parfois tirer sur l'ivoire pâle. Sa tête : plutôt large avec un crâne plat. Ses oreilles : de forme triangulaire et tombantes. Elles sont situées en hauteur sur le crâne et bien pourvues en poil. Ses yeux : petits, arrondis et très foncés. Son corps : possède un tronc étroit et long, un peu plus de 20 cm au garrot. Les membres sont musclés avec une ossature robuste. Sa queue : courte et retombante.",
      behaviour:
        "Le Bichon Maltais est un petit chien enjoué et doux. Doté d'une grande intelligence, il est très vif et très attaché à son maître. Cependant, il supporte difficilement la solitude et n'appréciera pas des absences prolongées, suite auxquelles il se montrera susceptible. Capable de vivre à la ville comme à la campagne, c'est un bon compagnon de jeu pour les plus grands enfants (il risque de ne pas apprécier la brusquerie des plus petits). Sa bonhomie peut parfois faire sourire. De plus, il apprécie la présence de congénères et d’autres animaux.",
      education:
        'Le Bichon Maltais doit être éduqué le plus tôt possible pour qu’il ne puisse pas prendre de mauvaises habitudes : grimper sur les fauteuils, se montrer capricieux, être pot de colle. Il aime plus que tout les câlins et n’hésitera pas à monter sur les genoux de son maître, même sans que celui-ci ne l’y invite. De fait, il est important de faire comprendre à ce canidé que ces moments de caresses sont décidés par son maître ou sa famille adoptive. Pour le reste, il ne présente pas de difficulté à l’éducation. Pour éviter de trop grandes angoisses à ce petit chien, il est important de lui apprendre très tôt à rester seul de temps en temps.',
      condition:
        "Le Bichon Maltais ne supporte pas la solitude et sa fourrure demande un entretien quotidien. Aussi, ce chien est particulièrement adapté à la vie en appartement ou aux maisons sans jardin. Tous les types de familles peuvent accueillir un Bichon Maltais, que ce soit une famille avec des jeunes enfants ou des personnes âgées seules, du moment qu'ils sont présents pour recevoir toute l'affection que ces petits chiens souhaitent donner.",
      health:
        'Malgré ce que sa petite taille pourrait laisser penser, le Bichon Maltais est un chien robuste qui tombe très rarement malade. Il peut très occasionnellement développer quelques problèmes comme des infections oculaires ou souffrir des dents et gencives qui sont un peu plus fragiles. Enfin, il peut également se luxer une rotule. Par ailleurs, il n’apprécie pas l’humidité et le froid. Il convient d’être prudent l’hiver pour qu’il n’attrape pas un rhume.',
      lifespan:
        "L'espérance de vie d'un Bichon Maltais se situe, en moyenne, entre 12 ans et 15 ans.",
      hygiene:
        "Ce petit chien est sujet à une mue annuelle qu'il convient d'accompagner à l'aide d'une alimentation adaptée, riche en fibres végétales. Pour conserver son magnifique pelage blanc et soyeux, il est important de l'entretenir scrupuleusement. La fourrure du Bichon Maltais est longue et soyeuse, aussi elle demande un soin minutieux et quotidien. Comme elle peut dépasser en longueur la hauteur du garrot, elle requiert d'être brossée tous les jours à l'aide d'une brosse adaptée pour démêler tous les nœuds. Le Bichon Maltais peut prendre un bain régulièrement, car il a tendance à se salir facilement. Les oreilles sont à vérifier chaque semaine pour s'assurer qu'il n'y a pas la présence de saletés ou de traces d'infection. S'ils ne s'usent pas naturellement, ses ongles sont à couper. Si vous êtes novice en la matière, il est recommandé de demander des conseils à un vétérinaire. Pour éviter les infections, il est aussi nécessaire de bien nettoyer les sécrétions qui embarrassent ses yeux, ceci une fois par semaine environ, avec de l'eau tiède. Enfin, brosser les dents du chien permet d'éliminer l'accumulation de tartre et la prolifération de bactéries.",
      food: "L’alimentation du Bichon Maltais se compose uniquement de croquettes de haute qualité. En période de mue, ce régime alimentaire doit être renforcé pour apporter davantage de fibres végétales. Cela permettra à son poil de rester soyeux et doux au toucher. Sa nourriture est à diviser en 2 repas par jour, de préférence un le matin et un autre le soir. Son alimentation doit être adaptée à son poids, son âge, sa taille et son activité physique. Pour lui éviter l'obésité, il est nécessaire de déterminer avec précision sa ration quotidienne. Pour cela, vous pouvez vous rapprocher d'un vétérinaire",
      activity:
        "Malgré sa très bonne disposition à la vie en appartement, le Bichon Maltais a besoin de sorties et d'exercices. Il est énergique et supportera toutes les activités sportives que vous pourrez lui proposer. Il apprécie les promenades autant que le jeu, notamment en extérieur.",
    },
    {
      title: 'Shih Tzu',
      img: 'https://www.woopets.fr/assets/races/000/286/bannerbig2021/shih-tzu_2.jpg',
      brief:
        'Le Shih Tzu est un chien très attaché à sa famille et doté d’une forte personnalité. De petite taille et d’un poids léger, il dispose d’une vive intelligence. Ces qualités font de lui un animal de compagnie des plus agréables.',
      history:
        'La race du Shih Tzu est originaire du Tibet. En tibétain, son nom signifie « chien-lion » et dans la culture tibétaine il est apparenté au Dogue Tibétain, autrement nommé « lion des neiges ». On confond parfois la race avec le Lhassa Apso, même si de nombreuses différences existent. Historiquement, il est le produit d’un croisement entre un Lhassa-Apso et un Pékinois. Sa popularité prend son origine dans la Cité Interdite de Pékin, au 19e siècle, au moment où l’impératrice en fait son animal de compagnie. Le Shih Tzu sera alors surnommé « la perle de l’impératrice ». Et c’est après 1912 et la transformation du pays en République que cette race a migré progressivement vers l’Occident et l’Europe. Cependant, il faut attendre 1931 pour que la race arrive en Grande-Bretagne. Elle n’a été autorisée à concourir pour les expositions qu’après la Seconde Guerre mondiale. La race sera introduite par la suite en 1930 en Angleterre puis en 1953 en France.',
      physical:
        'Son poil : est long, soyeux et aucune perte de poils ne survient, quelle que soit la saison. Sa couleur : noir, blanc ou fauve majoritairement et des taches (allant du plus clair au plus sombre). On trouve aussi des Shih Tzu au pelage monochrome, mais souvent orné de mèches venant modifier les teintes initiales. Sa tête : son crâne est plat et étroit, le museau d’une taille moyenne à petite. Ses oreilles : tombent sur les côtés de la tête. Elles ont la couleur des poils qui les entourent et les recouvrent. Ses yeux : grands, ronds et foncés. Son corps : la physionomie est équilibrée. Il est cependant plus long que haut de taille. Sa queue : selon les variantes de la race, tombante ou dressée. L’extrémité peut s’enrouler sur elle-même.',
      behaviour:
        'Le Shih Tzu possède de nombreuses qualités de chien de compagnie. Il est tout mignon, toujours jovial et joueur. Il est parfois gaffeur mais, de fait de sa bouille adorable, il est impossible de lui en vouloir. Il est très intelligent et n’apprécie pas quand son maître ne se montre pas juste avec lui. Ce canidé est très sociable, doux et très calme. Il adore jouer avec les enfants à condition que ces derniers le respectent. Il est capable de bouder dans le cas où son maître le dispute, même pour pas grand-chose. Par ailleurs, il ne fait jamais preuve d’agressivité et est toujours à la recherche d’affection.',
      education:
        "Afin de lui offrir un bon dressage, il conviendra de comprendre le caractère quelque peu obstiné du Shih Tzu. Il peut parfois s'avouer têtu et ne pas vouloir obéir à ce que son maître lui demande. En effet, il n’aime pas être forcé. Il est nécessaire de passer par le jeu et l’amusement pour lui apprendre les ordres souhaités. Il sera réceptif, volontaire et amusé en retour. Patience et compréhension seront des qualités requises de la part du maître afin que cette petite boule de poils n’en fasse pas qu’à sa tête. Le Shih Tzu sait faire preuve d'une vive intelligence et a une bonne capacité d'apprentissage.",
      condition:
        'Le Shih Tzu apprécie tout type de lieu d’habitation dans la mesure où son confort personnel est assuré. Il est avant tout un chien d’intérieur. Ainsi, que ce soit l’appartement en ville ou la maison en campagne, il convient de lui garantir un lieu de tranquillité tout en prévoyant un endroit à même de lui permettre de faire de l’exercice. De nature sociable, la solitude ne lui convient pas et la présence de ses maîtres sera la condition sine qua non de son bien-être.',
      health:
        'Les maladies les plus courantes chez ce chien sont les infections urinaires, les otites et les maladies provoquées par des globes oculaires fragiles. Ses poils longs sont à l’origine de ces types d’infection et il est fortement recommandé d’entretenir son poil aussi régulièrement et fréquemment que possible. Par ailleurs, la femelle peut connaître des difficultés lorsqu’elle met bas. Pour le reste, ce canidé ne présente aucune pathologie héréditaire.',
      lifespan:
        "L'espérance de vie d'un Shih Tzu se situe, en moyenne, entre 11 ans et 14 ans.",
      hygiene:
        "Le Shih Tzu ne connaît, à l’automne ou au printemps, aucune perte de poils. La compagnie de ce chien est donc conseillée aux personnes allergiques au poil canin. Compte tenu des ses poils longs et des risques de maladies que ces derniers peuvent provoquer, un soin particulier accordé au toilettage sera nécessaire. Il est recommandé, au moins une fois par semaine, voire quotidiennement, de brosser le chien afin de retirer tout nœud ayant pu se former. Afin d’alléger les soins, il est possible de raccourcir la longueur des poils sans pour autant nuire à l’esthétique globale du Shih Tzu. Les poils ne doivent pas frotter ses yeux. Des bains sont également recommandés. Pour cela, il est nécessaire d'utiliser un shampoing pour chien. Par ailleurs, il convient de nettoyer ses yeux ainsi que ses canaux auditifs. Les oreilles peuvent être nettoyées avec du coton et une solution auriculaire au pH équilibré. De plus, prendre soin de ses dents permet d'éliminer l'accumulation de tartre et la prolifération de bactéries. Enfin, les ongles sont à couper régulièrement. Si vous êtes novice en la matière, il est recommandé de demander des conseils à un vétérinaire. Le Shih Tzu peut être amené chez un toiletteur toutes les 6 à 8 semaines.",
      food: 'Le Shih Tzu doit avoir un régime alimentaire adapté à ses besoins et à son activité quotidienne. Ce n’est pas un grand sportif, mais il peut néanmoins se dépenser lors des jeux ludiques. Ainsi, son alimentation doit être à base de croquettes de haute qualité. Pour ce qui est de sa ration, il est conseillé de se rapprocher d’un vétérinaire.',
      activity:
        'Le Shih Tzu est de nature plutôt casanière, mais étant disposé à l’obésité, une balade par jour sera tout de même nécessaire. Le Shih Tzu n’a aucunement besoin de satisfaire à une activité sportive. C’est plutôt un chien destiné à une vie d’intérieur.',
    },
  ],
  dogs: [
    {
      name: 'Gaia',
      breed: 'Cane Corso',
      img: 'https://www.woopets.fr/assets/races/000/102/bannerbig2021/cane-corso_2.jpg',
      age: '4',
      births: '2',
      sex: 'female',
    },
    {
      name: 'Athena',
      breed: 'Chihuahua',
      img: 'https://www.woopets.fr/assets/races/000/159/bannerbig2021/chihuahua_2.jpg',
      age: '3',
      births: '1',
      sex: 'female',
    },
    {
      name: 'Polka',
      breed: 'Husky',
      img: 'https://www.woopets.fr/assets/races/000/213/bannerbig2021/husky-siberien_2.jpg',
      age: '6',
      births: '2',
      sex: 'female',
    },
    {
      name: 'Kratos',
      breed: 'Rottweiller',
      img: 'https://i.f1g.fr/media/cms/orig/2021/08/31/63e1b9ec646748091ea4a3d0678b2fbb7e025fc58d2f810fb5b794a974ba8909.jpg',
      age: '4',
      births: '2',
      sex: 'female',
    },
    {
      name: 'Vergil',
      breed: 'Carlin',
      img: 'https://www.woopets.fr/assets/races/000/104/bannerbig2021/carlin_2.jpg',
      age: '5',
      births: '3',
      sex: 'female',
    },
    {
      name: 'Wojtek',
      breed: 'Berger Allemand',
      img: 'https://www.woopets.fr/assets/races/000/006/bannerbig2021/berger-allemand_2.jpg',
      age: '4',
      births: '1',
      sex: 'female',
    },
  ],
  items: [
    {
      id: 0,
      name: 'Ecuelle et gamelle',
      slug: 'Ecuelle',
      category: 'Plats',
      image: 'https://m.media-amazon.com/images/I/51au1Xr8JtL._AC_UL320_.jpg',
      price: 200,
      brand: 'Pawsitively Pure',
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        'Indispensables pour séparer aliments solides et eau potable, les gamelles du chien doivent être judicieusement choisies. On opte pour un diamètre adapté à la taille du chien, à savoir que les écuelles d’un Dogue allemand ne seront pas les mêmes que celles destinées à un Chihuahua. Une forme pyramidale et des bords hauts sont parfaits pour les races de chien à oreilles pendantes.',
      isFeatured: false,
    },
    {
      name: 'Laisse',
      slug: 'Laisse',
      category: 'Outils',
      image: 'https://m.media-amazon.com/images/I/81z+g96tPMS._AC_UL320_.jpg',
      price: 150,
      brand: 'Woof Wear',
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        'Très utile pour les promenades dans tous les lieux où les chiens doivent être tenus en laisse, cet accessoire se décline en de nombreux modèles afin de convenir au mieux à la taille – et à la force – du chien. Pour les petits gabarits ou les chiots le maître peut choisir une laisse en nylon à enrouleur réglable en longueur. On évite toutefois la laisse en cuir ou en nylon si l’on possède un chien qui mordille tout ce qui est à sa portée.',
      isFeatured: false,
    },
    {
      name: 'Medaillon',
      slug: 'Medaillon',
      category: 'Outils',
      image: 'https://m.media-amazon.com/images/I/51ShFyizewL._AC_UL320_.jpg',
      price: 300,
      brand: 'Woof Wear',
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        'En cas de fugue ou si le chien se perd, le médaillon d’identification permet à la personne qui retrouve l’animal de prendre contact avec son maître sans attendre. Sur cette petite plaque à accrocher au collier, on peut faire graver le nom du chien et le numéro de portable de son propriétaire par exemple ainsi que l’adresse de ce dernier.',
      isFeatured: false,
    },
    {
      name: 'Panier',
      slug: 'Panier',
      category: 'Meubles',
      image: 'https://m.media-amazon.com/images/I/61nk47CHzoL._AC_UL320_.jpg',
      price: 350,
      brand: 'Sniff & Snack',
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        'Le chien a besoin de disposer d’un coin bien à lui où il peut se lover en toute sécurité. Un bon panier bien confortable ou une corbeille avec coussin moelleux est l’accessoire indispensable pour le chien de petite ou de grande taille. Offrir un panier à son chien évite en plus qu’il ne squatte le canapé. En osier, en plastique ou en tissu rembourré entièrement déhoussable, peu importe ce que l’on choisit pourvu qu’il soit facile à nettoyer et que le chien s’y sente bien.',
      isFeatured: false,
    },
    {
      name: 'Brosse',
      slug: 'Brosse',
      category: 'Outils',
      image: 'https://m.media-amazon.com/images/I/51sTkkEMJ4L._AC_UL320_.jpg',
      price: 200,
      brand: 'Canine Comfort',
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        'Peigne, carde et brosse permettent l’entretien quotidien du pelage du chien. En plus de limiter la formation de nœuds, le toilettage est fondamental pour que le poil reste beau et sain, et que le chien ait fière allure. De plus, le moment du brossage est une parenthèse bien-être pour l’animal et permet au maître de vérifier la bonne santé du sous-poil mais également de rechercher toute trace de parasite comme la puce ou la tique.',
      isFeatured: false,
    },
    {
      name: 'Malle de transport',
      slug: 'Malle',
      category: 'Outils',
      image: 'https://m.media-amazon.com/images/I/71DrtiQlVyL._AC_UL320_.jpg',
      price: 500,
      brand: "Pup's Paradise",
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        'Nécessaire pour les voyages en avion ou par le train, la malle ou cage de transport s’impose également lorsque l’on décide de prendre la route en voiture avec son chien. La cage peut s’avérer tout aussi indispensable pour une simple consultation chez le vétérinaire.',
      isFeatured: false,
    },
    {
      name: 'Pince a tiques',
      slug: 'Pince',
      category: 'Outils',
      image: 'https://m.media-amazon.com/images/I/51H5Ns-eVwS._AC_UL320_.jpg',
      price: 120,
      brand: 'Canine Comfort',
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        'Cet accessoire permet d’ôter la totalité d’une tique que le chien est susceptible de ramener d’une balade. Facile d’utilisation, la pince à tiques doit être utilisée sans délai car cet acarien est bien connu pour être responsable de la maladie de Lyme et autres.',
      isFeatured: false,
    },
    {
      name: 'Thermometre',
      slug: 'Thermometre',
      category: 'Outils',
      image: 'https://m.media-amazon.com/images/I/717LAT4WgDL._AC_UL320_.jpg',
      price: 170,
      brand: 'Canine Comfort',
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        'Le thermomètre permet de prendre la température du chien lorsque celui-ci ne semble pas au mieux de sa forme. Elle est normale lorsqu’elle se situe entre 38 et 39°C. Si elle est inférieure ou supérieure il faut en rechercher la cause. Lorsque la température corporelle du chien est anormale pendant plus de 24 heures, mieux vaut consulter le vétérinaire. Il est important de noter les différents symptômes associés comme des tremblements, un état de faiblesse, des vomissements, des diarrhées, une perte d’appétit et de lui en faire part.',
      isFeatured: false,
    },
    {
      name: 'Jouet',
      slug: 'Jouet',
      category: 'Amusement',
      image: 'https://m.media-amazon.com/images/I/61hZndnz26L._AC_UL320_.jpg',
      price: 0,
      brand: 'Doggie Delights',
      rating: 4.5,
      numReviews: 10,
      countInStock: 50,
      description:
        'Ce n’est pas un mais plusieurs jouets que l’on conseille d’offrir à son chien afin de favoriser son développement et faire en sorte qu’il ne se lasse pas. Les magasins spécialisés proposent une gamme intéressante de jeux et jouets de 5 à 100 €, c’est dire l’étendue de la gamme. De l’os en caoutchouc en passant par la balle indestructible et la balançoire agility, le maître peut trouver de quoi faire plaisir à son petit compagnon.',
      isFeatured: false,
    },
  ],
  articles: [
    {
      title: "Les avantages de l'entraînement en groupe pour les chiens",
      image:
        'https://i.pinimg.com/originals/68/18/34/68183454d425a5d2e9bf625a68d2fa97.jpg',
      summary: "L'entraînement en groupe pour les chiens présente de nombreux avantages pour les propriétaires et leurs compagnons à quatre pattes. Tout d'abord, il permet aux chiens de socialiser avec d'autres animaux de même espèce, ce qui peut réduire l'anxiété et les comportements agressifs. En outre, l'entraînement en groupe peut être plus stimulant pour les chiens, car ils sont exposés à des situations et des environnements variés. Enfin, l'entraînement en groupe peut être plus économique pour les propriétaires, car ils peuvent partager les coûts avec d'autres personnes. Si vous envisagez de prendre un chien, ou si vous en avez déjà un, l'entraînement en groupe est un excellent moyen de renforcer votre lien avec lui tout en lui offrant une vie épanouissante.",
      description:[
        "L'entraînement en groupe pour les chiens peut offrir de nombreux avantages pour les propriétaires et leurs animaux de compagnie." ,
        "Tout d'abord, l'entraînement en groupe permet aux chiens de socialiser avec d'autres chiens et de développer leur confiance en eux. Les chiens qui ont peu d'interactions sociales peuvent devenir timides ou agressifs, mais l'entraînement en groupe peut les aider à surmonter ces comportements indésirables." ,
        "De plus, l'entraînement en groupe permet aux chiens de découvrir de nouvelles personnes et de nouveaux environnements, ce qui les aide à devenir plus confiants et à mieux s'adapter à leur environnement." ,
        "En outre, l'entraînement en groupe peut également être bénéfique pour les propriétaires de chiens, car ils peuvent échanger des conseils et des astuces avec d'autres propriétaires de chiens et apprendre de nouvelles techniques d'entraînement." ,
        "Enfin, l'entraînement en groupe peut également être plus amusant et stimulant pour les chiens, ce qui peut les aider à rester concentrés et motivés pendant l'entraînement." ,
        "En résumé, l'entraînement en groupe peut offrir de nombreux avantages pour les propriétaires de chiens et leurs animaux de compagnie, tels que la socialisation, l'adaptation à un nouvel environnement, l'échange de conseils et astuces, et une stimulation mentale et physique supplémentaire pour les chiens.",
      ]
    },
    {
      title: 'Comment éduquer votre chiot à être propre',
      image: 'https://m.media-amazon.com/images/I/711WZe1ys8L._AC_SX425_.jpg',
      summary: "Apprendre à votre chiot à faire ses besoins à l'extérieur peut sembler difficile, mais en suivant ces étapes simples, vous pouvez facilement lui enseigner les bonnes habitudes. Nous vous donnons des conseils sur la façon de créer un horaire régulier pour les pauses pipi, les récompenses à utiliser et les erreurs à éviter.",
      description: [
        "L'apprentissage de la propreté est un aspect important de l'éducation de votre chiot. Voici comment vous pouvez aider votre chiot à devenir propre :",
        "Établissez une routine de repas régulière: Les chiots ont tendance à faire leurs besoins à des moments prévisibles, après avoir mangé ou bu, ou après une séance de jeu. Établissez une routine de repas régulière et emmenez votre chiot dehors immédiatement après chaque repas pour qu'il puisse faire ses besoins.",
        "Créez un endroit désigné pour faire ses besoins: Choisissez un endroit en dehors de la maison où votre chiot pourra faire ses besoins régulièrement. Encouragez votre chiot à aller là-bas en utilisant un commandement verbal et en le récompensant lorsqu'il a terminé.",
        "Soyez patient: Il peut prendre plusieurs semaines à plusieurs mois pour que votre chiot apprenne à être propre. Il est important de ne pas le punir s'il fait des erreurs, car cela peut perturber le processus d'apprentissage et décourager votre chiot. Au lieu de cela, encouragez-le avec des récompenses lorsqu'il fait les choses correctement.",
        "Soyez vigilant: Observez attentivement votre chiot pour détecter les signes indiquant qu'il a besoin de faire ses besoins, tels que renifler, tourner en rond ou gémir. Emmenez-le immédiatement dehors s'il montre ces signes pour qu'il puisse faire ses besoins.",
        "Soyez régulier: Emmenez votre chiot dehors à des moments prévisibles, tels que le matin, le midi et le soir, pour qu'il puisse faire ses besoins régulièrement.",
        "En suivant ces étapes, vous pouvez aider votre chiot à devenir propre de manière efficace et en utilisant une méthode positive. Il est important de se rappeler que chaque chiot est différent et que le temps nécessaire pour qu'un chiot devienne propre varie. Soyez patient et persévérant, et votre chiot finira par comprendre ce que vous attendez de lui.",
      ]
    },
    {
      title: 'Les avantages de la marche quotidienne pour votre chien',
      image:
        'https://images.unsplash.com/photo-1610708990659-f18171d1d8a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwd2Fsa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      summary:
        "La marche quotidienne est non seulement bonne pour la santé physique de votre chien, mais elle peut également être bénéfique pour son bien-être mental. Nous explorons les différents avantages pour la santé, tels que la réduction de l'anxiété et de l'obésité, ainsi que les façons de rendre les promenades plus amusantes pour votre animal de compagnie.",
      description:[
        "La marche quotidienne est un excellent moyen de maintenir la santé et le bien-être de votre chien. Voici quelques avantages de la marche quotidienne pour votre chien :",
        "Exercice physique: La marche quotidienne permet à votre chien de brûler des calories et de maintenir un poids santé. Cela peut également renforcer ses muscles et améliorer sa condition physique générale.",
        "Stimulation mentale: La marche quotidienne peut aider à stimuler l'esprit de votre chien en lui permettant de découvrir de nouveaux environnements et d'interagir avec son environnement.",
        "Amélioration de la santé: La marche quotidienne peut aider à prévenir certaines maladies courantes chez les chiens, telles que les problèmes de santé cardiaque, la dépression et l'anxiété.",
        "Renforcement du lien: La marche quotidienne peut renforcer le lien entre vous et votre chien, en vous permettant de passer du temps ensemble et de vous concentrer sur votre relation.",
        "Réduction du comportement destructeur: Les chiens qui ont une quantité suffisante d'exercice et de stimulation mentale sont moins susceptibles de développer des comportements destructeurs tels que mordre, gratter ou aboyer excessivement.",
        "Il est important de se rappeler que chaque chien a des besoins différents en matière d'exercice et de marche. Consultez votre vétérinaire pour déterminer la quantité d'exercice appropriée pour votre chien en fonction de son âge, de son niveau d'activité et de sa condition physique.",
        "En conclusion, la marche quotidienne peut offrir de nombreux avantages pour la santé et le bien-être de votre chien. Il est un moyen simple et agréable de renforcer votre lien avec votre chien et de l'aider à vivre une vie saine et heureuse.",
      ]
    },
    {
      title:
        'Les différentes races de chiens: Comment choisir celle qui convient à votre style de vie',
      image:
        'https://images.unsplash.com/photo-1475700262322-d2d5adb9e26f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNDkwMDkzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60//images.unsplash.com/photo-1475700262322-d2d5adb9e26f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNDkwMDkzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      summary: "Il existe des centaines de races de chiens différentes, chacune avec ses propres caractéristiques et besoins. Nous vous aidons à comprendre les différents facteurs à prendre en compte lors de la sélection d'une race, tels que la taille, l'énergie et les besoins de soins, pour vous assurer de choisir un chien qui convient à votre style de vie.",
      description: [
      "Le choix d'une race de chien peut être difficile, car il existe de nombreuses races différentes avec des tempéraments, des besoins en matière d'exercice et des niveaux d'entretien variés. Voici comment choisir la race de chien qui convient à votre style de vie :",
      "Déterminez vos besoins en matière d'exercice : Certaines races de chiens ont besoin de beaucoup d'exercice pour rester en bonne santé et heureuses, tandis que d'autres préfèrent des activités plus calmes. Pensez à combien de temps et d'efforts vous êtes prêt à consacrer à l'exercice de votre chien et choisissez une race en conséquence.",
      "Évaluez la taille de votre maison et de votre jardin : Certaines races de chiens sont plus adaptées à la vie en appartement que d'autres, et certaines races ont besoin d'un grand espace extérieur pour se dépenser. Assurez-vous de disposer de l'espace approprié pour accueillir votre chien.",
      "Prenez en compte votre niveau d'énergie : Certaines races de chiens sont très actives et ont besoin de beaucoup d'attention et d'interaction, tandis que d'autres sont plus calmes et indépendantes. Pensez à votre niveau d'énergie et à la quantité de temps que vous pouvez consacrer à votre chien pour choisir une race qui convient à votre style de vie.",
      "Considérez votre budget : Certaines races de chiens ont besoin de plus de soins de grooming, de nourriture de qualité supérieure et de coûts de santé plus élevés. Assurez-vous de disposer des ressources financières nécessaires pour prendre soin de votre chien en fonction de sa race.",
      "Évaluez votre personnalité : Certaines races de chiens sont plus faciles à dresser et plus affectueuses que d'autres. Pensez à votre personnalité et à ce que vous recherchez dans une relation avec votre chien pour choisir une race qui convient à votre style de vie.",
      "Il est important de se rappeler que chaque chien est unique et que le tempérament et les comportements peuvent varier considérablement même au sein d'une même race. Il est toujours judicieux de rencontrer plusieurs chiens avant de prendre une décision pour vous assurer que le chien que vous choisissez convient à votre style de vie et à votre famille.",
      "En conclusion, le choix d'une race de chien qui convient à votre style de vie est important pour garantir une compatibilite entre vous et votre chien.",

      ],
    },
    {
      title:
        'Comment gérer les problèmes de comportement courants chez les chiens',
      image:
        'https://blog.myollie.com/wp-content/uploads/2020/07/pit-mix-dog-misbehaves-when-home-alone.jpg',
      summary: 'Les problèmes de comportement courants chez les chiens, tels que les aboiements excessifs, les sauts et les morsures, peuvent causer des difficultés pour les propriétaires. Nous vous donnons des conseils sur la façon de comprendre les causes de ces comportements et sur les moyens de les corriger de manière efficace.',
      description: [
        "Les problèmes de comportement courants chez les chiens peuvent rendre la vie difficile pour les propriétaires de chiens et leur animal de compagnie. Heureusement, il existe des moyens de gérer ces problèmes pour aider votre chien à devenir un membre heureux et bien équilibré de votre famille. Voici comment gérer les problèmes de comportement courants chez les chiens :",
        "Aboiements excessifs : Les aboiements excessifs peuvent être causés par l'anxiété, l'ennui ou la frustration. Pour aider à réduire les aboiements excessifs, il est important de fournir à votre chien suffisamment d'exercice, d'interaction sociale et de stimulation mentale. Vous pouvez également consulter un comportementaliste animalier pour obtenir des conseils sur la façon de gérer ce problème de comportement.",
        "Destruction de la maison : La destruction de la maison peut être causée par l'anxiété, l'ennui ou la frustration. Pour aider à réduire la destruction de la maison, il est important de fournir à votre chien suffisamment d'exercice, d'interaction sociale et de stimulation mentale. Vous pouvez également entraîner votre chien à utiliser des jouets pour réduire les comportements destructeurs.",
        "Agressivité : L'agressivité peut être causée par la peur, la douleur, la défense ou la frustration. Pour gérer l'agressivité chez votre chien, il est important de consulter un comportementaliste animalier pour obtenir des conseils sur la façon de gérer ce problème de comportement.",
        "Peur et anxiété : La peur et l'anxiété peuvent être causées par des expériences passées ou des situations stressantes. Pour aider à réduire la peur et l'anxiété chez votre chien, il est important de lui fournir un environnement sécurisant et de le socialiser avec des personnes, des animaux et des situations différents.",
        "Pipi intérieur : Le pipi intérieur peut être causé par la formation incomplète, la maladie ou l'anxiété. Pour aider à réduire le pipi intérieur chez votre chien, il est important de lui fournir suffisamment de sorties régulières pour faire ses besoins et de l'entraîner à utiliser la litière.",
        "Il est important de se rappeler que les problèmes de comportement peuvent être complexes et peuvent souvent nécessiter l'aide d'un professionnel. En travaillant avec un comportementaliste animalier, vous pouvez cibler les problemes rencontres en adoptant une methode precise et efficace.",
      ]
    },
  ],
  partners: [
    //dresseurs
    {
      image: "https://images.unsplash.com/photo-1536012441472-aae6b3ce330f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Driss Maa",
      category: "Dresseur",
      description: "Je suis un éducateur canin qualifié et passionné qui se spécialise dans la formation de chiens pour les familles aimantes. Apprenez à établir une communication claire et affectueuse avec votre chien pour une vie harmonieuse ensemble.",
      location: "Casablanca",
      phone: "0623344541",
      price: 300,
      availability: "7j/7",
      rating: 4,
    },
    {
      image: "https://images.unsplash.com/photo-1560132248-d946352460e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Mokhtar Diouri",
      category: "Dresseur",
      description: "Je suis un éducateur canin qualifié et passionné qui se spécialise dans la formation de chiens pour les familles aimantes. Apprenez à établir une communication claire et affectueuse avec votre chien pour une vie harmonieuse ensemble.",
      location: "Rabat",
      phone: "0764536254",
      price: "350",
      availability: "7j/7 sauf les dimanches",
      rating: "3",
    },
    {
      image: "https://images.unsplash.com/photo-1527084010108-605725de32ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Imad Sabir",
      category: "Dresseur",
      description: "Vous cherchez à éduquer votre chien tout en respectant son bien-être? Je suis là pour vous aider. Nous travaillerons en équipe pour créer une relation de confiance et de respect mutuel entre vous et votre chien.",
      location: "Fes",
      phone: "0731245343",
      price: "200",
      availability: "7j/7",
      rating: "2",
    },
    {
      image: "https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Nabil Dehri",
      category: "Dresseur",
      description: "Vous avez un chiot et voulez l'aider à s'adapter à son nouvel environnement? Je suis spécialisé dans la formation de chiots, en utilisant des méthodes positives et amusantes pour aider votre chiot à devenir un chien bien élevé et heureux.",
      location: "Dakhla",
      phone: "0600435601",
      price: "500",
      availability: "Week-end",
      rating: "5",
    },
    {
      image: "https://images.unsplash.com/photo-1562176566-e9afd27531d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Souhail Jawal",
      category: "Dresseur",
      description: "Je suis un formateur de chiens expérimenté qui a aidé de nombreuses familles à atteindre leurs objectifs en matière de dressage de chiens. Ensemble, nous pouvons créer un plan de formation sur mesure pour vous et votre chien.",
      location: "Tanger",
      phone: "0624423598",
      price: "400",
      availability: "Week-end",
      rating: "5",
    },
    // Promeneurs
    {
      image: "https://images.unsplash.com/photo-1562714529-94d65989df68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Ilyass Bennassr",
      category: "Promeneur",
      description: "Je suis un amoureux des chiens et je comprends l'importance de donner à votre animal de compagnie l'exercice et la stimulation mentale dont il a besoin. Avec mes promenades de chiens, votre animal de compagnie sera heureux et épanoui.",
      location: "Casablanca",
      phone: "0675433234",
      price: "400",
      availability: "7j/7",
      rating: "2",
    },
    {
      image: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Moncef Benabdalah",
      category: "Promeneur",
      description: "Je suis un promeneur de chiens professionnel et responsable qui s'engage à fournir à votre chien une promenade amusante et sûre. En tant que propriétaire de chien moi-même, je comprends l'importance de la confiance et de la sécurité dans la relation entre le promeneur de chien et le propriétaire de chien.",
      location: "Kenitra",
      phone: "0624987364",
      price: "500",
      availability: "7j/7",
      rating: "3",
    },
    {
      image: "https://images.unsplash.com/photo-1537123547273-e59f4f437f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Faouzi Sahil",
      category: "Promeneur",
      description: "Je suis un promeneur de chiens passionné qui prend le temps de comprendre les besoins individuels de chaque chien. De la marche tranquille à la randonnée en montagne, je m'adapte à ce que votre chien préfère pour lui offrir une expérience de promenade agréable.",
      location: "Fes",
      phone: "0674635241",
      price: "300",
      availability: "7j/7",
      rating: "3",
    },
    {
      image: "https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFwcHklMjBkb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Issam Elmekki",
      category: "Promeneur",
      description: "Avec des horaires de travail chargés, il peut être difficile de donner à votre chien l'exercice quotidien dont il a besoin. C'est là que j'interviens en tant que promeneur de chiens fiable et expérimenté pour vous aider à prendre soin de votre animal de compagnie.",
      location: "Meknes",
      phone: "0764536272",
      price: "700",
      availability: "7j/7",
      rating: "4",
    },
    {
      image: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBkb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Othmane Lkbir",
      category: "Promeneur",
      description: "Je suis un promeneur de chiens professionnel qui offre des services de promenade personnalisés pour répondre aux besoins uniques de votre chien. Je m'assure que votre chien est en sécurité, heureux et reçoit suffisamment d'exercice.",
      location: "Rabat",
      phone: "0616653063",
      price: "350",
      availability: "7j/7",
      rating: "4",
    },
    //Accoupleurs
    {
      image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Mohamed Naimi",
      category: "Eleveur de chiens",
      description: "Specialise dans la race suivante: Cane Corso",
      location: "Rabat",
      phone: "0601234567",
      price: "450",
      availability: "7j/7",
      rating: "5",
    },
    {
      image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBkb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Redouane Ghanmi",
      category: "Eleveur de chiens",
      description: "Specialise dans la race suivante: Berger Allemand",
      location: "Tanger",
      phone: "0602345678",
      price: "250",
      availability: "7j/7",
      rating: "4",
    },
    {
      image: "https://images.unsplash.com/photo-1561438774-1790fe271b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBkb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Souhail Mekkaoui",
      category: "Eleveur de chiens",
      description: "Specialise dans la race suivante: Carlin",
      location: "Tetouan",
      phone: "0603456789",
      price: "300",
      availability: "7j/7",
      rating: "3",
    },
    {
      image: "https://images.unsplash.com/photo-1583511666445-775f1f2116f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHklMjBkb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Tarik Bakkali",
      category: "Eleveur de chiens",
      description: "Specialise dans la race suivante: Bouledogue francais",
      location: "Tanger",
      phone: "0604567890",
      price: "500",
      availability: "7j/7",
      rating: "2",
    },
    {
      image: "https://images.unsplash.com/photo-1594922009922-d1665ed9ce44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHklMjBkb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Jawad Sghir",
      category: "Eleveur de chiens",
      description: "Specialise dans la race suivante: Shiba inu",
      location: "Tetouan",
      phone: "0605678901",
      price: "400",
      availability: "7j/7",
      rating: "1",
    },
    //Gardeur
    {
      image: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBkb2dzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "Ziad Mansour",
      category: "Petsitter",
      description: "Amoureux des chiens depuis toujours, je suis là pour prendre soin de votre animal de compagnie pendant que vous êtes occupé. Avec mes services de garde, votre chien sera dans un environnement sûr et aimant.",
      location: "Rabat",
      phone: "0606789012",
      price: "400",
      availability: "7j/7",
      rating: "2",
    },
    {
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Khalid Al-Mahdi",
      category: "Petsitter",
      description: "Je suis un pet-sitter de confiance et expérimenté, prêt à prendre soin de votre chien comme s'il était le mien. Votre animal sera nourri, promené, et dorloté pour qu'il se sente bien et détendu",
      location: "Sale",
      phone: "0607890123",
      price: "300",
      availability: "7j/7",
      rating: "5",
    },
    {
      image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Hassan Al-Abdullah",
      category: "Petsitter",
      description: "Je comprends à quel point il est important de faire garder son chien par quelqu'un de digne de confiance. C'est pourquoi je suis là pour vous offrir mes services de garde de chiens fiables et attentionnés",
      location: "Fes",
      phone: "0608901234",
      price: "500",
      availability: "7j/7",
      rating: "5",
    },
    {
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Omar Hassan",
      category: "Petsitter",
      description: "Lorsque vous devez vous absenter, vous pouvez faire confiance à mes services de garde pour chiens. Je m'engage à fournir à votre animal de compagnie tout ce dont il a besoin pour être heureux et en sécurité",
      location: "Casablanca",
      phone: "0609012345",
      price: "450",
      availability: "7j/7",
      rating: "3",
    },
    {
      image: "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      name: "Mohammad Al-Saudi",
      category: "Petsitter",
      description: "Mon amour pour les chiens est inconditionnel, et je suis prêt à le partager avec votre animal de compagnie. Avec mes services de garde, vous pouvez partir en toute confiance, en sachant que votre chien sera entre de bonnes mains",
      location: "Meknes",
      phone: "0600123456",
      price: "350",
      availability: "7j/7",
      rating: "4",
    },
    //toiletteurs
    {
      "image": "https://images.unsplash.com/photo-1504826260979-242151ee45d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBkb2dzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "name": "Youssef Amine",
      "category": "Toiletteur",
      "description": "Je suis un toiletteur passionné et qualifié qui se spécialise dans la mise en valeur de la beauté naturelle de chaque chien. J'offre une gamme complète de services de toilettage pour répondre à tous les besoins de votre chien.",
      "location": "Agadir",
      "phone": "0659876543",
      "price": 350,
      "availability": "5j/7",
      "rating": 4.5
      },
      
      {
      "image": "https://images.unsplash.com/photo-1559163493-531321a6c855?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "name": "Mohammed Amrani",
      "category": "Toiletteur",
      "description": "Je suis un toiletteur professionnel et expérimenté qui se consacre à offrir à chaque chien une expérience de toilettage agréable et sans stress. J'utilise des techniques de toilettage innovantes pour obtenir des résultats incroyables pour votre chien.",
      "location": "Rabat",
      "phone": "0670123456",
      "price": 250,
      "availability": "7j/7",
      "rating": 4.2
      },
      
      {
      "image": "https://images.unsplash.com/photo-1575516200660-19cbbf7fb093?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBkb2dzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "name": "Sofia El Fadili",
      "category": "Toiletteur",
      "description": "Je suis une toiletteuse passionnée et créative qui croit que chaque chien mérite d'être chouchouté et traité comme un roi. Je suis spécialisée dans les coupes de cheveux élégantes et les bains luxueux qui laisseront votre chien propre, heureux et détendu.",
      "location": "Marrakech",
      "phone": "0687451230",
      "price": 400,
      "availability": "6j/7",
      "rating": 4.8
      },
      {
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Z3Jvb21pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "name": "عبد الرحمان بن عمر",
        "category": "Toiletteur",
        "description": "Je suis un toiletteur qualifié et passionné qui prend soin de chaque animal comme s'il était le mien. Offrez à votre animal de compagnie un toilettage professionnel pour qu'il se sente et ait l'air magnifique.",
        "location": "Rabat",
        "phone": "0666112233",
        "price": 400,
        "availability": "7j/7",
        "rating": 4.5
        },
        
        {
        "image": "https://images.unsplash.com/photo-1521747116042-5a810fda9666?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhcHB5JTIwZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        "name": "عمر بن خليل",
        "category": "Toiletteur",
        "description": "Je suis un toiletteur professionnel qui se soucie du bien-être de chaque animal que je traite. Offrez à votre animal de compagnie un toilettage de qualité pour qu'il se sente et ait l'air formidable.",
        "location": "Marrakech",
        "phone": "0655778899",
        "price": 250,
        "availability": "7j/7",
        "rating": 4.7
        },
        
       
        
        
  ],
};

export default data;
