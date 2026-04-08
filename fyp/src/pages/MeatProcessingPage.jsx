import React, { useState } from 'react';
import './MeatProcessingPage.css';
import { useNavigate } from 'react-router-dom';
const MeatProcessingPage = () => {
  const [selectedMeat, setSelectedMeat] = useState('beef');
  const [selectedTab, setSelectedTab] = useState('deboning');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ===== SIDEBAR - MEAT TYPES (#284a4b color) =====
  const meatTypes = [
    { id: 1, name: 'Beef', icon: '🐄', key: 'beef' },
    { id: 2, name: 'Lamb', icon: '🐑', key: 'lamb' },
    { id: 3, name: 'Poultry', icon: '🍗', key: 'poultry' },
    { id: 4, name: 'Fish', icon: '🐟', key: 'fish' },
    { id: 5, name: 'Game', icon: '🦌', key: 'game' }
  ];

  // ===== COMPLETE MEAT PROCESSING DATA =====
  const meatData = {
    beef: {
      name: 'Beef',
      deboning: [
        {
          id: 1,
          name: 'Beef Boning Knife',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400',
          tagline: 'Flexible precision for beef bone removal',
          fullDesc: 'Thin, narrow blade that flexes easily to follow bone contours. Essential for deboning beef primals like chuck, rib, and round.',
          tools: [
            '6-inch flexible boning knife',
            'Steel for honing',
            'Cutting board with groove',
            'Cut-resistant gloves'
          ],
          steps: [
            'Identify bone structure - feel with fingers first',
            'Make initial cut along bone with knife tip facing bone',
            'Scrape meat away from bone using short, smooth strokes',
            'Follow natural seams where meat separates easily',
            'Remove bone completely and clean remaining cartilage'
          ],
          tips: 'Keep knife sharp, use tip for detailed work, follow bone contour',
          bestFor: 'Beef chuck roll, rib sections, round cuts'
        },
        {
          id: 2,
          name: 'Breaking Knife',
          image: 'https://images.unsplash.com/photo-1563620915-84718a1993da?auto=format&fit=crop&w=400',
          tagline: 'Heavy-duty primal cutting',
          fullDesc: 'Stiff, curved blade for breaking down large primal cuts. Separates muscles from bone in beef and pork.',
          tools: [
            '10-inch breaking knife',
            'Honing steel',
            'Heavy cutting board',
            'Safety gloves'
          ],
          steps: [
            'Position primal cut on board',
            'Follow natural muscle seams',
            'Use curved blade to separate muscles',
            'Cut through connective tissue',
            'Separate into subprimal cuts'
          ],
          tips: 'Use long smooth strokes, let knife do the work',
          bestFor: 'Beef primals, large roasts'
        },
        {
          id: 3,
          name: 'Beef Cleaver',
          image: 'https://images.unsplash.com/photo-1593617999965-5dc82e9a1626?auto=format&fit=crop&w=400',
          tagline: 'Through-bone chopping',
          fullDesc: 'Heavy rectangular blade that powers through bones and joints. Used for splitting ribs, cutting through joints, and portioning bone-in cuts.',
          tools: [
            '8-inch cleaver',
            'Cutting board',
            'Safety gloves',
            'Steel mesh apron'
          ],
          steps: [
            'Position bone on cutting board',
            'Raise cleaver with controlled motion',
            'Strike through bone with confidence',
            'Use heel of blade for thick bones',
            'Clean blade between cuts'
          ],
          tips: 'Let weight of cleaver do work, aim accurately',
          bestFor: 'Beef ribs, shank, joint separation'
        },
        {
          id: 4,
          name: 'Fillet Knife (Beef)',
          image: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=400',
          tagline: 'Precision trimming and detailing',
          fullDesc: 'Long flexible blade for detailed work around bones and silver skin removal. Perfect for tenderloin preparation.',
          tools: [
            '8-inch fillet knife',
            'Sharpening steel',
            'Cutting board',
            'Tweezers for silver skin'
          ],
          steps: [
            'Remove silver skin with angled cuts',
            'Trim excess fat',
            'Separate chain meat',
            'Clean tenderloin surface',
            'Portion into steaks'
          ],
          tips: 'Keep blade at slight angle, work slowly',
          bestFor: 'Beef tenderloin, strip loin, silver skin removal'
        }
      ],
      cleaning: [
        {
          id: 1,
          name: 'Trimming Knife',
          image: 'https://images.unsplash.com/photo-1563620915-84718a1993da?auto=format&fit=crop&w=400',
          tagline: 'Silver skin and fat removal',
          fullDesc: 'Short, curved blade perfect for removing silver skin, excess fat, and connective tissue from steaks and roasts.',
          tools: [
            '4-inch trimming knife',
            'Sharpening steel',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Identify silver skin direction',
            'Slide knife under membrane',
            'Angle blade slightly upward',
            'Push forward with gentle pressure',
            'Remove in one piece if possible'
          ],
          tips: 'Keep blade cold, work on chilled meat',
          bestFor: 'Beef steaks, tenderloin, roasts'
        },
        {
          id: 2,
          name: 'Kitchen Shears',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400',
          tagline: 'Multi-purpose cutting',
          fullDesc: 'Heavy-duty scissors for cutting through fat, trimming connective tissue, and portioning beef.',
          tools: [
            'Heavy-duty shears',
            'Cleaning brush',
            'Cutting board',
            'Towels'
          ],
          steps: [
            'Open shears fully',
            'Position on fat/connective tissue',
            'Cut with firm pressure',
            'Clean blades between cuts',
            'Disassemble for thorough cleaning'
          ],
          tips: 'Use notch for bone, wash immediately',
          bestFor: 'Fat trimming, connective tissue, portioning'
        },
        {
          id: 3,
          name: 'Meat Scraper',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400',
          tagline: 'Bone and cartilage cleaning',
          fullDesc: 'Stiff, blunt tool for scraping bones clean of meat and cartilage for stocks and broths.',
          tools: [
            'Stainless steel scraper',
            'Cutting board',
            'Stock pot',
            'Towels'
          ],
          steps: [
            'Hold bone firmly',
            'Scrape away from body',
            'Remove all meat fragments',
            'Clean cartilage from joints',
            'Rinse bones thoroughly'
          ],
          tips: 'Work over stock pot, save scraps for stock',
          bestFor: 'Beef bones, rib racks, stock preparation'
        },
        {
          id: 4,
          name: 'Tweezers/Pluckers',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400',
          tagline: 'Fine hair and pin bone removal',
          fullDesc: 'Precision tool for removing fine hairs, pin bones, and small bone fragments from beef cuts.',
          tools: [
            'Stainless steel tweezers',
            'Magnifying lamp (optional)',
            'Paper towels',
            'Small bowl'
          ],
          steps: [
            'Identify pin bones or hairs',
            'Grasp firmly at base',
            'Pull in direction of growth',
            'Remove completely',
            'Discard properly'
          ],
          tips: 'Work under good light, check surface by feel',
          bestFor: 'Pin bones, hairs, small fragments'
        }
      ],
      cuts: [
        {
          id: 1,
          name: 'Chuck Cuts',
          image: 'ChickCut.png',
          tagline: 'Shoulder area - flavorful and economical',
          fullDesc: 'Chuck comes from the shoulder area. Well-marbled with rich beef flavor. Best for slow cooking, braising, and grinding.',
          tools: [
            'Breaking knife',
            'Cleaver',
            'Cutting board',
            'Boning knife'
          ],
          steps: [
            'Separate chuck from rib between 5th-6th rib',
            'Remove blade bone and related cartilage',
            'Separate clod and mock tender',
            'Divide into chuck roll and chuck tender',
            'Portion into steaks or roasts'
          ],
          tips: 'Great for pot roast, stew meat, ground beef',
          bestFor: 'Pot roast, stew meat, burgers, braising'
        },
        {
          id: 2,
          name: 'Rib Cuts',
          image: 'RibCut.png',
          tagline: 'Premium tender cuts',
          fullDesc: 'Rib section between chuck and loin. Highly marbled, extremely tender. Home of Ribeye steak and Prime Rib.',
          tools: [
            'Rib knife',
            'Bandsaw (for bone-in)',
            'Breaking knife',
            'Steel'
          ],
          steps: [
            'Separate rib from chuck between 5th-6th rib',
            'Separate rib from loin between 12th-13th rib',
            'Remove back strap and feather bones',
            'Cut into ribeye steaks or leave whole for prime rib',
            'Trim excess fat cap'
          ],
          tips: 'Best for grilling and roasting',
          bestFor: 'Ribeye steak, prime rib, rib roast'
        },
        {
          id: 3,
          name: 'Loin Cuts',
          image: 'LoinCut.png',
          tagline: 'Most tender cuts',
          fullDesc: 'Loin runs from ribs to hip. Least exercised area, most tender. Home of T-bone, Porterhouse, Strip, and Tenderloin.',
          tools: [
            'Boning knife',
            'Bandsaw (for bone-in)',
            'Breaking knife',
            'Fillet knife'
          ],
          steps: [
            'Separate short loin from sirloin',
            'Remove tenderloin whole',
            'Cut strip loin into New York strips',
            'Cut T-bone/Porterhouse from bone-in sections',
            'Trim silver skin from tenderloin'
          ],
          tips: 'Most expensive cuts, best for quick high-heat cooking',
          bestFor: 'NY Strip, Filet Mignon, T-bone, Porterhouse'
        },
        {
          id: 4,
          name: 'Round Cuts',
          image: 'RoundCut.png',
          tagline: 'Lean hind leg cuts',
          fullDesc: 'Round comes from the hind leg. Lean and tough, but flavorful. Best with moist heat or thin slicing.',
          tools: [
            'Breaking knife',
            'Boning knife',
            'Meat mallet',
            'Slicing knife'
          ],
          steps: [
            'Separate round from sirloin',
            'Separate top round, bottom round, eye of round',
            'Remove fat and connective tissue',
            'Cut into roasts or steaks',
            'Cube or tenderize for various uses'
          ],
          tips: 'Marinate for tenderness, slice thin against grain',
          bestFor: 'Roast beef, cube steak, jerky, stew meat'
        },
        {
          id: 5,
          name: 'Brisket',
          image: 'BrisketCut.png',
          tagline: 'Flavorful chest cut',
          fullDesc: 'Brisket comes from the chest area between front legs. Tough but incredibly flavorful when cooked properly.',
          tools: [
            'Brisket knife',
            'Trimming knife',
            'Injector (optional)',
            'Smoker or Dutch oven'
          ],
          steps: [
            'Separate whole brisket',
            'Trim fat cap to 1/4 inch',
            'Separate flat and point muscles',
            'Remove hard fat between muscles',
            'Trim edges square for even cooking'
          ],
          tips: 'Low and slow cooking, perfect for BBQ',
          bestFor: 'BBQ brisket, corned beef, pastrami'
        },
        {
          id: 6,
          name: 'Plate Cuts',
          image: 'PlateCut.png',
          tagline: 'Belly area cuts',
          fullDesc: 'Plate is the belly area below ribs. Rich, fatty, flavorful. Home of skirt steak and short ribs.',
          tools: [
            'Breaking knife',
            'Boning knife',
            'Cleaver (for ribs)',
            'Slicing knife'
          ],
          steps: [
            'Separate plate from brisket and flank',
            'Remove skirt steak (inside and outside)',
            'Cut short ribs from plate',
            'Trim excess fat',
            'Portion into serving sizes'
          ],
          tips: 'Skirt steak great for fajitas, short ribs for braising',
          bestFor: 'Skirt steak, short ribs, ground beef'
        },
        {
          id: 7,
          name: 'Flank Cuts',
          image: 'FlankCut.png',
          tagline: 'Lean belly cut',
          fullDesc: 'Flank comes from the belly area near hind legs. Single long, flat muscle with distinct grain. Very beefy flavor.',
          tools: [
            'Flank knife',
            'Slicing knife',
            'Meat tenderizer',
            'Cutting board'
          ],
          steps: [
            'Separate whole flank steak',
            'Remove silver skin and membrane',
            'Trim excess fat',
            'Score surface lightly if desired',
            'Slice against grain for serving'
          ],
          tips: 'Marinate, cook quickly, slice thin against grain',
          bestFor: 'Flank steak, London broil, fajitas'
        },
        {
          id: 8,
          name: 'Shank Cuts',
          image: 'ShankCut.png',
          tagline: 'Leg cuts with marrow bone',
          fullDesc: 'Shank comes from the leg. Tough, sinewy, but full of flavor. Contains marrow bone that adds richness to dishes.',
          tools: [
            'Bandsaw',
            'Cleaver',
            'Boning knife',
            'Stock pot'
          ],
          steps: [
            'Separate foreshank and hindshank',
            'Cut crosswise into 2-inch sections',
            'Clean bone edges',
            'Trim excessive sinew',
            'Tie with twine to hold shape'
          ],
          tips: 'Long braising, marrow adds richness',
          bestFor: 'Osso buco, braised beef shank, beef stock'
        }
      ]
    },
    lamb: {
      name: 'Lamb',
      deboning: [
        {
          id: 1,
          name: 'Lamb Boning Knife',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400',
          tagline: 'Precision deboning for lamb',
          fullDesc: 'Flexible blade designed specifically for lamb. Follows curved bones of shoulder and leg easily.',
          tools: [
            '6-inch boning knife',
            'Honing steel',
            'Cutting board',
            'Safety gloves'
          ],
          steps: [
            'Follow natural muscle seams',
            'Cut along bone contours',
            'Scrape meat clean from bones',
            'Remove shoulder blade whole',
            'Clean leg bones at joints'
          ],
          tips: 'Work slowly, let knife follow bone',
          bestFor: 'Lamb shoulder, leg, rack preparation'
        }
      ],
      cleaning: [
        {
          id: 1,
          name: 'Lamb Trimming Knife',
          image: 'https://images.unsplash.com/photo-1563620915-84718a1993da?auto=format&fit=crop&w=400',
          tagline: 'Fat and silver skin removal',
          fullDesc: 'Remove excess fat cap and silver skin from lamb cuts. Essential for cleaning racks and loins.',
          tools: [
            '4-inch trimming knife',
            'Paper towels',
            'Cutting board',
            'Sharpening steel'
          ],
          steps: [
            'Remove thick outer fat cap',
            'Peel silver skin from racks',
            'Clean frenching bones',
            'Trim connective tissue',
            'Final surface cleaning'
          ],
          tips: 'Chill meat before trimming',
          bestFor: 'Lamb racks, loins, chops'
        }
      ],
      cuts: [
        {
          id: 1,
          name: 'Shoulder Cuts',
          image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=400',
          tagline: 'Flavorful, economical cuts',
          fullDesc: 'Lamb shoulder is well-exercised, very flavorful. Best for slow cooking and braising.',
          tools: [
            'Boning knife',
            'Breaking knife',
            'Butcher twine',
            'Cutting board'
          ],
          steps: [
            'Remove shoulder blade bone',
            'Roll and tie shoulder roast',
            'Cut shoulder chops',
            'Cube for stew meat',
            'Trim excess fat'
          ],
          tips: 'Great for curries and braises',
          bestFor: 'Shoulder roast, shoulder chops, lamb stew'
        },
        {
          id: 2,
          name: 'Rack Cuts',
          image: 'LambRibCut.png',
          tagline: 'Elegant, tender cuts',
          fullDesc: 'Lamb rack is premium cut from rib section. Can be roasted whole or cut into chops.',
          tools: [
            'Rack knife',
            'Frenched knife',
            'Cleaver',
            'Cutting board'
          ],
          steps: [
            'French rack - scrape meat from bone ends',
            'Remove chine bone',
            'Trim fat cap to 1/4 inch',
            'Separate into rib chops',
            'Tie rack for roasting'
          ],
          tips: 'French bones for elegant presentation',
          bestFor: 'Rack of lamb, lamb rib chops'
        },
        {
          id: 3,
          name: 'Loin Cuts',
          image: 'LambLoinCut.png',
          tagline: 'Most tender cuts',
          fullDesc: 'Lamb loin is tender, mild flavor. Home of loin chops and tenderloin.',
          tools: [
            'Boning knife',
            'Slicing knife',
            'Cutting board',
            'Butcher twine'
          ],
          steps: [
            'Remove tenderloin whole',
            'Cut loin chops from bone-in section',
            'Trim silver skin',
            'Portion noisettes from boneless loin',
            'Tie for roasting'
          ],
          tips: 'Quick, high-heat cooking',
          bestFor: 'Loin chops, lamb tenderloin, noisettes'
        },
        {
          id: 4,
          name: 'Leg Cuts',
          image: 'LambLegCut.png',
          tagline: 'Classic roasting cuts',
          fullDesc: 'Lamb leg is lean, versatile. Can be roasted bone-in, boneless, or cut into steaks.',
          tools: [
            'Boning knife',
            'Trussing needle',
            'Butcher twine',
            'Cutting board'
          ],
          steps: [
            'Remove aitch bone and leg bone',
            'Butterfly leg for even cooking',
            'Roll and tie boneless roast',
            'Cut leg steaks from bone-in section',
            'Trim excess fat'
          ],
          tips: 'Great for roasting, grilling',
          bestFor: 'Leg of lamb, leg steaks, butterflied leg'
        },
        {
          id: 5,
          name: 'Shank Cuts',
          image: 'LambShankCut.png',
          tagline: 'Rich, gelatinous cuts',
          fullDesc: 'Lamb shanks are tough but become tender and rich when braised. Full of flavor and collagen.',
          tools: [
            'Cleaver',
            'Boning knife',
            'Butcher twine',
            'Dutch oven'
          ],
          steps: [
            'Separate foreshanks',
            'Trim excess fat and sinew',
            'French bone if desired',
            'Tie with twine to hold shape',
            'Portion crosswise for osso buco'
          ],
          tips: 'Long, slow braising',
          bestFor: 'Braised lamb shanks, lamb osso buco'
        }
      ]
    },
    poultry: {
      name: 'Poultry',
      deboning: [
        {
          id: 1,
          name: 'Poultry Boning Knife',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400',
          tagline: 'Flexible deboning for chicken',
          fullDesc: 'Thin, flexible blade perfect for following chicken and turkey bone structure. Essential for supreme cuts.',
          tools: [
            '5-inch boning knife',
            'Kitchen shears',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Remove legs and thighs',
            'Separate breast from carcass',
            'Remove wishbone',
            'Debone thighs',
            'Supreme chicken breasts'
          ],
          tips: 'Save carcass for stock',
          bestFor: 'Chicken, turkey, game birds'
        }
      ],
      cleaning: [
        {
          id: 1,
          name: 'Poultry Shears',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400',
          tagline: 'Multi-purpose poultry cutting',
          fullDesc: 'Heavy-duty shears for cutting through joints, trimming fat, and spatchcocking birds.',
          tools: [
            'Poultry shears',
            'Cutting board',
            'Cleaning brush',
            'Towels'
          ],
          steps: [
            'Remove backbone for spatchcock',
            'Cut through joints between legs/thighs',
            'Trim excess fat and skin',
            'Remove wishbone',
            'Clean cavity thoroughly'
          ],
          tips: 'Use notch for bones, wash immediately',
          bestFor: 'Spatchcocking, portioning, trimming'
        }
      ],
      cuts: [
        {
          id: 1,
          name: 'Whole Chicken',
          image: 'WholeChickenCut.png',
          tagline: 'Versatile whole bird',
          fullDesc: 'Whole chicken can be roasted whole or broken down into parts. Most economical way to buy poultry.',
          tools: [
            'Chef knife',
            'Poultry shears',
            'Cutting board',
            'Butcher twine'
          ],
          steps: [
            'Remove giblets from cavity',
            'Rinse and pat dry',
            'Truss for roasting',
            'Or breakdown into 8 pieces',
            'Save carcass for stock'
          ],
          tips: 'Dry skin thoroughly for crispy results',
          bestFor: 'Roast chicken, stock, multiple meals'
        },
        {
          id: 2,
          name: 'Chicken Breast',
          image: 'ChikBreastCut.png',
          tagline: 'Lean, versatile cut',
          fullDesc: 'Boneless skinless chicken breast is lean and mild. Can be pounded, grilled, sautéed, or baked.',
          tools: [
            'Fillet knife',
            'Meat mallet',
            'Cutting board',
            'Plastic wrap'
          ],
          steps: [
            'Remove tenderloin',
            'Trim fat and cartilage',
            'Butterfly for even thickness',
            'Pound to even thickness',
            'Portion into cutlets'
          ],
          tips: 'Pound to even thickness for even cooking',
          bestFor: 'Chicken piccata, parmesan, salads, sandwiches'
        },
        {
          id: 3,
          name: 'Chicken Thigh',
          image: 'ChickThighCut.png',
          tagline: 'Juicy, flavorful cut',
          fullDesc: 'Chicken thighs are darker, more flavorful, and stay moist during cooking. Available bone-in or boneless.',
          tools: [
            'Boning knife',
            'Kitchen shears',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Remove bone (for boneless)',
            'Trim excess fat and skin',
            'Butterfly for even thickness',
            'Portion into bite-sized pieces',
            'Leave whole for grilling'
          ],
          tips: 'More forgiving than breast, hard to overcook',
          bestFor: 'Grilling, stir-fry, braising, curries'
        },
        {
          id: 4,
          name: 'Chicken Leg Quarter',
          image: 'ChickLegQuarter.png',
          tagline: 'Drumstick and thigh together',
          fullDesc: 'Leg quarter includes thigh and drumstick attached. Economical and flavorful, great for roasting.',
          tools: [
            'Chef knife',
            'Kitchen shears',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Separate thigh from drumstick at joint',
            'Remove backbone',
            'Trim excess skin and fat',
            'Score meat for marinade',
            'Leave whole for roasting'
          ],
          tips: 'Great value, full of flavor',
          bestFor: 'Roasted chicken, fried chicken, braised chicken'
        },
        {
          id: 5,
          name: 'Chicken Wings',
          image: 'ChickWingsCut.png',
          tagline: 'Perfect for appetizers',
          fullDesc: 'Chicken wings divided into drumette, flat, and tip. Popular for frying and saucing.',
          tools: [
            'Chef knife',
            'Kitchen shears',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Separate drumette from flat at joint',
            'Remove wing tip',
            'Trim excess skin',
            'Cut flat into two pieces',
            'Pat dry before cooking'
          ],
          tips: 'Dry thoroughly for crispy skin',
          bestFor: 'Buffalo wings, grilled wings, appetizers'
        },
        {
          id: 6,
          name: 'Ground Poultry',
          image: 'GroundPoltery.png',
          tagline: 'Lean ground meat',
          fullDesc: 'Ground chicken or turkey from trimmings and dark meat. Leaner alternative to ground beef.',
          tools: [
            'Meat grinder',
            'Mixing bowl',
            'Spatula',
            'Parchment paper'
          ],
          steps: [
            'Chill meat and grinder parts',
            'Cut into 1-inch cubes',
            'Grind through coarse plate',
            'Mix gently',
            'Portion and shape'
          ],
          tips: 'Add fat or moisture for lean ground breast',
          bestFor: 'Burgers, meatballs, tacos, chili'
        }
      ]
    },
    fish: {
      name: 'Fish',
      deboning: [
        {
          id: 1,
          name: 'Fish Fillet Knife',
          image: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=400',
          tagline: 'Ultra-flexible for fish',
          fullDesc: 'Long, extremely flexible blade that glides along the backbone. Essential for clean fish fillets.',
          tools: [
            '8-inch fillet knife',
            'Fish scaler',
            'Cutting board',
            'Tweezers for pin bones'
          ],
          steps: [
            'Scale fish if needed',
            'Cut behind gills to backbone',
            'Run knife along backbone',
            'Lift fillet away from ribs',
            'Remove pin bones with tweezers'
          ],
          tips: 'Keep knife very sharp, work slowly',
          bestFor: 'Round fish, flat fish, all species'
        }
      ],
      cleaning: [
        {
          id: 1,
          name: 'Fish Scaler',
          image: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&w=400',
          tagline: 'Scale removal tool',
          fullDesc: 'Tool for removing fish scales before filleting. Prevents scales from flying everywhere.',
          tools: [
            'Fish scaler',
            'Running water',
            'Plastic bag',
            'Cutting board'
          ],
          steps: [
            'Rinse fish',
            'Hold tail firmly',
            'Scrape from tail to head',
            'Work under running water',
            'Rinse thoroughly'
          ],
          tips: 'Scale in plastic bag to contain mess',
          bestFor: 'All scaled fish'
        }
      ],
      cuts: [
        {
          id: 1,
          name: 'Whole Fish',
          image: 'WholeFishCuts.png',
          tagline: 'Beautiful presentation',
          fullDesc: 'Whole fish can be baked, grilled, or poached. Looks impressive and retains maximum moisture.',
          tools: [
            'Chef knife',
            'Kitchen shears',
            'Fish scaler',
            'Cutting board'
          ],
          steps: [
            'Scale and gut fish',
            'Remove gills',
            'Rinse cavity thoroughly',
            'Score skin for even cooking',
            'Pat dry before cooking'
          ],
          tips: 'Check for freshness: clear eyes, red gills',
          bestFor: 'Baking, grilling, poaching'
        },
        {
          id: 2,
          name: 'Fish Fillets',
          image: 'FishFillet.png',
          tagline: 'Boneless portions',
          fullDesc: 'Boneless, skin-on or skin-off fillets. Most popular fish cut for versatility.',
          tools: [
            'Fillet knife',
            'Tweezers',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Remove pin bones with tweezers',
            'Trim belly flap',
            'Score skin to prevent curling',
            'Portion into serving sizes',
            'Pat dry before cooking'
          ],
          tips: 'Cook skin-side down first for crispy skin',
          bestFor: 'Pan-searing, baking, grilling'
        },
        {
          id: 3,
          name: 'Fish Steaks',
          image: 'FishSteakCut.png',
          tagline: 'Cross-section cuts',
          fullDesc: 'Crosswise cuts through larger fish with bone-in. Holds together well for grilling.',
          tools: [
            'Chef knife',
            'Cleaver',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Scale and gut fish',
            'Remove head',
            'Cut 1-inch thick steaks',
            'Rinse and pat dry',
            'Remove bloodline if desired'
          ],
          tips: 'Great for firm-fleshed fish like salmon',
          bestFor: 'Grilling, broiling, baking'
        },
        {
          id: 4,
          name: 'Fish Loins',
          image: 'FishLoincCut.png',
          tagline: 'Premium center cuts',
          fullDesc: 'Thick, center-cut portions from large fish like tuna, salmon, cod. Most premium cut.',
          tools: [
            'Slicing knife',
            'Fillet knife',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Remove dark bloodline',
            'Trim thin belly edge',
            'Cut crosswise into portions',
            'Remove pin bones',
            'Pat dry before cooking'
          ],
          tips: 'Cook like steak - sear outside, rare inside',
          bestFor: 'Searing, sushi/sashimi, grilling'
        },
        {
          id: 5,
          name: 'Tail Section',
          image: 'FishTailCut.png',
          tagline: 'Leaner rear portion',
          fullDesc: 'Tail section is thinner and leaner than center cuts. Cooks quickly, good value.',
          tools: [
            'Chef knife',
            'Fillet knife',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Separate tail from loin',
            'Remove skin if desired',
            'Check for bones',
            'Portion into serving sizes',
            'Pat dry before cooking'
          ],
          tips: 'More economical, great for sandwiches',
          bestFor: 'Fish sandwiches, tacos, quick cooking'
        },
        {
          id: 6,
          name: 'Fish Head & Bones',
          image: 'FishHeadCut.png',
          tagline: 'For stocks and soups',
          fullDesc: 'Fish heads and bones are rich in collagen and flavor. Essential for fish stock.',
          tools: [
            'Cleaver',
            'Stock pot',
            'Cheesecloth',
            'Cutting board'
          ],
          steps: [
            'Remove gills (bitter)',
            'Rinse thoroughly',
            'Chop into smaller pieces',
            'Cover with cold water',
            'Simmer 30-45 minutes'
          ],
          tips: 'Never boil, skim foam, don\'t overcook',
          bestFor: 'Fish stock, soups, bisques'
        }
      ]
    },
    game: {
      name: 'Game',
      deboning: [
        {
          id: 1,
          name: 'Game Boning Knife',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400',
          tagline: 'Specialized for wild game',
          fullDesc: 'Flexible blade designed for venison, rabbit, and wild boar. Follows unique bone structures of game animals.',
          tools: [
            '6-inch boning knife',
            'Honing steel',
            'Cutting board',
            'Game shears'
          ],
          steps: [
            'Remove hide/skin',
            'Follow natural muscle seams',
            'Cut along bone contours',
            'Remove silver skin',
            'Separate primal cuts'
          ],
          tips: 'Game meat is lean, work carefully',
          bestFor: 'Venison, rabbit, wild boar'
        }
      ],
      cleaning: [
        {
          id: 1,
          name: 'Game Shears',
          image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400',
          tagline: 'Heavy-duty game processing',
          fullDesc: 'Heavy-duty shears for cutting through game bird bones, rabbit joints, and trimming wild game.',
          tools: [
            'Game shears',
            'Cutting board',
            'Cleaning brush',
            'Towels'
          ],
          steps: [
            'Remove shot pellets',
            'Trim bruised meat',
            'Cut joints for portioning',
            'Remove silver skin',
            'Clean cavity thoroughly'
          ],
          tips: 'Inspect carefully for shot',
          bestFor: 'Pheasant, quail, rabbit, venison trimming'
        }
      ],
      cuts: [
        {
          id: 1,
          name: 'Venison Cuts',
          image: 'https://images.unsplash.com/photo-1607623814075-e51df0bdc416?auto=format&fit=crop&w=400',
          tagline: 'Lean, rich deer meat',
          fullDesc: 'Venison is very lean, deep red, and rich flavor. Similar structure to beef but much leaner.',
          tools: [
            'Boning knife',
            'Breaking knife',
            'Game saw',
            'Cutting board'
          ],
          steps: [
            'Remove silver skin (essential)',
            'Separate hindquarter, forequarter, loin',
            'Cut steaks from loin',
            'Cube shoulder for stew',
            'Grind trimmings'
          ],
          tips: 'Add fat when grinding, don\'t overcook',
          bestFor: 'Venison steaks, roasts, stew, jerky, burgers'
        },
        {
          id: 2,
          name: 'Rabbit Cuts',
          image: 'RabbitCut.png',
          tagline: 'Delicate white meat',
          fullDesc: 'Rabbit is lean, mild, and similar to chicken. Whole rabbit can be roasted or cut into pieces.',
          tools: [
            'Boning knife',
            'Game shears',
            'Cutting board',
            'Paper towels'
          ],
          steps: [
            'Remove saddle (back)',
            'Separate hind legs',
            'Separate forelegs',
            'Cut loin into medallions',
            'Save bones for stock'
          ],
          tips: 'Brine to keep moist, don\'t overcook',
          bestFor: 'Roasted rabbit, braised rabbit, rabbit stew'
        },
        {
          id: 3,
          name: 'Pheasant/Quail',
          image: 'QuailCut.png',
          tagline: 'Elegant game birds',
          fullDesc: 'Pheasant and quail are lean game birds with delicate flavor. Similar to chicken but more refined.',
          tools: [
            'Game shears',
            'Boning knife',
            'Cutting board',
            'Butcher twine'
          ],
          steps: [
            'Remove breast meat',
            'Separate legs and thighs',
            'French wing tips',
            'Save carcass for stock',
            'Truss for roasting'
          ],
          tips: 'Bard with bacon to prevent drying',
          bestFor: 'Roasted game birds, grilled, braised'
        },
       
        {
          id: 4,
          name: 'Elk/Moose',
          image: 'ElkCut.png',
          tagline: 'Lean, sweet venison',
          fullDesc: 'Similar to venison but milder, sweeter. Very lean, requires careful cooking.',
          tools: [
            'Breaking knife',
            'Boning knife',
            'Game saw',
            'Cutting board'
          ],
          steps: [
            'Remove all silver skin',
            'Separate primals',
            'Cut steaks from loin',
            'Cube for stew',
            'Grind trimmings with fat'
          ],
          tips: 'Add pork fat when grinding',
          bestFor: 'Steaks, roasts, burgers, jerky'
        }
      ]
    }
  };

  // Get current meat data
  const currentMeatData = meatData[selectedMeat] || meatData.beef;
  
  // Get current tab data
  const getCurrentTabData = () => {
    return currentMeatData[selectedTab] || [];
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="mep-container">
      <div className="mep-layout">
        {/* ===== SIDEBAR - MEAT TYPES (#284a4b) ===== */}
        <aside className="mep-sidebar">
          <div className="mep-sidebar-header">
            <h2 className="mep-sidebar-title">🥩 Meat Processing</h2>
            <p className="mep-sidebar-subtitle">Professional Butchery Skills</p>
          </div>

          <div className="mep-sidebar-categories">
            <ul className="mep-categories-list">
              {meatTypes.map(meat => (
                <li
                  key={meat.id}
                  className={`mep-category-item ${selectedMeat === meat.key ? 'mep-active' : ''}`}
                  onClick={() => setSelectedMeat(meat.key)}
                >
                  <span className="mep-category-name">{meat.icon} {meat.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main className="mep-main">
          <header className="mep-main-header">
            <div className="mep-header-content">
              <h1 className="mep-page-title">{currentMeatData.name}</h1>
              <p className="mep-page-description">
                Professional {currentMeatData.name.toLowerCase()} processing - deboning, cleaning, and cuts
              </p>
            </div>
          </header>

          {/* ===== FILTER TABS (LIKE COOKWARE) ===== */}
          <div className="mep-tabs">
            <button
              className={`mep-tab ${selectedTab === 'deboning' ? 'mep-tab-active' : ''}`}
              onClick={() => setSelectedTab('deboning')}
            >
              🔪 Deboning ({currentMeatData.deboning?.length || 0})
            </button>
            <button
              className={`mep-tab ${selectedTab === 'cleaning' ? 'mep-tab-active' : ''}`}
              onClick={() => setSelectedTab('cleaning')}
            >
              🧼 Cleaning ({currentMeatData.cleaning?.length || 0})
            </button>
            <button
              className={`mep-tab ${selectedTab === 'cuts' ? 'mep-tab-active' : ''}`}
              onClick={() => setSelectedTab('cuts')}
            >
              🥩 Cuts ({currentMeatData.cuts?.length || 0})
            </button>
          </div>

          {/* ===== CARDS GRID - 2 PER ROW ===== */}
          <div className="mep-items-grid-section">
            <div className="mep-items-grid">
              {getCurrentTabData().map(item => (
                <div
                  key={item.id}
                  className="mep-item-card"
                  onClick={() => handleItemClick(item)}
                >
                  <div
                    className="mep-card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="mep-card-content">
                    <h3 className="mep-card-title">{item.name}</h3>
                    <p className="mep-card-description">{item.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ===== MODAL - FULL DETAILS (RIGHT IMAGE, LEFT SCROLL) ===== */}
      {showModal && selectedItem && (
        <div className="mep-modal-overlay" onClick={closeModal}>
          <div className="mep-modal" onClick={(e) => e.stopPropagation()}>
            <button className="mep-modal-close" onClick={closeModal}>×</button>
            
            <div className="mep-modal-header">
              <div className="mep-modal-title">
                <h2>{selectedItem.name}</h2>
                <p className="mep-modal-subtitle">{selectedItem.tagline}</p>
              </div>
            </div>

            <div className="mep-modal-content">
              {/* LEFT SIDE - SCROLLABLE DETAILS (70%) */}
              <div className="mep-modal-left">
                {/* FULL DESCRIPTION */}
                <div className="mep-detail-section">
                  <h3>📋 Description</h3>
                  <div className="mep-detail-content">
                    <p>{selectedItem.fullDesc}</p>
                  </div>
                </div>

                {/* TOOLS NEEDED */}
                {selectedItem.tools && selectedItem.tools.length > 0 && (
                  <div className="mep-detail-section">
                    <h3>🛠️ Tools Needed</h3>
                    <div className="mep-tools-list">
                      {selectedItem.tools.map((tool, idx) => (
                        <div key={idx} className="mep-tool-item">
                          <span className="mep-tool-icon">🔧</span>
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP-BY-STEP PROCESS */}
                {selectedItem.steps && selectedItem.steps.length > 0 && (
                  <div className="mep-detail-section">
                    <h3>📝 Step-by-Step Process</h3>
                    <div className="mep-steps-list">
                      {selectedItem.steps.map((step, idx) => (
                        <div key={idx} className="mep-step-item">
                          <span className="mep-step-number">{idx + 1}.</span>
                          <span className="mep-step-text">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PRO TIPS */}
                {selectedItem.tips && (
                  <div className="mep-detail-section">
                    <h3>💡 Pro Tips</h3>
                    <div className="mep-detail-content">
                      <p className="mep-tips-text">{selectedItem.tips}</p>
                    </div>
                  </div>
                )}

                {/* BEST FOR */}
                {selectedItem.bestFor && (
                  <div className="mep-detail-section">
                    <h3>✅ Best For</h3>
                    <div className="mep-detail-content">
                      <p>{selectedItem.bestFor}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT SIDE - FIXED IMAGE (30%) */}
              <div className="mep-modal-right">
                <div className="mep-main-image-container">
                  <div
                    className="mep-main-image"
                    style={{ backgroundImage: `url(${selectedItem.image})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Back to Home Button */}
 <div className="back-home-container">
         <button 
  className="back-home-btn"
  onClick={() => {
    try {
      navigate('/guidance');
    } catch (error) {
      window.location.href = '/guidance';
    }
  }}
>
  ← Back to Guidance Page
</button>
      </div>

    </div>
  );
};

export default MeatProcessingPage;