var substrates = {
    "items": [
      {
        "name": "skin epidermis",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": ["outer skin layer"],
        "why": "The outermost layer of vertebrate skin, serving as a barrier and hosting a microbiome."
      },
      {
        "name": "tooth enamel",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The hard, mineralized outer surface of teeth, which can be a substrate for plaque biofilms."
      },
      {
        "name": "intestinal villi",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": ["gut lining"],
        "why": "Microscopic, finger-like projections in the small intestine that increase surface area for nutrient absorption."
      },
      {
        "name": "leaf cuticle",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "Waxy, protective outer layer of a plant leaf that prevents water loss and resists pathogens."
      },
      {
        "name": "plant root surface",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": ["rhizoplane"],
        "why": "The immediate surface of a plant root, a critical interface for nutrient uptake and microbial interaction."
      },
      {
        "name": "fungal mycelium",
        "category": "Biological Tissues & Surfaces",
        "type": "environment",
        "aliases": ["hyphal network"],
        "why": "The vegetative part of a fungus, consisting of a network of hyphae that grow through soil or other matter."
      },
      {
        "name": "bone marrow",
        "category": "Biological Tissues & Surfaces",
        "type": "medium",
        "aliases": [],
        "why": "The flexible tissue inside bones, serving as the medium for hematopoiesis (blood cell production)."
      },
      {
        "name": "corneal epithelium",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": ["eye surface"],
        "why": "The transparent outer layer of the eye, a substrate for the tear film."
      },
      {
        "name": "nacre",
        "category": "Biological Tissues & Surfaces",
        "type": "material",
        "aliases": ["mother of pearl"],
        "why": "The strong, iridescent inner shell layer of mollusks, upon which pearls can form."
      },
      {
        "name": "chitin exoskeleton",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": ["arthropod cuticle"],
        "why": "The rigid external skeleton of arthropods, providing protection and a surface for sensory organs."
      },
      {
        "name": "fish scales",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "Dermal plates covering fish skin, providing protection and a substrate for a mucus layer."
      },
      {
        "name": "synovial membrane",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The soft tissue lining the spaces of diarthrodial joints, which secretes lubricating fluid."
      },
      {
        "name": "extracellular matrix",
        "category": "Biological Tissues & Surfaces",
        "type": "medium",
        "aliases": ["ECM"],
        "why": "A three-dimensional network of macromolecules that provides structural and biochemical support to surrounding cells."
      },
      {
        "name": "blood plasma",
        "category": "Biological Tissues & Surfaces",
        "type": "medium",
        "aliases": [],
        "why": "The liquid matrix of blood, in which blood cells, proteins, and other components are suspended."
      },
      {
        "name": "tree bark",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The outermost layers of stems and roots of woody plants, hosting lichens, mosses, and insects."
      },
      {
        "name": "tendon",
        "category": "Biological Tissues & Surfaces",
        "type": "part",
        "aliases": [],
        "why": "Fibrous connective tissue that attaches muscle to bone, acting as a substrate for cellular attachment and repair."
      },
      {
        "name": "egg shell",
        "category": "Biological Tissues & Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The hard, porous outer layer of an egg, protecting the embryo and allowing gas exchange."
      },
      {
        "name": "placenta",
        "category": "Biological Tissues & Surfaces",
        "type": "part",
        "aliases": [],
        "why": "An organ that develops in the uterus during pregnancy, providing oxygen and nutrients to the fetus."
      },
      {
        "name": "neural scaffold",
        "category": "Biological Tissues & Surfaces",
        "type": "environment",
        "aliases": [],
        "why": "The structural network of glial cells and extracellular matrix that supports and guides neurons in the brain."
      },
      {
        "name": "stromatolite",
        "category": "Biological Tissues & Surfaces",
        "type": "environment",
        "aliases": [],
        "why": "Layered sedimentary formations created by photosynthetic cyanobacteria, a living fossil substrate."
      },
      {
        "name": "coral reef",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "An underwater ecosystem built by coral polyps, providing a complex habitat for a vast array of marine life."
      },
      {
        "name": "nurse log",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "A fallen, decaying tree that provides a nutrient-rich, moist substrate for seedlings, fungi, and insects."
      },
      {
        "name": "gut microbiome",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": ["intestinal flora"],
        "why": "The community of microorganisms living in the digestive tracts of animals, a dynamic living substrate."
      },
      {
        "name": "whale fall",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "The carcass of a whale on the seafloor, which becomes the foundation of a complex, localized deep-sea ecosystem."
      },
      {
        "name": "forest floor",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": ["duff layer"],
        "why": "The surface layer of a forest, composed of leaf litter and organic matter, supporting a diverse community of decomposers."
      },
      {
        "name": "kelp forest",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "Underwater areas with a high density of kelp, which provide a vertical, three-dimensional habitat."
      },
      {
        "name": "human body",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "A host organism for countless commensal, symbiotic, and pathogenic microorganisms."
      },
      {
        "name": "mangrove prop roots",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "The dense tangle of mangrove roots that provides a hard substrate for oysters, sponges, and other marine invertebrates."
      },
      {
        "name": "anthill",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": ["formicary"],
        "why": "A colony of ants and their nest structure, which serves as a host environment for many other species (myrmecophiles)."
      },
      {
        "name": "sphagnum bog",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": ["peat bog"],
        "why": "A wetland dominated by sphagnum moss, creating an acidic, low-nutrient environment for specialized plants."
      },
      {
        "name": "epiphyte-laden branch",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "A tree branch that hosts non-parasitic plants (epiphytes) like orchids and bromeliads, forming a mini-ecosystem."
      },
      {
        "name": "hydrothermal vent",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": ["black smoker"],
        "why": "A fissure on the seafloor that gushes geothermally heated water, supporting unique chemosynthetic biological communities."
      },
      {
        "name": "vernal pool",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "A temporary pool of water that provides a seasonal habitat for distinctive plants and animals."
      },
      {
        "name": "carrion",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": ["carcass"],
        "why": "The decaying flesh of an animal, which serves as a temporary, nutrient-rich substrate for a succession of organisms."
      },
      {
        "name": "gall",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": ["plant gall"],
        "why": "An abnormal plant growth induced by another organism (insect, fungus), which then serves as a protective home and food source."
      },
      {
        "name": "termite mound",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "A large nest structure built by termites, which modifies the local soil and hosts other organisms."
      },
      {
        "name": "pitcher plant",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "A carnivorous plant whose leaves form a pitfall trap, hosting a specialized aquatic community of inquilines."
      },
      {
        "name": "soil crust",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": ["biocrust"],
        "why": "A community of living organisms on the soil surface in arid lands, which stabilizes soil and retains water."
      },
      {
        "name": "rhizosphere",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "The narrow region of soil that is directly influenced by root secretions and associated soil microorganisms."
      },
      {
        "name": "beaver dam",
        "category": "Host Organisms & Ecosystems",
        "type": "environment",
        "aliases": [],
        "why": "A structure built by beavers that impounds water, creating a wetland habitat that supports a diverse community."
      },
      {
        "name": "loam soil",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "A fertile soil of clay, sand, and silt, serving as a medium for plant growth."
      },
      {
        "name": "river sediment",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": ["alluvium"],
        "why": "Material deposited by a river, which forms deltas and floodplains and hosts benthic organisms."
      },
      {
        "name": "glacial ice",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "A mass of ice that serves as a physical substrate and archives atmospheric history through trapped gases."
      },
      {
        "name": "sandstone",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "Porous sedimentary rock that holds water and oil, and weathers to form unique geological features."
      },
      {
        "name": "granite",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "Hard, igneous rock used in construction; its surface is colonized by lichens over geological time."
      },
      {
        "name": "shale",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "A fine-grained sedimentary rock that can contain fossil fuels and is a substrate for fracking."
      },
      {
        "name": "limestone",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "A carbonate sedimentary rock that forms karst landscapes and is the parent material for cave formations."
      },
      {
        "name": "pumice",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "A porous, lightweight volcanic rock used in horticulture and as an abrasive."
      },
      {
        "name": "clay soil",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": ["heavy soil"],
        "why": "A dense soil with fine particles that holds water and can be molded, used for pottery and construction."
      },
      {
        "name": "desert pavement",
        "category": "Geological & Earth Materials",
        "type": "surface",
        "aliases": [],
        "why": "A desert surface covered with closely packed, interlocking angular or rounded rock fragments."
      },
      {
        "name": "volcanic ash",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": ["tephra"],
        "why": "Fine particles of pulverized rock and glass from a volcanic eruption, which forms fertile soil."
      },
      {
        "name": "permafrost",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "Ground that remains completely frozen for at least two years straight, a substrate for tundra vegetation."
      },
      {
        "name": "beach sand",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "Loose granular material on a shoreline, forming a dynamic habitat for interstitial organisms."
      },
      {
        "name": "chalk",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "A soft, white, porous sedimentary rock, a form of limestone composed of calcite."
      },
      {
        "name": "travertine",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "A form of terrestrial limestone deposited around mineral springs, used as a building material."
      },
      {
        "name": "marble",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "A metamorphic rock composed of recrystallized carbonate minerals, used for sculpture and architecture."
      },
      {
        "name": "obsidian",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "Volcanic glass formed from rapidly cooled lava, which can be fractured to create sharp-edged tools."
      },
      {
        "name": "seabed ooze",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": ["pelagic sediment"],
        "why": "Fine-grained sediment on the deep ocean floor, composed of the skeletal remains of microorganisms."
      },
      {
        "name": "laterite soil",
        "category": "Geological & Earth Materials",
        "type": "material",
        "aliases": [],
        "why": "A soil and rock type rich in iron and aluminum, formed in hot and wet tropical areas."
      },
      {
        "name": "geode interior",
        "category": "Geological & Earth Materials",
        "type": "surface",
        "aliases": [],
        "why": "The inner surface of a hollow rock lined with crystals, a substrate for mineral growth."
      },
      {
        "name": "asphalt pavement",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": ["blacktop", "tarmac"],
        "why": "A durable, flexible surface for roads, runways, and parking lots that is subject to traffic wear."
      },
      {
        "name": "concrete slab",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": ["cement floor"],
        "why": "A common structural element for floors and foundations, serving as a base for finished flooring."
      },
      {
        "name": "brick wall",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": ["brickwork"],
        "why": "A masonry construction that provides structure and a porous surface for weathering and biological growth."
      },
      {
        "name": "painted drywall",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": ["gypsum board"],
        "why": "A standard interior wall surface, serving as the base for decorative paints and coatings."
      },
      {
        "name": "terracotta roof tile",
        "category": "Architectural & Civil Surfaces",
        "type": "part",
        "aliases": [],
        "why": "A traditional, fired clay roofing element that hosts moss and lichen over time."
      },
      {
        "name": "glass window pane",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A transparent surface in a building envelope, which collects dust, rain marks, and biofilms."
      },
      {
        "name": "steel bridge girder",
        "category": "Architectural & Civil Surfaces",
        "type": "part",
        "aliases": [],
        "why": "A primary structural member of a bridge, a substrate for corrosion, paint systems, and inspection."
      },
      {
        "name": "stucco facade",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A textured exterior wall coating that provides weather resistance and a decorative finish."
      },
      {
        "name": "wooden deck",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "An outdoor flooring surface made of wood planks, requiring stains or sealants to resist weathering."
      },
      {
        "name": "terrazzo floor",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A composite flooring material of chips set in cement or epoxy, which is ground and polished."
      },
      {
        "name": "wallpaper",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A decorative paper or vinyl material applied to a wall, acting as a finished interior surface."
      },
      {
        "name": "shotcrete",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": ["sprayed concrete"],
        "why": "Concrete pneumatically projected at high velocity, used to stabilize tunnels and slopes."
      },
      {
        "name": "dam spillway",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The surface over which floodwater flows, designed to resist high-velocity erosion and cavitation."
      },
      {
        "name": "caulked joint",
        "category": "Architectural & Civil Surfaces",
        "type": "material",
        "aliases": ["sealant bead"],
        "why": "A flexible sealing compound in a gap, which can be a substrate for mold growth."
      },
      {
        "name": "linoleum floor",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A resilient flooring material made from natural materials, requiring a polish layer."
      },
      {
        "name": "thatched roof",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A traditional roof made of dry vegetation like straw or reeds, providing a habitat for insects and birds."
      },
      {
        "name": "gabion wall",
        "category": "Architectural & Civil Surfaces",
        "type": "environment",
        "aliases": [],
        "why": "A retaining wall made of wire baskets filled with rocks, which allows drainage and can be vegetated."
      },
      {
        "name": "plaster ceiling",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "An overhead interior surface, often with decorative moldings, that can collect dust and show water damage."
      },
      {
        "name": "subway tile",
        "category": "Architectural & Civil Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "Glazed ceramic tiles used on walls, with grout lines that serve as a substrate for grime and mold."
      },
      {
        "name": "anodized aluminum window frame",
        "category": "Architectural & Civil Surfaces",
        "type": "part",
        "aliases": [],
        "why": "An aluminum component with a durable oxide layer, providing a corrosion-resistant architectural surface."
      },
      {
        "name": "casting mold",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": ["foundry mold"],
        "why": "A hollow cavity used to give shape to molten material like metal or plastic."
      },
      {
        "name": "cutting tool edge",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": ["lathe bit", "end mill"],
        "why": "The hardened, sharpened surface of a tool that removes material through shearing or abrasion."
      },
      {
        "name": "conveyor belt",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": [],
        "why": "A moving belt that transports goods and materials, acting as a temporary support surface."
      },
      {
        "name": "welding table",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": ["fabrication table"],
        "why": "A heavy-duty, flat, conductive surface used to hold and position workpieces for welding."
      },
      {
        "name": "injection mold cavity",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": [],
        "why": "The precision-machined internal surface of a mold that defines the shape of a plastic part."
      },
      {
        "name": "3D printer build plate",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": ["print bed"],
        "why": "The flat surface on which an object is additively manufactured, requiring good adhesion."
      },
      {
        "name": "lithographic printing plate",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": [],
        "why": "A surface treated to selectively accept ink, used to transfer an image to paper or another material."
      },
      {
        "name": "extrusion die",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "part",
        "aliases": [],
        "why": "A tool with a fixed cross-sectional profile through which material is forced to create a continuous shape."
      },
      {
        "name": "sandpaper",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": ["abrasive paper"],
        "why": "A surface coated with abrasive particles, used to smooth or finish a workpiece."
      },
      {
        "name": "anvil",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": [],
        "why": "A large block of metal with a hardened surface on which another object is struck or worked."
      },
      {
        "name": "industrial catalyst bed",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "medium",
        "aliases": [],
        "why": "A solid material, often porous pellets, that increases the rate of a chemical reaction in a reactor."
      },
      {
        "name": "galvanizing tank interior",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": [],
        "why": "The inner surface of a vat holding molten zinc, which is coated onto steel or iron parts."
      },
      {
        "name": "assembly jig",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "part",
        "aliases": ["fixture"],
        "why": "A custom device that holds work and guides tools during manufacturing to ensure interchangeability."
      },
      {
        "name": "laser cutter bed",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": ["honeycomb bed"],
        "why": "A support surface, often a grid, that holds material being cut by a laser and allows debris to fall away."
      },
      {
        "name": "rolling mill roller",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": [],
        "why": "A heavy, rotating cylinder used to reduce the thickness of or impart a texture to metal sheets."
      },
      {
        "name": "screen printing mesh",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "medium",
        "aliases": ["silk screen"],
        "why": "A woven mesh stretched over a frame, used to support an ink-blocking stencil."
      },
      {
        "name": "electroplating cathode",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": [],
        "why": "The workpiece in an electroplating bath that serves as the substrate for a new metallic coating."
      },
      {
        "name": "sintering furnace hearth",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": [],
        "why": "The surface inside a high-temperature furnace that supports powdered material being fused together."
      },
      {
        "name": "machine tool ways",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "surface",
        "aliases": ["slideways"],
        "why": "The guiding surfaces on a machine tool (like a lathe or mill) on which components slide."
      },
      {
        "name": "drawing die",
        "category": "Manufacturing & Fabrication Interfaces",
        "type": "part",
        "aliases": [],
        "why": "A tool used to reduce the cross-section of a wire or rod by pulling the material through it."
      },
      {
        "name": "petri dish",
        "category": "Laboratory & Scientific Apparatus",
        "type": "surface",
        "aliases": ["culture plate"],
        "why": "A shallow cylindrical container with a lid, used to culture cells or microorganisms on a medium."
      },
      {
        "name": "microscope slide",
        "category": "Laboratory & Scientific Apparatus",
        "type": "surface",
        "aliases": [],
        "why": "A thin flat piece of glass used to hold objects for examination under a microscope."
      },
      {
        "name": "agarose gel",
        "category": "Laboratory & Scientific Apparatus",
        "type": "medium",
        "aliases": [],
        "why": "A polysaccharide polymer matrix used in molecular biology to separate macromolecules like DNA or proteins."
      },
      {
        "name": "fume hood work surface",
        "category": "Laboratory & Scientific Apparatus",
        "type": "surface",
        "aliases": [],
        "why": "A chemically resistant surface inside a ventilated enclosure for safely handling hazardous substances."
      },
      {
        "name": "bioreactor interior",
        "category": "Laboratory & Scientific Apparatus",
        "type": "surface",
        "aliases": [],
        "why": "The inner surface of a vessel used for growing organisms or cells for biotechnological processes."
      },
      {
        "name": "microtiter plate",
        "category": "Laboratory & Scientific Apparatus",
        "type": "part",
        "aliases": ["microplate", "96-well plate"],
        "why": "A flat plate with multiple 'wells' used as small test tubes for high-throughput screening."
      },
      {
        "name": "lab benchtop",
        "category": "Laboratory & Scientific Apparatus",
        "type": "surface",
        "aliases": [],
        "why": "The primary work surface in a lab, typically made of non-porous and chemically resistant materials."
      },
      {
        "name": "chromatography column packing",
        "category": "Laboratory & Scientific Apparatus",
        "type": "medium",
        "aliases": ["stationary phase"],
        "why": "The material filling a column that separates chemical components of a mixture."
      },
      {
        "name": "sample stub for SEM",
        "category": "Laboratory & Scientific Apparatus",
        "type": "part",
        "aliases": ["specimen mount"],
        "why": "A small metal mount onto which a sample is fixed for observation in a scanning electron microscope."
      },
      {
        "name": "quartz cuvette",
        "category": "Laboratory & Scientific Apparatus",
        "type": "part",
        "aliases": [],
        "why": "A small, transparent rectangular container for holding liquid samples in a spectrophotometer."
      },
      {
        "name": "blotting membrane",
        "category": "Laboratory & Scientific Apparatus",
        "type": "medium",
        "aliases": ["nitrocellulose membrane", "PVDF membrane"],
        "why": "A microporous membrane used in molecular biology to immobilize proteins or nucleic acids."
      },
      {
        "name": "test tube",
        "category": "Laboratory & Scientific Apparatus",
        "type": "part",
        "aliases": [],
        "why": "A common piece of glassware consisting of a finger-like length of glass open at the top."
      },
      {
        "name": "TLC plate",
        "category": "Laboratory & Scientific Apparatus",
        "type": "surface",
        "aliases": ["thin-layer chromatography plate"],
        "why": "A sheet of glass, plastic, or aluminum foil coated with a thin layer of adsorbent material (e.g., silica gel)."
      },
      {
        "name": "glovebox interior",
        "category": "Laboratory & Scientific Apparatus",
        "type": "environment",
        "aliases": [],
        "why": "A sealed container with attached gloves for manipulating objects in a controlled atmosphere."
      },
      {
        "name": "hemocytometer",
        "category": "Laboratory & Scientific Apparatus",
        "type": "part",
        "aliases": ["counting chamber"],
        "why": "A microscope slide with a grid of fine lines, used for counting cells in a fluid sample."
      },
      {
        "name": "Buchner funnel",
        "category": "Laboratory & Scientific Apparatus",
        "type": "part",
        "aliases": [],
        "why": "A porcelain or glass funnel with a flat, perforated plate, used for vacuum filtration with filter paper."
      },
      {
        "name": "culture flask",
        "category": "Laboratory & Scientific Apparatus",
        "type": "part",
        "aliases": [],
        "why": "A vessel designed for growing cell cultures, often with a surface treated to promote cell adhesion."
      },
      {
        "name": "autoclave chamber",
        "category": "Laboratory & Scientific Apparatus",
        "type": "environment",
        "aliases": [],
        "why": "The internal environment of a pressure chamber used for steam sterilization of equipment and supplies."
      },
      {
        "name": "centrifuge tube",
        "category": "Laboratory & Scientific Apparatus",
        "type": "part",
        "aliases": [],
        "why": "A container designed to hold samples during centrifugation, where solids pellet at the bottom."
      },
      {
        "name": "desiccator plate",
        "category": "Laboratory & Scientific Apparatus",
        "type": "surface",
        "aliases": [],
        "why": "A perforated ceramic or plastic plate that holds samples above a desiccant in a sealed container."
      },
      {
        "name": "silicon wafer",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": ["Si wafer"],
        "why": "The fundamental base material for fabricating integrated circuits and other microdevices."
      },
      {
        "name": "printed circuit board",
        "category": "Electronic & Semiconductor Substrates",
        "type": "part",
        "aliases": ["PCB"],
        "why": "A board made of non-conductive material that supports and connects electronic components via conductive tracks."
      },
      {
        "name": "sapphire substrate",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": [],
        "why": "A highly stable, transparent crystalline substrate used for growing specific semiconductors, like GaN for LEDs."
      },
      {
        "name": "gallium arsenide wafer",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": ["GaAs wafer"],
        "why": "A compound semiconductor substrate used for high-frequency electronics and laser diodes."
      },
      {
        "name": "breadboard",
        "category": "Electronic & Semiconductor Substrates",
        "type": "part",
        "aliases": ["protoboard"],
        "why": "A reusable, solderless base for prototyping electronic circuits."
      },
      {
        "name": "flexible circuit",
        "category": "Electronic & Semiconductor Substrates",
        "type": "part",
        "aliases": ["flex circuit"],
        "why": "An electronic circuit built on a flexible plastic substrate like polyimide."
      },
      {
        "name": "ceramic substrate",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": ["alumina substrate"],
        "why": "A substrate made of materials like alumina or aluminum nitride, used for high-power or high-frequency circuits."
      },
      {
        "name": "silicon-on-insulator wafer",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": ["SOI wafer"],
        "why": "A layered wafer with silicon, an insulator, and a silicon handle, used to reduce parasitic capacitance in chips."
      },
      {
        "name": "glass substrate for displays",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": [],
        "why": "A highly uniform glass sheet used as the base for thin-film transistors (TFTs) in LCD and OLED screens."
      },
      {
        "name": "copper clad laminate",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": ["CCL"],
        "why": "The core material of a PCB, consisting of an epoxy-glass laminate with a thin layer of copper."
      },
      {
        "name": "indium tin oxide coated glass",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": ["ITO glass"],
        "why": "A glass sheet coated with a transparent, conductive layer, used as an electrode in touch screens and solar cells."
      },
      {
        "name": "veroboard",
        "category": "Electronic & Semiconductor Substrates",
        "type": "part",
        "aliases": ["stripboard"],
        "why": "A prototyping board with a grid of holes and parallel copper tracks for soldering components."
      },
      {
        "name": "interposer",
        "category": "Electronic & Semiconductor Substrates",
        "type": "part",
        "aliases": [],
        "why": "An electrical interface that routes connections between one socket or connection to another, often used in chip stacking."
      },
        {
        "name": "dielectric film",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": [],
        "why": "A thin layer of insulating material deposited onto a semiconductor wafer to separate conductive layers."
      },
        {
        "name": "leadframe",
        "category": "Electronic & Semiconductor Substrates",
        "type": "part",
        "aliases": [],
        "why": "The metal frame inside a chip package that carries signals from the die to the outside world."
      },
        {
        "name": "BGA substrate",
        "category": "Electronic & Semiconductor Substrates",
        "type": "part",
        "aliases": ["ball grid array substrate"],
        "why": "A small, high-density PCB that acts as an intermediate between a silicon die and the main motherboard."
      },
        {
        "name": "photoresist layer",
        "category": "Electronic & Semiconductor Substrates",
        "type": "medium",
        "aliases": [],
        "why": "A light-sensitive material coated on a wafer, which serves as a temporary stencil during photolithography."
      },
        {
        "name": "silicon carbide wafer",
        "category": "Electronic & Semiconductor Substrates",
        "type": "material",
        "aliases": ["SiC wafer"],
        "why": "A wide-bandgap semiconductor substrate for high-power, high-temperature electronic devices."
      },
        {
        "name": "wire wrap board",
        "category": "Electronic & Semiconductor Substrates",
        "type": "part",
        "aliases": [],
        "why": "An early form of circuit board where connections are made by wrapping wires around posts."
      },
        {
        "name": "metal core PCB",
        "category": "Electronic & Semiconductor Substrates",
        "type": "part",
        "aliases": ["MCPCB"],
        "why": "A circuit board with a metal base (usually aluminum) to dissipate heat, used for high-power LEDs."
      },
      {
        "name": "lens surface",
        "category": "Optical & Photonic Components",
        "type": "surface",
        "aliases": [],
        "why": "A curved, transparent surface that refracts light, onto which anti-reflective coatings are applied."
      },
      {
        "name": "mirror surface",
        "category": "Optical & Photonic Components",
        "type": "surface",
        "aliases": [],
        "why": "A reflective surface, typically a polished metal or a dielectric coating on glass, that reflects light."
      },
      {
        "name": "diffraction grating",
        "category": "Optical & Photonic Components",
        "type": "surface",
        "aliases": [],
        "why": "A surface with a periodic structure that splits and diffracts light into its constituent wavelengths."
      },
      {
        "name": "image sensor",
        "category": "Optical & Photonic Components",
        "type": "surface",
        "aliases": ["CCD chip", "CMOS sensor"],
        "why": "A grid of photosites that convert photons into electrical signals, forming the basis of a digital camera."
      },
      {
        "name": "optical fiber core",
        "category": "Optical & Photonic Components",
        "type": "medium",
        "aliases": [],
        "why": "The central part of a fiber optic cable, through which light pulses are transmitted."
      },
      {
        "name": "polycarbonate visor",
        "category": "Optical & Photonic Components",
        "type": "part",
        "aliases": ["PC face shield", "Lexan visor"],
        "why": "A transparent, impact-resistant shield that can be a substrate for anti-fog or anti-scratch coatings."
      },
      {
        "name": "eyeglass lens",
        "category": "Optical & Photonic Components",
        "type": "part",
        "aliases": ["spectacle lens"],
        "why": "A corrective lens that is a substrate for various coatings like UV protection, anti-glare, and photochromic layers."
      },
      {
        "name": "holographic plate",
        "category": "Optical & Photonic Components",
        "type": "medium",
        "aliases": [],
        "why": "A photosensitive medium used to record the interference pattern that forms a hologram."
      },
      {
        "name": "dichroic filter",
        "category": "Optical & Photonic Components",
        "type": "part",
        "aliases": [],
        "why": "A glass substrate with precisely layered optical coatings that selectively pass or reflect light of specific wavelengths."
      },
      {
        "name": "fresnel lens",
        "category": "Optical & Photonic Components",
        "type": "part",
        "aliases": [],
        "why": "A flat lens with concentric grooves that mimics the curvature of a conventional lens with less material."
      },
      {
        "name": "solar cell surface",
        "category": "Optical & Photonic Components",
        "type": "surface",
        "aliases": ["photovoltaic cell"],
        "why": "The semiconductor surface that absorbs photons and generates an electric current."
      },
      {
        "name": "retroreflector",
        "category": "Optical & Photonic Components",
        "type": "surface",
        "aliases": ["corner cube reflector"],
        "why": "A surface structured with many micro-prisms or beads that reflects light back to its source."
      },
      {
        "name": "LCD panel",
        "category": "Optical & Photonic Components",
        "type": "environment",
        "aliases": ["liquid crystal display"],
        "why": "A complex layered structure of glass, polarizers, and liquid crystals that modulates light to create images."
      },
      {
        "name": "integrating sphere wall",
        "category": "Optical & Photonic Components",
        "type": "surface",
        "aliases": [],
        "why": "The highly-diffuse, reflective inner surface of a hollow sphere used for measuring optical radiation."
      },
      {
        "name": "beam splitter",
        "category": "Optical & Photonic Components",
        "type": "part",
        "aliases": [],
        "why": "An optical component with a partially reflective coating that splits a beam of light in two."
      },
      {
        "name": "prism",
        "category": "Optical & Photonic Components",
        "type": "part",
        "aliases": [],
        "why": "A transparent optical element with flat, polished surfaces that refract and disperse light."
      },
      {
        "name": "optical flat",
        "category": "Optical & Photonic Components",
        "type": "part",
        "aliases": [],
        "why": "A piece of glass ground and polished to be extremely flat, used as a reference surface."
      },
      {
        "name": "phosphor screen",
        "category": "Optical & Photonic Components",
        "type": "surface",
        "aliases": [],
        "why": "A surface coated with a phosphorescent material that glows when struck by electrons or other radiation (e.g., in a CRT)."
      },
      {
        "name": "laser crystal",
        "category": "Optical & Photonic Components",
        "type": "medium",
        "aliases": ["gain medium"],
        "why": "A crystal (like Nd:YAG) that serves as the medium for light amplification in a solid-state laser."
      },
      {
        "name": "moth eye film",
        "category": "Optical & Photonic Components",
        "type": "surface",
        "aliases": ["anti-reflection film"],
        "why": "A nanostructured surface that mimics a moth's eye to reduce reflection and glare."
      },
      {
        "name": "membrane filter",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A thin, microporous polymer sheet used for sterile filtration or particle capture."
      },
      {
        "name": "activated carbon",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": ["activated charcoal"],
        "why": "A form of carbon processed to have small, low-volume pores that increase surface area for adsorption."
      },
      {
        "name": "HEPA filter",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A high-efficiency particulate air filter made of a mat of randomly arranged fibers."
      },
      {
        "name": "ceramic water filter",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A porous ceramic cartridge that filters out bacteria, protozoa, and sediment from water."
      },
      {
        "name": "zeolite",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A microporous aluminosilicate mineral used as a molecular sieve and catalyst."
      },
      {
        "name": "geotextile fabric",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A permeable fabric used in civil engineering to separate, filter, and drain soil and aggregate."
      },
      {
        "name": "sintered metal filter",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A filter made by fusing metal powders, creating a strong, porous structure for high-temperature applications."
      },
      {
        "name": "dialysis membrane",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A semipermeable membrane that allows small solute molecules to pass through but retains larger molecules like proteins."
      },
      {
        "name": "sand filter bed",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A layer of sand used in water purification to remove suspended particles."
      },
      {
        "name": "coffee filter paper",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A disposable paper filter that allows liquid coffee to pass through while retaining the grounds."
      },
      {
        "name": "silica gel",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A granular, porous form of silicon dioxide used as a desiccant to adsorb water."
      },
      {
        "name": "cheesecloth",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A loose-woven cotton gauze used for straining liquids, such as whey from cheese curds."
      },
      {
        "name": "fritted glass",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "Porous glass through which gas or liquid may pass, used in laboratory glassware for filtration."
      },
      {
        "name": "perlite",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "An amorphous volcanic glass with high porosity, used in horticulture to aerate soil."
      },
      {
        "name": "reverse osmosis membrane",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": ["RO membrane"],
        "why": "A semipermeable membrane with extremely fine pores used in desalination to remove ions and minerals from water."
      },
      {
        "name": "aerogel",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": ["frozen smoke"],
        "why": "A synthetic porous ultralight material derived from a gel, with extremely low density and thermal conductivity."
      },
      {
        "name": "cigarette filter",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A filter made of cellulose acetate tow that traps some particulate matter from tobacco smoke."
      },
      {
        "name": "breather fabric",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": ["ePTFE membrane"],
        "why": "A waterproof but vapor-permeable membrane used in clothing and construction to allow moisture to escape."
      },
      {
        "name": "catalytic converter monolith",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A porous ceramic honeycomb structure in a vehicle's exhaust, coated with catalysts to treat emissions."
      },
      {
        "name": "oil filter medium",
        "category": "Filtration & Porous Media",
        "type": "medium",
        "aliases": [],
        "why": "A synthetic fiber medium inside an engine oil filter, designed to trap contaminants."
      },
      {
        "name": "ship hull",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The watertight outer body of a ship, a substrate for antifouling paints and biofouling organisms."
      },
      {
        "name": "aircraft wing",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": ["airfoil"],
        "why": "A surface designed to generate lift, which can be a substrate for ice formation."
      },
      {
        "name": "car tire tread",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The patterned rubber surface of a tire that contacts the road, subject to wear and accumulation of road debris."
      },
      {
        "name": "rocket nozzle",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The exhaust duct of a rocket engine, whose inner surface must withstand extreme temperatures and pressures."
      },
      {
        "name": "spacecraft heat shield",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": ["thermal protection system"],
        "why": "The ablative or insulating outer layer of a reentry vehicle that protects it from atmospheric heating."
      },
      {
        "name": "helicopter rotor blade",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A rotating airfoil subject to aerodynamic stress, erosion from rain and sand, and ice accretion."
      },
      {
        "name": "automobile paintwork",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": ["car body panel"],
        "why": "The multi-layered coating on a car, a substrate for wax, ceramic coatings, dirt, and acid rain."
      },
      {
        "name": "submarine hull",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The pressure-resistant outer shell of a submarine, often coated with anechoic tiles to absorb sonar."
      },
      {
        "name": "brake pad",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A friction material that presses against a brake disc or drum to slow a vehicle."
      },
      {
        "name": "train wheel",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The steel wheel of a train, whose tread and flange interface with the rail."
      },
      {
        "name": "propeller blade",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The blade of a marine or aircraft propeller, subject to cavitation or erosion."
      },
      {
        "name": "radiator fins",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "Thin metal sheets that extend from a core, providing a large surface area for heat dissipation to the air."
      },
      {
        "name": "windshield",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": ["windscreen"],
        "why": "Laminated glass at the front of a vehicle, a substrate for wipers, dirt, and hydrophobic coatings."
      },
      {
        "name": "ball bearing race",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The hardened, smooth channel in which ball bearings roll, subject to extreme contact stress."
      },
      {
        "name": "engine cylinder wall",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "The inner surface of an engine cylinder against which a piston slides, requiring lubrication."
      },
      {
        "name": "landing gear strut",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "part",
        "aliases": [],
        "why": "The structural component of landing gear, designed to withstand high impact loads and corrosion."
      },
      {
        "name": "de-icing boot",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A rubber sheath on an aircraft's leading edges that inflates to break off accumulated ice."
      },
      {
        "name": "vehicle underbody",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": ["chassis"],
        "why": "The underside of a vehicle, often coated for corrosion protection from road salt and moisture."
      },
      {
        "name": "turbine blade",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "part",
        "aliases": [],
        "why": "A component in a jet engine or power generator, which must resist high temperatures and requires thermal barrier coatings."
      },
      {
        "name": "dashboard",
        "category": "Vehicle & Aerospace Surfaces",
        "type": "surface",
        "aliases": ["instrument panel"],
        "why": "The interior surface in front of a driver, made of materials that must resist UV degradation and heat."
      },
      {
        "name": "cutting board",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": ["chopping block"],
        "why": "A durable surface for cutting food, which can harbor bacteria in scratches."
      },
      {
        "name": "cast iron skillet",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A heavy pan whose porous iron surface is seasoned with polymerized oil to create a non-stick layer."
      },
      {
        "name": "stainless steel countertop",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A non-porous, hygienic work surface used in commercial kitchens."
      },
      {
        "name": "bread baking stone",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": ["pizza stone"],
        "why": "A porous ceramic or stone slab that absorbs and radiates heat evenly for baking."
      },
      {
        "name": "wine barrel interior",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": ["oak barrel"],
        "why": "The toasted oak surface inside a barrel that imparts flavor and tannins to aging wine."
      },
      {
        "name": "butcher block",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A heavy-duty cutting surface made from end-grain wood, used in butchery."
      },
      {
        "name": "non-stick coating",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": ["Teflon coating"],
        "why": "A fluoropolymer coating applied to cookware to prevent food from adhering."
      },
      {
        "name": "cheese aging rack",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A wooden or metal rack on which cheese is placed to age, allowing air circulation and rind development."
      },
      {
        "name": "fermentation crock",
        "category": "Culinary & Food Processing Surfaces",
        "type": "part",
        "aliases": ["sauerkraut pot"],
        "why": "A ceramic vessel used for fermenting vegetables, whose surface interacts with lactic acid bacteria."
      },
      {
        "name": "marble slab",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A cold, smooth stone surface used by confectioners for tempering chocolate and working with pastry."
      },
      {
        "name": "sushi mat",
        "category": "Culinary & Food Processing Surfaces",
        "type": "part",
        "aliases": ["makisu"],
        "why": "A mat of woven bamboo used to roll sushi, which directly contacts rice and nori."
      },
      {
        "name": "grill grate",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A metal grid that supports food over a heat source, creating characteristic sear marks."
      },
      {
        "name": "proofing basket",
        "category": "Culinary & Food Processing Surfaces",
        "type": "part",
        "aliases": ["banneton"],
        "why": "A rattan or cane basket used to support bread dough during its final rise, imprinting a pattern on the crust."
      },
      {
        "name": "meat hook",
        "category": "Culinary & Food Processing Surfaces",
        "type": "part",
        "aliases": [],
        "why": "A metal hook used to hang carcasses for aging or processing."
      },
      {
        "name": "rice paper",
        "category": "Culinary & Food Processing Surfaces",
        "type": "part",
        "aliases": ["bánh tráng"],
        "why": "A thin, edible sheet used to wrap fresh or fried spring rolls."
      },
      {
        "name": "sausage casing",
        "category": "Culinary & Food Processing Surfaces",
        "type": "part",
        "aliases": [],
        "why": "A membrane, natural or artificial, that is filled with ground meat to form sausages."
      },
      {
        "name": "clay pot",
        "category": "Culinary & Food Processing Surfaces",
        "type": "part",
        "aliases": ["tagine", "donabe"],
        "why": "A porous earthenware cooking vessel that retains moisture and cooks food gently."
      },
      {
        "name": "baker's peel",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "A shovel-like tool, often wooden, used to slide loaves of bread onto a hot baking surface."
      },
      {
        "name": "pasta machine roller",
        "category": "Culinary & Food Processing Surfaces",
        "type": "surface",
        "aliases": [],
        "why": "Metal rollers that press and thin pasta dough into sheets."
      },
      {
        "name": "katsuobushi",
        "category": "Culinary & Food Processing Surfaces",
        "type": "part",
        "aliases": ["bonito flake"],
        "why": "Dried, fermented, and smoked skipjack tuna that is a living substrate for Aspergillus glaucus mold."
      },
      {
        "name": "cotton fabric",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "A natural, absorbent fiber used for clothing, which serves as a substrate for dyes and dirt."
      },
      {
        "name": "denim",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "A sturdy cotton twill fabric, often indigo-dyed, that shows wear patterns over time."
      },
      {
        "name": "leather hide",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "Tanned animal skin used for clothing, footwear, and upholstery, which can be conditioned or dyed."
      },
      {
        "name": "wool fleece",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "The fibrous coat of a sheep, which is naturally water-resistant and insulating."
      },
      {
        "name": "silk",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "A natural protein fiber produced by insect larvae, prized for its softness and sheen."
      },
      {
        "name": "polyester microfiber",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "A synthetic textile with very fine fibers, often used for athletic wear and cleaning cloths."
      },
      {
        "name": "nylon stocking",
        "category": "Textiles & Wearable Layers",
        "type": "part",
        "aliases": [],
        "why": "A sheer, elastic garment made from synthetic polymer fibers."
      },
      {
        "name": "canvas",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "A heavy-duty plain-woven fabric used for sails, tents, and bags, often treated for water resistance."
      },
      {
        "name": "felt",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "A non-woven textile produced by matting, condensing, and pressing fibers together."
      },
      {
        "name": "bulletproof vest panel",
        "category": "Textiles & Wearable Layers",
        "type": "part",
        "aliases": ["ballistic panel"],
        "why": "A layer of high-strength fibers (like Kevlar or Dyneema) designed to stop projectiles."
      },
      {
        "name": "suture thread",
        "category": "Textiles & Wearable Layers",
        "type": "part",
        "aliases": [],
        "why": "A thread used to close wounds, which can be a substrate for bacterial growth."
      },
      {
        "name": "medical gauze",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "A thin, translucent fabric with a loose open weave, used for dressing wounds."
      },
      {
        "name": "firefighter turnout gear",
        "category": "Textiles & Wearable Layers",
        "type": "part",
        "aliases": [],
        "why": "Multi-layered protective clothing with a thermal liner and moisture barrier."
      },
      {
        "name": "velvet pile",
        "category": "Textiles & Wearable Layers",
        "type": "surface",
        "aliases": [],
        "why": "A woven, tufted fabric where the cut threads are evenly distributed, giving it a soft feel."
      },
      {
        "name": "lace",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "A delicate, openwork fabric, patterned with open holes in the work."
      },
      {
        "name": "neoprene wetsuit",
        "category": "Textiles & Wearable Layers",
        "type": "part",
        "aliases": [],
        "why": "A garment made of foamed synthetic rubber that provides thermal insulation by trapping a layer of water."
      },
      {
        "name": "down feather filling",
        "category": "Textiles & Wearable Layers",
        "type": "medium",
        "aliases": [],
        "why": "The soft under-feathers of birds used as a thermal insulating filler in jackets and bedding."
      },
      {
        "name": "carpet pile",
        "category": "Textiles & Wearable Layers",
        "type": "surface",
        "aliases": [],
        "why": "The upright fibers of a carpet, which trap dirt, allergens, and spills."
      },
      {
        "name": "upholstery fabric",
        "category": "Textiles & Wearable Layers",
        "type": "material",
        "aliases": [],
        "why": "Durable fabric used to cover furniture, subject to abrasion, soiling, and wear."
      },
      {
        "name": "space suit layer",
        "category": "Textiles & Wearable Layers",
        "type": "part",
        "aliases": [],
        "why": "One of many layers in a space suit, such as the liquid cooling garment or the Mylar insulation."
      },
      {
        "name": "parchment",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": ["vellum"],
        "why": "A writing surface made from processed animal skin, used for historical manuscripts."
      },
      {
        "name": "artist's canvas",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": ["primed canvas"],
        "why": "A woven fabric (usually cotton or linen) primed with gesso, serving as the base for oil or acrylic painting."
      },
      {
        "name": "papyrus",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "An early paper-like material made from the pith of the papyrus plant, used in ancient Egypt."
      },
      {
        "name": "photographic film emulsion",
        "category": "Artistic & Archival Media",
        "type": "medium",
        "aliases": [],
        "why": "A gelatin layer containing light-sensitive silver halide crystals, supported by a plastic base."
      },
      {
        "name": "magnetic tape",
        "category": "Artistic & Archival Media",
        "type": "medium",
        "aliases": ["cassette tape", "reel-to-reel tape"],
        "why": "A plastic ribbon coated with magnetizable particles, used for recording audio or video signals."
      },
      {
        "name": "vinyl record groove",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": ["LP record"],
        "why": "A spiral groove modulated with audio information, which is read by a stylus."
      },
      {
        "name": "fresco wall plaster",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": ["intonaco"],
        "why": "The final, thin layer of wet plaster on which a fresco is painted, allowing the pigment to bond with the wall."
      },
      {
        "name": "washi paper",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "Traditional Japanese paper made from local fibers, used in calligraphy, printmaking, and shoji screens."
      },
      {
        "name": "lithographic stone",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "A smooth, fine-grained limestone block used for planographic printing."
      },
      {
        "name": "copperplate",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "A polished copper plate into which a design is engraved or etched for intaglio printing."
      },
      {
        "name": "woodblock",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "A block of wood cut along the grain, on which a relief design is carved for printing."
      },
      {
        "name": "architectural blueprint",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "A paper sensitized with a ferro-gallate compound, used to make contact prints of technical drawings."
      },
      {
        "name": "sheet music",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "Paper printed with musical notation, acting as a substrate for performance annotations."
      },
      {
        "name": "illuminated manuscript page",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "A page of a book decorated with gold leaf and intricate illustrations."
      },
      {
        "name": "clay tablet",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "A flat piece of clay used as a writing medium, especially for cuneiform script in ancient Mesopotamia."
      },
      {
        "name": "scratchboard",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "A board coated with a thin layer of white clay and a top layer of black ink, which is scratched off to create an image."
      },
      {
        "name": "piano roll",
        "category": "Artistic & Archival Media",
        "type": "medium",
        "aliases": [],
        "why": "A continuous roll of paper with perforations that represent musical notes for a player piano."
      },
      {
        "name": "tattooed skin",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "Living human skin as a medium for permanent art, where ink is deposited into the dermal layer."
      },
      {
        "name": "cinema screen",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": ["silver screen"],
        "why": "A large, reflective surface in a theater onto which images are projected."
      },
      {
        "name": "animation cel",
        "category": "Artistic & Archival Media",
        "type": "surface",
        "aliases": [],
        "why": "A transparent sheet of celluloid or acetate on which characters are painted for traditional animation."
      },
      {
        "name": "steel plate",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "A flat sheet of steel of a specific thickness, used as a raw material for construction and fabrication."
      },
      {
        "name": "plywood sheet",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "An engineered wood panel made from layers of veneer glued together, used in construction."
      },
      {
        "name": "carbon fiber pre-preg",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "Carbon fiber fabric that has been pre-impregnated with a resin system, ready for molding and curing."
      },
      {
        "name": "aluminum billet",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "A solid block of aluminum, often cylindrical, that is a starting workpiece for forging or extrusion."
      },
      {
        "name": "polymer resin pellet",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": ["nurdle"],
        "why": "Small granules of plastic used as raw material for injection molding and extrusion."
      },
      {
        "name": "concrete mix",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "The unset mixture of cement, aggregate, and water that serves as the base for concrete structures."
      },
      {
        "name": "structural lumber",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": ["2x4 stud"],
        "why": "Wood that has been processed and graded for use in a building's frame."
      },
      {
        "name": "titanium alloy bar",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "A bar of high-strength, lightweight metal alloy, used as stock for machining aerospace or medical parts."
      },
      {
        "name": "rebar",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": ["reinforcing bar"],
        "why": "A steel bar with a textured surface, used to provide tensile strength to concrete."
      },
      {
        "name": "glass fiber roving",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "A bundle of continuous, untwisted glass filaments used in making composites."
      },
      {
        "name": "ingot",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "A mass of metal cast into a convenient shape for transport, storage, and further processing."
      },
      {
        "name": "foam block",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": ["polystyrene block"],
        "why": "A block of rigid foam used for insulation, packaging, or as a base for sculpting models."
      },
      {
        "name": "sod",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": ["turf"],
        "why": "Grass and the soil beneath it held together by its roots, used for establishing a lawn quickly."
      },
      {
        "name": "ballast",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": ["track ballast"],
        "why": "Coarse stone aggregate placed to form the bed for railway tracks."
      },
      {
        "name": "MDF panel",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": ["medium-density fiberboard"],
        "why": "An engineered wood product made by breaking down wood residuals into fibers and forming a panel with wax and resin."
      },
      {
        "name": "acrylic sheet",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": ["Plexiglas", "Perspex"],
        "why": "A sheet of transparent thermoplastic often used as a lightweight or shatter-resistant alternative to glass."
      },
      {
        "name": "I-beam",
        "category": "Engineered Material Stock",
        "type": "part",
        "aliases": [],
        "why": "A structural steel beam with an I- or H-shaped cross-section."
      },
      {
        "name": "metal powder",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "Fine metallic powder used as the raw material for 3D metal printing (SLS/DMLS) and powder metallurgy."
      },
      {
        "name": "epoxy resin",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "A two-part thermosetting polymer that acts as a matrix material for composites or as an adhesive."
      },
      {
        "name": "grout",
        "category": "Engineered Material Stock",
        "type": "material",
        "aliases": [],
        "why": "A dense fluid mixture of cement, water, and sand used to fill gaps or joints between tiles."
      },
      {
        "name": "shipping container",
        "category": "Containment & Storage Vessels",
        "type": "environment",
        "aliases": ["ISO container"],
        "why": "A standardized steel box used for intermodal freight transport, whose interior contains and protects cargo."
      },
      {
        "name": "glass bottle",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "A rigid, inert container for liquids, whose inner surface interacts with the contents."
      },
      {
        "name": "fuel tank",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "A vessel for storing flammable fuel, whose inner surface must resist corrosion."
      },
      {
        "name": "grain silo",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "A large cylindrical structure for storing bulk grain, whose walls bear the pressure of the material."
      },
      {
        "name": "plastic food wrap",
        "category": "Containment & Storage Vessels",
        "type": "surface",
        "aliases": ["cling film"],
        "why": "A thin plastic film that clings to surfaces and itself, used for sealing food items in containers."
      },
      {
        "name": "cardboard box",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "A container made from paperboard, used for packaging and shipping goods."
      },
      {
        "name": "pressure vessel",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "A container designed to hold gases or liquids at a pressure substantially different from the ambient pressure."
      },
      {
        "name": "Tupperware container",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "A plastic container with a sealing lid for storing food, whose surface can absorb stains and odors."
      },
      {
        "name": "IV bag",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": ["intravenous bag"],
        "why": "A flexible plastic bag containing sterile medical fluids for intravenous therapy."
      },
      {
        "name": "vacuum chamber",
        "category": "Containment & Storage Vessels",
        "type": "environment",
        "aliases": [],
        "why": "A rigid enclosure from which air is removed, providing a low-pressure environment for processes like coating."
      },
      {
        "name": "piping",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": ["pipe wall"],
        "why": "A tube used to convey fluids, whose inner surface is a substrate for scale, corrosion, or biofilms."
      },
      {
        "name": "cryogenic dewar",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "A specialized vacuum flask for storing cryogens (e.g., liquid nitrogen), with highly insulating surfaces."
      },
      {
        "name": "ampoule",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "A small, sealed glass vial used to contain and preserve a sample, usually a liquid."
      },
      {
        "name": "storage drum",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": ["55-gallon drum"],
        "why": "A cylindrical container for shipping bulk chemicals or other materials."
      },
      {
        "name": "cans",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": ["tin can", "aluminum can"],
        "why": "A sealed metal container for food or beverages, often lined with a polymer coating."
      },
      {
        "name": "water tower",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "An elevated structure supporting a large water tank to pressurize a water supply system."
      },
      {
        "name": "Ziploc bag",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": ["resealable bag"],
        "why": "A flexible, reusable plastic bag with an integrated sealing mechanism."
      },
      {
        "name": "nuclear waste cask",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "A heavily shielded container for transporting or storing high-level radioactive waste."
      },
      {
        "name": "blister pack",
        "category": "Containment & Storage Vessels",
        "type": "part",
        "aliases": [],
        "why": "Packaging with a pre-formed plastic cavity and a backing, used for pharmaceuticals and small goods."
      },
      {
        "name": "septic tank",
        "category": "Containment & Storage Vessels",
        "type": "environment",
        "aliases": [],
        "why": "An underground chamber for the primary anaerobic treatment of wastewater."
      },
      {
        "name": "database table",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": [],
        "why": "A structured set of data in a relational database, serving as a substrate for records, queries, and indexes."
      },
      {
        "name": "file system",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": [],
        "why": "The hierarchical structure on a storage drive that organizes and holds files and directories."
      },
      {
        "name": "virtual machine",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": ["VM"],
        "why": "An emulated computer system that provides a sandboxed environment for an operating system and its applications."
      },
      {
        "name": "blockchain ledger",
        "category": "Digital & Computational Frameworks",
        "type": "medium",
        "aliases": [],
        "why": "A distributed, immutable digital record that serves as the base layer for transactions and smart contracts."
      },
      {
        "name": "DOM tree",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": ["Document Object Model"],
        "why": "A tree-like representation of an HTML document on which scripts and CSS operate."
      },
      {
        "name": "API endpoint",
        "category": "Digital & Computational Frameworks",
        "type": "surface",
        "aliases": [],
        "why": "A digital interface where software services interact and upon which requests are made."
      },
      {
        "name": "memory address space",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": [],
        "why": "The range of memory addresses that a CPU or process can access, serving as the medium for data and instructions."
      },
      {
        "name": "CSS stylesheet",
        "category": "Digital & Computational Frameworks",
        "type": "medium",
        "aliases": [],
        "why": "A file that provides the stylistic rules (the substrate) upon which the visual presentation of a document is built."
      },
      {
        "name": "software framework",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": ["e.g., React, Django"],
        "why": "A pre-written code library that provides a standard structure and foundation on which an application is built."
      },
      {
        "name": "cloud storage bucket",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": ["S3 bucket"],
        "why": "A public cloud container for storing and retrieving data objects."
      },
      {
        "name": "cookie",
        "category": "Digital & Computational Frameworks",
        "type": "medium",
        "aliases": ["HTTP cookie"],
        "why": "A small piece of data stored on a user's computer by a web browser, a substrate for session information."
      },
      {
        "name": "network socket",
        "category": "Digital & Computational Frameworks",
        "type": "surface",
        "aliases": [],
        "why": "An internal endpoint for sending or receiving data within a node on a computer network."
      },
      {
        "name": "operating system kernel",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": [],
        "why": "The core component of an OS that manages system resources and provides the fundamental platform for software."
      },
      {
        "name": "data frame",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": ["e.g., in pandas, R"],
        "why": "A two-dimensional, labeled data structure with columns of potentially different types, a substrate for analysis."
      },
      {
        "name": "digital canvas",
        "category": "Digital & Computational Frameworks",
        "type": "surface",
        "aliases": ["e.g., in Photoshop, Figma"],
        "why": "The virtual workspace in a graphics application on which images and designs are created."
      },
      {
        "name": "version control repository",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": ["Git repo"],
        "why": "A data structure that stores metadata and a set of files, serving as the foundation for collaborative code development."
      },
      {
        "name": "spreadsheet",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": ["Excel sheet"],
        "why": "A grid of cells that can hold data and formulas, providing a substrate for calculations and data organization."
      },
      {
        "name": "neural network layer",
        "category": "Digital & Computational Frameworks",
        "type": "medium",
        "aliases": [],
        "why": "A collection of artificial neurons that serves as the processing substrate for data transformations in deep learning."
      },
      {
        "name": "simulation environment",
        "category": "Digital & Computational Frameworks",
        "type": "environment",
        "aliases": ["e.g., game engine physics world"],
        "why": "A digital space governed by a set of rules and physics, providing a substrate for agents or models to interact."
      },
      {
        "name": "XML document",
        "category": "Digital & Computational Frameworks",
        "type": "medium",
        "aliases": [],
        "why": "A text-based format for representing structured data, providing a substrate for data exchange."
      }
    ],
    "notes": [
      "The list achieves good coverage across the 16 categories, with a diverse mix of types (material, surface, part, environment, medium). The no-duplicates rule was challenging, especially between 'Architectural Surfaces' and 'Engineered Material Stock', but was managed by focusing on finished/in-situ items versus raw/stock materials.",
      "The 'Digital & Computational Frameworks' category successfully translates the abstract concept of a substrate into non-physical examples, using terms like 'environment' and 'medium' to describe software structures.",
      "Including proper names and vernacular (e.g., 'washi paper', 'travertine', 'banneton', 'makisu') adds valuable specificity. Synonyms were captured in aliases to aid future searches.",
      "Possible blind spots or areas for future expansion could include more items from audiology (e.g., 'anechoic chamber foam'), specialized sports surfaces (e.g., 'climbing hold', 'ice rink surface'), and medical implants (e.g., 'titanium hip implant surface', 'stent mesh')."
    ]
  }


