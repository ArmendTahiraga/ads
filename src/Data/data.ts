import { ProductType } from "../Models/Models";
export const products: ProductType[] = [
	{
		productId: 1,
		productName: "Canna Terra Vega",
		productMiniDescriptionEN:
			"Canna Terra Vega is a complete professional nutrient for the growing phase of plants. It is specially developed for growing in pots and potting mix.",
		productMiniDescriptionAL:
			"Canna Terra Vega është një lëndë ushqyese e plotë profesionale për fazën e rritjes së bimëve. Është zhvilluar posaçërisht për rritje në vazo dhe përzierje vazo.",
		productImage: [
			"/Images/terraVega/terraVega1L.png",
			"/Images/terraVega/terraVega5L.png",
			"/Images/terraVega/terraVega10L.png",
		],
		productBestseller: false,
		productSizes: [1, 5, 10],
		productPrices: [18, 70, 100],
	},
	{
		productId: 2,
		productName: "Canna Terra Flores",
		productMiniDescriptionEN:
			"Canna Terra Flores is a complete professional nutrient for the flowering phase of plants. It is specially developed for growing in pots and potting mix. Terra Flores stimulates the fruition and provides every plant with its characteristic flavour.",
		productMiniDescriptionAL:
			"Canna Terra Flores është një lëndë ushqyese e plotë profesionale për fazën e lulëzimit të bimëve. Është zhvilluar posaçërisht për rritje në vazo dhe përzierje vazo. Terra Flores stimulon frytëzimin dhe i siguron çdo bime shijen e saj karakteristike.",
		productImage: [
			"/Images/terraFlores/terraFlores1L.png",
			"/Images/terraFlores/terraFlores5L.png",
			"/Images/terraFlores/terraFlores10L.png",
		],
		productBestseller: true,
		productSizes: [1, 5, 10],
		productPrices: [18, 70, 100],
	},
	{
		productId: 3,
		productName: "Canna Coco A & B",
		productMiniDescriptionEN:
			"Canna Coco A & B is a complete professional nutrient for growing plants in coco. It contains all the essential elements for optimal growing and flowering.",
		productMiniDescriptionAL:
			"Canna Coco A & B është një lëndë ushqyese e plotë profesionale për rritjen e bimëve me kokos. Ai përmban të gjithë elementët thelbësorë për rritjen dhe lulëzimin optimal.",
		productImage: ["/Images/cocoAB/coco1L.png", "/Images/cocoAB/coco5L.jpg", "/Images/cocoAB/coco10L.jpg"],
		productBestseller: false,
		productSizes: [1, 5, 10],
		productPrices: [20, 80, 110],
	},
	{
		productId: 4,
		productName: "Canna Rhizotonic",
		productMiniDescriptionEN:
			"Canna Rhizotonic is a powerful root stimulator. It is ideal for plants that already have roots or root initials. White and powerful roots form quicker if you add Canna Rhizotonic to your tap water.",
		productMiniDescriptionAL:
			"Canna Rhizotonic është një stimulues i fuqishëm i rrënjëve. Është ideale për bimët që tashmë kanë rrënjë ose rrënjë fillimtare. Rrënjët e bardha dhe të fuqishme formohen më shpejt nëse shtoni CANNA RHIZOTONIC në ujin e rubinetit.",
		productImage: [
			"/Images/rhizotonic/rhizotonic1L.png",
			"/Images/rhizotonic/rhizotonic5L.png",
			"/Images/rhizotonic/rhizotonic10L.png",
		],
		productBestseller: false,
		productSizes: [1, 5, 10],
		productPrices: [50, 180, 340],
	},
	{
		productId: 5,
		productName: "Cannazym",
		productMiniDescriptionEN:
			"Cannazym is a high-quality enzyme product that helps breaking down dead root material and turning it into nutrients for the plant. It also encourages beneficial micro-organisms, helps plants take up nutrients and increases the resistance against diseases.",
		productMiniDescriptionAL:
			"Cannazym është një produkt enzimë me cilësi të lartë që ndihmon në zbërthimin e materialit rrënjësor të vdekur dhe shndërrimin e tij në lëndë ushqyese për bimën. Ai gjithashtu inkurajon mikroorganizmat e dobishëm, ndihmon bimët të marrin lëndët ushqyese dhe rrit rezistencën ndaj sëmundjeve.",
		productImage: ["/Images/cannazym/cannazym1L.png", "/Images/cannazym/cannazym5L.png", "/Images/cannazym/cannazym5L.png"],
		productBestseller: true,
		productSizes: [1, 5, 10],
		productPrices: [25, 110, 200],
	},
	{
		productId: 6,
		productName: "Canna PK 13/14",
		productMiniDescriptionEN: "Canna PK 13/14 is a mixture of top quality nutritional minerals that stimulate flowering.",
		productMiniDescriptionAL:
			"Canna PK 13/14 është një përzierje e mineraleve ushqyese të cilësisë së lartë që stimulojnë lulëzimin.",
		productImage: ["/Images/pk/pk1L.png", "/Images/pk/pk5L.png"],
		productBestseller: false,
		productSizes: [1, 5],
		productPrices: [20, 80],
	},
	{
		productId: 7,
		productName: "Canna Boost",
		productMiniDescriptionEN:
			"Canna Boost increases the uptake of nutrients by boosting the metabolism of your plants. The focus on metabolism makes Canna Boost much more efficient than all the other boosters out there.",
		productMiniDescriptionAL:
			"Canna Boost rrit marrjen e lëndëve ushqyese duke nxitur metabolizmin e bimëve tuaja. Fokusi në metabolizëm e bën Canna Boost shumë më efikas se të gjithë përforcuesit e tjerë.",
		productImage: ["/Images/boost/boost1L.png", "/Images/boost/boost5L.png", "/Images/boost/boost10L.png"],
		productBestseller: true,
		productSizes: [1, 5, 10],
		productPrices: [80, 350, 640],
	},
	{
		productId: 8,
		productName: "Canna Cure",
		productMiniDescriptionEN:
			"Canna Cure is an unique leaf nutrient that prevents and controls plant pests and mildew. It's free of toxins and environmentally friendly. Canna Cure ensures healthier plants, bigger flowers and increased yields.",
		productMiniDescriptionAL:
			"Canna Cure është një lëndë ushqyese unike e gjetheve që parandalon dhe kontrollon dëmtuesit e bimëve dhe mykun. Është pa toksina dhe miqësore ndaj mjedisit. Canna Cure siguron bimë më të shëndetshme, lule më të mëdha dhe rritje të rendimentit.",
		productImage: ["/Images/cure/cure1L.png"],
		productBestseller: false,
		productSizes: [1],
		productPrices: [25],
	},
	{
		productId: 9,
		productName: "Canna Flush",
		productMiniDescriptionEN:
			"Canna Flush is an additive that effectively cleans substrates and plants from any excess nutrients. This is necessary, because excess nutrients can have a bad influence on your next growth cycle.",
		productMiniDescriptionAL:
			"Canna Flush është një aditiv që pastron në mënyrë efektive substratet dhe bimët nga çdo lëndë ushqyese e tepërt. Kjo është e nevojshme, sepse lëndët ushqyese të tepërta mund të kenë një ndikim të keq në ciklin tuaj të ardhshëm të rritjes.",
		productImage: ["/Images/flush/flush1L.jpeg"],
		productBestseller: false,
		productSizes: [1],
		productPrices: [15],
	},
	{
		productId: 10,
		productName: "Canna CalMag",
		productMiniDescriptionEN:
			"To ensure an optimal mineral balance regardless of your quality of water, Canna CalMag provides a highly concentrated solution of calcium and magnesium, at the ideal ratio, for exceptional plant growth.",
		productMiniDescriptionAL:
			"Për të siguruar një ekuilibër optimal të mineraleve, pavarësisht nga cilësia e ujit, Canna CalMag ofron një solucion të koncentruar shumë me kalcium dhe magnez, në raportin ideal, për rritje të jashtëzakonshme të bimëve.",
		productImage: ["/Images/calMag/calMag1L.png", "/Images/calMag/calMag5L.png"],
		productBestseller: false,
		productSizes: [1, 5],
		productPrices: [20, 55],
	},
	{
		productId: 11,
		productName: "Canna Terra Professional",
		productMiniDescriptionEN:
			"Canna Terra Professional is a nitrogen-rich potting mix for plant cultivation. It contains a blend of upgraded black peat, granulated peat moss and perlite.",
		productMiniDescriptionAL:
			"Canna Terra Professional është një përzierje vazosh e pasur me azot për kultivimin e bimëve. Ai përmban një përzierje torfe të zezë të përmirësuar, myshk torfe të grimcuar dhe perlit.",
		productImage: ["/Images/terraProf/terraProf50L.png"],
		productBestseller: false,
		productSizes: [50],
		productPrices: [17],
	},
	{
		productId: 12,
		productName: "Canna Terra Professional Plus",
		productMiniDescriptionEN:
			"Canna Terra Professional Plus is the purest potting mix possible for plant cultivation. It also gives the best effects with Canna Terra nutrients. The formulation is specifically developed for indoor, grow-room situations.",
		productMiniDescriptionAL:
			"Canna Terra Professional Plus është përzierja më e pastër e mundshme e vazove për kultivimin e bimëve. Gjithashtu jep efektet më të mira me lëndët ushqyese Canna Terra. Është zhvilluar posaçërisht për ambiente të brendshme, të dhomave të rritjes.",
		productImage: ["/Images/terraProfPlus/terraProfPlus50L.png"],
		productBestseller: false,
		productSizes: [50],
		productPrices: [27],
	},
	{
		productId: 13,
		productName: "Canna Coco Professional Plus",
		productMiniDescriptionEN:
			"Canna Coco Professional Plus is a coco-based growing medium that offers the gardener and his plants many advantages.",
		productMiniDescriptionAL:
			"Canna Coco Professional Plus është një dhe kultivues me bazë kokosi që i ofron kopshtarit dhe bimëve të tij shumë përparësi.",
		productImage: ["/Images/cocoProfPlus/cocoProfPlus50L.png"],
		productBestseller: false,
		productSizes: [50],
		productPrices: [22],
	},
	{
		productId: 14,
		productName: "Canna Coco Natural",
		productMiniDescriptionEN:
			"Canna Coco Natural is a natural coco-based plant medium that offers the gardener and his plants advantages in comparison with other substrates. It's an organic product that is free of diseases.",
		productMiniDescriptionAL:
			"Canna Coco Natural është një medium bimor natyral me bazë kokosi që i ofron kopshtarit dhe bimëve të tij avantazhe në krahasim me substratet e tjera. Është një produkt organik që nuk ka sëmundje.",
		productImage: ["/Images/cocoNatural/cocoNatural50L.png"],
		productBestseller: false,
		productSizes: [50],
		productPrices: [19],
	},
];
