// All translatable text of the portfolio. Dutch (nl) is the main language.
// Elements use data-i18n (text), data-i18n-alt (image alt) and
// data-i18n-aria (aria-label) to point to a key below.
const translations = {
  nl: {
    "meta.title": "Amel Ahriga | Digital Experience Design",
    "meta.description":
      "Portfolio van Amel Ahriga, student Digital Experience Design, met werk in fotografie, XD/UI-design en 3D-design.",
    "lang.aria": "Taal kiezen",
    "nav.aria": "Hoofdnavigatie",
    "nav.home": "Home",
    "nav.projects": "Mijn projecten",
    "nav.contact": "Contact",
    "cat.xd": "XD/UI Design",
    "cat.3d": "3D Design",
    "cat.photo": "Fotografie",
    "count.1": "1 project",
    "count.2": "2 projecten",

    "hero.iam": "Ik ben",
    "hero.roles": "designer|developer|fotograaf",
    "hero.status": "Op zoek naar een stage",
    "hero.ctaProjects": "Bekijk mijn projecten",
    "home.eyebrow": "Portfolio",
    "home.subtitle": "Student Digital Experience Design",
    "home.intro":
      "Ik creëer doordachte visuele ervaringen binnen drie disciplines: fotografie, XD/UI-design en 3D-design. Elk project hieronder is gegroepeerd per soort werk, zodat je meteen kunt zien wat je wilt bekijken.",
    "about.eyebrow": "Over mij",
    "about.text":
      "Mijn passie ligt bij design, creativiteit en digitale ervaringen. Ik vind het leuk om ideeën om te zetten in sterke visuele concepten, van <em class=\"hl-xd\">UX/UI en branding</em> tot <em class=\"hl-photo\">fotografie</em> en <em class=\"hl-3d\">3D</em>. Daarbij combineer ik graag creativiteit met technologie om projecten te maken die niet alleen mooi zijn, maar ook goed werken.",
    "work.eyebrow": "Werk",
    "work.title": "Geselecteerde disciplines.",
    "work.hint": "Beweeg over een discipline",
    "work.aria": "Projectcategorieën",

    "tile.xd.aria": "Bekijk XD/UI Design-projecten",
    "tile.xd.alt": "Websitelayout uit het XD/UI-designwerk voor BYSAPHIR.COM.",
    "tile.xd.text": "Websitelayout, content en digitale presentatie.",
    "tile.3d.aria": "Bekijk 3D Design-projecten",
    "tile.3d.alt": "3D-render van de Sweet Cloud-foodtruck met vegan suikerspin.",
    "tile.3d.text": "Merkwerelden gemodelleerd, belicht en gerenderd in 3D.",
    "tile.photo.aria": "Bekijk fotografieprojecten",
    "tile.photo.alt": "Modeportret uit het fotografiewerk voor BYSAPHIR.",
    "tile.photo.text": "Mode-, product- en skincarefotografie.",

    "skills.eyebrow": "Vaardigheden",
    "skills.title": "Tools en sterktes.",
    "skills.design": "Design",
    "skills.dev": "Development",
    "skills.visual": "Beeld & 3D",
    "skills.wireframe": "Wireframes",
    "skills.prototype": "Prototypes",
    "skills.ucd": "User-Centered Design",
    "skills.aria": "Lijst met vaardigheden",

    "common.backHome": "← Terug naar portfolio",
    "common.back": "← Terug",
    "common.viewProcess": "Bekijk het proces",
    "common.projectDetail": "Projectdetail",
    "common.projectIntro": "Projectintro",
    "common.overview": "Overzicht",
    "common.projectName": "Projectnaam",
    "common.shortDesc": "Korte beschrijving",
    "common.role": "Mijn rol",
    "common.tools": "Gebruikte tools",
    "common.process": "Proces",
    "common.idea": "Idee / doel",
    "common.research": "Onderzoek / inspiratie",
    "common.direction": "Designrichting",
    "common.creation": "Creatie / productie",
    "common.result": "Eindresultaat",
    "common.learned": "Wat ik geleerd heb",
    "common.images": "Beelden",
    "common.visualProcess": "Visueel proces.",
    "common.moodboard": "Moodboard / inspiratie",
    "common.wip": "Work in progress",
    "common.finalVisual": "Eindbeeld",
    "common.reflection": "Reflectie",
    "common.growth": "Persoonlijke groei",

    "photo.intro":
      "Mode- en productfotografie opgebouwd rond zacht, doordacht licht en een strakke, editoriale uitstraling.",
    "xd.intro":
      "Websitelayout, navigatie en content, gericht op een strakke en minimalistische digitale presentatie.",
    "3d.intro":
      "Merkwerelden bedacht, gemodelleerd en belicht in 3D, van eerste concept tot eindrender.",

    "tag.social": "Socialemediavisuals",
    "tag.webContent": "Websitecontent",
    "tag.product": "Productbeheer",
    "tag.layout": "Layout",
    "tag.skincarePhoto": "Skincarefotografie",
    "tag.branding": "Branding",
    "tag.creativeDir": "Creative direction",
    "tag.luxury": "Luxe esthetiek",
    "tag.modelling": "3D-modelleren",
    "tag.lighting": "Belichting & rendering",
    "tag.brandApp": "Merktoepassing",
    "tag.scene": "Scèneontwerp",

    "card.saphir.aria": "Open de projectdetails van BYSAPHIR.COM",
    "card.saphir.tagsAria": "Vaardigheden in het BYSAPHIR-project",
    "card.saphir.photo.alt":
      "Collectiebeeld van de BYSAPHIR-website met een model en editoriale typografie.",
    "card.saphir.photo.text":
      "Een modeproject dat fotografie, socialemediavisuals, websitecontent en productbeheer combineert in een strakke, moderne esthetiek.",
    "card.saphir.xd.alt":
      "Homepage van de BYSAPHIR-website met navigatie, hero-tekst en productfotografie.",
    "card.saphir.xd.text":
      "Websitecontent, layout en productbeheer voor een mode-webshop, gebouwd voor een strakke en moderne shopervaring.",
    "card.gold.aria": "Open de projectdetails van Soumy Gold",
    "card.gold.alt": "Soumy Gold-skincareverpakking gefotografeerd op zachte witte stof.",
    "card.gold.text":
      "Een luxe skincareconcept vormgegeven via skincarefotografie, branding en creative direction, met een zachte, premium beeldtaal.",
    "card.gold.tagsAria": "Vaardigheden in het Soumy Gold-project",
    "card.cloud.aria": "Open de projectdetails van Sweet Cloud 3D Design",
    "card.cloud.alt":
      "3D-render van de Sweet Cloud-truck met vegan suikerspin, roze branding, krukken en tafels.",
    "card.cloud.text":
      "Een eigen 3D-concept: ik bedacht het merk Sweet Cloud, een foodtruck met vegan suikerspin, en bouwde zijn wereld in 3D.",
    "card.cloud.tagsAria": "Vaardigheden in het 3D Design-project",

    "saphir.lead":
      "Een modecontentproject gericht op een verzorgde visuele identiteit in fotografie, sociale media, websitecontent en productpresentatie.",
    "saphir.shortDesc":
      "Een eigentijds modeproject dat contentcreatie en digitale presentatie combineert voor een elegante online merkervaring.",
    "saphir.role": "Fotograaf, contentcreator, visual curator en productcontentmanager.",
    "saphir.tools": "Photoshop, Shopify-contentupdates, camerawerk",
    "saphir.processTitle": "Van concept tot content.",
    "saphir.idea":
      "Een modepresentatie bouwen die verfijnd en draagbaar aanvoelt en visueel aansluit bij de identiteit van het merk.",
    "saphir.research":
      "Ik bekeek modest-fashionfotografie, editoriale e-commerce en elegante online boetieks om een duidelijke visuele toon te bepalen.",
    "saphir.direction":
      "De richting focuste op minimalistische layouts, zachte neutrale tinten en beelden die stijl, helderheid en productaantrekkingskracht in balans brengen.",
    "saphir.creation":
      "Ik werkte aan modefotografie, socialemediavisuals, websitecontent, productbeheer en Shopify-contentupdates.",
    "saphir.result":
      "Het eindresultaat was een coherentere modeaanwezigheid met sterkere beelden en een strakkere digitale presentatie.",
    "saphir.learned":
      "Ik leerde hoe belangrijk consistentie is wanneer fotografie, productinformatie en websitepresentatie allemaal samenwerken.",
    "saphir.moodboardAlt":
      "Inspiratiebord voor BYSAPHIR met neutrale modereferenties, layoutideeën en zachte kleurtinten.",
    "saphir.moodboard":
      "Ik zocht inspiratie op Pinterest en modewebsites om een moderne en minimalistische esthetiek te vinden voor de visuals en de website.",
    "saphir.wipAlt":
      "Behind the scenes van een BYSAPHIR-fotoshoot met camera, statief en studioachtergrond.",
    "saphir.wip":
      "Ik begon foto's te maken met modellen en experimenteerde met verschillende poses, belichting en composities om content voor het merk te creëren.",
    "saphir.finalAlt": "Eindbeeld van de BYSAPHIR-collectie.",
    "saphir.final":
      "Ik heb de homepage van de website vernieuwd, nieuwe producten toegevoegd en gewerkt aan de uiteindelijke visuele content voor de website en sociale media.",
    "saphir.reflection":
      "Een van de uitdagingen in dit project was het evenwicht vinden tussen esthetiek en praktische contentnoden, vooral wanneer beelden, website-updates en productpresentatie op één lijn moesten blijven. Ik leerde holistischer na te denken over een merkervaring, niet alleen als visuals maar ook als structuur en consistentie. Dit project hielp me groeien in creative direction, contentplanning en zelfvertrouwen om een vollediger digitaal modeverhaal vorm te geven.",

    "gold.lead":
      "Een brandingproject rond skincare dat luxe beelden, zorgvuldige styling en een zachtere, premium visuele richting verkent.",
    "gold.shortDesc":
      "Een luxe skincareconcept ontwikkeld via fotografie, branding en creative direction.",
    "gold.role":
      "Fotograaf, merkdenker en creative director voor de visuele identiteit van het project.",
    "gold.tools": "Photoshop, camerawerk, merkonderzoek, visuele styling",
    "gold.processTitle": "Een luxe skincaregevoel opbouwen.",
    "gold.idea":
      "Een skincareconcept creëren dat rustig, premium en zorgvuldig gemaakt aanvoelt via beeld en branding.",
    "gold.research":
      "Ik verkende luxe skincarecampagnes, verfijnde verpakkingen en zachte visuele werelden die kwaliteit en zorg uitstralen.",
    "gold.direction":
      "De richting combineerde gouden accenten, zacht licht, strakke compositie en een elegantere, beautygerichte sfeer.",
    "gold.creation":
      "Ik ontwikkelde skincarefotografie, brandingideeën en creative direction om een luxe visuele stijl vorm te geven.",
    "gold.result":
      "Het eindresultaat communiceert een premium skincare-identiteit met een zachtere en verfijndere visuele uitstraling.",
    "gold.learned":
      "Ik leerde hoe subtiele details zoals materiaal, belichting en compositie het gevoel van een merk sterk kunnen beïnvloeden.",
    "gold.moodboardAlt":
      "Inspiratiebord voor Soumy Gold met minimalistische skincarereferenties en strakke productfotografie.",
    "gold.moodboard":
      "Ik zocht minimalistische inspiratie omdat de klant een strakke en verfijnde visuele stijl voor het merk wilde.",
    "gold.wipAlt":
      "Testbeelden van Soumy Gold-producten om de fotografiestijl te verkennen vóór de definitieve shoot.",
    "gold.wip":
      "Voordat ik de Soumy Gold-producten begon te fotograferen, toonde ik de klant eerst skincaretestbeelden om te zien of deze zachte en minimalistische stijl overeenkwam met wat ze wilden.",
    "gold.finalAlt": "Eindbeeld van Soumy Gold-skincare.",
    "gold.final":
      "Dit beeld toont de uiteindelijke richting die voor Soumy Gold werd gecreëerd. Ik werkte aan de fotografie, de branding en de algemene esthetiek om een strakke en luxe skincare-identiteit voor het merk te creëren.",
    "gold.supportAria": "Extra beelden van Soumy Gold",
    "gold.reflection":
      "Het moeilijkste aan dit project was een luxe gevoel creëren zonder de beelden te ingewikkeld te maken. Ik leerde meer aandacht te besteden aan sfeer, styling en kleine visuele keuzes die de perceptie bepalen. Dit project hielp me groeien in branding, visuele gevoeligheid en het uitdrukken van een bewustere creatieve richting.",

    "cloud.lead":
      "Een persoonlijk 3D-designproject waarin ik een merk bedacht, Sweet Cloud, en de foodtruck met vegan suikerspin ontwierp, met signalisatie, zitplaatsen en een oplichtende etalage.",
    "cloud.name": "Sweet Cloud – 3D Design",
    "cloud.shortDesc":
      "Een zelf bedacht concept: een fictief merk van vegan suikerspin dat ik ontwierp en vertaalde naar een 3D-foodtruckscène.",
    "cloud.role":
      "Conceptbedenker en 3D-designer: ik bedacht het merk en deed het modelleren, de branding, de belichting en de eindrender.",
    "cloud.tools": "Blender, 3D-modelleren, materialen, belichting, rendering",
    "cloud.processTitle": "Van merk tot 3D-wereld.",
    "cloud.idea":
      "Mijn eigen merk bedenken en het omzetten in een memorabele 3D-pop-upervaring die zoet, licht en uitnodigend aanvoelt.",
    "cloud.research":
      "Ik haalde inspiratie uit foodtrucks en pastelkleurige merkruimtes om me voor te stellen hoe mijn eigen merk in een ruimte zou kunnen leven.",
    "cloud.direction":
      "Ik koos zachtroze tinten, rode accenten, afgeronde vormen en een oplichtend neonlogo om de sfeer speels te houden.",
    "cloud.creation":
      "Ik modelleerde de truck, het bord, de tafels, krukken en stoelen, paste de branding toe en belichtte de scène voor de eindrender.",
    "cloud.result":
      "De eindrender toont een volledige, samenhangende merkscène waarin de truck en zijn omgeving één verhaal vertellen.",
    "cloud.learned":
      "Ik leerde hoeveel belichting, materialen en kleine props de sfeer van een merk in drie dimensies beïnvloeden.",
    "cloud.detailAlt":
      "Close-up van het verkoopraam van de Sweet Cloud-truck met oplichtend logo en suikerspindisplay.",
    "cloud.detailLabel": "Detail van de etalage",
    "cloud.detail":
      "Het verkoopraam met oplichtend logo, suikerspindisplay en kleine props geeft de truck een warm, uitnodigend blikvanger.",
    "cloud.seatingAlt": "Open-bord van Sweet Cloud met stoelen en een klein rond tafeltje.",
    "cloud.seatingLabel": "Signalisatie & zitplaatsen",
    "cloud.seating":
      "Het open-bord, de stoelen en de tafels trekken de merkkleuren door naar de ruimte rond de truck.",
    "cloud.finalAlt": "Eind-3D-render van de Sweet Cloud-foodtruckscène.",
    "cloud.finalLabel": "Eindrender",
    "cloud.final":
      "De volledige scène: truck, bord, krukken en tafels samengebracht in één zachte, samenhangende merkwereld.",
    "cloud.reflection":
      "De grootste uitdaging was de scène zacht en harmonieus houden terwijl het merk toch opviel. Werken in 3D leerde me een merk te zien als een ruimte in plaats van een plat beeld: hoe het belicht wordt, hoe mensen er rond zouden bewegen en hoe elk object hetzelfde verhaal ondersteunt. Dit project hielp me groeien in 3D-modelleren, belichting en ruimtelijk merkdenken.",

    "footer.internship":
      "Ik ben student en op zoek naar een stage. Heb je een plek of een vraag? Stuur me gerust een mail.",
    "contact.email": "E-mail",
    "footer.top": "Terug naar boven ↑",
    "footer.title": "Laten we connecteren.",
  },

  fr: {
    "meta.title": "Amel Ahriga | Digital Experience Design",
    "meta.description":
      "Portfolio d'Amel Ahriga, étudiante en Digital Experience Design, avec des travaux en photographie, design XD/UI et design 3D.",
    "lang.aria": "Choisir la langue",
    "nav.aria": "Navigation principale",
    "nav.home": "Accueil",
    "nav.projects": "Mes projets",
    "nav.contact": "Contact",
    "cat.xd": "Design XD/UI",
    "cat.3d": "Design 3D",
    "cat.photo": "Photographie",
    "count.1": "1 projet",
    "count.2": "2 projets",

    "hero.iam": "Je suis",
    "hero.roles": "designer|développeuse|photographe",
    "hero.status": "À la recherche d'un stage",
    "hero.ctaProjects": "Voir mes projets",
    "home.eyebrow": "Portfolio",
    "home.subtitle": "Étudiante en Digital Experience Design",
    "home.intro":
      "Je crée des expériences visuelles réfléchies dans trois disciplines : la photographie, le design XD/UI et le design 3D. Chaque projet ci-dessous est classé par type de travail, pour que tu puisses aller directement à ce que tu veux voir.",
    "about.eyebrow": "À propos",
    "about.text":
      "Ma passion, c'est le design, la créativité et les expériences digitales. J'aime transformer des idées en concepts visuels forts, de <em class=\"hl-xd\">l'UX/UI et du branding</em> à <em class=\"hl-photo\">la photographie</em> et <em class=\"hl-3d\">la 3D</em>. J'aime combiner créativité et technologie pour créer des projets qui ne sont pas seulement beaux, mais qui fonctionnent aussi bien.",
    "work.eyebrow": "Travaux",
    "work.title": "Disciplines sélectionnées.",
    "work.hint": "Survole une discipline",
    "work.aria": "Catégories de projets",

    "tile.xd.aria": "Voir les projets de design XD/UI",
    "tile.xd.alt": "Mise en page du site web issue du travail XD/UI pour BYSAPHIR.COM.",
    "tile.xd.text": "Mise en page, contenu et présentation digitale.",
    "tile.3d.aria": "Voir les projets de design 3D",
    "tile.3d.alt": "Rendu 3D du food truck de barbe à papa vegan Sweet Cloud.",
    "tile.3d.text": "Des univers de marque modélisés, éclairés et rendus en 3D.",
    "tile.photo.aria": "Voir les projets de photographie",
    "tile.photo.alt": "Portrait de mode issu du travail photo pour BYSAPHIR.",
    "tile.photo.text": "Photographie de mode, de produits et de skincare.",

    "skills.eyebrow": "Compétences",
    "skills.title": "Outils et points forts.",
    "skills.design": "Design",
    "skills.dev": "Développement",
    "skills.visual": "Image & 3D",
    "skills.wireframe": "Wireframes",
    "skills.prototype": "Prototypage",
    "skills.ucd": "Conception centrée utilisateur",
    "skills.aria": "Liste des compétences",

    "common.backHome": "← Retour au portfolio",
    "common.back": "← Retour",
    "common.viewProcess": "Voir le processus",
    "common.projectDetail": "Détail du projet",
    "common.projectIntro": "Introduction",
    "common.overview": "Aperçu",
    "common.projectName": "Nom du projet",
    "common.shortDesc": "Courte description",
    "common.role": "Mon rôle",
    "common.tools": "Outils utilisés",
    "common.process": "Processus",
    "common.idea": "Idée / objectif",
    "common.research": "Recherche / inspiration",
    "common.direction": "Direction design",
    "common.creation": "Création / production",
    "common.result": "Résultat final",
    "common.learned": "Ce que j'ai appris",
    "common.images": "Images",
    "common.visualProcess": "Processus visuel.",
    "common.moodboard": "Moodboard / inspiration",
    "common.wip": "Work in progress",
    "common.finalVisual": "Visuel final",
    "common.reflection": "Réflexion",
    "common.growth": "Développement personnel",

    "photo.intro":
      "Photographie de mode et de produits construite autour d'une lumière douce et réfléchie, avec un rendu épuré et éditorial.",
    "xd.intro":
      "Mise en page, navigation et contenu de site web, axés sur une présentation digitale épurée et minimaliste.",
    "3d.intro":
      "Des univers de marque imaginés, modélisés et éclairés en 3D, du premier concept jusqu'au rendu final.",

    "tag.social": "Visuels réseaux sociaux",
    "tag.webContent": "Contenu web",
    "tag.product": "Gestion des produits",
    "tag.layout": "Mise en page",
    "tag.skincarePhoto": "Photographie skincare",
    "tag.branding": "Branding",
    "tag.creativeDir": "Direction créative",
    "tag.luxury": "Esthétique luxe",
    "tag.modelling": "Modélisation 3D",
    "tag.lighting": "Éclairage & rendu",
    "tag.brandApp": "Application de marque",
    "tag.scene": "Conception de scène",

    "card.saphir.aria": "Ouvrir les détails du projet BYSAPHIR.COM",
    "card.saphir.tagsAria": "Compétences du projet BYSAPHIR",
    "card.saphir.photo.alt":
      "Visuel de collection du site BYSAPHIR avec un mannequin et une typographie éditoriale.",
    "card.saphir.photo.text":
      "Un projet de mode qui combine photographie, visuels pour les réseaux sociaux, contenu web et gestion des produits dans une esthétique épurée et moderne.",
    "card.saphir.xd.alt":
      "Page d'accueil du site BYSAPHIR avec navigation, texte d'accroche et photos de produits.",
    "card.saphir.xd.text":
      "Contenu, mise en page et gestion des produits pour un e-shop de mode, pensés pour une expérience d'achat épurée et moderne.",
    "card.gold.aria": "Ouvrir les détails du projet Soumy Gold",
    "card.gold.alt": "Packaging skincare Soumy Gold photographié sur un tissu blanc et doux.",
    "card.gold.text":
      "Un concept skincare de luxe façonné par la photographie skincare, le branding et la direction créative, avec un langage visuel doux et premium.",
    "card.gold.tagsAria": "Compétences du projet Soumy Gold",
    "card.cloud.aria": "Ouvrir les détails du projet Sweet Cloud Design 3D",
    "card.cloud.alt":
      "Rendu 3D du truck de barbe à papa vegan Sweet Cloud avec branding rose, tabourets et tables.",
    "card.cloud.text":
      "Un concept 3D personnel : j'ai inventé la marque Sweet Cloud, un food truck de barbe à papa vegan, et j'ai construit son univers en 3D.",
    "card.cloud.tagsAria": "Compétences du projet Design 3D",

    "saphir.lead":
      "Un projet de contenu mode centré sur la création d'une identité visuelle soignée à travers la photographie, les réseaux sociaux, le contenu web et la présentation des produits.",
    "saphir.shortDesc":
      "Un projet de mode contemporain qui combine création de contenu et présentation digitale pour une expérience de marque élégante en ligne.",
    "saphir.role":
      "Photographe, créatrice de contenu, curatrice visuelle et responsable du contenu produit.",
    "saphir.tools": "Photoshop, mises à jour de contenu Shopify, prise de vue",
    "saphir.processTitle": "Du concept au contenu.",
    "saphir.idea":
      "Créer une présentation de mode raffinée, portable et visuellement alignée avec l'identité de la marque.",
    "saphir.research":
      "J'ai étudié la photographie de mode modeste, l'e-commerce éditorial et des boutiques en ligne élégantes pour définir un ton visuel clair.",
    "saphir.direction":
      "La direction misait sur des mises en page minimalistes, des tons neutres et doux, et des images qui équilibrent style, clarté et attrait du produit.",
    "saphir.creation":
      "J'ai travaillé sur la photographie de mode, les visuels pour les réseaux sociaux, le contenu web, la gestion des produits et les mises à jour de contenu Shopify.",
    "saphir.result":
      "Le résultat final est une présence mode plus cohérente, avec des images plus fortes et une présentation digitale plus épurée.",
    "saphir.learned":
      "J'ai appris à quel point la cohérence compte lorsque la photographie, les informations produit et la présentation du site fonctionnent ensemble.",
    "saphir.moodboardAlt":
      "Planche d'inspiration BYSAPHIR avec des références de mode neutres, des idées de mise en page et des tons doux.",
    "saphir.moodboard":
      "J'ai cherché de l'inspiration sur Pinterest et sur des sites de mode pour trouver une esthétique moderne et minimaliste pour les visuels et le site.",
    "saphir.wipAlt":
      "Coulisses d'un shooting BYSAPHIR avec appareil photo, trépied et fond de studio.",
    "saphir.wip":
      "J'ai commencé à photographier des mannequins et j'ai expérimenté différentes poses, lumières et compositions pour créer du contenu pour la marque.",
    "saphir.finalAlt": "Visuel final de la collection BYSAPHIR.",
    "saphir.final":
      "J'ai mis à jour la page d'accueil du site, ajouté de nouveaux produits et travaillé sur le contenu visuel final pour le site et les réseaux sociaux.",
    "saphir.reflection":
      "L'un des défis de ce projet était d'équilibrer l'esthétique et les besoins pratiques en contenu, surtout quand les images, les mises à jour du site et la présentation des produits devaient rester alignées. J'ai appris à penser l'expérience de marque de façon plus globale, pas seulement comme des visuels, mais aussi comme une structure et une cohérence. Ce projet m'a fait progresser en direction créative, en planification de contenu et en confiance pour construire une histoire de mode digitale plus complète.",

    "gold.lead":
      "Un projet de branding skincare qui explore des images luxueuses, un stylisme soigné et une direction visuelle plus douce et premium.",
    "gold.shortDesc":
      "Un concept skincare de luxe développé à travers la photographie, le branding et la direction créative.",
    "gold.role":
      "Photographe, réflexion de marque et directrice créative pour l'identité visuelle du projet.",
    "gold.tools": "Photoshop, prise de vue, recherche de marque, stylisme visuel",
    "gold.processTitle": "Créer une sensation skincare de luxe.",
    "gold.idea":
      "Créer un concept skincare calme, premium et soigneusement pensé à travers l'image et le branding.",
    "gold.research":
      "J'ai exploré des campagnes skincare de luxe, des packagings raffinés et des univers visuels doux qui évoquent la qualité et le soin.",
    "gold.direction":
      "La direction combinait des touches dorées, une lumière douce, une composition épurée et une atmosphère beauté plus élégante.",
    "gold.creation":
      "J'ai développé la photographie skincare, des idées de branding et la direction créative pour façonner un style visuel luxueux.",
    "gold.result":
      "Le résultat final communique une identité skincare premium avec une présence visuelle plus douce et plus raffinée.",
    "gold.learned":
      "J'ai appris à quel point des détails subtils comme la matière, la lumière et la composition peuvent influencer fortement le ressenti d'une marque.",
    "gold.moodboardAlt":
      "Planche d'inspiration Soumy Gold avec des références skincare minimalistes et des photos produit épurées.",
    "gold.moodboard":
      "J'ai cherché une inspiration minimaliste, car la cliente voulait un style visuel épuré et raffiné pour la marque.",
    "gold.wipAlt":
      "Visuels tests des produits Soumy Gold pour explorer le style photo avant le shooting final.",
    "gold.wip":
      "Avant de photographier les produits Soumy Gold, j'ai d'abord montré à la cliente des visuels tests pour vérifier si ce style doux et minimaliste correspondait à ses attentes.",
    "gold.finalAlt": "Visuel final skincare Soumy Gold.",
    "gold.final":
      "Ce visuel représente la direction finale créée pour Soumy Gold. J'ai travaillé sur la photographie, le branding et l'esthétique globale pour créer une identité skincare épurée et luxueuse pour la marque.",
    "gold.supportAria": "Visuels supplémentaires de Soumy Gold",
    "gold.reflection":
      "Le plus difficile dans ce projet était de créer une sensation de luxe sans compliquer les visuels. J'ai appris à faire plus attention à l'atmosphère, au stylisme et aux petits choix visuels qui façonnent la perception. Ce projet m'a fait progresser en branding, en sensibilité visuelle et dans l'expression d'une direction créative plus intentionnelle.",

    "cloud.lead":
      "Un projet personnel de design 3D dans lequel j'ai inventé une marque, Sweet Cloud, et conçu son food truck de barbe à papa vegan avec enseigne, places assises et une devanture lumineuse.",
    "cloud.name": "Sweet Cloud – Design 3D",
    "cloud.shortDesc":
      "Un concept créé de toutes pièces : une marque fictive de barbe à papa vegan que j'ai conçue et traduite en une scène 3D de food truck.",
    "cloud.role":
      "Créatrice du concept et designer 3D : j'ai inventé la marque et réalisé la modélisation, le branding, l'éclairage et le rendu final.",
    "cloud.tools": "Blender, modélisation 3D, matériaux, éclairage, rendu",
    "cloud.processTitle": "De la marque à l'univers 3D.",
    "cloud.idea":
      "Inventer ma propre marque et la transformer en une expérience pop-up 3D mémorable, douce, légère et accueillante.",
    "cloud.research":
      "Je me suis inspirée de food trucks et d'espaces de marque aux couleurs pastel pour imaginer comment ma marque pourrait vivre dans un espace.",
    "cloud.direction":
      "J'ai choisi des tons rose pâle, des accents rouges, des formes arrondies et un logo lumineux style néon pour garder une ambiance ludique.",
    "cloud.creation":
      "J'ai modélisé le truck, l'enseigne, les tables, les tabourets et les chaises, appliqué le branding et éclairé la scène pour le rendu final.",
    "cloud.result":
      "Le rendu final présente une scène de marque complète et cohérente où le truck et son environnement racontent une seule histoire.",
    "cloud.learned":
      "J'ai appris à quel point l'éclairage, les matériaux et les petits accessoires influencent l'ambiance d'une marque en trois dimensions.",
    "cloud.detailAlt":
      "Gros plan sur le comptoir du truck Sweet Cloud avec logo lumineux et présentoir de barbe à papa.",
    "cloud.detailLabel": "Détail de la devanture",
    "cloud.detail":
      "Le comptoir avec son logo lumineux, son présentoir de barbe à papa et ses petits accessoires donne au truck un point focal chaleureux et accueillant.",
    "cloud.seatingAlt": "Panneau « open » de Sweet Cloud avec des chaises et une petite table ronde.",
    "cloud.seatingLabel": "Enseigne & places assises",
    "cloud.seating":
      "Le panneau « open », les chaises et les tables prolongent les couleurs de la marque dans l'espace autour du truck.",
    "cloud.finalAlt": "Rendu 3D final de la scène du food truck Sweet Cloud.",
    "cloud.finalLabel": "Rendu final",
    "cloud.final":
      "La scène complète : truck, enseigne, tabourets et tables réunis dans un univers de marque doux et cohérent.",
    "cloud.reflection":
      "Le plus grand défi était de garder la scène douce et harmonieuse tout en faisant ressortir la marque. Travailler en 3D m'a appris à voir une marque comme un espace plutôt qu'un visuel plat : comment elle est éclairée, comment les gens s'y déplaceraient et comment chaque objet soutient la même histoire. Ce projet m'a fait progresser en modélisation 3D, en éclairage et en réflexion spatiale autour de la marque.",

    "footer.internship":
      "Actuellement aux études, je cherche un stage. Tu as une place ou une question ? Envoie-moi un mail.",
    "contact.email": "E-mail",
    "footer.top": "Retour en haut ↑",
    "footer.title": "Restons en contact.",
  },

  en: {
    "meta.title": "Amel Ahriga | Digital Experience Design",
    "meta.description":
      "Portfolio of Amel Ahriga, a Digital Experience Design student working across photography, XD/UI design, and 3D design.",
    "lang.aria": "Choose language",
    "nav.aria": "Main navigation",
    "nav.home": "Home",
    "nav.projects": "My projects",
    "nav.contact": "Contact",
    "cat.xd": "XD/UI Design",
    "cat.3d": "3D Design",
    "cat.photo": "Photography",
    "count.1": "1 project",
    "count.2": "2 projects",

    "hero.iam": "I am a",
    "hero.roles": "designer|developer|photographer",
    "hero.status": "Looking for an internship",
    "hero.ctaProjects": "View my projects",
    "home.eyebrow": "Portfolio",
    "home.subtitle": "Digital Experience Design Student",
    "home.intro":
      "I create thoughtful visual experiences across three disciplines: photography, XD/UI design, and 3D design. Each project below is grouped by the kind of work it is, so you can jump straight to what you want to see.",
    "about.eyebrow": "About me",
    "about.text":
      "My passion lies in design, creativity and digital experiences. I love turning ideas into strong visual concepts, from <em class=\"hl-xd\">UX/UI and branding</em> to <em class=\"hl-photo\">photography</em> and <em class=\"hl-3d\">3D</em>. I like to combine creativity with technology to create projects that don't just look good, but also work well.",
    "work.eyebrow": "Work",
    "work.title": "Selected disciplines.",
    "work.hint": "Hover over a discipline",
    "work.aria": "Project categories",

    "tile.xd.aria": "View XD/UI Design projects",
    "tile.xd.alt": "Website layout from the BYSAPHIR.COM XD/UI design work.",
    "tile.xd.text": "Website layout, content, and digital presentation.",
    "tile.3d.aria": "View 3D Design projects",
    "tile.3d.alt": "3D render of the Sweet Cloud vegan cotton candy food truck.",
    "tile.3d.text": "Brand worlds modelled, lit, and rendered in 3D.",
    "tile.photo.aria": "View Photography projects",
    "tile.photo.alt": "Fashion portrait from the BYSAPHIR photography work.",
    "tile.photo.text": "Fashion, product, and skincare photography.",

    "skills.eyebrow": "Skills",
    "skills.title": "Tools and strengths.",
    "skills.design": "Design",
    "skills.dev": "Development",
    "skills.visual": "Visual & 3D",
    "skills.wireframe": "Wireframing",
    "skills.prototype": "Prototyping",
    "skills.ucd": "User-Centered Design",
    "skills.aria": "Skills list",

    "common.backHome": "← Back to portfolio",
    "common.back": "← Back",
    "common.viewProcess": "View process",
    "common.projectDetail": "Project detail",
    "common.projectIntro": "Project intro",
    "common.overview": "Overview",
    "common.projectName": "Project name",
    "common.shortDesc": "Short description",
    "common.role": "My role",
    "common.tools": "Tools used",
    "common.process": "Process",
    "common.idea": "Idea / goal",
    "common.research": "Research / inspiration",
    "common.direction": "Design direction",
    "common.creation": "Creation / production",
    "common.result": "Final result",
    "common.learned": "What I learned",
    "common.images": "Images",
    "common.visualProcess": "Visual process.",
    "common.moodboard": "Moodboard / inspiration",
    "common.wip": "Work in progress",
    "common.finalVisual": "Final visual",
    "common.reflection": "Reflection",
    "common.growth": "Personal growth",

    "photo.intro":
      "Fashion and product photography built around soft, considered light and a clean, editorial feel.",
    "xd.intro":
      "Website layout, navigation, and content work focused on a clean, minimal digital presentation.",
    "3d.intro":
      "Brand worlds imagined, modelled, and lit in 3D, from first concept to a final render.",

    "tag.social": "Social Media Visuals",
    "tag.webContent": "Website Content",
    "tag.product": "Product Management",
    "tag.layout": "Layout",
    "tag.skincarePhoto": "Skincare Photography",
    "tag.branding": "Branding",
    "tag.creativeDir": "Creative Direction",
    "tag.luxury": "Luxury Aesthetic",
    "tag.modelling": "3D Modelling",
    "tag.lighting": "Lighting & Rendering",
    "tag.brandApp": "Brand Application",
    "tag.scene": "Scene Design",

    "card.saphir.aria": "Open BYSAPHIR.COM project details",
    "card.saphir.tagsAria": "BYSAPHIR project skills",
    "card.saphir.photo.alt":
      "BYSAPHIR website collection visual featuring a fashion model and editorial typography.",
    "card.saphir.photo.text":
      "A fashion-focused project combining photography, social media visuals, website content, and product management within a clean, modern aesthetic.",
    "card.saphir.xd.alt":
      "BYSAPHIR website homepage showing navigation, hero copy, and product photography.",
    "card.saphir.xd.text":
      "Website content, layout, and product management for a fashion e-commerce site, built for a clean and modern shopping experience.",
    "card.gold.aria": "Open Soumy Gold project details",
    "card.gold.alt": "Soumy Gold skincare packaging photographed on soft white fabric.",
    "card.gold.text":
      "A luxury skincare concept shaped through skincare photography, branding, and creative direction with a soft, premium visual language.",
    "card.gold.tagsAria": "Soumy Gold project skills",
    "card.cloud.aria": "Open Sweet Cloud 3D Design project details",
    "card.cloud.alt":
      "3D render of the Sweet Cloud vegan cotton candy truck with pink branding, stools and tables.",
    "card.cloud.text":
      "A self-initiated 3D concept: I invented the brand Sweet Cloud, a vegan cotton candy food truck, and built its world in 3D.",
    "card.cloud.tagsAria": "3D Design project skills",

    "saphir.lead":
      "A fashion content project focused on creating a polished visual identity across photography, social media, website content, and product presentation.",
    "saphir.shortDesc":
      "A contemporary fashion project combining content creation and digital presentation for an elegant online brand experience.",
    "saphir.role":
      "Photographer, content creator, visual curator, and product content manager.",
    "saphir.tools": "Photoshop, Shopify content updates, camera work",
    "saphir.processTitle": "From concept to content.",
    "saphir.idea":
      "Build a fashion presentation that felt refined, wearable, and visually aligned with the identity of the brand.",
    "saphir.research":
      "I looked at modest fashion photography, editorial ecommerce, and elegant online boutiques to define a clear visual tone.",
    "saphir.direction":
      "The direction focused on minimal layouts, soft neutral tones, and imagery that balanced style, clarity, and product appeal.",
    "saphir.creation":
      "I worked on fashion photography, social media visuals, website content, product management, and Shopify content updates.",
    "saphir.result":
      "The final outcome was a more coherent fashion presence with stronger imagery and a cleaner digital presentation.",
    "saphir.learned":
      "I learned how much consistency matters when photography, product information, and website presentation all work together.",
    "saphir.moodboardAlt":
      "BYSAPHIR inspiration board with neutral fashion references, layout ideas, and soft color tones.",
    "saphir.moodboard":
      "I searched for inspiration on Pinterest and fashion websites to find a modern and minimal aesthetic for the visuals and website.",
    "saphir.wipAlt":
      "Behind-the-scenes BYSAPHIR photography setup with camera, tripod, and studio backdrop.",
    "saphir.wip":
      "I started taking photos with models and experimented with different poses, lighting and compositions to create content for the brand.",
    "saphir.finalAlt": "Final BYSAPHIR collection visual.",
    "saphir.final":
      "I updated the website homepage, added new products and worked on the final visual content for the website and social media.",
    "saphir.reflection":
      "One of the challenges in this project was balancing aesthetics with practical content needs, especially when imagery, website updates, and product presentation all needed to stay aligned. I learned how to think more holistically about a brand experience, not only as visuals but also as structure and consistency. This project helped me grow in creative direction, content planning, and confidence in shaping a more complete digital fashion story.",

    "gold.lead":
      "A skincare-focused branding project exploring luxury imagery, careful styling, and a softer premium visual direction.",
    "gold.shortDesc":
      "A luxury skincare concept developed through photography, branding, and creative direction.",
    "gold.role":
      "Photographer, brand thinker, and creative director for the project’s visual identity.",
    "gold.tools": "Photoshop, camera work, branding research, visual styling",
    "gold.processTitle": "Building a luxury skincare feel.",
    "gold.idea":
      "Create a skincare concept that felt calm, premium, and carefully crafted through image and branding.",
    "gold.research":
      "I explored luxury skincare campaigns, refined packaging, and soft visual worlds that communicate quality and care.",
    "gold.direction":
      "The direction combined gold accents, soft light, clean composition, and a more elegant beauty-oriented atmosphere.",
    "gold.creation":
      "I developed skincare photography, branding ideas, and creative direction to shape a luxury visual style.",
    "gold.result":
      "The final result communicates a premium skincare identity with a softer and more elevated visual presence.",
    "gold.learned":
      "I learned how subtle details like material, lighting, and composition can strongly influence the feeling of a brand.",
    "gold.moodboardAlt":
      "Soumy Gold inspiration board with minimal skincare references and clean product photography.",
    "gold.moodboard":
      "I searched for minimalistic inspiration because the client wanted a clean and refined visual style for the brand.",
    "gold.wipAlt":
      "Soumy Gold product test visuals shown to explore the photography style before the final shoot.",
    "gold.wip":
      "Before I started photographing the Soumy Gold products, I first showed the client skincare test visuals to see if this soft and minimal style matched what they wanted.",
    "gold.finalAlt": "Final Soumy Gold skincare visual.",
    "gold.final":
      "This visual represents the final direction created for Soumy Gold. I worked on the photography, branding and overall aesthetic to create a clean and luxury skincare identity for the brand.",
    "gold.supportAria": "Additional Soumy Gold visuals",
    "gold.reflection":
      "The most difficult part of this project was creating a luxury feeling without overcomplicating the visuals. I learned to pay more attention to atmosphere, styling, and small visual choices that shape perception. This project helped me grow in branding, visual sensitivity, and in expressing a more intentional creative direction.",

    "cloud.lead":
      "A personal 3D design project in which I invented a brand, Sweet Cloud, and designed its vegan cotton candy food truck with signage, seating, and a glowing storefront.",
    "cloud.name": "Sweet Cloud – 3D Design",
    "cloud.shortDesc":
      "A self-created concept: a fictional vegan cotton candy brand that I designed and translated into a 3D food truck scene.",
    "cloud.role":
      "Concept creator and 3D designer: I invented the brand and handled modelling, branding, lighting, and final rendering.",
    "cloud.tools": "Blender, 3D modelling, materials, lighting, rendering",
    "cloud.processTitle": "From brand to 3D world.",
    "cloud.idea":
      "Invent my own brand and turn it into a memorable 3D pop-up experience that feels sweet, light, and inviting.",
    "cloud.research":
      "I gathered inspiration from food trucks and pastel branded spaces to imagine how my own brand could live in a space.",
    "cloud.direction":
      "I chose soft pink tones, red accents, rounded shapes, and a glowing neon-style logo to keep the atmosphere playful.",
    "cloud.creation":
      "I modelled the truck, sign, tables, stools, and chairs, applied the branding, and lit the scene for the final render.",
    "cloud.result":
      "The final render presents a complete, cohesive brand scene where the truck and its surroundings tell one story.",
    "cloud.learned":
      "I learned how much lighting, materials, and small props influence the mood of a brand in three dimensions.",
    "cloud.detailAlt":
      "Close-up of the Sweet Cloud truck serving window with glowing logo and cotton candy display.",
    "cloud.detailLabel": "Storefront detail",
    "cloud.detail":
      "The serving window with its glowing logo, cotton candy display, and small props gives the truck a warm, inviting focal point.",
    "cloud.seatingAlt": "Sweet Cloud open sign with chairs and a small round table.",
    "cloud.seatingLabel": "Signage & seating",
    "cloud.seating":
      "The open sign, chairs, and tables extend the brand colors into the space around the truck.",
    "cloud.finalAlt": "Final 3D render of the Sweet Cloud food truck scene.",
    "cloud.finalLabel": "Final render",
    "cloud.final":
      "The complete scene: truck, sign, stools, and tables brought together in one soft, cohesive brand world.",
    "cloud.reflection":
      "The biggest challenge was keeping the scene soft and harmonious while still making the brand stand out. Working in 3D taught me to think about a brand as a space rather than a flat visual: how it is lit, how people would move around it, and how each object supports the same story. This project helped me grow in 3D modelling, lighting, and spatial brand thinking.",

    "footer.internship":
      "I'm a student looking for an internship. Have a spot or a question? Feel free to send me an email.",
    "contact.email": "Email",
    "footer.top": "Back to top ↑",
    "footer.title": "Let’s connect.",
  },
};
