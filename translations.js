// All translatable text of the portfolio. Dutch (nl) is the main language.
// Elements use data-i18n (text), data-i18n-alt (image alt) and
// data-i18n-aria (aria-label) to point to a key below.
const translations = {
  nl: {
    "cloud.counterLabel": "De machine in 3D",
    "cloud.counterAlt": "Close-up van de toonbank in de Sweet Cloud-truck met de zelf gemodelleerde roze suikerspinmachine, suikerspinnen in pastelkleuren, stokjes en een kassa.",
    "cloud.counter": "Op basis van mijn referenties modelleerde ik de suikerspinmachine zelf in Blender, met de inox kuip, het bedieningspaneel en de lade. Rond de machine plaatste ik suikerspinnen, stokjes en een kassa om de toonbank echt te laten aanvoelen.",
    "cloud.machineLabel": "Details zoeken",
    "cloud.machineAlt": "Referentiebord met foto's van roze suikerspinmachines: de onderdelen, de afmetingen, de ronde inox kuip, het bedieningspaneel en de kop in het midden.",
    "cloud.machine": "Omdat het een examenopdracht was, wilde ik de suikerspinmachine zo echt mogelijk modelleren. Ik verzamelde referentiefoto's van bestaande machines om de onderdelen, afmetingen en details te bestuderen: de inox kuip, het bedieningspaneel en de kop in het midden.",
    "cloud.moodboardAlt": "Moodboard van Sweet Cloud met roze en blauwe suikerspin, foodtrucks, marshmallows, rood-witte strepen, een ruitpatroon, zilveren stof en een kleurenpalet in roze, rood, grijs en wit.",
    "cloud.moodboard": "Ik begon met een moodboard vol suikerspin, snoep en roze foodtrucks. Daaruit haalde ik de sfeer en het kleurenpalet van het merk: zacht roze, kersenrood, zilvergrijs en wit.",
    "marquee.aria": "Disciplines en tools",
    "skills.designText": "Van onderzoek en wireframes tot een doordacht, gebruiksvriendelijk eindontwerp.",
    "skills.devText": "Ontwerpen omzetten naar werkende websites en apps.",
    "skills.visualText": "Beelden en 3D-werelden die een merk tot leven brengen.",
    "work.viewAll": "Bekijk al mijn projecten",
    "projects.title": "Al mijn projecten",
    "row.bysaphir.text": "Fotografie, websiteontwerp en productbeheer voor een modewebshop.",
    "row.bysaphir.kind": "Fotografie · Web",
    "row.revivasport.text": "Branding en websiteontwerp voor een sportmerk, als klikbaar prototype.",
    "row.revivasport.kind": "UI-design",
    "row.oyenbrugmolen.text": "Een nieuwe website voor een molen in Grimbergen, als schoolopdracht.",
    "row.oyenbrugmolen.kind": "UI-design",
    "row.habit-tracker.text": "Een mobiele webapp om dagelijkse gewoontes bij te houden.",
    "row.habit-tracker.kind": "Web app",
    "row.soumy-gold.text": "Skincarefotografie en branding voor een luxe verzorgingsmerk.",
    "row.soumy-gold.kind": "Fotografie",
    "row.sweet-cloud.text": "Een merkwereld voor een vegan suikerspin-foodtruck, in 3D.",
    "row.sweet-cloud.kind": "3D",
    "oyen.lead": "Een schoolopdracht waarin ik een nieuwe, verbeterde website ontwierp voor de Oyenbrugmolen in Grimbergen.",
    "oyen.shortDesc": "Een herontwerp van de bestaande website van de molen, uitgewerkt als klikbaar prototype in Figma.",
    "oyen.role": "UI-designer: ontwerp van de nieuwe website en het prototype.",
    "oyen.note": "Schoolopdracht, niet in opdracht van de Oyenbrugmolen.",
    "card.oyen.aria": "Open de projectdetails van de Oyenbrugmolen",
    "card.oyen.tagsAria": "Vaardigheden in het Oyenbrugmolen-project",
    "card.oyen.text": "Een nieuwe, verbeterde website voor de Oyenbrugmolen in Grimbergen, als schoolopdracht.",
    "common.figmaDesign": "Ontwerp in Figma",
    "saphir.figmaAlt": "Twee Figma-ontwerpen van de BYSAPHIR-homepage met de hero Style & Confort, bestsellers, klantreviews en een nieuwsbriefblok.",
    "saphir.figma": "Voor ik de homepage in Shopify aanpaste, ontwierp ik ze eerst in Figma. Ik werkte twee varianten uit met een andere hero-foto, met bestsellers, klantreviews en een nieuwsbriefblok.",
    "common.products": "Productbeheer",
    "saphir.productsAlt": "Collectiepagina van BYSAPHIR met hijabs in verschillende kleuren, productfoto's, prijzen en filters.",
    "saphir.products": "Ik fotografeerde de producten en voegde ze zelf toe in Shopify, met titels, prijzen, beschrijvingen en details, zodat de collectie er rustig en uniform uitziet.",
    "saphir.maintenance": "De website is momenteel in onderhoud.",
    "reviva.wireframes2Alt": "Low-fi wireframes van RevivaSport: een account aanmaken en een profielpagina met accountinformatie en persoonlijke gegevens.",
    "common.inProgress": "In progress: er komen binnenkort nog nieuwe projecten bij.",
    "reviva.wireframes": "In low-fi wireframes legde ik eerst de structuur en de functies vast, zoals succesverhalen, een eigen verhaal schrijven, je gevoel van de dag en herinneringen met een kalender. Daarna werkte ik ze verder uit in mid-fi.",
    "reviva.wireframesAlt": "Low-fi wireframes van RevivaSport: succesverhalen, een verhaal schrijven, hoe voel je je vandaag, waarom en een herinnering met kalender.",
    "common.wireframes": "Wireframes",
    "common.logoConcept": "Eerste logoconcept",
    "common.logoVariations": "Logovarianten",
    "reviva.logoConceptAlt": "Eerste logoconcept RecoverySport: een lijntekening van een vliegende vogel met de naam op een lint, als primair logo en als icoon.",
    "reviva.logoConcept": "Mijn eerste logo was een lijntekening van een vliegende vogel, onder de naam RecoverySport.",
    "reviva.logoVariationsAlt": "Varianten van het RevivaSport-vlinderlogo in verschillende combinaties van groen, blauw, roze en goud.",
    "reviva.logoVariations": "Daarna ontwierp ik de vlinder en probeerde ik hem uit in veel kleurcombinaties, tot de groene versie uit de brandsheet.",
    "reviva.brandsheet": "De brandsheet bundelt het logo, de kleuren, de typografie en de slogan, zodat elk scherm dezelfde stijl volgt.",
    "reviva.brandsheetAlt": "Brandsheet van RevivaSport met het vlinderlogo in kleur, zwart-wit en als icoon, het kleurenpalet, de typografie en de slogan.",
    "reviva.moodboard": "Het moodboard legde de sfeer vast: beweging en rust, in de groentinten #256F5D, #A1EA93 en #71DE86.",
    "reviva.moodboardAlt": "Moodboard van RevivaSport met groene kleurvlakken, sportbeelden, limoenen en woorden als Confidence, Recovery en Focus.",
    "reviva.learned": "Ik leerde dat een duidelijke merkidentiteit vooraf het ontwerpen van de website makkelijker en consistenter maakt.",
    "reviva.research": "Ik begon met een moodboard vol beelden rond sport, natuur en herstel. Zo vond ik de sfeer van het merk: frisse groentinten en woorden als Confidence, Recovery, Harmony, Focus en Vitality.",
    "common.brandsheet": "Brandsheet",
    "common.viewFigma": "Bekijk in Figma",
    "common.prototype": "Prototype",
    "common.prototypeTitle": "Klik zelf door het ontwerp.",
    "common.prototypeHint": "Het prototype is interactief: klik op knoppen en links om door de pagina's te gaan.",
    "common.viewAria": "Weergave kiezen",
    "common.desktop": "Desktop",
    "common.mobile": "Gsm",
    "card.reviva.aria": "Open de projectdetails van RevivaSport",
    "card.reviva.tagsAria": "Vaardigheden in het RevivaSport-project",
    "card.reviva.alt": "Homepage van het RevivaSport-websiteontwerp met de slogan Stay safe, train smarter.",
    "card.reviva.text": "Een websiteontwerp voor een sportmerk, uitgewerkt als klikbaar prototype in Figma.",
    "reviva.lead": "Een websiteontwerp voor het sportmerk RevivaSport, uitgewerkt als klikbaar prototype in Figma.",
    "reviva.alt": "Homepage van het RevivaSport-websiteontwerp met navigatie, de slogan Stay safe, train smarter en een sportfoto.",
    "reviva.shortDesc": "Een website voor een sportmerk met een sterke slogan, duidelijke navigatie en een oproep om de app te downloaden.",
    "reviva.role": "UI-designer: layout, typografie, kleur en prototyping.",
    "reviva.processTitle": "Van wireframe tot prototype.",
    "reviva.idea": "Een website ontwerpen die meteen toont waar het merk voor staat: veilig en slimmer sporten.",
    "reviva.direction": "Daarna maakte ik een brandsheet met het vlinderlogo in kleur, zwart-wit en als icoon, het kleurenpalet, de typografie (Inter en Jeju) en de slogan «Step by step, back in motion».",
    "reviva.creation": "Met die basis maakte ik low-fi en daarna mid-fi wireframes in Figma, samen met flowcharts, componenten en iconen, en verbond ik de pagina's tot een klikbaar prototype.",
    "reviva.result": "Een klikbaar prototype dat toont hoe de website eruitziet en werkt.",
    "reviva.reflection": "Met dit project leerde ik hoe je een merk vertaalt naar een website: welke typografie, kleuren en beelden passen, en hoe je de bezoeker via de navigatie naar de juiste informatie leidt. Door het prototype kon ik mijn ontwerp testen alsof het een echte website was.",
    "common.viewLive": "Bekijk de website",
    "card.habit.aria": "Open de projectdetails van de Habit Tracker",
    "card.habit.tagsAria": "Vaardigheden in het Habit Tracker-project",
    "card.habit.alt": "Het scherm Mijn taken van de Habit Tracker met dagelijkse gewoontes en een voortgangsbalk.",
    "card.habit.text": "Een mobiele webapp om dagelijkse gewoontes en je voortgang bij te houden.",
    "habit.lead": "Een mobiele webapp om dagelijkse gewoontes bij te houden, gebouwd met HTML en CSS.",
    "habit.alt": "Het scherm Mijn taken van de Habit Tracker met een weekkalender, voortgangsbalk en vijf dagelijkse gewoontes.",
    "habit.shortDesc": "Een overzichtelijke takenlijst voor elke dag, met een weekkalender en een voortgangsbalk per gewoonte.",
    "habit.role": "Ontwerp en front-end development.",
    "habit.processTitle": "Van ontwerp tot code.",
    "habit.idea": "Een eenvoudige app maken waarmee je in één oogopslag ziet welke gewoontes je vandaag al gedaan hebt.",
    "habit.direction": "Een rustige, mobiele interface met lichte kaarten, een donkere voortgangskaart en een eigen kleur en icoon per gewoonte.",
    "habit.creation": "Ik bouwde de weekkalender, de voortgangskaart en de lijst met vijf gewoontes: fitness, lezen, water drinken, ontbijt en wandelen.",
    "habit.result": "Een werkende webapp, online gezet met Vercel, die je op je gsm of computer kunt openen.",
    "habit.reflection": "Met dit project zette ik een ontwerp zelf om in HTML en CSS. Ik leerde hoe belangrijk een duidelijke structuur en consistente spacing zijn om een interface rustig en gebruiksvriendelijk te laten aanvoelen.",

    "meta.title": "Amel Ahriga | Digital Experience Design",
    "meta.description":
      "Portfolio van Amel Ahriga, student Digital Experience Design, met werk in fotografie, XD/UI-design en 3D-design.",
    "lang.aria": "Taal kiezen",
    "nav.aria": "Hoofdnavigatie",
    "nav.home": "Home",
    "nav.projects": "Mijn projecten",
    "nav.tools": "Tools",
    "nav.contact": "Contact",
    "cat.3d": "3D Design",
    "cat.photo": "Fotografie",

    "hero.status": "Op zoek naar een stage",
    "hero.ctaProjects": "Bekijk mijn projecten",
    "home.eyebrow": "Portfolio",
    "home.subtitle": "Student Digital Experience Design",
    "home.intro":
      "Ik creëer doordachte visuele ervaringen, van fotografie en UX/UI-design tot 3D. Hieronder vind je een selectie van mijn projecten.",
    "about.eyebrow": "Over mij",
    "about.text":
      "Mijn passie ligt bij design, creativiteit en digitale ervaringen. Ik vind het leuk om ideeën om te zetten in sterke visuele concepten, van <em class=\"hl-xd\">UX/UI en branding</em> tot <em class=\"hl-photo\">fotografie</em> en <em class=\"hl-3d\">3D</em>. Daarbij combineer ik graag creativiteit met technologie om projecten te maken die niet alleen mooi zijn, maar ook goed werken.",
    "work.eyebrow": "Werk",
    "work.title": "Geselecteerde projecten",
    "work.aria": "Projecten",


    "skills.eyebrow": "Vaardigheden",
    "skills.title": "Tools en sterktes",
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
    "saphir.moodboardAlt": "Pinterest-inspiratiebord voor BYSAPHIR met minimalistische modewebsites, neutrale kleurpaletten en editoriale modebeelden.",
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
    "footer.title": "Laten we connecteren",
  },

  fr: {
    "cloud.counterLabel": "La machine en 3D",
    "cloud.counterAlt": "Gros plan sur le comptoir du camion Sweet Cloud avec la machine à barbe à papa rose modélisée par moi, des barbes à papa pastel, des bâtonnets et une caisse.",
    "cloud.counter": "À partir de mes références, j'ai modélisé moi-même la machine à barbe à papa dans Blender, avec la cuve en inox, le panneau de commande et le tiroir. Autour, j'ai placé des barbes à papa, des bâtonnets et une caisse pour rendre le comptoir crédible.",
    "cloud.machineLabel": "Recherche de détails",
    "cloud.machineAlt": "Planche de références avec des photos de machines à barbe à papa roses : les pièces, les dimensions, la cuve ronde en inox, le panneau de commande et la tête au centre.",
    "cloud.machine": "Comme c'était un projet d'examen, je voulais modéliser la machine à barbe à papa de la façon la plus réaliste possible. J'ai rassemblé des photos de machines existantes pour étudier les pièces, les dimensions et les détails : la cuve en inox, le panneau de commande et la tête au centre.",
    "cloud.moodboardAlt": "Moodboard de Sweet Cloud avec barbe à papa rose et bleue, food trucks, marshmallows, rayures rouges et blanches, motif à carreaux, tissu argenté et une palette rose, rouge, gris et blanc.",
    "cloud.moodboard": "J'ai commencé par un moodboard rempli de barbe à papa, de bonbons et de food trucks roses. J'en ai tiré l'ambiance et la palette de la marque : rose doux, rouge cerise, gris argenté et blanc.",
    "marquee.aria": "Disciplines et outils",
    "skills.designText": "De la recherche et des wireframes jusqu'à un design final réfléchi et facile à utiliser.",
    "skills.devText": "Transformer des designs en sites et applications qui fonctionnent.",
    "skills.visualText": "Des images et des univers 3D qui donnent vie à une marque.",
    "work.viewAll": "Voir tous mes projets",
    "projects.title": "Tous mes projets",
    "row.bysaphir.text": "Photographie, design du site et gestion des produits pour un e-shop de mode.",
    "row.bysaphir.kind": "Photo · Web",
    "row.revivasport.text": "Branding et design de site pour une marque de sport, en prototype cliquable.",
    "row.revivasport.kind": "UI design",
    "row.oyenbrugmolen.text": "Un nouveau site pour un moulin à Grimbergen, réalisé pour l'école.",
    "row.oyenbrugmolen.kind": "UI design",
    "row.habit-tracker.text": "Une web app mobile pour suivre ses habitudes quotidiennes.",
    "row.habit-tracker.kind": "Web app",
    "row.soumy-gold.text": "Photographie skincare et branding pour une marque de soins de luxe.",
    "row.soumy-gold.kind": "Photo",
    "row.sweet-cloud.text": "Un univers de marque pour un food truck de barbe à papa vegan, en 3D.",
    "row.sweet-cloud.kind": "3D",
    "oyen.lead": "Un projet d'école dans lequel j'ai conçu un nouveau site amélioré pour le moulin Oyenbrugmolen à Grimbergen.",
    "oyen.shortDesc": "Une refonte du site existant du moulin, réalisée comme prototype cliquable dans Figma.",
    "oyen.role": "UI designer : design du nouveau site et du prototype.",
    "oyen.note": "Projet d'école, non commandé par l'Oyenbrugmolen.",
    "card.oyen.aria": "Ouvrir les détails du projet Oyenbrugmolen",
    "card.oyen.tagsAria": "Compétences du projet Oyenbrugmolen",
    "card.oyen.text": "Un nouveau site amélioré pour le moulin Oyenbrugmolen à Grimbergen, réalisé pour l'école.",
    "common.figmaDesign": "Design dans Figma",
    "saphir.figmaAlt": "Deux designs Figma de la page d'accueil BYSAPHIR avec le hero Style & Confort, les bestsellers, les avis clients et un bloc newsletter.",
    "saphir.figma": "Avant de modifier la page d'accueil dans Shopify, je l'ai d'abord conçue dans Figma. J'ai réalisé deux variantes avec une photo hero différente, avec les bestsellers, les avis clients et un bloc newsletter.",
    "common.products": "Gestion des produits",
    "saphir.productsAlt": "Page de collection BYSAPHIR avec des hijabs de différentes couleurs, photos produits, prix et filtres.",
    "saphir.products": "J'ai photographié les produits et je les ai ajoutés moi-même dans Shopify, avec titres, prix, descriptions et détails, pour que la collection soit présentée de façon calme et uniforme.",
    "saphir.maintenance": "Le site est actuellement en maintenance.",
    "reviva.wireframes2Alt": "Wireframes low-fi de RevivaSport : créer un compte et une page de profil avec les informations du compte et les données personnelles.",
    "common.inProgress": "En cours : de nouveaux projets arrivent bientôt.",
    "reviva.wireframes": "Avec des wireframes low-fi, j'ai d'abord fixé la structure et les fonctionnalités, comme les témoignages, écrire sa propre histoire, son ressenti du jour et des rappels avec un calendrier. Ensuite, je les ai développés en mid-fi.",
    "reviva.wireframesAlt": "Wireframes low-fi de RevivaSport : témoignages, écrire son histoire, comment te sens-tu aujourd'hui, pourquoi et un rappel avec calendrier.",
    "common.wireframes": "Wireframes",
    "common.logoConcept": "Premier concept de logo",
    "common.logoVariations": "Variantes du logo",
    "reviva.logoConceptAlt": "Premier concept de logo RecoverySport : un dessin au trait d'un oiseau en vol avec le nom sur un ruban, en logo principal et en icône.",
    "reviva.logoConcept": "Mon premier logo était un dessin au trait d'un oiseau en vol, sous le nom RecoverySport.",
    "reviva.logoVariationsAlt": "Variantes du logo papillon RevivaSport dans différentes combinaisons de vert, bleu, rose et or.",
    "reviva.logoVariations": "Ensuite, j'ai dessiné le papillon et je l'ai essayé dans de nombreuses combinaisons de couleurs, jusqu'à la version verte du brandsheet.",
    "reviva.brandsheet": "Le brandsheet réunit le logo, les couleurs, la typographie et le slogan, pour que chaque écran suive le même style.",
    "reviva.brandsheetAlt": "Brandsheet de RevivaSport avec le logo papillon en couleur, en noir et blanc et en icône, la palette, la typographie et le slogan.",
    "reviva.moodboard": "Le moodboard a fixé l'ambiance : mouvement et calme, dans les verts #256F5D, #A1EA93 et #71DE86.",
    "reviva.moodboardAlt": "Moodboard de RevivaSport avec des aplats verts, des images de sport, des citrons verts et des mots comme Confidence, Recovery et Focus.",
    "reviva.learned": "J'ai appris qu'une identité de marque claire, définie à l'avance, rend le design du site plus simple et plus cohérent.",
    "reviva.research": "J'ai commencé par un moodboard rempli d'images autour du sport, de la nature et de la récupération. J'y ai trouvé l'ambiance de la marque : des verts frais et des mots comme Confidence, Recovery, Harmony, Focus et Vitality.",
    "common.brandsheet": "Brandsheet",
    "common.viewFigma": "Voir dans Figma",
    "common.prototype": "Prototype",
    "common.prototypeTitle": "Parcourez le design vous-même.",
    "common.prototypeHint": "Le prototype est interactif : cliquez sur les boutons et les liens pour passer d'une page à l'autre.",
    "common.viewAria": "Choisir l'affichage",
    "common.desktop": "Ordinateur",
    "common.mobile": "Mobile",
    "card.reviva.aria": "Ouvrir les détails du projet RevivaSport",
    "card.reviva.tagsAria": "Compétences du projet RevivaSport",
    "card.reviva.alt": "Page d'accueil du design de site RevivaSport avec le slogan Stay safe, train smarter.",
    "card.reviva.text": "Un design de site pour une marque de sport, réalisé comme prototype cliquable dans Figma.",
    "reviva.lead": "Un design de site pour la marque de sport RevivaSport, réalisé comme prototype cliquable dans Figma.",
    "reviva.alt": "Page d'accueil du design de site RevivaSport avec la navigation, le slogan Stay safe, train smarter et une photo de sport.",
    "reviva.shortDesc": "Un site pour une marque de sport avec un slogan fort, une navigation claire et un appel à télécharger l'app.",
    "reviva.role": "UI designer : mise en page, typographie, couleurs et prototypage.",
    "reviva.processTitle": "Du wireframe au prototype.",
    "reviva.idea": "Concevoir un site qui montre tout de suite ce que la marque défend : faire du sport en sécurité et plus intelligemment.",
    "reviva.direction": "Ensuite, j'ai créé un brandsheet avec le logo papillon en couleur, en noir et blanc et en icône, la palette de couleurs, la typographie (Inter et Jeju) et le slogan « Step by step, back in motion ».",
    "reviva.creation": "Sur cette base, j'ai créé des wireframes low-fi puis mid-fi dans Figma, avec des flowcharts, des composants et des icônes, puis j'ai relié les pages en un prototype cliquable.",
    "reviva.result": "Un prototype cliquable qui montre à quoi ressemble le site et comment il fonctionne.",
    "reviva.reflection": "Avec ce projet, j'ai appris à traduire une marque en site web : quelle typographie, quelles couleurs et quelles images conviennent, et comment guider le visiteur vers la bonne information grâce à la navigation. Le prototype m'a permis de tester mon design comme un vrai site.",
    "common.viewLive": "Voir le site",
    "card.habit.aria": "Ouvrir les détails du projet Habit Tracker",
    "card.habit.tagsAria": "Compétences du projet Habit Tracker",
    "card.habit.alt": "L'écran Mes tâches du Habit Tracker avec les habitudes du jour et une barre de progression.",
    "card.habit.text": "Une web app mobile pour suivre ses habitudes quotidiennes et sa progression.",
    "habit.lead": "Une web app mobile pour suivre ses habitudes quotidiennes, construite en HTML et CSS.",
    "habit.alt": "L'écran Mes tâches du Habit Tracker avec un calendrier de la semaine, une barre de progression et cinq habitudes quotidiennes.",
    "habit.shortDesc": "Une liste de tâches claire pour chaque jour, avec un calendrier de la semaine et une barre de progression par habitude.",
    "habit.role": "Design et développement front-end.",
    "habit.processTitle": "Du design au code.",
    "habit.idea": "Créer une app simple qui montre en un coup d'œil quelles habitudes on a déjà faites aujourd'hui.",
    "habit.direction": "Une interface mobile calme avec des cartes claires, une carte de progression foncée et une couleur et une icône propres à chaque habitude.",
    "habit.creation": "J'ai construit le calendrier de la semaine, la carte de progression et la liste de cinq habitudes : fitness, lecture, boire de l'eau, petit-déjeuner et marche.",
    "habit.result": "Une web app fonctionnelle, mise en ligne avec Vercel, qu'on peut ouvrir sur son téléphone ou son ordinateur.",
    "habit.reflection": "Avec ce projet, j'ai moi-même traduit un design en HTML et CSS. J'ai appris à quel point une structure claire et des espacements cohérents rendent une interface calme et facile à utiliser.",

    "meta.title": "Amel Ahriga | Digital Experience Design",
    "meta.description":
      "Portfolio d'Amel Ahriga, étudiante en Digital Experience Design, avec des travaux en photographie, design XD/UI et design 3D.",
    "lang.aria": "Choisir la langue",
    "nav.aria": "Navigation principale",
    "nav.home": "Accueil",
    "nav.projects": "Mes projets",
    "nav.tools": "Outils",
    "nav.contact": "Contact",
    "cat.3d": "Design 3D",
    "cat.photo": "Photographie",

    "hero.status": "À la recherche d'un stage",
    "hero.ctaProjects": "Voir mes projets",
    "home.eyebrow": "Portfolio",
    "home.subtitle": "Étudiante en Digital Experience Design",
    "home.intro":
      "Je crée des expériences visuelles réfléchies, de la photographie et du design UX/UI à la 3D. Tu trouveras ci-dessous une sélection de mes projets.",
    "about.eyebrow": "À propos",
    "about.text":
      "Ma passion, c'est le design, la créativité et les expériences digitales. J'aime transformer des idées en concepts visuels forts, de <em class=\"hl-xd\">l'UX/UI et du branding</em> à <em class=\"hl-photo\">la photographie</em> et <em class=\"hl-3d\">la 3D</em>. J'aime combiner créativité et technologie pour créer des projets qui ne sont pas seulement beaux, mais qui fonctionnent aussi bien.",
    "work.eyebrow": "Travaux",
    "work.title": "Projets sélectionnés",
    "work.aria": "Projets",


    "skills.eyebrow": "Compétences",
    "skills.title": "Outils et points forts",
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
    "saphir.moodboardAlt": "Tableau d'inspiration Pinterest pour BYSAPHIR avec des sites de mode minimalistes, des palettes neutres et des images de mode éditoriales.",
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
    "footer.title": "Restons en contact",
  },

  en: {
    "cloud.counterLabel": "The machine in 3D",
    "cloud.counterAlt": "Close-up of the counter in the Sweet Cloud truck with the pink cotton candy machine I modelled, pastel cotton candies, sticks and a cash register.",
    "cloud.counter": "Based on my references, I modelled the cotton candy machine myself in Blender, with the stainless steel bowl, the control panel and the drawer. Around it I placed cotton candies, sticks and a cash register to make the counter feel real.",
    "cloud.machineLabel": "Researching details",
    "cloud.machineAlt": "Reference board with photos of pink cotton candy machines: the parts, the dimensions, the round stainless steel bowl, the control panel and the spinner head in the centre.",
    "cloud.machine": "Since this was an exam assignment, I wanted to model the cotton candy machine as realistically as possible. I gathered reference photos of existing machines to study the parts, dimensions and details: the stainless steel bowl, the control panel and the spinner head in the centre.",
    "cloud.moodboardAlt": "Sweet Cloud moodboard with pink and blue cotton candy, food trucks, marshmallows, red and white stripes, a check pattern, silver fabric and a pink, red, grey and white colour palette.",
    "cloud.moodboard": "I started with a moodboard full of cotton candy, sweets and pink food trucks. From it I took the mood and colour palette of the brand: soft pink, cherry red, silver grey and white.",
    "marquee.aria": "Disciplines and tools",
    "skills.designText": "From research and wireframes to a thoughtful, user-friendly final design.",
    "skills.devText": "Turning designs into working websites and apps.",
    "skills.visualText": "Images and 3D worlds that bring a brand to life.",
    "work.viewAll": "View all my projects",
    "projects.title": "All my projects",
    "row.bysaphir.text": "Photography, website design and product management for a fashion webshop.",
    "row.bysaphir.kind": "Photo · Web",
    "row.revivasport.text": "Branding and website design for a sports brand, as a clickable prototype.",
    "row.revivasport.kind": "UI design",
    "row.oyenbrugmolen.text": "A new website for a mill in Grimbergen, made as a school assignment.",
    "row.oyenbrugmolen.kind": "UI design",
    "row.habit-tracker.text": "A mobile web app for tracking daily habits.",
    "row.habit-tracker.kind": "Web app",
    "row.soumy-gold.text": "Skincare photography and branding for a luxury care brand.",
    "row.soumy-gold.kind": "Photo",
    "row.sweet-cloud.text": "A brand world for a vegan cotton candy food truck, in 3D.",
    "row.sweet-cloud.kind": "3D",
    "oyen.lead": "A school assignment in which I designed a new, improved website for the Oyenbrugmolen mill in Grimbergen.",
    "oyen.shortDesc": "A redesign of the mill's existing website, built as a clickable prototype in Figma.",
    "oyen.role": "UI designer: design of the new website and the prototype.",
    "oyen.note": "School assignment, not commissioned by the Oyenbrugmolen.",
    "card.oyen.aria": "Open the Oyenbrugmolen project details",
    "card.oyen.tagsAria": "Skills in the Oyenbrugmolen project",
    "card.oyen.text": "A new, improved website for the Oyenbrugmolen mill in Grimbergen, made as a school assignment.",
    "common.figmaDesign": "Design in Figma",
    "saphir.figmaAlt": "Two Figma designs of the BYSAPHIR homepage with the Style & Confort hero, bestsellers, customer reviews and a newsletter block.",
    "saphir.figma": "Before changing the homepage in Shopify, I designed it in Figma first. I worked out two variants with a different hero photo, with bestsellers, customer reviews and a newsletter block.",
    "common.products": "Product management",
    "saphir.productsAlt": "BYSAPHIR collection page with hijabs in different colours, product photos, prices and filters.",
    "saphir.products": "I photographed the products and added them to Shopify myself, with titles, prices, descriptions and details, so the collection looks calm and consistent.",
    "saphir.maintenance": "The website is currently under maintenance.",
    "reviva.wireframes2Alt": "RevivaSport low-fi wireframes: creating an account and a profile page with account information and personal data.",
    "common.inProgress": "In progress: more projects are coming soon.",
    "reviva.wireframes": "In low-fi wireframes I first set out the structure and features, such as success stories, writing your own story, how you feel today and reminders with a calendar. Then I developed them further in mid-fi.",
    "reviva.wireframesAlt": "RevivaSport low-fi wireframes: success stories, write your story, how are you feeling today, why and a reminder with a calendar.",
    "common.wireframes": "Wireframes",
    "common.logoConcept": "First logo concept",
    "common.logoVariations": "Logo variations",
    "reviva.logoConceptAlt": "First RecoverySport logo concept: a line drawing of a flying bird with the name on a ribbon, as primary logo and as icon.",
    "reviva.logoConcept": "My first logo was a line drawing of a flying bird, under the name RecoverySport.",
    "reviva.logoVariationsAlt": "Variations of the RevivaSport butterfly logo in different combinations of green, blue, pink and gold.",
    "reviva.logoVariations": "Then I designed the butterfly and tried it in many colour combinations, ending with the green version from the brand sheet.",
    "reviva.brandsheet": "The brand sheet brings together the logo, colours, typography and slogan, so every screen follows the same style.",
    "reviva.brandsheetAlt": "RevivaSport brand sheet with the butterfly logo in colour, black and white and as an icon, the colour palette, the typography and the slogan.",
    "reviva.moodboard": "The moodboard set the mood: movement and calm, in the greens #256F5D, #A1EA93 and #71DE86.",
    "reviva.moodboardAlt": "RevivaSport moodboard with green colour blocks, sports photos, limes and words like Confidence, Recovery and Focus.",
    "reviva.learned": "I learned that a clear brand identity up front makes designing the website easier and more consistent.",
    "reviva.research": "I started with a moodboard full of images around sport, nature and recovery. It gave me the feel of the brand: fresh greens and words like Confidence, Recovery, Harmony, Focus and Vitality.",
    "common.brandsheet": "Brand sheet",
    "common.viewFigma": "View in Figma",
    "common.prototype": "Prototype",
    "common.prototypeTitle": "Click through the design yourself.",
    "common.prototypeHint": "The prototype is interactive: click buttons and links to move between pages.",
    "common.viewAria": "Choose a view",
    "common.desktop": "Desktop",
    "common.mobile": "Mobile",
    "card.reviva.aria": "Open the RevivaSport project details",
    "card.reviva.tagsAria": "Skills in the RevivaSport project",
    "card.reviva.alt": "Homepage of the RevivaSport website design with the slogan Stay safe, train smarter.",
    "card.reviva.text": "A website design for a sports brand, built as a clickable prototype in Figma.",
    "reviva.lead": "A website design for the sports brand RevivaSport, built as a clickable prototype in Figma.",
    "reviva.alt": "Homepage of the RevivaSport website design with navigation, the slogan Stay safe, train smarter and a sports photo.",
    "reviva.shortDesc": "A website for a sports brand with a strong slogan, clear navigation and a call to download the app.",
    "reviva.role": "UI designer: layout, typography, colour and prototyping.",
    "reviva.processTitle": "From wireframe to prototype.",
    "reviva.idea": "Design a website that immediately shows what the brand stands for: training safely and smarter.",
    "reviva.direction": "Next I made a brand sheet with the butterfly logo in colour, black and white and as an icon, the colour palette, the typography (Inter and Jeju) and the slogan “Step by step, back in motion”.",
    "reviva.creation": "On that basis I made low-fi and then mid-fi wireframes in Figma, along with flowcharts, components and icons, and linked the pages into a clickable prototype.",
    "reviva.result": "A clickable prototype that shows how the website looks and works.",
    "reviva.reflection": "This project taught me how to translate a brand into a website: which typography, colours and images fit, and how navigation leads visitors to the right information. The prototype let me test my design as if it were a real website.",
    "common.viewLive": "View the website",
    "card.habit.aria": "Open the Habit Tracker project details",
    "card.habit.tagsAria": "Skills in the Habit Tracker project",
    "card.habit.alt": "The My tasks screen of the Habit Tracker with daily habits and a progress bar.",
    "card.habit.text": "A mobile web app for tracking daily habits and your progress.",
    "habit.lead": "A mobile web app for tracking daily habits, built with HTML and CSS.",
    "habit.alt": "The My tasks screen of the Habit Tracker with a week calendar, a progress bar and five daily habits.",
    "habit.shortDesc": "A clear task list for every day, with a week calendar and a progress bar for each habit.",
    "habit.role": "Design and front-end development.",
    "habit.processTitle": "From design to code.",
    "habit.idea": "Make a simple app that shows at a glance which habits you have already done today.",
    "habit.direction": "A calm mobile interface with light cards, a dark progress card and its own colour and icon for each habit.",
    "habit.creation": "I built the week calendar, the progress card and the list of five habits: fitness, reading, drinking water, breakfast and walking.",
    "habit.result": "A working web app, deployed with Vercel, that you can open on your phone or computer.",
    "habit.reflection": "In this project I turned a design into HTML and CSS myself. I learned how much a clear structure and consistent spacing make an interface feel calm and easy to use.",

    "meta.title": "Amel Ahriga | Digital Experience Design",
    "meta.description":
      "Portfolio of Amel Ahriga, a Digital Experience Design student working across photography, XD/UI design, and 3D design.",
    "lang.aria": "Choose language",
    "nav.aria": "Main navigation",
    "nav.home": "Home",
    "nav.projects": "My projects",
    "nav.tools": "Tools",
    "nav.contact": "Contact",
    "cat.3d": "3D Design",
    "cat.photo": "Photography",

    "hero.status": "Looking for an internship",
    "hero.ctaProjects": "View my projects",
    "home.eyebrow": "Portfolio",
    "home.subtitle": "Digital Experience Design Student",
    "home.intro":
      "I create thoughtful visual experiences, from photography and UX/UI design to 3D. Below you'll find a selection of my projects.",
    "about.eyebrow": "About me",
    "about.text":
      "My passion lies in design, creativity and digital experiences. I love turning ideas into strong visual concepts, from <em class=\"hl-xd\">UX/UI and branding</em> to <em class=\"hl-photo\">photography</em> and <em class=\"hl-3d\">3D</em>. I like to combine creativity with technology to create projects that don't just look good, but also work well.",
    "work.eyebrow": "Work",
    "work.title": "Selected projects",
    "work.aria": "Projects",


    "skills.eyebrow": "Skills",
    "skills.title": "Tools and strengths",
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
    "saphir.moodboardAlt": "Pinterest inspiration board for BYSAPHIR with minimalist fashion websites, neutral colour palettes and editorial fashion images.",
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
    "footer.title": "Let’s connect",
  },
};
