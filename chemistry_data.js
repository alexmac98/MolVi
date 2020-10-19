var ATOMS = {
    "HYDROGEN": {
        "number": 1,
        "radius": 1.0000000000000,
        "shortName": 'H',
        "fullName": 'Hydrogen',
        "description": 'Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass. Non-remnant stars are mainly composed of hydrogen in its plasma state. The most common isotope of hydrogen, termed protium (name rarely used, symbol 1H), has one proton and no neutrons.',
        "link": 'https://en.wikipedia.org/wiki/Hydrogen',
        "color": '#E5E5E5',
        "textColor": '#333333',
        "position": new vec3(0,0,0)
    },
    "CARBON": {
        "number": 6,
        "radius": 2.4516129032258,
        "shortName": 'C',
        "fullName": 'Carbon',
        "description": 'Carbon (from Latin: carbo "coal") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds. There are three naturally occurring isotopes, with 12C and 13C being stable, while 14C is radioactive, decaying with a half-life of about 5,730 years. Carbon is one of the few elements known since antiquity.',
        "link": 'https://en.wikipedia.org/wiki/Carbon',
        "color": '#555555',
        "textColor": '#E5E5E5',
        "position": new vec3(0,0,0)

    },
    "NITROGEN": {
        "number": 7,
        "radius": 2.2903225806452,
        "shortName": 'N',
        "fullName": 'Nitrogen',
        "description": 'Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System. On Earth, the element forms about 78% of Earth\'s atmosphere and as such is the most abundant uncombined element. The element nitrogen was discovered as a separable component of air, by Scottish physician Daniel Rutherford, in 1772.',
        "link": 'https://en.wikipedia.org/wiki/Nitrogen',
        "color": '#5533AA',
        "textColor": '#E5E5E5',
        "position": new vec3(0,0,0)

    },
    "OXYGEN": {
        "number": 8,
        "radius": 2.1290322580645,
        "shortName": 'O',
        "fullName": 'Oxygen',
        "description": 'Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium. At standard temperature and pressure, two atoms of the element bind to form dioxygen, a colorless and odorless diatomic gas with the formula O2. Diatomic oxygen gas constitutes 20.8% of the Earth\'s atmosphere. However, monitoring of atmospheric oxygen levels show a global downward trend, because of fossil-fuel burning. Oxygen is the most abundant element by mass in the Earth\'s crust as part of oxide compounds such as silicon dioxide, making up almost half of the crust\'s mass.',
        "link": 'https://en.wikipedia.org/wiki/Oxygen',
        "color": '#CC3333',
        "textColor": '#E5E5E5',
        "position": new vec3(0,0,0)

    },
    "SODIUM": {
        "number": 11,
        "radius": 5.3548387096774,
        "shortName": 'Na',
        "fullName": 'Sodium',
        "description": 'Sodium is a chemical element with the symbol Na (from Latin natrium) and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table, because it has a single electron in its outer shell, which it readily donates, creating a positively charged ion—the Na+ cation. Its only stable isotope is 23Na. The free metal does not occur in nature, and must be prepared from compounds. Sodium is the sixth most abundant element in the Earth\'s crust and exists in numerous minerals such as feldspars, sodalite, and rock salt (NaCl). Many salts of sodium are highly water-soluble: sodium ions have been leached by the action of water from the Earth\'s minerals over eons, and thus sodium and chlorine are the most common dissolved elements by weight in the oceans.',
        "link": 'https://en.wikipedia.org/wiki/Sodium',
        "color": '#AA33AA',
        "textColor": '#E5E5E5',
        "position": new vec3(0,0,0)

    },
    "POTASSIUM": {
        "number": 19,
        "radius": 6.5483870967742,
        "shortName": 'K',
        "fullName": 'Potassium',
        "description": 'Potassium is a mineral and an electrolyte. It helps your muscles work, including the muscles that control your heartbeat and breathing. Potassium comes from the food you eat. Your body uses the potassium it needs. The extra potassium that your body does not need is removed from your blood by your kidneys',
        "link": 'https://en.wikipedia.org/wiki/Potassium',
        "color": '#AABB33',
        "textColor": '#333333',
        "position": new vec3(0,0,0)

    },
    "CALCIUM": {
        "number": 20,
        "radius": 5.6774193548387,
        "shortName": 'Ca',
        "fullName": 'Calcium',
        "description": 'Calcium is a mineral that is necessary for life. In addition to building bones and keeping them healthy, calcium enables our blood to clot, our muscles to contract, and our heart to beat. About 99% of the calcium in our bodies is in our bones and teeth.',
        "link": 'https://en.wikipedia.org/wiki/Calcium',
        "color": '#33BB33',
        "textColor": '#333333',
        "position": new vec3(0,0,0)
    }
};


var ATOMS_ARRAY = [
        ATOMS.HYDROGEN,
        ATOMS.CARBON,
        ATOMS.NITROGEN,
        ATOMS.OXYGEN,
        ATOMS.SODIUM,
        ATOMS.POTASSIUM,
        ATOMS.CALCIUM
];

