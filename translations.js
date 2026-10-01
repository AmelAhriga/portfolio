// All translatable text of the portfolio. Dutch (nl) is the main language.
// Elements use data-i18n (text), data-i18n-alt (image alt) and
// data-i18n-aria (aria-label) to point to a key below.
const translations = {
  nl: {
    "ll.mmEyebrow": "Analyse",
    "ll.mmTitle": "De bestaande site in kaart.",
    "ll.mm": "We begonnen met een mindmap van de huidige website. Vanuit de homepage brachten we alle pagina's en onderdelen in kaart, zoals Wie zijn wij, Hoe kunt u helpen, Nieuws en events, Partners en Contact, en ook de digitale toegankelijkheid en het team met diensten als AnyReader en AnySurfer. Zo zagen we hoeveel informatie er was, waar ze verspreid stond en wat we zeker moesten behouden.",
    "ll.mmAlt": "Mindmap van de website van Licht & Liefde met in het midden de homepage en daarrond alle pagina's, de digitale toegankelijkheid en het toegankelijkheidsteam met zijn diensten.",
    "ll.mmCaption": "Onze mindmap van de huidige website, met de onderdelen die we volgens de opdrachtgever moesten behouden.",
    "ll.csLabel": "Card sorting",
    "ll.cs": "De testpersoon kreeg 30 kaartjes met de onderdelen van de website, zoals Over ons, Workshops, Doneren en Contact, en groepeerde ze zoals het voor hem logisch was. Daaruit kwamen acht groepen: Over de organisatie, Activiteiten & nieuws, Helpen en deelnemen, Informatie voor gebruikers, Contact, Samenwerking, Account en Extra info. Alleen bij 'Digitale toegankelijkheid' twijfelde hij waar het hoorde. Deze groepen gebruikten we als basis voor de nieuwe navigatie.",
    "ll.csAlt": "Card sorting in FigJam: bovenaan de losse kaartjes met de onderdelen van de website, onderaan de acht groepen die de testpersoon maakte.",
    "ll.csCaption": "De card sorting in FigJam: de losse kaartjes bovenaan en de groepen die de testpersoon maakte onderaan.",
    "ll.planLabel": "Testplan",
    "ll.hypLabel": "Hypothese",
    "ll.hyp": "De huidige structuur van de website sluit niet goed aan bij wat gebruikers verwachten. Met een nieuwe navigatiestructuur vinden ze informatie sneller en makkelijker terug.",
    "ll.questionsLabel": "Onderzoeksvragen",
    "ll.questions": "Hoe groeperen gebruikers de informatie? Begrijpen ze de namen van de categorieën? Vinden ze snel wat ze zoeken? En welke onderdelen zijn onduidelijk?",
    "ll.methodLabel": "Methode",
    "ll.method": "Een kwalitatief onderzoek met card sorting en een digitale gebruikerstest van de navigatie. Deelnemers dachten luidop terwijl ze taken uitvoerden, zoals info zoeken over een visuele beperking, vrijwilliger worden, workshops zoeken en contact opnemen.",
    "ll.participantsLabel": "Deelnemers",
    "ll.participants": "Drie deelnemers tussen 18 en 65 jaar, één per teamlid, uit ons eigen netwerk. Vooraf deden we een oefentest om de timing en de flow te controleren.",
    "ll.brandEyebrow": "Branding",
    "ll.brandTitle": "Het merk als basis.",
    "ll.brand": "We vertrokken van de bestaande huisstijl van Licht & Liefde: het logo, de vijf merkkleuren (donkerblauw, geel, turquoise, oranje en roze) en het lettertype Inter. Daarop bouwden we een duidelijke typografische schaal en knoppen. Elke kleurcombinatie controleerden we op contrast volgens de WCAG-richtlijnen, zodat de teksten ook voor slechtziende mensen goed leesbaar zijn.",
    "ll.brandAlt": "Brandingbord van Licht & Liefde met notities, het logo, de vijf merkkleuren, de lettergroottes, het lettertype Inter, de knoppen en een WCAG-contrasttabel.",
    "ll.brandCaption": "Ons brandingbord in Figma: notities, logo, kleuren, typografie, knoppen en de contrastcheck.",
    "ll.a11yEyebrow": "Toegankelijkheid",
    "ll.a11yTitle": "Een site voor iedereen.",
    "ll.goal": "Licht & Liefde ondersteunt blinde en slechtziende mensen. Onze nieuwe website moest daarom voor iedereen toegankelijk zijn: duidelijke structuur, leesbare teksten en een navigatie die je snel naar de juiste informatie brengt.",
    "ll.testLabel": "Usertests",
    "ll.test": "We testten ons ontwerp met drie gebruikers. Elke gebruiker kreeg dezelfde taken, zoals info vinden bij Hulp & info, vrijwilliger worden, een activiteit zoeken, contact opnemen, doneren en de historiek vinden. We noteerden wat vlot ging en waar ze twijfelden.",
    "ll.findingsLabel": "Wat we leerden",
    "ll.findings": "De meeste categorieën waren duidelijk en contact, adres en doneren werden meteen gevonden. Maar 'Nieuws & Events' was verwarrend naast 'Activiteiten', de workshops stonden op een onlogische plek en de historiek was moeilijk te vinden.",
    "ll.changesLabel": "Wat we aanpasten",
    "ll.changes": "Op basis van de tests stelden we voor om de workshops onder Activiteiten te zetten, 'Nieuws & Events' duidelijker te maken, nieuws hoger op de homepage te tonen, de historiek bereikbaar te maken via een dropdown en contact ook bovenaan in de navigatie te zetten.",
    "ll.usertestsAlt": "Notities van de usertests met Xian, Gabriel en Imane: per taak wat de gebruiker deed, wat goed ging en welke feedback ze gaven.",
    "ll.usertestsCaption": "Onze notities van de drie usertests, per taak uitgeschreven.",
    "ll.alt": "Homepage van het nieuwe Licht & Liefde-ontwerp met de titel Autonomie boven hulp, een korte uitleg over het netwerk en een foto van een vrouw met een zonnebril.",
    "ll.lead": "Een schoolopdracht in groep waarin we de website van Licht & Liefde opnieuw ontwierpen.",
    "ll.shortDesc": "Een herontwerp van de bestaande website, uitgewerkt als klikbaar prototype in Figma.",
    "ll.role": "Groepswerk: samen ontwierpen we de nieuwe website en het prototype.",
    "ll.note": "Groepswerk voor school, niet in opdracht van Licht & Liefde.",
    "row.licht-en-liefde.text": "Een nieuw ontwerp voor de website van Licht & Liefde, als groepswerk.",
    "row.licht-en-liefde.kind": "UI-design",
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
    "row.habit-tracker.text": "Een mobiele webapp om dagelijkse gewoontes bij te houden.",
    "row.habit-tracker.kind": "Web app",
    "row.soumy-gold.text": "Skincarefotografie en branding voor een luxe verzorgingsmerk.",
    "row.soumy-gold.kind": "Fotografie",
    "row.sweet-cloud.text": "Een merkwereld voor een vegan suikerspin-foodtruck, in 3D.",
    "row.sweet-cloud.kind": "3D",
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
    "ll.mmEyebrow": "Analyse",
    "ll.mmTitle": "Cartographier le site existant.",
    "ll.mm": "Nous avons commencé par une mindmap du site actuel. À partir de la page d'accueil, nous avons répertorié toutes les pages et rubriques, comme Wie zijn wij, Hoe kunt u helpen, Nieuws en events, Partners et Contact, ainsi que l'accessibilité numérique et l'équipe avec des services comme AnyReader et AnySurfer. Cela nous a montré la quantité d'informations, où elles étaient dispersées et ce qu'il fallait absolument garder.",
    "ll.mmAlt": "Mindmap du site de Licht & Liefde avec la page d'accueil au centre et autour toutes les pages, l'accessibilité numérique et l'équipe accessibilité avec ses services.",
    "ll.mmCaption": "Notre mindmap du site actuel, avec les éléments à conserver selon le commanditaire.",
    "ll.csLabel": "Card sorting",
    "ll.cs": "Le participant a reçu 30 cartes avec les rubriques du site, comme Over ons, Workshops, Doneren et Contact, et les a regroupées de la façon qui lui semblait logique. Cela a donné huit groupes : l'organisation, activités et actualités, aider et participer, informations pour les utilisateurs, contact, partenariats, compte et infos supplémentaires. Il n'a hésité que pour « Digitale toegankelijkheid ». Ces groupes ont servi de base à la nouvelle navigation.",
    "ll.csAlt": "Card sorting dans FigJam : en haut les cartes mélangées avec les rubriques du site, en bas les huit groupes créés par le participant.",
    "ll.csCaption": "Le card sorting dans FigJam : les cartes mélangées en haut et les groupes créés par le participant en bas.",
    "ll.planLabel": "Plan de test",
    "ll.hypLabel": "Hypothèse",
    "ll.hyp": "La structure actuelle du site ne correspond pas bien aux attentes des utilisateurs. Avec une nouvelle navigation, ils trouvent l'information plus vite et plus facilement.",
    "ll.questionsLabel": "Questions de recherche",
    "ll.questions": "Comment les utilisateurs regroupent-ils l'information ? Comprennent-ils le nom des catégories ? Trouvent-ils vite ce qu'ils cherchent ? Et quelles parties sont peu claires ?",
    "ll.methodLabel": "Méthode",
    "ll.method": "Une recherche qualitative avec du card sorting et un test utilisateur numérique de la navigation. Les participants pensaient à voix haute en réalisant des tâches, comme chercher une info sur un handicap visuel, devenir bénévole, trouver des ateliers et prendre contact.",
    "ll.participantsLabel": "Participants",
    "ll.participants": "Trois participants de 18 à 65 ans, un par membre de l'équipe, recrutés dans notre propre réseau. Avant cela, nous avons fait un test d'essai pour vérifier le timing et le déroulement.",
    "ll.brandEyebrow": "Branding",
    "ll.brandTitle": "La marque comme base.",
    "ll.brand": "Nous sommes partis de l'identité existante de Licht & Liefde : le logo, les cinq couleurs de la marque (bleu foncé, jaune, turquoise, orange et rose) et la police Inter. Nous y avons ajouté une échelle typographique claire et des boutons. Chaque combinaison de couleurs a été vérifiée selon les règles de contraste WCAG, pour que les textes restent lisibles pour les personnes malvoyantes.",
    "ll.brandAlt": "Planche de branding de Licht & Liefde avec des notes, le logo, les cinq couleurs, les tailles de texte, la police Inter, les boutons et un tableau de contraste WCAG.",
    "ll.brandCaption": "Notre planche de branding dans Figma : notes, logo, couleurs, typographie, boutons et vérification du contraste.",
    "ll.a11yEyebrow": "Accessibilité",
    "ll.a11yTitle": "Un site pour tout le monde.",
    "ll.goal": "Licht & Liefde accompagne les personnes aveugles et malvoyantes. Notre nouveau site devait donc être accessible à tous : une structure claire, des textes lisibles et une navigation qui mène vite à la bonne information.",
    "ll.testLabel": "Tests utilisateurs",
    "ll.test": "Nous avons testé notre design avec trois utilisateurs. Chacun a reçu les mêmes tâches, comme trouver une info dans Hulp & info, devenir bénévole, chercher une activité, prendre contact, faire un don et trouver l'historique. Nous avons noté ce qui allait bien et où ils hésitaient.",
    "ll.findingsLabel": "Ce que nous avons appris",
    "ll.findings": "La plupart des catégories étaient claires et le contact, l'adresse et le don étaient trouvés tout de suite. Mais « Nieuws & Events » prêtait à confusion à côté d'« Activiteiten », les ateliers étaient mal placés et l'historique était difficile à trouver.",
    "ll.changesLabel": "Ce que nous avons adapté",
    "ll.changes": "Suite aux tests, nous avons proposé de placer les ateliers sous Activiteiten, de clarifier « Nieuws & Events », d'afficher les actualités plus haut sur la page d'accueil, de rendre l'historique accessible via un menu déroulant et d'ajouter le contact en haut de la navigation.",
    "ll.usertestsAlt": "Notes des tests utilisateurs avec Xian, Gabriel et Imane : pour chaque tâche, ce que l'utilisateur a fait, ce qui a bien fonctionné et leurs retours.",
    "ll.usertestsCaption": "Nos notes des trois tests utilisateurs, rédigées tâche par tâche.",
    "ll.alt": "Page d'accueil du nouveau design de Licht & Liefde avec le titre Autonomie boven hulp, une courte présentation du réseau et la photo d'une femme portant des lunettes de soleil.",
    "ll.lead": "Un projet d'école en groupe dans lequel nous avons redessiné le site de Licht & Liefde.",
    "ll.shortDesc": "Une refonte du site existant, réalisée comme prototype cliquable dans Figma.",
    "ll.role": "Travail de groupe : ensemble, nous avons conçu le nouveau site et le prototype.",
    "ll.note": "Travail de groupe pour l'école, non commandé par Licht & Liefde.",
    "row.licht-en-liefde.text": "Un nouveau design pour le site de Licht & Liefde, en travail de groupe.",
    "row.licht-en-liefde.kind": "UI design",
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
    "row.habit-tracker.text": "Une web app mobile pour suivre ses habitudes quotidiennes.",
    "row.habit-tracker.kind": "Web app",
    "row.soumy-gold.text": "Photographie skincare et branding pour une marque de soins de luxe.",
    "row.soumy-gold.kind": "Photo",
    "row.sweet-cloud.text": "Un univers de marque pour un food truck de barbe à papa vegan, en 3D.",
    "row.sweet-cloud.kind": "3D",
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

};