var substrates_with_probes = 
{
  "probes": [
    {
      "name": "skin epidermis",
      "queries": [
        "best adhesive for skin contact",
        "temporary tattoo application tips",
        "DE: medizinisches Klebeband für empfindliche Haut",
        "site:wikipedia.org \"Integumentary system\"",
        "biocompatible materials for wearable sensors"
      ],
      "suggested_corpora": ["medical journals", "cosmetics blogs", "product manuals", "Wikipedia", "patents"],
      "non_en": ["DE"]
    },
    {
      "name": "tooth enamel",
      "queries": [
        "how to prevent plaque buildup on enamel",
        "adhesion of dental sealants to enamel",
        "FR: adhérence de la plaque dentaire sur l'émail",
        "biofilm formation on tooth surfaces",
        "materials compatibility chart dental enamel"
      ],
      "suggested_corpora": ["dentistry journals", "public health sites", "materials science papers", "forums", "vendor charts"],
      "non_en": ["FR"]
    },
    {
      "name": "intestinal villi",
      "queries": [
        "mucoadhesive drug delivery systems",
        "bioadhesion to intestinal lining",
        "DE: Nährstoffaufnahme an Darmzotten",
        "how do oral medications stick to the gut",
        "site:fda.gov \"gastrointestinal tract surfaces\""
      ],
      "suggested_corpora": ["pharmacology papers", "medical textbooks", "regulatory documents", "biotech websites"],
      "non_en": ["DE"]
    },
    {
      "name": "leaf cuticle",
      "queries": [
        "pesticide spray adhesion to leaf surfaces",
        "how to apply foliar nutrients",
        "FR: fongicide pour cuticule foliaire",
        "site:wikipedia.org \"Plant cuticle\"",
        "hydrophobicity of plant leaves"
      ],
      "suggested_corpora": ["agricultural science journals", "gardening forums", "chemical manufacturer PDFs", "Wikipedia"],
      "non_en": ["FR"]
    },
    {
      "name": "plant root surface",
      "queries": [
        "microbial colonization of rhizoplane",
        "nutrient uptake at root surface",
        "DE: Wurzeloberfläche Nährstoffaufnahme",
        "biofilms on plant roots",
        "root-soil interface interactions"
      ],
      "suggested_corpora": ["soil science journals", "botany textbooks", "agricultural research papers", "university extension sites"],
      "non_en": ["DE"]
    },
    {
      "name": "fungal mycelium",
      "queries": [
        "mycelium as a building material",
        "growing mushrooms on different media",
        "FR: culture de champignons sur mycélium",
        "dyeing with mycelium",
        "biomaterials selected from the group consisting of mycelium"
      ],
      "suggested_corpora": ["mycology blogs", "DIY forums", "materials science papers", "patents"],
      "non_en": ["FR"]
    },
    {
      "name": "bone marrow",
      "queries": [
        "scaffolds for hematopoietic stem cell culture",
        "cell engraftment in bone marrow",
        "DE: Knochenmark-Zellkultur-Substrate",
        "bioreactors for bone marrow cells",
        "suitable media for hematopoiesis"
      ],
      "suggested_corpora": ["biomedical engineering journals", "medical research papers", "biotech vendor catalogs"],
      "non_en": ["DE"]
    },
    {
      "name": "corneal epithelium",
      "queries": [
        "contact lens biocompatibility cornea",
        "adhesion of eye drops to corneal surface",
        "FR: adhérence des lentilles de contact sur la cornée",
        "tear film interaction with epithelium",
        "ophthalmic drug delivery systems"
      ],
      "suggested_corpora": ["ophthalmology journals", "optometry websites", "pharmaceutical research papers"],
      "non_en": ["FR"]
    },
    {
      "name": "nacre",
      "queries": [
        "biomineralization template nacre",
        "mother of pearl inlay techniques",
        "DE: Perlmutt als Biomaterial",
        "synthetic nacre production",
        "site:wikipedia.org \"Nacre\""
      ],
      "suggested_corpora": ["materials science journals", "jewelry making forums", "Wikipedia", "artisan blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "chitin exoskeleton",
      "queries": [
        "adhesives for insect tracking tags",
        "how to mount insects for display",
        "FR: adhésif pour exosquelette de chitine",
        "biomimicry of arthropod cuticle",
        "chitin as a biomaterial"
      ],
      "suggested_corpora": ["entomology journals", "conservation tech websites", "DIY forums", "materials science papers"],
      "non_en": ["FR"]
    },
    {
      "name": "fish scales",
      "queries": [
        "biofouling on fish scales",
        "removing fish scales how to",
        "DE: Schleimschicht auf Fischschuppen",
        "fish skin leather tanning",
        "biomaterials from fish scales"
      ],
      "suggested_corpora": ["marine biology papers", "fishing blogs", "materials science articles", "fashion tech websites"],
      "non_en": ["DE"]
    },
    {
      "name": "synovial membrane",
      "queries": [
        "cell adhesion to synovial membrane",
        "lubricin coating on cartilage surfaces",
        "FR: culture cellulaire membrane synoviale",
        "bio-lubrication in joints",
        "tissue engineering for synovial joints"
      ],
      "suggested_corpora": ["rheumatology journals", "biomedical engineering papers", "medical textbooks"],
      "non_en": ["FR"]
    },
    {
      "name": "extracellular matrix",
      "queries": [
        "cell culture on extracellular matrix plates",
        "ECM protein coating protocol",
        "DE: Zellkultur auf extrazellulärer Matrix",
        "hydrogels for 3D cell culture",
        "site:wikipedia.org \"Extracellular matrix\""
      ],
      "suggested_corpora": ["biotech vendor protocols", "cell biology journals", "Wikipedia", "research papers"],
      "non_en": ["DE"]
    },
    {
      "name": "blood plasma",
      "queries": [
        "protein binding in blood plasma",
        "how to separate cells from plasma",
        "FR: protéines dans le plasma sanguin",
        "drug stability in plasma",
        "materials compatibility for blood storage"
      ],
      "suggested_corpora": ["hematology journals", "lab protocols", "pharmaceutical research", "medical device manuals"],
      "non_en": ["FR"]
    },
    {
      "name": "tree bark",
      "queries": [
        "how to remove lichen from tree bark",
        "epiphytes that grow on bark",
        "DE: Flechtenwachstum auf Baumrinde",
        "tree bark texture for art",
        "crafts using tree bark"
      ],
      "suggested_corpora": ["gardening forums", "botany websites", "DIY/craft blogs", "arborist guides"],
      "non_en": ["DE"]
    },
    {
      "name": "tendon",
      "queries": [
        "tendon tissue engineering scaffolds",
        "cell attachment to collagen fibers",
        "FR: ingénierie tissulaire du tendon",
        "suture anchor for tendon repair",
        "materials for artificial tendons"
      ],
      "suggested_corpora": ["sports medicine journals", "biomedical engineering papers", "surgical supply catalogs"],
      "non_en": ["FR"]
    },
    {
      "name": "egg shell",
      "queries": [
        "can you dye egg shells",
        "bacterial penetration of egg shell",
        "DE: Eierschalen-Membran verwenden",
        "egg shell as calcium supplement DIY",
        "porosity of avian eggshells"
      ],
      "suggested_corpora": ["food science journals", "craft blogs", "poultry farming websites", "DIY forums"],
      "non_en": ["DE"]
    },
    {
      "name": "placenta",
      "queries": [
        "trophoblast adhesion to endometrium",
        "placental cell culture methods",
        "FR: culture de cellules placentaires",
        "biomaterials from placenta",
        "site:wikipedia.org \"Placenta\""
      ],
      "suggested_corpora": ["developmental biology journals", "medical research papers", "Wikipedia", "biotech websites"],
      "non_en": ["FR"]
    },
    {
      "name": "neural scaffold",
      "queries": [
        "neuron guidance on neural scaffolds",
        "materials for nerve regeneration",
        "DE: neuronale Gerüste für Zellwachstum",
        "3D printing neural scaffolds",
        "glial cell interaction with biomaterials"
      ],
      "suggested_corpora": ["neuroscience journals", "biomaterials science papers", "regenerative medicine news"],
      "non_en": ["DE"]
    },
    {
      "name": "stromatolite",
      "queries": [
        "how do stromatolites form",
        "cyanobacteria in layered sediments",
        "FR: formation de stromatolites",
        "living stromatolites Shark Bay",
        "site:wikipedia.org \"Stromatolite\""
      ],
      "suggested_corpora": ["geology textbooks", "paleontology blogs", "Wikipedia", "science tourism websites"],
      "non_en": ["FR"]
    },
    {
      "name": "coral reef",
      "queries": [
        "coral larval settlement cues",
        "bio-adhesives for coral reef restoration",
        "ES: colonización de arrecifes de coral",
        "what organisms live on coral reefs",
        "artificial reef materials"
      ],
      "suggested_corpora": ["marine biology journals", "conservation websites", "diving forums", "documentaries"],
      "non_en": ["ES"]
    },
    {
      "name": "nurse log",
      "queries": [
        "seed germination on decaying wood",
        "fungi found on nurse logs",
        "DE: Totholz als Keimbett",
        "forest succession nurse log",
        "what is a nurse log"
      ],
      "suggested_corpora": ["forestry journals", "ecology blogs", "hiking forums", "university extension sites"],
      "non_en": ["DE"]
    },
    {
      "name": "gut microbiome",
      "queries": [
        "how to improve gut flora",
        "probiotics interaction with gut lining",
        "FR: écosystème du microbiote intestinal",
        "fecal microbiota transplant host",
        "what is the gut microbiome environment"
      ],
      "suggested_corpora": ["health and wellness blogs", "medical journals", "nutrition websites", "documentaries"],
      "non_en": ["FR"]
    },
    {
      "name": "whale fall",
      "queries": [
        "deep sea ecosystem whale fall",
        "organisms found on whale carcasses",
        "ES: ecosistema de caída de ballenas",
        "bone-eating snot flower worm",
        "site:noaa.gov \"whale fall\""
      ],
      "suggested_corpora": ["oceanography journals", "science news sites", "aquarium websites", "government agency sites"],
      "non_en": ["ES"]
    },
    {
      "name": "forest floor",
      "queries": [
        "decomposition of leaf litter",
        "invertebrates in the duff layer",
        "DE: Waldboden als Lebensraum",
        "foraging for mushrooms on forest floor",
        "soil organic matter formation"
      ],
      "suggested_corpora": ["ecology journals", "foraging blogs", "soil science websites", "nature guides"],
      "non_en": ["DE"]
    },
    {
      "name": "kelp forest",
      "queries": [
        "what animals live in kelp forests",
        "epiphytes growing on kelp blades",
        "FR: faune de la forêt de varech",
        "kelp forest ecosystem structure",
        "sea urchins grazing on kelp holdfast"
      ],
      "suggested_corpora": ["marine biology websites", "aquarium pages", "documentaries", "conservation news"],
      "non_en": ["FR"]
    },
    {
      "name": "human body",
      "queries": [
        "commensal organisms on humans",
        "human skin microbiome list of species",
        "ES: el cuerpo humano como ecosistema",
        "symbiotic relationships with human host",
        "where do microbes live on the body"
      ],
      "suggested_corpora": ["microbiology journals", "science news", "health websites", "educational resources"],
      "non_en": ["ES"]
    },
    {
      "name": "mangrove prop roots",
      "queries": [
        "oyster settlement on mangrove roots",
        "epibionts on prop roots",
        "DE: Mangrovenwurzeln als Substrat",
        "organisms living on mangrove roots",
        "mangrove root community"
      ],
      "suggested_corpora": ["coastal ecology papers", "conservation websites", "marine biology field guides"],
      "non_en": ["DE"]
    },
    {
      "name": "anthill",
      "queries": [
        "organisms that live in ant hills",
        "myrmecophile examples",
        "FR: symbiotes dans les fourmilières",
        "building a formicarium for ants",
        "what is an ant nest made of"
      ],
      "suggested_corpora": ["entomology websites", "ant keeping forums", "natural history blogs", "Wikipedia"],
      "non_en": ["FR"]
    },
    {
      "name": "sphagnum bog",
      "queries": [
        "plants that grow in sphagnum bogs",
        "peat bog ecosystem characteristics",
        "ES: flora de las turberas de sphagnum",
        "how are peat bogs formed",
        "carnivorous plants found in bogs"
      ],
      "suggested_corpora": ["botany websites", "ecology journals", "gardening blogs (carnivorous plants)", "conservation sites"],
      "non_en": ["ES"]
    },
    {
      "name": "epiphyte-laden branch",
      "queries": [
        "types of epiphytes on trees",
        "how do bromeliads attach to branches",
        "DE: Epiphyten auf Ästen",
        "canopy ecosystem research",
        "orchids growing on trees"
      ],
      "suggested_corpora": ["botany journals", "gardening websites", "rainforest ecology pages", "nature photography blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "hydrothermal vent",
      "queries": [
        "chemosynthesis at hydrothermal vents",
        "animals of the black smokers",
        "FR: communauté des évents hydrothermaux",
        "how do tube worms survive",
        "deep sea vent exploration video"
      ],
      "suggested_corpora": ["oceanography institute websites (WHOI, NOAA)", "documentaries", "science news", "geology textbooks"],
      "non_en": ["FR"]
    },
    {
      "name": "vernal pool",
      "queries": [
        "vernal pool fairy shrimp",
        "plants of temporary ponds",
        "ES: fauna de las charcas vernales",
        "vernal pool ecosystem guide",
        "what is a vernal pool"
      ],
      "suggested_corpora": ["conservation websites", "local nature guides", "ecology papers", "environmental education sites"],
      "non_en": ["ES"]
    },
    {
      "name": "carrion",
      "queries": [
        "insect succession on a carcass",
        "forensic entomology case studies",
        "DE: Aas als Nährboden für Insekten",
        "what animals are scavengers",
        "decomposition stages of carrion"
      ],
      "suggested_corpora": ["forensic science journals", "ecology websites", "natural history blogs", "documentaries"],
      "non_en": ["DE"]
    },
    {
      "name": "gall",
      "queries": [
        "insects that create plant galls",
        "what is inside an oak apple gall",
        "FR: insectes gallicoles",
        "how to identify plant galls",
        "gall wasp life cycle"
      ],
      "suggested_corpora": ["entomology websites", "gardening forums", "botany field guides", "university extension pages"],
      "non_en": ["FR"]
    },
    {
      "name": "termite mound",
      "queries": [
        "termite mound architecture",
        "animals that live in termite mounds",
        "ES: ecosistema de los termiteros",
        "how do termites build their mounds",
        "termitophile organisms examples"
      ],
      "suggested_corpora": ["entomology journals", "documentaries", "natural history websites", "architectural biomimicry articles"],
      "non_en": ["ES"]
    },
    {
      "name": "pitcher plant",
      "queries": [
        "organisms living inside pitcher plants",
        "pitcher plant inquiline community",
        "DE: Gemeinschaft in Kannenpflanzen",
        "how do pitcher plants digest insects",
        "Sarracenia food web"
      ],
      "suggested_corpora": ["carnivorous plant society websites", "botany journals", "gardening blogs", "ecology papers"],
      "non_en": ["DE"]
    },
    {
      "name": "soil crust",
      "queries": [
        "what is cryptobiotic soil crust",
        "biological soil crust composition",
        "FR: croûte biologique du sol désertique",
        "don't bust the crust",
        "micro-community of biocrust"
      ],
      "suggested_corpora": ["national park websites (e.g., Arches)", "soil science journals", "conservation guides", "ecology blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "rhizosphere",
      "queries": [
        "microbes in the rhizosphere",
        "root exudates and soil bacteria interaction",
        "ES: microorganismos de la rizosfera",
        "rhizosphere vs bulk soil",
        "plant-microbe interactions in the rhizosphere"
      ],
      "suggested_corpora": ["soil microbiology journals", "agricultural science papers", "plant biology textbooks", "research news"],
      "non_en": ["ES"]
    },
    {
      "name": "beaver dam",
      "queries": [
        "how beaver dams create wetlands",
        "ecosystem impact of beaver dams",
        "DE: Biberdamm als Ökosystem",
        "animals that benefit from beaver ponds",
        "beaver dam engineering"
      ],
      "suggested_corpora": ["wildlife biology websites", "conservation news", "civil engineering papers (nature-based solutions)", "documentaries"],
      "non_en": ["DE"]
    },
    {
      "name": "loam soil",
      "queries": [
        "what is in loam soil",
        "best plants for loamy soil",
        "FR: composition du sol limoneux",
        "how to identify loam soil",
        "gardening in loam"
      ],
      "suggested_corpora": ["gardening websites", "agricultural extension sites", "soil science guides", "DIY forums"],
      "non_en": ["FR"]
    },
    {
      "name": "river sediment",
      "queries": [
        "benthic invertebrates in river sediment",
        "alluvium deposition process",
        "ES: organismos bentónicos en sedimento fluvial",
        "contaminants in riverbed sediment",
        "river delta formation"
      ],
      "suggested_corpora": ["freshwater biology journals", "geology textbooks", "environmental science papers", "government agency reports (EPA)"],
      "non_en": ["ES"]
    },
    {
      "name": "glacial ice",
      "queries": [
        "microbes found in glacial ice",
        "what is trapped in ice cores",
        "DE: Mikroben im Gletschereis",
        "ice core drilling documentary",
        "glacier travel and crevasse safety"
      ],
      "suggested_corpora": ["glaciology journals", "climate science websites", "documentaries", "mountaineering guides"],
      "non_en": ["DE"]
    },
    {
      "name": "sandstone",
      "queries": [
        "can you build with sandstone",
        "porosity of sandstone rock",
        "FR: grès comme roche réservoir",
        "cleaning sandstone patio",
        "famous sandstone formations"
      ],
      "suggested_corpora": ["home improvement forums", "geology websites", "architecture blogs", "oil and gas industry papers"],
      "non_en": ["FR"]
    },
    {
      "name": "granite",
      "queries": [
        "how to seal granite countertops",
        "lichen growth rate on granite",
        "ES: limpiar encimeras de granito",
        "granite vs quartz for kitchen",
        "what type of rock is granite"
      ],
      "suggested_corpora": ["homeowner blogs", "kitchen design websites", "geology guides", "cleaning product instructions"],
      "non_en": ["ES"]
    },
    {
      "name": "shale",
      "queries": [
        "what is shale gas",
        "hydraulic fracturing in shale formations",
        "DE: Schiefergas-Förderung",
        "fossils found in shale",
        "Burgess Shale fossils"
      ],
      "suggested_corpora": ["energy industry websites", "geology blogs", "museum websites", "environmental reports"],
      "non_en": ["DE"]
    },
    {
      "name": "limestone",
      "queries": [
        "what is karst topography",
        "how are stalactites formed in caves",
        "FR: topographie karstique calcaire",
        "acid rain effect on limestone buildings",
        "cleaning limestone floors"
      ],
      "suggested_corpora": ["geography textbooks", "caving (spelunking) websites", "architectural conservation articles", "home maintenance forums"],
      "non_en": ["FR"]
    },
    {
      "name": "pumice",
      "queries": [
        "using pumice stone for plants",
        "pumice as a gentle abrasive",
        "ES: piedra pómez para horticultura",
        "what is pumice rock made of",
        "floating rocks volcano"
      ],
      "suggested_corpora": ["gardening blogs", "beauty product reviews", "geology websites", "craft forums"],
      "non_en": ["ES"]
    },
    {
      "name": "clay soil",
      "queries": [
        "how to improve clay soil for gardening",
        "best plants for heavy clay soil",
        "DE: Töpfern mit Lehmboden",
        "building foundations on clay soil",
        "what is adobe construction"
      ],
      "suggested_corpora": ["gardening websites", "civil engineering guides", "pottery blogs", "sustainable architecture sites"],
      "non_en": ["DE"]
    },
    {
      "name": "desert pavement",
      "queries": [
        "how is desert pavement formed",
        "what is desert varnish",
        "FR: formation de pavés désertiques",
        "driving on desert pavement",
        "archaeological sites desert pavement"
      ],
      "suggested_corpora": ["geology websites", "off-roading forums", "archaeology blogs", "national park guides"],
      "non_en": ["FR"]
    },
    {
      "name": "volcanic ash",
      "queries": [
        "is volcanic ash good for soil",
        "what is tephra",
        "ES: fertilidad de los suelos de ceniza volcánica",
        "ceramics made with volcanic ash",
        "health risks of inhaling volcanic ash"
      ],
      "suggested_corpora": ["agriculture websites", "geology blogs", "pottery forums", "public health advisories"],
      "non_en": ["ES"]
    },
    {
      "name": "permafrost",
      "queries": [
        "what happens when permafrost thaws",
        "tundra plants on permafrost",
        "DE: Bauen auf Permafrost",
        "ice lens formation in permafrost",
        "ancient viruses trapped in permafrost"
      ],
      "suggested_corpora": ["climate science news", "arctic biology papers", "civil engineering reports", "popular science articles"],
      "non_en": ["DE"]
    },
    {
      "name": "beach sand",
      "queries": [
        "what is beach sand made of",
        "interstitial animals in sand",
        "FR: organismes interstitiels du sable de plage",
        "sand castle building techniques",
        "black sand beach formation"
      ],
      "suggested_corpora": ["geology websites", "marine biology guides", "travel blogs", "family activity websites"],
      "non_en": ["FR"]
    },
    {
      "name": "chalk",
      "queries": [
        "uses of chalk rock",
        "White Cliffs of Dover geology",
        "ES: escribir con tiza",
        "blackboard vs whiteboard",
        "drawing with soft pastels on paper"
      ],
      "suggested_corpora": ["geology guides", "art supply blogs", "educational websites", "history sites"],
      "non_en": ["ES"]
    },
    {
      "name": "travertine",
      "queries": [
        "how to clean travertine tiles",
        "is travertine good for shower walls",
        "DE: Travertin als Baustoff",
        "filling holes in travertine floor",
        "Colosseum building materials travertine"
      ],
      "suggested_corpora": ["home improvement forums", "interior design blogs", "stone supplier websites", "architectural history articles"],
      "non_en": ["DE"]
    },
    {
      "name": "marble",
      "queries": [
        "how to get stains out of marble countertop",
        "sculpting with carrara marble",
        "FR: sculpture en marbre",
        "etching on marble surfaces",
        "Taj Mahal marble type"
      ],
      "suggested_corpora": ["home care websites", "art history blogs", "sculptor forums", "interior design magazines"],
      "non_en": ["FR"]
    },
    {
      "name": "obsidian",
      "queries": [
        "how to make an obsidian blade",
        "obsidian knapping for beginners",
        "ES: obsidiana para herramientas afiladas",
        "obsidian sources in North America",
        "archaeological use of obsidian tools"
      ],
      "suggested_corpora": ["archaeology blogs", "primitive technology forums", "YouTube tutorials", "geology websites"],
      "non_en": ["ES"]
    },
    {
      "name": "seabed ooze",
      "queries": [
        "what is deep sea ooze made of",
        "foraminiferal ooze composition",
        "DE: Tiefseeschlamm Zusammensetzung",
        "pelagic sediment cores",
        "diatomaceous earth origin"
      ],
      "suggested_corpora": ["oceanography textbooks", "paleoceanography research papers", "geology websites"],
      "non_en": ["DE"]
    },
    {
      "name": "laterite soil",
      "queries": [
        "building with laterite bricks",
        "what is laterite soil",
        "FR: formation de la latérite",
        "laterite in tropical agriculture",
        "Angkor Wat construction materials"
      ],
      "suggested_corpora": ["sustainable building blogs", "soil science guides", "architectural history sites", "tropical agriculture journals"],
      "non_en": ["FR"]
    },
    {
      "name": "geode interior",
      "queries": [
        "how do crystals grow inside geodes",
        "where to find geodes",
        "ES: crecimiento de cristales en geodas",
        "how to crack open a geode",
        "amethyst geode formation"
      ],
      "suggested_corpora": ["rock collecting forums", "geology for kids websites", "YouTube videos", "mineralogy guides"],
      "non_en": ["ES"]
    },
    {
      "name": "asphalt pavement",
      "queries": [
        "how to repair cracks in asphalt driveway",
        "line striping paint for asphalt",
        "DE: Asphalt versiegeln Anleitung",
        "urban heat island effect asphalt",
        "permeable pavement alternatives"
      ],
      "suggested_corpora": ["DIY websites", "public works manuals", "environmental science articles", "paving contractor blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "concrete slab",
      "queries": [
        "can you paint a concrete garage floor",
        "epoxy coating for concrete slab",
        "FR: revêtement de sol pour dalle béton",
        "how to prevent cracks in new concrete",
        "polished concrete floor maintenance"
      ],
      "suggested_corpora": ["home improvement forums", "construction company websites", "product manufacturer instructions", "architectural design blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "brick wall",
      "queries": [
        "how to remove efflorescence from brick",
        "painting an exterior brick wall",
        "ES: limpiar pared de ladrillo",
        "repointing brickwork guide",
        "vines growing on brick walls damage"
      ],
      "suggested_corpora": ["DIY forums", "masonry contractor blogs", "historic preservation guides", "gardening websites"],
      "non_en": ["ES"]
    },
    {
      "name": "painted drywall",
      "queries": [
        "how to patch a hole in drywall",
        "best paint sheen for living room walls",
        "DE: Gipskarton streichen ohne Spachteln",
        "can you hang shelves on drywall",
        "removing adhesive hooks from painted walls"
      ],
      "suggested_corpora": ["home improvement websites", "YouTube tutorials", "interior design blogs", "paint manufacturer FAQs"],
      "non_en": ["DE"]
    },
    {
      "name": "terracotta roof tile",
      "queries": [
        "how to clean moss off terracotta roof tiles",
        "terracotta tile sealant",
        "FR: mousse sur tuiles en terre cuite",
        "Spanish vs Italian roof tiles",
        "lifespan of a terracotta roof"
      ],
      "suggested_corpora": ["roofing contractor blogs", "home maintenance forums", "product vendor sites", "architectural style guides"],
      "non_en": ["FR"]
    },
    {
      "name": "glass window pane",
      "queries": [
        "best way to clean window panes without streaks",
        "how to remove hard water stains from glass",
        "ES: limpiar cristales de ventanas",
        "biofilm forming on windows",
        "can you paint glass window panes"
      ],
      "suggested_corpora": ["cleaning blogs", "homeowner forums", "professional cleaning service websites", "DIY sites"],
      "non_en": ["ES"]
    },
    {
      "name": "steel bridge girder",
      "queries": [
        "painting steel bridge girders",
        "bridge corrosion inspection manual filetype:pdf",
        "DE: Stahlbrückenträger Korrosionsschutz",
        "fatigue cracking in steel bridges",
        "famous truss bridge designs"
      ],
      "suggested_corpora": ["department of transportation manuals", "civil engineering journals", "industrial coatings vendor sites", "history of technology websites"],
      "non_en": ["DE"]
    },
    {
      "name": "stucco facade",
      "queries": [
        "how to repair cracks in stucco",
        "can you paint a stucco house",
        "FR: réparation de façade en stuc",
        "what is EIFS synthetic stucco",
        "applying new color coat to stucco"
      ],
      "suggested_corpora": ["DIY forums", "painting contractor websites", "construction material guides", "home inspection blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "wooden deck",
      "queries": [
        "best stain for a wooden deck",
        "how to clean a pressure-treated wood deck",
        "ES: lasur para tarima de madera exterior",
        "composite decking vs wood cost",
        "preventing mold on wood deck"
      ],
      "suggested_corpora": ["home improvement stores", "DIY blogs", "deck builder websites", "product review sites"],
      "non_en": ["ES"]
    },
    {
      "name": "terrazzo floor",
      "queries": [
        "how to polish a terrazzo floor",
        "terrazzo floor history",
        "DE: Terrazzoboden pflegen",
        "repairing chips in terrazzo",
        "what is terrazzo made of"
      ],
      "suggested_corpora": ["flooring contractor blogs", "architectural design magazines", "janitorial supply websites", "DIY forums"],
      "non_en": ["DE"]
    },
    {
      "name": "wallpaper",
      "queries": [
        "how to remove old wallpaper",
        "can you paint over vinyl wallpaper",
        "FR: comment enlever le papier peint",
        "applying peel and stick wallpaper",
        "wallpaper vs paint pros and cons"
      ],
      "suggested_corpora": ["interior design blogs", "DIY websites", "YouTube tutorials", "homeowner forums"],
      "non_en": ["FR"]
    },
    {
      "name": "shotcrete",
      "queries": [
        "shotcrete vs gunite for pools",
        "shotcrete application for slope stabilization",
        "ES: estabilización de taludes con hormigón proyectado",
        "shotcrete wall finish types",
        "ACI standards for shotcrete filetype:pdf"
      ],
      "suggested_corpora": ["construction industry journals", "pool building forums", "geotechnical engineering papers", "concrete trade associations"],
      "non_en": ["ES"]
    },
    {
      "name": "dam spillway",
      "queries": [
        "dam spillway erosion control",
        "cavitation damage on spillway surfaces",
        "DE: Wehr-Erosionsschutz",
        "types of dam spillways",
        "famous dam failures"
      ],
      "suggested_corpora": ["civil engineering journals", "dam safety manuals", "government agency reports", "history and engineering documentaries"],
      "non_en": ["DE"]
    },
    {
      "name": "caulked joint",
      "queries": [
        "how to remove mold from shower caulk",
        "best caulk for bathroom tub",
        "FR: moisissure sur joint de calfeutrage",
        "how to apply a clean caulk bead",
        "silicone vs latex caulk"
      ],
      "suggested_corpora": ["DIY forums", "plumbing supply websites", "cleaning blogs", "YouTube tutorials"],
      "non_en": ["FR"]
    },
    {
      "name": "linoleum floor",
      "queries": [
        "how to clean natural linoleum floors",
        "linoleum vs vinyl flooring",
        "ES: limpiar suelo de linóleo",
        "what is linoleum made of",
        "Forbo Marmoleum installation guide"
      ],
      "suggested_corpora": ["flooring company websites", "green building blogs", "home maintenance forums", "interior design sites"],
      "non_en": ["ES"]
    },
    {
      "name": "thatched roof",
      "queries": [
        "how long does a thatched roof last",
        "thatched roof maintenance guide",
        "DE: Insekten im Reetdach",
        "fire prevention for thatched roofs",
        "traditional thatching techniques"
      ],
      "suggested_corpora": ["historic building conservation sites", "master thatcher websites", "insurance company blogs", "cultural heritage guides"],
      "non_en": ["DE"]
    },
    {
      "name": "gabion wall",
      "queries": [
        "how to build a gabion wall",
        "plants for a vegetated gabion wall",
        "FR: mur de gabions végétalisé",
        "gabion basket retaining wall design",
        "cost of gabion wall"
      ],
      "suggested_corpora": ["landscape architecture blogs", "DIY websites", "civil engineering supplier catalogs", "Pinterest"],
      "non_en": ["FR"]
    },
    {
      "name": "plaster ceiling",
      "queries": [
        "how to repair cracks in a plaster ceiling",
        "plaster vs drywall ceilings",
        "ES: reparar techo de yeso",
        "what is lathe and plaster",
        "painting an old plaster ceiling"
      ],
      "suggested_corpora": ["old house restoration forums", "DIY blogs", "painting contractor websites", "This Old House"],
      "non_en": ["ES"]
    },
    {
      "name": "subway tile",
      "queries": [
        "how to clean grout on subway tile",
        "what color grout for white subway tile",
        "DE: Fugen von Metrofliesen reinigen",
        "history of subway tile",
        "subway tile installation patterns"
      ],
      "suggested_corpora": ["interior design blogs", "tile store galleries", "DIY forums", "architectural history websites"],
      "non_en": ["DE"]
    },
    {
      "name": "anodized aluminum window frame",
      "queries": [
        "how to clean anodized aluminum window frames",
        "can you paint anodized aluminum",
        "FR: nettoyage cadre de fenêtre en aluminium anodisé",
        "anodized vs powder coated aluminum",
        "corrosion on anodized aluminum"
      ],
      "suggested_corpora": ["window manufacturer manuals", "metal finishing websites", "architectural product guides", "home maintenance forums"],
      "non_en": ["FR"]
    },
    {
      "name": "casting mold",
      "queries": [
        "best mold release agent for epoxy resin",
        "how to make a two-part silicone mold",
        "DE: Gussform-Trennmittel",
        "sand casting process steps",
        "investment casting wax patterns"
      ],
      "suggested_corpora": ["sculpting/hobbyist forums", "foundry websites", "YouTube tutorials", "industrial supplier catalogs"],
      "non_en": ["DE"]
    },
    {
      "name": "cutting tool edge",
      "queries": [
        "how to sharpen a lathe bit",
        "TiN coating for end mills",
        "ES: desgaste del filo de la herramienta de corte",
        "carbide vs high speed steel cutting tools",
        "cutting tool geometry explained"
      ],
      "suggested_corpora": ["machinist forums", "tool manufacturer catalogs", "engineering textbooks", "YouTube machining channels"],
      "non_en": ["ES"]
    },
    {
      "name": "conveyor belt",
      "queries": [
        "conveyor belt material selection guide",
        "how to clean a food grade conveyor belt",
        "FR: choix du matériau de la bande transporteuse",
        "conveyor belt tracking adjustment",
        "vulcanized splice conveyor belt"
      ],
      "suggested_corpora": ["industrial supplier websites", "food processing industry manuals", "maintenance forums", "engineering handbooks"],
      "non_en": ["FR"]
    },
    {
      "name": "welding table",
      "queries": [
        "how to build a welding table",
        "best material for welding table top",
        "DE: Schweißtisch reinigen",
        "grounding a welding table",
        "DIY welding fixture ideas"
      ],
      "suggested_corpora": ["welding forums", "DIY/maker websites", "YouTube channels", "metal fabrication blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "injection mold cavity",
      "queries": [
        "how to polish an injection mold cavity",
        "surface finish standards for molds SPI",
        "ES: pulido de la cavidad del molde de inyección",
        "draft angle in injection molding",
        "mold texturing process"
      ],
      "suggested_corpora": ["plastics industry magazines", "mold making company websites", "tool and die maker forums", "engineering design guides"],
      "non_en": ["ES"]
    },
    {
      "name": "3D printer build plate",
      "queries": [
        "PLA not sticking to build plate",
        "how to clean 3D printer bed",
        "FR: adhérence au plateau d'impression 3D",
        "glass vs PEI build plate",
        "using glue stick on print bed"
      ],
      "suggested_corpora": ["3D printing forums (Reddit)", "YouTube tutorials", "manufacturer FAQs", "maker blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "lithographic printing plate",
      "queries": [
        "how are offset printing plates made",
        "computer-to-plate (CTP) technology",
        "DE: Offsetdruckplatte-Herstellung",
        "cleaning and storing offset plates",
        "waterless offset printing"
      ],
      "suggested_corpora": ["printing industry trade magazines", "equipment manufacturer websites", "graphic design forums", "technical manuals"],
      "non_en": ["DE"]
    },
    {
      "name": "extrusion die",
      "queries": [
        "aluminum extrusion die design guide",
        "material flow in extrusion dies",
        "ES: diseño de matriz de extrusión",
        "how to clean an extrusion die",
        "polymer extrusion die swell"
      ],
      "suggested_corpora": ["plastics and metals extrusion company websites", "engineering design handbooks", "technical journals", "patent databases"],
      "non_en": ["ES"]
    },
    {
      "name": "sandpaper",
      "queries": [
        "sandpaper grit chart for wood",
        "wet vs dry sanding",
        "FR: guide du grain de papier de verre",
        "what is garnet sandpaper used for",
        "how to clean sandpaper"
      ],
      "suggested_corpora": ["woodworking forums", "auto body repair blogs", "DIY websites", "hardware store product pages"],
      "non_en": ["FR"]
    },
    {
      "name": "anvil",
      "queries": [
        "what is an anvil made of",
        "how to repair anvil face",
        "DE: Amboss-Pflege",
        "blacksmith anvil types",
        "anvil rebound test"
      ],
      "suggested_corpora": ["blacksmithing forums", "YouTube channels", "antique tool websites", "metalworking blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "industrial catalyst bed",
      "queries": [
        "packed bed reactor design",
        "how to regenerate a catalyst bed",
        "ES: regeneración del lecho catalítico",
        "pressure drop in catalyst beds",
        "catalyst support materials list"
      ],
      "suggested_corpora": ["chemical engineering journals", "petrochemical industry manuals", "catalyst manufacturer websites", "university course notes"],
      "non_en": ["ES"]
    },
    {
      "name": "galvanizing tank interior",
      "queries": [
        "hot-dip galvanizing process",
        "what is dross in a galvanizing kettle",
        "FR: entretien de la cuve de galvanisation",
        "kettle life in galvanizing plant",
        "materials for molten zinc containment"
      ],
      "suggested_corpora": ["metal finishing industry websites", "corrosion engineering journals", "plant maintenance forums", "materials handbooks"],
      "non_en": ["FR"]
    },
    {
      "name": "assembly jig",
      "queries": [
        "how to design a welding jig",
        "what is a fixture in manufacturing",
        "DE: Montagevorrichtung-Konstruktion",
        "DIY assembly jig ideas",
        "Poka-yoke jig design"
      ],
      "suggested_corpora": ["manufacturing engineering blogs", "woodworking forums", "YouTube maker channels", "lean manufacturing guides"],
      "non_en": ["DE"]
    },
    {
      "name": "laser cutter bed",
      "queries": [
        "how to clean a laser cutter honeycomb bed",
        "laser cutter vector cutting problems",
        "ES: limpieza de la cama de corte por láser",
        "pin bed vs honeycomb bed laser cutter",
        "preventing flashback on laser cutter"
      ],
      "suggested_corpora": ["laser cutting forums", "maker space wikis", "equipment manuals", "YouTube tutorials"],
      "non_en": ["ES"]
    },
    {
      "name": "rolling mill roller",
      "queries": [
        "cold rolling steel process",
        "surface texturing of rolling mill rollers",
        "FR: texturation de la surface des cylindres de laminoir",
        "roll bite condition in rolling",
        "materials for hot rolling mill rolls"
      ],
      "suggested_corpora": ["metallurgy journals", "steel manufacturing websites", "mechanical engineering textbooks", "industrial equipment catalogs"],
      "non_en": ["FR"]
    },
    {
      "name": "screen printing mesh",
      "queries": [
        "screen printing mesh count guide for t-shirts",
        "how to clean ink out of a silk screen",
        "DE: Siebdruckgewebe reinigen",
        "emulsion application for screen printing",
        "stretching a screen printing frame"
      ],
      "suggested_corpora": ["screen printing supply websites", "DIY t-shirt forums", "YouTube tutorials", "art/craft blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "electroplating cathode",
      "queries": [
        "how to prepare a part for nickel plating",
        "what is the cathode in electroplating",
        "ES: preparación del cátodo para galvanoplastia",
        "current density in copper plating",
        "DIY electroplating setup"
      ],
      "suggested_corpora": ["metal finishing forums", "chemistry education websites", "hobbyist blogs", "industrial manuals"],
      "non_en": ["ES"]
    },
    {
      "name": "sintering furnace hearth",
      "queries": [
        "powder metallurgy sintering process",
        "materials for furnace hearth",
        "FR: matériaux pour sole de four de frittage",
        "walking beam furnace mechanism",
        "sintering of ceramics"
      ],
      "suggested_corpora": ["materials science journals", "industrial furnace manufacturer websites", "ceramics engineering forums", "metallurgy handbooks"],
      "non_en": ["FR"]
    },
    {
      "name": "machine tool ways",
      "queries": [
        "lubrication for machine tool ways",
        "how to scrape slideways for accuracy",
        "DE: Schmierung von Werkzeugmaschinenschlitten",
        "box ways vs linear guides",
        "Turcite application on machine ways"
      ],
      "suggested_corpora": ["machinist forums (Practical Machinist)", "machine tool rebuilder blogs", "lubricant manufacturer datasheets", "YouTube videos"],
      "non_en": ["DE"]
    },
    {
      "name": "drawing die",
      "queries": [
        "wire drawing process explained",
        "materials for wire drawing dies",
        "ES: material de la matriz de trefilado",
        "PCD vs tungsten carbide dies",
        "die wear in wire drawing"
      ],
      "suggested_corpora": ["wire and cable industry magazines", "materials engineering journals", "tooling manufacturer websites", "metallurgy textbooks"],
      "non_en": ["ES"]
    },
    {
      "name": "petri dish",
      "queries": [
        "how to pour agar plates",
        "surface treated vs non-treated petri dish",
        "FR: culture cellulaire en boîte de Petri",
        "sterilizing glass petri dishes",
        "streaking bacteria on agar plate"
      ],
      "suggested_corpora": ["microbiology lab manuals", "YouTube tutorials", "science teacher resources", "lab supply catalogs"],
      "non_en": ["FR"]
    },
    {
      "name": "microscope slide",
      "queries": [
        "how to prepare a blood smear on a microscope slide",
        "what is a frosted end slide for",
        "DE: Mikroskop-Objektträger vorbereiten",
        "cleaning and reusing microscope slides",
        "mounting a specimen on a slide"
      ],
      "suggested_corpora": ["biology lab protocols", "medical technician forums", "microscopy websites", "science supply stores"],
      "non_en": ["DE"]
    },
    {
      "name": "agarose gel",
      "queries": [
        "how to cast an agarose gel for electrophoresis",
        "agarose gel percentage for DNA size",
        "ES: electroforesis en gel de agarosa protocolo",
        "visualizing DNA in agarose gel",
        "agarose vs polyacrylamide gel"
      ],
      "suggested_corpora": ["molecular biology protocol websites (Addgene, NEB)", "YouTube videos", "biotech forums", "university lab manuals"],
      "non_en": ["ES"]
    },
    {
      "name": "fume hood work surface",
      "queries": [
        "fume hood work surface material comparison",
        "how to clean an epoxy resin countertop",
        "FR: matériau de paillasse de sorbonne",
        "chemical resistance chart for lab surfaces",
        "spill containment on fume hood work surface"
      ],
      "suggested_corpora": ["lab design websites", "safety officer manuals", "chemical resistance charts", "lab furniture vendors"],
      "non_en": ["FR"]
    },
    {
      "name": "bioreactor interior",
      "queries": [
        "how to sterilize a bioreactor",
        "cell adhesion problems in bioreactors",
        "DE: Bioreaktor-Sterilisation",
        "materials for bioprocess equipment",
        "single-use bioreactor bag films"
      ],
      "suggested_corpora": ["bioprocess engineering journals", "biotech company websites", "pharmaceutical manufacturing guides", "equipment manuals"],
      "non_en": ["DE"]
    },
    {
      "name": "microtiter plate",
      "queries": [
        "how to use a 96-well microtiter plate",
        "surface coatings for microplates (e.g., poly-D-lysine)",
        "ES: ensayo en microplaca de 96 pozos",
        "ELISA protocol using microtiter plate",
        "black vs clear bottom microplates"
      ],
      "suggested_corpora": ["biotech vendor application notes", "lab protocols", "research papers", "automation equipment manuals"],
      "non_en": ["ES"]
    },
    {
      "name": "lab benchtop",
      "queries": [
        "lab benchtop material pros and cons",
        "epoxy resin vs phenolic resin vs stainless steel lab bench",
        "FR: comparaison des matériaux de paillasse",
        "how to clean chemical spills on lab bench",
        "cost of laboratory countertops"
      ],
      "suggested_corpora": ["lab design and construction websites", "furniture supplier catalogs", "safety manuals", "university procurement documents"],
      "non_en": ["FR"]
    },
    {
      "name": "chromatography column packing",
      "queries": [
        "how to pack a chromatography column",
        "stationary phase selection guide HPLC",
        "DE: stationäre Phase für Chromatographie",
        "channelling in chromatography column",
        "silica gel vs C18 column"
      ],
      "suggested_corpora": ["analytical chemistry journals", "chromatography forums (ChromForum)", "vendor application notes", "lab technique videos"],
      "non_en": ["DE"]
    },
    {
      "name": "sample stub for SEM",
      "queries": [
        "how to prepare a sample for SEM",
        "carbon tape for SEM stubs",
        "ES: preparación de muestras para MEB",
        "sputter coating a sample for SEM",
        "what are SEM stubs made of"
      ],
      "suggested_corpora": ["electron microscopy facility websites", "instrument manuals", "materials science forums", "YouTube tutorials"],
      "non_en": ["ES"]
    },
    {
      "name": "quartz cuvette",
      "queries": [
        "how to clean a quartz cuvette",
        "why use quartz cuvette for UV spec",
        "FR: nettoyage d'une cuvette en quartz",
        "cuvette path length accuracy",
        "disposable vs quartz cuvettes"
      ],
      "suggested_corpora": ["analytical chemistry lab manuals", "instrument FAQs", "research forums", "lab supply websites"],
      "non_en": ["FR"]
    },
    {
      "name": "blotting membrane",
      "queries": [
        "western blot transfer PVDF vs nitrocellulose",
        "how to activate a PVDF membrane",
        "DE: Western-Blot-Membranen",
        "blocking buffer for western blot",
        "dot blot on nitrocellulose membrane"
      ],
      "suggested_corpora": ["biotech company protocols", "molecular biology forums", "research papers", "lab technique blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "test tube",
      "queries": [
        "can you heat a pyrex test tube directly",
        "borosilicate glass vs soda-lime glass test tube",
        "ES: calentar líquidos en un tubo de ensayo",
        "how to properly clean lab test tubes",
        "uses of test tubes in a lab"
      ],
      "suggested_corpora": ["chemistry lab safety manuals", "science education websites", "glassware manufacturer catalogs", "lab technician forums"],
      "non_en": ["ES"]
    },
    {
      "name": "TLC plate",
      "queries": [
        "how to run a TLC plate",
        "how to visualize spots on a TLC plate",
        "FR: révélation d'une plaque CCM",
        "calculating Rf value TLC",
        "silica gel TLC plates with fluorescent indicator"
      ],
      "suggested_corpora": ["organic chemistry lab manuals", "university chemistry websites", "YouTube tutorials", "chemistry blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "glovebox interior",
      "queries": [
        "how to work in a glovebox",
        "maintaining an inert atmosphere in a glovebox",
        "DE: Arbeiten in einer Handschuhbox",
        "materials compatible with glovebox environment",
        "cleaning a glovebox"
      ],
      "suggested_corpora": ["chemistry research groups' websites", "equipment manuals", "materials science forums", "lab safety guides"],
      "non_en": ["DE"]
    },
    {
      "name": "hemocytometer",
      "queries": [
        "how to use a hemocytometer for cell counting",
        "cleaning a Neubauer counting chamber",
        "ES: cómo usar un hemocitómetro",
        "calculating cell concentration with hemocytometer",
        "disposable vs glass hemocytometer"
      ],
      "suggested_corpora": ["cell biology lab protocols", "YouTube tutorials", "biotech vendor websites", "student lab manuals"],
      "non_en": ["ES"]
    },
    {
      "name": "Buchner funnel",
      "queries": [
        "how to set up a Buchner funnel for vacuum filtration",
        "what size filter paper for Buchner funnel",
        "FR: montage d'un entonnoir de Büchner",
        "porcelain vs glass buchner funnel",
        "uses of a Buchner funnel"
      ],
      "suggested_corpora": ["organic chemistry lab manuals", "YouTube videos", "lab glassware supplier websites", "chemistry forums"],
      "non_en": ["FR"]
    },
    {
      "name": "culture flask",
      "queries": [
        "cell culture flask surface treatment explained",
        "T-25 vs T-75 culture flask surface area",
        "DE: Zellkulturflaschen-Oberflächen",
        "adherent vs suspension cell culture flasks",
        "how to avoid contamination in cell culture flask"
      ],
      "suggested_corpora": ["cell culture handbooks", "biotech vendor catalogs", "research lab protocols", "troubleshooting guides"],
      "non_en": ["DE"]
    },
    {
      "name": "autoclave chamber",
      "queries": [
        "how to properly load an autoclave",
        "autoclave sterilization time and temperature",
        "ES: validación de la esterilización en autoclave",
        "materials that cannot be autoclaved",
        "autoclave maintenance checklist"
      ],
      "suggested_corpora": ["lab safety manuals", "equipment operation guides", "CDC guidelines", "microbiology forums"],
      "non_en": ["ES"]
    },
    {
      "name": "centrifuge tube",
      "queries": [
        "how to pellet cells in a centrifuge tube",
        "conical vs round bottom centrifuge tube",
        "FR: culottage de cellules en tube à centrifuger",
        "maximum g-force for polypropylene centrifuge tubes",
        "chemical resistance chart for centrifuge tubes"
      ],
      "suggested_corpora": ["lab protocols", "manufacturer specifications", "research forums", "equipment manuals"],
      "non_en": ["FR"]
    },
    {
      "name": "desiccator plate",
      "queries": [
        "what is a desiccator plate used for",
        "what desiccant to use in a desiccator",
        "DE: Exsikkator-Platte verwenden",
        "porcelain vs plastic desiccator plate",
        "how to use a vacuum desiccator"
      ],
      "suggested_corpora": ["chemistry lab supply websites", "lab technique guides", "chemistry forums", "glassware catalogs"],
      "non_en": ["DE"]
    },
    {
      "name": "silicon wafer",
      "queries": [
        "how to clean a silicon wafer",
        "photolithography on silicon wafer",
        "DE: Siliziumwafer reinigen",
        "Czochralski method for silicon ingot",
        "semiconductor materials selected from the group consisting of silicon"
      ],
      "suggested_corpora": ["semiconductor industry journals", "fabrication lab manuals", "Wikipedia", "patents", "materials science textbooks"],
      "non_en": ["DE"]
    },
    {
      "name": "printed circuit board",
      "queries": [
        "how to solder components on a PCB",
        "FR-4 PCB material properties",
        "FR: soudure de composants sur un PCB",
        "conformal coating for printed circuit boards",
        "PCB design tutorial for beginners"
      ],
      "suggested_corpora": ["electronics hobbyist forums", "YouTube tutorials", "EDA software documentation", "IPC standards"],
      "non_en": ["FR"]
    },
    {
      "name": "sapphire substrate",
      "queries": [
        "GaN on sapphire for LED manufacturing",
        "advantages of sapphire substrate",
        "ES: crecimiento de GaN sobre sustrato de zafiro",
        "polishing sapphire wafers",
        "sapphire vs silicon carbide"
      ],
      "suggested_corpora": ["optoelectronics journals", "semiconductor manufacturer websites", "materials science papers", "technical articles"],
      "non_en": ["ES"]
    },
    {
      "name": "gallium arsenide wafer",
      "queries": [
        "gallium arsenide for RF electronics",
        "handling GaAs wafers safely",
        "DE: Galliumarsenid-Wafer",
        "MBE growth of GaAs thin films",
        "GaAs vs Si for high frequency"
      ],
      "suggested_corpora": ["semiconductor engineering journals", "RF design forums", "safety datasheets", "research papers"],
      "non_en": ["DE"]
    },
    {
      "name": "breadboard",
      "queries": [
        "how to use a solderless breadboard",
        "beginner electronics projects on a breadboard",
        "FR: comment utiliser une platine d'expérimentation",
        "why is my breadboard circuit not working",
        "breadboard power supply rails"
      ],
      "suggested_corpora": ["hobby electronics websites (SparkFun, Adafruit)", "YouTube tutorials", "student lab manuals", "forums"],
      "non_en": ["FR"]
    },
    {
      "name": "flexible circuit",
      "queries": [
        "flexible circuit board materials polyimide",
        "design rules for flex circuits",
        "ES: fabricación de circuitos flexibles",
        "wearable electronics flexible pcb",
        "advantages of flexible printed circuits"
      ],
      "suggested_corpora": ["PCB manufacturer websites", "wearable tech blogs", "electronics design magazines", "product teardowns"],
      "non_en": ["ES"]
    },
    {
      "name": "ceramic substrate",
      "queries": [
        "alumina substrate for power electronics",
        "direct bond copper (DBC) on ceramic",
        "DE: Keramiksubstrat für Leistungselektronik",
        "thermal conductivity of AlN vs Al2O3",
        "thick film hybrid circuits on ceramic"
      ],
      "suggested_corpora": ["power electronics journals", "materials science papers", "substrate manufacturer datasheets", "packaging engineering blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "silicon-on-insulator wafer",
      "queries": [
        "advantages of SOI wafers",
        "FD-SOI vs FinFET technology",
        "FR: avantages des tranches silicium sur isolant (SOI)",
        "Smart Cut technology for SOI",
        "parasitic capacitance reduction with SOI"
      ],
      "suggested_corpora": ["semiconductor industry news", "IEEE publications", "foundry websites", "technical review articles"],
      "non_en": ["FR"]
    },
    {
      "name": "glass substrate for displays",
      "queries": [
        "thin-film transistor (TFT) on glass",
        "Corning Gorilla Glass properties",
        "JP: ディスプレイ用ガラス基板 (disupurei-yō garasu kiban)",
        "LCD manufacturing process glass substrate",
        "alkali-free glass for displays"
      ],
      "suggested_corpora": ["display technology journals", "manufacturer websites (Corning, Asahi Glass)", "market research reports", "consumer electronics news"],
      "non_en": ["JP"]
    },
    {
      "name": "copper clad laminate",
      "queries": [
        "what is FR-4 copper clad laminate",
        "how to etch a copper clad board",
        "DE: kupferkaschiertes Basismaterial für Leiterplatten",
        "DIY PCB making from copper clad",
        "gettering process for CCL"
      ],
      "suggested_corpora": ["PCB fabrication guides", "hobby electronics forums", "material supplier datasheets", "YouTube tutorials"],
      "non_en": ["DE"]
    },
    {
      "name": "indium tin oxide coated glass",
      "queries": [
        "how to pattern ITO coated glass",
        "ITO glass for touch screens",
        "ES: vidrio recubierto de óxido de indio y estaño (ITO)",
        "sheet resistance of ITO films",
        "transparent conductive electrode materials"
      ],
      "suggested_corpora": ["photonics journals", "lab supply websites", "DIY electronics blogs", "materials science papers"],
      "non_en": ["ES"]
    },
    {
      "name": "veroboard",
      "queries": [
        "how to make a circuit on veroboard",
        "veroboard vs perfboard",
        "FR: comment utiliser le veroboard",
        "track cutting tool for stripboard",
        "veroboard layout software"
      ],
      "suggested_corpora": ["vintage electronics blogs", "hobbyist forums", "YouTube tutorials", "electronics project websites"],
      "non_en": ["FR"]
    },
    {
      "name": "interposer",
      "queries": [
        "what is a silicon interposer in 2.5D packaging",
        "interposer technology for chiplets",
        "DE: Interposer-Technologie",
        "through-silicon via (TSV) interposer",
        "organic vs silicon interposer"
      ],
      "suggested_corpora": ["semiconductor packaging journals", "industry news sites (EETimes)", "foundry presentations", "IEEE papers"],
      "non_en": ["DE"]
    },
    {
      "name": "dielectric film",
      "queries": [
        "low-k dielectric materials for interconnects",
        "PECVD of silicon nitride dielectric film",
        "ES: deposición de película dieléctrica",
        "gate dielectric in MOSFET",
        "thin film capacitor dielectric materials"
      ],
      "suggested_corpora": ["semiconductor processing textbooks", "materials science journals", "equipment manufacturer notes", "research papers"],
      "non_en": ["ES"]
    },
    {
      "name": "leadframe",
      "queries": [
        "what is a leadframe in IC packaging",
        "stamped vs etched leadframes",
        "FR: conception de grille de connexion de circuit intégré",
        "QFN package leadframe design",
        "copper alloys for leadframes"
      ],
      "suggested_corpora": ["semiconductor packaging companies", "materials suppliers", "electronics engineering forums", "Wikipedia"],
      "non_en": ["FR"]
    },
    {
      "name": "BGA substrate",
      "queries": [
        "ball grid array (BGA) substrate manufacturing",
        "via-in-pad for BGA substrates",
        "DE: BGA-Substrat Herstellungsprozess",
        "build-up film for BGA substrates",
        "BGA package assembly process"
      ],
      "suggested_corpora": ["PCB manufacturing websites", "IC packaging handbooks", "assembly service providers", "technical articles"],
      "non_en": ["DE"]
    },
    {
      "name": "photoresist layer",
      "queries": [
        "how to spin coat photoresist on a wafer",
        "positive vs negative photoresist",
        "ES: aplicación de fotorresina sobre una oblea",
        "photoresist developing process",
        "SU-8 photoresist applications"
      ],
      "suggested_corpora": ["microfabrication lab manuals", "lithography equipment guides", "chemistry/materials science papers", "supplier application notes"],
      "non_en": ["ES"]
    },
    {
      "name": "silicon carbide wafer",
      "queries": [
        "silicon carbide for power electronics",
        "SiC vs GaN for high power applications",
        "FR: tranche de carbure de silicium pour dispositifs de puissance",
        "advantages of SiC MOSFETs",
        "crystal growth of silicon carbide wafers"
      ],
      "suggested_corpora": ["power electronics magazines", "semiconductor industry news", "materials science journals", "manufacturer websites"],
      "non_en": ["FR"]
    },
    {
      "name": "wire wrap board",
      "queries": [
        "how to do wire wrapping for electronics",
        "wire wrap tools and techniques",
        "DE: Wire-Wrap-Technik",
        "Apollo guidance computer wire wrap",
        "wire wrap vs soldering"
      ],
      "suggested_corpora": ["vintage computing blogs", "hobbyist electronics forums", "NASA history documents", "YouTube tutorials"],
      "non_en": ["DE"]
    },
    {
      "name": "metal core PCB",
      "queries": [
        "metal core pcb for high power LEDs",
        "thermal management with MCPCB",
        "ES: PCB con núcleo de metal para LEDs",
        "advantages of aluminum core PCB",
        "designing with metal core printed circuit boards"
      ],
      "suggested_corpora": ["LED lighting design blogs", "PCB manufacturer websites", "thermal engineering articles", "electronics design forums"],
      "non_en": ["ES"]
    },
    {
      "name": "lens surface",
      "queries": [
        "how to apply anti-reflective coating to a lens",
        "best way to clean camera lens surface",
        "DE: Objektiv-Vergütung auftragen",
        "lens polishing techniques",
        "molded glass aspheric lenses"
      ],
      "suggested_corpora": ["optics manufacturing websites", "photography forums", "amateur telescope making guides", "thin film coating papers"],
      "non_en": ["DE"]
    },
    {
      "name": "mirror surface",
      "queries": [
        "how to clean a first surface mirror",
        "dielectric vs aluminum mirror coating",
        "FR: nettoyage de miroir de première surface",
        "telescope mirror silvering process",
        "what is a cold mirror"
      ],
      "suggested_corpora": ["astronomy forums", "optics supplier websites", "lab equipment manuals", "DIY science blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "diffraction grating",
      "queries": [
        "how does a diffraction grating work",
        "ruled vs holographic grating",
        "ES: cómo funciona una red de difracción",
        "DIY spectrometer with diffraction grating",
        "blazed grating efficiency"
      ],
      "suggested_corpora": ["physics education websites", "optics textbooks", "spectroscopy forums", "hobbyist science blogs"],
      "non_en": ["ES"]
    },
    {
      "name": "image sensor",
      "queries": [
        "how does a CMOS image sensor work",
        "microlens array on image sensor",
        "DE: CMOS-Bildsensor-Funktionsweise",
        "Bayer filter on color image sensor",
        "CCD vs CMOS sensor pros and cons"
      ],
      "suggested_corpora": ["photography websites (e.g., DPReview)", "camera manufacturer white papers", "electronics engineering journals", "Wikipedia"],
      "non_en": ["DE"]
    },
    {
      "name": "optical fiber core",
      "queries": [
        "light transmission in optical fiber core",
        "single-mode vs multi-mode fiber",
        "FR: transmission de la lumière dans le cœur de la fibre optique",
        "how is optical fiber made",
        "dopants used in optical fiber core"
      ],
      "suggested_corpora": ["telecom engineering websites", "fiber optics manufacturer guides", "physics textbooks", "how-it's-made videos"],
      "non_en": ["FR"]
    },
    {
      "name": "polycarbonate visor",
      "queries": [
        "anti-fog coating for polycarbonate visor",
        "how to clean a Lexan face shield",
        "ES: recubrimiento antivaho para visor de policarbonato",
        "scratch resistance of polycarbonate",
        "can you paint a motorcycle helmet visor"
      ],
      "suggested_corpora": ["motorcycle forums", "sports equipment manuals", "PPE supplier websites", "DIY blogs"],
      "non_en": ["ES"]
    },
    {
      "name": "eyeglass lens",
      "queries": [
        "eyeglass lens coatings explained (anti-glare, UV)",
        "polycarbonate vs Trivex vs high-index lenses",
        "DE: Brillenglas-Beschichtungen erklärt",
        "how to get scratches out of eyeglasses",
        "photochromic lens technology"
      ],
      "suggested_corpora": ["optician and optometrist websites", "consumer health blogs", "lens manufacturer sites (Essilor, Zeiss)", "forums"],
      "non_en": ["DE"]
    },
    {
      "name": "holographic plate",
      "queries": [
        "how to make a hologram with a holographic plate",
        "dichromated gelatin for holography",
        "FR: réaliser un hologramme avec une plaque holographique",
        "silver halide vs photopolymer plates",
        "holographic data storage media"
      ],
      "suggested_corpora": ["holography forums", "DIY science websites", "optics journals", "art and technology blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "dichroic filter",
      "queries": [
        "how are dichroic filters made",
        "dichroic filter for stage lighting",
        "ES: aplicaciones de los filtros dicroicos",
        "thin film interference filters",
        "dichroic glass jewelry making"
      ],
      "suggested_corpora": ["optics manufacturer websites", "stage lighting design forums", "glass art blogs", "photonics handbooks"],
      "non_en": ["ES"]
    },
    {
      "name": "fresnel lens",
      "queries": [
        "how does a fresnel lens work",
        "fresnel lens in a lighthouse",
        "DE: Fresnel-Linse Anwendungen",
        "DIY solar concentrator with fresnel lens",
        "molded plastic fresnel lens"
      ],
      "suggested_corpora": ["physics websites", "maritime history blogs", "DIY solar forums", "optics supplier catalogs"],
      "non_en": ["DE"]
    },
    {
      "name": "solar cell surface",
      "queries": [
        "how to improve solar cell efficiency",
        "anti-reflective coating for photovoltaic cells",
        "FR: amélioration de l'efficacité des cellules solaires",
        "texturing of silicon solar cell surface",
        "perovskite solar cell layers"
      ],
      "suggested_corpora": ["renewable energy journals", "solar power blogs", "materials science papers", "manufacturer datasheets"],
      "non_en": ["FR"]
    },
    {
      "name": "retroreflector",
      "queries": [
        "how do retroreflectors work",
        "corner cube vs spherical bead retroreflectors",
        "ES: cómo funcionan los retrorreflectores",
        "retroreflective tape for clothing",
        "lunar laser ranging retroreflector array"
      ],
      "suggested_corpora": ["physics and optics websites", "safety equipment standards", "NASA mission pages", "cycling/running gear blogs"],
      "non_en": ["ES"]
    },
    {
      "name": "LCD panel",
      "queries": [
        "how an LCD panel works layers",
        "liquid crystal display technology explained",
        "DE: LCD-Panel-Aufbau",
        "polarizing films in an LCD",
        "what is an IPS panel"
      ],
      "suggested_corpora": ["consumer electronics review sites", "how-stuff-works websites", "display technology articles", "YouTube teardown videos"],
      "non_en": ["DE"]
    },
    {
      "name": "integrating sphere wall",
      "queries": [
        "integrating sphere theory and applications",
        "what material is used for integrating sphere wall",
        "FR: théorie de la sphère d'intégration",
        "barium sulfate coating for integrating sphere",
        "measuring total luminous flux"
      ],
      "suggested_corpora": ["optical metrology handbooks", "instrument manufacturer websites", "photonics journals", "lab procedure guides"],
      "non_en": ["FR"]
    },
    {
      "name": "beam splitter",
      "queries": [
        "how does a beam splitter work",
        "pellicle vs cube beam splitter",
        "ES: cómo funciona un divisor de haz",
        "50/50 beam splitter applications",
        "polarizing beam splitter"
      ],
      "suggested_corpora": ["optics tutorials", "lab equipment supplier websites", "interferometry articles", "photonics forums"],
      "non_en": ["ES"]
    },
    {
      "name": "prism",
      "queries": [
        "light dispersion through a prism",
        "how to use a prism spectrometer",
        "DE: Prisma-Lichtbrechung",
        "Abbe prism vs Amici prism",
        "Pink Floyd prism album cover"
      ],
      "suggested_corpora": ["physics education sites", "optics textbooks", "music culture blogs", "Wikipedia"],
      "non_en": ["DE"]
    },
    {
      "name": "optical flat",
      "queries": [
        "how to use an optical flat to test flatness",
        "interpreting interference fringes on optical flat",
        "FR: test de planéité avec un plan optique",
        "monochromatic light source for optical flat",
        "lapping a surface with an optical flat"
      ],
      "suggested_corpora": ["machinist forums", "metrology handbooks", "YouTube tutorials", "tool supplier websites"],
      "non_en": ["FR"]
    },
    {
      "name": "phosphor screen",
      "queries": [
        "how does a CRT phosphor screen work",
        "P22 phosphor screen color",
        "ES: cómo funciona una pantalla de fósforo",
        "phosphors for white LEDs",
        "what is cathodoluminescence"
      ],
      "suggested_corpora": ["vintage electronics repair blogs", "display technology articles", "materials science papers", "chemistry websites"],
      "non_en": ["ES"]
    },
    {
      "name": "laser crystal",
      "queries": [
        "Nd:YAG laser crystal properties",
        "what is a gain medium in a laser",
        "DE: Laserkristall-Eigenschaften",
        "how to grow a laser crystal",
        "titanium-sapphire laser crystal"
      ],
      "suggested_corpora": ["laser engineering textbooks", "photonics supplier websites", "solid-state physics journals", "hobbyist laser forums"],
      "non_en": ["DE"]
    },
    {
      "name": "moth eye film",
      "queries": [
        "moth eye anti-reflection film",
        "nanostructured anti-reflective surfaces",
        "FR: film antireflet œil de mite",
        "biomimicry of moth eye structure",
        "how to make moth eye film"
      ],
      "suggested_corpora": ["materials science news", "biomimicry websites", "optics journals", "patent applications"],
      "non_en": ["FR"]
    },
    {
      "name": "membrane filter",
      "queries": [
        "sterile filtration using 0.22 micron membrane filter",
        "nylon vs PTFE membrane filter compatibility",
        "DE: Membranfilter-Porengröße",
        "how to perform a filter integrity test",
        "membrane fouling causes"
      ],
      "suggested_corpora": ["pharmaceutical manufacturing guides", "lab supply catalogs", "water treatment journals", "biotech protocols"],
      "non_en": ["DE"]
    },
    {
      "name": "activated carbon",
      "queries": [
        "how does activated carbon filter water",
        "adsorption on activated charcoal",
        "FR: charbon actif pour la purification de l'eau",
        "how to reactivate activated carbon",
        "granular vs powdered activated carbon"
      ],
      "suggested_corpora": ["water treatment websites", "aquarium forums", "chemistry education sites", "environmental engineering papers"],
      "non_en": ["FR"]
    },
    {
      "name": "HEPA filter",
      "queries": [
        "what is a HEPA filter made of",
        "HEPA vs ULPA filter standards",
        "ES: de qué está hecho un filtro HEPA",
        "how often to change HEPA filter in air purifier",
        "do HEPA filters stop viruses"
      ],
      "suggested_corpora": ["air purifier review websites", "cleanroom technology manuals", "public health sites (CDC, EPA)", "engineering standards organizations"],
      "non_en": ["ES"]
    },
    {
      "name": "ceramic water filter",
      "queries": [
        "how do ceramic water filters work",
        "DIY bucket water filter with ceramic element",
        "DE: Keramik-Wasserfilter-Funktion",
        "cleaning a ceramic water filter candle",
        "ceramic vs activated carbon filters"
      ],
      "suggested_corpora": ["humanitarian aid/NGO websites", "prepper/survivalist blogs", "public health guides", "product manuals"],
      "non_en": ["DE"]
    },
    {
      "name": "zeolite",
      "queries": [
        "zeolite as a molecular sieve",
        "using zeolite in cat litter",
        "FR: zéolithe pour tamisage moléculaire",
        "zeolite for laundry",
        "natural vs synthetic zeolites"
      ],
      "suggested_corpora": ["chemistry textbooks", "consumer product websites", "aquarium/pond forums", "materials science journals"],
      "non_en": ["FR"]
    },
    {
      "name": "geotextile fabric",
      "queries": [
        "using geotextile fabric for French drain",
        "non-woven vs woven geotextile for separation",
        "ES: geotextil para drenaje",
        "geotextile under pavers",
        "geotextile material properties"
      ],
      "suggested_corpora": ["landscaping blogs", "civil engineering supplier websites", "DIY forums", "construction manuals"],
      "non_en": ["ES"]
    },
    {
      "name": "sintered metal filter",
      "queries": [
        "sintered metal filter for high temperature gas",
        "porosity of sintered bronze filters",
        "DE: Sintermetallfilter-Anwendungen",
        "how to clean a sintered metal filter",
        "sintered stainless steel sparger"
      ],
      "suggested_corpora": ["industrial filtration catalogs", "chemical engineering forums", "powder metallurgy journals", "pneumatics suppliers"],
      "non_en": ["DE"]
    },
    {
      "name": "dialysis membrane",
      "queries": [
        "how does a dialysis membrane work",
        "molecular weight cut-off (MWCO) explained",
        "FR: membrane de dialyse pour la purification des protéines",
        "regenerated cellulose vs polyethersulfone dialysis tubing",
        "buffer exchange by dialysis"
      ],
      "suggested_corpora": ["biochemistry lab manuals", "biotech vendor protocols", "medical device websites", "research papers"],
      "non_en": ["FR"]
    },
    {
      "name": "sand filter bed",
      "queries": [
        "how does a slow sand filter work",
        "schmutzdecke biofilm layer in sand filters",
        "ES: diseño de lecho filtrante de arena",
        "sand size for pool filter",
        "rapid sand filtration process in water treatment"
      ],
      "suggested_corpora": ["water treatment plant manuals", "pool maintenance forums", "public health engineering guides", "environmental science textbooks"],
      "non_en": ["ES"]
    },
    {
      "name": "coffee filter paper",
      "queries": [
        "bleached vs unbleached coffee filters taste",
        "what is coffee filter paper made of",
        "DE: Kaffeefilter-Papier Material",
        "Melitta vs Hario V60 paper filters",
        "DIY coffee filter alternatives"
      ],
      "suggested_corpora": ["coffee enthusiast blogs", "consumer review sites", "paper manufacturing websites", "barista forums"],
      "non_en": ["DE"]
    },
    {
      "name": "silica gel",
      "queries": [
        "how to use silica gel packets to dry things",
        "can you recharge silica gel in oven",
        "FR: sachets déshydratants de gel de silice",
        "blue indicating silica gel health risk",
        "adsorption capacity of silica gel"
      ],
      "suggested_corpora": ["life hack blogs", "chemistry forums", "product packaging", "museum conservation guides"],
      "non_en": ["FR"]
    },
    {
      "name": "cheesecloth",
      "queries": [
        "what grade cheesecloth for straining stock",
        "how to make ghee using cheesecloth",
        "ES: usar estameña para colar yogur",
        "cheesecloth alternatives",
        "making cheese curds with cheesecloth"
      ],
      "suggested_corpora": ["cooking blogs", "cheesemaking forums", "kitchen supply websites", "DIY recipe sites"],
      "non_en": ["ES"]
    },
    {
      "name": "fritted glass",
      "queries": [
        "fritted glass for gas dispersion in lab",
        "how to clean a fritted glass funnel",
        "DE: Glasfritte-Porosität",
        "coarse vs fine fritted disc",
        "what is a gas washing bottle"
      ],
      "suggested_corpora": ["lab glassware catalogs", "chemistry lab technique videos", "research forums", "university websites"],
      "non_en": ["DE"]
    },
    {
      "name": "perlite",
      "queries": [
        "why add perlite to potting soil",
        "perlite vs vermiculite for gardening",
        "FR: perlite pour l'aération du sol",
        "dangers of inhaling perlite dust",
        "perlite as insulation"
      ],
      "suggested_corpora": ["gardening blogs", "hydroponics forums", "construction material datasheets", "safety manuals"],
      "non_en": ["FR"]
    },
    {
      "name": "reverse osmosis membrane",
      "queries": [
        "how does a reverse osmosis membrane work",
        "reverse osmosis membrane fouling and cleaning",
        "ES: membrana de ósmosis inversa para desalinización",
        "thin film composite RO membrane",
        "how often to replace RO membrane"
      ],
      "suggested_corpora": ["water filter manufacturer websites", "desalination industry journals", "plumbing forums", "chemistry textbooks"],
      "non_en": ["ES"]
    },
    {
      "name": "aerogel",
      "queries": [
        "what is aerogel insulation",
        "how to make aerogel at home",
        "DE: Aerogel-Herstellung",
        "properties of silica aerogel",
        "aerogel in space applications (Stardust mission)"
      ],
      "suggested_corpora": ["materials science websites", "NASA tech briefs", "chemistry blogs", "YouTube science channels"],
      "non_en": ["DE"]
    },
    {
      "name": "cigarette filter",
      "queries": [
        "what are cigarette filters made of",
        "cellulose acetate tow in filters",
        "FR: composition du filtre de cigarette",
        "do cigarette filters actually work",
        "environmental impact of cigarette butts"
      ],
      "suggested_corpora": ["public health websites", "tobacco industry documents", "environmental science articles", "chemistry blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "breather fabric",
      "queries": [
        "how does Gore-Tex fabric work",
        "ePTFE membrane structure",
        "ES: tejido transpirable e impermeable",
        "DWR coating on waterproof jackets",
        "breathability vs waterproof rating"
      ],
      "suggested_corpora": ["outdoor gear review websites (e.g., OutdoorGearLab)", "manufacturer blogs (Gore-Tex)", "textile science journals", "hiking forums"],
      "non_en": ["ES"]
    },
    {
      "name": "catalytic converter monolith",
      "queries": [
        "how does a catalytic converter work",
        "what precious metals are in a catalytic converter",
        "DE: Katalysator-Monolith",
        "ceramic honeycomb monolith manufacturing",
        "catalytic converter washcoat composition"
      ],
      "suggested_corpora": ["automotive repair websites", "how-it-works sites", "chemistry articles", "scrap metal recycling forums"],
      "non_en": ["DE"]
    },
    {
      "name": "oil filter medium",
      "queries": [
        "synthetic vs cellulose oil filter media",
        "what is inside an engine oil filter",
        "FR: milieu filtrant pour filtre à huile moteur",
        "oil filter efficiency rating (ISO 4548-12)",
        "how an oil filter bypass valve works"
      ],
      "suggested_corpora": ["automotive maintenance forums", "filter manufacturer websites (Wix, Fram)", "YouTube teardown videos", "engineering standards"],
      "non_en": ["FR"]
    },
    {
      "name": "ship hull",
      "queries": [
        "how does antifouling paint work on a ship hull",
        "problems with biofouling on ship hulls",
        "ES: pintura antiincrustante para el casco del barco",
        "materials used for ship construction",
        "cathodic protection for steel hulls"
      ],
      "suggested_corpora": ["maritime industry magazines", "boat owner forums", "paint manufacturer websites", "corrosion engineering journals"],
      "non_en": ["ES"]
    },
    {
      "name": "aircraft wing",
      "queries": [
        "how does ice form on an aircraft wing",
        "laminar flow airfoil design",
        "DE: Vereisung von Flugzeugtragflächen",
        "aircraft deicing systems explained",
        "what are winglets for"
      ],
      "suggested_corpora": ["aviation safety websites (FAA, EASA)", "aerospace engineering textbooks", "pilot forums", "aerodynamics tutorials"],
      "non_en": ["DE"]
    },
    {
      "name": "car tire tread",
      "queries": [
        "car tire tread wear patterns meaning",
        "how is a car tire made",
        "FR: usure de la bande de roulement des pneus de voiture",
        "all-season vs winter tire tread design",
        "what is tire siping"
      ],
      "suggested_corpora": ["tire manufacturer websites (Michelin, Goodyear)", "auto repair blogs", "car enthusiast forums", "consumer reports"],
      "non_en": ["FR"]
    },
    {
      "name": "rocket nozzle",
      "queries": [
        "rocket nozzle cooling methods",
        "de Laval nozzle explained",
        "ES: materiales para toberas de cohetes",
        "ablative materials for rocket nozzles",
        "bell nozzle vs aerospike nozzle"
      ],
      "suggested_corpora": ["aerospace engineering forums", "NASA technical reports", "rocketry hobbyist websites", "space exploration news"],
      "non_en": ["ES"]
    },
    {
      "name": "spacecraft heat shield",
      "queries": [
        "how do spacecraft heat shields work",
        "PICA tile heat shield material",
        "DE: Hitzeschild-Materialien für Raumfahrzeuge",
        "ablative vs reusable heat shields",
        "Space Shuttle heat shield tiles"
      ],
      "suggested_corpora": ["NASA websites", "space enthusiast blogs (NASASpaceFlight)", "materials science articles", "aerospace engineering papers"],
      "non_en": ["DE"]
    },
    {
      "name": "helicopter rotor blade",
      "queries": [
        "helicopter blade erosion protection tape",
        "materials for helicopter rotor blades (composite)",
        "FR: érosion des pales de rotor d'hélicoptère",
        "how do helicopter blades generate lift",
        "leading edge erosion on blades"
      ],
      "suggested_corpora": ["aviation maintenance forums", "helicopter manufacturer websites", "aerospace materials journals", "pilot training manuals"],
      "non_en": ["FR"]
    },
    {
      "name": "automobile paintwork",
      "queries": [
        "how to apply ceramic coating to car paint",
        "what are the layers of car paint",
        "ES: pulir la pintura del coche",
        "how to fix scratches in car clear coat",
        "orange peel in car paint"
      ],
      "suggested_corpora": ["car detailing forums", "auto body repair websites", "YouTube tutorials", "paint manufacturer blogs"],
      "non_en": ["ES"]
    },
    {
      "name": "submarine hull",
      "queries": [
        "what are submarine hulls made of",
        "how do anechoic tiles on submarines work",
        "DE: Antischallkacheln für U-Boote",
        "crush depth of a submarine",
        "HY-80 steel for submarine hulls"
      ],
      "suggested_corpora": ["naval technology websites", "military history forums", "materials engineering articles", "documentaries"],
      "non_en": ["DE"]
    },
    {
      "name": "brake pad",
      "queries": [
        "ceramic vs metallic brake pads pros and cons",
        "what are brake pads made of",
        "FR: composition du matériau de friction des plaquettes de frein",
        "how to change brake pads",
        "what is brake fade"
      ],
      "suggested_corpora": ["auto repair forums", "car maintenance blogs", "parts supplier websites", "YouTube tutorials"],
      "non_en": ["FR"]
    },
    {
      "name": "train wheel",
      "queries": [
        "train wheel flange wear",
        "what is rail-wheel adhesion",
        "ES: contacto rueda-carril",
        "how are train wheels made",
        "hunting oscillation of railway wheels"
      ],
      "suggested_corpora": ["railway engineering journals", "train enthusiast forums", "mechanical engineering textbooks", "transportation safety board reports"],
      "non_en": ["ES"]
    },
    {
      "name": "propeller blade",
      "queries": [
        "cavitation damage on marine propeller blades",
        "what are boat propellers made of",
        "DE: Propeller-Kavitation",
        "propeller pitch explained",
        "how to repair a damaged propeller"
      ],
      "suggested_corpora": ["boating forums", "marine engineering websites", "propeller manufacturer catalogs", "DIY repair blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "radiator fins",
      "queries": [
        "how to clean car radiator fins",
        "bent radiator fins repair",
        "FR: conception des ailettes de radiateur pour le transfert de chaleur",
        "purpose of fins on a heat sink",
        "aluminum vs copper radiators"
      ],
      "suggested_corpora": ["car repair forums", "computer hardware forums (for heat sinks)", "HVAC maintenance guides", "thermodynamics tutorials"],
      "non_en": ["FR"]
    },
    {
      "name": "windshield",
      "queries": [
        "how to apply hydrophobic coating to windshield",
        "can you repair a long crack in a windshield",
        "ES: reparar un piquete en el parabrisas",
        "what is laminated glass",
        "how do rain-sensing wipers work"
      ],
      "suggested_corpora": ["auto glass repair websites", "car detailing blogs", "product manuals", "how-it-works sites"],
      "non_en": ["ES"]
    },
    {
      "name": "ball bearing race",
      "queries": [
        "what material are ball bearing races made of",
        "bearing steel heat treatment process",
        "DE: Kugellager-Laufring Material",
        "bearing race failure analysis",
        "honing a bearing race"
      ],
      "suggested_corpora": ["mechanical engineering forums", "bearing manufacturer catalogs (SKF, Timken)", "tribology journals", "maintenance handbooks"],
      "non_en": ["DE"]
    },
    {
      "name": "engine cylinder wall",
      "queries": [
        "how to perform cylinder wall honing",
        "what is piston ring lubrication",
        "FR: rodage de la paroi du cylindre de moteur",
        "cylinder wall glazing",
        "plasma-transferred wire arc (PTWA) cylinder lining"
      ],
      "suggested_corpora": ["engine building forums", "auto repair manuals", "tribology articles", "automotive engineering magazines"],
      "non_en": ["FR"]
    },
    {
      "name": "landing gear strut",
      "queries": [
        "how does an oleo strut work",
        "materials for aircraft landing gear",
        "ES: materiales del tren de aterrizaje",
        "landing gear strut maintenance",
        "titanium vs steel for landing gear"
      ],
      "suggested_corpora": ["aviation maintenance textbooks", "aerospace engineering forums", "aircraft mechanic blogs", "manufacturer manuals"],
      "non_en": ["ES"]
    },
    {
      "name": "de-icing boot",
      "queries": [
        "how does a pneumatic de-icing boot work",
        "applying sealant to aircraft de-icing boots",
        "DE: Enteisungsanlage-Funktion",
        "repairing a de-icing boot",
        "ice protection systems for aircraft"
      ],
      "suggested_corpora": ["aircraft owner forums", "aviation maintenance manuals", "pilot training guides", "aerospace supplier websites"],
      "non_en": ["DE"]
    },
    {
      "name": "vehicle underbody",
      "queries": [
        "best underbody coating for rust prevention",
        "how to clean vehicle underbody",
        "FR: revêtement de soubassement pour voitures",
        "fluid film vs rubberized undercoating",
        "aerodynamics of vehicle underbody"
      ],
      "suggested_corpora": ["car detailing forums", "automotive repair websites", "4x4/off-road forums", "product review sites"],
      "non_en": ["FR"]
    },
    {
      "name": "turbine blade",
      "queries": [
        "thermal barrier coating for turbine blades",
        "what are jet engine turbine blades made of (superalloys)",
        "ES: recubrimiento de barrera térmica para álabes de turbina",
        "single crystal turbine blade manufacturing",
        "turbine blade cooling techniques"
      ],
      "suggested_corpora": ["aerospace engineering journals", "power generation industry websites", "materials science papers", "gas turbine manufacturer blogs"],
      "non_en": ["ES"]
    },
    {
      "name": "dashboard",
      "queries": [
        "how to repair a cracked dashboard",
        "best protectant for car dashboard to prevent fading",
        "DE: Armaturenbrett reinigen",
        "what are car dashboards made of (TPO, PVC)",
        "how to stop dashboard glare"
      ],
      "suggested_corpora": ["car detailing forums", "auto repair blogs", "DIY websites", "product review sites"],
      "non_en": ["DE"]
    },
    {
      "name": "cutting board",
      "queries": [
        "how to disinfect a wooden cutting board",
        "wood vs plastic cutting board food safety",
        "JP: まな板の除菌方法 (manaita no jokin hōhō)",
        "best oil for wood cutting board",
        "end grain vs edge grain cutting board"
      ],
      "suggested_corpora": ["cooking blogs", "food safety websites", "woodworking forums", "kitchen supply stores"],
      "non_en": ["JP"]
    },
    {
      "name": "cast iron skillet",
      "queries": [
        "how to season a cast iron skillet",
        "how to restore a rusty cast iron pan",
        "DE: Gusseisenpfanne einbrennen",
        "what is polymerized oil seasoning",
        "cooking with cast iron pros and cons"
      ],
      "suggested_corpora": ["cooking forums (Reddit's r/castiron)", "YouTube tutorials", "food blogs", "home goods websites"],
      "non_en": ["DE"]
    },
    {
      "name": "stainless steel countertop",
      "queries": [
        "how to clean stainless steel countertops without streaking",
        "stainless steel countertop gauge thickness",
        "FR: épaisseur du comptoir en acier inoxydable",
        "getting scratches out of stainless steel",
        "brushed vs polished stainless steel finish"
      ],
      "suggested_corpora": ["kitchen design blogs", "commercial kitchen supply websites", "homeowner forums", "cleaning guides"],
      "non_en": ["FR"]
    },
    {
      "name": "bread baking stone",
      "queries": [
        "how to use a baking stone for pizza",
        "how to clean a stained pizza stone",
        "ES: cómo usar una piedra para hornear pan",
        "baking stone vs baking steel",
        "preventing thermal shock in baking stones"
      ],
      "suggested_corpora": ["baking forums (The Fresh Loaf)", "cooking blogs", "product reviews", "YouTube channels"],
      "non_en": ["ES"]
    },
    {
      "name": "wine barrel interior",
      "queries": [
        "what does toasting a wine barrel do",
        "oak lactones and wine flavor",
        "DE: Weinfass-Toasting",
        "aging wine in new vs neutral oak barrels",
        "how are wine barrels made"
      ],
      "suggested_corpora": ["winemaking magazines", "sommelier blogs", "cooperage websites", "oenology journals"],
      "non_en": ["DE"]
    },
    {
      "name": "butcher block",
      "queries": [
        "how to oil a butcher block countertop",
        "end grain vs edge grain butcher block",
        "FR: bloc de boucher en bois de bout ou de fil",
        "sanding and refinishing a butcher block",
        "food safe finish for butcher block"
      ],
      "suggested_corpora": ["woodworking forums", "kitchen design websites", "DIY blogs", "food safety sites"],
      "non_en": ["FR"]
    },
    {
      "name": "non-stick coating",
      "queries": [
        "is scratched Teflon coating dangerous",
        "how are non-stick pans made",
        "IT: rivestimento antiaderente graffiato",
        "ceramic vs Teflon non-stick coating",
        "PTFE and PFOA explained"
      ],
      "suggested_corpora": ["public health websites", "consumer reports", "cookware blogs", "chemistry websites"],
      "non_en": ["IT"]
    },
    {
      "name": "cheese aging rack",
      "queries": [
        "what kind of wood for cheese aging racks",
        "how to prevent mold on cheese shelves",
        "DE: Käserinde-Entwicklung auf Horden",
        "building a cheese cave",
        "blue cheese mold development"
      ],
      "suggested_corpora": ["cheesemaking forums", "affineur (cheese aging) blogs", "artisan food websites", "dairy science papers"],
      "non_en": ["DE"]
    },
    {
      "name": "fermentation crock",
      "queries": [
        "how to make sauerkraut in a fermentation crock",
        "what is a water sealed fermentation crock",
        "FR: fermentation de légumes en pot en grès",
        "cleaning a ceramic crock",
        "Lactobacillus on ceramic surfaces"
      ],
      "suggested_corpora": ["fermentation blogs", "DIY food websites", "pottery/ceramics forums", "microbiology articles"],
      "non_en": ["FR"]
    },
    {
      "name": "marble slab",
      "queries": [
        "using a marble slab for tempering chocolate",
        "how to keep a marble slab cold for pastry",
        "IT: temperaggio del cioccolato su lastra di marmo",
        "cleaning a marble pastry board",
        "why do confectioners use marble"
      ],
      "suggested_corpora": ["pastry chef blogs", "chocolate making forums", "cooking school websites", "kitchen supply reviews"],
      "non_en": ["IT"]
    },
    {
      "name": "sushi mat",
      "queries": [
        "how to use a bamboo sushi mat (makisu)",
        "how to clean a makisu",
        "JP: 巻き簾の使い方 (makisu no tsukaikata)",
        "sushi rice sticking to bamboo mat",
        "plastic vs bamboo sushi mat"
      ],
      "suggested_corpora": ["Japanese cooking blogs", "YouTube tutorials", "sushi chef forums", "kitchen gadget review sites"],
      "non_en": ["JP"]
    },
    {
      "name": "grill grate",
      "queries": [
        "how to season cast iron grill grates",
        "how to clean stainless steel grill grates",
        "DE: Grillrost einbrennen",
        "porcelain-coated vs cast iron grates",
        "preventing food from sticking to grill"
      ],
      "suggested_corpora": ["BBQ forums", "grill manufacturer websites", "cooking blogs", "YouTube videos"],
      "non_en": ["DE"]
    },
    {
      "name": "proofing basket",
      "queries": [
        "how to use a banneton proofing basket",
        "how to flour a proofing basket to prevent sticking",
        "FR: utilisation d'un panier de fermentation (banneton)",
        "cane vs wood pulp banneton",
        "sourdough bread shaping with banneton"
      ],
      "suggested_corpora": ["sourdough baking blogs (The Perfect Loaf)", "baking forums", "bakery supply websites", "YouTube tutorials"],
      "non_en": ["FR"]
    },
    {
      "name": "meat hook",
      "queries": [
        "how to hang a carcass for dry aging",
        "stainless steel vs galvanized meat hooks",
        "IT: ganci da macellaio per frollatura",
        "butcher shop equipment list",
        "cleaning and sanitizing meat hooks"
      ],
      "suggested_corpora": ["butcher forums", "hunting blogs", "restaurant supply websites", "food safety manuals"],
      "non_en": ["IT"]
    },
    {
      "name": "rice paper",
      "queries": [
        "how to use rice paper wrappers for spring rolls",
        "my rice paper keeps tearing",
        "JP: ライスペーパーの使い方 (raisu pēpā no tsukaikata)",
        "what is edible rice paper made of",
        "fried vs fresh spring roll wrappers"
      ],
      "suggested_corpora": ["Vietnamese cooking blogs", "recipe websites", "YouTube tutorials", "Asian grocery store product pages"],
      "non_en": ["JP"]
    },
    {
      "name": "sausage casing",
      "queries": [
        "natural vs collagen sausage casings",
        "how to prepare hog casings for stuffing",
        "DE: Wurstdarm-Arten",
        "vegetarian sausage casings",
        "problems with sausage casings bursting"
      ],
      "suggested_corpora": ["sausage making forums", "butcher supply websites", "DIY blogs", "hunting websites"],
      "non_en": ["DE"]
    },
    {
      "name": "clay pot",
      "queries": [
        "how to cook in a clay pot tagine",
        "do you need to soak a clay pot before baking",
        "FR: cuisson en pot en argile (tajine)",
        "cooking with a Japanese donabe",
        "are old clay pots food safe"
      ],
      "suggested_corpora": ["Mediterranean and Japanese cooking blogs", "food forums", "cookware stores", "archaeology/food history articles"],
      "non_en": ["FR"]
    },
    {
      "name": "baker's peel",
      "queries": [
        "how to stop pizza dough from sticking to the peel",
        "wood vs metal baker's peel",
        "IT: pala per pizza legno o metallo",
        "using cornmeal on a pizza peel",
        "launching a pizza into the oven"
      ],
      "suggested_corpora": ["pizza making forums (pizzamaking.com)", "baking blogs", "YouTube tutorials", "restaurant equipment websites"],
      "non_en": ["IT"]
    },
    {
      "name": "pasta machine roller",
      "queries": [
        "how to clean a pasta machine roller",
        "fresh pasta dough keeps sticking to rollers",
        "DE: Nudelmaschine reinigen",
        "what are pasta machine rollers made of",
        "adjusting pasta machine thickness"
      ],
      "suggested_corpora": ["Italian cooking blogs", "cookware manuals", "YouTube tutorials", "food forums"],
      "non_en": ["DE"]
    },
    {
      "name": "katsuobushi",
      "queries": [
        "how is katsuobushi made",
        "Aspergillus glaucus mold on bonito",
        "JP: 鰹節の作り方 (katsuobushi no tsukurikata)",
        "what is the hardest food in the world",
        "shaving katsuobushi with a kezuriki"
      ],
      "suggested_corpora": ["Japanese cooking websites", "food science blogs", "Wikipedia", "documentaries", "importer websites"],
      "non_en": ["JP"]
    },
    {
      "name": "cotton fabric",
      "queries": [
        "how to pre-wash cotton fabric for sewing",
        "best dye for cotton t-shirts",
        "ES: teñir tela de algodón",
        "why does cotton shrink",
        "organic vs conventional cotton"
      ],
      "suggested_corpora": ["sewing blogs", "craft forums", "textile industry websites", "sustainable fashion blogs"],
      "non_en": ["ES"]
    },
    {
      "name": "denim",
      "queries": [
        "how to break in raw denim jeans",
        "fading patterns on denim (whiskers, honeycombs)",
        "DE: Raw Denim einwaschen",
        "what is selvedge denim",
        "indigo dye on twill fabric"
      ],
      "suggested_corpora": ["denim enthusiast forums (Reddit's r/rawdenim)", "fashion blogs", "brand websites", "textile articles"],
      "non_en": ["DE"]
    },
    {
      "name": "leather hide",
      "queries": [
        "how to condition a leather jacket",
        "full grain vs top grain leather",
        "FR: comment entretenir un blouson en cuir",
        "vegetable tanning vs chrome tanning",
        "how to tool leather"
      ],
      "suggested_corpora": ["leatherworking forums", "fashion blogs", "furniture care websites", "DIY/craft sites"],
      "non_en": ["FR"]
    },
    {
      "name": "wool fleece",
      "queries": [
        "how to wash a wool sweater without shrinking",
        "what is lanolin in wool",
        "ES: cómo lavar un suéter de lana",
        "properties of merino wool for base layers",
        "how to process raw wool fleece"
      ],
      "suggested_corpora": ["knitting and spinning forums", "outdoor gear blogs", "laundry care websites", "homesteading blogs"],
      "non_en": ["ES"]
    },
    {
      "name": "silk",
      "queries": [
        "how to dye silk fabric",
        "momme weight of silk explained",
        "DE: Seidenstoff färben",
        "mulberry silk vs other types of silk",
        "how to hand wash silk pillowcase"
      ],
      "suggested_corpora": ["textile art blogs", "bedding review sites", "fashion design resources", "sewing forums"],
      "non_en": ["DE"]
    },
    {
      "name": "polyester microfiber",
      "queries": [
        "how to wash microfiber cleaning cloths",
        "moisture-wicking properties of polyester",
        "FR: laver les lingettes en microfibre polyester",
        "does polyester release microplastics",
        "what is polyester made from"
      ],
      "suggested_corpora": ["cleaning blogs", "sports apparel websites", "environmental science articles", "textile chemistry resources"],
      "non_en": ["FR"]
    },
    {
      "name": "nylon stocking",
      "queries": [
        "how are nylon stockings made",
        "denier rating for stockings explained",
        "ES: qué significa el denier en las medias",
        "how to stop a run in a stocking",
        "history of nylon stockings"
      ],
      "suggested_corpora": ["fashion history blogs", "hosiery stores", "life hack websites", "materials science articles"],
      "non_en": ["ES"]
    },
    {
      "name": "canvas",
      "queries": [
        "how to waterproof canvas fabric",
        "what is waxed canvas",
        "DE: Canvas imprägnieren",
        "duck canvas vs plain canvas",
        "materials for durable work pants"
      ],
      "suggested_corpora": ["DIY/craft forums", "outdoor gear blogs", "workwear brand websites", "art supply stores"],
      "non_en": ["DE"]
    },
    {
      "name": "felt",
      "queries": [
        "how is pressed felt made",
        "needle felting for beginners",
        "FR: comment est fait le feutre",
        "industrial uses of felt (seals, polishing)",
        "wool vs acrylic craft felt"
      ],
      "suggested_corpora": ["crafting blogs", "industrial supply catalogs", "DIY tutorials", "textile art websites"],
      "non_en": ["FR"]
    },
    {
      "name": "bulletproof vest panel",
      "queries": [
        "how do bulletproof vests work",
        "Kevlar vs Dyneema for ballistic panels",
        "ES: cómo funcionan los chalecos antibalas",
        "NIJ protection levels explained",
        "caring for a ballistic vest"
      ],
      "suggested_corpora": ["law enforcement supply websites", "military technology blogs", "materials science articles", "safety equipment manuals"],
      "non_en": ["ES"]
    },
    {
      "name": "suture thread",
      "queries": [
        "absorbable vs non-absorbable sutures",
        "suture material biocompatibility chart",
        "DE: resorbierbares vs nicht resorbierbares Nahtmaterial",
        "Vicryl vs Monocryl sutures",
        "suture size guide (USP)"
      ],
      "suggested_corpora": ["medical/surgical journals", "veterinary manuals", "medical device manufacturer websites", "nursing and medical student forums"],
      "non_en": ["DE"]
    },
    {
      "name": "medical gauze",
      "queries": [
        "how to properly dress a wound with gauze",
        "woven vs non-woven gauze sponges",
        "FR: pansement avec de la gaze médicale",
        "petrolatum gauze uses",
        "what is sterile gauze"
      ],
      "suggested_corpora": ["first aid guides (Red Cross, St. John Ambulance)", "nursing tutorials", "medical supply websites", "wound care journals"],
      "non_en": ["FR"]
    },
    {
      "name": "firefighter turnout gear",
      "queries": [
        "what are the layers of firefighter turnout gear",
        "NFPA standards for bunker gear",
        "ES: capas del equipo de protección de bomberos",
        "PBI vs Nomex fabric for turnout gear",
        "how to clean and decontaminate turnout gear"
      ],
      "suggested_corpora": ["firefighter magazines", "NFPA website", "manufacturer websites (DuPont, PBI Performance Products)", "safety manuals"],
      "non_en": ["ES"]
    },
    {
      "name": "velvet pile",
      "queries": [
        "how to clean a velvet sofa",
        "what is the direction of velvet pile",
        "DE: Samt-Strichrichtung",
        "crushed velvet vs regular velvet",
        "how is velvet fabric made"
      ],
      "suggested_corpora": ["upholstery cleaning guides", "interior design blogs", "fabric store websites", "sewing forums"],
      "non_en": ["DE"]
    },
    {
      "name": "lace",
      "queries": [
        "how to identify types of lace",
        "Chantilly vs Alençon lace",
        "FR: types de fabrication de dentelle",
        "how to wash delicate lace garments",
        "history of lacemaking in Belgium"
      ],
      "suggested_corpora": ["fashion history blogs", "bridal websites", "textile museum websites", "antique collectors forums"],
      "non_en": ["FR"]
    },
    {
      "name": "neoprene wetsuit",
      "queries": [
        "how does a wetsuit keep you warm",
        "closed-cell vs open-cell neoprene",
        "ES: cómo funciona un traje de neopreno",
        "how to repair a tear in a wetsuit",
        "wetsuit thickness guide for water temperature"
      ],
      "suggested_corpora": ["surfing and diving forums", "wetsuit brand websites", "sports science articles", "DIY repair blogs"],
      "non_en": ["ES"]
    },
    {
      "name": "down feather filling",
      "queries": [
        "what is down fill power",
        "down vs synthetic insulation for jackets",
        "DE: Daunen-Füllkraft erklärt",
        "Responsible Down Standard (RDS)",
        "how to wash a down jacket"
      ],
      "suggested_corpora": ["outdoor gear review websites", "brand websites (Patagonia, Arc'teryx)", "laundry care guides", "animal welfare certification sites"],
      "non_en": ["DE"]
    },
    {
      "name": "carpet pile",
      "queries": [
        "how to get stains out of carpet pile",
        "loop pile vs cut pile carpet",
        "FR: comment nettoyer les poils de tapis",
        "best vacuum for high pile carpet",
        "carpet crushing and matting"
      ],
      "suggested_corpora": ["professional cleaning websites", "flooring store blogs", "homeowner forums", "consumer review sites"],
      "non_en": ["FR"]
    },
    {
      "name": "upholstery fabric",
      "queries": [
        "upholstery fabric durability guide (rub count)",
        "best upholstery fabric for pets",
        "ES: guía de durabilidad de telas de tapicería",
        "how to clean microfiber upholstery",
        "chenille vs velvet vs linen upholstery"
      ],
      "suggested_corpora": ["interior design blogs", "furniture store websites", "fabric supplier catalogs", "upholstery forums"],
      "non_en": ["ES"]
    },
    {
      "name": "space suit layer",
      "queries": [
        "what are the layers of a NASA space suit",
        "how does a liquid cooling garment work",
        "DE: Schichten eines Raumanzugs",
        "Mylar insulation in space suits",
        "materials used in the EMU space suit"
      ],
      "suggested_corpora": ["NASA websites", "aerospace engineering articles", "space enthusiast blogs", "how-it's-made videos"],
      "non_en": ["DE"]
    },
    {
      "name": "parchment",
      "queries": [
        "how is animal parchment made",
        "writing on vellum with ink",
        "IT: come si fa la pergamena",
        "parchment vs paper",
        "conservation of medieval manuscripts"
      ],
      "suggested_corpora": ["manuscript studies blogs", "calligraphy forums", "museum conservation websites", "history articles"],
      "non_en": ["IT"]
    },
    {
      "name": "artist's canvas",
      "queries": [
        "how to prime a canvas with gesso",
        "linen vs cotton canvas for oil painting",
        "DE: Leinwand grundieren",
        "how to stretch a canvas",
        "what does canvas tooth mean"
      ],
      "suggested_corpora": ["art supply store blogs", "oil painting forums", "YouTube tutorials", "artist websites"],
      "non_en": ["DE"]
    },
    {
      "name": "papyrus",
      "queries": [
        "how was ancient Egyptian papyrus made",
        "writing on papyrus scrolls",
        "FR: processus de fabrication du papyrus",
        "difference between papyrus and paper",
        "where to buy real papyrus sheets"
      ],
      "suggested_corpora": ["Egyptology websites", "history blogs", "museum gift shops", "art supply stores"],
      "non_en": ["FR"]
    },
    {
      "name": "photographic film emulsion",
      "queries": [
        "what is photographic film emulsion made of",
        "how does silver halide photography work",
        "ES: emulsión de película fotográfica",
        "reticulation of film emulsion",
        "different types of film grain"
      ],
      "suggested_corpora": ["analog photography forums (Photrio)", "chemistry of photography articles", "film stock guides (Kodak, Ilford)", "darkroom printing manuals"],
      "non_en": ["ES"]
    },
    {
      "name": "magnetic tape",
      "queries": [
        "how does magnetic tape recording work",
        "cassette tape oxide types (ferric, chrome, metal)",
        "DE: Magnetband-Aufzeichnung",
        "reel-to-reel tape restoration",
        "what is sticky-shed syndrome"
      ],
      "suggested_corpora": ["audio engineering forums", "archivist blogs", "vintage stereo forums", "museum of obsolete media"],
      "non_en": ["DE"]
    },
    {
      "name": "vinyl record groove",
      "queries": [
        "how does a vinyl record groove store stereo sound",
        "how a stylus reads a record groove",
        "FR: comment le sillon d'un disque vinyle stocke le son",
        "microscope view of record groove",
        "record groove wear and damage"
      ],
      "suggested_corpora": ["audiophile forums", "turntable setup guides", "physics websites", "YouTube videos"],
      "non_en": ["FR"]
    },
    {
      "name": "fresco wall plaster",
      "queries": [
        "buon fresco painting technique",
        "what is the intonaco layer in a fresco",
        "IT: tecnica della pittura a fresco",
        "applying pigments to wet plaster",
        "conservation of Renaissance frescoes"
      ],
      "suggested_corpora": ["art history websites", "art conservation journals", "painting technique blogs", "museum guides"],
      "non_en": ["IT"]
    },
    {
      "name": "washi paper",
      "queries": [
        "how to make Japanese washi paper",
        "uses for washi paper (calligraphy, shoji)",
        "JP: 和紙の作り方 (washi no tsukurikata)",
        "kozo vs gampi vs mitsumata paper",
        "washi paper for printmaking"
      ],
      "suggested_corpora": ["Japanese craft blogs", "paper-making forums", "art supply websites", "cultural heritage sites"],
      "non_en": ["JP"]
    },
    {
      "name": "lithographic stone",
      "queries": [
        "how does stone lithography work",
        "preparing a lithographic stone",
        "DE: Lithografiestein-Präparation",
        "gum arabic in lithography",
        "Solnhofen limestone for lithography"
      ],
      "suggested_corpora": ["printmaking studio websites", "art history articles", "fine art printing forums", "chemistry of art materials blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "copperplate",
      "queries": [
        "how to do copperplate engraving",
        "intaglio printing process explained",
        "FR: technique de gravure sur cuivre",
        "preparing and polishing a copper plate for etching",
        "burin and drypoint tools"
      ],
      "suggested_corpora": ["printmaking forums", "art school resources", "museum print collection websites", "artist blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "woodblock",
      "queries": [
        "Japanese ukiyo-e woodblock printing technique",
        "what kind of wood for woodblock printing",
        "ES: técnica de impresión en xilografía",
        "carving a woodblock for printing",
        "registration in multi-color woodblock printing"
      ],
      "suggested_corpora": ["printmaking blogs", "art history websites (Met Museum)", "woodworking forums", "artist tutorials"],
      "non_en": ["ES"]
    },
    {
      "name": "architectural blueprint",
      "queries": [
        "how was the blueprint process invented",
        "cyanotype process chemistry",
        "DE: Cyanotypie-Verfahren",
        "reading architectural blueprints",
        "blueprint vs whiteprint"
      ],
      "suggested_corpora": ["history of photography websites", "architectural archives", "alternative photography process blogs", "engineering history articles"],
      "non_en": ["DE"]
    },
    {
      "name": "sheet music",
      "queries": [
        "how to read sheet music for piano",
        "what do annotations on sheet music mean",
        "IT: come leggere uno spartito musicale",
        "digital sheet music apps",
        "where to find public domain sheet music"
      ],
      "suggested_corpora": ["music theory websites", "musician forums", "digital music libraries (IMSLP)", "music education apps"],
      "non_en": ["IT"]
    },
    {
      "name": "illuminated manuscript page",
      "queries": [
        "how were illuminated manuscripts made",
        "what is gold leaf gilding on parchment",
        "FR: application de la feuille d'or dans les manuscrits enluminés",
        "pigments used in medieval manuscripts",
        "Book of Kells analysis"
      ],
      "suggested_corpora": ["museum websites (Getty, British Library)", "art history blogs", "calligraphy forums", "medieval history resources"],
      "non_en": ["FR"]
    },
    {
      "name": "clay tablet",
      "queries": [
        "how was cuneiform written on clay tablets",
        "ancient Mesopotamian writing system",
        "ES: escritura cuneiforme en tablillas de arcilla",
        "how to make a clay tablet",
        "deciphering cuneiform"
      ],
      "suggested_corpora": ["ancient history websites", "archaeology blogs", "museum collection databases", "linguistics forums"],
      "non_en": ["ES"]
    },
    {
      "name": "scratchboard",
      "queries": [
        "scratchboard art techniques for beginners",
        "what tools to use for scratchboard",
        "DE: Scratchboard-Technik",
        "claybord vs scratchbord",
        "how to add color to scratchboard art"
      ],
      "suggested_corpora": ["art supply blogs", "artist tutorials on YouTube", "craft forums", "product manufacturer websites"],
      "non_en": ["DE"]
    },
    {
      "name": "piano roll",
      "queries": [
        "how does a player piano work",
        "how to read a piano roll",
        "FR: comment fonctionne un piano mécanique",
        "digitizing piano rolls",
        "QRS vs Duo-Art piano rolls"
      ],
      "suggested_corpora": ["mechanical music forums", "antique instrument restoration blogs", "musicology articles", "university archives"],
      "non_en": ["FR"]
    },
    {
      "name": "tattooed skin",
      "queries": [
        "how does a tattoo become permanent",
        "where does tattoo ink go in the skin",
        "IT: come fanno i tatuaggi a essere permanenti",
        "tattoo healing process day by day",
        "biocompatibility of tattoo inks"
      ],
      "suggested_corpora": ["dermatology journals", "tattoo artist forums", "YouTube videos", "popular science articles"],
      "non_en": ["IT"]
    },
    {
      "name": "cinema screen",
      "queries": [
        "what is cinema screen gain",
        "silver screen vs matte white screen material",
        "JP: 映画館のスクリーン 素材 (eigakan no sukurīn sozai)",
        "acoustically transparent projector screen",
        "IMAX screen technology"
      ],
      "suggested_corpora": ["home theater forums", "cinema technology websites", "audiovisual trade magazines", "projector review sites"],
      "non_en": ["JP"]
    },
    {
      "name": "animation cel",
      "queries": [
        "how was traditional cel animation done",
        "what kind of paint is used on animation cels",
        "DE: Animationsfolien-Malerei",
        "how to preserve vintage animation cels",
        "collecting animation art"
      ],
      "suggested_corpora": ["animation history blogs", "art conservation websites", "collectors forums", "studio production notes"],
      "non_en": ["DE"]
    },
    {
      "name": "steel plate",
      "queries": [
        "steel plate grades chart (A36, AR500)",
        "hot-rolled vs cold-rolled steel plate",
        "FR: tableau des nuances de tôles d'acier",
        "how to cut thick steel plate",
        "uses of steel plate in construction"
      ],
      "suggested_corpora": ["metal supplier websites", "fabrication forums", "engineering handbooks", "construction industry guides"],
      "non_en": ["FR"]
    },
    {
      "name": "plywood sheet",
      "queries": [
        "plywood grades explained (A, B, C, D)",
        "what is baltic birch plywood",
        "ES: calidades y usos del contrachapado",
        "marine grade vs exterior grade plywood",
        "how to cut plywood without splintering"
      ],
      "suggested_corpora": ["woodworking forums", "DIY websites", "lumber yard product pages", "building supply stores"],
      "non_en": ["ES"]
    },
    {
      "name": "carbon fiber pre-preg",
      "queries": [
        "how to cure carbon fiber pre-preg",
        "autoclave vs out-of-autoclave prepreg",
        "DE: Prepreg-Verarbeitung",
        "storage requirements for pre-preg carbon fiber",
        "what is pre-preg layup"
      ],
      "suggested_corpora": ["composites manufacturing magazines", "aerospace engineering forums", "motorsport technology blogs", "material supplier datasheets"],
      "non_en": ["DE"]
    },
    {
      "name": "aluminum billet",
      "queries": [
        "what is an aluminum billet used for",
        "6061-T6 aluminum billet properties",
        "FR: billette d'aluminium pour forgeage",
        "extrusion process from aluminum billet",
        "CNC machining from solid billet"
      ],
      "suggested_corpora": ["metal supplier websites", "CNC machining forums", "extrusion company blogs", "materials engineering textbooks"],
      "non_en": ["FR"]
    },
    {
      "name": "polymer resin pellet",
      "queries": [
        "plastic resin pellet identification codes",
        "how does an injection molding machine use pellets",
        "IT: codici di identificazione dei pellet di resina plastica",
        "what are nurdles",
        "drying plastic pellets before molding"
      ],
      "suggested_corpora": ["plastics industry websites", "injection molding forums", "environmental groups (re: nurdles)", "material datasheets"],
      "non_en": ["IT"]
    },
    {
      "name": "concrete mix",
      "queries": [
        "concrete mix ratio for 3000 psi",
        "what are concrete admixtures used for",
        "DE: Betonmischungsverhältnis für Stärke",
        "ready-mix vs site-mix concrete",
        "how long does concrete take to cure"
      ],
      "suggested_corpora": ["construction forums", "DIY websites", "concrete supplier blogs", "civil engineering guides"],
      "non_en": ["DE"]
    },
    {
      "name": "structural lumber",
      "queries": [
        "how to read a lumber grade stamp",
        "dimensional lumber sizes chart",
        "FR: classes de bois pour le bois de charpente",
        "SPF vs Douglas Fir lumber",
        "what is glulam"
      ],
      "suggested_corpora": ["building code websites", "woodworking forums", "lumber industry associations", "construction blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "titanium alloy bar",
      "queries": [
        "properties of Ti-6Al-4V titanium alloy",
        "how to machine titanium alloy bar",
        "ES: mecanizado de barras de aleación de titanio",
        "uses of titanium in aerospace",
        "medical grade titanium alloys"
      ],
      "suggested_corpora": ["aerospace engineering journals", "medical device manufacturing sites", "machinist forums", "metal supplier datasheets"],
      "non_en": ["ES"]
    },
    {
      "name": "rebar",
      "queries": [
        "rebar size chart (e.g., #4 rebar diameter)",
        "epoxy coated vs galvanized rebar",
        "DE: Bewehrungsstahl-Größen",
        "how to tie rebar for a concrete slab",
        "what does the grade mark on rebar mean"
      ],
      "suggested_corpora": ["construction supply websites", "civil engineering guides", "DIY concrete project forums", "building code manuals"],
      "non_en": ["DE"]
    },
    {
      "name": "glass fiber roving",
      "queries": [
        "glass fiber roving for filament winding",
        "E-glass vs S-glass fiber properties",
        "FR: roving de fibre de verre pour enroulement filamentaire",
        "chopped strand mat vs woven roving",
        "how to use a fiberglass chopper gun"
      ],
      "suggested_corpora": ["composites industry websites", "boat building forums", "materials supplier catalogs", "DIY project blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "ingot",
      "queries": [
        "how to cast an aluminum ingot",
        "what is the difference between an ingot and a billet",
        "IT: come si fonde un lingotto di metallo",
        "gold and silver bullion ingots",
        "continuous casting of steel ingots"
      ],
      "suggested_corpora": ["backyard metal casting forums", "precious metals investor blogs", "metallurgy textbooks", "industrial manufacturing websites"],
      "non_en": ["IT"]
    },
    {
      "name": "foam block",
      "queries": [
        "how to cut a polystyrene foam block",
        "EPS vs XPS foam for insulation",
        "JP: 発泡スチロールブロックの切り方 (happō suchirōru burokku no kirikata)",
        "sculpting with foam blocks",
        "using foam blocks for cosplay props"
      ],
      "suggested_corpora": ["craft and cosplay forums", "model railroad hobbyist sites", "building supply websites", "DIY tutorials"],
      "non_en": ["JP"]
    },
    {
      "name": "sod",
      "queries": [
        "how to lay sod for a new lawn",
        "how often to water new sod",
        "DE: Rollrasen verlegen Anleitung",
        "best type of grass sod for shady areas",
        "preparing soil for sod installation"
      ],
      "suggested_corpora": ["landscaping company blogs", "lawn care forums", "university extension websites", "home and garden stores"],
      "non_en": ["DE"]
    },
    {
      "name": "ballast",
      "queries": [
        "what is railway track ballast for",
        "track ballast specifications",
        "FR: spécifications du ballast de voie ferrée",
        "types of aggregate used for ballast",
        "ballast tamping machine"
      ],
      "suggested_corpora": ["railway engineering journals", "train enthusiast forums", "quarry and aggregate supplier websites", "transportation infrastructure guides"],
      "non_en": ["FR"]
    },
    {
      "name": "MDF panel",
      "queries": [
        "how to paint MDF panels so they don't swell",
        "MDF vs plywood for cabinets",
        "ES: pintar paneles de MDF",
        "what is MDF made of",
        "best way to cut MDF"
      ],
      "suggested_corpora": ["woodworking forums", "DIY furniture blogs", "painting guides", "hardware store websites"],
      "non_en": ["ES"]
    },
    {
      "name": "acrylic sheet",
      "queries": [
        "how to cut acrylic sheet without cracking",
        "Plexiglas vs Lexan (polycarbonate)",
        "DE: Acrylglas schneiden",
        "how to bend acrylic sheet with heat",
        "solvent welding acrylic"
      ],
      "suggested_corpora": ["DIY project websites", "plastic fabricator blogs", "sign making forums", "maker space tutorials"],
      "non_en": ["DE"]
    },
    {
      "name": "I-beam",
      "queries": [
        "I-beam load capacity chart",
        "steel I-beam vs wood beam for support",
        "FR: tableau de capacité de charge des poutres en I",
        "what are standard I-beam sizes",
        "how to install a basement support I-beam"
      ],
      "suggested_corpora": ["structural engineering forums", "construction supply websites", "home renovation blogs", "building code manuals"],
      "non_en": ["FR"]
    },
    {
      "name": "metal powder",
      "queries": [
        "metal powder for 3D printing (SLS/DMLS)",
        "handling and safety of fine metal powders",
        "IT: polvere metallica per la stampa 3D",
        "gas atomization of metal powders",
        "what is powder metallurgy"
      ],
      "suggested_corpora": ["additive manufacturing websites", "materials science journals", "safety data sheets", "powder producer websites"],
      "non_en": ["IT"]
    },
    {
      "name": "epoxy resin",
      "queries": [
        "how to mix and pour epoxy resin for a table",
        "epoxy resin bubbles prevention",
        "JP: エポキシ樹脂の混合方法 (epokishi jushi no kongō hōhō)",
        "epoxy resin for fiberglass composites",
        "food grade epoxy resin"
      ],
      "suggested_corpora": ["woodworking and craft forums", "YouTube tutorials", "boat building blogs", "resin supplier websites"],
      "non_en": ["JP"]
    },
    {
      "name": "grout",
      "queries": [
        "how to seal tile grout",
        "sanded vs unsanded grout for tiles",
        "DE: Fugenmörtel versiegeln",
        "how to remove and replace old grout",
        "epoxy grout vs cement grout"
      ],
      "suggested_corpora": ["tile installation forums", "DIY home repair sites", "product manufacturer instructions", "YouTube tutorials"],
      "non_en": ["DE"]
    },
    {
      "name": "shipping container",
      "queries": [
        "shipping container home design ideas",
        "standard intermodal container dimensions",
        "FR: dimensions des conteneurs d'expédition",
        "how to insulate a shipping container",
        "Corten steel used for shipping containers"
      ],
      "suggested_corpora": ["alternative architecture blogs", "logistics and shipping websites", "DIY forums", "container modification companies"],
      "non_en": ["FR"]
    },
    {
      "name": "glass bottle",
      "queries": [
        "how are glass bottles made",
        "amber vs clear glass bottle for beer",
        "ES: proceso de fabricación de botellas de vidrio",
        "how to cut a glass bottle for a craft project",
        "leaching from glass bottles"
      ],
      "suggested_corpora": ["beverage industry websites", "homebrewing forums", "DIY/craft blogs", "food science articles"],
      "non_en": ["ES"]
    },
    {
      "name": "fuel tank",
      "queries": [
        "what are car fuel tanks made of (HDPE)",
        "how to clean a boat fuel tank",
        "DE: Material von Autotanks",
        "baffles in fuel tanks purpose",
        "fuel tank corrosion prevention"
      ],
      "suggested_corpora": ["automotive and marine repair forums", "plastics manufacturing websites", "engineering design articles", "vehicle restoration blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "grain silo",
      "queries": [
        "grain silo pressure and collapse",
        "how to clean a grain silo",
        "FR: calcul de la pression dans les silos à grains",
        "corrugated steel vs concrete silos",
        "silo gas dangers"
      ],
      "suggested_corpora": ["agricultural engineering websites", "farm safety guides", "silo manufacturer catalogs", "bulk material handling journals"],
      "non_en": ["FR"]
    },
    {
      "name": "plastic food wrap",
      "queries": [
        "is it safe to microwave plastic food wrap",
        "beeswax wrap vs cling film",
        "IT: la pellicola alimentare è sicura nel microonde",
        "what is plastic wrap made of (PVC, LDPE)",
        "how does cling film stick"
      ],
      "suggested_corpora": ["food safety websites", "eco-friendly/zero waste blogs", "chemistry websites", "good housekeeping guides"],
      "non_en": ["IT"]
    },
    {
      "name": "cardboard box",
      "queries": [
        "corrugated fiberboard strength test",
        "single wall vs double wall cardboard box",
        "JP: 段ボール箱の強度 (danbōru-bako no kyōdo)",
        "how to properly tape a cardboard box for shipping",
        "what is the bursting strength of a box (Mullen test)"
      ],
      "suggested_corpora": ["packaging supplier websites", "shipping company guides (UPS, FedEx)", "e-commerce blogs", "engineering standards"],
      "non_en": ["JP"]
    },
    {
      "name": "pressure vessel",
      "queries": [
        "ASME pressure vessel design code",
        "hydrostatic testing of pressure vessels",
        "DE: Druckbehälter-Auslegung",
        "types of heads for pressure vessels (elliptical, torispherical)",
        "materials for high pressure vessels"
      ],
      "suggested_corpora": ["mechanical engineering forums", "ASME standards website", "industrial equipment manufacturers", "chemical engineering handbooks"],
      "non_en": ["DE"]
    },
    {
      "name": "Tupperware container",
      "queries": [
        "how to get tomato stains out of plastic containers",
        "are old Tupperware containers BPA free",
        "FR: enlever les taches de tomate sur le plastique",
        "can you freeze food in Tupperware",
        "history of Tupperware products"
      ],
      "suggested_corpora": ["home organization blogs", "cleaning forums", "consumer health websites", "brand history pages"],
      "non_en": ["FR"]
    },
    {
      "name": "IV bag",
      "queries": [
        "what are IV bags made of (PVC, EVA)",
        "drug compatibility with PVC IV bags",
        "ES: composición del material de las bolsas IV",
        "leaching of DEHP from IV bags",
        "non-PVC IV bag alternatives"
      ],
      "suggested_corpora": ["pharmaceutical journals", "hospital supply websites", "medical device regulations", "nursing forums"],
      "non_en": ["ES"]
    },
    {
      "name": "vacuum chamber",
      "queries": [
        "how to degas epoxy in a vacuum chamber",
        "materials for high vacuum chamber construction",
        "IT: camera a vuoto per degasaggio resina",
        "what pump to use for a vacuum chamber",
        "DIY vacuum chamber for stabilizing wood"
      ],
      "suggested_corpora": ["scientific instrument websites", "vacuum technology forums", "DIY/maker channels", "materials science labs"],
      "non_en": ["IT"]
    },
    {
      "name": "piping",
      "queries": [
        "biofilm formation in water pipes",
        "how to prevent pipe scale buildup",
        "JP: 水道管のスケール除去 (suidōkan no sukēru jokyo)",
        "copper vs PEX piping for homes",
        "corrosion in stainless steel piping"
      ],
      "suggested_corpora": ["plumbing forums", "water treatment journals", "home renovation blogs", "corrosion engineering websites"],
      "non_en": ["JP"]
    },
    {
      "name": "cryogenic dewar",
      "queries": [
        "how does a cryogenic dewar work",
        "safety precautions for handling liquid nitrogen dewar",
        "DE: Kryo-Dewar-Gefäß Sicherheit",
        "super insulation in dewar flasks",
        "filling a cryogenic dewar"
      ],
      "suggested_corpora": ["lab safety manuals", "gas supplier websites (Airgas, Linde)", "cryogenics engineering forums", "university lab procedures"],
      "non_en": ["DE"]
    },
    {
      "name": "ampoule",
      "queries": [
        "how to safely open a glass ampoule",
        "pharmaceutical glass ampoule filling and sealing",
        "FR: comment ouvrir une ampoule en verre",
        "filter needle for drawing from ampoule",
        "plastic vs glass ampoules"
      ],
      "suggested_corpora": ["nursing skill videos", "pharmaceutical packaging websites", "pharmacy technician forums", "medical supply catalogs"],
      "non_en": ["FR"]
    },
    {
      "name": "storage drum",
      "queries": [
        "what is a 55-gallon drum made of",
        "UN rating for steel drums",
        "ES: revestimiento interior de bidones de 55 galones",
        "how to clean a used storage drum",
        "open head vs tight head drum"
      ],
      "suggested_corpora": ["industrial packaging suppliers", "hazardous waste handling guides", "DIY project forums (e.g., for rain barrels)", "logistics websites"],
      "non_en": ["ES"]
    },
    {
      "name": "cans",
      "queries": [
        "what are can liners made of (BPA)",
        "aluminum vs steel cans for food",
        "DE: Innenbeschichtung von Dosen",
        "how is a two-piece aluminum can made",
        "pop-top can mechanism"
      ],
      "suggested_corpora": ["food packaging industry websites", "food science journals", "how-it's-made videos", "public health articles"],
      "non_en": ["DE"]
    },
    {
      "name": "water tower",
      "queries": [
        "how does a water tower provide pressure",
        "water tower maintenance and cleaning",
        "FR: comment fonctionne un château d'eau",
        "types of water towers (elevated tank)",
        "why are some water towers spherical"
      ],
      "suggested_corpora": ["public works department websites", "civil engineering blogs", "how-stuff-works sites", "local history websites"],
      "non_en": ["FR"]
    },
    {
      "name": "Ziploc bag",
      "queries": [
        "can you boil food in a Ziploc bag (sous vide)",
        "what type of plastic are Ziploc bags made of",
        "IT: si possono riutilizzare i sacchetti Ziploc",
        "how does the Ziploc seal work",
        "alternatives to plastic sandwich bags"
      ],
      "suggested_corpora": ["cooking blogs", "mom blogs", "zero waste/environmental websites", "brand FAQs"],
      "non_en": ["IT"]
    },
    {
      "name": "nuclear waste cask",
      "queries": [
        "how are nuclear waste casks designed and tested",
        "dry cask storage for spent nuclear fuel",
        "JP: 使用済み核燃料の乾式貯蔵 (shiyōzumi kakunenryō no kanshiki chozō)",
        "materials used for radiation shielding in casks",
        "what happens if a nuclear waste cask breaks"
      ],
      "suggested_corpora": ["Nuclear Regulatory Commission (NRC) website", "nuclear engineering journals", "energy department reports", "anti-nuclear activist websites"],
      "non_en": ["JP"]
    },
    {
      "name": "blister pack",
      "queries": [
        "how are pharmaceutical blister packs made",
        "thermoforming plastic for blister packs",
        "DE: Blisterverpackung-Herstellung",
        "PVC vs PVDC in blister packaging",
        "child-resistant blister packs"
      ],
      "suggested_corpora": ["pharmaceutical packaging websites", "plastics manufacturing blogs", "packaging machinery manufacturers", "regulatory guidelines"],
      "non_en": ["DE"]
    },
    {
      "name": "septic tank",
      "queries": [
        "how does a septic tank work",
        "septic tank maintenance do's and don'ts",
        "FR: comment fonctionne une fosse septique",
        "concrete vs plastic septic tanks",
        "what is the scum layer and sludge layer"
      ],
      "suggested_corpora": ["environmental health department websites", "plumbing and septic service blogs", "homeowner guides", "rural lifestyle forums"],
      "non_en": ["FR"]
    },
    {
      "name": "database table",
      "queries": [
        "how to run an SQL query on a database table",
        "relational database schema design principles",
        "ES: estructura de una tabla de base de datos",
        "what is a primary key in a database table",
        "data types in SQL tables"
      ],
      "suggested_corpora": ["developer forums (Stack Overflow)", "database software documentation (MySQL, PostgreSQL)", "SQL tutorial websites", "university course materials"],
      "non_en": ["ES"]
    },
    {
      "name": "file system",
      "queries": [
        "how does a file system work (e.g., NTFS, APFS)",
        "FAT32 vs NTFS vs exFAT explained",
        "DE: wie ein Dateisystem funktioniert",
        "what is journaling in a file system",
        "B-tree structure in file systems"
      ],
      "suggested_corpora": ["computer science blogs", "operating system development wikis", "tech help forums", "Wikipedia", "YouTube explainers"],
      "non_en": ["DE"]
    },
    {
      "name": "virtual machine",
      "queries": [
        "how to run Windows on a Mac using a virtual machine",
        "what is a hypervisor (Type 1 vs Type 2)",
        "FR: exécuter un OS dans une machine virtuelle",
        "VMware vs VirtualBox",
        "how does a VM interact with host hardware"
      ],
      "suggested_corpora": ["tech news and review sites", "software documentation (VMware, Oracle)", "IT professional forums", "cloud computing blogs"],
      "non_en": ["FR"]
    },
    {
      "name": "blockchain ledger",
      "queries": [
        "how does a blockchain ledger work for dummies",
        "what is a distributed ledger",
        "IT: come funziona un registro blockchain",
        "public vs private blockchain",
        "immutability of blockchain records"
      ],
      "suggested_corpora": ["cryptocurrency news sites", "investment blogs", "tech explainers (like HowStuffWorks)", "academic papers on DLT"],
      "non_en": ["IT"]
    },
    {
      "name": "DOM tree",
      "queries": [
        "how to manipulate the DOM tree with JavaScript",
        "what is a virtual DOM (React)",
        "DE: DOM-Struktur manipulieren",
        "DOM vs Shadow DOM",
        "parsing an HTML document into a DOM tree"
      ],
      "suggested_corpora": ["web developer documentation (MDN Web Docs)", "JavaScript tutorial sites (W3Schools)", "Stack Overflow", "front-end developer blogs"],
      "non_en": ["DE"]
    },
    {
      "name": "API endpoint",
      "queries": [
        "how to call a REST API endpoint using curl",
        "what is an API endpoint example",
        "FR: appeler un point de terminaison d'API REST",
        "best practices for designing API endpoints",
        "securing API endpoints"
      ],
      "suggested_corpora": ["software development blogs", "API documentation for various services", "Stack Overflow", "tutorial websites"],
      "non_en": ["FR"]
    },
    {
      "name": "memory address space",
      "queries": [
        "how does a process memory address space work",
        "virtual memory vs physical memory",
        "ES: cómo funciona el espacio de direcciones de memoria de un proceso",
        "what is address space layout randomization (ASLR)",
        "32-bit vs 64-bit address space"
      ],
      "suggested_corpora": ["computer architecture textbooks", "operating systems tutorials", "cybersecurity blogs", "low-level programming forums"],
      "non_en": ["ES"]
    },
    {
      "name": "CSS stylesheet",
      "queries": [
        "how to link a CSS stylesheet to an HTML file",
        "what is CSS specificity hierarchy",
        "IT: collegare un foglio di stile CSS a HTML",
        "CSS best practices for performance",
        "Sass vs LESS CSS preprocessors"
      ],
      "suggested_corpora": ["MDN Web Docs", "CSS-Tricks", "web design blogs", "Stack Overflow"],
      "non_en": ["IT"]
    },
    {
      "name": "software framework",
      "queries": [
        "what is a software framework (e.g., React, Django)",
        "advantages of using a framework for web development",
        "DE: Vorteile eines Software-Frameworks",
        "library vs framework",
        "how to choose a software framework"
      ],
      "suggested_corpora": ["developer blogs", "software architecture articles", "official framework documentation", "opinion pieces on Medium"],
      "non_en": ["DE"]
    },
    {
      "name": "cloud storage bucket",
      "queries": [
        "how to upload files to an AWS S3 bucket",
        "google cloud storage bucket permissions",
        "FR: télécharger des fichiers vers un compartiment de stockage cloud",
        "what is object storage",
        "S3 bucket vs EBS volume"
      ],
      "suggested_corpora": ["cloud provider documentation (AWS, Google Cloud, Azure)", "developer forums", "cloud engineering blogs", "Stack Overflow"],
      "non_en": ["FR"]
    },
    {
      "name": "cookie",
      "queries": [
        "how do browser HTTP cookies work",
        "session vs persistent cookies",
        "ES: cómo funcionan las cookies del navegador",
        "how to clear cookies in chrome",
        "third-party cookies and privacy"
      ],
      "suggested_corpora": ["web developer documentation", "tech news websites", "privacy and security blogs", "browser help pages"],
      "non_en": ["ES"]
    },
    {
      "name": "network socket",
      "queries": [
        "network socket programming tutorial python",
        "TCP vs UDP sockets explained",
        "IT: programmazione di socket di rete",
        "what is a socket in networking",
        "Berkeley sockets API"
      ],
      "suggested_corpora": ["computer networking textbooks", "programming tutorial websites", "Stack Overflow", "operating system manuals"],
      "non_en": ["IT"]
    },
    {
      "name": "operating system kernel",
      "queries": [
        "what is the role of the operating system kernel",
        "monolithic vs microkernel design",
        "DE: Rolle des Betriebssystem-Kernels",
        "how does the Linux kernel work",
        "user mode vs kernel mode"
      ],
      "suggested_corpora": ["computer science education websites", "operating system development blogs", "Wikipedia", "tech forums"],
      "non_en": ["DE"]
    },
    {
      "name": "data frame",
      "queries": [
        "how to create a pandas data frame from a dictionary",
        "data manipulation with R data frames",
        "FR: créer un data frame pandas",
        "what is a data frame in programming",
        "filtering rows in a pandas dataframe"
      ],
      "suggested_corpora": ["data science blogs", "software documentation (pandas, R)", "Kaggle notebooks", "Stack Overflow"],
      "non_en": ["FR"]
    },
    {
      "name": "digital canvas",
      "queries": [
        "how to use the canvas element in HTML5 for drawing",
        "Photoshop layers and blending modes explained",
        "ES: usar el elemento canvas en HTML5",
        "Figma vs Sketch for UI design",
        "infinite canvas apps"
      ],
      "suggested_corpora": ["web developer tutorials", "digital art forums", "UI/UX design blogs", "software documentation"],
      "non_en": ["ES"]
    },
    {
      "name": "version control repository",
      "queries": [
        "how to use a git repository for beginners",
        "git branching and merging tutorial",
        "DE: wie man ein Git-Repository verwendet",
        "what is a remote repository (e.g., on GitHub)",
        "git clone vs fork"
      ],
      "suggested_corpora": ["Git documentation", "GitHub help pages", "developer blogs", "Stack Overflow", "Atlassian Git tutorial"],
      "non_en": ["DE"]
    },
    {
      "name": "spreadsheet",
      "queries": [
        "how to use pivot tables in Excel",
        "Google Sheets formulas and functions list",
        "FR: formules et fonctions de tableur",
        "VLOOKUP function tutorial",
        "spreadsheet for personal budget template"
      ],
      "suggested_corpora": ["software help pages (Microsoft, Google)", "accounting and finance blogs", "data analysis tutorials", "productivity websites"],
      "non_en": ["FR"]
    },
    {
      "name": "neural network layer",
      "queries": [
        "how does a convolutional layer work in a neural network",
        "activation functions in neural networks (ReLU, Sigmoid)",
        "IT: come funziona uno strato di rete neurale",
        "what is a dense layer in Keras",
        "understanding neural network architecture"
      ],
      "suggested_corpora": ["machine learning blogs", "deep learning framework documentation (TensorFlow, PyTorch)", "academic papers", "Towards Data Science on Medium"],
      "non_en": ["IT"]
    },
    {
      "name": "simulation environment",
      "queries": [
        "how does a game engine physics world work",
        "creating a simulation environment in python",
        "JP: シミュレーション環境の構築 (shimyurēshon kankyō no kōchiku)",
        "Unity vs Unreal Engine physics",
        "what is a digital twin simulation"
      ],
      "suggested_corpora": ["game development forums", "robotics simulation websites (Gazebo)", "engineering software documentation", "computer graphics papers"],
      "non_en": ["JP"]
    },
    {
      "name": "XML document",
      "queries": [
        "how to parse an XML document in Python",
        "what is an XML schema definition (XSD)",
        "DE: ein XML-Dokument parsen",
        "XML vs JSON pros and cons",
        "XPath for selecting nodes in XML"
      ],
      "suggested_corpora": ["programming language documentation", "W3Schools", "Stack Overflow", "data exchange tutorials"],
      "non_en": ["DE"]
    }
  ]
}