var MOLECULES = {
    "WATER": {
        "name": 'Water',
        "makeup": 'H2O',
        "description": "Water (H2O) is the most abundant compound on Earth\"s surface, covering 70 percent of the planet. In nature, water exists in liquid, solid, and gaseous states. It is in dynamic equilibrium between the liquid and gas states at standard temperature and pressure. At room temperature, it is a tasteless and odorless liquid, nearly colorless with a hint of blue. Many substances dissolve in water and it is commonly referred to as the universal solvent. Because of this, water in nature and in use is rarely pure and some properties may vary from those of the pure substance. However, there are also many compounds that are essentially, if not completely, insoluble in water. Water is the only common substance found naturally in all three common states of matter and it is essential for all life on Earth. Water makes up 55% to 78% of the human body.",
        "link": 'https://en.wikipedia.org/wiki/Water',
        "geometry": [
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(0, 0, 0),
                "bonds": []
            },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(3, -3, 0),
                "bonds": [[0]]
            },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(-3, -3, 0),
                "bonds": [[0]]
                    }
            ],
        "zoomLevel": 30
    },
    "ETHANOL": {
        "name": "Ethanol",
        "makeup": "C2H6O",
        "description": "Ethanol, also commonly called ethyl alcohol, drinking alcohol, or simply alcohol is the principal type of alcohol found in alcoholic beverages, produced by the fermentation of sugars by yeasts. It is a neurotoxic psychoactive drug and one of the oldest recreational drugs used by humans. It can cause alcohol intoxication when consumed in sufficient quantity. Ethanol is a volatile, flammable, colorless liquid with a slight chemical odor. It is used as an antiseptic, a solvent, a fuel, and, due to its low freezing point, the active fluid in post-mercury thermometers. The molecule is a simple one, being an ethyl group linked to a hydroxyl group. Its structural formula, CH3CH2OH, is often abbreviated as C2H5OH, C2H6O, or EtOH.",
        "link": 'https://en.wikipedia.org/wiki/Ethanol',
        "geometry": [
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(-3,0,0),
                "bonds": []         // connects to nothing (carbon @ pos 0)
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(-4.5,3.5,0),
                "bonds": [[0]]      // connects to carbon (pos 0)
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(-4.5,-3.5,-3),
                "bonds": [[0]]      // connects to carbon (pos 0)
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(-4.5,-3.5,3),
                "bonds": [[0]]      // connects to carbon (pos 0)
                    }, 
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(3,0,0),
                "bonds": [[0]]      // connects to carbon (pos 0)
                    }, 
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(3,4,0),
                "bonds": [[4]]      // connects to carbon (pos 4)
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(6,4,0),
                "bonds": [[5]]      // connects to oxygen (pos 5)
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(4.5,-3.5,-3),
                "bonds": [[4]]      // connects to carbon (pos 4)
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(4.5,-3.5,3),
                "bonds": [[4]]      // connects to carbon (pos 4)
                    }
            ],
        "zoomLevel": 30
    },
    "CAFFEINE": {
        "name": "Caffeine",
        "makeup": "C8H10N4O2",
        "description": "Caffeine is a central nervous system (CNS) stimulant of the methylxanthine class. It is the world's most widely consumed psychoactive drug, but — unlike many other psychoactive substances — it is legal and unregulated in nearly all parts of the world. There are several known mechanisms of action to explain the effects of caffeine. The most prominent is that it reversibly blocks the action of adenosine on its receptor and consequently prevents the onset of drowsiness induced by adenosine. Caffeine also stimulates certain portions of the autonomic nervous system.",
        "link": 'https://en.wikipedia.org/wiki/Caffeine',
        "geometry": [
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(0,0,-3.5),
                "bonds": []
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(0,0,3.5),
                "bonds": []
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(-3,-6,0),
                "bonds": []
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(0,-3,0),
                "bonds": [[0], [1], [2]]
                    },
            {
                "atom": ATOMS.NITROGEN,
                "position": new vec3(6,-6,0),
                "bonds": [[3]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(12,-3,0),
                "bonds": [[4]]
                    },
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(12,3,0),
                "bonds": [[5, 2]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(18,-6,0),
                "bonds": [[5]]
                    },
            {
                "atom": ATOMS.NITROGEN,
                "position": new vec3(24,-4,0),
                "bonds": [[7]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(24,-7,0),
                "bonds": [[8]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(25,5,-3.5),
                "bonds": [[9]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(25,5,3.5),
                "bonds": [[9]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(31,3,0),
                "bonds": [[9]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(28.5,-8.7,0),
                "bonds": [[8]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(34,-8.7,0),
                "bonds": [[13]]
                    }, 
            {
                "atom": ATOMS.NITROGEN,
                "position": new vec3(24.5,-13.5,0),
                "bonds": [[13, 2]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(18,-12,0),
                "bonds": [[15], [7, 2]]
                    },
            {
                "atom": ATOMS.NITROGEN,
                "position": new vec3(12,-15,0),
                "bonds": [[16]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(12,-12,0),
                "bonds": [[17]]
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(7.5,-23,0),
                "bonds": [[18]]
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(15,-23,-3.5),
                "bonds": [[18]]
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(15,-23,3.5),
                "bonds": [[18]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(6,-12,0),
                "bonds": [[17], [4]]
                    }, 
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(0,-15,0),
                "bonds": [[22, 2]]
                    }
            ],
        "zoomLevel": 42
    },

    "ISOPROPYL_ALCOHOL": {
        "name": "Isopropyl Alcohol",
        "makeup": "(CH3)2CHOH",
        "description": "Isopropyl alcohol (IUPAC name propan-2-ol), also called isopropanol or dimethyl carbinol, is a compound with the chemical formula C3H8O or C3H7OH or CH3CHOHCH3(sometimes represented as i-PrOH). It is a colorless, flammable chemical compound with a strong odor. As a propyl group linked to a hydroxyl group, it is the simplest example of a secondary alcohol, where the alcohol carbon atom is attached to two other carbon atoms, sometimes shown as (CH3)2CHOH. It is a structural isomer of 1-propanol. It has a wide variety of industrial and household uses.",
        "link": 'https://en.wikipedia.org/wiki/Isopropyl_alcohol',
        "geometry": [
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(0,0,0),
                "bonds": []
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(3,-6,-3.5),
                "bonds": []
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(3,-6,3.5),
                "bonds": []
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(4.5,-2,0),
                "bonds": [[0], [1], [2]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(10,4,0),
                "bonds": [[3]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(10,8,3.5),
                "bonds": [[4]]
                    }, 
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(10,8,-6),
                "bonds": [[4]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(6,10,-6),
                "bonds": [[6]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(15,-2,0),
                "bonds": [[4]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(19,0,0),
                "bonds": [[8]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(16,-6,-3.5),
                "bonds": [[8]]
                    },
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(16,-6,3.5),
                "bonds": [[8]]
                    }
            ],
        "zoomLevel": 30
    },
    "TRINITROTOLUENE": {
        "name": "(TNT) Trinitrotoluene",
        "makeup": "C6H2(NO2)3CH3",
        "description": "Trinitrotoluene (/ˌtraɪˌnaɪtroʊˈtɒljuːˌiːn, -ljəˌwiːn/; TNT), or more specifically 2,4,6-trinitrotoluene, is a chemical compound with the formula C6H2(NO2)3CH3. This yellow-colored solid is sometimes used as a reagent in chemical synthesis, but it is best known as an explosive material with convenient handling properties. The explosive yield of TNT is considered to be the standard measure of bombs and other explosives. In chemistry, TNT is used to generate charge transfer salts. While the two words are sometimes used interchangeably in common conversation, TNT is not the same as dynamite, a special formatting of nitroglycerin for use as an industrial explosive.",
        "link": "https://en.wikipedia.org/wiki/Trinitrotoluene",
        "geometry": [
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(0,-2,0),
                "bonds": []
                    }, 
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(6,2,0),
                "bonds": [[0, 2]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(12,-2,0),
                "bonds": [[1]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(12,-10,0),
                "bonds": [[2, 2]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(6,-14,0),
                "bonds": [[3]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(0,-10,0),
                "bonds": [[4, 2], [0]]
                    },

            {
                "atom": ATOMS.NITROGEN,
                "position": new vec3(-7,1,0),
                "bonds": [[0]]
                    },
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(-10,7,-3),
                "bonds": [[6, 2]]
                    },
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(-13,-2,3),
                "bonds": [[6]]
                    },
            {
                "atom": ATOMS.CARBON,
                "position": new vec3(6,10,0),
                "bonds": [[1]]
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(3,12,4),
                "bonds": [[9]]
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(3,12,-4),
                "bonds": [[9]]
                    }, 
            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(11,12,0),
                "bonds": [[9]]
                    }, 

            {
                "atom": ATOMS.NITROGEN,
                "position": new vec3(19,1,0),
                "bonds": [[2]]
                    }, 
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(21,7,3),
                "bonds": [[13]]
                    }, 
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(25,-2,-3),
                "bonds": [[13, 2]]
                    }, 

            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(17,-13,0),
                "bonds": [[3]]
                    }, 

            {
                "atom": ATOMS.NITROGEN,
                "position": new vec3(6,-18,0),
                "bonds": [[4]]
                    }, 
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(1,-24,-3),
                "bonds": [[17]]
                    }, 
            {
                "atom": ATOMS.OXYGEN,
                "position": new vec3(11,-24,3),
                "bonds": [[17, 2]]
                    }, 

            {
                "atom": ATOMS.HYDROGEN,
                "position": new vec3(-5,-13,0),
                "bonds": [[5]]
                    }

            ],
        "zoomLevel": 54
    }
};