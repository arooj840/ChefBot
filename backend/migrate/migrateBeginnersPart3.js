const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// ======================
// YAHAN APNA APPLIANCES DATA COPY-PASTE KAREIN
// ======================

const appliancesData = [
{
  id: 'refrigerator',
  name: 'Refrigerator',
  description: 'Cooling and food preservation appliances',
  types: ['Single Door', 'Double Door', 'French Door', 'Side-by-Side', 'Mini Fridge'],
  companies: [
    // ==================== DAWLANCE (15 Models Total) ====================
    {
      id: 'dawlance-fridge',
      name: 'Dawlance',
      models: [
        // ---------- SINGLE DOOR - 3 Models ----------
        {
          id: 'dawlance-single-basic',
          name: 'Dawlance Single Door Basic',
          type: 'Single Door',
          capacity: '185L',
          price: 'PKR 42,000 - 48,000',
          image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
          features: [
            'Direct Cool System',
            'Energy Efficient Compressor',
            'Adjustable Shelves',
            'Small Freezer Box',
            'Reversible Door'
          ],
          specifications: {
            'Capacity': '185 Liters',
            'Type': 'Single Door Direct Cool',
            'Energy Rating': '2 Star',
            'Freezer Capacity': '30 Liters',
            'Shelves': '3 Adjustable Tempered Glass',
            'Door Pockets': '3',
            'Vegetable Crisper': '1',
            'Defrost Type': 'Manual',
            'Refrigerant': 'R600a (Eco-friendly)',
            'Dimensions (HxWxD)': '135 x 54 x 58 cm',
            'Weight': '38 kg',
            'Color': 'White',
            'Noise Level': '42 dB'
          },
          warranty: '1 year comprehensive warranty',
          usageGuide: 'First time: Run empty for 4 hours. Set thermostat to medium (3-4). Do not overload. Allow hot food to cool before placing inside. Defrost when ice thickness reaches 5mm.',
          maintenance: 'Monthly: Clean interior with mild soap. Check door gasket. Every 3 months: Clean condenser coils. Yearly: Professional service check.',
          installationTips: 'Place on level ground. Keep 4 inches space from walls. Avoid direct sunlight and heat sources. Use dedicated power socket with stabilizer.',
          energySavingTips: 'Keep fridge 75% full. Open door less frequently. Defrost regularly. Set correct temperature (4°C). Check door seal monthly.',
          troubleshooting: [
            'Not cooling: Check power and thermostat setting',
            'Water leaking: Clean drain hole, check if level',
            'Too much noise: Ensure floor is level',
            'Ice buildup: Check door seal, defrost needed'
          ],
          bestFor: 'Small families, bachelors, budget-conscious buyers',
          estimatedConsumption: '180 units/year'
        },
        {
          id: 'dawlance-single-deluxe',
          name: 'Dawlance Single Door Deluxe',
          type: 'Single Door',
          capacity: '220L',
          price: 'PKR 52,000 - 60,000',
          image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
          features: [
            'Direct Cool System',
            'Large Freezer Compartment',
            'Veggie Crisper with Humidity Control',
            'LED Interior Light',
            'Energy Saver Mode',
            'Anti-bacterial Gasket'
          ],
          specifications: {
            'Capacity': '220 Liters',
            'Type': 'Single Door Direct Cool',
            'Energy Rating': '3 Star',
            'Freezer Capacity': '45 Liters',
            'Shelves': '4 Tempered Glass',
            'Door Pockets': '4 (2 large for bottles)',
            'Vegetable Crisper': '1 with glass lid',
            'Defrost Type': 'Manual',
            'Refrigerant': 'R600a',
            'Dimensions': '142 x 58 x 62 cm',
            'Weight': '42 kg',
            'Color': 'Silver',
            'Noise Level': '40 dB'
          },
          warranty: '2 years comprehensive warranty',
          usageGuide: 'Initial setup: Run empty for 4-6 hours. Set dial to 4 for normal use. Store raw meat in freezer immediately. Keep vegetables in crisper with humidity control. Defrost every 2 months.',
          maintenance: 'Weekly: Wipe spills immediately. Monthly: Clean door seals with toothpaste. Every 6 months: Vacuum condenser coils. Replace light if needed.',
          installationTips: 'Requires stable voltage. Keep away from oven/stove. Ensure floor can bear weight. Level using front legs.',
          energySavingTips: 'Use energy saver mode at night. Keep freezer full for better efficiency. Defrost before ice buildup. Check door seal with paper test.',
          troubleshooting: [
            'Fridge too cold: Turn dial to lower number',
            'Fridge not cold enough: Check door seal, increase setting',
            'Bad odor: Clean interior, check expired food',
            'Door not closing properly: Check if level, remove obstacles'
          ],
          bestFor: 'Medium families, those needing more freezer space',
          estimatedConsumption: '210 units/year'
        },
        {
          id: 'dawlance-single-royal',
          name: 'Dawlance Single Door Royal',
          type: 'Single Door',
          capacity: '280L',
          price: 'PKR 65,000 - 74,000',
          image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
          features: [
            'Direct Cool with Fast Freeze',
            'Built-in Voltage Stabilizer',
            'Anti-bacterial Protection',
            'Adjustable Glass Shelves',
            'Large Vegetable & Fruit Box',
            'Bottle Rack with Dispenser',
            'Door Ajar Alarm'
          ],
          specifications: {
            'Capacity': '280 Liters',
            'Type': 'Single Door Direct Cool',
            'Energy Rating': '3 Star',
            'Freezer Capacity': '65 Liters',
            'Shelves': '5 Tempered Glass',
            'Door Pockets': '5 (2 bottle holders)',
            'Vegetable Crisper': '2 separate boxes',
            'Defrost Type': 'Manual with drain',
            'Stabilizer': 'Built-in (90V-280V)',
            'Dimensions': '152 x 62 x 65 cm',
            'Weight': '48 kg',
            'Color': 'Silver/Black',
            'Noise Level': '38 dB'
          },
          warranty: '2 years comprehensive + 5 years compressor',
          usageGuide: 'First use: Run empty for 6 hours. Fast freeze function: Use when adding large amounts of fresh food. Temperature range: 0°C to 8°C. Defrost using drain hose for easy cleaning.',
          maintenance: 'Monthly: Clean condenser coils. Check door alarm function. Every 3 months: Deep clean with baking soda solution. Yearly: Professional checkup.',
          installationTips: 'Professional installation recommended. Ensure dedicated 15A socket. Keep level using bubble level. Allow 6 inches top clearance.',
          energySavingTips: 'Use fast freeze only when needed. Keep away from heat. Set to eco mode at night. Defrost regularly for efficiency.',
          troubleshooting: [
            'Door alarm keeps beeping: Close door properly',
            'Water at bottom: Clean drain hole',
            'Freezer not freezing: Check fast freeze setting',
            'Stabilizer tripping: Check voltage, call service'
          ],
          bestFor: 'Large families, areas with voltage fluctuations',
          estimatedConsumption: '250 units/year'
        },

        // ---------- DOUBLE DOOR - 3 Models ----------
        {
          id: 'dawlance-nexus',
          name: 'Dawlance Nexus Frost Free',
          type: 'Double Door',
          capacity: '550L',
          price: 'PKR 120,000 - 135,000',
          image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
          features: [
            'Twin Inverter Technology',
            'Moist Fresh Zone',
            'Quick Cooling',
            'Door Alarm System',
            'Energy Saving Mode',
            'Multi Air Flow',
            'LED Display'
          ],
          specifications: {
            'Capacity': '550 Liters',
            'Type': 'Double Door Frost Free',
            'Energy Rating': '3 Star',
            'Technology': 'Twin Inverter Compressor',
            'Shelves': '5 Tempered Glass',
            'Freezer Capacity': '180 Liters',
            'Door Pockets': '6',
            'Vegetable Crisper': '2 with humidity control',
            'Cooling System': 'Frost Free with fan',
            'Temperature Control': 'Digital',
            'Dimensions': '185 x 92 x 75 cm',
            'Weight': '85 kg',
            'Color': 'Silver',
            'Noise Level': '42 dB'
          },
          warranty: '2 years comprehensive + 10 years compressor warranty',
          usageGuide: 'First 6 hours: Run empty. Keep 4 inches from wall. Set temperature to 4°C for fridge, -18°C for freezer. Use quick cool when adding large items. Allow 24 hours for stabilization.',
          maintenance: 'Monthly: Clean interior. Every 3 months: Clean condenser coils. Every 6 months: Check door seals with paper test. Yearly: Professional servicing.',
          installationTips: 'Place on level surface. Ensure proper ventilation. Connect to dedicated power socket. Leave 6 inches from back wall.',
          energySavingTips: 'Set to eco mode at night. Avoid frequent door opening. Keep fridge organized. Let hot food cool before storing.',
          troubleshooting: [
            'Not cooling: Check power and temperature setting',
            'Water leakage: Clean drain hole, check if level',
            'Ice buildup in freezer: Check door seal',
            'Error on display: Call service center'
          ],
          bestFor: 'Large families, those who store a lot of food',
          estimatedConsumption: '350 units/year'
        },
        {
          id: 'dawlance-optima',
          name: 'Dawlance Optima Double Door',
          type: 'Double Door',
          capacity: '450L',
          price: 'PKR 95,000 - 108,000',
          image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
          features: [
            'Digital Display',
            'Multi Air Flow System',
            'LED Interior Lighting',
            'Fast Freeze Function',
            'Holiday Mode',
            'Child Lock',
            'Tempered Glass Shelves'
          ],
          specifications: {
            'Capacity': '450 Liters',
            'Type': 'Double Door Frost Free',
            'Energy Rating': '2 Star',
            'Display': 'LED Digital',
            'Shelves': '4 Tempered Glass',
            'Freezer Capacity': '140 Liters',
            'Door Pockets': '5',
            'Vegetable Crisper': '1 large',
            'Cooling': 'Multi Air Flow',
            'Dimensions': '178 x 88 x 72 cm',
            'Weight': '78 kg',
            'Color': 'Black Glass',
            'Noise Level': '40 dB'
          },
          warranty: '2 years warranty',
          usageGuide: 'Holiday mode: Use when away to save energy while keeping fridge cool. Fast freeze: Activate 4 hours before adding fresh food. Child lock: Prevents accidental settings change.',
          maintenance: 'Monthly: Clean door seals with soft cloth. Every 3 months: Check drain hole. Every 6 months: Professional cleaning of coils.',
          installationTips: 'Avoid direct sunlight. Keep away from heat sources. Level properly to prevent vibration. Allow 5cm side clearance.',
          energySavingTips: 'Use holiday mode when away. Keep fridge full but not overloaded. Check door seals monthly. Set correct temperature.',
          troubleshooting: [
            'Display not working: Check power, call service',
            'Fridge too cold: Adjust temperature setting',
            'Freezer door hard to open: Check vacuum seal, wait few minutes',
            'Noise from back: Check if touching wall'
          ],
          bestFor: 'Medium to large families, modern kitchen look',
          estimatedConsumption: '320 units/year'
        },
        {
          id: 'dawlance-economy-double',
          name: 'Dawlance Economy Double Door',
          type: 'Double Door',
          capacity: '380L',
          price: 'PKR 75,000 - 85,000',
          image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
          features: [
            'Direct Cool System',
            'Energy Efficient Design',
            'Simple Easy-to-Use Controls',
            'Large Vegetable Tray',
            'Bottle Rack',
            'Adjustable Thermostat',
            'Rust-proof Body'
          ],
          specifications: {
            'Capacity': '380 Liters',
            'Type': 'Double Door Direct Cool',
            'Energy Rating': '1 Star',
            'Shelves': '3 Glass Shelves',
            'Freezer Capacity': '110 Liters',
            'Door Pockets': '4',
            'Vegetable Tray': '1 large',
            'Defrost Type': 'Manual',
            'Temperature Control': 'Rotary knob',
            'Dimensions': '170 x 82 x 68 cm',
            'Weight': '68 kg',
            'Color': 'White',
            'Noise Level': '45 dB'
          },
          warranty: '1 year warranty',
          usageGuide: 'Defrost every 2-3 weeks. Do not scrape ice with sharp objects. Use plastic scraper provided. Set dial to 3-4 for normal use. Keep food covered to reduce moisture.',
          maintenance: 'Weekly: Check for ice buildup. Monthly: Clean interior with mild soap. Every 3 months: Check door gasket. Defrost when ice is 5mm thick.',
          installationTips: 'Keep in cool area. Ensure proper ventilation. Level using front legs. Use stabilizer for voltage protection.',
          energySavingTips: 'Defrost regularly. Keep door closed. Don\'t put hot food inside. Set to medium during summer.',
          troubleshooting: [
            'Too much ice: Defrost needed, check door seal',
            'Water on floor: Defrost and clean drain',
            'Not cooling enough: Check thermostat, clean coils',
            'Door not sealing: Clean gasket, check alignment'
          ],
          bestFor: 'Budget-conscious buyers, those preferring simple design',
          estimatedConsumption: '280 units/year'
        },

        // ---------- FRENCH DOOR - 3 Models ----------
        {
          id: 'dawlance-french-premium',
          name: 'Dawlance French Door Premium',
          type: 'French Door',
          capacity: '650L',
          price: 'PKR 180,000 - 200,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'French Door Design',
            'External Water Dispenser',
            'Automatic Ice Maker',
            'Smart Digital Controls',
            'Door Cooling Technology',
            'Twin Cooling System',
            'LED Touch Panel'
          ],
          specifications: {
            'Capacity': '650 Liters',
            'Type': 'French Door',
            'Energy Rating': '3 Star',
            'Doors': '4 Doors French Style',
            'Water Dispenser': 'External with filter',
            'Ice Maker': 'Automatic with storage',
            'Shelves': '5 Tempered Glass',
            'Freezer': 'Bottom drawer with 200L',
            'Convertible Zone': 'Yes',
            'Dimensions': '190 x 95 x 80 cm',
            'Weight': '95 kg',
            'Color': 'Stainless Steel',
            'Noise Level': '38 dB'
          },
          warranty: '3 years comprehensive warranty',
          usageGuide: 'Water filter: Replace every 6 months. Ice maker: First ice after 24 hours. French doors: Open one at a time to save energy. Convertible zone: Can switch between fridge/freezer.',
          maintenance: 'Monthly: Clean water dispenser area. Every 3 months: Clean condenser coils. Every 6 months: Replace water filter. Yearly: Professional service.',
          installationTips: 'Requires water line connection. Professional installation needed. Measure doorway width. Allow door opening space.',
          energySavingTips: 'Use eco mode. Keep doors closed. Set correct temperature. Regular maintenance for efficiency.',
          troubleshooting: [
            'Water dispenser not working: Check water line, filter',
            'Ice maker not making ice: Check water supply, wait 24 hours',
            'French doors misaligned: Call service for adjustment',
            'Error code: Note code and call service'
          ],
          bestFor: 'Premium homes, families who want luxury features',
          estimatedConsumption: '380 units/year'
        },
        {
          id: 'dawlance-french-luxe',
          name: 'Dawlance French Door Luxe',
          type: 'French Door',
          capacity: '720L',
          price: 'PKR 220,000 - 250,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'French Doors with Handle-less Design',
            'Touch Screen Display',
            'Family Hub Connectivity',
            'Auto Fill Water Pitcher',
            'Triple Cooling System',
            'Metal Cooling Technology',
            'Voice Control Compatible'
          ],
          specifications: {
            'Capacity': '720 Liters',
            'Type': 'French Door',
            'Energy Rating': '3 Star',
            'Display': 'Touch Screen LCD 21"',
            'Smart Features': 'WiFi Connected with App',
            'Doors': '4 French Doors',
            'Water System': 'Auto Fill Pitcher',
            'Cooling': 'Triple Cooling with Metal',
            'Freezer': '220L with Ice Maker',
            'Dimensions': '195 x 98 x 85 cm',
            'Weight': '105 kg',
            'Color': 'Black Stainless',
            'Noise Level': '36 dB'
          },
          warranty: '3 years comprehensive + 15 years compressor',
          usageGuide: 'Family Hub: Use app to control and monitor. Voice commands: Works with Alexa/Google. Auto fill pitcher: Place pitcher under dispenser. Metal cooling: Provides even temperature.',
          maintenance: 'Weekly: Clean touch screen. Monthly: Update software. Every 3 months: Clean vents. Yearly: Professional maintenance.',
          installationTips: 'Requires strong WiFi. Professional installation mandatory. Measure pathways. Check door swing space.',
          energySavingTips: 'Use smart modes. Monitor via app. Keep coils clean. Optimal temperature settings.',
          troubleshooting: [
            'Touch screen not responding: Restart, clean screen',
            'WiFi disconnected: Check network, reset',
            'Water pitcher not filling: Check sensor, call service',
            'App not working: Update app, reconnect'
          ],
          bestFor: 'Tech-savvy families, smart home users',
          estimatedConsumption: '400 units/year'
        },
        {
          id: 'dawlance-french-elegance',
          name: 'Dawlance French Elegance',
          type: 'French Door',
          capacity: '580L',
          price: 'PKR 160,000 - 180,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'French Doors',
            'Convertible Zone Drawer',
            'Fresh Crisper with Humidity Control',
            'LED Display',
            'Energy Saver Mode',
            'Door Ajar Alarm',
            'Child Lock'
          ],
          specifications: {
            'Capacity': '580 Liters',
            'Type': 'French Door',
            'Energy Rating': '2 Star',
            'Convertible': 'Fridge/Freezer Drawer',
            'Shelves': '5 Glass',
            'Doors': '4',
            'Freezer': '180L bottom drawer',
            'Crisper': '2 with humidity control',
            'Dimensions': '188 x 92 x 78 cm',
            'Weight': '88 kg',
            'Color': 'Silver',
            'Noise Level': '40 dB'
          },
          warranty: '2 years warranty',
          usageGuide: 'Convertible zone: Use as extra fridge or freezer. Fresh crisper: Adjust humidity for fruits vs vegetables. Energy saver: Use at night for savings.',
          maintenance: 'Monthly: Clean crispers. Every 3 months: Check convertible zone seal. Every 6 months: Clean condenser.',
          installationTips: 'Standard installation. Level carefully. Allow ventilation. Check door clearance.',
          energySavingTips: 'Convertible zone: Use efficiently. Energy saver mode. Keep organized. Check seals.',
          troubleshooting: [
            'Convertible zone not working: Check setting, call service',
            'Crisper too moist: Adjust humidity slider',
            'Alarm beeping: Check doors are closed',
            'Temperature fluctuation: Give time to stabilize'
          ],
          bestFor: 'Families wanting flexibility in storage',
          estimatedConsumption: '350 units/year'
        },

        // ---------- SIDE-BY-SIDE - 3 Models ----------
        {
          id: 'dawlance-side-standard',
          name: 'Dawlance Side-by-Side Standard',
          type: 'Side-by-Side',
          capacity: '580L',
          price: 'PKR 150,000 - 170,000',
          image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
          features: [
            'Side-by-Side Doors',
            'Water Dispenser',
            'Digital Temperature Controls',
            'Twin Cooling System',
            'LED Interior Lights',
            'Multiple Air Vents',
            'Deodorizer Filter'
          ],
          specifications: {
            'Capacity': '580 Liters',
            'Type': 'Side-by-Side',
            'Energy Rating': '2 Star',
            'Dispenser': 'Water Only',
            'Cooling': 'Twin Cooling',
            'Shelves': '5 Glass each side',
            'Door Bins': '4 each door',
            'Freezer': 'Right side 200L',
            'Fridge': 'Left side 380L',
            'Dimensions': '185 x 92 x 82 cm',
            'Weight': '90 kg',
            'Color': 'Silver',
            'Noise Level': '42 dB'
          },
          warranty: '2 years warranty',
          usageGuide: 'Water dispenser: Use clean drinking water. Twin cooling: Fridge and freezer have separate systems. Organize: Left for fresh food, right for frozen.',
          maintenance: 'Monthly: Clean dispenser nozzle. Every 3 months: Check air vents. Every 6 months: Clean condenser coils.',
          installationTips: 'Allow door swing space. Level carefully. Water line connection needed. Dedicated outlet.',
          energySavingTips: 'Keep organized for air flow. Don\'t block vents. Set appropriate temperature. Check door seals.',
          troubleshooting: [
            'Water dispenser slow: Check water pressure, filter',
            'Fridge too cold: Adjust temperature',
            'Freezer not freezing: Check settings, call service',
            'Noise: Check if level'
          ],
          bestFor: 'Those who want organized fridge/freezer',
          estimatedConsumption: '360 units/year'
        },
        {
          id: 'dawlance-side-deluxe',
          name: 'Dawlance Side-by-Side Deluxe',
          type: 'Side-by-Side',
          capacity: '680L',
          price: 'PKR 190,000 - 215,000',
          image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
          features: [
            'Side Doors',
            'Water & Ice Dispenser',
            'Dual Cooling System',
            'Smart Sensors',
            'Quick Freeze Function',
            'Hygiene Fresh Filter',
            'Digital Inverter'
          ],
          specifications: {
            'Capacity': '680 Liters',
            'Type': 'Side-by-Side',
            'Energy Rating': '3 Star',
            'Dispenser': 'Water & Ice',
            'Cooling': 'Dual Cooling System',
            'Ice': 'Cubed & Crushed',
            'Shelves': '6 each side',
            'Door Bins': '5 each door',
            'Freezer': '240L',
            'Fridge': '440L',
            'Dimensions': '190 x 95 x 85 cm',
            'Weight': '98 kg',
            'Color': 'Stainless Steel',
            'Noise Level': '40 dB'
          },
          warranty: '3 years warranty',
          usageGuide: 'Ice dispenser: Choose cubed or crushed. Quick freeze: Use when adding groceries. Hygiene fresh: Keeps food fresh longer. Smart sensors: Adjust cooling automatically.',
          maintenance: 'Monthly: Clean ice bin. Every 3 months: Replace water filter. Every 6 months: Clean dispenser area. Yearly: Professional check.',
          installationTips: 'Professional installation needed. Water pressure requirement. Measure space carefully. Allow ventilation.',
          energySavingTips: 'Use quick freeze only when needed. Regular filter changes. Keep doors closed. Set eco mode.',
          troubleshooting: [
            'Ice maker not working: Check water supply, reset',
            'Dispenser jammed: Clear ice bin',
            'Water taste bad: Replace filter',
            'Not cooling enough: Check settings, call service'
          ],
          bestFor: 'Large families, ice lovers',
          estimatedConsumption: '390 units/year'
        },
        {
          id: 'dawlance-side-premium',
          name: 'Dawlance Side-by-Side Premium',
          type: 'Side-by-Side',
          capacity: '750L',
          price: 'PKR 240,000 - 270,000',
          image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
          features: [
            'Side Doors with French Door Freezer',
            'Water & Ice Dispenser',
            'Smart Home Connect',
            'Voice Control Compatible',
            'Craft Ice Maker',
            'Food Management Camera',
            'Family Dashboard'
          ],
          specifications: {
            'Capacity': '750 Liters',
            'Type': 'Side-by-Side',
            'Energy Rating': '3 Star',
            'Smart': 'WiFi + Voice Control',
            'Ice': 'Craft Ice Maker + Regular',
            'Camera': 'Interior Camera',
            'Display': 'Touch Screen',
            'Freezer': '280L (French door style)',
            'Fridge': '470L',
            'Dimensions': '195 x 98 x 88 cm',
            'Weight': '115 kg',
            'Color': 'Black Stainless',
            'Noise Level': '37 dB'
          },
          warranty: '3 years comprehensive + 15 years compressor',
          usageGuide: 'Craft ice: Makes clear round ice for drinks. Food camera: View inside from phone. Voice control: Use with smart assistants. Smart home: Connects to other devices.',
          maintenance: 'Weekly: Clean camera lens. Monthly: Update software. Every 3 months: Clean craft ice maker. Yearly: Professional service.',
          installationTips: 'Strong WiFi needed. Professional installation. Check door swing. Water pressure requirement.',
          energySavingTips: 'Use smart modes. Monitor via app. Regular maintenance. Optimal settings.',
          troubleshooting: [
            'Camera not working: Check WiFi, restart',
            'Craft ice not making: Check water, wait 24h',
            'Voice command not working: Check mic, settings',
            'App issues: Update app, reconnect'
          ],
          bestFor: 'Luxury homes, tech enthusiasts',
          estimatedConsumption: '420 units/year'
        },

        // ---------- MINI FRIDGE - 3 Models ----------
        {
          id: 'dawlance-mini-compact',
          name: 'Dawlance Mini Compact',
          type: 'Mini Fridge',
          capacity: '90L',
          price: 'PKR 25,000 - 30,000',
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
          features: [
            'Compact Size',
            'Energy Saver Mode',
            'Silent Operation',
            'Small Freezer Compartment',
            'Adjustable Legs',
            'Reversible Door',
            'Wire Shelf'
          ],
          specifications: {
            'Capacity': '90 Liters',
            'Type': 'Mini Fridge',
            'Energy Rating': '1 Star',
            'Freezer': 'Small Freezer Box',
            'Shelves': '1 Wire + 1 Glass',
            'Door Storage': '2 Can racks',
            'Defrost': 'Manual',
            'Noise Level': '38 dB',
            'Dimensions': '85 x 45 x 50 cm',
            'Weight': '25 kg',
            'Color': 'White',
            'Power': '80W'
          },
          warranty: '1 year warranty',
          usageGuide: 'Perfect for bedroom or office. Keep 3 inches ventilation space. Set temperature with knob. Freezer makes ice cubes. Defrost every 2-3 months.',
          maintenance: 'Monthly: Clean interior. Check door seal. Every 3 months: Clean condenser at back. Defrost when needed.',
          installationTips: 'Place on stable surface. Keep away from heat. Level using legs. Standard socket enough.',
          energySavingTips: 'Keep in cool room. Don\'t open frequently. Set to medium. Defrost regularly.',
          troubleshooting: [
            'Not cooling: Check power, thermostat',
            'Too noisy: Check if level',
            'Water inside: Defrost needed',
            'Door not closing: Check items blocking'
          ],
          bestFor: 'Bedrooms, offices, dorms, small spaces',
          estimatedConsumption: '100 units/year'
        },
        {
          id: 'dawlance-mini-office',
          name: 'Dawlance Mini Office',
          type: 'Mini Fridge',
          capacity: '120L',
          price: 'PKR 32,000 - 38,000',
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
          features: [
            'Compact Design',
            'Lockable Door with Key',
            'Adjustable Glass Shelves',
            'Low Noise Operation',
            'Bottle Storage Rack',
            'Can Dispenser',
            'Interior Light'
          ],
          specifications: {
            'Capacity': '120 Liters',
            'Type': 'Mini Fridge',
            'Energy Rating': '2 Star',
            'Door Lock': 'Yes with 2 keys',
            'Shelves': '2 Glass + Can Rack',
            'Freezer': 'Ice Cube Tray',
            'Door Storage': '3 compartments',
            'Noise Level': '35 dB',
            'Dimensions': '88 x 48 x 52 cm',
            'Weight': '28 kg',
            'Color': 'Black',
            'Power': '90W'
          },
          warranty: '1 year warranty',
          usageGuide: 'Office use: Lock door for personal items. Can dispenser: Load from top. Bottle rack: Holds 1.5L bottles. Quiet operation won\'t disturb work.',
          maintenance: 'Monthly: Clean with damp cloth. Check lock mechanism. Every 6 months: Clean back coils. Defrost if ice builds.',
          installationTips: 'Place under desk or in break room. Level carefully. Keep away from direct sunlight. Regular outlet.',
          energySavingTips: 'Use only during work hours. Keep door closed. Set to low at night. Defrost regularly.',
          troubleshooting: [
            'Lock jammed: Use graphite powder',
            'Not cooling enough: Check setting, location',
            'Can dispenser stuck: Check loading',
            'Light not working: Replace bulb'
          ],
          bestFor: 'Office break rooms, teachers, personal use',
          estimatedConsumption: '120 units/year'
        },
        {
          id: 'dawlance-mini-dorm',
          name: 'Dawlance Mini Dorm',
          type: 'Mini Fridge',
          capacity: '60L',
          price: 'PKR 18,000 - 23,000',
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
          features: [
            'Ultra Compact Size',
            'Thermoelectric Cooling',
            'AC/DC Operation',
            'Portable Design',
            'Car Compatible',
            'Lightweight',
            'Eco-friendly'
          ],
          specifications: {
            'Capacity': '60 Liters',
            'Type': 'Mini Fridge Thermoelectric',
            'Cooling': 'Thermoelectric (no compressor)',
            'Power': '60W',
            'Operation': '12V DC / 220V AC',
            'Temperature': '15-20°C below ambient',
            'Shelves': '1 Wire Shelf',
            'Noise Level': '28 dB (silent)',
            'Dimensions': '70 x 40 x 45 cm',
            'Weight': '15 kg',
            'Color': 'White/Blue',
            'Warranty': '6 months'
          },
          warranty: '6 months warranty',
          usageGuide: 'Car use: Plug into 12V socket. Keeps items cool, not freezing. Good for snacks and drinks. Takes 2-3 hours to cool. Not for raw meat or dairy long term.',
          maintenance: 'Monthly: Clean interior with mild soap. Check fan operation. Keep ventilation holes clear. No defrost needed.',
          installationTips: 'Portable - just plug in. Use in car, dorm, office. Keep upright always. Allow air circulation.',
          energySavingTips: 'Pre-cool items before putting in. Keep in shade. Don\'t open frequently. Uses less power than compressor.',
          troubleshooting: [
            'Not cooling: Check power source, fan',
            'Warm inside: Give time to cool',
            'Fan noise: Clean fan blades',
            'Car not working: Check 12V socket'
          ],
          bestFor: 'Students, travelers, car trips, small dorms',
          estimatedConsumption: '60 units/year'
        }
      ]
    },
       {
  id: 'orient-fridge',
  name: 'Orient',
  models: [
    // ---------- SINGLE DOOR - 3 Models ----------
    {
      id: 'orient-single-basic',
      name: 'Orient Single Door Basic',
      type: 'Single Door',
      capacity: '185L',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Energy Efficient',
        'Simple Mechanical Controls',
        'Small Freezer Box',
        'Adjustable Thermostat',
        'Rust-proof Body'
      ],
      specifications: {
        'Capacity': '185 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '1 Star',
        'Freezer Capacity': '28 Liters',
        'Shelves': '3 Tempered Glass',
        'Door Pockets': '3',
        'Vegetable Crisper': '1',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '135 x 54 x 58 cm',
        'Weight': '36 kg',
        'Color': 'White',
        'Noise Level': '43 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'First use: Run empty for 4 hours. Set dial to 4 for normal operation. Defrost every 3-4 weeks. Keep food covered to prevent drying.',
      maintenance: 'Monthly: Clean interior with baking soda solution. Check door seal. Every 3 months: Clean condenser coils. Defrost regularly.',
      installationTips: 'Place on level floor. Keep 4 inches from wall. Avoid heat sources. Use voltage stabilizer for protection.',
      energySavingTips: 'Set to medium temperature. Defrost regularly. Keep door closed. Don\'t put hot food inside.',
      troubleshooting: [
        'Not cooling: Check power and thermostat',
        'Water leaking: Clean drain hole',
        'Ice buildup: Defrost needed',
        'Noise: Check if level'
      ],
      bestFor: 'Small families, budget buyers, basic needs',
      estimatedConsumption: '170 units/year'
    },
    {
      id: 'orient-single-deluxe',
      name: 'Orient Single Door Deluxe',
      type: 'Single Door',
      capacity: '250L',
      price: 'PKR 48,000 - 56,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Large Freezer Compartment',
        'Veggie Tray with Glass Lid',
        'LED Interior Light',
        'Energy Saver Switch',
        'Bottle Rack',
        'Adjustable Shelves'
      ],
      specifications: {
        'Capacity': '250 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '2 Star',
        'Freezer Capacity': '50 Liters',
        'Shelves': '4 Tempered Glass',
        'Door Pockets': '4 (1 large for bottles)',
        'Vegetable Crisper': '1 with glass lid',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '145 x 58 x 60 cm',
        'Weight': '42 kg',
        'Color': 'Silver',
        'Noise Level': '41 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Set dial to 3-4 for normal use. Energy saver mode: Use at night. Freezer: For meat and ice cream. Defrost when ice is 5mm thick.',
      maintenance: 'Monthly: Clean door gasket. Check drain hole. Every 3 months: Clean coils with vacuum. Defrost regularly.',
      installationTips: 'Level carefully. Keep away from oven/stove. Allow ventilation. Use stabilizer for voltage fluctuations.',
      energySavingTips: 'Use energy saver mode. Keep freezer full. Defrost regularly. Check door seal monthly.',
      troubleshooting: [
        'Too cold: Turn dial down',
        'Not cold enough: Turn dial up, check seal',
        'Light not working: Replace bulb',
        'Door not closing: Check level, remove items'
      ],
      bestFor: 'Medium families, those needing more freezer space',
      estimatedConsumption: '210 units/year'
    },
    {
      id: 'orient-single-royal',
      name: 'Orient Single Door Royal',
      type: 'Single Door',
      capacity: '300L',
      price: 'PKR 58,000 - 66,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Built-in Voltage Stabilizer',
        'Anti-bacterial Protection',
        'LED Light with On/Off Switch',
        'Large Vegetable Box',
        'Adjustable Glass Shelves',
        'Door Ajar Indicator'
      ],
      specifications: {
        'Capacity': '300 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '2 Star',
        'Freezer Capacity': '65 Liters',
        'Shelves': '4 Tempered Glass + 1 Wire',
        'Door Pockets': '5',
        'Vegetable Crisper': '1 Large with divider',
        'Stabilizer': 'Built-in (170V-270V)',
        'Defrost Type': 'Manual',
        'Dimensions': '152 x 62 x 64 cm',
        'Weight': '46 kg',
        'Color': 'Silver/Black',
        'Noise Level': '40 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'First use: Run empty for 6 hours. Built-in stabilizer protects from voltage fluctuations. Freezer can store up to 2 weeks food. Defrost using drain hose.',
      maintenance: 'Monthly: Clean interior with mild soap. Check stabilizer indicator. Every 3 months: Clean condenser. Yearly: Professional check.',
      installationTips: 'No external stabilizer needed. Place on level ground. Keep 5 inches from wall. Avoid direct sunlight.',
      energySavingTips: 'Set to medium. Keep door closed. Defrost regularly. Don\'t overfill.',
      troubleshooting: [
        'Stabilizer light blinking: Check voltage',
        'Water leakage: Clean drain pipe',
        'Door not sealing: Clean gasket',
        'Excessive ice: Defrost needed'
      ],
      bestFor: 'Large families, areas with voltage fluctuations',
      estimatedConsumption: '250 units/year'
    },

    // ---------- DOUBLE DOOR - 3 Models ----------
    {
      id: 'orient-double-frostfree',
      name: 'Orient Double Door Frost Free',
      type: 'Double Door',
      capacity: '400L',
      price: 'PKR 85,000 - 95,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        'Frost Free Technology',
        'Digital Temperature Display',
        'Quick Cool Function',
        'Multi Air Flow System',
        'LED Interior Lighting',
        'Tempered Glass Shelves',
        'Large Vegetable Tray'
      ],
      specifications: {
        'Capacity': '400 Liters',
        'Type': 'Double Door Frost Free',
        'Energy Rating': '2 Star',
        'Shelves': '4 Tempered Glass',
        'Freezer Capacity': '120 Liters',
        'Door Pockets': '5',
        'Vegetable Crisper': '1 Large',
        'Cooling': 'Multi Air Flow',
        'Display': 'LED Digital',
        'Dimensions': '175 x 85 x 70 cm',
        'Weight': '72 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'No defrost needed ever. Quick cool: Use when adding groceries. Set fridge to 4°C, freezer to -18°C. Allow 24 hours for temperature stabilization.',
      maintenance: 'Monthly: Clean interior with soft cloth. Every 3 months: Clean condenser coils. Every 6 months: Check door seals.',
      installationTips: 'Level carefully. Allow 5cm clearance on sides. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Don\'t set too cold. Keep door closed. Clean coils regularly. Check seals monthly.',
      troubleshooting: [
        'Not cooling: Check power and settings',
        'Water inside: Clean drain hole',
        'Noise: Check if level',
        'Display error: Call service'
      ],
      bestFor: 'Medium families, no-defrost convenience',
      estimatedConsumption: '320 units/year'
    },
    {
      id: 'orient-double-inverter',
      name: 'Orient Double Door Inverter',
      type: 'Double Door',
      capacity: '500L',
      price: 'PKR 115,000 - 130,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Compressor Technology',
        'Energy Saving up to 40%',
        'Multi Air Flow',
        'LED Display with Touch Controls',
        'Holiday Mode',
        'Fast Freeze Function',
        'Door Alarm'
      ],
      specifications: {
        'Capacity': '500 Liters',
        'Type': 'Double Door Inverter Frost Free',
        'Energy Rating': '3 Star',
        'Compressor': 'Digital Inverter',
        'Shelves': '5 Tempered Glass',
        'Freezer Capacity': '160 Liters',
        'Door Pockets': '6',
        'Vegetable Crisper': '2 with humidity control',
        'Display': 'Touch LED',
        'Dimensions': '182 x 88 x 72 cm',
        'Weight': '80 kg',
        'Color': 'Black Glass',
        'Noise Level': '38 dB'
      },
      warranty: '2 years comprehensive + 10 years compressor',
      usageGuide: 'Holiday mode: Keeps fridge running but freezer off when away. Fast freeze: Activate 4 hours before adding food. Inverter saves electricity by varying speed.',
      maintenance: 'Monthly: Clean interior. Check door alarm. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Professional installation recommended. Level carefully. Allow ventilation. Use stabilizer free socket.',
      energySavingTips: 'Use holiday mode when away. Set eco mode at night. Keep full but not overloaded. Regular maintenance.',
      troubleshooting: [
        'Inverter not working: Check power, call service',
        'Door alarm: Check door closure',
        'Too cold: Adjust settings',
        'Error code: Note and call service'
      ],
      bestFor: 'Large families, energy conscious buyers',
      estimatedConsumption: '300 units/year'
    },
    {
      id: 'orient-double-economy',
      name: 'Orient Double Door Economy',
      type: 'Double Door',
      capacity: '350L',
      price: 'PKR 72,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Simple Rotary Controls',
        'Large Vegetable Box',
        'Bottle Rack with Guard',
        'Adjustable Thermostat',
        'Durable Cabinet',
        'Easy Clean Interior'
      ],
      specifications: {
        'Capacity': '350 Liters',
        'Type': 'Double Door Direct Cool',
        'Energy Rating': '1 Star',
        'Shelves': '3 Tempered Glass',
        'Freezer Capacity': '100 Liters',
        'Door Pockets': '4',
        'Vegetable Box': '1 Large',
        'Defrost Type': 'Manual',
        'Control': 'Rotary Knob',
        'Dimensions': '168 x 80 x 68 cm',
        'Weight': '65 kg',
        'Color': 'White',
        'Noise Level': '45 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Defrost every 2-3 weeks. Use plastic scraper (not metal). Set dial to 3-4. Keep freezer door closed to prevent ice buildup.',
      maintenance: 'Weekly: Check ice buildup. Monthly: Clean interior. Every 3 months: Defrost thoroughly. Check door seal.',
      installationTips: 'Keep in cool area. Level properly. Use stabilizer. Allow ventilation.',
      energySavingTips: 'Defrost regularly. Keep door closed. Don\'t put hot food. Set to medium.',
      troubleshooting: [
        'Heavy ice: Defrost needed',
        'Not cooling: Check thermostat',
        'Water on floor: Defrost and clean drain',
        'Door not closing: Check items blocking'
      ],
      bestFor: 'Budget conscious families, simple needs',
      estimatedConsumption: '280 units/year'
    },

    // ---------- FRENCH DOOR - 3 Models ----------
    {
      id: 'orient-french-entry',
      name: 'Orient French Door Entry',
      type: 'French Door',
      capacity: '600L',
      price: 'PKR 160,000 - 180,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Door Design',
        'External Water Dispenser',
        'LED Digital Display',
        'Multi Air Flow',
        'Tempered Glass Shelves',
        'Humidity Controlled Crispers',
        'Door Ajar Alarm'
      ],
      specifications: {
        'Capacity': '600 Liters',
        'Type': 'French Door',
        'Energy Rating': '2 Star',
        'Doors': '4 Doors',
        'Water Dispenser': 'External',
        'Shelves': '5 Tempered Glass',
        'Freezer': 'Bottom Drawer 180L',
        'Crispers': '2 with humidity control',
        'Display': 'LED Digital',
        'Dimensions': '188 x 92 x 78 cm',
        'Weight': '92 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '41 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Water dispenser: Fill tank manually. French doors: Open one at a time to save energy. Crispers: Adjust humidity for fruits vs vegetables.',
      maintenance: 'Monthly: Clean water tank. Check dispenser. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Level carefully. Allow door swing space. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Use eco mode. Keep doors closed. Set correct temperature. Regular maintenance.',
      troubleshooting: [
        'Water dispenser slow: Clean tank',
        'Doors not sealing: Check alignment',
        'Not cooling: Check settings',
        'Ice in fridge: Check door seal'
      ],
      bestFor: 'Families wanting French door style on budget',
      estimatedConsumption: '360 units/year'
    },
    {
      id: 'orient-french-premium',
      name: 'Orient French Door Premium',
      type: 'French Door',
      capacity: '680L',
      price: 'PKR 195,000 - 220,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors',
        'Water & Ice Dispenser',
        'Touch Controls',
        'Convertible Zone Drawer',
        'Twin Cooling System',
        'LED Touch Panel',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '680 Liters',
        'Type': 'French Door',
        'Energy Rating': '3 Star',
        'Dispenser': 'Water & Ice',
        'Convertible': 'Yes (Fridge/Freezer)',
        'Cooling': 'Twin Cooling',
        'Shelves': '6 Glass',
        'Freezer': '200L',
        'Display': 'Touch Screen',
        'Dimensions': '192 x 95 x 82 cm',
        'Weight': '98 kg',
        'Color': 'Black Stainless',
        'Noise Level': '39 dB'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Convertible zone: Switch between fridge and freezer. Ice maker: First ice after 24 hours. Touch controls: Lock to prevent child use.',
      maintenance: 'Monthly: Clean dispenser. Every 3 months: Replace water filter. Every 6 months: Clean coils. Yearly: Professional service.',
      installationTips: 'Water line needed. Professional installation. Measure doorway. Allow ventilation.',
      energySavingTips: 'Use convertible zone efficiently. Regular filter changes. Keep organized. Check seals.',
      troubleshooting: [
        'Ice maker not working: Check water',
        'Convertible zone not cooling: Check setting',
        'Touch not responding: Clean screen',
        'Water leak: Check connections'
      ],
      bestFor: 'Premium homes, entertaining families',
      estimatedConsumption: '390 units/year'
    },
    {
      id: 'orient-french-luxe',
      name: 'Orient French Door Luxe',
      type: 'French Door',
      capacity: '720L',
      price: 'PKR 230,000 - 260,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors with Handle-less Design',
        'Smart WiFi Connectivity',
        'Auto Ice Maker',
        'Door-in-Door Feature',
        'Food Freshness Sensors',
        'Metal Cooling Plate',
        'Hygiene Fresh+ Filter'
      ],
      specifications: {
        'Capacity': '720 Liters',
        'Type': 'French Door',
        'Energy Rating': '3 Star',
        'Smart': 'WiFi + App Control',
        'Door-in-Door': 'Yes for frequently used items',
        'Ice': 'Auto Ice Maker',
        'Cooling': 'Metal Cooling Technology',
        'Filter': 'Hygiene Fresh+',
        'Dimensions': '195 x 98 x 85 cm',
        'Weight': '108 kg',
        'Color': 'Titanium Silver',
        'Noise Level': '37 dB'
      },
      warranty: '3 years comprehensive + 12 years compressor',
      usageGuide: 'Smart app: Monitor and control from phone. Door-in-Door: Quick access to drinks. Freshness sensors: Automatically adjust temperature. WiFi setup: Use 2.4GHz network.',
      maintenance: 'Weekly: Update app. Monthly: Clean door-in-door. Every 3 months: Replace filter. Yearly: Professional service.',
      installationTips: 'Strong WiFi needed. Professional installation. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes via app. Monitor consumption. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'WiFi disconnected: Reset router',
        'App not working: Update app',
        'Door-in-door not sealing: Check gasket',
        'Sensor error: Call service'
      ],
      bestFor: 'Tech-savvy families, smart home users',
      estimatedConsumption: '410 units/year'
    },

    // ---------- SIDE-BY-SIDE - 3 Models ----------
    {
      id: 'orient-side-family',
      name: 'Orient Side-by-Side Family',
      type: 'Side-by-Side',
      capacity: '620L',
      price: 'PKR 175,000 - 195,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side-by-Side Design',
        'Water Dispenser',
        'Digital Controls',
        'Twin Cooling System',
        'LED Interior Lights',
        'Multiple Door Bins',
        'Deodorizer Filter'
      ],
      specifications: {
        'Capacity': '620 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '2 Star',
        'Dispenser': 'Water Only',
        'Cooling': 'Twin Cooling',
        'Shelves': '5 Each Side',
        'Door Bins': '4 Each Door',
        'Freezer': '220L',
        'Fridge': '400L',
        'Dimensions': '188 x 92 x 82 cm',
        'Weight': '94 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Organize: Left side fridge, right side freezer. Water dispenser: Use filtered water. Twin cooling: Prevents odor transfer. Set temperatures separately.',
      maintenance: 'Monthly: Clean dispenser. Check door seals. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Water line connection needed. Level carefully. Allow door swing. Dedicated outlet.',
      energySavingTips: 'Keep organized for air flow. Do not block vents. Check seals. Set appropriate temps.',
      troubleshooting: [
        'Water slow: Check pressure',
        'Freezer not cold: Check setting',
        'Noise: Check if level',
        'Door not sealing: Clean gasket'
      ],
      bestFor: 'Large families, organized storage',
      estimatedConsumption: '370 units/year'
    },
    {
      id: 'orient-side-premium',
      name: 'Orient Side-by-Side Premium',
      type: 'Side-by-Side',
      capacity: '700L',
      price: 'PKR 210,000 - 235,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors',
        'Water & Ice Dispenser',
        'LED Display',
        'Quick Freeze Function',
        'Hygiene Fresh Filter',
        'Digital Inverter',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '700 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '3 Star',
        'Dispenser': 'Water & Ice (Cubed/Crushed)',
        'Cooling': 'Dual Cooling',
        'Shelves': '6 Each Side',
        'Door Bins': '5 Each Door',
        'Freezer': '250L',
        'Fridge': '450L',
        'Filter': 'Hygiene Fresh',
        'Dimensions': '192 x 95 x 85 cm',
        'Weight': '102 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '40 dB'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Ice dispenser: Choose cubed or crushed. Quick freeze: For bulk freezing. Child lock: Prevents accidental dispensing. Filter: Replace every 6 months.',
      maintenance: 'Monthly: Clean ice bin. Check filter indicator. Every 3 months: Replace filter. Every 6 months: Clean coils.',
      installationTips: 'Professional installation. Water pressure requirement. Measure space. Allow ventilation.',
      energySavingTips: 'Use quick freeze only when needed. Regular filter changes. Keep doors closed. Set eco mode.',
      troubleshooting: [
        'Ice not dispensing: Clear jam',
        'Water taste bad: Replace filter',
        'Dispenser light out: Replace bulb',
        'Not cooling: Check settings'
      ],
      bestFor: 'Large families, ice lovers',
      estimatedConsumption: '400 units/year'
    },
    {
      id: 'orient-side-ultimate',
      name: 'Orient Side-by-Side Ultimate',
      type: 'Side-by-Side',
      capacity: '780L',
      price: 'PKR 260,000 - 290,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors with Smart Display',
        'Craft Ice Maker',
        'Smart Home Connect',
        'Food Showcase Mode',
        'Metal Cooling Technology',
        'Voice Control Ready',
        'Auto Closing Doors'
      ],
      specifications: {
        'Capacity': '780 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '3 Star',
        'Smart': 'AI Home Connect with App',
        'Ice': 'Craft Ice + Regular',
        'Display': 'Smart Touch Screen',
        'Cooling': 'Metal Cooling',
        'Doors': 'Auto Closing Hinge',
        'Freezer': '280L',
        'Fridge': '500L',
        'Dimensions': '198 x 98 x 88 cm',
        'Weight': '118 kg',
        'Color': 'Black Stainless',
        'Noise Level': '37 dB'
      },
      warranty: '3 years comprehensive + 15 years compressor',
      usageGuide: 'Craft ice: Makes clear round ice for premium drinks. Showcase mode: For parties. Auto closing: Doors close automatically if left ajar. Smart app: Monitor and control.',
      maintenance: 'Weekly: Clean craft ice maker. Monthly: Update software. Every 3 months: Professional check. Yearly: Deep clean.',
      installationTips: 'Professional installation only. Strong WiFi needed. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes. Monitor via app. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'Craft ice not making: Check water, wait 24h',
        'Smart features not working: Check WiFi',
        'Doors not auto closing: Check hinge',
        'Display issues: Restart'
      ],
      bestFor: 'Luxury homes, entertaining, tech enthusiasts',
      estimatedConsumption: '430 units/year'
    },

    // ---------- MINI FRIDGE - 3 Models ----------
    {
      id: 'orient-mini-dorm',
      name: 'Orient Mini Dorm',
      type: 'Mini Fridge',
      capacity: '80L',
      price: 'PKR 22,000 - 28,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        'Quiet Operation',
        'Energy Saver Mode',
        'Small Freezer Compartment',
        'Adjustable Thermostat',
        'Reversible Door',
        'Wire Shelf'
      ],
      specifications: {
        'Capacity': '80 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '1 Star',
        'Freezer': 'Ice Cube Tray',
        'Shelves': '1 Wire + 1 Glass',
        'Door Storage': '2 Can racks',
        'Noise Level': '40 dB',
        'Dimensions': '82 x 43 x 48 cm',
        'Weight': '22 kg',
        'Color': 'White',
        'Power': '75W'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for dorm room. Keep 3 inches ventilation. Set to medium. Freezer makes ice cubes. Defrost every 2-3 months.',
      maintenance: 'Monthly: Clean interior. Check door seal. Every 3 months: Clean back coils. Defrost when needed.',
      installationTips: 'Place on stable surface. Keep away from heat. Level using legs. Regular socket.',
      energySavingTips: 'Keep in cool area. Do not open frequently. Set to medium. Defrost regularly.',
      troubleshooting: [
        'Not cooling: Check power',
        'Too noisy: Check if level',
        'Water inside: Defrost needed',
        'Door not closing: Check items'
      ],
      bestFor: 'Students, dorm rooms, small offices',
      estimatedConsumption: '90 units/year'
    },
    {
      id: 'orient-mini-office',
      name: 'Orient Mini Office',
      type: 'Mini Fridge',
      capacity: '110L',
      price: 'PKR 29,000 - 35,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Lockable Door with Keys',
        'Bottle Storage Rack',
        'Adjustable Temperature',
        'Low Noise Operation',
        'Interior Light',
        'Can Dispenser'
      ],
      specifications: {
        'Capacity': '110 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '2 Star',
        'Lock': 'Yes with 2 keys',
        'Shelves': '2 Glass + Can Rack',
        'Freezer': 'Ice Tray',
        'Door Storage': '3 compartments',
        'Noise Level': '36 dB',
        'Dimensions': '86 x 47 x 50 cm',
        'Weight': '26 kg',
        'Color': 'Black',
        'Power': '85W'
      },
      warranty: '1 year warranty',
      usageGuide: 'Office use: Lock for personal items. Can dispenser: Load from top. Bottle rack: Holds 1.5L bottles. Quiet operation for work environment.',
      maintenance: 'Monthly: Clean with damp cloth. Check lock. Every 6 months: Clean back coils. Defrost if ice builds.',
      installationTips: 'Place under desk or break room. Level carefully. Keep away from direct sun. Regular outlet.',
      energySavingTips: 'Use only during work hours. Keep door closed. Set to low at night. Defrost regularly.',
      troubleshooting: [
        'Lock stuck: Use graphite powder',
        'Not cooling: Check setting',
        'Can dispenser jammed: Check loading',
        'Light not working: Replace bulb'
      ],
      bestFor: 'Office break rooms, teachers, staff rooms',
      estimatedConsumption: '110 units/year'
    },
    {
      id: 'orient-mini-bar',
      name: 'Orient Mini Bar',
      type: 'Mini Fridge',
      capacity: '65L',
      price: 'PKR 19,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Glass Door Design',
        'LED Interior Light',
        'Chrome Wire Shelves',
        'Bottle Rack',
        'Thermoelectric Cooling',
        'Silent Operation',
        'Compact Size'
      ],
      specifications: {
        'Capacity': '65 Liters',
        'Type': 'Mini Bar Fridge',
        'Cooling': 'Thermoelectric (no compressor)',
        'Door': 'Tempered Glass',
        'Shelves': 'Chrome Wire (2)',
        'Temperature': '15-20°C below ambient',
        'Noise Level': '28 dB (Silent)',
        'Dimensions': '72 x 40 x 45 cm',
        'Weight': '18 kg',
        'Color': 'Black/Chrome',
        'Power': '65W'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for drinks and snacks. Glass door shows contents. LED light creates ambiance. Not for freezing. Keeps drinks chilled.',
      maintenance: 'Monthly: Clean glass door. Check fan. Keep ventilation clear. No defrost needed.',
      installationTips: 'Place in living room or bar area. Level carefully. Keep upright. Regular socket.',
      energySavingTips: 'Pre-cool drinks before loading. Keep in cool room. Do not open frequently. Uses less power.',
      troubleshooting: [
        'Not cooling: Check fan',
        'Light not working: Replace LED',
        'Condensation: Normal in humid weather',
        'Warm inside: Give time to cool'
      ],
      bestFor: 'Home bars, living rooms, entertainment areas',
      estimatedConsumption: '70 units/year'
    }
  ]
},
     {
  id: 'pel-fridge',
  name: 'PEL',
  models: [
    // ---------- SINGLE DOOR - 3 Models ----------
    {
      id: 'pel-single-basic',
      name: 'PEL Single Door Basic',
      type: 'Single Door',
      capacity: '180L',
      price: 'PKR 37,000 - 43,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Energy Efficient Compressor',
        'Simple Rotary Controls',
        'Small Freezer Box',
        'Adjustable Legs',
        'Rust-proof Cabinet',
        'Wire Shelf'
      ],
      specifications: {
        'Capacity': '180 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '1 Star',
        'Freezer Capacity': '25 Liters',
        'Shelves': '2 Glass + 1 Wire',
        'Door Pockets': '3',
        'Vegetable Crisper': '1 Small',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '134 x 53 x 57 cm',
        'Weight': '35 kg',
        'Color': 'White',
        'Noise Level': '44 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'First time: Run empty for 4 hours. Set dial to 3-4. Defrost every 3-4 weeks. Keep food covered to maintain moisture.',
      maintenance: 'Monthly: Clean interior with mild soap. Check door seal. Every 3 months: Clean condenser coils. Defrost regularly.',
      installationTips: 'Place on level floor. Keep 4 inches from wall. Avoid heat sources. Use voltage stabilizer.',
      energySavingTips: 'Set to medium temperature. Defrost regularly. Keep door closed. Don\'t put hot food inside.',
      troubleshooting: [
        'Not cooling: Check power and thermostat',
        'Water leaking: Clean drain hole',
        'Ice buildup: Defrost needed',
        'Noise: Check if level'
      ],
      bestFor: 'Small families, budget buyers, basic needs',
      estimatedConsumption: '165 units/year'
    },
    {
      id: 'pel-single-deluxe',
      name: 'PEL Single Door Deluxe',
      type: 'Single Door',
      capacity: '230L',
      price: 'PKR 47,000 - 54,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Large Freezer Compartment',
        'Veggie Crisper with Glass Lid',
        'LED Interior Light',
        'Adjustable Glass Shelves',
        'Bottle Rack',
        'Energy Saver Switch'
      ],
      specifications: {
        'Capacity': '230 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '2 Star',
        'Freezer Capacity': '45 Liters',
        'Shelves': '4 Tempered Glass',
        'Door Pockets': '4 (1 large bottle)',
        'Vegetable Crisper': '1 with glass lid',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '142 x 57 x 60 cm',
        'Weight': '40 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Set dial to 3-4 for normal use. Energy saver mode: Use at night. Freezer: Store meat and ice cream. Defrost when ice is 5mm thick.',
      maintenance: 'Monthly: Clean door gasket. Check drain hole. Every 3 months: Clean coils with vacuum. Defrost regularly.',
      installationTips: 'Level carefully. Keep away from oven/stove. Allow ventilation. Use stabilizer.',
      energySavingTips: 'Use energy saver mode. Keep freezer full. Defrost regularly. Check door seal monthly.',
      troubleshooting: [
        'Too cold: Turn dial down',
        'Not cold enough: Turn dial up, check seal',
        'Light not working: Replace bulb',
        'Door not closing: Check level, remove items'
      ],
      bestFor: 'Medium families, those needing more freezer space',
      estimatedConsumption: '200 units/year'
    },
    {
      id: 'pel-single-royal',
      name: 'PEL Single Door Royal',
      type: 'Single Door',
      capacity: '280L',
      price: 'PKR 57,000 - 65,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Built-in Voltage Stabilizer',
        'Anti-bacterial Protection',
        'LED Light with On/Off Switch',
        'Large Vegetable Box',
        'Adjustable Glass Shelves',
        'Door Ajar Indicator'
      ],
      specifications: {
        'Capacity': '280 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '2 Star',
        'Freezer Capacity': '60 Liters',
        'Shelves': '4 Tempered Glass',
        'Door Pockets': '5',
        'Vegetable Crisper': '1 Large with divider',
        'Stabilizer': 'Built-in (170V-270V)',
        'Defrost Type': 'Manual',
        'Dimensions': '150 x 60 x 62 cm',
        'Weight': '45 kg',
        'Color': 'Silver/Black',
        'Noise Level': '41 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'First use: Run empty for 6 hours. Built-in stabilizer protects from voltage fluctuations. Freezer can store up to 2 weeks food. Defrost using drain hose.',
      maintenance: 'Monthly: Clean interior with mild soap. Check stabilizer indicator. Every 3 months: Clean condenser. Yearly: Professional check.',
      installationTips: 'No external stabilizer needed. Place on level ground. Keep 5 inches from wall. Avoid direct sunlight.',
      energySavingTips: 'Set to medium. Keep door closed. Defrost regularly. Don\'t overfill.',
      troubleshooting: [
        'Stabilizer light blinking: Check voltage',
        'Water leakage: Clean drain pipe',
        'Door not sealing: Clean gasket',
        'Excessive ice: Defrost needed'
      ],
      bestFor: 'Large families, areas with voltage fluctuations',
      estimatedConsumption: '240 units/year'
    },

    // ---------- DOUBLE DOOR - 3 Models ----------
    {
      id: 'pel-coolmaster',
      name: 'PEL CoolMaster Pro',
      type: 'Double Door',
      capacity: '520L',
      price: 'PKR 125,000 - 140,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'CoolMaster Inverter Technology',
        'Triple Cooling System',
        'LED Digital Display',
        'Holiday Mode',
        'Multi Air Flow',
        'Quick Cool Function',
        'Door Alarm'
      ],
      specifications: {
        'Capacity': '520 Liters',
        'Type': 'Double Door Inverter',
        'Energy Rating': '3 Star',
        'Compressor': 'Digital Inverter',
        'Cooling': 'Triple Air Flow',
        'Shelves': '5 Tempered Glass',
        'Freezer Capacity': '170 Liters',
        'Door Pockets': '6',
        'Vegetable Crisper': '2 with humidity control',
        'Display': 'LED Digital',
        'Dimensions': '182 x 88 x 72 cm',
        'Weight': '82 kg',
        'Color': 'Black Glass',
        'Noise Level': '38 dB'
      },
      warranty: '2 years comprehensive + 12 years compressor',
      usageGuide: 'CoolMaster technology: Saves energy while maintaining temperature. Holiday mode: Use when away. Triple cooling: Even temperature throughout. Quick cool: For new groceries.',
      maintenance: 'Monthly: Clean interior. Check door alarm. Every 3 months: Clean condenser coils. Every 6 months: Professional check.',
      installationTips: 'Professional installation recommended. Level carefully. Allow ventilation. No stabilizer needed.',
      energySavingTips: 'Use holiday mode when away. Set eco mode at night. Keep full but not overloaded. Regular maintenance.',
      troubleshooting: [
        'Inverter not working: Check power, call service',
        'Door alarm: Check door closure',
        'Too cold: Adjust settings',
        'Error code: Note and call service'
      ],
      bestFor: 'Large families, energy conscious buyers',
      estimatedConsumption: '310 units/year'
    },
    {
      id: 'pel-double-frostfree',
      name: 'PEL Double Door Frost Free',
      type: 'Double Door',
      capacity: '450L',
      price: 'PKR 98,000 - 110,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        'Frost Free Technology',
        'Multi Air Flow System',
        'Quick Cool Function',
        'Digital Display',
        'Tempered Glass Shelves',
        'Large Vegetable Box',
        'LED Interior Light'
      ],
      specifications: {
        'Capacity': '450 Liters',
        'Type': 'Double Door Frost Free',
        'Energy Rating': '2 Star',
        'Shelves': '4 Tempered Glass',
        'Freezer Capacity': '140 Liters',
        'Door Pockets': '5',
        'Vegetable Crisper': '1 Large',
        'Cooling': 'Multi Air Flow',
        'Display': 'LED Digital',
        'Dimensions': '178 x 85 x 70 cm',
        'Weight': '75 kg',
        'Color': 'Silver',
        'Noise Level': '41 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'No defrost needed ever. Quick cool: Use when adding groceries. Set fridge to 4°C, freezer to -18°C. Allow 24 hours for temperature stabilization.',
      maintenance: 'Monthly: Clean interior with soft cloth. Every 3 months: Clean condenser coils. Every 6 months: Check door seals.',
      installationTips: 'Level carefully. Allow 5cm clearance on sides. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Don\'t set too cold. Keep door closed. Clean coils regularly. Check seals monthly.',
      troubleshooting: [
        'Not cooling: Check power and settings',
        'Water inside: Clean drain hole',
        'Noise: Check if level',
        'Display error: Call service'
      ],
      bestFor: 'Medium families, no-defrost convenience',
      estimatedConsumption: '330 units/year'
    },
    {
      id: 'pel-double-economy',
      name: 'PEL Double Door Economy',
      type: 'Double Door',
      capacity: '380L',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Simple Rotary Controls',
        'Large Vegetable Box',
        'Bottle Rack',
        'Adjustable Thermostat',
        'Durable Cabinet',
        'Easy Clean Interior'
      ],
      specifications: {
        'Capacity': '380 Liters',
        'Type': 'Double Door Direct Cool',
        'Energy Rating': '1 Star',
        'Shelves': '3 Tempered Glass',
        'Freezer Capacity': '110 Liters',
        'Door Pockets': '4',
        'Vegetable Box': '1 Large',
        'Defrost Type': 'Manual',
        'Control': 'Rotary Knob',
        'Dimensions': '172 x 82 x 68 cm',
        'Weight': '68 kg',
        'Color': 'White',
        'Noise Level': '45 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Defrost every 2-3 weeks. Use plastic scraper (not metal). Set dial to 3-4. Keep freezer door closed to prevent ice buildup.',
      maintenance: 'Weekly: Check ice buildup. Monthly: Clean interior. Every 3 months: Defrost thoroughly. Check door seal.',
      installationTips: 'Keep in cool area. Level properly. Use stabilizer. Allow ventilation.',
      energySavingTips: 'Defrost regularly. Keep door closed. Don\'t put hot food. Set to medium.',
      troubleshooting: [
        'Heavy ice: Defrost needed',
        'Not cooling: Check thermostat',
        'Water on floor: Defrost and clean drain',
        'Door not closing: Check items blocking'
      ],
      bestFor: 'Budget conscious families, simple needs',
      estimatedConsumption: '290 units/year'
    },

    // ---------- FRENCH DOOR - 3 Models ----------
    {
      id: 'pel-french-standard',
      name: 'PEL French Door Standard',
      type: 'French Door',
      capacity: '600L',
      price: 'PKR 165,000 - 185,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Door Design',
        'External Water Dispenser',
        'LED Digital Display',
        'Multi Air Flow',
        'Tempered Glass Shelves',
        'Humidity Controlled Crispers',
        'Door Ajar Alarm'
      ],
      specifications: {
        'Capacity': '600 Liters',
        'Type': 'French Door',
        'Energy Rating': '2 Star',
        'Doors': '4 Doors',
        'Water Dispenser': 'External (Manual Fill)',
        'Shelves': '5 Tempered Glass',
        'Freezer': 'Bottom Drawer 180L',
        'Crispers': '2 with humidity control',
        'Display': 'LED Digital',
        'Dimensions': '188 x 92 x 78 cm',
        'Weight': '90 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '42 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Water dispenser: Fill tank manually. French doors: Open one at a time to save energy. Crispers: Adjust humidity for fruits vs vegetables.',
      maintenance: 'Monthly: Clean water tank. Check dispenser. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Level carefully. Allow door swing space. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Use eco mode. Keep doors closed. Set correct temperature. Regular maintenance.',
      troubleshooting: [
        'Water dispenser slow: Clean tank',
        'Doors not sealing: Check alignment',
        'Not cooling: Check settings',
        'Ice in fridge: Check door seal'
      ],
      bestFor: 'Families wanting French door style on budget',
      estimatedConsumption: '360 units/year'
    },
    {
      id: 'pel-french-premium',
      name: 'PEL French Door Premium',
      type: 'French Door',
      capacity: '670L',
      price: 'PKR 200,000 - 225,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors',
        'Water & Ice Dispenser',
        'Touch Screen Controls',
        'Convertible Zone Drawer',
        'Twin Cooling System',
        'LED Touch Panel',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '670 Liters',
        'Type': 'French Door',
        'Energy Rating': '3 Star',
        'Dispenser': 'Water & Ice',
        'Convertible': 'Yes (Fridge/Freezer)',
        'Cooling': 'Twin Cooling',
        'Shelves': '6 Glass',
        'Freezer': '200L',
        'Display': 'Touch Screen',
        'Dimensions': '192 x 95 x 82 cm',
        'Weight': '98 kg',
        'Color': 'Black Stainless',
        'Noise Level': '39 dB'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Convertible zone: Switch between fridge and freezer. Ice maker: First ice after 24 hours. Touch controls: Lock to prevent child use.',
      maintenance: 'Monthly: Clean dispenser. Every 3 months: Replace water filter. Every 6 months: Clean coils. Yearly: Professional service.',
      installationTips: 'Water line needed. Professional installation. Measure doorway. Allow ventilation.',
      energySavingTips: 'Use convertible zone efficiently. Regular filter changes. Keep organized. Check seals.',
      troubleshooting: [
        'Ice maker not working: Check water',
        'Convertible zone not cooling: Check setting',
        'Touch not responding: Clean screen',
        'Water leak: Check connections'
      ],
      bestFor: 'Premium homes, entertaining families',
      estimatedConsumption: '390 units/year'
    },
    {
      id: 'pel-french-luxe',
      name: 'PEL French Door Luxe',
      type: 'French Door',
      capacity: '730L',
      price: 'PKR 240,000 - 270,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors with Handle-less Design',
        'Smart WiFi Connectivity',
        'Auto Ice Maker',
        'Door-in-Door Feature',
        'Food Freshness Sensors',
        'Metal Cooling Plate',
        'Hygiene Fresh+ Filter'
      ],
      specifications: {
        'Capacity': '730 Liters',
        'Type': 'French Door',
        'Energy Rating': '3 Star',
        'Smart': 'WiFi + App Control',
        'Door-in-Door': 'Yes for frequently used items',
        'Ice': 'Auto Ice Maker',
        'Cooling': 'Metal Cooling Technology',
        'Filter': 'Hygiene Fresh+',
        'Dimensions': '195 x 98 x 85 cm',
        'Weight': '110 kg',
        'Color': 'Titanium',
        'Noise Level': '37 dB'
      },
      warranty: '3 years comprehensive + 15 years compressor',
      usageGuide: 'Smart app: Monitor and control from phone. Door-in-Door: Quick access to drinks. Freshness sensors: Automatically adjust temperature. WiFi setup: Use 2.4GHz network.',
      maintenance: 'Weekly: Update app. Monthly: Clean door-in-door. Every 3 months: Replace filter. Yearly: Professional service.',
      installationTips: 'Strong WiFi needed. Professional installation. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes via app. Monitor consumption. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'WiFi disconnected: Reset router',
        'App not working: Update app',
        'Door-in-door not sealing: Check gasket',
        'Sensor error: Call service'
      ],
      bestFor: 'Tech-savvy families, smart home users',
      estimatedConsumption: '410 units/year'
    },

    // ---------- SIDE-BY-SIDE - 3 Models ----------
    {
      id: 'pel-side-family',
      name: 'PEL Side-by-Side Family',
      type: 'Side-by-Side',
      capacity: '610L',
      price: 'PKR 170,000 - 190,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side-by-Side Design',
        'Water Dispenser',
        'Digital Controls',
        'Twin Cooling System',
        'LED Interior Lights',
        'Multiple Door Bins',
        'Deodorizer Filter'
      ],
      specifications: {
        'Capacity': '610 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '2 Star',
        'Dispenser': 'Water Only',
        'Cooling': 'Twin Cooling',
        'Shelves': '5 Each Side',
        'Door Bins': '4 Each Door',
        'Freezer': '220L',
        'Fridge': '390L',
        'Dimensions': '188 x 92 x 82 cm',
        'Weight': '92 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Organize: Left side fridge, right side freezer. Water dispenser: Use filtered water. Twin cooling: Prevents odor transfer. Set temperatures separately.',
      maintenance: 'Monthly: Clean dispenser. Check door seals. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Water line connection needed. Level carefully. Allow door swing. Dedicated outlet.',
      energySavingTips: 'Keep organized for air flow. Don\'t block vents. Check seals. Set appropriate temps.',
      troubleshooting: [
        'Water slow: Check pressure',
        'Freezer not cold: Check setting',
        'Noise: Check if level',
        'Door not sealing: Clean gasket'
      ],
      bestFor: 'Large families, organized storage',
      estimatedConsumption: '370 units/year'
    },
    {
      id: 'pel-side-premium',
      name: 'PEL Side-by-Side Premium',
      type: 'Side-by-Side',
      capacity: '690L',
      price: 'PKR 205,000 - 230,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors',
        'Water & Ice Dispenser',
        'LED Display',
        'Quick Freeze Function',
        'Hygiene Fresh Filter',
        'Digital Inverter',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '690 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '3 Star',
        'Dispenser': 'Water & Ice (Cubed/Crushed)',
        'Cooling': 'Dual Cooling',
        'Shelves': '6 Each Side',
        'Door Bins': '5 Each Door',
        'Freezer': '250L',
        'Fridge': '440L',
        'Filter': 'Hygiene Fresh',
        'Dimensions': '192 x 95 x 85 cm',
        'Weight': '104 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '40 dB'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Ice dispenser: Choose cubed or crushed. Quick freeze: For bulk freezing. Child lock: Prevents accidental dispensing. Filter: Replace every 6 months.',
      maintenance: 'Monthly: Clean ice bin. Check filter indicator. Every 3 months: Replace filter. Every 6 months: Clean coils.',
      installationTips: 'Professional installation. Water pressure requirement. Measure space. Allow ventilation.',
      energySavingTips: 'Use quick freeze only when needed. Regular filter changes. Keep doors closed. Set eco mode.',
      troubleshooting: [
        'Ice not dispensing: Clear jam',
        'Water taste bad: Replace filter',
        'Dispenser light out: Replace bulb',
        'Not cooling: Check settings'
      ],
      bestFor: 'Large families, ice lovers',
      estimatedConsumption: '400 units/year'
    },
    {
      id: 'pel-side-ultimate',
      name: 'PEL Side-by-Side Ultimate',
      type: 'Side-by-Side',
      capacity: '760L',
      price: 'PKR 255,000 - 285,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors with Smart Display',
        'Craft Ice Maker',
        'Smart Home Connect',
        'Food Showcase Mode',
        'Metal Cooling Technology',
        'Voice Control Ready',
        'Auto Closing Doors'
      ],
      specifications: {
        'Capacity': '760 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '3 Star',
        'Smart': 'AI Smart Home Connect',
        'Ice': 'Craft Ice + Regular',
        'Display': 'Smart Touch Screen',
        'Cooling': 'Metal Cooling',
        'Doors': 'Auto Closing Hinge',
        'Freezer': '270L',
        'Fridge': '490L',
        'Dimensions': '198 x 98 x 88 cm',
        'Weight': '120 kg',
        'Color': 'Black Stainless',
        'Noise Level': '37 dB'
      },
      warranty: '3 years comprehensive + 15 years compressor',
      usageGuide: 'Craft ice: Makes clear round ice for premium drinks. Showcase mode: For parties. Auto closing: Doors close automatically if left ajar. Smart app: Monitor and control.',
      maintenance: 'Weekly: Clean craft ice maker. Monthly: Update software. Every 3 months: Professional check. Yearly: Deep clean.',
      installationTips: 'Professional installation only. Strong WiFi needed. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes. Monitor via app. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'Craft ice not making: Check water, wait 24h',
        'Smart features not working: Check WiFi',
        'Doors not auto closing: Check hinge',
        'Display issues: Restart'
      ],
      bestFor: 'Luxury homes, entertaining, tech enthusiasts',
      estimatedConsumption: '430 units/year'
    },

    // ---------- MINI FRIDGE - 3 Models ----------
    {
      id: 'pel-mini-basic',
      name: 'PEL Mini Basic',
      type: 'Mini Fridge',
      capacity: '75L',
      price: 'PKR 21,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        'Basic Cooling',
        'Small Freezer Compartment',
        'Energy Saver Mode',
        'Adjustable Thermostat',
        'Reversible Door',
        'Wire Shelf'
      ],
      specifications: {
        'Capacity': '75 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '1 Star',
        'Freezer': 'Ice Cube Tray',
        'Shelves': '1 Wire + 1 Glass',
        'Door Storage': '2 Can racks',
        'Noise Level': '41 dB',
        'Dimensions': '80 x 42 x 47 cm',
        'Weight': '21 kg',
        'Color': 'White',
        'Power': '70W'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for dorm room. Keep 3 inches ventilation. Set to medium. Freezer makes ice cubes. Defrost every 2-3 months.',
      maintenance: 'Monthly: Clean interior. Check door seal. Every 3 months: Clean back coils. Defrost when needed.',
      installationTips: 'Place on stable surface. Keep away from heat. Level using legs. Regular socket.',
      energySavingTips: 'Keep in cool area. Don\'t open frequently. Set to medium. Defrost regularly.',
      troubleshooting: [
        'Not cooling: Check power',
        'Too noisy: Check if level',
        'Water inside: Defrost needed',
        'Door not closing: Check items'
      ],
      bestFor: 'Students, dorm rooms, small offices',
      estimatedConsumption: '85 units/year'
    },
    {
      id: 'pel-mini-office',
      name: 'PEL Mini Office',
      type: 'Mini Fridge',
      capacity: '105L',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Lockable Door with Keys',
        'Adjustable Glass Shelves',
        'Low Noise Operation',
        'Bottle Storage Rack',
        'Interior Light',
        'Can Dispenser'
      ],
      specifications: {
        'Capacity': '105 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '2 Star',
        'Lock': 'Yes with 2 keys',
        'Shelves': '2 Glass + Can Rack',
        'Freezer': 'Ice Tray',
        'Door Storage': '3 compartments',
        'Noise Level': '36 dB',
        'Dimensions': '86 x 47 x 50 cm',
        'Weight': '25 kg',
        'Color': 'Black',
        'Power': '80W'
      },
      warranty: '1 year warranty',
      usageGuide: 'Office use: Lock for personal items. Can dispenser: Load from top. Bottle rack: Holds 1.5L bottles. Quiet operation for work environment.',
      maintenance: 'Monthly: Clean with damp cloth. Check lock. Every 6 months: Clean back coils. Defrost if ice builds.',
      installationTips: 'Place under desk or break room. Level carefully. Keep away from direct sun. Regular outlet.',
      energySavingTips: 'Use only during work hours. Keep door closed. Set to low at night. Defrost regularly.',
      troubleshooting: [
        'Lock stuck: Use graphite powder',
        'Not cooling: Check setting',
        'Can dispenser jammed: Check loading',
        'Light not working: Replace bulb'
      ],
      bestFor: 'Office break rooms, teachers, staff rooms',
      estimatedConsumption: '105 units/year'
    },
    {
      id: 'pel-mini-bar',
      name: 'PEL Mini Bar',
      type: 'Mini Fridge',
      capacity: '60L',
      price: 'PKR 18,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Glass Door Design',
        'LED Interior Light',
        'Chrome Wire Shelves',
        'Bottle Rack',
        'Compressor Cooling',
        'Silent Operation',
        'Compact Size'
      ],
      specifications: {
        'Capacity': '60 Liters',
        'Type': 'Mini Bar Fridge',
        'Cooling': 'Compressor (Freezing capable)',
        'Door': 'Tempered Glass',
        'Shelves': 'Chrome Wire (2)',
        'Freezer': 'Small ice compartment',
        'Noise Level': '38 dB',
        'Dimensions': '72 x 40 x 45 cm',
        'Weight': '19 kg',
        'Color': 'Black/Chrome',
        'Power': '75W'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for drinks and snacks. Glass door shows contents. LED light creates ambiance. Can freeze ice. Keeps drinks perfectly chilled.',
      maintenance: 'Monthly: Clean glass door. Check door seal. Keep ventilation clear. Defrost every 3 months.',
      installationTips: 'Place in living room or bar area. Level carefully. Keep upright. Regular socket.',
      energySavingTips: 'Pre-cool drinks before loading. Keep in cool room. Don\'t open frequently. Defrost regularly.',
      troubleshooting: [
        'Not cooling: Check compressor',
        'Light not working: Replace LED',
        'Ice buildup: Defrost needed',
        'Door not sealing: Clean gasket'
      ],
      bestFor: 'Home bars, living rooms, entertainment areas',
      estimatedConsumption: '80 units/year'
    }
  ]
},

      {
  id: 'haier-fridge',
  name: 'Haier',
  models: [
    // ---------- SINGLE DOOR - 3 Models ----------
    {
      id: 'haier-single-basic',
      name: 'Haier Single Door Basic',
      type: 'Single Door',
      capacity: '190L',
      price: 'PKR 40,000 - 46,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Energy Efficient Compressor',
        'Simple Rotary Controls',
        'Small Freezer Box',
        'Adjustable Legs',
        'Rust-proof Cabinet',
        'Wire Shelf'
      ],
      specifications: {
        'Capacity': '190 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '1 Star',
        'Freezer Capacity': '30 Liters',
        'Shelves': '2 Glass + 1 Wire',
        'Door Pockets': '3',
        'Vegetable Crisper': '1 Small',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '136 x 54 x 58 cm',
        'Weight': '36 kg',
        'Color': 'White',
        'Noise Level': '43 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'First time: Run empty for 4 hours. Set dial to 3-4. Defrost every 3-4 weeks. Keep food covered to maintain moisture.',
      maintenance: 'Monthly: Clean interior with mild soap. Check door seal. Every 3 months: Clean condenser coils. Defrost regularly.',
      installationTips: 'Place on level floor. Keep 4 inches from wall. Avoid heat sources. Use voltage stabilizer.',
      energySavingTips: 'Set to medium temperature. Defrost regularly. Keep door closed. Don\'t put hot food inside.',
      troubleshooting: [
        'Not cooling: Check power and thermostat',
        'Water leaking: Clean drain hole',
        'Ice buildup: Defrost needed',
        'Noise: Check if level'
      ],
      bestFor: 'Small families, budget buyers, basic needs',
      estimatedConsumption: '175 units/year'
    },
    {
      id: 'haier-single-deluxe',
      name: 'Haier Single Door Deluxe',
      type: 'Single Door',
      capacity: '240L',
      price: 'PKR 50,000 - 58,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Large Freezer Compartment',
        'Veggie Crisper with Glass Lid',
        'LED Interior Light',
        'Adjustable Glass Shelves',
        'Bottle Rack',
        'Energy Saver Switch'
      ],
      specifications: {
        'Capacity': '240 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '2 Star',
        'Freezer Capacity': '50 Liters',
        'Shelves': '4 Tempered Glass',
        'Door Pockets': '4 (1 large bottle)',
        'Vegetable Crisper': '1 with glass lid',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '144 x 58 x 60 cm',
        'Weight': '41 kg',
        'Color': 'Silver',
        'Noise Level': '41 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Set dial to 3-4 for normal use. Energy saver mode: Use at night. Freezer: Store meat and ice cream. Defrost when ice is 5mm thick.',
      maintenance: 'Monthly: Clean door gasket. Check drain hole. Every 3 months: Clean coils with vacuum. Defrost regularly.',
      installationTips: 'Level carefully. Keep away from oven/stove. Allow ventilation. Use stabilizer.',
      energySavingTips: 'Use energy saver mode. Keep freezer full. Defrost regularly. Check door seal monthly.',
      troubleshooting: [
        'Too cold: Turn dial down',
        'Not cold enough: Turn dial up, check seal',
        'Light not working: Replace bulb',
        'Door not closing: Check level, remove items'
      ],
      bestFor: 'Medium families, those needing more freezer space',
      estimatedConsumption: '215 units/year'
    },
    {
      id: 'haier-single-premium',
      name: 'Haier Single Door Premium',
      type: 'Single Door',
      capacity: '290L',
      price: 'PKR 60,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Built-in Voltage Stabilizer',
        'Anti-bacterial Protection',
        'LED Light with On/Off Switch',
        'Large Vegetable Box',
        'Adjustable Glass Shelves',
        'Door Ajar Indicator'
      ],
      specifications: {
        'Capacity': '290 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '2 Star',
        'Freezer Capacity': '65 Liters',
        'Shelves': '4 Tempered Glass',
        'Door Pockets': '5',
        'Vegetable Crisper': '1 Large with divider',
        'Stabilizer': 'Built-in (170V-270V)',
        'Defrost Type': 'Manual',
        'Dimensions': '152 x 62 x 64 cm',
        'Weight': '47 kg',
        'Color': 'Silver/Black',
        'Noise Level': '40 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'First use: Run empty for 6 hours. Built-in stabilizer protects from voltage fluctuations. Freezer can store up to 2 weeks food. Defrost using drain hose.',
      maintenance: 'Monthly: Clean interior with mild soap. Check stabilizer indicator. Every 3 months: Clean condenser. Yearly: Professional check.',
      installationTips: 'No external stabilizer needed. Place on level ground. Keep 5 inches from wall. Avoid direct sunlight.',
      energySavingTips: 'Set to medium. Keep door closed. Defrost regularly. Don\'t overfill.',
      troubleshooting: [
        'Stabilizer light blinking: Check voltage',
        'Water leakage: Clean drain pipe',
        'Door not sealing: Clean gasket',
        'Excessive ice: Defrost needed'
      ],
      bestFor: 'Large families, areas with voltage fluctuations',
      estimatedConsumption: '255 units/year'
    },

    // ---------- DOUBLE DOOR - 3 Models ----------
    {
      id: 'haier-double-basic',
      name: 'Haier Double Door Basic',
      type: 'Double Door',
      capacity: '380L',
      price: 'PKR 85,000 - 95,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Simple Rotary Controls',
        'Large Vegetable Box',
        'Bottle Rack',
        'Adjustable Thermostat',
        'Durable Cabinet',
        'Easy Clean Interior'
      ],
      specifications: {
        'Capacity': '380 Liters',
        'Type': 'Double Door Direct Cool',
        'Energy Rating': '1 Star',
        'Shelves': '3 Tempered Glass',
        'Freezer Capacity': '110 Liters',
        'Door Pockets': '4',
        'Vegetable Box': '1 Large',
        'Defrost Type': 'Manual',
        'Control': 'Rotary Knob',
        'Dimensions': '170 x 82 x 68 cm',
        'Weight': '66 kg',
        'Color': 'White',
        'Noise Level': '45 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Defrost every 2-3 weeks. Use plastic scraper (not metal). Set dial to 3-4. Keep freezer door closed to prevent ice buildup.',
      maintenance: 'Weekly: Check ice buildup. Monthly: Clean interior. Every 3 months: Defrost thoroughly. Check door seal.',
      installationTips: 'Keep in cool area. Level properly. Use stabilizer. Allow ventilation.',
      energySavingTips: 'Defrost regularly. Keep door closed. Don\'t put hot food. Set to medium.',
      troubleshooting: [
        'Heavy ice: Defrost needed',
        'Not cooling: Check thermostat',
        'Water on floor: Defrost and clean drain',
        'Door not closing: Check items blocking'
      ],
      bestFor: 'Budget conscious families, simple needs',
      estimatedConsumption: '290 units/year'
    },
    {
      id: 'haier-double-frostfree',
      name: 'Haier Double Door Frost Free',
      type: 'Double Door',
      capacity: '450L',
      price: 'PKR 105,000 - 118,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        'Frost Free Technology',
        'Multi Air Flow System',
        'Quick Cool Function',
        'Digital Display',
        'Tempered Glass Shelves',
        'Large Vegetable Box',
        'LED Interior Light'
      ],
      specifications: {
        'Capacity': '450 Liters',
        'Type': 'Double Door Frost Free',
        'Energy Rating': '2 Star',
        'Shelves': '4 Tempered Glass',
        'Freezer Capacity': '140 Liters',
        'Door Pockets': '5',
        'Vegetable Crisper': '1 Large',
        'Cooling': 'Multi Air Flow',
        'Display': 'LED Digital',
        'Dimensions': '178 x 85 x 70 cm',
        'Weight': '74 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'No defrost needed ever. Quick cool: Use when adding groceries. Set fridge to 4°C, freezer to -18°C. Allow 24 hours for temperature stabilization.',
      maintenance: 'Monthly: Clean interior with soft cloth. Every 3 months: Clean condenser coils. Every 6 months: Check door seals.',
      installationTips: 'Level carefully. Allow 5cm clearance on sides. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Don\'t set too cold. Keep door closed. Clean coils regularly. Check seals monthly.',
      troubleshooting: [
        'Not cooling: Check power and settings',
        'Water inside: Clean drain hole',
        'Noise: Check if level',
        'Display error: Call service'
      ],
      bestFor: 'Medium families, no-defrost convenience',
      estimatedConsumption: '330 units/year'
    },
    {
      id: 'haier-french-door',
      name: 'Haier French Door Premium',
      type: 'French Door',  // Note: This is French Door type
      capacity: '680L',
      price: 'PKR 190,000 - 210,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Door Design',
        'Smart Cooling System',
        'Water & Ice Dispenser',
        'Touch Controls',
        'Twin Cooling',
        'LED Display',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '680 Liters',
        'Type': 'French Door',
        'Energy Rating': '2 Star',
        'Doors': '4 Doors',
        'Water Dispenser': 'Hot & Cold Water',
        'Ice Maker': 'Auto',
        'Shelves': '5 Tempered Glass',
        'Freezer': '200L Bottom Drawer',
        'Dimensions': '190 x 95 x 80 cm',
        'Weight': '95 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '40 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'French doors: Open one at a time. Hot water dispenser: For tea/coffee. Smart cooling: Automatically adjusts temperature. Ice maker: First ice after 24 hours.',
      maintenance: 'Monthly: Clean dispenser area. Every 3 months: Replace water filter. Every 6 months: Clean coils. Yearly: Professional service.',
      installationTips: 'Water line needed. Professional installation. Measure doorway. Allow door swing space.',
      energySavingTips: 'Use eco mode. Keep doors closed. Regular filter changes. Check seals.',
      troubleshooting: [
        'Hot water not working: Check heating element',
        'Ice maker slow: Check water pressure',
        'Display error: Call service',
        'Door not sealing: Adjust level'
      ],
      bestFor: 'Premium homes, those wanting hot water feature',
      estimatedConsumption: '380 units/year'
    },

    // ---------- FRENCH DOOR - Additional 2 Models ----------
    {
      id: 'haier-french-standard',
      name: 'Haier French Door Standard',
      type: 'French Door',
      capacity: '580L',
      price: 'PKR 160,000 - 180,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Door Design',
        'External Water Dispenser',
        'LED Digital Display',
        'Multi Air Flow',
        'Tempered Glass Shelves',
        'Humidity Controlled Crispers',
        'Door Ajar Alarm'
      ],
      specifications: {
        'Capacity': '580 Liters',
        'Type': 'French Door',
        'Energy Rating': '2 Star',
        'Doors': '4 Doors',
        'Water Dispenser': 'External (Manual Fill)',
        'Shelves': '5 Tempered Glass',
        'Freezer': 'Bottom Drawer 170L',
        'Crispers': '2 with humidity control',
        'Display': 'LED Digital',
        'Dimensions': '188 x 92 x 78 cm',
        'Weight': '88 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '41 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Water dispenser: Fill tank manually. French doors: Open one at a time to save energy. Crispers: Adjust humidity for fruits vs vegetables.',
      maintenance: 'Monthly: Clean water tank. Check dispenser. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Level carefully. Allow door swing space. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Use eco mode. Keep doors closed. Set correct temperature. Regular maintenance.',
      troubleshooting: [
        'Water dispenser slow: Clean tank',
        'Doors not sealing: Check alignment',
        'Not cooling: Check settings',
        'Ice in fridge: Check door seal'
      ],
      bestFor: 'Families wanting French door style on budget',
      estimatedConsumption: '360 units/year'
    },
    {
      id: 'haier-french-luxe',
      name: 'Haier French Door Luxe',
      type: 'French Door',
      capacity: '720L',
      price: 'PKR 230,000 - 260,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors with Handle-less Design',
        'Smart WiFi Connectivity',
        'Auto Ice Maker',
        'Door-in-Door Feature',
        'Food Freshness Sensors',
        'Metal Cooling Plate',
        'Hygiene Fresh+ Filter'
      ],
      specifications: {
        'Capacity': '720 Liters',
        'Type': 'French Door',
        'Energy Rating': '3 Star',
        'Smart': 'WiFi + App Control',
        'Door-in-Door': 'Yes for frequently used items',
        'Ice': 'Auto Ice Maker',
        'Cooling': 'Metal Cooling Technology',
        'Filter': 'Hygiene Fresh+',
        'Dimensions': '195 x 98 x 85 cm',
        'Weight': '108 kg',
        'Color': 'Titanium',
        'Noise Level': '37 dB'
      },
      warranty: '3 years comprehensive + 15 years compressor',
      usageGuide: 'Smart app: Monitor and control from phone. Door-in-Door: Quick access to drinks. Freshness sensors: Automatically adjust temperature. WiFi setup: Use 2.4GHz network.',
      maintenance: 'Weekly: Update app. Monthly: Clean door-in-door. Every 3 months: Replace filter. Yearly: Professional service.',
      installationTips: 'Strong WiFi needed. Professional installation. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes via app. Monitor consumption. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'WiFi disconnected: Reset router',
        'App not working: Update app',
        'Door-in-door not sealing: Check gasket',
        'Sensor error: Call service'
      ],
      bestFor: 'Tech-savvy families, smart home users',
      estimatedConsumption: '410 units/year'
    },

    // ---------- SIDE-BY-SIDE - 3 Models ----------
    {
      id: 'haier-side-family',
      name: 'Haier Side-by-Side Family',
      type: 'Side-by-Side',
      capacity: '600L',
      price: 'PKR 165,000 - 185,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side-by-Side Design',
        'Water Dispenser',
        'Digital Controls',
        'Twin Cooling System',
        'LED Interior Lights',
        'Multiple Door Bins',
        'Deodorizer Filter'
      ],
      specifications: {
        'Capacity': '600 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '2 Star',
        'Dispenser': 'Water Only',
        'Cooling': 'Twin Cooling',
        'Shelves': '5 Each Side',
        'Door Bins': '4 Each Door',
        'Freezer': '210L',
        'Fridge': '390L',
        'Dimensions': '188 x 92 x 82 cm',
        'Weight': '90 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Organize: Left side fridge, right side freezer. Water dispenser: Use filtered water. Twin cooling: Prevents odor transfer. Set temperatures separately.',
      maintenance: 'Monthly: Clean dispenser. Check door seals. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Water line connection needed. Level carefully. Allow door swing. Dedicated outlet.',
      energySavingTips: 'Keep organized for air flow. Don\'t block vents. Check seals. Set appropriate temps.',
      troubleshooting: [
        'Water slow: Check pressure',
        'Freezer not cold: Check setting',
        'Noise: Check if level',
        'Door not sealing: Clean gasket'
      ],
      bestFor: 'Large families, organized storage',
      estimatedConsumption: '370 units/year'
    },
    {
      id: 'haier-side-premium',
      name: 'Haier Side-by-Side Premium',
      type: 'Side-by-Side',
      capacity: '680L',
      price: 'PKR 200,000 - 225,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors',
        'Water & Ice Dispenser',
        'LED Display',
        'Quick Freeze Function',
        'Hygiene Fresh Filter',
        'Digital Inverter',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '680 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '3 Star',
        'Dispenser': 'Water & Ice (Cubed/Crushed)',
        'Cooling': 'Dual Cooling',
        'Shelves': '6 Each Side',
        'Door Bins': '5 Each Door',
        'Freezer': '240L',
        'Fridge': '440L',
        'Filter': 'Hygiene Fresh',
        'Dimensions': '192 x 95 x 85 cm',
        'Weight': '102 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '40 dB'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Ice dispenser: Choose cubed or crushed. Quick freeze: For bulk freezing. Child lock: Prevents accidental dispensing. Filter: Replace every 6 months.',
      maintenance: 'Monthly: Clean ice bin. Check filter indicator. Every 3 months: Replace filter. Every 6 months: Clean coils.',
      installationTips: 'Professional installation. Water pressure requirement. Measure space. Allow ventilation.',
      energySavingTips: 'Use quick freeze only when needed. Regular filter changes. Keep doors closed. Set eco mode.',
      troubleshooting: [
        'Ice not dispensing: Clear jam',
        'Water taste bad: Replace filter',
        'Dispenser light out: Replace bulb',
        'Not cooling: Check settings'
      ],
      bestFor: 'Large families, ice lovers',
      estimatedConsumption: '400 units/year'
    },
    {
      id: 'haier-side-ultimate',
      name: 'Haier Side-by-Side Ultimate',
      type: 'Side-by-Side',
      capacity: '750L',
      price: 'PKR 250,000 - 280,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors with Smart Display',
        'Craft Ice Maker',
        'Smart Home Connect',
        'Food Showcase Mode',
        'Metal Cooling Technology',
        'Voice Control Ready',
        'Auto Closing Doors'
      ],
      specifications: {
        'Capacity': '750 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '3 Star',
        'Smart': 'AI Smart Home Connect',
        'Ice': 'Craft Ice + Regular',
        'Display': 'Smart Touch Screen',
        'Cooling': 'Metal Cooling',
        'Doors': 'Auto Closing Hinge',
        'Freezer': '270L',
        'Fridge': '480L',
        'Dimensions': '198 x 98 x 88 cm',
        'Weight': '118 kg',
        'Color': 'Black Stainless',
        'Noise Level': '37 dB'
      },
      warranty: '3 years comprehensive + 15 years compressor',
      usageGuide: 'Craft ice: Makes clear round ice for premium drinks. Showcase mode: For parties. Auto closing: Doors close automatically if left ajar. Smart app: Monitor and control.',
      maintenance: 'Weekly: Clean craft ice maker. Monthly: Update software. Every 3 months: Professional check. Yearly: Deep clean.',
      installationTips: 'Professional installation only. Strong WiFi needed. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes. Monitor via app. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'Craft ice not making: Check water, wait 24h',
        'Smart features not working: Check WiFi',
        'Doors not auto closing: Check hinge',
        'Display issues: Restart'
      ],
      bestFor: 'Luxury homes, entertaining, tech enthusiasts',
      estimatedConsumption: '430 units/year'
    },

    // ---------- MINI FRIDGE - 3 Models ----------
    {
      id: 'haier-mini-basic',
      name: 'Haier Mini Basic',
      type: 'Mini Fridge',
      capacity: '70L',
      price: 'PKR 20,000 - 25,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        'Basic Cooling',
        'Small Freezer Compartment',
        'Energy Saver Mode',
        'Adjustable Thermostat',
        'Reversible Door',
        'Wire Shelf'
      ],
      specifications: {
        'Capacity': '70 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '1 Star',
        'Freezer': 'Ice Cube Tray',
        'Shelves': '1 Wire + 1 Glass',
        'Door Storage': '2 Can racks',
        'Noise Level': '40 dB',
        'Dimensions': '78 x 42 x 46 cm',
        'Weight': '20 kg',
        'Color': 'White',
        'Power': '70W'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for dorm room. Keep 3 inches ventilation. Set to medium. Freezer makes ice cubes. Defrost every 2-3 months.',
      maintenance: 'Monthly: Clean interior. Check door seal. Every 3 months: Clean back coils. Defrost when needed.',
      installationTips: 'Place on stable surface. Keep away from heat. Level using legs. Regular socket.',
      energySavingTips: 'Keep in cool area. Don\'t open frequently. Set to medium. Defrost regularly.',
      troubleshooting: [
        'Not cooling: Check power',
        'Too noisy: Check if level',
        'Water inside: Defrost needed',
        'Door not closing: Check items'
      ],
      bestFor: 'Students, dorm rooms, small offices',
      estimatedConsumption: '80 units/year'
    },
    {
      id: 'haier-mini-office',
      name: 'Haier Mini Office',
      type: 'Mini Fridge',
      capacity: '100L',
      price: 'PKR 27,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Lockable Door with Keys',
        'Adjustable Glass Shelves',
        'Low Noise Operation',
        'Bottle Storage Rack',
        'Interior Light',
        'Can Dispenser'
      ],
      specifications: {
        'Capacity': '100 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '2 Star',
        'Lock': 'Yes with 2 keys',
        'Shelves': '2 Glass + Can Rack',
        'Freezer': 'Ice Tray',
        'Door Storage': '3 compartments',
        'Noise Level': '36 dB',
        'Dimensions': '85 x 46 x 50 cm',
        'Weight': '24 kg',
        'Color': 'Black',
        'Power': '80W'
      },
      warranty: '1 year warranty',
      usageGuide: 'Office use: Lock for personal items. Can dispenser: Load from top. Bottle rack: Holds 1.5L bottles. Quiet operation for work environment.',
      maintenance: 'Monthly: Clean with damp cloth. Check lock. Every 6 months: Clean back coils. Defrost if ice builds.',
      installationTips: 'Place under desk or break room. Level carefully. Keep away from direct sun. Regular outlet.',
      energySavingTips: 'Use only during work hours. Keep door closed. Set to low at night. Defrost regularly.',
      troubleshooting: [
        'Lock stuck: Use graphite powder',
        'Not cooling: Check setting',
        'Can dispenser jammed: Check loading',
        'Light not working: Replace bulb'
      ],
      bestFor: 'Office break rooms, teachers, staff rooms',
      estimatedConsumption: '105 units/year'
    },
    {
      id: 'haier-mini-bar',
      name: 'Haier Mini Bar',
      type: 'Mini Fridge',
      capacity: '55L',
      price: 'PKR 17,000 - 22,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Glass Door Design',
        'LED Interior Light',
        'Chrome Wire Shelves',
        'Bottle Rack',
        'Thermoelectric Cooling',
        'Silent Operation',
        'Compact Size'
      ],
      specifications: {
        'Capacity': '55 Liters',
        'Type': 'Mini Bar Fridge',
        'Cooling': 'Thermoelectric (no compressor)',
        'Door': 'Tempered Glass',
        'Shelves': 'Chrome Wire (2)',
        'Temperature': '15-20°C below ambient',
        'Noise Level': '28 dB (Silent)',
        'Dimensions': '70 x 38 x 44 cm',
        'Weight': '16 kg',
        'Color': 'Black/Chrome',
        'Power': '60W'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for drinks and snacks. Glass door shows contents. LED light creates ambiance. Not for freezing. Keeps drinks chilled.',
      maintenance: 'Monthly: Clean glass door. Check fan. Keep ventilation clear. No defrost needed.',
      installationTips: 'Place in living room or bar area. Level carefully. Keep upright. Regular socket.',
      energySavingTips: 'Pre-cool drinks before loading. Keep in cool room. Don\'t open frequently. Uses less power.',
      troubleshooting: [
        'Not cooling: Check fan',
        'Light not working: Replace LED',
        'Condensation: Normal in humid weather',
        'Warm inside: Give time to cool'
      ],
      bestFor: 'Home bars, living rooms, entertainment areas',
      estimatedConsumption: '65 units/year'
    }
  ]
},
     {
  id: 'waves-fridge',
  name: 'Waves',
  models: [
    // ---------- SINGLE DOOR - 3 Models ----------
    {
      id: 'waves-single-basic',
      name: 'Waves Single Door Basic',
      type: 'Single Door',
      capacity: '170L',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Budget Friendly',
        'Simple Design',
        'Small Freezer Box',
        'Adjustable Thermostat',
        'Reversible Door',
        'Wire Shelf'
      ],
      specifications: {
        'Capacity': '170 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '1 Star',
        'Freezer Capacity': '25 Liters',
        'Shelves': '2 Glass + 1 Wire',
        'Door Pockets': '3',
        'Vegetable Crisper': '1 Small',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '132 x 52 x 56 cm',
        'Weight': '32 kg',
        'Color': 'White',
        'Noise Level': '45 dB'
      },
      warranty: '6 months comprehensive warranty',
      usageGuide: 'First time: Run empty for 4 hours. Set dial to 3-4. Defrost every 3-4 weeks. Keep food covered to maintain moisture.',
      maintenance: 'Monthly: Clean interior with mild soap. Check door seal. Every 3 months: Clean condenser coils. Defrost regularly.',
      installationTips: 'Place on level floor. Keep 4 inches from wall. Avoid heat sources. Use voltage stabilizer.',
      energySavingTips: 'Set to medium temperature. Defrost regularly. Keep door closed. Don\'t put hot food inside.',
      troubleshooting: [
        'Not cooling: Check power and thermostat',
        'Water leaking: Clean drain hole',
        'Ice buildup: Defrost needed',
        'Noise: Check if level'
      ],
      bestFor: 'Small families, budget buyers, basic needs',
      estimatedConsumption: '160 units/year'
    },
    {
      id: 'waves-single-deluxe',
      name: 'Waves Single Door Deluxe',
      type: 'Single Door',
      capacity: '210L',
      price: 'PKR 40,000 - 46,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Large Freezer Compartment',
        'Veggie Crisper with Glass Lid',
        'LED Interior Light',
        'Adjustable Glass Shelves',
        'Bottle Rack',
        'Energy Saver Switch'
      ],
      specifications: {
        'Capacity': '210 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '1 Star',
        'Freezer Capacity': '40 Liters',
        'Shelves': '3 Tempered Glass',
        'Door Pockets': '4',
        'Vegetable Crisper': '1 with glass lid',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '140 x 56 x 58 cm',
        'Weight': '38 kg',
        'Color': 'White',
        'Noise Level': '43 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Set dial to 3-4 for normal use. Energy saver mode: Use at night. Freezer: Store meat and ice cream. Defrost when ice is 5mm thick.',
      maintenance: 'Monthly: Clean door gasket. Check drain hole. Every 3 months: Clean coils with vacuum. Defrost regularly.',
      installationTips: 'Level carefully. Keep away from oven/stove. Allow ventilation. Use stabilizer.',
      energySavingTips: 'Use energy saver mode. Keep freezer full. Defrost regularly. Check door seal monthly.',
      troubleshooting: [
        'Too cold: Turn dial down',
        'Not cold enough: Turn dial up, check seal',
        'Light not working: Replace bulb',
        'Door not closing: Check level, remove items'
      ],
      bestFor: 'Medium families, budget conscious',
      estimatedConsumption: '190 units/year'
    },
    {
      id: 'waves-single-royal',
      name: 'Waves Single Door Royal',
      type: 'Single Door',
      capacity: '250L',
      price: 'PKR 48,000 - 55,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'LED Light',
        'Adjustable Glass Shelves',
        'Energy Saver',
        'Large Vegetable Box',
        'Bottle Rack',
        'Anti-bacterial Gasket'
      ],
      specifications: {
        'Capacity': '250 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '2 Star',
        'Freezer Capacity': '55 Liters',
        'Shelves': '4 Tempered Glass',
        'Door Pockets': '4',
        'Vegetable Crisper': '1 Large',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '145 x 58 x 60 cm',
        'Weight': '42 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Set dial to 3-4. LED light saves energy. Freezer for frozen food. Defrost every 3-4 weeks.',
      maintenance: 'Monthly: Clean interior. Check door seal. Every 3 months: Clean coils. Defrost regularly.',
      installationTips: 'Level properly. Keep away from heat. Use stabilizer. Allow ventilation.',
      energySavingTips: 'Keep door closed. Defrost regularly. Set to medium. Don\'t overfill.',
      troubleshooting: [
        'Not cooling: Check settings',
        'Water inside: Clean drain',
        'Ice buildup: Defrost',
        'Door not sealing: Clean gasket'
      ],
      bestFor: 'Medium families, good value',
      estimatedConsumption: '220 units/year'
    },

    // ---------- DOUBLE DOOR - 3 Models ----------
    {
      id: 'waves-double-basic',
      name: 'Waves Double Door Basic',
      type: 'Double Door',
      capacity: '350L',
      price: 'PKR 70,000 - 80,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Simple Design',
        'Large Vegetable Box',
        'Bottle Rack',
        'Adjustable Thermostat',
        'Durable Cabinet',
        'Easy Clean Interior'
      ],
      specifications: {
        'Capacity': '350 Liters',
        'Type': 'Double Door Direct Cool',
        'Energy Rating': '1 Star',
        'Shelves': '3 Tempered Glass',
        'Freezer Capacity': '100 Liters',
        'Door Pockets': '4',
        'Vegetable Box': '1 Large',
        'Defrost Type': 'Manual',
        'Control': 'Rotary Knob',
        'Dimensions': '168 x 80 x 68 cm',
        'Weight': '64 kg',
        'Color': 'White',
        'Noise Level': '46 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Defrost every 2-3 weeks. Use plastic scraper (not metal). Set dial to 3-4. Keep freezer door closed to prevent ice buildup.',
      maintenance: 'Weekly: Check ice buildup. Monthly: Clean interior. Every 3 months: Defrost thoroughly. Check door seal.',
      installationTips: 'Keep in cool area. Level properly. Use stabilizer. Allow ventilation.',
      energySavingTips: 'Defrost regularly. Keep door closed. Don\'t put hot food. Set to medium.',
      troubleshooting: [
        'Heavy ice: Defrost needed',
        'Not cooling: Check thermostat',
        'Water on floor: Defrost and clean drain',
        'Door not closing: Check items blocking'
      ],
      bestFor: 'Budget conscious families, simple needs',
      estimatedConsumption: '280 units/year'
    },
    {
      id: 'waves-double-frostfree',
      name: 'Waves Double Door Frost Free',
      type: 'Double Door',
      capacity: '420L',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        'Frost Free Technology',
        'Digital Display',
        'Multi Air Flow',
        'Quick Cool Function',
        'Tempered Glass Shelves',
        'LED Interior Light',
        'Door Alarm'
      ],
      specifications: {
        'Capacity': '420 Liters',
        'Type': 'Double Door Frost Free',
        'Energy Rating': '2 Star',
        'Shelves': '4 Tempered Glass',
        'Freezer Capacity': '130 Liters',
        'Door Pockets': '5',
        'Vegetable Crisper': '1 Large',
        'Cooling': 'Multi Air Flow',
        'Display': 'LED Digital',
        'Dimensions': '175 x 85 x 70 cm',
        'Weight': '72 kg',
        'Color': 'Silver',
        'Noise Level': '43 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'No defrost needed ever. Quick cool: Use when adding groceries. Set fridge to 4°C, freezer to -18°C. Allow 24 hours for temperature stabilization.',
      maintenance: 'Monthly: Clean interior with soft cloth. Every 3 months: Clean condenser coils. Every 6 months: Check door seals.',
      installationTips: 'Level carefully. Allow 5cm clearance on sides. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Don\'t set too cold. Keep door closed. Clean coils regularly. Check seals monthly.',
      troubleshooting: [
        'Not cooling: Check power and settings',
        'Water inside: Clean drain hole',
        'Noise: Check if level',
        'Display error: Call service'
      ],
      bestFor: 'Medium families, no-defrost convenience',
      estimatedConsumption: '320 units/year'
    },
    {
      id: 'waves-double-inverter',
      name: 'Waves Double Door Inverter',
      type: 'Double Door',
      capacity: '480L',
      price: 'PKR 115,000 - 130,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Energy Saving',
        'LED Display',
        'Quick Cool',
        'Multi Air Flow',
        'Holiday Mode',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '480 Liters',
        'Type': 'Double Door Inverter',
        'Energy Rating': '3 Star',
        'Compressor': 'Digital Inverter',
        'Shelves': '5 Tempered Glass',
        'Freezer Capacity': '155 Liters',
        'Door Pockets': '6',
        'Vegetable Crisper': '2',
        'Display': 'LED Digital',
        'Dimensions': '180 x 88 x 72 cm',
        'Weight': '78 kg',
        'Color': 'Black Glass',
        'Noise Level': '40 dB'
      },
      warranty: '2 years comprehensive + 10 years compressor',
      usageGuide: 'Inverter saves energy by varying speed. Holiday mode: Use when away. Quick cool: For new groceries. Child lock prevents settings change.',
      maintenance: 'Monthly: Clean interior. Check door alarm. Every 3 months: Clean condenser coils. Every 6 months: Professional check.',
      installationTips: 'Professional installation recommended. Level carefully. Allow ventilation. No stabilizer needed.',
      energySavingTips: 'Use holiday mode when away. Set eco mode at night. Keep full but not overloaded. Regular maintenance.',
      troubleshooting: [
        'Inverter not working: Check power, call service',
        'Door alarm: Check door closure',
        'Too cold: Adjust settings',
        'Error code: Note and call service'
      ],
      bestFor: 'Large families, energy conscious buyers',
      estimatedConsumption: '300 units/year'
    },

    // ---------- FRENCH DOOR - 3 Models ----------
    {
      id: 'waves-french-entry',
      name: 'Waves French Door Entry',
      type: 'French Door',
      capacity: '550L',
      price: 'PKR 145,000 - 165,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors',
        'Water Dispenser',
        'LED Lights',
        'Multi Air Flow',
        'Tempered Glass Shelves',
        'Humidity Controlled Crispers',
        'Door Ajar Alarm'
      ],
      specifications: {
        'Capacity': '550 Liters',
        'Type': 'French Door',
        'Energy Rating': '2 Star',
        'Doors': '4 Doors',
        'Water Dispenser': 'External (Manual Fill)',
        'Shelves': '4 Tempered Glass',
        'Freezer': 'Bottom Drawer 160L',
        'Crispers': '2',
        'Display': 'LED',
        'Dimensions': '185 x 90 x 78 cm',
        'Weight': '86 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '43 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Water dispenser: Fill tank manually. French doors: Open one at a time to save energy. Crispers: Store fruits and vegetables.',
      maintenance: 'Monthly: Clean water tank. Check dispenser. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Level carefully. Allow door swing space. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Use eco mode. Keep doors closed. Set correct temperature. Regular maintenance.',
      troubleshooting: [
        'Water dispenser slow: Clean tank',
        'Doors not sealing: Check alignment',
        'Not cooling: Check settings',
        'Ice in fridge: Check door seal'
      ],
      bestFor: 'Families wanting French door style on budget',
      estimatedConsumption: '350 units/year'
    },
    {
      id: 'waves-french-premium',
      name: 'Waves French Door Premium',
      type: 'French Door',
      capacity: '620L',
      price: 'PKR 175,000 - 200,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors',
        'Water & Ice Dispenser',
        'Digital Controls',
        'Fresh Zone',
        'Twin Cooling',
        'LED Display',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '620 Liters',
        'Type': 'French Door',
        'Energy Rating': '2 Star',
        'Dispenser': 'Water & Ice',
        'Cooling': 'Twin Cooling',
        'Shelves': '5 Glass',
        'Freezer': '190L',
        'Display': 'LED Digital',
        'Dimensions': '190 x 94 x 80 cm',
        'Weight': '94 kg',
        'Color': 'Black Stainless',
        'Noise Level': '41 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Ice maker: First ice after 24 hours. Fresh zone: For meat and fish. Twin cooling: Prevents odor transfer.',
      maintenance: 'Monthly: Clean dispenser. Every 3 months: Replace water filter. Every 6 months: Clean coils.',
      installationTips: 'Water line needed. Professional installation. Measure doorway. Allow ventilation.',
      energySavingTips: 'Use quick freeze only when needed. Regular filter changes. Keep organized.',
      troubleshooting: [
        'Ice maker not working: Check water',
        'Fresh zone not cold: Check setting',
        'Water leak: Check connections',
        'Not cooling: Call service'
      ],
      bestFor: 'Premium homes, entertaining families',
      estimatedConsumption: '380 units/year'
    },
    {
      id: 'waves-french-luxe',
      name: 'Waves French Door Luxe',
      type: 'French Door',
      capacity: '680L',
      price: 'PKR 210,000 - 240,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors',
        'Smart Features',
        'Auto Ice',
        'Touch Display',
        'Door-in-Door',
        'WiFi Ready',
        'Metal Cooling'
      ],
      specifications: {
        'Capacity': '680 Liters',
        'Type': 'French Door',
        'Energy Rating': '3 Star',
        'Smart': 'WiFi Compatible',
        'Ice': 'Auto Ice Maker',
        'Door-in-Door': 'Yes',
        'Cooling': 'Metal Cooling',
        'Display': 'Touch Screen',
        'Dimensions': '194 x 96 x 84 cm',
        'Weight': '102 kg',
        'Color': 'Titanium',
        'Noise Level': '38 dB'
      },
      warranty: '3 years comprehensive + 12 years compressor',
      usageGuide: 'Smart app: Monitor from phone. Door-in-Door: Quick access to drinks. Auto ice: Makes ice automatically. Touch display: Easy controls.',
      maintenance: 'Weekly: Clean door-in-door. Monthly: Update app. Every 3 months: Replace filter. Yearly: Professional service.',
      installationTips: 'WiFi needed for smart features. Professional installation. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes via app. Monitor consumption. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'WiFi disconnected: Reset router',
        'App not working: Update app',
        'Door-in-door not sealing: Check gasket',
        'Ice not making: Check water'
      ],
      bestFor: 'Tech-savvy families, smart home users',
      estimatedConsumption: '400 units/year'
    },

    // ---------- SIDE-BY-SIDE - 3 Models ----------
    {
      id: 'waves-side-family',
      name: 'Waves Side-by-Side Family',
      type: 'Side-by-Side',
      capacity: '580L',
      price: 'PKR 155,000 - 175,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Design',
        'Water Dispenser',
        'Digital Display',
        'Twin Cooling',
        'LED Lights',
        'Multiple Door Bins',
        'Deodorizer Filter'
      ],
      specifications: {
        'Capacity': '580 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '2 Star',
        'Dispenser': 'Water Only',
        'Cooling': 'Twin Cooling',
        'Shelves': '5 Each Side',
        'Door Bins': '4 Each Door',
        'Freezer': '200L',
        'Fridge': '380L',
        'Dimensions': '186 x 90 x 80 cm',
        'Weight': '88 kg',
        'Color': 'Silver',
        'Noise Level': '43 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Organize: Left side fridge, right side freezer. Water dispenser: Use filtered water. Twin cooling: Prevents odor transfer.',
      maintenance: 'Monthly: Clean dispenser. Check door seals. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Water line connection needed. Level carefully. Allow door swing. Dedicated outlet.',
      energySavingTips: 'Keep organized for air flow. Don\'t block vents. Check seals. Set appropriate temps.',
      troubleshooting: [
        'Water slow: Check pressure',
        'Freezer not cold: Check setting',
        'Noise: Check if level',
        'Door not sealing: Clean gasket'
      ],
      bestFor: 'Large families, organized storage',
      estimatedConsumption: '360 units/year'
    },
    {
      id: 'waves-side-premium',
      name: 'Waves Side-by-Side Premium',
      type: 'Side-by-Side',
      capacity: '650L',
      price: 'PKR 185,000 - 210,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors',
        'Water & Ice Dispenser',
        'LED Display',
        'Quick Freeze',
        'Hygiene Filter',
        'Digital Inverter',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '650 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '2 Star',
        'Dispenser': 'Water & Ice',
        'Cooling': 'Dual Cooling',
        'Shelves': '6 Each Side',
        'Door Bins': '5 Each Door',
        'Freezer': '230L',
        'Fridge': '420L',
        'Filter': 'Hygiene Filter',
        'Dimensions': '190 x 94 x 84 cm',
        'Weight': '98 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '41 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Ice dispenser: Choose cubed or crushed. Quick freeze: For bulk freezing. Child lock: Prevents accidental dispensing.',
      maintenance: 'Monthly: Clean ice bin. Check filter indicator. Every 3 months: Replace filter. Every 6 months: Clean coils.',
      installationTips: 'Professional installation. Water pressure requirement. Measure space. Allow ventilation.',
      energySavingTips: 'Use quick freeze only when needed. Regular filter changes. Keep doors closed.',
      troubleshooting: [
        'Ice not dispensing: Clear jam',
        'Water taste bad: Replace filter',
        'Dispenser light out: Replace bulb',
        'Not cooling: Check settings'
      ],
      bestFor: 'Large families, ice lovers',
      estimatedConsumption: '390 units/year'
    },
    {
      id: 'waves-side-ultimate',
      name: 'Waves Side-by-Side Ultimate',
      type: 'Side-by-Side',
      capacity: '720L',
      price: 'PKR 225,000 - 255,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors',
        'Smart Home Connect',
        'Craft Ice',
        'Food Management',
        'Metal Cooling',
        'Voice Ready',
        'Auto Doors'
      ],
      specifications: {
        'Capacity': '720 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '3 Star',
        'Smart': 'Smart Connect',
        'Ice': 'Craft Ice + Regular',
        'Cooling': 'Metal Cooling',
        'Doors': 'Auto Closing',
        'Freezer': '260L',
        'Fridge': '460L',
        'Dimensions': '196 x 97 x 86 cm',
        'Weight': '112 kg',
        'Color': 'Black Stainless',
        'Noise Level': '38 dB'
      },
      warranty: '3 years comprehensive + 12 years compressor',
      usageGuide: 'Craft ice: Makes clear round ice. Smart app: Monitor and control. Auto doors: Close automatically. Food management: Track expiry.',
      maintenance: 'Weekly: Clean craft ice maker. Monthly: Update software. Every 3 months: Professional check. Yearly: Deep clean.',
      installationTips: 'Professional installation only. Strong WiFi needed. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes. Monitor via app. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'Craft ice not making: Check water, wait 24h',
        'Smart features not working: Check WiFi',
        'Doors not auto closing: Check hinge',
        'Display issues: Restart'
      ],
      bestFor: 'Luxury homes, entertaining, tech enthusiasts',
      estimatedConsumption: '420 units/year'
    },

    // ---------- MINI FRIDGE - 3 Models ----------
    {
      id: 'waves-mini',
      name: 'Waves Mini Fridge',
      type: 'Mini Fridge',
      capacity: '85L',
      price: 'PKR 25,000 - 30,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Energy Saving',
        'Silent Operation',
        'Budget Friendly',
        'Small Freezer',
        'Adjustable Thermostat',
        'Reversible Door'
      ],
      specifications: {
        'Capacity': '85 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '1 Star',
        'Freezer': 'Small Freezer Box',
        'Shelves': '1 Wire + 1 Glass',
        'Door Storage': '2 Can racks',
        'Noise Level': '40 dB',
        'Dimensions': '85 x 45 x 50 cm',
        'Weight': '23 kg',
        'Color': 'White',
        'Power': '75W'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for dorm room. Keep 3 inches ventilation. Set to medium. Freezer makes ice cubes. Defrost every 2-3 months.',
      maintenance: 'Monthly: Clean interior. Check door seal. Every 3 months: Clean back coils. Defrost when needed.',
      installationTips: 'Place on stable surface. Keep away from heat. Level using legs. Regular socket.',
      energySavingTips: 'Keep in cool area. Don\'t open frequently. Set to medium. Defrost regularly.',
      troubleshooting: [
        'Not cooling: Check power',
        'Too noisy: Check if level',
        'Water inside: Defrost needed',
        'Door not closing: Check items'
      ],
      bestFor: 'Students, dorm rooms, small offices',
      estimatedConsumption: '95 units/year'
    },
    {
      id: 'waves-mini-office',
      name: 'Waves Mini Office',
      type: 'Mini Fridge',
      capacity: '110L',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Lockable',
        'Adjustable Shelves',
        'Low Noise',
        'Bottle Rack',
        'Interior Light',
        'Can Dispenser'
      ],
      specifications: {
        'Capacity': '110 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '2 Star',
        'Lock': 'Yes with 2 keys',
        'Shelves': '2 Glass + Can Rack',
        'Freezer': 'Ice Tray',
        'Door Storage': '3 compartments',
        'Noise Level': '37 dB',
        'Dimensions': '88 x 48 x 52 cm',
        'Weight': '26 kg',
        'Color': 'Black',
        'Power': '80W'
      },
      warranty: '1 year warranty',
      usageGuide: 'Office use: Lock for personal items. Can dispenser: Load from top. Bottle rack: Holds 1.5L bottles. Quiet operation for work environment.',
      maintenance: 'Monthly: Clean with damp cloth. Check lock. Every 6 months: Clean back coils. Defrost if ice builds.',
      installationTips: 'Place under desk or break room. Level carefully. Keep away from direct sun. Regular outlet.',
      energySavingTips: 'Use only during work hours. Keep door closed. Set to low at night. Defrost regularly.',
      troubleshooting: [
        'Lock stuck: Use graphite powder',
        'Not cooling: Check setting',
        'Can dispenser jammed: Check loading',
        'Light not working: Replace bulb'
      ],
      bestFor: 'Office break rooms, teachers, staff rooms',
      estimatedConsumption: '115 units/year'
    },
    {
      id: 'waves-mini-dorm',
      name: 'Waves Mini Dorm',
      type: 'Mini Fridge',
      capacity: '60L',
      price: 'PKR 18,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Ultra Compact',
        'Basic Cooling',
        'Portable',
        'Energy Saver',
        'Thermoelectric',
        'Lightweight',
        'AC/DC Option'
      ],
      specifications: {
        'Capacity': '60 Liters',
        'Type': 'Mini Fridge',
        'Cooling': 'Thermoelectric',
        'Power': '60W',
        'Operation': 'AC only',
        'Temperature': '15-20°C below ambient',
        'Noise Level': '30 dB',
        'Dimensions': '72 x 40 x 44 cm',
        'Weight': '16 kg',
        'Color': 'White/Blue',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for dorm room. Keeps drinks cool, not freezing. Good for snacks. Takes 2-3 hours to cool. No defrost needed.',
      maintenance: 'Monthly: Clean interior. Check fan. Keep ventilation clear. No defrost needed.',
      installationTips: 'Portable - just plug in. Keep upright. Allow air circulation. Regular socket.',
      energySavingTips: 'Pre-cool items before putting in. Keep in cool room. Don\'t open frequently.',
      troubleshooting: [
        'Not cooling: Check fan',
        'Warm inside: Give time to cool',
        'Fan noise: Clean fan blades',
        'Condensation: Normal in humid weather'
      ],
      bestFor: 'Students, small dorms, light use',
      estimatedConsumption: '70 units/year'
    }
  ]
},
      {
  id: 'gree-fridge',
  name: 'Gree',
  models: [
    // ---------- SINGLE DOOR - 3 Models ----------
    {
      id: 'gree-single-basic',
      name: 'Gree Single Door Basic',
      type: 'Single Door',
      capacity: '180L',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Energy Efficient',
        'Simple Design',
        'Small Freezer Box',
        'Adjustable Thermostat',
        'Reversible Door',
        'Wire Shelf'
      ],
      specifications: {
        'Capacity': '180 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '1 Star',
        'Freezer Capacity': '28 Liters',
        'Shelves': '2 Glass + 1 Wire',
        'Door Pockets': '3',
        'Vegetable Crisper': '1 Small',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '135 x 53 x 57 cm',
        'Weight': '34 kg',
        'Color': 'White',
        'Noise Level': '43 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'First time: Run empty for 4 hours. Set dial to 3-4. Defrost every 3-4 weeks. Keep food covered to maintain moisture.',
      maintenance: 'Monthly: Clean interior with mild soap. Check door seal. Every 3 months: Clean condenser coils. Defrost regularly.',
      installationTips: 'Place on level floor. Keep 4 inches from wall. Avoid heat sources. Use voltage stabilizer.',
      energySavingTips: 'Set to medium temperature. Defrost regularly. Keep door closed. Don\'t put hot food inside.',
      troubleshooting: [
        'Not cooling: Check power and thermostat',
        'Water leaking: Clean drain hole',
        'Ice buildup: Defrost needed',
        'Noise: Check if level'
      ],
      bestFor: 'Small families, budget buyers, basic needs',
      estimatedConsumption: '165 units/year'
    },
    {
      id: 'gree-single-deluxe',
      name: 'Gree Single Door Deluxe',
      type: 'Single Door',
      capacity: '230L',
      price: 'PKR 48,000 - 55,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Large Freezer Compartment',
        'Veggie Tray with Glass Lid',
        'LED Interior Light',
        'Adjustable Glass Shelves',
        'Bottle Rack',
        'Energy Saver Switch'
      ],
      specifications: {
        'Capacity': '230 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '2 Star',
        'Freezer Capacity': '45 Liters',
        'Shelves': '3 Tempered Glass',
        'Door Pockets': '4',
        'Vegetable Crisper': '1 with glass lid',
        'Defrost Type': 'Manual',
        'Refrigerant': 'R600a',
        'Dimensions': '142 x 57 x 60 cm',
        'Weight': '39 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Set dial to 3-4 for normal use. Energy saver mode: Use at night. Freezer: Store meat and ice cream. Defrost when ice is 5mm thick.',
      maintenance: 'Monthly: Clean door gasket. Check drain hole. Every 3 months: Clean coils with vacuum. Defrost regularly.',
      installationTips: 'Level carefully. Keep away from oven/stove. Allow ventilation. Use stabilizer.',
      energySavingTips: 'Use energy saver mode. Keep freezer full. Defrost regularly. Check door seal monthly.',
      troubleshooting: [
        'Too cold: Turn dial down',
        'Not cold enough: Turn dial up, check seal',
        'Light not working: Replace bulb',
        'Door not closing: Check level, remove items'
      ],
      bestFor: 'Medium families, those needing more freezer space',
      estimatedConsumption: '205 units/year'
    },
    {
      id: 'gree-single-premium',
      name: 'Gree Single Door Premium',
      type: 'Single Door',
      capacity: '270L',
      price: 'PKR 58,000 - 66,000',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800',
      features: [
        'Direct Cool System',
        'Built-in Voltage Stabilizer',
        'Anti-bacterial Protection',
        'LED Light',
        'Large Vegetable Box',
        'Adjustable Glass Shelves',
        'Door Ajar Indicator'
      ],
      specifications: {
        'Capacity': '270 Liters',
        'Type': 'Single Door Direct Cool',
        'Energy Rating': '2 Star',
        'Freezer Capacity': '60 Liters',
        'Shelves': '4 Tempered Glass',
        'Door Pockets': '5',
        'Vegetable Crisper': '1 Large with divider',
        'Stabilizer': 'Built-in (170V-270V)',
        'Defrost Type': 'Manual',
        'Dimensions': '148 x 60 x 62 cm',
        'Weight': '44 kg',
        'Color': 'Silver/Black',
        'Noise Level': '41 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'First use: Run empty for 6 hours. Built-in stabilizer protects from voltage fluctuations. Freezer can store up to 2 weeks food. Defrost using drain hose.',
      maintenance: 'Monthly: Clean interior with mild soap. Check stabilizer indicator. Every 3 months: Clean condenser. Yearly: Professional check.',
      installationTips: 'No external stabilizer needed. Place on level ground. Keep 5 inches from wall. Avoid direct sunlight.',
      energySavingTips: 'Set to medium. Keep door closed. Defrost regularly. Don\'t overfill.',
      troubleshooting: [
        'Stabilizer light blinking: Check voltage',
        'Water leakage: Clean drain pipe',
        'Door not sealing: Clean gasket',
        'Excessive ice: Defrost needed'
      ],
      bestFor: 'Large families, areas with voltage fluctuations',
      estimatedConsumption: '240 units/year'
    },

    // ---------- DOUBLE DOOR - 3 Models ----------
    {
      id: 'gree-eco-fridge',
      name: 'Gree Eco Friendly',
      type: 'Double Door',
      capacity: '480L',
      price: 'PKR 110,000 - 125,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Eco-Friendly Refrigerant',
        'Low Noise Operation',
        'Quick Cooling',
        'Digital Display',
        'Multi Air Flow',
        'LED Light',
        'Door Alarm'
      ],
      specifications: {
        'Capacity': '480 Liters',
        'Type': 'Double Door Frost Free',
        'Energy Rating': '3 Star',
        'Noise Level': '38 dB',
        'Display': 'LED Digital',
        'Shelves': '5 Tempered Glass',
        'Freezer Capacity': '160 Liters',
        'Door Pockets': '6',
        'Vegetable Crisper': '2',
        'Dimensions': '178 x 86 x 70 cm',
        'Weight': '78 kg',
        'Color': 'Silver',
        'Noise Level': '38 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Eco-friendly refrigerant safe for environment. No defrost needed. Quick cool: Use when adding groceries. Set fridge to 4°C, freezer to -18°C.',
      maintenance: 'Monthly: Clean interior with soft cloth. Every 3 months: Clean condenser coils. Every 6 months: Check door seals.',
      installationTips: 'Level carefully. Allow 5cm clearance on sides. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Use eco mode. Keep door closed. Clean coils regularly. Check seals monthly.',
      troubleshooting: [
        'Not cooling: Check power and settings',
        'Water inside: Clean drain hole',
        'Noise: Check if level',
        'Display error: Call service'
      ],
      bestFor: 'Eco-conscious families, medium to large families',
      estimatedConsumption: '310 units/year'
    },
    {
      id: 'gree-double-frostfree',
      name: 'Gree Double Door Frost Free',
      type: 'Double Door',
      capacity: '420L',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        'Frost Free Technology',
        'Multi Air Flow',
        'LED Display',
        'Quick Cool',
        'Tempered Glass Shelves',
        'Large Vegetable Box',
        'LED Light'
      ],
      specifications: {
        'Capacity': '420 Liters',
        'Type': 'Double Door Frost Free',
        'Energy Rating': '2 Star',
        'Shelves': '4 Tempered Glass',
        'Freezer Capacity': '130 Liters',
        'Door Pockets': '5',
        'Vegetable Crisper': '1 Large',
        'Cooling': 'Multi Air Flow',
        'Display': 'LED Digital',
        'Dimensions': '175 x 84 x 70 cm',
        'Weight': '72 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'No defrost needed ever. Quick cool: Use when adding groceries. Set fridge to 4°C, freezer to -18°C. Allow 24 hours for temperature stabilization.',
      maintenance: 'Monthly: Clean interior with soft cloth. Every 3 months: Clean condenser coils. Every 6 months: Check door seals.',
      installationTips: 'Level carefully. Allow 5cm clearance on sides. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Don\'t set too cold. Keep door closed. Clean coils regularly. Check seals monthly.',
      troubleshooting: [
        'Not cooling: Check power and settings',
        'Water inside: Clean drain hole',
        'Noise: Check if level',
        'Display error: Call service'
      ],
      bestFor: 'Medium families, no-defrost convenience',
      estimatedConsumption: '320 units/year'
    },
    {
      id: 'gree-double-inverter',
      name: 'Gree Double Door Inverter',
      type: 'Double Door',
      capacity: '520L',
      price: 'PKR 125,000 - 140,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Energy Saving',
        'Digital Display',
        'Holiday Mode',
        'Multi Air Flow',
        'Quick Freeze',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '520 Liters',
        'Type': 'Double Door Inverter',
        'Energy Rating': '3 Star',
        'Compressor': 'Inverter',
        'Shelves': '5 Tempered Glass',
        'Freezer Capacity': '170 Liters',
        'Door Pockets': '6',
        'Vegetable Crisper': '2',
        'Display': 'LED Digital',
        'Dimensions': '182 x 88 x 72 cm',
        'Weight': '80 kg',
        'Color': 'Black Glass',
        'Noise Level': '39 dB'
      },
      warranty: '2 years comprehensive + 10 years compressor',
      usageGuide: 'Inverter saves energy by varying speed. Holiday mode: Use when away. Quick freeze: For bulk freezing. Child lock prevents settings change.',
      maintenance: 'Monthly: Clean interior. Check door alarm. Every 3 months: Clean condenser coils. Every 6 months: Professional check.',
      installationTips: 'Professional installation recommended. Level carefully. Allow ventilation. No stabilizer needed.',
      energySavingTips: 'Use holiday mode when away. Set eco mode at night. Keep full but not overloaded. Regular maintenance.',
      troubleshooting: [
        'Inverter not working: Check power, call service',
        'Door alarm: Check door closure',
        'Too cold: Adjust settings',
        'Error code: Note and call service'
      ],
      bestFor: 'Large families, energy conscious buyers',
      estimatedConsumption: '300 units/year'
    },

    // ---------- FRENCH DOOR - 3 Models ----------
    {
      id: 'gree-french-entry',
      name: 'Gree French Door Entry',
      type: 'French Door',
      capacity: '560L',
      price: 'PKR 150,000 - 170,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors',
        'Water Dispenser',
        'LED Lights',
        'Multi Air Flow',
        'Tempered Glass Shelves',
        'Humidity Controlled Crispers',
        'Door Ajar Alarm'
      ],
      specifications: {
        'Capacity': '560 Liters',
        'Type': 'French Door',
        'Energy Rating': '2 Star',
        'Doors': '4 Doors',
        'Water Dispenser': 'External (Manual Fill)',
        'Shelves': '4 Tempered Glass',
        'Freezer': 'Bottom Drawer 160L',
        'Crispers': '2',
        'Display': 'LED',
        'Dimensions': '186 x 90 x 78 cm',
        'Weight': '86 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '42 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Water dispenser: Fill tank manually. French doors: Open one at a time to save energy. Crispers: Store fruits and vegetables.',
      maintenance: 'Monthly: Clean water tank. Check dispenser. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Level carefully. Allow door swing space. Keep away from heat. Use dedicated socket.',
      energySavingTips: 'Use eco mode. Keep doors closed. Set correct temperature. Regular maintenance.',
      troubleshooting: [
        'Water dispenser slow: Clean tank',
        'Doors not sealing: Check alignment',
        'Not cooling: Check settings',
        'Ice in fridge: Check door seal'
      ],
      bestFor: 'Families wanting French door style on budget',
      estimatedConsumption: '350 units/year'
    },
    {
      id: 'gree-french-premium',
      name: 'Gree French Door Premium',
      type: 'French Door',
      capacity: '630L',
      price: 'PKR 180,000 - 205,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors',
        'Water & Ice Dispenser',
        'Digital Controls',
        'Fresh Zone',
        'Twin Cooling',
        'LED Display',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '630 Liters',
        'Type': 'French Door',
        'Energy Rating': '2 Star',
        'Dispenser': 'Water & Ice',
        'Cooling': 'Twin Cooling',
        'Shelves': '5 Glass',
        'Freezer': '190L',
        'Display': 'LED Digital',
        'Dimensions': '190 x 94 x 80 cm',
        'Weight': '94 kg',
        'Color': 'Black Stainless',
        'Noise Level': '40 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Ice maker: First ice after 24 hours. Fresh zone: For meat and fish. Twin cooling: Prevents odor transfer.',
      maintenance: 'Monthly: Clean dispenser. Every 3 months: Replace water filter. Every 6 months: Clean coils.',
      installationTips: 'Water line needed. Professional installation. Measure doorway. Allow ventilation.',
      energySavingTips: 'Use quick freeze only when needed. Regular filter changes. Keep organized.',
      troubleshooting: [
        'Ice maker not working: Check water',
        'Fresh zone not cold: Check setting',
        'Water leak: Check connections',
        'Not cooling: Call service'
      ],
      bestFor: 'Premium homes, entertaining families',
      estimatedConsumption: '380 units/year'
    },
    {
      id: 'gree-french-luxe',
      name: 'Gree French Door Luxe',
      type: 'French Door',
      capacity: '690L',
      price: 'PKR 215,000 - 245,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'French Doors',
        'Smart Features',
        'Auto Ice',
        'Touch Display',
        'Door-in-Door',
        'WiFi Ready',
        'Metal Cooling'
      ],
      specifications: {
        'Capacity': '690 Liters',
        'Type': 'French Door',
        'Energy Rating': '3 Star',
        'Smart': 'WiFi Compatible',
        'Ice': 'Auto Ice Maker',
        'Door-in-Door': 'Yes',
        'Cooling': 'Metal Cooling',
        'Display': 'Touch Screen',
        'Dimensions': '194 x 96 x 84 cm',
        'Weight': '104 kg',
        'Color': 'Titanium',
        'Noise Level': '38 dB'
      },
      warranty: '3 years comprehensive + 12 years compressor',
      usageGuide: 'Smart app: Monitor from phone. Door-in-Door: Quick access to drinks. Auto ice: Makes ice automatically. Touch display: Easy controls.',
      maintenance: 'Weekly: Clean door-in-door. Monthly: Update app. Every 3 months: Replace filter. Yearly: Professional service.',
      installationTips: 'WiFi needed for smart features. Professional installation. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes via app. Monitor consumption. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'WiFi disconnected: Reset router',
        'App not working: Update app',
        'Door-in-door not sealing: Check gasket',
        'Ice not making: Check water'
      ],
      bestFor: 'Tech-savvy families, smart home users',
      estimatedConsumption: '400 units/year'
    },

    // ---------- SIDE-BY-SIDE - 3 Models ----------
    {
      id: 'gree-side-family',
      name: 'Gree Side-by-Side Family',
      type: 'Side-by-Side',
      capacity: '590L',
      price: 'PKR 160,000 - 180,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Design',
        'Water Dispenser',
        'Digital Display',
        'Twin Cooling',
        'LED Lights',
        'Multiple Door Bins',
        'Deodorizer Filter'
      ],
      specifications: {
        'Capacity': '590 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '2 Star',
        'Dispenser': 'Water Only',
        'Cooling': 'Twin Cooling',
        'Shelves': '5 Each Side',
        'Door Bins': '4 Each Door',
        'Freezer': '200L',
        'Fridge': '390L',
        'Dimensions': '188 x 92 x 82 cm',
        'Weight': '90 kg',
        'Color': 'Silver',
        'Noise Level': '42 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Organize: Left side fridge, right side freezer. Water dispenser: Use filtered water. Twin cooling: Prevents odor transfer.',
      maintenance: 'Monthly: Clean dispenser. Check door seals. Every 3 months: Clean coils. Every 6 months: Professional check.',
      installationTips: 'Water line connection needed. Level carefully. Allow door swing. Dedicated outlet.',
      energySavingTips: 'Keep organized for air flow. Don\'t block vents. Check seals. Set appropriate temps.',
      troubleshooting: [
        'Water slow: Check pressure',
        'Freezer not cold: Check setting',
        'Noise: Check if level',
        'Door not sealing: Clean gasket'
      ],
      bestFor: 'Large families, organized storage',
      estimatedConsumption: '365 units/year'
    },
    {
      id: 'gree-side-premium',
      name: 'Gree Side-by-Side Premium',
      type: 'Side-by-Side',
      capacity: '660L',
      price: 'PKR 190,000 - 215,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors',
        'Water & Ice Dispenser',
        'LED Display',
        'Quick Freeze',
        'Hygiene Filter',
        'Digital Inverter',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '660 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '2 Star',
        'Dispenser': 'Water & Ice',
        'Cooling': 'Dual Cooling',
        'Shelves': '6 Each Side',
        'Door Bins': '5 Each Door',
        'Freezer': '230L',
        'Fridge': '430L',
        'Filter': 'Hygiene Filter',
        'Dimensions': '192 x 95 x 84 cm',
        'Weight': '100 kg',
        'Color': 'Stainless Steel',
        'Noise Level': '40 dB'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Ice dispenser: Choose cubed or crushed. Quick freeze: For bulk freezing. Child lock: Prevents accidental dispensing.',
      maintenance: 'Monthly: Clean ice bin. Check filter indicator. Every 3 months: Replace filter. Every 6 months: Clean coils.',
      installationTips: 'Professional installation. Water pressure requirement. Measure space. Allow ventilation.',
      energySavingTips: 'Use quick freeze only when needed. Regular filter changes. Keep doors closed.',
      troubleshooting: [
        'Ice not dispensing: Clear jam',
        'Water taste bad: Replace filter',
        'Dispenser light out: Replace bulb',
        'Not cooling: Check settings'
      ],
      bestFor: 'Large families, ice lovers',
      estimatedConsumption: '390 units/year'
    },
    {
      id: 'gree-side-ultimate',
      name: 'Gree Side-by-Side Ultimate',
      type: 'Side-by-Side',
      capacity: '720L',
      price: 'PKR 230,000 - 260,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Side Doors',
        'Smart Home Connect',
        'Craft Ice',
        'Food Management',
        'Metal Cooling',
        'Voice Ready',
        'Auto Doors'
      ],
      specifications: {
        'Capacity': '720 Liters',
        'Type': 'Side-by-Side',
        'Energy Rating': '3 Star',
        'Smart': 'Smart Connect',
        'Ice': 'Craft Ice + Regular',
        'Cooling': 'Metal Cooling',
        'Doors': 'Auto Closing',
        'Freezer': '260L',
        'Fridge': '460L',
        'Dimensions': '196 x 97 x 86 cm',
        'Weight': '114 kg',
        'Color': 'Black Stainless',
        'Noise Level': '37 dB'
      },
      warranty: '3 years comprehensive + 12 years compressor',
      usageGuide: 'Craft ice: Makes clear round ice. Smart app: Monitor and control. Auto doors: Close automatically. Food management: Track expiry.',
      maintenance: 'Weekly: Clean craft ice maker. Monthly: Update software. Every 3 months: Professional check. Yearly: Deep clean.',
      installationTips: 'Professional installation only. Strong WiFi needed. Check door swing. Water pressure requirement.',
      energySavingTips: 'Use smart modes. Monitor via app. Regular maintenance. Optimal settings.',
      troubleshooting: [
        'Craft ice not making: Check water, wait 24h',
        'Smart features not working: Check WiFi',
        'Doors not auto closing: Check hinge',
        'Display issues: Restart'
      ],
      bestFor: 'Luxury homes, entertaining, tech enthusiasts',
      estimatedConsumption: '420 units/year'
    },

    // ---------- MINI FRIDGE - 3 Models ----------
    {
      id: 'gree-mini-basic',
      name: 'Gree Mini Basic',
      type: 'Mini Fridge',
      capacity: '75L',
      price: 'PKR 22,000 - 27,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        'Energy Saving',
        'Quiet Operation',
        'Small Freezer',
        'Adjustable Thermostat',
        'Reversible Door',
        'Wire Shelf'
      ],
      specifications: {
        'Capacity': '75 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '1 Star',
        'Freezer': 'Ice Cube Tray',
        'Shelves': '1 Wire + 1 Glass',
        'Door Storage': '2 Can racks',
        'Noise Level': '40 dB',
        'Dimensions': '82 x 42 x 47 cm',
        'Weight': '22 kg',
        'Color': 'White',
        'Power': '70W'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for dorm room. Keep 3 inches ventilation. Set to medium. Freezer makes ice cubes. Defrost every 2-3 months.',
      maintenance: 'Monthly: Clean interior. Check door seal. Every 3 months: Clean back coils. Defrost when needed.',
      installationTips: 'Place on stable surface. Keep away from heat. Level using legs. Regular socket.',
      energySavingTips: 'Keep in cool area. Don\'t open frequently. Set to medium. Defrost regularly.',
      troubleshooting: [
        'Not cooling: Check power',
        'Too noisy: Check if level',
        'Water inside: Defrost needed',
        'Door not closing: Check items'
      ],
      bestFor: 'Students, dorm rooms, small offices',
      estimatedConsumption: '85 units/year'
    },
    {
      id: 'gree-mini-office',
      name: 'Gree Mini Office',
      type: 'Mini Fridge',
      capacity: '100L',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Lockable Door',
        'Adjustable Shelves',
        'Low Noise',
        'Bottle Rack',
        'Interior Light',
        'Can Dispenser'
      ],
      specifications: {
        'Capacity': '100 Liters',
        'Type': 'Mini Fridge',
        'Energy Rating': '2 Star',
        'Lock': 'Yes with 2 keys',
        'Shelves': '2 Glass + Can Rack',
        'Freezer': 'Ice Tray',
        'Door Storage': '3 compartments',
        'Noise Level': '36 dB',
        'Dimensions': '86 x 46 x 50 cm',
        'Weight': '25 kg',
        'Color': 'Black',
        'Power': '80W'
      },
      warranty: '1 year warranty',
      usageGuide: 'Office use: Lock for personal items. Can dispenser: Load from top. Bottle rack: Holds 1.5L bottles. Quiet operation for work environment.',
      maintenance: 'Monthly: Clean with damp cloth. Check lock. Every 6 months: Clean back coils. Defrost if ice builds.',
      installationTips: 'Place under desk or break room. Level carefully. Keep away from direct sun. Regular outlet.',
      energySavingTips: 'Use only during work hours. Keep door closed. Set to low at night. Defrost regularly.',
      troubleshooting: [
        'Lock stuck: Use graphite powder',
        'Not cooling: Check setting',
        'Can dispenser jammed: Check loading',
        'Light not working: Replace bulb'
      ],
      bestFor: 'Office break rooms, teachers, staff rooms',
      estimatedConsumption: '110 units/year'
    },
    {
      id: 'gree-mini-bar',
      name: 'Gree Mini Bar',
      type: 'Mini Fridge',
      capacity: '65L',
      price: 'PKR 19,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Glass Door Design',
        'LED Interior Light',
        'Chrome Wire Shelves',
        'Bottle Rack',
        'Compressor Cooling',
        'Silent Operation',
        'Compact Size'
      ],
      specifications: {
        'Capacity': '65 Liters',
        'Type': 'Mini Bar Fridge',
        'Cooling': 'Compressor',
        'Door': 'Tempered Glass',
        'Shelves': 'Chrome Wire (2)',
        'Freezer': 'Small ice compartment',
        'Noise Level': '38 dB',
        'Dimensions': '72 x 40 x 45 cm',
        'Weight': '20 kg',
        'Color': 'Black/Chrome',
        'Power': '75W'
      },
      warranty: '6 months warranty',
      usageGuide: 'Perfect for drinks and snacks. Glass door shows contents. LED light creates ambiance. Can freeze ice. Keeps drinks perfectly chilled.',
      maintenance: 'Monthly: Clean glass door. Check door seal. Keep ventilation clear. Defrost every 3 months.',
      installationTips: 'Place in living room or bar area. Level carefully. Keep upright. Regular socket.',
      energySavingTips: 'Pre-cool drinks before loading. Keep in cool room. Don\'t open frequently. Defrost regularly.',
      troubleshooting: [
        'Not cooling: Check compressor',
        'Light not working: Replace LED',
        'Ice buildup: Defrost needed',
        'Door not sealing: Clean gasket'
      ],
      bestFor: 'Home bars, living rooms, entertainment areas',
      estimatedConsumption: '80 units/year'
    }
  ]
} 
  ]
  },
 {
  id: 'stove',
  name: 'Stove',
  description: 'Gas and electric stoves for cooking',
  types: ['Gas Stove', 'Electric Stove', 'Induction Cooktop', 'Glass Top', 'Built-in Stove'],
  companies: [
    // ==================== DAWLANCE STOVE (15 Models) ====================
    {
      id: 'dawlance-stove',
      name: 'Dawlance',
      models: [
        // ---------- GAS STOVE - 3 Models ----------
        {
          id: 'dawlance-gas-basic',
          name: 'Dawlance Gas Stove Basic',
          type: 'Gas Stove',
          burners: '4 Burners',
          price: 'PKR 18,000 - 22,000',
          image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
          features: [
            '4 Burners (2 small, 2 medium)',
            'Manual Ignition',
            'Powder Coated Body',
            'Removable Burners',
            'Adjustable Legs',
            'Standard Gas Connection'
          ],
          specifications: {
            'Type': 'Gas Stove',
            'Burners': '4 (2 small, 2 medium)',
            'Ignition': 'Manual (Match/Lighter needed)',
            'Material': 'Mild Steel with Powder Coating',
            'Grates': 'Cast Iron',
            'Pan Supports': '4 individual',
            'Dimensions': '72 x 48 x 14 cm',
            'Weight': '18 kg',
            'Color': 'White',
            'Gas Type': 'LPG/Natural Gas',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty on body, 6 months on burners',
          usageGuide: 'Always light burner before turning gas knob. Use proper sized utensils. Keep flame blue for efficient cooking. Turn off gas when not in use.',
          maintenance: 'Weekly: Clean burners with brush. Monthly: Check gas connections. Every 3 months: Clean jets with pin.',
          installationTips: 'Professional installation recommended. Check for gas leaks with soap water. Ensure proper ventilation.',
          safetyTips: 'Never leave unattended. Keep flammable items away. Install gas detector. Teach family members emergency procedure.',
          troubleshooting: [
            'Flame yellow: Clean burner, check air mixture',
            'Burner not lighting: Check gas supply, clean igniter',
            'Uneven flame: Clean burner ports',
            'Gas smell: Check connections, call service'
          ],
          bestFor: 'Budget conscious families, basic cooking needs',
          estimatedGasConsumption: '0.5 kg/hour approx'
        },
        {
          id: 'dawlance-gas-deluxe',
          name: 'Dawlance Gas Stove Deluxe',
          type: 'Gas Stove',
          burners: '4 Burners',
          price: 'PKR 22,000 - 26,000',
          image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
          features: [
            '4 Burners with Auto Ignition',
            'Tempered Glass Top',
            'Stainless Steel Body',
            'Heavy Duty Cast Iron Grates',
            'Dishwasher Safe Parts',
            'Flame Failure Device',
            'Ergonomic Knobs'
          ],
          specifications: {
            'Type': 'Gas Stove',
            'Burners': '4 (2 triple ring, 2 double ring)',
            'Ignition': 'Auto Spark (Battery operated)',
            'Material': 'Stainless Steel with Glass',
            'Grates': 'Cast Iron (Heavy duty)',
            'Safety': 'Flame Failure Device',
            'Dimensions': '75 x 50 x 15 cm',
            'Weight': '22 kg',
            'Color': 'Silver/Black',
            'Gas Type': 'LPG/Natural Gas',
            'Warranty': '2 years'
          },
          warranty: '2 years comprehensive warranty',
          usageGuide: 'Auto ignition: Press and turn knob. Triple ring for high flame. Use flat bottom vessels. Clean spills immediately to prevent stains.',
          maintenance: 'Weekly: Clean glass top with soft cloth. Monthly: Check igniter batteries. Clean burner caps.',
          installationTips: 'Professional installation. Check gas pressure. Level properly. Ensure kitchen ventilation.',
          safetyTips: 'Flame failure device auto cuts gas if flame goes out. Keep children away. Never use without ventilation.',
          troubleshooting: [
            'Igniter not sparking: Change battery',
            'Flame uneven: Clean burner rings',
            'Knob stuck: Check for food debris',
            'Glass cracked: Stop use, call service'
          ],
          bestFor: 'Medium families, those wanting safety features',
          estimatedGasConsumption: '0.6 kg/hour approx'
        },
        {
          id: 'dawlance-gas-premium',
          name: 'Dawlance Gas Stove Premium',
          type: 'Gas Stove',
          burners: '5 Burners',
          price: 'PKR 28,000 - 34,000',
          image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
          features: [
            '5 Burners including Wok Burner',
            'Auto Ignition with LED Light',
            'Schott Ceran Glass Top',
            'Brass Burners',
            'Digital Timer',
            'Child Lock',
            'Removable Drip Trays'
          ],
          specifications: {
            'Type': 'Gas Stove',
            'Burners': '5 (1 wok, 2 triple, 2 double)',
            'Wok Burner': '5kW High Power',
            'Ignition': 'Auto with LED indicator',
            'Top Material': 'Schott Ceran Glass',
            'Burner Material': 'Brass',
            'Safety': 'Child Lock, Flame Failure',
            'Timer': 'Digital 99 minutes',
            'Dimensions': '80 x 52 x 16 cm',
            'Weight': '26 kg',
            'Color': 'Black Glass',
            'Warranty': '3 years'
          },
          warranty: '3 years comprehensive warranty',
          usageGuide: 'Wok burner: For stir frying and high heat. Digital timer: Set cooking time. Child lock: Activate to prevent accidental use. Use flat bottom wok for best results.',
          maintenance: 'Weekly: Clean with glass cleaner. Monthly: Check burner flame. Replace batteries yearly.',
          installationTips: 'Professional installation only. Requires 220V for timer. Level surface needed. Gas line check.',
          safetyTips: 'Child lock prevents kids from turning on. Glass stays hot after use. Keep away from curtains.',
          troubleshooting: [
            'Timer not working: Check power',
            'Wok burner low flame: Clean jet',
            'Glass stains: Use ceramic cleaner',
            'Igniter not working: Check battery'
          ],
          bestFor: 'Cooking enthusiasts, large families, wok users',
          estimatedGasConsumption: '0.8 kg/hour approx'
        },

        // ---------- ELECTRIC STOVE - 3 Models ----------
        {
          id: 'dawlance-electric-basic',
          name: 'Dawlance Electric Stove Basic',
          type: 'Electric Stove',
          burners: '4 Electric Coils',
          price: 'PKR 15,000 - 18,000',
          image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
          features: [
            '4 Electric Coils',
            'Simple Rotary Controls',
            'Indicator Lights',
            'Enamel Top',
            'Removable Drip Pans',
            'Budget Friendly',
            'Easy to Use'
          ],
          specifications: {
            'Type': 'Electric Stove',
            'Burners': '4 Electric Coils',
            'Power': '2000W total (500W each)',
            'Controls': 'Rotary Knobs',
            'Indicator': 'Power On Light',
            'Top Material': 'Enamel Coated Steel',
            'Drip Pans': 'Removable Aluminum',
            'Dimensions': '70 x 50 x 8 cm',
            'Weight': '20 kg',
            'Color': 'White',
            'Power Supply': '220V AC',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive warranty',
          usageGuide: 'Coils take 2-3 minutes to heat up. Turn off 5 minutes before done - residual heat cooks. Use flat bottom pans only. Match burner size to pan size.',
          maintenance: 'Weekly: Clean coils when cool. Check drip pans. Monthly: Check power cord. Replace coils if damaged.',
          installationTips: 'Dedicated 15A socket required. Keep away from water. Level surface. Professional electrician recommended.',
          safetyTips: 'Coils remain hot after turning off. Keep flammable items away. Don\'t use with wet hands.',
          troubleshooting: [
            'Coil not heating: Check power, replace coil',
            'Control knob broken: Replace knob',
            'Light not working: Replace indicator',
            'Stove tripping: Call electrician'
          ],
          bestFor: 'Areas without gas, rental properties, basic cooking',
          estimatedPowerConsumption: '2 units/hour'
        },
        {
          id: 'dawlance-electric-deluxe',
          name: 'Dawlance Electric Stove Deluxe',
          type: 'Electric Stove',
          burners: '4 Coils with Thermostat',
          price: 'PKR 20,000 - 24,000',
          image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
          features: [
            '4 Electric Coils with Thermostat',
            'Temperature Control',
            'Stainless Steel Body',
            'Oven Compatible',
            'Removable Control Knobs',
            'Hot Surface Indicator',
            'Even Heat Distribution'
          ],
          specifications: {
            'Type': 'Electric Stove',
            'Burners': '4 Coils with thermostat',
            'Power': '2200W total',
            'Temperature': '6 settings per burner',
            'Controls': 'Rotary with temp marks',
            'Hot Indicator': 'LED per burner',
            'Top Material': 'Stainless Steel',
            'Dimensions': '72 x 52 x 9 cm',
            'Weight': '22 kg',
            'Color': 'Stainless Steel',
            'Power Supply': '220V AC',
            'Warranty': '2 years'
          },
          warranty: '2 years comprehensive warranty',
          usageGuide: 'Temperature settings: Low (1-2) for simmer, Medium (3-4) for normal, High (5-6) for boiling. Preheat 3 minutes. Use correct pan size.',
          maintenance: 'Monthly: Clean stainless steel with polish. Check thermostat accuracy. Clean drip pans.',
          installationTips: 'Dedicated circuit needed. Level surface. Keep away from water source.',
          safetyTips: 'Hot surface indicator stays on until cool. Don\'t touch coils immediately after use.',
          troubleshooting: [
            'Thermostat not working: Call service',
            'Uneven heating: Check coil connection',
            'Stainless rust: Clean and polish',
            'Knob broken: Replace'
          ],
          bestFor: 'Those wanting temperature control, small families',
          estimatedPowerConsumption: '2.2 units/hour'
        },
        {
          id: 'dawlance-electric-premium',
          name: 'Dawlance Electric Stove Premium',
          type: 'Electric Stove',
          burners: '4 Hi-Light Radiant',
          price: 'PKR 28,000 - 34,000',
          image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
          features: [
            '4 Hi-Light Radiant Burners',
            'Digital Touch Controls',
            '9 Power Levels',
            'Timer Function',
            'Child Lock',
            'Auto Shut-off',
            'Residual Heat Indicator'
          ],
          specifications: {
            'Type': 'Electric Stove',
            'Burners': '4 Hi-Light Radiant',
            'Power': '2400W total',
            'Power Levels': '9 per burner',
            'Controls': 'Digital Touch',
            'Timer': '99 minutes with auto off',
            'Safety': 'Child Lock, Auto Shut-off',
            'Hot Indicator': 'Digital H',
            'Dimensions': '75 x 55 x 6 cm',
            'Weight': '18 kg',
            'Color': 'Black Glass',
            'Power Supply': '220V AC',
            'Warranty': '3 years'
          },
          warranty: '3 years comprehensive warranty',
          usageGuide: 'Touch controls: Lock to prevent changes. Timer: Set and forget. Power levels: 1-9. Booster function for quick boiling. Auto shut-off for safety.',
          maintenance: 'Monthly: Clean with glass cleaner. Check touch sensitivity. Keep control panel dry.',
          installationTips: 'Professional installation required. Dedicated 20A circuit. Level surface.',
          safetyTips: 'Child lock prevents accidental use. Auto shut-off after 2 hours. Glass remains hot.',
          troubleshooting: [
            'Touch not responding: Clean panel, restart',
            'Burner not heating: Check power',
            'Error code: Note and call service',
            'Timer not working: Reset'
          ],
          bestFor: 'Modern kitchens, safety conscious users, tech lovers',
          estimatedPowerConsumption: '2.5 units/hour'
        },

        // ---------- INDUCTION COOKTOP - 3 Models ----------
        {
          id: 'dawlance-induction-basic',
          name: 'Dawlance Induction Cooktop Basic',
          type: 'Induction Cooktop',
          burners: '1 Burner Portable',
          price: 'PKR 8,000 - 10,000',
          image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
          features: [
            'Single Burner Portable',
            'Touch Controls',
            '8 Power Levels',
            'Timer Function',
            'Auto Pan Detection',
            'Compact Design',
            'Budget Friendly'
          ],
          specifications: {
            'Type': 'Induction Cooktop',
            'Burners': '1',
            'Power': '2000W',
            'Power Levels': '8',
            'Timer': '3 hours',
            'Pan Detection': 'Automatic',
            'Controls': 'Touch',
            'Dimensions': '29 x 37 x 6 cm',
            'Weight': '2.5 kg',
            'Color': 'Black',
            'Power Supply': '220V AC',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive warranty',
          usageGuide: 'Use only induction compatible pans (magnetic). Place pan in center. Select power level. Timer auto shuts off. Pan removed = auto off.',
          maintenance: 'Weekly: Clean with damp cloth. Check cooling fan. Keep vents clear.',
          installationTips: 'Portable - just plug in. Keep on heat resistant surface. Allow ventilation.',
          safetyTips: 'Surface stays cool - only pan heats. Pan detection prevents overheating. Unplug when not in use.',
          troubleshooting: [
            'Not heating: Check pan compatibility',
            'Error E0: No pan detected',
            'Overheating: Check fan, let cool',
            'Touch not working: Clean panel'
          ],
          bestFor: 'Students, small kitchens, backup cooking',
          estimatedPowerConsumption: '1.5 units/hour'
        },
        {
          id: 'dawlance-induction-deluxe',
          name: 'Dawlance Induction Cooktop Deluxe',
          type: 'Induction Cooktop',
          burners: '2 Burners',
          price: 'PKR 18,000 - 22,000',
          image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
          features: [
            '2 Independent Burners',
            'Touch Controls',
            '10 Power Levels',
            'Boost Function',
            'Child Lock',
            'Digital Display',
            'Warming Function'
          ],
          specifications: {
            'Type': 'Induction Cooktop',
            'Burners': '2',
            'Power': '3500W total (2000W + 1500W)',
            'Power Levels': '10 per burner',
            'Boost': 'Yes (extra power)',
            'Timer': 'Per burner',
            'Controls': 'Touch with display',
            'Safety': 'Child Lock',
            'Dimensions': '65 x 38 x 6 cm',
            'Weight': '6 kg',
            'Color': 'Black',
            'Power Supply': '220V AC',
            'Warranty': '2 years'
          },
          warranty: '2 years comprehensive warranty',
          usageGuide: 'Boost function: For quick boiling. Warming: Keep food warm at 60°C. Use both burners simultaneously. Match pan size to burner.',
          maintenance: 'Monthly: Clean with induction cleaner. Check fan operation. Keep surface scratch-free.',
          installationTips: 'Dedicated circuit recommended. Level surface. Keep away from water.',
          safetyTips: 'Child lock prevents accidental use. Auto shut-off after 2 hours. Don\'t place metal objects on top.',
          troubleshooting: [
            'Boost not working: Check power',
            'Burner not detecting: Clean pan bottom',
            'Fan noisy: Clean vents',
            'Error code: Note and call service'
          ],
          bestFor: 'Small families, fast cooking needs',
          estimatedPowerConsumption: '2.5 units/hour'
        },
        {
          id: 'dawlance-induction-premium',
          name: 'Dawlance Induction Cooktop Premium',
          type: 'Induction Cooktop',
          burners: '4 Burners Built-in',
          price: 'PKR 35,000 - 42,000',
          image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
          features: [
            '4 Induction Burners',
            'Flex Zone (Combine 2 burners)',
            'Power Boost',
            'Timer per Burner',
            'Pause Function',
            'Recipe Assistant',
            'Black Ceramic Glass'
          ],
          specifications: {
            'Type': 'Induction Cooktop',
            'Burners': '4 (2 flex zones)',
            'Power': '7400W total',
            'Flex Zone': 'Combine for large pans',
            'Power Levels': '15',
            'Boost': '+50% power',
            'Timer': '99 minutes per zone',
            'Controls': 'Touch with display',
            'Dimensions': '78 x 52 x 5 cm',
            'Cutout Size': '75 x 49 cm',
            'Weight': '12 kg',
            'Color': 'Black Glass',
            'Warranty': '3 years'
          },
          warranty: '3 years comprehensive warranty',
          usageGuide: 'Flex zone: Use for large pans or griddles. Pause: Stop cooking temporarily. Recipe assistant: Pre-set programs. Boost for rapid boiling.',
          maintenance: 'Monthly: Clean with special cleaner. Check calibration. Update if smart.',
          installationTips: 'Professional installation only. Dedicated 40A circuit. Kitchen cabinet cutout needed.',
          safetyTips: 'Professional installation essential. Overheat protection. Child lock. Pan detection.',
          troubleshooting: [
            'Flex zone not working: Check settings',
            'Burner error: Call service',
            'Glass cracked: Stop use immediately',
            'Power issue: Check circuit breaker'
          ],
          bestFor: 'Modern kitchens, large families, cooking enthusiasts',
          estimatedPowerConsumption: '3.5 units/hour'
        },

        // ---------- GLASS TOP - 3 Models ----------
        {
          id: 'dawlance-glass-basic',
          name: 'Dawlance Glass Top Basic',
          type: 'Glass Top',
          burners: '4 Radiant',
          price: 'PKR 22,000 - 26,000',
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
          features: [
            '4 Radiant Burners',
            'Ceramic Glass Top',
            'Rotary Controls',
            'Residual Heat Indicator',
            'Black Glass Finish',
            'Easy Clean Surface',
            'Budget Friendly'
          ],
          specifications: {
            'Type': 'Glass Top Cooktop',
            'Burners': '4 Radiant',
            'Power': '6000W total',
            'Controls': 'Rotary Knobs',
            'Glass': 'Ceramic',
            'Hot Indicator': 'LED per burner',
            'Dimensions': '75 x 50 x 5 cm',
            'Weight': '10 kg',
            'Color': 'Black Glass',
            'Power Supply': '220V AC',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive warranty',
          usageGuide: 'Use flat bottom pans only. Glass heats up and cools slowly. Match burner size to pan. Clean spills immediately.',
          maintenance: 'Weekly: Clean with glass cleaner. Use scraper for burnt food. Avoid abrasive cleaners.',
          installationTips: 'Professional installation. Level surface. Dedicated circuit. Keep away from water.',
          safetyTips: 'Glass remains hot after use. Don\'t place hot pans on cool glass. Avoid impact.',
          troubleshooting: [
            'Not heating: Check power',
            'Glass stained: Use ceramic cleaner',
            'Knob broken: Replace',
            'Hot indicator not working: Call service'
          ],
          bestFor: 'Smooth surface lovers, easy cleaning',
          estimatedPowerConsumption: '2.8 units/hour'
        },
        {
          id: 'dawlance-glass-deluxe',
          name: 'Dawlance Glass Top Deluxe',
          type: 'Glass Top',
          burners: '4 Hi-Light',
          price: 'PKR 28,000 - 34,000',
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
          features: [
            '4 Hi-Light Burners',
            'Touch Controls',
            '9 Power Levels',
            'Timer Function',
            'Child Lock',
            'Auto Shut-off',
            'Schott Ceran Glass'
          ],
          specifications: {
            'Type': 'Glass Top Cooktop',
            'Burners': '4 Hi-Light',
            'Power': '6800W total',
            'Power Levels': '9',
            'Controls': 'Touch',
            'Timer': '99 minutes',
            'Glass': 'Schott Ceran',
            'Safety': 'Child Lock, Auto Off',
            'Dimensions': '77 x 52 x 5 cm',
            'Weight': '11 kg',
            'Color': 'Black Glass',
            'Warranty': '2 years'
          },
          warranty: '2 years comprehensive warranty',
          usageGuide: 'Hi-Light heats faster than standard. Touch controls: Lock for safety. Timer per burner. Auto shut-off after set time.',
          maintenance: 'Monthly: Clean with special cleaner. Check touch sensitivity. Keep dry.',
          installationTips: 'Professional installation. Dedicated circuit. Level surface.',
          safetyTips: 'Child lock prevents accidents. Auto shut-off safety. Glass remains hot.',
          troubleshooting: [
            'Touch not working: Clean panel',
            'Burner slow: Check power setting',
            'Error code: Note and call service',
            'Timer not working: Reset'
          ],
          bestFor: 'Modern kitchens, safety conscious users',
          estimatedPowerConsumption: '3 units/hour'
        },
        {
          id: 'dawlance-glass-premium',
          name: 'Dawlance Glass Top Premium',
          type: 'Glass Top',
          burners: '4 with Flex Zone',
          price: 'PKR 38,000 - 45,000',
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
          features: [
            '4 Burners with Flex Zone',
            'Digital Display',
            'Bridge Function',
            'Power Boost',
            'Stop & Go',
            'Warming Zone',
            'Premium Schott Glass'
          ],
          specifications: {
            'Type': 'Glass Top Cooktop',
            'Burners': '4 with Flex Zone',
            'Power': '7200W total',
            'Flex Zone': 'Combine 2 burners',
            'Bridge': 'Connect zones',
            'Boost': '+50% power',
            'Warming Zone': '60°C',
            'Controls': 'Digital Touch',
            'Dimensions': '80 x 55 x 5 cm',
            'Cutout Size': '77 x 52 cm',
            'Weight': '13 kg',
            'Color': 'Black Glass',
            'Warranty': '3 years'
          },
          warranty: '3 years comprehensive warranty',
          usageGuide: 'Bridge function: Connect burners for oval pans. Flex zone: For large cookware. Stop & Go: Pause cooking. Warming zone: Keep food warm.',
          maintenance: 'Monthly: Clean with premium cleaner. Check functions. Professional service yearly.',
          installationTips: 'Professional installation only. Dedicated 40A circuit. Kitchen cabinet cutout.',
          safetyTips: 'Multiple safety features. Professional installation essential. Don\'t modify.',
          troubleshooting: [
            'Bridge not working: Check settings',
            'Display error: Restart',
            'Zone not heating: Call service',
            'Glass damage: Stop use'
          ],
          bestFor: 'Premium kitchens, serious cooks',
          estimatedPowerConsumption: '3.3 units/hour'
        },

        // ---------- BUILT-IN STOVE - 3 Models ----------
        {
          id: 'dawlance-builtin-basic',
          name: 'Dawlance Built-in Hob Basic',
          type: 'Built-in Stove',
          burners: '4 Gas Burners',
          price: 'PKR 25,000 - 30,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            '4 Gas Burners',
            'Auto Ignition',
            'Stainless Steel',
            'Safety Valves',
            'Removable Pan Supports',
            'Compact Design',
            'Easy Installation'
          ],
          specifications: {
            'Type': 'Built-in Gas Hob',
            'Burners': '4',
            'Ignition': 'Auto Spark',
            'Material': 'Stainless Steel',
            'Pan Supports': 'Cast Iron',
            'Safety': 'Flame Failure Valves',
            'Dimensions': '60 x 52 x 5 cm',
            'Cutout Size': '56 x 48 cm',
            'Weight': '15 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years comprehensive warranty',
          usageGuide: 'Built into kitchen counter. Auto ignition. Safety valves cut gas if flame goes out. Professional installation required.',
          maintenance: 'Monthly: Clean burners. Check gas connections. Clean stainless steel.',
          installationTips: 'Professional installation only. Cabinet cutout needed. Gas line connection. Seal properly.',
          safetyTips: 'Flame failure device essential safety. Ensure ventilation. Professional installation.',
          troubleshooting: [
            'Igniter not working: Check battery',
            'Burner low flame: Clean jet',
            'Gas smell: Check connections',
            'Knob stiff: Clean mechanism'
          ],
          bestFor: 'Modern kitchens, seamless look',
          estimatedGasConsumption: '0.5 kg/hour approx'
        },
        {
          id: 'dawlance-builtin-deluxe',
          name: 'Dawlance Built-in Hob Deluxe',
          type: 'Built-in Stove',
          burners: '5 Gas Burners',
          price: 'PKR 32,000 - 38,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            '5 Gas Burners',
            'Wok Burner',
            'Auto Ignition',
            'Brass Burners',
            'Tempered Glass',
            'Safety Valves',
            'Ergonomic Knobs'
          ],
          specifications: {
            'Type': 'Built-in Gas Hob',
            'Burners': '5 (1 wok, 4 standard)',
            'Wok Burner': '4.5kW',
            'Ignition': 'Auto with battery',
            'Material': 'Tempered Glass + Steel',
            'Burners': 'Brass',
            'Safety': 'Flame Failure',
            'Dimensions': '75 x 52 x 5 cm',
            'Cutout Size': '71 x 48 cm',
            'Weight': '17 kg',
            'Color': 'Black Glass',
            'Warranty': '2 years'
          },
          warranty: '2 years comprehensive warranty',
          usageGuide: 'Wok burner for high heat. Brass burners last longer. Auto ignition. Use flat bottom wok.',
          maintenance: 'Monthly: Clean glass. Check burner flame. Clean brass burners gently.',
          installationTips: 'Professional installation. Proper cutout size. Gas line check. Seal edges.',
          safetyTips: 'Flame failure safety. Glass may get hot. Keep away from curtains.',
          troubleshooting: [
            'Wok burner low: Clean jet',
            'Glass stained: Use cleaner',
            'Igniter click but no flame: Check gas',
            'Knob hard to turn: Lubricate'
          ],
          bestFor: 'Modern kitchens, wok cooking enthusiasts',
          estimatedGasConsumption: '0.7 kg/hour approx'
        },
        {
          id: 'dawlance-builtin-premium',
          name: 'Dawlance Built-in Hob Premium',
          type: 'Built-in Stove',
          burners: '4 Induction + Gas Combo',
          price: 'PKR 55,000 - 65,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            '2 Gas + 2 Induction',
            'Flexible Cooking',
            'Touch Controls Induction',
            'Auto Ignition Gas',
            'Schott Glass',
            'Boost Function',
            'Premium Design'
          ],
          specifications: {
            'Type': 'Built-in Combo Hob',
            'Burners': '2 Gas + 2 Induction',
            'Gas Power': '4kW each',
            'Induction Power': '2000W each',
            'Induction Controls': 'Touch with display',
            'Gas Ignition': 'Auto',
            'Material': 'Schott Ceran Glass',
            'Dimensions': '80 x 55 x 5 cm',
            'Cutout Size': '76 x 51 cm',
            'Weight': '20 kg',
            'Color': 'Black Glass',
            'Power Supply': '220V AC',
            'Warranty': '3 years'
          },
          warranty: '3 years comprehensive warranty',
          usageGuide: 'Best of both worlds. Gas for traditional cooking. Induction for fast boiling. Use appropriate cookware for each side.',
          maintenance: 'Monthly: Clean glass. Check gas burners. Keep induction area clean.',
          installationTips: 'Professional installation only. Gas line + electric needed. Complex installation.',
          safetyTips: 'Professional installation essential. Don\'t mix cookware. Keep area dry.',
          troubleshooting: [
            'Induction not working: Check pan',
            'Gas not lighting: Check supply',
            'Glass cracked: Stop use',
            'Error: Call service'
          ],
          bestFor: 'Premium kitchens, those wanting both options',
          estimatedGasConsumption: '0.4 kg/hour + 1.5 units/hour approx'
        }
      ]
    },
     {
  id: 'orient-stove',
  name: 'Orient',
  models: [
    // ---------- GAS STOVE - 3 Models ----------
    {
      id: 'orient-gas-basic',
      name: 'Orient Gas Stove Basic',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 16,000 - 20,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners',
        'Manual Ignition',
        'Powder Coated Body',
        'Removable Burners',
        'Adjustable Legs',
        'Standard Gas Connection',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 (2 small, 2 medium)',
        'Ignition': 'Manual (Lighter needed)',
        'Material': 'Mild Steel with Powder Coating',
        'Grates': 'Cast Iron',
        'Pan Supports': '4 individual',
        'Dimensions': '72 x 48 x 14 cm',
        'Weight': '17 kg',
        'Color': 'White',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty on body, 6 months on burners',
      usageGuide: 'Always light burner before turning gas knob. Use proper sized utensils. Keep flame blue for efficient cooking. Turn off gas when not in use.',
      maintenance: 'Weekly: Clean burners with brush. Monthly: Check gas connections. Every 3 months: Clean jets with pin.',
      installationTips: 'Professional installation recommended. Check for gas leaks with soap water. Ensure proper ventilation.',
      safetyTips: 'Never leave unattended. Keep flammable items away. Install gas detector. Teach family members emergency procedure.',
      troubleshooting: [
        'Flame yellow: Clean burner, check air mixture',
        'Burner not lighting: Check gas supply',
        'Uneven flame: Clean burner ports',
        'Gas smell: Check connections, call service'
      ],
      bestFor: 'Budget conscious families, basic cooking needs',
      estimatedGasConsumption: '0.5 kg/hour approx'
    },
    {
      id: 'orient-gas-deluxe',
      name: 'Orient Gas Stove Deluxe',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 20,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners with Auto Ignition',
        'Tempered Glass Top',
        'Stainless Steel Body',
        'Heavy Duty Cast Iron Grates',
        'Flame Failure Device',
        'Dishwasher Safe Parts',
        'Ergonomic Knobs'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 (2 triple ring, 2 double ring)',
        'Ignition': 'Auto Spark (Battery operated)',
        'Material': 'Stainless Steel with Glass',
        'Grates': 'Cast Iron (Heavy duty)',
        'Safety': 'Flame Failure Device',
        'Dimensions': '75 x 50 x 15 cm',
        'Weight': '21 kg',
        'Color': 'Silver/Black',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Auto ignition: Press and turn knob. Triple ring for high flame. Use flat bottom vessels. Clean spills immediately to prevent stains.',
      maintenance: 'Weekly: Clean glass top with soft cloth. Monthly: Check igniter batteries. Clean burner caps.',
      installationTips: 'Professional installation. Check gas pressure. Level properly. Ensure kitchen ventilation.',
      safetyTips: 'Flame failure device auto cuts gas if flame goes out. Keep children away. Never use without ventilation.',
      troubleshooting: [
        'Igniter not sparking: Change battery',
        'Flame uneven: Clean burner rings',
        'Knob stuck: Check for food debris',
        'Glass cracked: Stop use, call service'
      ],
      bestFor: 'Medium families, those wanting safety features',
      estimatedGasConsumption: '0.6 kg/hour approx'
    },
    {
      id: 'orient-gas-premium',
      name: 'Orient Gas Stove Premium',
      type: 'Gas Stove',
      burners: '5 Burners',
      price: 'PKR 26,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '5 Burners including Wok Burner',
        'Auto Ignition',
        'Schott Ceran Glass Top',
        'Brass Burners',
        'Digital Timer',
        'Child Lock',
        'Removable Drip Trays'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '5 (1 wok, 2 triple, 2 double)',
        'Wok Burner': '4.8kW High Power',
        'Ignition': 'Auto with LED indicator',
        'Top Material': 'Schott Ceran Glass',
        'Burner Material': 'Brass',
        'Safety': 'Child Lock, Flame Failure',
        'Timer': 'Digital 99 minutes',
        'Dimensions': '80 x 52 x 16 cm',
        'Weight': '25 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Wok burner: For stir frying and high heat. Digital timer: Set cooking time. Child lock: Activate to prevent accidental use. Use flat bottom wok for best results.',
      maintenance: 'Weekly: Clean with glass cleaner. Monthly: Check burner flame. Replace batteries yearly.',
      installationTips: 'Professional installation only. Requires 220V for timer. Level surface needed. Gas line check.',
      safetyTips: 'Child lock prevents kids from turning on. Glass stays hot after use. Keep away from curtains.',
      troubleshooting: [
        'Timer not working: Check power',
        'Wok burner low flame: Clean jet',
        'Glass stains: Use ceramic cleaner',
        'Igniter not working: Check battery'
      ],
      bestFor: 'Cooking enthusiasts, large families, wok users',
      estimatedGasConsumption: '0.8 kg/hour approx'
    },

    // ---------- ELECTRIC STOVE - 3 Models ----------
    {
      id: 'orient-electric-basic',
      name: 'Orient Electric Stove Basic',
      type: 'Electric Stove',
      burners: '4 Electric Coils',
      price: 'PKR 14,000 - 17,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils',
        'Simple Rotary Controls',
        'Indicator Lights',
        'Enamel Top',
        'Removable Drip Pans',
        'Budget Friendly',
        'Easy to Use'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Electric Coils',
        'Power': '1800W total (450W each)',
        'Controls': 'Rotary Knobs',
        'Indicator': 'Power On Light',
        'Top Material': 'Enamel Coated Steel',
        'Drip Pans': 'Removable Aluminum',
        'Dimensions': '70 x 50 x 8 cm',
        'Weight': '19 kg',
        'Color': 'White',
        'Power Supply': '220V AC',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Coils take 2-3 minutes to heat up. Turn off 5 minutes before done - residual heat cooks. Use flat bottom pans only. Match burner size to pan size.',
      maintenance: 'Weekly: Clean coils when cool. Check drip pans. Monthly: Check power cord. Replace coils if damaged.',
      installationTips: 'Dedicated 15A socket required. Keep away from water. Level surface. Professional electrician recommended.',
      safetyTips: 'Coils remain hot after turning off. Keep flammable items away. Don\'t use with wet hands.',
      troubleshooting: [
        'Coil not heating: Check power, replace coil',
        'Control knob broken: Replace knob',
        'Light not working: Replace indicator',
        'Stove tripping: Call electrician'
      ],
      bestFor: 'Areas without gas, rental properties, basic cooking',
      estimatedPowerConsumption: '1.8 units/hour'
    },
    {
      id: 'orient-electric-deluxe',
      name: 'Orient Electric Stove Deluxe',
      type: 'Electric Stove',
      burners: '4 Coils with Thermostat',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils with Thermostat',
        'Temperature Control',
        'Stainless Steel Body',
        'Oven Compatible',
        'Removable Control Knobs',
        'Hot Surface Indicator',
        'Even Heat Distribution'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Coils with thermostat',
        'Power': '2000W total',
        'Temperature': '6 settings per burner',
        'Controls': 'Rotary with temp marks',
        'Hot Indicator': 'LED per burner',
        'Top Material': 'Stainless Steel',
        'Dimensions': '72 x 52 x 9 cm',
        'Weight': '21 kg',
        'Color': 'Stainless Steel',
        'Power Supply': '220V AC',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Temperature settings: Low (1-2) for simmer, Medium (3-4) for normal, High (5-6) for boiling. Preheat 3 minutes. Use correct pan size.',
      maintenance: 'Monthly: Clean stainless steel with polish. Check thermostat accuracy. Clean drip pans.',
      installationTips: 'Dedicated circuit needed. Level surface. Keep away from water source.',
      safetyTips: 'Hot surface indicator stays on until cool. Don\'t touch coils immediately after use.',
      troubleshooting: [
        'Thermostat not working: Call service',
        'Uneven heating: Check coil connection',
        'Stainless rust: Clean and polish',
        'Knob broken: Replace'
      ],
      bestFor: 'Those wanting temperature control, small families',
      estimatedPowerConsumption: '2.0 units/hour'
    },
    {
      id: 'orient-electric-premium',
      name: 'Orient Electric Stove Premium',
      type: 'Electric Stove',
      burners: '4 Hi-Light Radiant',
      price: 'PKR 27,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Radiant Burners',
        'Digital Touch Controls',
        '9 Power Levels',
        'Timer Function',
        'Child Lock',
        'Auto Shut-off',
        'Residual Heat Indicator'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Hi-Light Radiant',
        'Power': '2200W total',
        'Power Levels': '9 per burner',
        'Controls': 'Digital Touch',
        'Timer': '99 minutes with auto off',
        'Safety': 'Child Lock, Auto Shut-off',
        'Hot Indicator': 'Digital H',
        'Dimensions': '75 x 55 x 6 cm',
        'Weight': '17 kg',
        'Color': 'Black Glass',
        'Power Supply': '220V AC',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Touch controls: Lock to prevent changes. Timer: Set and forget. Power levels: 1-9. Booster function for quick boiling. Auto shut-off for safety.',
      maintenance: 'Monthly: Clean with glass cleaner. Check touch sensitivity. Keep control panel dry.',
      installationTips: 'Professional installation required. Dedicated 20A circuit. Level surface.',
      safetyTips: 'Child lock prevents accidental use. Auto shut-off after 2 hours. Glass remains hot.',
      troubleshooting: [
        'Touch not responding: Clean panel, restart',
        'Burner not heating: Check power',
        'Error code: Note and call service',
        'Timer not working: Reset'
      ],
      bestFor: 'Modern kitchens, safety conscious users, tech lovers',
      estimatedPowerConsumption: '2.3 units/hour'
    },

    // ---------- INDUCTION COOKTOP - 3 Models ----------
    {
      id: 'orient-induction-basic',
      name: 'Orient Induction Cooktop Basic',
      type: 'Induction Cooktop',
      burners: '1 Burner Portable',
      price: 'PKR 7,000 - 9,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Single Burner Portable',
        'Touch Controls',
        '8 Power Levels',
        'Timer Function',
        'Auto Pan Detection',
        'Compact Design',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '1',
        'Power': '1800W',
        'Power Levels': '8',
        'Timer': '3 hours',
        'Pan Detection': 'Automatic',
        'Controls': 'Touch',
        'Dimensions': '28 x 36 x 6 cm',
        'Weight': '2.3 kg',
        'Color': 'Black',
        'Power Supply': '220V AC',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Use only induction compatible pans (magnetic). Place pan in center. Select power level. Timer auto shuts off. Pan removed = auto off.',
      maintenance: 'Weekly: Clean with damp cloth. Check cooling fan. Keep vents clear.',
      installationTips: 'Portable - just plug in. Keep on heat resistant surface. Allow ventilation.',
      safetyTips: 'Surface stays cool - only pan heats. Pan detection prevents overheating. Unplug when not in use.',
      troubleshooting: [
        'Not heating: Check pan compatibility',
        'Error E0: No pan detected',
        'Overheating: Check fan, let cool',
        'Touch not working: Clean panel'
      ],
      bestFor: 'Students, small kitchens, backup cooking',
      estimatedPowerConsumption: '1.4 units/hour'
    },
    {
      id: 'orient-induction-deluxe',
      name: 'Orient Induction Cooktop Deluxe',
      type: 'Induction Cooktop',
      burners: '2 Burners',
      price: 'PKR 17,000 - 21,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '2 Independent Burners',
        'Touch Controls',
        '10 Power Levels',
        'Boost Function',
        'Child Lock',
        'Digital Display',
        'Warming Function'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '2',
        'Power': '3200W total (1800W + 1400W)',
        'Power Levels': '10 per burner',
        'Boost': 'Yes (extra power)',
        'Timer': 'Per burner',
        'Controls': 'Touch with display',
        'Safety': 'Child Lock',
        'Dimensions': '64 x 37 x 6 cm',
        'Weight': '5.5 kg',
        'Color': 'Black',
        'Power Supply': '220V AC',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Boost function: For quick boiling. Warming: Keep food warm at 60°C. Use both burners simultaneously. Match pan size to burner.',
      maintenance: 'Monthly: Clean with induction cleaner. Check fan operation. Keep surface scratch-free.',
      installationTips: 'Dedicated circuit recommended. Level surface. Keep away from water.',
      safetyTips: 'Child lock prevents accidental use. Auto shut-off after 2 hours. Don\'t place metal objects on top.',
      troubleshooting: [
        'Boost not working: Check power',
        'Burner not detecting: Clean pan bottom',
        'Fan noisy: Clean vents',
        'Error code: Note and call service'
      ],
      bestFor: 'Small families, fast cooking needs',
      estimatedPowerConsumption: '2.3 units/hour'
    },
    {
      id: 'orient-induction-premium',
      name: 'Orient Induction Cooktop Premium',
      type: 'Induction Cooktop',
      burners: '4 Burners Built-in',
      price: 'PKR 34,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Induction Burners',
        'Flex Zone (Combine 2 burners)',
        'Power Boost',
        'Timer per Burner',
        'Pause Function',
        'Recipe Assistant',
        'Black Ceramic Glass'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '4 (2 flex zones)',
        'Power': '7000W total',
        'Flex Zone': 'Combine for large pans',
        'Power Levels': '15',
        'Boost': '+50% power',
        'Timer': '99 minutes per zone',
        'Controls': 'Touch with display',
        'Dimensions': '78 x 52 x 5 cm',
        'Cutout Size': '75 x 49 cm',
        'Weight': '11.5 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Flex zone: Use for large pans or griddles. Pause: Stop cooking temporarily. Recipe assistant: Pre-set programs. Boost for rapid boiling.',
      maintenance: 'Monthly: Clean with special cleaner. Check calibration. Update if smart.',
      installationTips: 'Professional installation only. Dedicated 40A circuit. Kitchen cabinet cutout needed.',
      safetyTips: 'Professional installation essential. Overheat protection. Child lock. Pan detection.',
      troubleshooting: [
        'Flex zone not working: Check settings',
        'Burner error: Call service',
        'Glass cracked: Stop use immediately',
        'Power issue: Check circuit breaker'
      ],
      bestFor: 'Modern kitchens, large families, cooking enthusiasts',
      estimatedPowerConsumption: '3.2 units/hour'
    },

    // ---------- GLASS TOP - 3 Models ----------
    {
      id: 'orient-glass-basic',
      name: 'Orient Glass Top Basic',
      type: 'Glass Top',
      burners: '4 Radiant',
      price: 'PKR 21,000 - 25,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Radiant Burners',
        'Ceramic Glass Top',
        'Rotary Controls',
        'Residual Heat Indicator',
        'Black Glass Finish',
        'Easy Clean Surface',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Glass Top Cooktop',
        'Burners': '4 Radiant',
        'Power': '5800W total',
        'Controls': 'Rotary Knobs',
        'Glass': 'Ceramic',
        'Hot Indicator': 'LED per burner',
        'Dimensions': '75 x 50 x 5 cm',
        'Weight': '9.5 kg',
        'Color': 'Black Glass',
        'Power Supply': '220V AC',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Use flat bottom pans only. Glass heats up and cools slowly. Match burner size to pan. Clean spills immediately.',
      maintenance: 'Weekly: Clean with glass cleaner. Use scraper for burnt food. Avoid abrasive cleaners.',
      installationTips: 'Professional installation. Level surface. Dedicated circuit. Keep away from water.',
      safetyTips: 'Glass remains hot after use. Don\'t place hot pans on cool glass. Avoid impact.',
      troubleshooting: [
        'Not heating: Check power',
        'Glass stained: Use ceramic cleaner',
        'Knob broken: Replace',
        'Hot indicator not working: Call service'
      ],
      bestFor: 'Smooth surface lovers, easy cleaning',
      estimatedPowerConsumption: '2.6 units/hour'
    },
    {
      id: 'orient-glass-deluxe',
      name: 'Orient Glass Top Deluxe',
      type: 'Glass Top',
      burners: '4 Hi-Light',
      price: 'PKR 27,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Burners',
        'Touch Controls',
        '9 Power Levels',
        'Timer Function',
        'Child Lock',
        'Auto Shut-off',
        'Schott Ceran Glass'
      ],
      specifications: {
        'Type': 'Glass Top Cooktop',
        'Burners': '4 Hi-Light',
        'Power': '6500W total',
        'Power Levels': '9',
        'Controls': 'Touch',
        'Timer': '99 minutes',
        'Glass': 'Schott Ceran',
        'Safety': 'Child Lock, Auto Off',
        'Dimensions': '77 x 52 x 5 cm',
        'Weight': '10.5 kg',
        'Color': 'Black Glass',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Hi-Light heats faster than standard. Touch controls: Lock for safety. Timer per burner. Auto shut-off after set time.',
      maintenance: 'Monthly: Clean with special cleaner. Check touch sensitivity. Keep dry.',
      installationTips: 'Professional installation. Dedicated circuit. Level surface.',
      safetyTips: 'Child lock prevents accidents. Auto shut-off safety. Glass remains hot.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Burner slow: Check power setting',
        'Error code: Note and call service',
        'Timer not working: Reset'
      ],
      bestFor: 'Modern kitchens, safety conscious users',
      estimatedPowerConsumption: '2.9 units/hour'
    },
    {
      id: 'orient-glass-premium',
      name: 'Orient Glass Top Premium',
      type: 'Glass Top',
      burners: '4 with Flex Zone',
      price: 'PKR 36,000 - 43,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Burners with Flex Zone',
        'Digital Display',
        'Bridge Function',
        'Power Boost',
        'Stop & Go',
        'Warming Zone',
        'Premium Schott Glass'
      ],
      specifications: {
        'Type': 'Glass Top Cooktop',
        'Burners': '4 with Flex Zone',
        'Power': '7000W total',
        'Flex Zone': 'Combine 2 burners',
        'Bridge': 'Connect zones',
        'Boost': '+50% power',
        'Warming Zone': '60°C',
        'Controls': 'Digital Touch',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout Size': '77 x 52 cm',
        'Weight': '12.5 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Bridge function: Connect burners for oval pans. Flex zone: For large cookware. Stop & Go: Pause cooking. Warming zone: Keep food warm.',
      maintenance: 'Monthly: Clean with premium cleaner. Check functions. Professional service yearly.',
      installationTips: 'Professional installation only. Dedicated 40A circuit. Kitchen cabinet cutout.',
      safetyTips: 'Multiple safety features. Professional installation essential. Don\'t modify.',
      troubleshooting: [
        'Bridge not working: Check settings',
        'Display error: Restart',
        'Zone not heating: Call service',
        'Glass damage: Stop use'
      ],
      bestFor: 'Premium kitchens, serious cooks',
      estimatedPowerConsumption: '3.1 units/hour'
    },

    // ---------- BUILT-IN STOVE - 3 Models ----------
    {
      id: 'orient-builtin-basic',
      name: 'Orient Built-in Hob Basic',
      type: 'Built-in Stove',
      burners: '4 Gas Burners',
      price: 'PKR 24,000 - 28,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '4 Gas Burners',
        'Auto Ignition',
        'Stainless Steel',
        'Safety Valves',
        'Removable Pan Supports',
        'Compact Design',
        'Easy Installation'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '4',
        'Ignition': 'Auto Spark',
        'Material': 'Stainless Steel',
        'Pan Supports': 'Cast Iron',
        'Safety': 'Flame Failure Valves',
        'Dimensions': '60 x 52 x 5 cm',
        'Cutout Size': '56 x 48 cm',
        'Weight': '14.5 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Built into kitchen counter. Auto ignition. Safety valves cut gas if flame goes out. Professional installation required.',
      maintenance: 'Monthly: Clean burners. Check gas connections. Clean stainless steel.',
      installationTips: 'Professional installation only. Cabinet cutout needed. Gas line connection. Seal properly.',
      safetyTips: 'Flame failure device essential safety. Ensure ventilation. Professional installation.',
      troubleshooting: [
        'Igniter not working: Check battery',
        'Burner low flame: Clean jet',
        'Gas smell: Check connections',
        'Knob stiff: Clean mechanism'
      ],
      bestFor: 'Modern kitchens, seamless look',
      estimatedGasConsumption: '0.5 kg/hour approx'
    },
    {
      id: 'orient-builtin-deluxe',
      name: 'Orient Built-in Hob Deluxe',
      type: 'Built-in Stove',
      burners: '5 Gas Burners',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '5 Gas Burners',
        'Wok Burner',
        'Auto Ignition',
        'Brass Burners',
        'Tempered Glass',
        'Safety Valves',
        'Ergonomic Knobs'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '5 (1 wok, 4 standard)',
        'Wok Burner': '4.3kW',
        'Ignition': 'Auto with battery',
        'Material': 'Tempered Glass + Steel',
        'Burners': 'Brass',
        'Safety': 'Flame Failure',
        'Dimensions': '75 x 52 x 5 cm',
        'Cutout Size': '71 x 48 cm',
        'Weight': '16.5 kg',
        'Color': 'Black Glass',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Wok burner for high heat. Brass burners last longer. Auto ignition. Use flat bottom wok.',
      maintenance: 'Monthly: Clean glass. Check burner flame. Clean brass burners gently.',
      installationTips: 'Professional installation. Proper cutout size. Gas line check. Seal edges.',
      safetyTips: 'Flame failure safety. Glass may get hot. Keep away from curtains.',
      troubleshooting: [
        'Wok burner low: Clean jet',
        'Glass stained: Use cleaner',
        'Igniter click but no flame: Check gas',
        'Knob hard to turn: Lubricate'
      ],
      bestFor: 'Modern kitchens, wok cooking enthusiasts',
      estimatedGasConsumption: '0.7 kg/hour approx'
    },
    {
      id: 'orient-builtin-premium',
      name: 'Orient Built-in Hob Premium',
      type: 'Built-in Stove',
      burners: '4 Induction + Gas Combo',
      price: 'PKR 52,000 - 60,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '2 Gas + 2 Induction',
        'Flexible Cooking',
        'Touch Controls Induction',
        'Auto Ignition Gas',
        'Schott Glass',
        'Boost Function',
        'Premium Design'
      ],
      specifications: {
        'Type': 'Built-in Combo Hob',
        'Burners': '2 Gas + 2 Induction',
        'Gas Power': '3.8kW each',
        'Induction Power': '1800W each',
        'Induction Controls': 'Touch with display',
        'Gas Ignition': 'Auto',
        'Material': 'Schott Ceran Glass',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout Size': '76 x 51 cm',
        'Weight': '19 kg',
        'Color': 'Black Glass',
        'Power Supply': '220V AC',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Best of both worlds. Gas for traditional cooking. Induction for fast boiling. Use appropriate cookware for each side.',
      maintenance: 'Monthly: Clean glass. Check gas burners. Keep induction area clean.',
      installationTips: 'Professional installation only. Gas line + electric needed. Complex installation.',
      safetyTips: 'Professional installation essential. Don\'t mix cookware. Keep area dry.',
      troubleshooting: [
        'Induction not working: Check pan',
        'Gas not lighting: Check supply',
        'Glass cracked: Stop use',
        'Error: Call service'
      ],
      bestFor: 'Premium kitchens, those wanting both options',
      estimatedGasConsumption: '0.4 kg/hour + 1.4 units/hour approx'
    }
  ]
},
     {
  id: 'pel-stove',
  name: 'PEL',
  models: [
    // ---------- GAS STOVE - 3 Models ----------
    {
      id: 'pel-gas-basic',
      name: 'PEL Gas Stove Basic',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 17,000 - 21,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners',
        'Manual Ignition',
        'Powder Coated Body',
        'Removable Burners',
        'Adjustable Legs',
        'Standard Gas Connection',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 (2 small, 2 medium)',
        'Ignition': 'Manual (Lighter needed)',
        'Material': 'Mild Steel with Powder Coating',
        'Grates': 'Cast Iron',
        'Pan Supports': '4 individual',
        'Dimensions': '72 x 48 x 14 cm',
        'Weight': '17 kg',
        'Color': 'White',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty on body, 6 months on burners',
      usageGuide: 'Always light burner before turning gas knob. Use proper sized utensils. Keep flame blue for efficient cooking. Turn off gas when not in use.',
      maintenance: 'Weekly: Clean burners with brush. Monthly: Check gas connections. Every 3 months: Clean jets with pin.',
      installationTips: 'Professional installation recommended. Check for gas leaks with soap water. Ensure proper ventilation.',
      safetyTips: 'Never leave unattended. Keep flammable items away. Install gas detector. Teach family members emergency procedure.',
      troubleshooting: [
        'Flame yellow: Clean burner, check air mixture',
        'Burner not lighting: Check gas supply',
        'Uneven flame: Clean burner ports',
        'Gas smell: Check connections, call service'
      ],
      bestFor: 'Budget conscious families, basic cooking needs',
      estimatedGasConsumption: '0.5 kg/hour approx'
    },
    {
      id: 'pel-gas-deluxe',
      name: 'PEL Gas Stove Deluxe',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 21,000 - 25,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners with Auto Ignition',
        'Tempered Glass Top',
        'Stainless Steel Body',
        'Heavy Duty Cast Iron Grates',
        'Flame Failure Device',
        'Dishwasher Safe Parts',
        'Ergonomic Knobs'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 (2 triple ring, 2 double ring)',
        'Ignition': 'Auto Spark (Battery operated)',
        'Material': 'Stainless Steel with Glass',
        'Grates': 'Cast Iron (Heavy duty)',
        'Safety': 'Flame Failure Device',
        'Dimensions': '75 x 50 x 15 cm',
        'Weight': '21 kg',
        'Color': 'Silver/Black',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Auto ignition: Press and turn knob. Triple ring for high flame. Use flat bottom vessels. Clean spills immediately to prevent stains.',
      maintenance: 'Weekly: Clean glass top with soft cloth. Monthly: Check igniter batteries. Clean burner caps.',
      installationTips: 'Professional installation. Check gas pressure. Level properly. Ensure kitchen ventilation.',
      safetyTips: 'Flame failure device auto cuts gas if flame goes out. Keep children away. Never use without ventilation.',
      troubleshooting: [
        'Igniter not sparking: Change battery',
        'Flame uneven: Clean burner rings',
        'Knob stuck: Check for food debris',
        'Glass cracked: Stop use, call service'
      ],
      bestFor: 'Medium families, those wanting safety features',
      estimatedGasConsumption: '0.6 kg/hour approx'
    },
    {
      id: 'pel-gas-premium',
      name: 'PEL Gas Stove Premium',
      type: 'Gas Stove',
      burners: '5 Burners',
      price: 'PKR 27,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '5 Burners including Wok Burner',
        'Auto Ignition',
        'Schott Ceran Glass Top',
        'Brass Burners',
        'Digital Timer',
        'Child Lock',
        'Removable Drip Trays'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '5 (1 wok, 2 triple, 2 double)',
        'Wok Burner': '5kW High Power',
        'Ignition': 'Auto with LED indicator',
        'Top Material': 'Schott Ceran Glass',
        'Burner Material': 'Brass',
        'Safety': 'Child Lock, Flame Failure',
        'Timer': 'Digital 99 minutes',
        'Dimensions': '80 x 52 x 16 cm',
        'Weight': '25 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Wok burner: For stir frying and high heat. Digital timer: Set cooking time. Child lock: Activate to prevent accidental use. Use flat bottom wok for best results.',
      maintenance: 'Weekly: Clean with glass cleaner. Monthly: Check burner flame. Replace batteries yearly.',
      installationTips: 'Professional installation only. Requires 220V for timer. Level surface needed. Gas line check.',
      safetyTips: 'Child lock prevents kids from turning on. Glass stays hot after use. Keep away from curtains.',
      troubleshooting: [
        'Timer not working: Check power',
        'Wok burner low flame: Clean jet',
        'Glass stains: Use ceramic cleaner',
        'Igniter not working: Check battery'
      ],
      bestFor: 'Cooking enthusiasts, large families, wok users',
      estimatedGasConsumption: '0.8 kg/hour approx'
    },

    // ---------- ELECTRIC STOVE - 3 Models ----------
    {
      id: 'pel-electric-basic',
      name: 'PEL Electric Stove Basic',
      type: 'Electric Stove',
      burners: '4 Electric Coils',
      price: 'PKR 15,000 - 18,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils',
        'Simple Rotary Controls',
        'Indicator Lights',
        'Enamel Top',
        'Removable Drip Pans',
        'Budget Friendly',
        'Easy to Use'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Electric Coils',
        'Power': '1900W total (475W each)',
        'Controls': 'Rotary Knobs',
        'Indicator': 'Power On Light',
        'Top Material': 'Enamel Coated Steel',
        'Drip Pans': 'Removable Aluminum',
        'Dimensions': '70 x 50 x 8 cm',
        'Weight': '19 kg',
        'Color': 'White',
        'Power Supply': '220V AC',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Coils take 2-3 minutes to heat up. Turn off 5 minutes before done - residual heat cooks. Use flat bottom pans only. Match burner size to pan size.',
      maintenance: 'Weekly: Clean coils when cool. Check drip pans. Monthly: Check power cord. Replace coils if damaged.',
      installationTips: 'Dedicated 15A socket required. Keep away from water. Level surface. Professional electrician recommended.',
      safetyTips: 'Coils remain hot after turning off. Keep flammable items away. Don\'t use with wet hands.',
      troubleshooting: [
        'Coil not heating: Check power, replace coil',
        'Control knob broken: Replace knob',
        'Light not working: Replace indicator',
        'Stove tripping: Call electrician'
      ],
      bestFor: 'Areas without gas, rental properties, basic cooking',
      estimatedPowerConsumption: '1.9 units/hour'
    },
    {
      id: 'pel-electric-deluxe',
      name: 'PEL Electric Stove Deluxe',
      type: 'Electric Stove',
      burners: '4 Coils with Thermostat',
      price: 'PKR 20,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils with Thermostat',
        'Temperature Control',
        'Stainless Steel Body',
        'Oven Compatible',
        'Removable Control Knobs',
        'Hot Surface Indicator',
        'Even Heat Distribution'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Coils with thermostat',
        'Power': '2100W total',
        'Temperature': '6 settings per burner',
        'Controls': 'Rotary with temp marks',
        'Hot Indicator': 'LED per burner',
        'Top Material': 'Stainless Steel',
        'Dimensions': '72 x 52 x 9 cm',
        'Weight': '21 kg',
        'Color': 'Stainless Steel',
        'Power Supply': '220V AC',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Temperature settings: Low (1-2) for simmer, Medium (3-4) for normal, High (5-6) for boiling. Preheat 3 minutes. Use correct pan size.',
      maintenance: 'Monthly: Clean stainless steel with polish. Check thermostat accuracy. Clean drip pans.',
      installationTips: 'Dedicated circuit needed. Level surface. Keep away from water source.',
      safetyTips: 'Hot surface indicator stays on until cool. Don\'t touch coils immediately after use.',
      troubleshooting: [
        'Thermostat not working: Call service',
        'Uneven heating: Check coil connection',
        'Stainless rust: Clean and polish',
        'Knob broken: Replace'
      ],
      bestFor: 'Those wanting temperature control, small families',
      estimatedPowerConsumption: '2.1 units/hour'
    },
    {
      id: 'pel-electric-premium',
      name: 'PEL Electric Stove Premium',
      type: 'Electric Stove',
      burners: '4 Hi-Light Radiant',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Radiant Burners',
        'Digital Touch Controls',
        '9 Power Levels',
        'Timer Function',
        'Child Lock',
        'Auto Shut-off',
        'Residual Heat Indicator'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Hi-Light Radiant',
        'Power': '2300W total',
        'Power Levels': '9 per burner',
        'Controls': 'Digital Touch',
        'Timer': '99 minutes with auto off',
        'Safety': 'Child Lock, Auto Shut-off',
        'Hot Indicator': 'Digital H',
        'Dimensions': '75 x 55 x 6 cm',
        'Weight': '17 kg',
        'Color': 'Black Glass',
        'Power Supply': '220V AC',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Touch controls: Lock to prevent changes. Timer: Set and forget. Power levels: 1-9. Booster function for quick boiling. Auto shut-off for safety.',
      maintenance: 'Monthly: Clean with glass cleaner. Check touch sensitivity. Keep control panel dry.',
      installationTips: 'Professional installation required. Dedicated 20A circuit. Level surface.',
      safetyTips: 'Child lock prevents accidental use. Auto shut-off after 2 hours. Glass remains hot.',
      troubleshooting: [
        'Touch not responding: Clean panel, restart',
        'Burner not heating: Check power',
        'Error code: Note and call service',
        'Timer not working: Reset'
      ],
      bestFor: 'Modern kitchens, safety conscious users, tech lovers',
      estimatedPowerConsumption: '2.4 units/hour'
    },

    // ---------- INDUCTION COOKTOP - 3 Models ----------
    {
      id: 'pel-induction',
      name: 'PEL Induction Cooktop Pro',
      type: 'Induction Cooktop',
      burners: '4 Burners',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Digital Touch Controls',
        'Timer Function',
        'Child Lock',
        'Energy Efficient',
        'Multiple Power Levels',
        'Boost Function',
        'Auto Pan Detection'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '4',
        'Power': '7200W total',
        'Power Levels': '15',
        'Boost': '+50% power',
        'Timer': '99 minutes per zone',
        'Controls': 'Digital Touch',
        'Safety': 'Child Lock, Auto Shut-off, Pan Detection',
        'Dimensions': '78 x 52 x 6 cm',
        'Cutout Size': '75 x 49 cm',
        'Weight': '12 kg',
        'Color': 'Black',
        'Power Supply': '220V AC',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Use only induction-compatible cookware. Start with low power. Boost function for rapid boiling. Timer per burner. Child lock for safety.',
      maintenance: 'Monthly: Clean with damp cloth. Do not use abrasive cleaners. Check cooling fan.',
      installationTips: 'Professional installation required. Dedicated 40A circuit. Kitchen cabinet cutout needed.',
      safetyTips: 'Magnetic cookware only. Keep magnetic cards away. Auto shut-off safety.',
      troubleshooting: [
        'Not heating: Check pan compatibility',
        'Error code: Note and call service',
        'Fan noisy: Clean vents',
        'Touch not working: Clean panel'
      ],
      bestFor: 'Modern kitchens, energy conscious users',
      estimatedPowerConsumption: '3.2 units/hour'
    },
    {
      id: 'pel-induction-deluxe',
      name: 'PEL Induction Cooktop Deluxe',
      type: 'Induction Cooktop',
      burners: '2 Burners',
      price: 'PKR 18,000 - 22,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '2 Independent Burners',
        'Touch Controls',
        '10 Power Levels',
        'Boost Function',
        'Child Lock',
        'Digital Display',
        'Warming Function'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '2',
        'Power': '3400W total (2000W + 1400W)',
        'Power Levels': '10 per burner',
        'Boost': 'Yes',
        'Timer': 'Per burner',
        'Controls': 'Touch with display',
        'Safety': 'Child Lock',
        'Dimensions': '65 x 38 x 6 cm',
        'Weight': '5.8 kg',
        'Color': 'Black',
        'Power Supply': '220V AC',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Boost for quick boiling. Warming function at 60°C. Use both burners. Match pan size.',
      maintenance: 'Monthly: Clean with induction cleaner. Check fan.',
      installationTips: 'Dedicated circuit recommended. Level surface.',
      safetyTips: 'Child lock safety. Auto shut-off.',
      troubleshooting: [
        'Boost not working: Check power',
        'Not detecting pan: Clean pan bottom',
        'Error: Call service'
      ],
      bestFor: 'Small families, fast cooking',
      estimatedPowerConsumption: '2.4 units/hour'
    },
    {
      id: 'pel-induction-basic',
      name: 'PEL Induction Cooktop Basic',
      type: 'Induction Cooktop',
      burners: '1 Burner Portable',
      price: 'PKR 8,000 - 10,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Single Burner Portable',
        'Touch Controls',
        '8 Power Levels',
        'Timer',
        'Pan Detection',
        'Compact',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '1',
        'Power': '1900W',
        'Power Levels': '8',
        'Timer': '3 hours',
        'Controls': 'Touch',
        'Dimensions': '29 x 37 x 6 cm',
        'Weight': '2.4 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Use induction pans. Pan must be centered.',
      maintenance: 'Weekly: Clean with damp cloth.',
      installationTips: 'Portable - just plug in.',
      safetyTips: 'Pan detection safety.',
      troubleshooting: [
        'Not heating: Check pan',
        'Error E0: No pan detected'
      ],
      bestFor: 'Students, backup cooking',
      estimatedPowerConsumption: '1.5 units/hour'
    },

    // ---------- GLASS TOP - 3 Models ----------
    {
      id: 'pel-glass-basic',
      name: 'PEL Glass Top Basic',
      type: 'Glass Top',
      burners: '4 Radiant',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Radiant Burners',
        'Ceramic Glass',
        'Rotary Controls',
        'Residual Heat Indicator',
        'Easy Clean',
        'Black Glass'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Radiant',
        'Power': '6000W',
        'Controls': 'Rotary',
        'Glass': 'Ceramic',
        'Dimensions': '75 x 50 x 5 cm',
        'Weight': '9.5 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Flat pans only. Clean spills immediately.',
      maintenance: 'Weekly: Glass cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Glass stays hot.',
      troubleshooting: [
        'Not heating: Check power',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Easy cleaning',
      estimatedPowerConsumption: '2.7 units/hour'
    },
    {
      id: 'pel-glass-deluxe',
      name: 'PEL Glass Top Deluxe',
      type: 'Glass Top',
      burners: '4 Hi-Light',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Burners',
        'Touch Controls',
        '9 Power Levels',
        'Timer',
        'Child Lock',
        'Schott Glass'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Hi-Light',
        'Power': '6800W',
        'Controls': 'Touch',
        'Glass': 'Schott Ceran',
        'Timer': '99 min',
        'Dimensions': '77 x 52 x 5 cm',
        'Weight': '10.5 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Hi-Light fast heating. Touch controls.',
      maintenance: 'Monthly: Special cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Child lock. Auto shut-off.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Modern kitchens',
      estimatedPowerConsumption: '3.0 units/hour'
    },
    {
      id: 'pel-glass-premium',
      name: 'PEL Glass Top Premium',
      type: 'Glass Top',
      burners: '4 with Flex Zone',
      price: 'PKR 37,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Flex Zone',
        'Bridge Function',
        'Power Boost',
        'Stop & Go',
        'Warming Zone',
        'Premium Glass'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 with Flex',
        'Power': '7200W',
        'Flex Zone': 'Combine burners',
        'Bridge': 'Connect zones',
        'Boost': '+50%',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout': '77 x 52 cm',
        'Weight': '12.5 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Bridge for oval pans. Flex for large.',
      maintenance: 'Monthly: Premium cleaner.',
      installationTips: 'Professional only.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Flex not working: Check settings',
        'Glass cracked: Stop use'
      ],
      bestFor: 'Premium kitchens',
      estimatedPowerConsumption: '3.2 units/hour'
    },

    // ---------- BUILT-IN STOVE - 3 Models ----------
    {
      id: 'pel-builtin-basic',
      name: 'PEL Built-in Hob Basic',
      type: 'Built-in Stove',
      burners: '4 Gas Burners',
      price: 'PKR 25,000 - 29,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '4 Gas Burners',
        'Auto Ignition',
        'Stainless Steel',
        'Safety Valves',
        'Removable Supports'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '4',
        'Ignition': 'Auto',
        'Material': 'Stainless Steel',
        'Safety': 'Flame Failure',
        'Dimensions': '60 x 52 x 5 cm',
        'Cutout': '56 x 48 cm',
        'Weight': '14.5 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built-in installation. Auto ignition.',
      maintenance: 'Monthly: Clean burners.',
      installationTips: 'Professional only.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Igniter not working: Check battery',
        'Gas smell: Check connections'
      ],
      bestFor: 'Modern kitchens',
      estimatedGasConsumption: '0.5 kg/hour'
    },
    {
      id: 'pel-builtin-deluxe',
      name: 'PEL Built-in Hob Deluxe',
      type: 'Built-in Stove',
      burners: '5 Gas Burners',
      price: 'PKR 31,000 - 37,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '5 Burners',
        'Wok Burner',
        'Auto Ignition',
        'Brass Burners',
        'Glass Top'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '5 with wok',
        'Wok': '4.5kW',
        'Material': 'Glass + Steel',
        'Burners': 'Brass',
        'Dimensions': '75 x 52 x 5 cm',
        'Cutout': '71 x 48 cm',
        'Weight': '16.5 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Wok burner for high heat.',
      maintenance: 'Monthly: Clean glass.',
      installationTips: 'Professional installation.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Wok burner low: Clean jet',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Wok cooking enthusiasts',
      estimatedGasConsumption: '0.7 kg/hour'
    },
    {
      id: 'pel-builtin-premium',
      name: 'PEL Built-in Hob Premium',
      type: 'Built-in Stove',
      burners: '2 Gas + 2 Induction Combo',
      price: 'PKR 53,000 - 62,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '2 Gas + 2 Induction',
        'Flexible Cooking',
        'Touch Controls',
        'Auto Ignition',
        'Schott Glass',
        'Boost Function'
      ],
      specifications: {
        'Type': 'Built-in Combo Hob',
        'Burners': '2 Gas + 2 Induction',
        'Gas Power': '4kW each',
        'Induction Power': '1800W each',
        'Induction Controls': 'Touch',
        'Gas Ignition': 'Auto',
        'Glass': 'Schott Ceran',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout': '76 x 51 cm',
        'Weight': '19 kg',
        'Power Supply': '220V AC',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Gas for traditional. Induction for fast. Use correct cookware.',
      maintenance: 'Monthly: Clean glass. Check gas burners.',
      installationTips: 'Professional installation only. Gas + electric needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Induction not working: Check pan',
        'Gas not lighting: Check supply',
        'Glass cracked: Stop use'
      ],
      bestFor: 'Premium kitchens, both options',
      estimatedGasConsumption: '0.4 kg/hour + 1.4 units/hour'
    }
  ]
},
      {
  id: 'haier-stove',
  name: 'Haier',
  models: [
    // ---------- GAS STOVE - 3 Models ----------
    {
      id: 'haier-gas-basic',
      name: 'Haier Gas Stove Basic',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners',
        'Auto Ignition',
        'Powder Coated Body',
        'Cast Iron Grates',
        'Removable Burners',
        'Adjustable Legs',
        'Standard Gas Connection'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 (2 small, 2 medium)',
        'Ignition': 'Auto Spark',
        'Material': 'Powder Coated Steel',
        'Grates': 'Cast Iron',
        'Pan Supports': '4 individual',
        'Dimensions': '72 x 48 x 14 cm',
        'Weight': '18 kg',
        'Color': 'White',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Auto ignition for easy lighting. Use proper sized utensils. Keep flame blue for efficient cooking. Turn off gas when not in use.',
      maintenance: 'Weekly: Clean burners with brush. Monthly: Check gas connections. Every 3 months: Clean jets.',
      installationTips: 'Professional installation recommended. Check for gas leaks with soap water. Ensure proper ventilation.',
      safetyTips: 'Never leave unattended. Keep flammable items away. Teach family members emergency procedure.',
      troubleshooting: [
        'Flame yellow: Clean burner',
        'Burner not lighting: Check gas supply',
        'Uneven flame: Clean burner ports',
        'Gas smell: Check connections'
      ],
      bestFor: 'Small families, basic cooking needs',
      estimatedGasConsumption: '0.5 kg/hour approx'
    },
    {
      id: 'haier-gas-deluxe',
      name: 'Haier Gas Stove Deluxe',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 24,000 - 28,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners with Auto Ignition',
        'Tempered Glass Top',
        'Stainless Steel Body',
        'Heavy Duty Cast Iron Grates',
        'Flame Failure Device',
        'Dishwasher Safe Parts',
        'Ergonomic Knobs'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 (2 triple ring, 2 double ring)',
        'Ignition': 'Auto Spark',
        'Material': 'Stainless Steel with Glass',
        'Grates': 'Cast Iron',
        'Safety': 'Flame Failure Device',
        'Dimensions': '75 x 50 x 15 cm',
        'Weight': '22 kg',
        'Color': 'Silver/Black',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Auto ignition: Press and turn. Triple ring for high flame. Clean spills immediately to prevent stains.',
      maintenance: 'Weekly: Clean glass top. Monthly: Check igniter batteries.',
      installationTips: 'Professional installation. Check gas pressure. Level properly.',
      safetyTips: 'Flame failure device auto cuts gas if flame goes out.',
      troubleshooting: [
        'Igniter not sparking: Change battery',
        'Flame uneven: Clean burner rings',
        'Glass cracked: Stop use'
      ],
      bestFor: 'Medium families, safety features',
      estimatedGasConsumption: '0.6 kg/hour approx'
    },
    {
      id: 'haier-gas-premium',
      name: 'Haier Gas Stove Premium',
      type: 'Gas Stove',
      burners: '5 Burners',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '5 Burners including Wok Burner',
        'Auto Ignition',
        'Schott Ceran Glass Top',
        'Brass Burners',
        'Digital Timer',
        'Child Lock',
        'Removable Drip Trays'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '5 (1 wok, 2 triple, 2 double)',
        'Wok Burner': '5kW',
        'Ignition': 'Auto',
        'Top Material': 'Schott Ceran Glass',
        'Burner Material': 'Brass',
        'Safety': 'Child Lock, Flame Failure',
        'Timer': 'Digital',
        'Dimensions': '80 x 52 x 16 cm',
        'Weight': '26 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Wok burner for high heat. Digital timer for cooking. Child lock for safety.',
      maintenance: 'Weekly: Clean with glass cleaner. Replace batteries yearly.',
      installationTips: 'Professional installation only. Requires 220V for timer.',
      safetyTips: 'Child lock prevents accidents. Glass stays hot.',
      troubleshooting: [
        'Timer not working: Check power',
        'Wok burner low flame: Clean jet',
        'Igniter not working: Check battery'
      ],
      bestFor: 'Cooking enthusiasts, large families',
      estimatedGasConsumption: '0.8 kg/hour approx'
    },

    // ---------- ELECTRIC STOVE - 3 Models ----------
    {
      id: 'haier-electric-basic',
      name: 'Haier Electric Stove Basic',
      type: 'Electric Stove',
      burners: '4 Electric Coils',
      price: 'PKR 16,000 - 20,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils',
        'Rotary Controls',
        'Indicator Lights',
        'Enamel Top',
        'Removable Drip Pans',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Electric Coils',
        'Power': '2000W total',
        'Controls': 'Rotary Knobs',
        'Indicator': 'Power On Light',
        'Top Material': 'Enamel Steel',
        'Dimensions': '70 x 50 x 8 cm',
        'Weight': '20 kg',
        'Color': 'White',
        'Power Supply': '220V AC',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Coils take 2-3 minutes to heat. Use flat bottom pans.',
      maintenance: 'Weekly: Clean coils when cool. Check drip pans.',
      installationTips: 'Dedicated 15A socket required. Professional electrician recommended.',
      safetyTips: 'Coils remain hot after use.',
      troubleshooting: [
        'Coil not heating: Check power',
        'Light not working: Replace indicator'
      ],
      bestFor: 'Areas without gas, basic cooking',
      estimatedPowerConsumption: '2.0 units/hour'
    },
    {
      id: 'haier-electric-deluxe',
      name: 'Haier Electric Stove Deluxe',
      type: 'Electric Stove',
      burners: '4 Coils with Thermostat',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils with Thermostat',
        'Temperature Control',
        'Stainless Steel Body',
        'Hot Surface Indicator',
        'Even Heat Distribution'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Coils with thermostat',
        'Power': '2200W total',
        'Temperature': '6 settings',
        'Controls': 'Rotary',
        'Top Material': 'Stainless Steel',
        'Dimensions': '72 x 52 x 9 cm',
        'Weight': '22 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Temperature settings for different cooking needs.',
      maintenance: 'Monthly: Clean stainless steel.',
      installationTips: 'Dedicated circuit needed.',
      safetyTips: 'Hot surface indicator.',
      troubleshooting: [
        'Thermostat not working: Call service',
        'Uneven heating: Check coil'
      ],
      bestFor: 'Temperature control needed',
      estimatedPowerConsumption: '2.2 units/hour'
    },
    {
      id: 'haier-electric-premium',
      name: 'Haier Electric Stove Premium',
      type: 'Electric Stove',
      burners: '4 Hi-Light Radiant',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Radiant Burners',
        'Digital Touch Controls',
        '9 Power Levels',
        'Timer',
        'Child Lock',
        'Auto Shut-off'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Hi-Light',
        'Power': '2400W total',
        'Power Levels': '9',
        'Controls': 'Digital Touch',
        'Timer': '99 minutes',
        'Safety': 'Child Lock',
        'Dimensions': '75 x 55 x 6 cm',
        'Weight': '18 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Touch controls. Power levels 1-9. Timer function.',
      maintenance: 'Monthly: Clean with glass cleaner.',
      installationTips: 'Professional installation. Dedicated 20A circuit.',
      safetyTips: 'Child lock safety. Auto shut-off.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error code: Call service'
      ],
      bestFor: 'Modern kitchens, tech lovers',
      estimatedPowerConsumption: '2.5 units/hour'
    },

    // ---------- INDUCTION COOKTOP - 3 Models ----------
    {
      id: 'haier-induction-basic',
      name: 'Haier Induction Cooktop Basic',
      type: 'Induction Cooktop',
      burners: '1 Burner Portable',
      price: 'PKR 9,000 - 11,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Single Burner Portable',
        'Touch Controls',
        '8 Power Levels',
        'Timer',
        'Auto Pan Detection',
        'Compact'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '1',
        'Power': '2000W',
        'Power Levels': '8',
        'Timer': '3 hours',
        'Controls': 'Touch',
        'Dimensions': '29 x 37 x 6 cm',
        'Weight': '2.5 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Use induction pans only. Pan must be centered.',
      maintenance: 'Weekly: Clean with damp cloth.',
      installationTips: 'Portable - just plug in.',
      safetyTips: 'Pan detection safety.',
      troubleshooting: [
        'Not heating: Check pan',
        'Error E0: No pan detected'
      ],
      bestFor: 'Students, backup cooking',
      estimatedPowerConsumption: '1.6 units/hour'
    },
    {
      id: 'haier-induction-deluxe',
      name: 'Haier Induction Cooktop Deluxe',
      type: 'Induction Cooktop',
      burners: '2 Burners',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '2 Burners',
        'Touch Controls',
        '10 Power Levels',
        'Boost Function',
        'Child Lock',
        'Digital Display'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '2',
        'Power': '3500W total',
        'Power Levels': '10',
        'Boost': 'Yes',
        'Timer': 'Per burner',
        'Controls': 'Touch',
        'Dimensions': '65 x 38 x 6 cm',
        'Weight': '6 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Boost for quick boiling. Use both burners.',
      maintenance: 'Monthly: Clean with induction cleaner.',
      installationTips: 'Dedicated circuit recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Boost not working: Check power',
        'Not detecting pan: Clean pan'
      ],
      bestFor: 'Small families',
      estimatedPowerConsumption: '2.5 units/hour'
    },
    {
      id: 'haier-induction-premium',
      name: 'Haier Induction Cooktop Premium',
      type: 'Induction Cooktop',
      burners: '4 Burners Built-in',
      price: 'PKR 36,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Induction Burners',
        'Flex Zone',
        'Power Boost',
        'Timer per Burner',
        'Pause Function',
        'Recipe Assistant'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '4',
        'Power': '7400W total',
        'Flex Zone': 'Combine 2 burners',
        'Power Levels': '15',
        'Boost': '+50%',
        'Controls': 'Touch',
        'Dimensions': '78 x 52 x 5 cm',
        'Cutout': '75 x 49 cm',
        'Weight': '12 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Flex zone for large pans. Boost for rapid boiling.',
      maintenance: 'Monthly: Clean with special cleaner.',
      installationTips: 'Professional installation only. Dedicated 40A circuit.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Flex zone not working: Check settings',
        'Burner error: Call service'
      ],
      bestFor: 'Modern kitchens, large families',
      estimatedPowerConsumption: '3.3 units/hour'
    },

    // ---------- GLASS TOP - 3 Models ----------
    {
      id: 'haier-glass-basic',
      name: 'Haier Glass Top Basic',
      type: 'Glass Top',
      burners: '4 Radiant',
      price: 'PKR 23,000 - 27,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Radiant Burners',
        'Ceramic Glass',
        'Rotary Controls',
        'Residual Heat Indicator',
        'Easy Clean'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Radiant',
        'Power': '6200W',
        'Controls': 'Rotary',
        'Glass': 'Ceramic',
        'Dimensions': '75 x 50 x 5 cm',
        'Weight': '10 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Flat pans only. Clean spills immediately.',
      maintenance: 'Weekly: Glass cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Glass stays hot.',
      troubleshooting: [
        'Not heating: Check power',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Easy cleaning',
      estimatedPowerConsumption: '2.8 units/hour'
    },
    {
      id: 'haier-glass-deluxe',
      name: 'Haier Glass Top Deluxe',
      type: 'Glass Top',
      burners: '4 Hi-Light',
      price: 'PKR 29,000 - 35,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Burners',
        'Touch Controls',
        '9 Power Levels',
        'Timer',
        'Child Lock',
        'Schott Glass'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Hi-Light',
        'Power': '7000W',
        'Controls': 'Touch',
        'Glass': 'Schott Ceran',
        'Timer': '99 min',
        'Dimensions': '77 x 52 x 5 cm',
        'Weight': '11 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Hi-Light fast heating. Touch controls.',
      maintenance: 'Monthly: Special cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Child lock. Auto shut-off.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Modern kitchens',
      estimatedPowerConsumption: '3.1 units/hour'
    },
    {
      id: 'haier-glass-premium',
      name: 'Haier Glass Top Premium',
      type: 'Glass Top',
      burners: '4 with Flex Zone',
      price: 'PKR 38,000 - 45,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Flex Zone',
        'Bridge Function',
        'Power Boost',
        'Stop & Go',
        'Warming Zone',
        'Premium Glass'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 with Flex',
        'Power': '7400W',
        'Flex Zone': 'Combine burners',
        'Bridge': 'Connect zones',
        'Boost': '+50%',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout': '77 x 52 cm',
        'Weight': '13 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Bridge for oval pans. Flex for large.',
      maintenance: 'Monthly: Premium cleaner.',
      installationTips: 'Professional only.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Flex not working: Check settings',
        'Glass cracked: Stop use'
      ],
      bestFor: 'Premium kitchens',
      estimatedPowerConsumption: '3.3 units/hour'
    },

    // ---------- BUILT-IN STOVE - 3 Models ----------
    {
      id: 'haier-builtin',
      name: 'Haier Built-in Hob',
      type: 'Built-in Stove',
      burners: '4 Gas Burners',
      price: 'PKR 35,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Stainless Steel',
        'Rapid Burners',
        'Easy Cleaning',
        'Modern Look',
        'Auto Ignition',
        'Safety Valves'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '4 (including wok burner)',
        'Material': 'Stainless Steel',
        'Ignition': 'Auto Spark',
        'Safety': 'Flame Failure',
        'Dimensions': '60 x 52 x 5 cm',
        'Cutout': '56 x 48 cm',
        'Weight': '15 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Professional installation required. Proper ventilation needed.',
      maintenance: 'Monthly: Clean burners. Check gas connections.',
      installationTips: 'Professional installation only. Cabinet cutout needed.',
      safetyTips: 'Flame failure safety. Professional installation.',
      troubleshooting: [
        'Igniter not working: Check battery',
        'Burner low flame: Clean jet'
      ],
      bestFor: 'Modern kitchens, seamless look',
      estimatedGasConsumption: '0.5 kg/hour'
    },
    {
      id: 'haier-builtin-deluxe',
      name: 'Haier Built-in Hob Deluxe',
      type: 'Built-in Stove',
      burners: '5 Gas Burners',
      price: 'PKR 42,000 - 48,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '5 Burners',
        'Wok Burner',
        'Auto Ignition',
        'Brass Burners',
        'Glass Top',
        'Safety Valves'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '5 with wok',
        'Wok': '4.8kW',
        'Material': 'Tempered Glass',
        'Burners': 'Brass',
        'Dimensions': '75 x 52 x 5 cm',
        'Cutout': '71 x 48 cm',
        'Weight': '17 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Wok burner for high heat. Professional installation.',
      maintenance: 'Monthly: Clean glass.',
      installationTips: 'Professional installation.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Wok burner low: Clean jet',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Wok cooking enthusiasts',
      estimatedGasConsumption: '0.7 kg/hour'
    },
    {
      id: 'haier-builtin-premium',
      name: 'Haier Built-in Hob Premium',
      type: 'Built-in Stove',
      burners: '2 Gas + 2 Induction Combo',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '2 Gas + 2 Induction',
        'Flexible Cooking',
        'Touch Controls',
        'Auto Ignition',
        'Schott Glass',
        'Boost Function'
      ],
      specifications: {
        'Type': 'Built-in Combo Hob',
        'Burners': '2 Gas + 2 Induction',
        'Gas Power': '4kW each',
        'Induction Power': '2000W each',
        'Induction Controls': 'Touch',
        'Glass': 'Schott Ceran',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout': '76 x 51 cm',
        'Weight': '20 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Gas for traditional. Induction for fast. Use correct cookware.',
      maintenance: 'Monthly: Clean glass. Check gas burners.',
      installationTips: 'Professional installation only. Gas + electric needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Induction not working: Check pan',
        'Gas not lighting: Check supply'
      ],
      bestFor: 'Premium kitchens, both options',
      estimatedGasConsumption: '0.4 kg/hour + 1.5 units/hour'
    }
  ]
},
    {
  id: 'waves-stove',
  name: 'Waves',
  models: [
    // ---------- GAS STOVE - 3 Models ----------
    {
      id: 'waves-gas-basic',
      name: 'Waves Gas Stove Basic',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 15,000 - 18,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners',
        'Manual Ignition',
        'Powder Coated Body',
        'Cast Iron Grates',
        'Removable Burners',
        'Adjustable Legs',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 (2 small, 2 medium)',
        'Ignition': 'Manual (Lighter needed)',
        'Material': 'Powder Coated Steel',
        'Grates': 'Cast Iron',
        'Pan Supports': '4 individual',
        'Dimensions': '72 x 48 x 14 cm',
        'Weight': '16 kg',
        'Color': 'White',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty on body, 6 months on burners',
      usageGuide: 'Always light burner before turning gas knob. Use proper sized utensils. Keep flame blue for efficient cooking. Turn off gas when not in use.',
      maintenance: 'Weekly: Clean burners with brush. Monthly: Check gas connections. Every 3 months: Clean jets with pin.',
      installationTips: 'Professional installation recommended. Check for gas leaks with soap water. Ensure proper ventilation.',
      safetyTips: 'Never leave unattended. Keep flammable items away. Install gas detector. Teach family members emergency procedure.',
      troubleshooting: [
        'Flame yellow: Clean burner, check air mixture',
        'Burner not lighting: Check gas supply',
        'Uneven flame: Clean burner ports',
        'Gas smell: Check connections, call service'
      ],
      bestFor: 'Budget conscious families, basic cooking needs',
      estimatedGasConsumption: '0.5 kg/hour approx'
    },
    {
      id: 'waves-gas-deluxe',
      name: 'Waves Gas Stove Deluxe',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners with Auto Ignition',
        'Tempered Glass Top',
        'Stainless Steel Body',
        'Heavy Duty Cast Iron Grates',
        'Flame Failure Device',
        'Dishwasher Safe Parts',
        'Ergonomic Knobs'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 (2 triple ring, 2 double ring)',
        'Ignition': 'Auto Spark (Battery operated)',
        'Material': 'Stainless Steel with Glass',
        'Grates': 'Cast Iron',
        'Safety': 'Flame Failure Device',
        'Dimensions': '75 x 50 x 15 cm',
        'Weight': '20 kg',
        'Color': 'Silver/Black',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Auto ignition: Press and turn knob. Triple ring for high flame. Use flat bottom vessels. Clean spills immediately to prevent stains.',
      maintenance: 'Weekly: Clean glass top with soft cloth. Monthly: Check igniter batteries. Clean burner caps.',
      installationTips: 'Professional installation. Check gas pressure. Level properly. Ensure kitchen ventilation.',
      safetyTips: 'Flame failure device auto cuts gas if flame goes out. Keep children away. Never use without ventilation.',
      troubleshooting: [
        'Igniter not sparking: Change battery',
        'Flame uneven: Clean burner rings',
        'Knob stuck: Check for food debris',
        'Glass cracked: Stop use, call service'
      ],
      bestFor: 'Medium families, those wanting safety features',
      estimatedGasConsumption: '0.6 kg/hour approx'
    },
    {
      id: 'waves-gas-premium',
      name: 'Waves Gas Stove Premium',
      type: 'Gas Stove',
      burners: '5 Burners',
      price: 'PKR 24,000 - 29,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '5 Burners including Wok Burner',
        'Auto Ignition',
        'Schott Ceran Glass Top',
        'Brass Burners',
        'Digital Timer',
        'Child Lock',
        'Removable Drip Trays'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '5 (1 wok, 2 triple, 2 double)',
        'Wok Burner': '4.5kW',
        'Ignition': 'Auto',
        'Top Material': 'Schott Ceran Glass',
        'Burner Material': 'Brass',
        'Safety': 'Child Lock, Flame Failure',
        'Timer': 'Digital 99 minutes',
        'Dimensions': '80 x 52 x 16 cm',
        'Weight': '24 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Wok burner: For stir frying and high heat. Digital timer: Set cooking time. Child lock: Activate to prevent accidental use. Use flat bottom wok for best results.',
      maintenance: 'Weekly: Clean with glass cleaner. Monthly: Check burner flame. Replace batteries yearly.',
      installationTips: 'Professional installation only. Requires 220V for timer. Level surface needed. Gas line check.',
      safetyTips: 'Child lock prevents kids from turning on. Glass stays hot after use. Keep away from curtains.',
      troubleshooting: [
        'Timer not working: Check power',
        'Wok burner low flame: Clean jet',
        'Glass stains: Use ceramic cleaner',
        'Igniter not working: Check battery'
      ],
      bestFor: 'Cooking enthusiasts, large families, wok users',
      estimatedGasConsumption: '0.8 kg/hour approx'
    },

    // ---------- ELECTRIC STOVE - 3 Models ----------
    {
      id: 'waves-electric-stove',
      name: 'Waves Electric Stove Basic',
      type: 'Electric Stove',
      burners: '4 Electric Coils',
      price: 'PKR 15,000 - 18,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils',
        'Simple Controls',
        'Budget Friendly',
        'Easy to Use',
        'Durable',
        'Indicator Lights',
        'Removable Drip Pans'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Electric Coils',
        'Power': '2000W total',
        'Controls': 'Rotary Knobs',
        'Indicator': 'Power On Light',
        'Top Material': 'Enamel Coated Steel',
        'Drip Pans': 'Removable',
        'Dimensions': '70 x 50 x 8 cm',
        'Weight': '20 kg',
        'Color': 'White',
        'Power Supply': '220V AC',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Coils take 2-3 minutes to heat up. Turn off 5 minutes before done - residual heat cooks. Use flat bottom pans only. Match burner size to pan size.',
      maintenance: 'Weekly: Clean coils when cool. Check drip pans. Monthly: Check power cord. Replace coils if damaged.',
      installationTips: 'Dedicated 15A socket required. Keep away from water. Level surface. Professional electrician recommended.',
      safetyTips: 'Coils remain hot after turning off. Keep flammable items away. Don\'t use with wet hands.',
      troubleshooting: [
        'Coil not heating: Check power, replace coil',
        'Control knob broken: Replace knob',
        'Light not working: Replace indicator',
        'Stove tripping: Call electrician'
      ],
      bestFor: 'Areas without gas, rental properties, basic cooking',
      estimatedPowerConsumption: '2.0 units/hour'
    },
    {
      id: 'waves-electric-deluxe',
      name: 'Waves Electric Stove Deluxe',
      type: 'Electric Stove',
      burners: '4 Coils with Thermostat',
      price: 'PKR 20,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils with Thermostat',
        'Temperature Control',
        'Stainless Steel Body',
        'Hot Surface Indicator',
        'Even Heat Distribution'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Coils with thermostat',
        'Power': '2100W total',
        'Temperature': '6 settings',
        'Controls': 'Rotary',
        'Top Material': 'Stainless Steel',
        'Dimensions': '72 x 52 x 9 cm',
        'Weight': '21 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Temperature settings: Low for simmer, Medium for normal, High for boiling.',
      maintenance: 'Monthly: Clean stainless steel.',
      installationTips: 'Dedicated circuit needed.',
      safetyTips: 'Hot surface indicator.',
      troubleshooting: [
        'Thermostat not working: Call service',
        'Uneven heating: Check coil'
      ],
      bestFor: 'Temperature control needed',
      estimatedPowerConsumption: '2.1 units/hour'
    },
    {
      id: 'waves-electric-premium',
      name: 'Waves Electric Stove Premium',
      type: 'Electric Stove',
      burners: '4 Hi-Light Radiant',
      price: 'PKR 26,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Radiant Burners',
        'Digital Touch Controls',
        '9 Power Levels',
        'Timer',
        'Child Lock',
        'Auto Shut-off'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Hi-Light',
        'Power': '2300W total',
        'Power Levels': '9',
        'Controls': 'Digital Touch',
        'Timer': '99 minutes',
        'Safety': 'Child Lock',
        'Dimensions': '75 x 55 x 6 cm',
        'Weight': '17 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Touch controls. Power levels 1-9. Timer function.',
      maintenance: 'Monthly: Clean with glass cleaner.',
      installationTips: 'Professional installation. Dedicated 20A circuit.',
      safetyTips: 'Child lock safety. Auto shut-off.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error code: Call service'
      ],
      bestFor: 'Modern kitchens, tech lovers',
      estimatedPowerConsumption: '2.3 units/hour'
    },

    // ---------- INDUCTION COOKTOP - 3 Models ----------
    {
      id: 'waves-induction-basic',
      name: 'Waves Induction Cooktop Basic',
      type: 'Induction Cooktop',
      burners: '1 Burner Portable',
      price: 'PKR 7,000 - 9,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Single Burner Portable',
        'Touch Controls',
        '8 Power Levels',
        'Timer',
        'Auto Pan Detection',
        'Compact'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '1',
        'Power': '1800W',
        'Power Levels': '8',
        'Timer': '3 hours',
        'Controls': 'Touch',
        'Dimensions': '28 x 36 x 6 cm',
        'Weight': '2.2 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Use induction pans only. Pan must be centered.',
      maintenance: 'Weekly: Clean with damp cloth.',
      installationTips: 'Portable - just plug in.',
      safetyTips: 'Pan detection safety.',
      troubleshooting: [
        'Not heating: Check pan',
        'Error E0: No pan detected'
      ],
      bestFor: 'Students, backup cooking',
      estimatedPowerConsumption: '1.4 units/hour'
    },
    {
      id: 'waves-induction-deluxe',
      name: 'Waves Induction Cooktop Deluxe',
      type: 'Induction Cooktop',
      burners: '2 Burners',
      price: 'PKR 16,000 - 20,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '2 Burners',
        'Touch Controls',
        '10 Power Levels',
        'Boost Function',
        'Child Lock',
        'Digital Display'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '2',
        'Power': '3200W total',
        'Power Levels': '10',
        'Boost': 'Yes',
        'Timer': 'Per burner',
        'Controls': 'Touch',
        'Dimensions': '64 x 37 x 6 cm',
        'Weight': '5.5 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Boost for quick boiling. Use both burners.',
      maintenance: 'Monthly: Clean with induction cleaner.',
      installationTips: 'Dedicated circuit recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Boost not working: Check power',
        'Not detecting pan: Clean pan'
      ],
      bestFor: 'Small families',
      estimatedPowerConsumption: '2.2 units/hour'
    },
    {
      id: 'waves-induction-premium',
      name: 'Waves Induction Cooktop Premium',
      type: 'Induction Cooktop',
      burners: '4 Burners',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Induction Burners',
        'Flex Zone',
        'Power Boost',
        'Timer per Burner',
        'Pause Function',
        'Recipe Assistant'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '4',
        'Power': '7000W total',
        'Flex Zone': 'Combine 2 burners',
        'Power Levels': '15',
        'Boost': '+50%',
        'Controls': 'Touch',
        'Dimensions': '78 x 52 x 5 cm',
        'Cutout': '75 x 49 cm',
        'Weight': '11.5 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Flex zone for large pans. Boost for rapid boiling.',
      maintenance: 'Monthly: Clean with special cleaner.',
      installationTips: 'Professional installation only. Dedicated 40A circuit.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Flex zone not working: Check settings',
        'Burner error: Call service'
      ],
      bestFor: 'Modern kitchens, large families',
      estimatedPowerConsumption: '3.0 units/hour'
    },

    // ---------- GLASS TOP - 3 Models ----------
    {
      id: 'waves-glass-basic',
      name: 'Waves Glass Top Basic',
      type: 'Glass Top',
      burners: '4 Radiant',
      price: 'PKR 20,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Radiant Burners',
        'Ceramic Glass',
        'Rotary Controls',
        'Residual Heat Indicator',
        'Easy Clean'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Radiant',
        'Power': '5800W',
        'Controls': 'Rotary',
        'Glass': 'Ceramic',
        'Dimensions': '75 x 50 x 5 cm',
        'Weight': '9.5 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Flat pans only. Clean spills immediately.',
      maintenance: 'Weekly: Glass cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Glass stays hot.',
      troubleshooting: [
        'Not heating: Check power',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Easy cleaning',
      estimatedPowerConsumption: '2.5 units/hour'
    },
    {
      id: 'waves-glass-deluxe',
      name: 'Waves Glass Top Deluxe',
      type: 'Glass Top',
      burners: '4 Hi-Light',
      price: 'PKR 26,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Burners',
        'Touch Controls',
        '9 Power Levels',
        'Timer',
        'Child Lock',
        'Schott Glass'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Hi-Light',
        'Power': '6500W',
        'Controls': 'Touch',
        'Glass': 'Schott Ceran',
        'Timer': '99 min',
        'Dimensions': '77 x 52 x 5 cm',
        'Weight': '10.5 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Hi-Light fast heating. Touch controls.',
      maintenance: 'Monthly: Special cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Child lock. Auto shut-off.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Modern kitchens',
      estimatedPowerConsumption: '2.8 units/hour'
    },
    {
      id: 'waves-glass-premium',
      name: 'Waves Glass Top Premium',
      type: 'Glass Top',
      burners: '4 with Flex Zone',
      price: 'PKR 34,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Flex Zone',
        'Bridge Function',
        'Power Boost',
        'Stop & Go',
        'Warming Zone',
        'Premium Glass'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 with Flex',
        'Power': '7000W',
        'Flex Zone': 'Combine burners',
        'Bridge': 'Connect zones',
        'Boost': '+50%',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout': '77 x 52 cm',
        'Weight': '12.5 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Bridge for oval pans. Flex for large.',
      maintenance: 'Monthly: Premium cleaner.',
      installationTips: 'Professional only.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Flex not working: Check settings',
        'Glass cracked: Stop use'
      ],
      bestFor: 'Premium kitchens',
      estimatedPowerConsumption: '3.0 units/hour'
    },

    // ---------- BUILT-IN STOVE - 3 Models ----------
    {
      id: 'waves-builtin-basic',
      name: 'Waves Built-in Hob Basic',
      type: 'Built-in Stove',
      burners: '4 Gas Burners',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '4 Gas Burners',
        'Auto Ignition',
        'Stainless Steel',
        'Safety Valves',
        'Removable Supports'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '4',
        'Ignition': 'Auto',
        'Material': 'Stainless Steel',
        'Safety': 'Flame Failure',
        'Dimensions': '60 x 52 x 5 cm',
        'Cutout': '56 x 48 cm',
        'Weight': '14 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built-in installation. Auto ignition.',
      maintenance: 'Monthly: Clean burners.',
      installationTips: 'Professional only.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Igniter not working: Check battery',
        'Gas smell: Check connections'
      ],
      bestFor: 'Modern kitchens',
      estimatedGasConsumption: '0.5 kg/hour'
    },
    {
      id: 'waves-builtin-deluxe',
      name: 'Waves Built-in Hob Deluxe',
      type: 'Built-in Stove',
      burners: '5 Gas Burners',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '5 Burners',
        'Wok Burner',
        'Auto Ignition',
        'Brass Burners',
        'Glass Top'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '5 with wok',
        'Wok': '4.2kW',
        'Material': 'Tempered Glass',
        'Burners': 'Brass',
        'Dimensions': '75 x 52 x 5 cm',
        'Cutout': '71 x 48 cm',
        'Weight': '16 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Wok burner for high heat.',
      maintenance: 'Monthly: Clean glass.',
      installationTips: 'Professional installation.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Wok burner low: Clean jet',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Wok cooking enthusiasts',
      estimatedGasConsumption: '0.7 kg/hour'
    },
    {
      id: 'waves-builtin-premium',
      name: 'Waves Built-in Hob Premium',
      type: 'Built-in Stove',
      burners: '2 Gas + 2 Induction Combo',
      price: 'PKR 48,000 - 55,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '2 Gas + 2 Induction',
        'Flexible Cooking',
        'Touch Controls',
        'Auto Ignition',
        'Schott Glass',
        'Boost Function'
      ],
      specifications: {
        'Type': 'Built-in Combo Hob',
        'Burners': '2 Gas + 2 Induction',
        'Gas Power': '3.8kW each',
        'Induction Power': '1800W each',
        'Induction Controls': 'Touch',
        'Glass': 'Schott Ceran',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout': '76 x 51 cm',
        'Weight': '19 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Gas for traditional. Induction for fast.',
      maintenance: 'Monthly: Clean glass. Check gas burners.',
      installationTips: 'Professional installation only. Gas + electric needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Induction not working: Check pan',
        'Gas not lighting: Check supply'
      ],
      bestFor: 'Premium kitchens, both options',
      estimatedGasConsumption: '0.4 kg/hour + 1.4 units/hour'
    }
  ]
},
    {
  id: 'pak-elektron-stove',
  name: 'Pak Elektron',
  models: [
    // ---------- GAS STOVE - 3 Models ----------
    {
      id: 'pak-elektron-gas-basic',
      name: 'Pak Elektron Gas Stove Basic',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 16,000 - 20,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners',
        'Auto Ignition',
        'Cast Iron Grates',
        'Easy to Clean',
        'Local Manufacturing',
        'Affordable',
        'Durable Body'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 standard burners',
        'Ignition': 'Piezo Ignition',
        'Material': 'Mild Steel',
        'Grates': 'Cast Iron',
        'Pan Supports': '4',
        'Dimensions': '72 x 48 x 14 cm',
        'Weight': '18 kg',
        'Color': 'Silver',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive warranty',
      usageGuide: 'Local brand, parts easily available. Good for basic cooking. Always light burner before turning gas knob.',
      maintenance: 'Weekly: Clean burners with brush. Monthly: Check gas connections. Replace igniter if needed.',
      installationTips: 'Simple installation. Standard gas connection. Check for leaks with soap water.',
      safetyTips: 'Never leave unattended. Keep flammable items away. Ensure proper ventilation.',
      troubleshooting: [
        'Flame yellow: Clean burner',
        'Burner not lighting: Check igniter',
        'Gas smell: Check connections'
      ],
      bestFor: 'Budget conscious families, local brand preference',
      estimatedGasConsumption: '0.5 kg/hour approx'
    },
    {
      id: 'pak-elektron-gas-deluxe',
      name: 'Pak Elektron Gas Stove Deluxe',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 20,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners with Auto Ignition',
        'Tempered Glass Top',
        'Stainless Steel Body',
        'Heavy Duty Cast Iron Grates',
        'Flame Failure Device',
        'Removable Burners'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 (2 high flame, 2 standard)',
        'Ignition': 'Auto Spark',
        'Material': 'Stainless Steel with Glass',
        'Grates': 'Cast Iron',
        'Safety': 'Flame Failure Device',
        'Dimensions': '75 x 50 x 15 cm',
        'Weight': '21 kg',
        'Color': 'Silver/Black',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '2 years'
      },
      warranty: '2 years comprehensive warranty',
      usageGuide: 'Auto ignition for easy lighting. High flame burners for fast cooking. Clean spills immediately.',
      maintenance: 'Weekly: Clean glass top. Monthly: Check igniter batteries.',
      installationTips: 'Professional installation recommended. Check gas pressure.',
      safetyTips: 'Flame failure device for safety. Keep children away.',
      troubleshooting: [
        'Igniter not sparking: Change battery',
        'Flame uneven: Clean burner rings',
        'Glass cracked: Stop use'
      ],
      bestFor: 'Medium families, safety features',
      estimatedGasConsumption: '0.6 kg/hour approx'
    },
    {
      id: 'pak-elektron-gas-premium',
      name: 'Pak Elektron Gas Stove Premium',
      type: 'Gas Stove',
      burners: '5 Burners',
      price: 'PKR 26,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '5 Burners including Wok Burner',
        'Auto Ignition',
        'Glass Top',
        'Brass Burners',
        'Child Lock',
        'Removable Drip Trays'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '5 (1 wok, 2 high, 2 standard)',
        'Wok Burner': '4.8kW',
        'Ignition': 'Auto',
        'Top Material': 'Tempered Glass',
        'Burner Material': 'Brass',
        'Safety': 'Child Lock, Flame Failure',
        'Dimensions': '80 x 52 x 16 cm',
        'Weight': '24 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Wok burner for stir frying. Child lock for safety.',
      maintenance: 'Weekly: Clean with glass cleaner. Replace batteries yearly.',
      installationTips: 'Professional installation only. Level surface needed.',
      safetyTips: 'Child lock prevents accidents. Glass stays hot.',
      troubleshooting: [
        'Wok burner low flame: Clean jet',
        'Glass stains: Use cleaner',
        'Igniter not working: Check battery'
      ],
      bestFor: 'Cooking enthusiasts, large families',
      estimatedGasConsumption: '0.8 kg/hour approx'
    },

    // ---------- ELECTRIC STOVE - 3 Models ----------
    {
      id: 'pak-elektron-electric-basic',
      name: 'Pak Elektron Electric Stove Basic',
      type: 'Electric Stove',
      burners: '4 Electric Coils',
      price: 'PKR 14,000 - 17,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils',
        'Rotary Controls',
        'Indicator Lights',
        'Enamel Top',
        'Budget Friendly',
        'Easy to Use'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Electric Coils',
        'Power': '1800W total',
        'Controls': 'Rotary Knobs',
        'Indicator': 'Power On Light',
        'Top Material': 'Enamel Steel',
        'Dimensions': '70 x 50 x 8 cm',
        'Weight': '19 kg',
        'Color': 'White',
        'Power Supply': '220V AC',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Coils take 2-3 minutes to heat. Use flat bottom pans.',
      maintenance: 'Weekly: Clean coils when cool. Check drip pans.',
      installationTips: 'Dedicated 15A socket required.',
      safetyTips: 'Coils remain hot after use.',
      troubleshooting: [
        'Coil not heating: Check power',
        'Light not working: Replace indicator'
      ],
      bestFor: 'Areas without gas, basic cooking',
      estimatedPowerConsumption: '1.8 units/hour'
    },
    {
      id: 'pak-elektron-electric-deluxe',
      name: 'Pak Elektron Electric Stove Deluxe',
      type: 'Electric Stove',
      burners: '4 Coils with Thermostat',
      price: 'PKR 18,000 - 22,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils with Thermostat',
        'Temperature Control',
        'Stainless Steel Body',
        'Hot Surface Indicator'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Coils with thermostat',
        'Power': '2000W total',
        'Temperature': '6 settings',
        'Controls': 'Rotary',
        'Top Material': 'Stainless Steel',
        'Dimensions': '72 x 52 x 9 cm',
        'Weight': '21 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Temperature settings for different cooking needs.',
      maintenance: 'Monthly: Clean stainless steel.',
      installationTips: 'Dedicated circuit needed.',
      safetyTips: 'Hot surface indicator.',
      troubleshooting: [
        'Thermostat not working: Call service',
        'Uneven heating: Check coil'
      ],
      bestFor: 'Temperature control needed',
      estimatedPowerConsumption: '2.0 units/hour'
    },
    {
      id: 'pak-elektron-electric-premium',
      name: 'Pak Elektron Electric Stove Premium',
      type: 'Electric Stove',
      burners: '4 Hi-Light Radiant',
      price: 'PKR 24,000 - 30,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Radiant Burners',
        'Digital Touch Controls',
        '9 Power Levels',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Hi-Light',
        'Power': '2200W total',
        'Power Levels': '9',
        'Controls': 'Digital Touch',
        'Timer': '99 minutes',
        'Safety': 'Child Lock',
        'Dimensions': '75 x 55 x 6 cm',
        'Weight': '17 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Touch controls. Power levels 1-9. Timer function.',
      maintenance: 'Monthly: Clean with glass cleaner.',
      installationTips: 'Professional installation. Dedicated 20A circuit.',
      safetyTips: 'Child lock safety. Auto shut-off.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error code: Call service'
      ],
      bestFor: 'Modern kitchens, tech lovers',
      estimatedPowerConsumption: '2.2 units/hour'
    },

    // ---------- INDUCTION COOKTOP - 3 Models ----------
    {
      id: 'pak-elektron-induction-basic',
      name: 'Pak Elektron Induction Cooktop Basic',
      type: 'Induction Cooktop',
      burners: '1 Burner Portable',
      price: 'PKR 6,500 - 8,500',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Single Burner Portable',
        'Touch Controls',
        '8 Power Levels',
        'Timer',
        'Auto Pan Detection',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '1',
        'Power': '1800W',
        'Power Levels': '8',
        'Timer': '3 hours',
        'Controls': 'Touch',
        'Dimensions': '28 x 36 x 6 cm',
        'Weight': '2.2 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Use induction pans only. Pan must be centered.',
      maintenance: 'Weekly: Clean with damp cloth.',
      installationTips: 'Portable - just plug in.',
      safetyTips: 'Pan detection safety.',
      troubleshooting: [
        'Not heating: Check pan',
        'Error E0: No pan detected'
      ],
      bestFor: 'Students, backup cooking',
      estimatedPowerConsumption: '1.4 units/hour'
    },
    {
      id: 'pak-elektron-induction-deluxe',
      name: 'Pak Elektron Induction Cooktop Deluxe',
      type: 'Induction Cooktop',
      burners: '2 Burners',
      price: 'PKR 15,000 - 19,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '2 Burners',
        'Touch Controls',
        '10 Power Levels',
        'Boost Function',
        'Child Lock'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '2',
        'Power': '3000W total',
        'Power Levels': '10',
        'Boost': 'Yes',
        'Timer': 'Per burner',
        'Controls': 'Touch',
        'Dimensions': '64 x 37 x 6 cm',
        'Weight': '5.5 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Boost for quick boiling. Use both burners.',
      maintenance: 'Monthly: Clean with induction cleaner.',
      installationTips: 'Dedicated circuit recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Boost not working: Check power',
        'Not detecting pan: Clean pan'
      ],
      bestFor: 'Small families',
      estimatedPowerConsumption: '2.1 units/hour'
    },
    {
      id: 'pak-elektron-induction-premium',
      name: 'Pak Elektron Induction Cooktop Premium',
      type: 'Induction Cooktop',
      burners: '4 Burners',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Induction Burners',
        'Flex Zone',
        'Power Boost',
        'Timer per Burner',
        'Pause Function'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '4',
        'Power': '6800W total',
        'Flex Zone': 'Combine 2 burners',
        'Power Levels': '15',
        'Boost': '+50%',
        'Controls': 'Touch',
        'Dimensions': '78 x 52 x 5 cm',
        'Cutout': '75 x 49 cm',
        'Weight': '11.5 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Flex zone for large pans. Boost for rapid boiling.',
      maintenance: 'Monthly: Clean with special cleaner.',
      installationTips: 'Professional installation only. Dedicated 40A circuit.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Flex zone not working: Check settings',
        'Burner error: Call service'
      ],
      bestFor: 'Modern kitchens, large families',
      estimatedPowerConsumption: '2.9 units/hour'
    },

    // ---------- GLASS TOP - 3 Models ----------
    {
      id: 'pak-elektron-glass-basic',
      name: 'Pak Elektron Glass Top Basic',
      type: 'Glass Top',
      burners: '4 Radiant',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Radiant Burners',
        'Ceramic Glass',
        'Rotary Controls',
        'Residual Heat Indicator',
        'Easy Clean'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Radiant',
        'Power': '5600W',
        'Controls': 'Rotary',
        'Glass': 'Ceramic',
        'Dimensions': '75 x 50 x 5 cm',
        'Weight': '9.5 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Flat pans only. Clean spills immediately.',
      maintenance: 'Weekly: Glass cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Glass stays hot.',
      troubleshooting: [
        'Not heating: Check power',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Easy cleaning',
      estimatedPowerConsumption: '2.4 units/hour'
    },
    {
      id: 'pak-elektron-glass-deluxe',
      name: 'Pak Elektron Glass Top Deluxe',
      type: 'Glass Top',
      burners: '4 Hi-Light',
      price: 'PKR 24,000 - 30,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Burners',
        'Touch Controls',
        '9 Power Levels',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Hi-Light',
        'Power': '6200W',
        'Controls': 'Touch',
        'Glass': 'Ceramic',
        'Timer': '99 min',
        'Dimensions': '77 x 52 x 5 cm',
        'Weight': '10.5 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Hi-Light fast heating. Touch controls.',
      maintenance: 'Monthly: Special cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Child lock. Auto shut-off.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Modern kitchens',
      estimatedPowerConsumption: '2.7 units/hour'
    },
    {
      id: 'pak-elektron-glass-premium',
      name: 'Pak Elektron Glass Top Premium',
      type: 'Glass Top',
      burners: '4 with Flex Zone',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Flex Zone',
        'Bridge Function',
        'Power Boost',
        'Stop & Go',
        'Warming Zone'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 with Flex',
        'Power': '6800W',
        'Flex Zone': 'Combine burners',
        'Bridge': 'Connect zones',
        'Boost': '+50%',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout': '77 x 52 cm',
        'Weight': '12.5 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Bridge for oval pans. Flex for large.',
      maintenance: 'Monthly: Premium cleaner.',
      installationTips: 'Professional only.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Flex not working: Check settings',
        'Glass cracked: Stop use'
      ],
      bestFor: 'Premium kitchens',
      estimatedPowerConsumption: '2.9 units/hour'
    },

    // ---------- BUILT-IN STOVE - 3 Models ----------
    {
      id: 'pak-elektron-builtin-basic',
      name: 'Pak Elektron Built-in Hob Basic',
      type: 'Built-in Stove',
      burners: '4 Gas Burners',
      price: 'PKR 21,000 - 25,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '4 Gas Burners',
        'Auto Ignition',
        'Stainless Steel',
        'Safety Valves',
        'Removable Supports'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '4',
        'Ignition': 'Auto',
        'Material': 'Stainless Steel',
        'Safety': 'Flame Failure',
        'Dimensions': '60 x 52 x 5 cm',
        'Cutout': '56 x 48 cm',
        'Weight': '14 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built-in installation. Auto ignition.',
      maintenance: 'Monthly: Clean burners.',
      installationTips: 'Professional only.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Igniter not working: Check battery',
        'Gas smell: Check connections'
      ],
      bestFor: 'Modern kitchens',
      estimatedGasConsumption: '0.5 kg/hour'
    },
    {
      id: 'pak-elektron-builtin-deluxe',
      name: 'Pak Elektron Built-in Hob Deluxe',
      type: 'Built-in Stove',
      burners: '5 Gas Burners',
      price: 'PKR 27,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '5 Burners',
        'Wok Burner',
        'Auto Ignition',
        'Brass Burners',
        'Glass Top'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '5 with wok',
        'Wok': '4.2kW',
        'Material': 'Tempered Glass',
        'Burners': 'Brass',
        'Dimensions': '75 x 52 x 5 cm',
        'Cutout': '71 x 48 cm',
        'Weight': '16 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Wok burner for high heat.',
      maintenance: 'Monthly: Clean glass.',
      installationTips: 'Professional installation.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Wok burner low: Clean jet',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Wok cooking enthusiasts',
      estimatedGasConsumption: '0.7 kg/hour'
    },
    {
      id: 'pak-elektron-builtin-premium',
      name: 'Pak Elektron Built-in Hob Premium',
      type: 'Built-in Stove',
      burners: '2 Gas + 2 Induction Combo',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '2 Gas + 2 Induction',
        'Flexible Cooking',
        'Touch Controls',
        'Auto Ignition',
        'Glass Top',
        'Boost Function'
      ],
      specifications: {
        'Type': 'Built-in Combo Hob',
        'Burners': '2 Gas + 2 Induction',
        'Gas Power': '3.8kW each',
        'Induction Power': '1800W each',
        'Induction Controls': 'Touch',
        'Glass': 'Tempered Glass',
        'Dimensions': '80 x 55 x 5 cm',
        'Cutout': '76 x 51 cm',
        'Weight': '19 kg',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Gas for traditional. Induction for fast.',
      maintenance: 'Monthly: Clean glass. Check gas burners.',
      installationTips: 'Professional installation only. Gas + electric needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Induction not working: Check pan',
        'Gas not lighting: Check supply'
      ],
      bestFor: 'Premium kitchens, both options',
      estimatedGasConsumption: '0.4 kg/hour + 1.4 units/hour'
    }
  ]
},
      {
  id: 'royal-stove',
  name: 'Royal',
  models: [
    // ---------- GAS STOVE - 3 Models ----------
    {
      id: 'royal-3-burner',
      name: 'Royal 3-Burner Compact',
      type: 'Gas Stove',
      burners: '3 Burners',
      price: 'PKR 12,000 - 15,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        '3 Burners',
        'Basic Functionality',
        'Very Affordable',
        'Easy Maintenance',
        'Manual Ignition',
        'Lightweight'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '3 standard burners',
        'Ignition': 'Manual (lighter needed)',
        'Material': 'Mild Steel',
        'Grates': 'Cast Iron',
        'Dimensions': '60 x 45 x 12 cm',
        'Weight': '16 kg',
        'Color': 'White',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Most basic stove. Manual ignition with lighter. Perfect for small kitchens. Always light burner before turning gas knob.',
      maintenance: 'Weekly: Clean burners. Monthly: Check gas connections. Keep burners clean for efficiency.',
      installationTips: 'Basic installation. Suitable for small kitchens. Check for gas leaks with soap water.',
      safetyTips: 'Use with caution due to manual ignition. Keep flammable items away. Ensure ventilation.',
      troubleshooting: [
        'Flame yellow: Clean burner',
        'Burner not lighting: Check lighter',
        'Gas smell: Check connections'
      ],
      bestFor: 'Small families, budget buyers, compact kitchens',
      estimatedGasConsumption: '0.4 kg/hour approx'
    },
    {
      id: 'royal-4-burner',
      name: 'Royal 4-Burner Standard',
      type: 'Gas Stove',
      burners: '4 Burners',
      price: 'PKR 15,000 - 18,000',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800',
      features: [
        '4 Burners',
        'Auto Ignition',
        'Powder Coated Body',
        'Cast Iron Grates',
        'Removable Burners',
        'Adjustable Legs',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '4 standard burners',
        'Ignition': 'Auto Spark (Piezo)',
        'Material': 'Powder Coated Steel',
        'Grates': 'Cast Iron',
        'Dimensions': '72 x 48 x 14 cm',
        'Weight': '18 kg',
        'Color': 'White',
        'Gas Type': 'LPG/Natural Gas',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto ignition for easy lighting. Good for daily cooking. Turn off gas when not in use.',
      maintenance: 'Weekly: Clean burners. Monthly: Check igniter.',
      installationTips: 'Standard installation. Check gas pressure.',
      safetyTips: 'Never leave unattended. Keep children away.',
      troubleshooting: [
        'Igniter not sparking: Clean contact',
        'Flame uneven: Clean burner ports'
      ],
      bestFor: 'Medium families, budget conscious',
      estimatedGasConsumption: '0.5 kg/hour approx'
    },
    {
      id: 'royal-5-burner',
      name: 'Royal 5-Burner Family',
      type: 'Gas Stove',
      burners: '5 Burners',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '5 Burners',
        'Auto Ignition',
        'Glass Top',
        'Heavy Duty Grates',
        'Removable Trays',
        'Ergonomic Knobs'
      ],
      specifications: {
        'Type': 'Gas Stove',
        'Burners': '5 (1 large, 4 standard)',
        'Ignition': 'Auto Spark',
        'Top Material': 'Tempered Glass',
        'Grates': 'Cast Iron',
        'Dimensions': '78 x 50 x 15 cm',
        'Weight': '22 kg',
        'Color': 'Black Glass',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Large burner for heavy cooking. Clean spills immediately.',
      maintenance: 'Weekly: Clean glass top. Monthly: Check burners.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Glass stays hot. Keep away from children.',
      troubleshooting: [
        'Igniter not working: Check battery',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Large families, frequent cooking',
      estimatedGasConsumption: '0.7 kg/hour approx'
    },

    // ---------- ELECTRIC STOVE - 3 Models ----------
    {
      id: 'royal-electric-basic',
      name: 'Royal Electric Stove Basic',
      type: 'Electric Stove',
      burners: '3 Electric Coils',
      price: 'PKR 11,000 - 14,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '3 Electric Coils',
        'Rotary Controls',
        'Indicator Lights',
        'Enamel Top',
        'Budget Friendly',
        'Compact Size'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '3 Electric Coils',
        'Power': '1500W total',
        'Controls': 'Rotary Knobs',
        'Top Material': 'Enamel Steel',
        'Dimensions': '60 x 45 x 8 cm',
        'Weight': '16 kg',
        'Color': 'White',
        'Power Supply': '220V AC',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Coils take 2-3 minutes to heat. Use flat bottom pans.',
      maintenance: 'Weekly: Clean coils when cool.',
      installationTips: 'Standard 15A socket required.',
      safetyTips: 'Coils remain hot after use.',
      troubleshooting: [
        'Coil not heating: Check power',
        'Light not working: Replace indicator'
      ],
      bestFor: 'Small families, basic cooking',
      estimatedPowerConsumption: '1.5 units/hour'
    },
    {
      id: 'royal-electric-deluxe',
      name: 'Royal Electric Stove Deluxe',
      type: 'Electric Stove',
      burners: '4 Electric Coils',
      price: 'PKR 15,000 - 18,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        '4 Electric Coils',
        'Rotary Controls',
        'Temperature Settings',
        'Stainless Steel Body',
        'Hot Surface Indicator'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Electric Coils',
        'Power': '1800W total',
        'Temperature': '3 settings',
        'Top Material': 'Stainless Steel',
        'Dimensions': '70 x 50 x 8 cm',
        'Weight': '19 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Temperature settings for different cooking needs.',
      maintenance: 'Monthly: Clean stainless steel.',
      installationTips: 'Dedicated circuit needed.',
      safetyTips: 'Hot surface indicator.',
      troubleshooting: [
        'Coil not heating: Check connection',
        'Uneven heating: Replace coil'
      ],
      bestFor: 'Medium families',
      estimatedPowerConsumption: '1.8 units/hour'
    },
    {
      id: 'royal-electric-premium',
      name: 'Royal Electric Stove Premium',
      type: 'Electric Stove',
      burners: '4 Hi-Light',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Burners',
        'Touch Controls',
        '8 Power Levels',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Type': 'Electric Stove',
        'Burners': '4 Hi-Light',
        'Power': '2000W total',
        'Power Levels': '8',
        'Controls': 'Touch',
        'Timer': '99 minutes',
        'Dimensions': '75 x 55 x 6 cm',
        'Weight': '17 kg',
        'Color': 'Black Glass',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Touch controls. Power levels 1-8.',
      maintenance: 'Monthly: Clean with glass cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Modern kitchens',
      estimatedPowerConsumption: '2.0 units/hour'
    },

    // ---------- INDUCTION COOKTOP - 3 Models ----------
    {
      id: 'royal-induction-basic',
      name: 'Royal Induction Cooktop Basic',
      type: 'Induction Cooktop',
      burners: '1 Burner Portable',
      price: 'PKR 6,000 - 8,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Single Burner Portable',
        'Touch Controls',
        '8 Power Levels',
        'Timer',
        'Auto Pan Detection',
        'Budget Friendly'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '1',
        'Power': '1600W',
        'Power Levels': '8',
        'Timer': '3 hours',
        'Controls': 'Touch',
        'Dimensions': '28 x 36 x 6 cm',
        'Weight': '2.0 kg',
        'Color': 'Black',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Use induction pans only. Pan must be centered.',
      maintenance: 'Weekly: Clean with damp cloth.',
      installationTips: 'Portable - just plug in.',
      safetyTips: 'Pan detection safety.',
      troubleshooting: [
        'Not heating: Check pan',
        'Error E0: No pan detected'
      ],
      bestFor: 'Students, backup cooking',
      estimatedPowerConsumption: '1.3 units/hour'
    },
    {
      id: 'royal-induction-deluxe',
      name: 'Royal Induction Cooktop Deluxe',
      type: 'Induction Cooktop',
      burners: '2 Burners',
      price: 'PKR 14,000 - 17,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '2 Burners',
        'Touch Controls',
        '9 Power Levels',
        'Boost Function',
        'Child Lock'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '2',
        'Power': '2800W total',
        'Power Levels': '9',
        'Boost': 'Yes',
        'Controls': 'Touch',
        'Dimensions': '64 x 37 x 6 cm',
        'Weight': '5.2 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Boost for quick boiling.',
      maintenance: 'Monthly: Clean with induction cleaner.',
      installationTips: 'Dedicated circuit recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Boost not working: Check power',
        'Not detecting pan: Clean pan'
      ],
      bestFor: 'Small families',
      estimatedPowerConsumption: '2.0 units/hour'
    },
    {
      id: 'royal-induction-premium',
      name: 'Royal Induction Cooktop Premium',
      type: 'Induction Cooktop',
      burners: '3 Burners',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '3 Induction Burners',
        'Touch Controls',
        '10 Power Levels',
        'Timer per Burner',
        'Child Lock'
      ],
      specifications: {
        'Type': 'Induction Cooktop',
        'Burners': '3',
        'Power': '4200W total',
        'Power Levels': '10',
        'Timer': 'Per burner',
        'Controls': 'Touch',
        'Dimensions': '70 x 45 x 5 cm',
        'Weight': '8 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Three burners for multi-tasking.',
      maintenance: 'Monthly: Clean with special cleaner.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Burner error: Call service',
        'Not heating: Check pan'
      ],
      bestFor: 'Medium families',
      estimatedPowerConsumption: '2.5 units/hour'
    },

    // ---------- GLASS TOP - 3 Models ----------
    {
      id: 'royal-glass-basic',
      name: 'Royal Glass Top Basic',
      type: 'Glass Top',
      burners: '3 Radiant',
      price: 'PKR 16,000 - 19,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '3 Radiant Burners',
        'Ceramic Glass',
        'Rotary Controls',
        'Residual Heat Indicator',
        'Compact Size'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '3 Radiant',
        'Power': '4200W',
        'Controls': 'Rotary',
        'Glass': 'Ceramic',
        'Dimensions': '65 x 45 x 5 cm',
        'Weight': '8 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Flat pans only. Clean spills immediately.',
      maintenance: 'Weekly: Glass cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Glass stays hot.',
      troubleshooting: [
        'Not heating: Check power',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Small kitchens, easy cleaning',
      estimatedPowerConsumption: '2.0 units/hour'
    },
    {
      id: 'royal-glass-deluxe',
      name: 'Royal Glass Top Deluxe',
      type: 'Glass Top',
      burners: '4 Radiant',
      price: 'PKR 20,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Radiant Burners',
        'Ceramic Glass',
        'Touch Controls',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Radiant',
        'Power': '5600W',
        'Controls': 'Touch',
        'Glass': 'Ceramic',
        'Timer': '99 min',
        'Dimensions': '75 x 50 x 5 cm',
        'Weight': '9.5 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Touch controls. Timer function.',
      maintenance: 'Monthly: Special cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Child lock. Auto shut-off.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Modern kitchens',
      estimatedPowerConsumption: '2.4 units/hour'
    },
    {
      id: 'royal-glass-premium',
      name: 'Royal Glass Top Premium',
      type: 'Glass Top',
      burners: '4 Hi-Light',
      price: 'PKR 26,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800',
      features: [
        '4 Hi-Light Burners',
        'Touch Controls',
        '9 Power Levels',
        'Timer',
        'Child Lock',
        'Warming Zone'
      ],
      specifications: {
        'Type': 'Glass Top',
        'Burners': '4 Hi-Light',
        'Power': '6200W',
        'Power Levels': '9',
        'Controls': 'Touch',
        'Glass': 'Ceramic',
        'Warming Zone': 'Yes',
        'Dimensions': '77 x 52 x 5 cm',
        'Weight': '10.5 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Hi-Light fast heating. Warming zone.',
      maintenance: 'Monthly: Premium cleaner.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium kitchens',
      estimatedPowerConsumption: '2.7 units/hour'
    },

    // ---------- BUILT-IN STOVE - 3 Models ----------
    {
      id: 'royal-builtin-basic',
      name: 'Royal Built-in Hob Basic',
      type: 'Built-in Stove',
      burners: '3 Gas Burners',
      price: 'PKR 18,000 - 22,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '3 Gas Burners',
        'Auto Ignition',
        'Stainless Steel',
        'Safety Valves',
        'Compact Size'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '3',
        'Ignition': 'Auto',
        'Material': 'Stainless Steel',
        'Safety': 'Flame Failure',
        'Dimensions': '50 x 45 x 5 cm',
        'Cutout': '46 x 41 cm',
        'Weight': '12 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Built-in installation for small kitchens.',
      maintenance: 'Monthly: Clean burners.',
      installationTips: 'Professional only.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Igniter not working: Check battery',
        'Gas smell: Check connections'
      ],
      bestFor: 'Small modern kitchens',
      estimatedGasConsumption: '0.4 kg/hour'
    },
    {
      id: 'royal-builtin-deluxe',
      name: 'Royal Built-in Hob Deluxe',
      type: 'Built-in Stove',
      burners: '4 Gas Burners',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '4 Gas Burners',
        'Auto Ignition',
        'Stainless Steel',
        'Safety Valves',
        'Removable Supports'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '4',
        'Ignition': 'Auto',
        'Material': 'Stainless Steel',
        'Safety': 'Flame Failure',
        'Dimensions': '60 x 52 x 5 cm',
        'Cutout': '56 x 48 cm',
        'Weight': '14 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Standard built-in hob.',
      maintenance: 'Monthly: Clean burners.',
      installationTips: 'Professional only.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Igniter not working: Check battery',
        'Gas smell: Check connections'
      ],
      bestFor: 'Modern kitchens',
      estimatedGasConsumption: '0.5 kg/hour'
    },
    {
      id: 'royal-builtin-premium',
      name: 'Royal Built-in Hob Premium',
      type: 'Built-in Stove',
      burners: '4 Gas Burners Glass Top',
      price: 'PKR 26,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        '4 Gas Burners',
        'Auto Ignition',
        'Glass Top',
        'Brass Burners',
        'Safety Valves',
        'Modern Design'
      ],
      specifications: {
        'Type': 'Built-in Gas Hob',
        'Burners': '4 with wok',
        'Wok': '4kW',
        'Material': 'Tempered Glass',
        'Burners': 'Brass',
        'Safety': 'Flame Failure',
        'Dimensions': '75 x 52 x 5 cm',
        'Cutout': '71 x 48 cm',
        'Weight': '16 kg',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Wok burner for high heat. Glass top easy clean.',
      maintenance: 'Monthly: Clean glass. Check burners.',
      installationTips: 'Professional installation.',
      safetyTips: 'Flame failure safety.',
      troubleshooting: [
        'Wok burner low: Clean jet',
        'Glass stained: Use cleaner'
      ],
      bestFor: 'Modern kitchens, stylish look',
      estimatedGasConsumption: '0.6 kg/hour'
    }
  ]
}
    ]
  },
  {
  id: 'microwave',
  name: 'Microwave Oven',
  description: 'Quick heating and cooking appliance',
  types: ['Solo Microwave', 'Convection Microwave', 'Grill Microwave', 'Inverter Microwave', 'Built-in Microwave'],
  companies: [
    // ==================== DAWLANCE MICROWAVE (15 Models) ====================
    {
      id: 'dawlance-microwave',
      name: 'Dawlance',
      models: [
        // ---------- SOLO MICROWAVE - 3 Models ----------
        {
          id: 'dawlance-solo-basic',
          name: 'Dawlance Solo Microwave Basic',
          type: 'Solo Microwave',
          capacity: '20L',
          price: 'PKR 14,000 - 17,000',
          image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
          features: [
            'Simple Operation',
            '5 Power Levels',
            'Timer Function',
            'Budget Friendly',
            'Defrost Function',
            'Easy Clean Interior',
            'Rotary Controls'
          ],
          specifications: {
            'Capacity': '20 Liters',
            'Type': 'Solo Microwave',
            'Power': '800W',
            'Power Levels': '5',
            'Timer': '30 minutes',
            'Controls': 'Rotary Knobs',
            'Interior': 'Enamel',
            'Turntable': 'Yes, 25cm',
            'Dimensions': '45 x 35 x 28 cm',
            'Weight': '12 kg',
            'Color': 'White',
            'Power Supply': '220V AC',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive warranty',
          usageGuide: 'Basic heating and defrosting. Simple controls. Use microwave-safe containers only. Place food in center of turntable.',
          maintenance: 'Weekly: Wipe interior with damp cloth. Clean turntable. Check door seal for food particles.',
          installationTips: 'Countertop use. Keep 4 inches ventilation space. Away from heat sources. Level surface.',
          safetyTips: 'Never operate empty. Don\'t use metal containers. Check food temperature before serving.',
          troubleshooting: [
            'Not heating: Check power, door closure',
            'Turntable not rotating: Check roller ring',
            'Spark inside: Stop immediately, remove metal',
            'Door not closing: Check hinges'
          ],
          bestFor: 'Basic reheating, defrosting, small families',
          estimatedPowerConsumption: '0.8 units/hour'
        },
        {
          id: 'dawlance-solo-deluxe',
          name: 'Dawlance Solo Microwave Deluxe',
          type: 'Solo Microwave',
          capacity: '23L',
          price: 'PKR 17,000 - 21,000',
          image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
          features: [
            'Digital Display',
            '6 Power Levels',
            'Express Cook',
            'Auto Defrost',
            'Kitchen Timer',
            'Child Lock',
            'Stainless Steel Look'
          ],
          specifications: {
            'Capacity': '23 Liters',
            'Type': 'Solo Microwave',
            'Power': '850W',
            'Power Levels': '6',
            'Display': 'LED Digital',
            'Timer': '99 minutes',
            'Controls': 'Button + Dial',
            'Interior': 'Enamel',
            'Turntable': 'Yes, 27cm',
            'Dimensions': '48 x 36 x 29 cm',
            'Weight': '13 kg',
            'Color': 'Silver',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Digital controls for precise cooking. Auto defrost by weight. Express cook for quick heating.',
          maintenance: 'Weekly: Clean interior. Check door seal. Wipe control panel gently.',
          installationTips: 'Countertop use. Allow ventilation. Keep away from water.',
          safetyTips: 'Child lock for safety. Don\'t operate empty.',
          troubleshooting: [
            'Display not working: Check power',
            'Keypad unresponsive: Clean panel',
            'Uneven heating: Stir food halfway'
          ],
          bestFor: 'Daily use, families, easy operation',
          estimatedPowerConsumption: '0.85 units/hour'
        },
        {
          id: 'dawlance-solo-premium',
          name: 'Dawlance Solo Microwave Premium',
          type: 'Solo Microwave',
          capacity: '25L',
          price: 'PKR 20,000 - 24,000',
          image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
          features: [
            'Smart Sensor Cooking',
            '10 Auto Programs',
            'LED Display',
            'Child Lock',
            'Eco Mode',
            'Stainless Steel',
            'Keep Warm Function'
          ],
          specifications: {
            'Capacity': '25 Liters',
            'Type': 'Solo Microwave',
            'Power': '900W',
            'Power Levels': '10',
            'Auto Programs': '10',
            'Sensor': 'Humidity Sensor',
            'Display': 'LED',
            'Interior': 'Stainless Steel',
            'Turntable': 'Yes, 30cm',
            'Dimensions': '50 x 38 x 30 cm',
            'Weight': '14 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Sensor cooking automatically adjusts time. Auto programs for common dishes. Eco mode saves energy.',
          maintenance: 'Monthly: Deep clean interior. Check sensor window.',
          installationTips: 'Countertop use. Level surface. Proper ventilation.',
          safetyTips: 'Sensor safe. Child lock engaged.',
          troubleshooting: [
            'Sensor not working: Clean sensor',
            'Error code: Call service',
            'Not heating properly: Check settings'
          ],
          bestFor: 'Tech-savvy users, perfect results',
          estimatedPowerConsumption: '0.9 units/hour'
        },

        // ---------- CONVECTION MICROWAVE - 3 Models ----------
        {
          id: 'dawlance-convection-basic',
          name: 'Dawlance Convection Microwave Basic',
          type: 'Convection Microwave',
          capacity: '28L',
          price: 'PKR 25,000 - 29,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'Convection + Microwave',
            'Grill Function',
            'Digital Display',
            '8 Auto Programs',
            'Defrost Function',
            'Timer',
            'Child Lock'
          ],
          specifications: {
            'Capacity': '28 Liters',
            'Type': 'Convection Microwave',
            'Power': '900W Microwave, 1000W Grill, 1400W Convection',
            'Cooking Modes': '3 (Microwave, Grill, Convection)',
            'Auto Programs': '8',
            'Display': 'LED Digital',
            'Turntable': 'Yes, 30cm',
            'Temperature': '100-200°C',
            'Dimensions': '48 x 35 x 30 cm',
            'Weight': '16 kg',
            'Color': 'Silver',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Can bake, roast, and grill. Preheat for convection baking. Use microwave-safe and oven-safe containers.',
          maintenance: 'Weekly: Clean interior after each use. Remove food splatters.',
          installationTips: 'Countertop use. Allow ventilation. Level surface.',
          safetyTips: 'Use oven mitts - gets hot. Keep children away.',
          troubleshooting: [
            'Not baking evenly: Rotate food',
            'Convection not working: Check mode',
            'Error: Call service'
          ],
          bestFor: 'Baking beginners, versatile cooking',
          estimatedPowerConsumption: '1.2 units/hour'
        },
        {
          id: 'dawlance-convection-deluxe',
          name: 'Dawlance Convection Microwave Deluxe',
          type: 'Convection Microwave',
          capacity: '32L',
          price: 'PKR 30,000 - 35,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'Convection + Grill + Microwave',
            '15 Auto Programs',
            'Digital Display',
            'Temperature Probe',
            'Child Lock',
            'Stainless Steel',
            'Crisp Function'
          ],
          specifications: {
            'Capacity': '32 Liters',
            'Type': 'Convection Microwave',
            'Power': '1000W Microwave, 1200W Grill, 1600W Convection',
            'Auto Programs': '15',
            'Temperature Probe': 'Yes',
            'Temperature Range': '100-220°C',
            'Display': 'LED',
            'Interior': 'Stainless Steel',
            'Turntable': 'Yes, 32cm',
            'Dimensions': '52 x 40 x 32 cm',
            'Weight': '18 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Temperature probe for perfect meat cooking. Crisp function for crispy results. Preheat 5-10 minutes.',
          maintenance: 'Monthly: Clean probe. Deep clean interior.',
          installationTips: 'Countertop use. Heavy - ensure stable surface.',
          safetyTips: 'Probe gets hot. Use oven mitts.',
          troubleshooting: [
            'Probe not reading: Check connection',
            'Uneven browning: Rotate dish',
            'Error: Call service'
          ],
          bestFor: 'Serious bakers, meat lovers',
          estimatedPowerConsumption: '1.4 units/hour'
        },
        {
          id: 'dawlance-convection-premium',
          name: 'Dawlance Convection Microwave Premium',
          type: 'Convection Microwave',
          capacity: '34L',
          price: 'PKR 38,000 - 44,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'Convection + Grill + Microwave',
            '20 Auto Programs',
            'Touch Controls',
            'Recipe Book',
            'Keep Warm',
            'Defrost by Weight',
            'Child Lock'
          ],
          specifications: {
            'Capacity': '34 Liters',
            'Type': 'Convection Microwave',
            'Power': '1100W Microwave, 1300W Grill, 1700W Convection',
            'Auto Programs': '20',
            'Controls': 'Touch Screen',
            'Temperature': '100-230°C',
            'Display': 'Touch LCD',
            'Interior': 'Ceramic Enamel',
            'Turntable': 'Yes, 34cm',
            'Dimensions': '54 x 42 x 34 cm',
            'Weight': '20 kg',
            'Color': 'Black Stainless',
            'Warranty': '3 years'
          },
          warranty: '3 years warranty',
          usageGuide: 'Touch screen controls. Recipe book included. Ceramic interior easy to clean.',
          maintenance: 'Monthly: Clean with soft cloth. Wipe touch screen gently.',
          installationTips: 'Professional installation recommended. Stable surface.',
          safetyTips: 'Touch screen lock. Keep away from children.',
          troubleshooting: [
            'Touch screen not working: Clean, restart',
            'Error code: Note and call service',
            'Not heating: Check settings'
          ],
          bestFor: 'Premium kitchens, cooking enthusiasts',
          estimatedPowerConsumption: '1.5 units/hour'
        },

        // ---------- GRILL MICROWAVE - 3 Models ----------
        {
          id: 'dawlance-grill-basic',
          name: 'Dawlance Grill Microwave Basic',
          type: 'Grill Microwave',
          capacity: '25L',
          price: 'PKR 22,000 - 26,000',
          image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
          features: [
            'Grill Function',
            'Digital Controls',
            'Auto Defrost',
            'Child Lock',
            'Multiple Programs',
            'Timer',
            'Quartz Grill'
          ],
          specifications: {
            'Capacity': '25 Liters',
            'Type': 'Grill Microwave',
            'Power': '800W Microwave, 1000W Grill',
            'Functions': 'Microwave + Grill',
            'Controls': 'Digital',
            'Grill Type': 'Quartz',
            'Turntable': 'Yes, 27cm',
            'Dimensions': '46 x 36 x 29 cm',
            'Weight': '15 kg',
            'Color': 'Black',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Can grill and microwave. Use grill rack provided. Perfect for sandwiches, pizza, and snacks.',
          maintenance: 'Weekly: Clean grill plate. Remove grease. Wipe interior.',
          installationTips: 'Countertop use. Allow ventilation.',
          safetyTips: 'Grill gets very hot. Use oven mitts.',
          troubleshooting: [
            'Grill not working: Check mode',
            'Food burning: Reduce time',
            'Error: Call service'
          ],
          bestFor: 'Snacks, grilling lovers',
          estimatedPowerConsumption: '1.1 units/hour'
        },
        {
          id: 'dawlance-grill-deluxe',
          name: 'Dawlance Grill Microwave Deluxe',
          type: 'Grill Microwave',
          capacity: '28L',
          price: 'PKR 26,000 - 31,000',
          image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
          features: [
            'Combination Grill',
            '12 Auto Programs',
            'Digital Display',
            'Child Lock',
            'Stainless Steel',
            'Keep Warm',
            'Crisp Function'
          ],
          specifications: {
            'Capacity': '28 Liters',
            'Type': 'Grill Microwave',
            'Power': '900W Microwave, 1100W Grill',
            'Combination': 'Microwave+Grill',
            'Auto Programs': '12',
            'Display': 'LED',
            'Grill Type': 'Quartz',
            'Dimensions': '48 x 38 x 30 cm',
            'Weight': '16 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Combination mode for even cooking. Crisp function for golden results.',
          maintenance: 'Monthly: Deep clean grill element.',
          installationTips: 'Countertop use. Level surface.',
          safetyTips: 'Hot surface. Keep away.',
          troubleshooting: [
            'Combination not working: Check settings',
            'Uneven grilling: Turn food'
          ],
          bestFor: 'Regular grilling, family snacks',
          estimatedPowerConsumption: '1.2 units/hour'
        },
        {
          id: 'dawlance-grill-premium',
          name: 'Dawlance Grill Microwave Premium',
          type: 'Grill Microwave',
          capacity: '30L',
          price: 'PKR 32,000 - 38,000',
          image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
          features: [
            'Dual Grill System',
            '15 Auto Programs',
            'Touch Controls',
            'Recipe Assistant',
            'Child Lock',
            'Ceramic Interior',
            'Keep Warm'
          ],
          specifications: {
            'Capacity': '30 Liters',
            'Type': 'Grill Microwave',
            'Power': '1000W Microwave, 1200W Grill',
            'Grill Type': 'Dual Quartz',
            'Auto Programs': '15',
            'Controls': 'Touch',
            'Interior': 'Ceramic Enamel',
            'Dimensions': '50 x 40 x 32 cm',
            'Weight': '18 kg',
            'Color': 'Black Glass',
            'Warranty': '3 years'
          },
          warranty: '3 years warranty',
          usageGuide: 'Dual grill for even browning. Ceramic interior easy clean.',
          maintenance: 'Monthly: Clean with soft cloth.',
          installationTips: 'Professional installation recommended.',
          safetyTips: 'Dual grill gets very hot.',
          troubleshooting: [
            'Touch not responding: Clean panel',
            'Error: Call service'
          ],
          bestFor: 'Premium grilling, entertaining',
          estimatedPowerConsumption: '1.3 units/hour'
        },

        // ---------- INVERTER MICROWAVE - 3 Models ----------
        {
          id: 'dawlance-inverter-basic',
          name: 'Dawlance Inverter Microwave Basic',
          type: 'Inverter Microwave',
          capacity: '28L',
          price: 'PKR 30,000 - 35,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'Inverter Technology',
            'Even Heating',
            'Sensor Cooking',
            'Auto Programs',
            'Child Lock',
            'Digital Display',
            'Energy Saving'
          ],
          specifications: {
            'Capacity': '28 Liters',
            'Type': 'Inverter Microwave',
            'Power': '900W Inverter',
            'Technology': 'Inverter for even power',
            'Sensors': 'Auto humidity sensor',
            'Auto Programs': '12',
            'Display': 'LED',
            'Interior': 'Stainless Steel',
            'Dimensions': '48 x 38 x 30 cm',
            'Weight': '16 kg',
            'Color': 'Silver',
            'Warranty': '3 years'
          },
          warranty: '3 years warranty',
          usageGuide: 'Inverter provides consistent power. Sensor cooking automatic. Perfect for delicate foods.',
          maintenance: 'Monthly: Clean interior. Wipe sensors gently.',
          installationTips: 'Countertop use. Level surface.',
          safetyTips: 'Even heating prevents hot spots.',
          troubleshooting: [
            'Sensor error: Clean sensor',
            'Not heating evenly: Check turntable',
            'Error: Call service'
          ],
          bestFor: 'Delicate cooking, even results',
          estimatedPowerConsumption: '0.9 units/hour'
        },
        {
          id: 'dawlance-inverter-deluxe',
          name: 'Dawlance Inverter Microwave Deluxe',
          type: 'Inverter Microwave',
          capacity: '32L',
          price: 'PKR 38,000 - 44,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'Inverter Technology',
            'Convection + Grill',
            '20 Auto Programs',
            'Sensor Cook',
            'Child Lock',
            'Keep Warm',
            'Ceramic Interior'
          ],
          specifications: {
            'Capacity': '32 Liters',
            'Type': 'Inverter Microwave',
            'Power': '1000W Inverter',
            'Convection': 'Yes, 1600W',
            'Grill': 'Yes, 1200W',
            'Auto Programs': '20',
            'Sensors': 'Humidity + Temperature',
            'Interior': 'Ceramic Enamel',
            'Dimensions': '52 x 40 x 32 cm',
            'Weight': '19 kg',
            'Color': 'Stainless Steel',
            'Warranty': '3 years'
          },
          warranty: '3 years warranty',
          usageGuide: 'All-in-one: Inverter + Convection + Grill. Perfect for all cooking needs.',
          maintenance: 'Monthly: Deep clean. Check sensors.',
          installationTips: 'Countertop use. Heavy - stable surface.',
          safetyTips: 'Multiple functions. Read manual.',
          troubleshooting: [
            'Convection not working: Check mode',
            'Sensor error: Clean',
            'Error: Call service'
          ],
          bestFor: 'Complete cooking solution',
          estimatedPowerConsumption: '1.3 units/hour'
        },
        {
          id: 'dawlance-inverter-premium',
          name: 'Dawlance Inverter Microwave Premium',
          type: 'Inverter Microwave',
          capacity: '34L',
          price: 'PKR 45,000 - 52,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'Smart Inverter',
            'Touch Screen',
            '30 Auto Programs',
            'Recipe Assistant',
            'Steam Clean',
            'Child Lock',
            'WiFi Ready'
          ],
          specifications: {
            'Capacity': '34 Liters',
            'Type': 'Inverter Microwave',
            'Power': '1100W Inverter',
            'Convection': '1800W',
            'Grill': '1400W',
            'Auto Programs': '30',
            'Controls': 'Touch Screen',
            'Smart': 'WiFi Compatible',
            'Interior': 'Ceramic',
            'Dimensions': '54 x 42 x 34 cm',
            'Weight': '21 kg',
            'Color': 'Black Stainless',
            'Warranty': '3 years'
          },
          warranty: '3 years warranty',
          usageGuide: 'Smart features via app. Steam clean function. Recipe assistant.',
          maintenance: 'Monthly: Steam clean cycle. Update app.',
          installationTips: 'Professional installation. Strong WiFi.',
          safetyTips: 'Smart features for safety.',
          troubleshooting: [
            'WiFi not connecting: Reset router',
            'Touch screen issues: Restart',
            'Error: Call service'
          ],
          bestFor: 'Tech-savvy, smart kitchen',
          estimatedPowerConsumption: '1.4 units/hour'
        },

        // ---------- BUILT-IN MICROWAVE - 3 Models ----------
        {
          id: 'dawlance-builtin-basic',
          name: 'Dawlance Built-in Microwave Basic',
          type: 'Built-in Microwave',
          capacity: '25L',
          price: 'PKR 35,000 - 40,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'Built-in Design',
            'Solo Function',
            'Digital Controls',
            'Auto Defrost',
            'Child Lock',
            'Flush Fit',
            'Stainless Steel'
          ],
          specifications: {
            'Capacity': '25 Liters',
            'Type': 'Built-in Solo Microwave',
            'Power': '900W',
            'Installation': 'Built-in cabinet',
            'Controls': 'Digital',
            'Auto Programs': '8',
            'Dimensions': '60 x 40 x 30 cm',
            'Cutout Size': '56 x 38 x 28 cm',
            'Weight': '18 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Built into kitchen cabinets. Professional installation required. Flush fit design.',
          maintenance: 'Monthly: Clean exterior. Check ventilation.',
          installationTips: 'Professional installation only. Cabinet cutout needed.',
          safetyTips: 'Professional installation essential.',
          troubleshooting: [
            'Not working: Check power',
            'Door not sealing: Check hinges',
            'Error: Call service'
          ],
          bestFor: 'Integrated kitchens, seamless look',
          estimatedPowerConsumption: '0.9 units/hour'
        },
        {
          id: 'dawlance-builtin-deluxe',
          name: 'Dawlance Built-in Microwave Deluxe',
          type: 'Built-in Microwave',
          capacity: '28L',
          price: 'PKR 42,000 - 48,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'Built-in Design',
            'Convection + Grill',
            'Touch Controls',
            '15 Auto Programs',
            'Child Lock',
            'Stainless Steel',
            'Premium Finish'
          ],
          specifications: {
            'Capacity': '28 Liters',
            'Type': 'Built-in Convection Microwave',
            'Power': '1000W Microwave, 1200W Grill, 1600W Convection',
            'Installation': 'Built-in',
            'Controls': 'Touch',
            'Auto Programs': '15',
            'Dimensions': '60 x 42 x 32 cm',
            'Cutout': '56 x 40 x 30 cm',
            'Weight': '20 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Built-in convection microwave. Professional installation.',
          maintenance: 'Monthly: Clean interior. Check seals.',
          installationTips: 'Professional installation only.',
          safetyTips: 'Professional installation essential.',
          troubleshooting: [
            'Convection not working: Check mode',
            'Error: Call service'
          ],
          bestFor: 'Integrated kitchens, versatile cooking',
          estimatedPowerConsumption: '1.3 units/hour'
        },
        {
          id: 'dawlance-builtin-premium',
          name: 'Dawlance Built-in Microwave Premium',
          type: 'Built-in Microwave',
          capacity: '32L',
          price: 'PKR 55,000 - 65,000',
          image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
          features: [
            'Built-in Design',
            'Inverter Technology',
            'Convection + Grill',
            'Touch Screen',
            '25 Auto Programs',
            'Steam Clean',
            'Premium Black Glass'
          ],
          specifications: {
            'Capacity': '32 Liters',
            'Type': 'Built-in Inverter Microwave',
            'Power': '1100W Inverter',
            'Convection': '1800W',
            'Grill': '1400W',
            'Installation': 'Built-in',
            'Controls': 'Touch Screen',
            'Auto Programs': '25',
            'Dimensions': '62 x 45 x 35 cm',
            'Cutout': '58 x 43 x 33 cm',
            'Weight': '24 kg',
            'Color': 'Black Glass',
            'Warranty': '3 years'
          },
          warranty: '3 years warranty',
          usageGuide: 'Premium built-in microwave with inverter technology.',
          maintenance: 'Monthly: Steam clean. Update if smart.',
          installationTips: 'Professional installation only. Precise cutout needed.',
          safetyTips: 'Professional installation essential.',
          troubleshooting: [
            'Touch screen not working: Clean, restart',
            'Error: Call service',
            'Not heating: Check settings'
          ],
          bestFor: 'Luxury kitchens, best performance',
          estimatedPowerConsumption: '1.4 units/hour'
        }
      ]
    },
      {
        id: 'orient-microwave',
        name: 'Orient',
        models: [
          {
            id: 'orient-solo-basic',
            name: 'Solo Microwave Basic',
            type: 'Solo Microwave',
            capacity: '20L',
            price: 'PKR 14,000 - 17,000',
            image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
            features: [
              'Simple Operation',
              '5 Power Levels',
              'Timer Function',
              'Budget Friendly',
              'Defrost Function'
            ],
            specifications: {
              'Capacity': '20 Liters',
              'Type': 'Solo Microwave',
              'Power': '800W',
              'Power Levels': '5',
              'Timer': '30 minutes',
              'Dimensions': '45 x 35 x 28 cm',
              'Weight': '15 kg',
              'Color': 'White'
            },
            usageGuide: 'Basic heating and defrosting. Simple controls.',
            maintenance: 'Wipe clean. Check door seal.',
            warranty: '1 year warranty',
            cookingTips: 'Cover food to prevent splattering.',
            installationTips: 'Countertop use. Easy installation.'
          }
        ]
      },
      {
  id: 'orient-microwave',
  name: 'Orient',
  models: [
    // ---------- SOLO MICROWAVE - 3 Models ----------
    {
      id: 'orient-solo-basic',
      name: 'Orient Solo Microwave Basic',
      type: 'Solo Microwave',
      capacity: '20L',
      price: 'PKR 14,000 - 17,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Simple Operation',
        '5 Power Levels',
        'Timer Function',
        'Budget Friendly',
        'Defrost Function',
        'Easy Clean Interior',
        'Rotary Controls'
      ],
      specifications: {
        'Capacity': '20 Liters',
        'Type': 'Solo Microwave',
        'Power': '800W',
        'Power Levels': '5',
        'Timer': '30 minutes',
        'Controls': 'Rotary Knobs',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 25cm',
        'Dimensions': '45 x 35 x 28 cm',
        'Weight': '12 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Basic heating and defrosting. Simple controls. Use microwave-safe containers only.',
      maintenance: 'Weekly: Wipe interior with damp cloth. Clean turntable.',
      installationTips: 'Countertop use. Keep 4 inches ventilation space.',
      safetyTips: 'Never operate empty. Don\'t use metal containers.',
      troubleshooting: [
        'Not heating: Check power, door closure',
        'Turntable not rotating: Check roller ring',
        'Spark inside: Stop immediately'
      ],
      bestFor: 'Basic reheating, defrosting, small families',
      estimatedPowerConsumption: '0.8 units/hour'
    },
    {
      id: 'orient-solo-deluxe',
      name: 'Orient Solo Microwave Deluxe',
      type: 'Solo Microwave',
      capacity: '23L',
      price: 'PKR 17,000 - 21,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Digital Display',
        '6 Power Levels',
        'Express Cook',
        'Auto Defrost',
        'Kitchen Timer',
        'Child Lock',
        'Silver Finish'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Solo Microwave',
        'Power': '850W',
        'Power Levels': '6',
        'Display': 'LED Digital',
        'Timer': '99 minutes',
        'Controls': 'Button + Dial',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '48 x 36 x 29 cm',
        'Weight': '13 kg',
        'Color': 'Silver',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Digital controls for precise cooking. Auto defrost by weight.',
      maintenance: 'Weekly: Clean interior. Wipe control panel.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Child lock for safety.',
      troubleshooting: [
        'Display not working: Check power',
        'Keypad unresponsive: Clean panel'
      ],
      bestFor: 'Daily use, families',
      estimatedPowerConsumption: '0.85 units/hour'
    },
    {
      id: 'orient-solo-premium',
      name: 'Orient Solo Microwave Premium',
      type: 'Solo Microwave',
      capacity: '25L',
      price: 'PKR 20,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Smart Sensor Cooking',
        '10 Auto Programs',
        'LED Display',
        'Child Lock',
        'Eco Mode',
        'Stainless Steel',
        'Keep Warm'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Solo Microwave',
        'Power': '900W',
        'Power Levels': '10',
        'Auto Programs': '10',
        'Sensor': 'Humidity Sensor',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 30cm',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '14 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Sensor cooking automatically adjusts time. Auto programs for common dishes.',
      maintenance: 'Monthly: Deep clean interior.',
      installationTips: 'Countertop use. Level surface.',
      safetyTips: 'Sensor safe.',
      troubleshooting: [
        'Sensor not working: Clean sensor',
        'Error code: Call service'
      ],
      bestFor: 'Tech-savvy users',
      estimatedPowerConsumption: '0.9 units/hour'
    },

    // ---------- CONVECTION MICROWAVE - 3 Models ----------
    {
      id: 'orient-convection-basic',
      name: 'Orient Convection Microwave Basic',
      type: 'Convection Microwave',
      capacity: '28L',
      price: 'PKR 24,000 - 28,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Microwave',
        'Grill Function',
        'Digital Display',
        '8 Auto Programs',
        'Defrost Function',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Convection Microwave',
        'Power': '900W Microwave, 1000W Grill, 1400W Convection',
        'Cooking Modes': '3',
        'Auto Programs': '8',
        'Display': 'LED Digital',
        'Turntable': 'Yes, 30cm',
        'Temperature': '100-200°C',
        'Dimensions': '48 x 35 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Can bake, roast, and grill. Preheat for convection baking.',
      maintenance: 'Weekly: Clean interior after each use.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Use oven mitts - gets hot.',
      troubleshooting: [
        'Not baking evenly: Rotate food',
        'Convection not working: Check mode'
      ],
      bestFor: 'Baking beginners',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'orient-convection-deluxe',
      name: 'Orient Convection Microwave Deluxe',
      type: 'Convection Microwave',
      capacity: '30L',
      price: 'PKR 28,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '12 Auto Programs',
        'Digital Display',
        'Temperature Probe',
        'Child Lock',
        'Stainless Steel',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Convection Microwave',
        'Power': '1000W Microwave, 1100W Grill, 1500W Convection',
        'Auto Programs': '12',
        'Temperature Probe': 'Yes',
        'Temperature': '100-210°C',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 32cm',
        'Dimensions': '50 x 38 x 31 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Temperature probe for perfect cooking. Crisp function.',
      maintenance: 'Monthly: Clean probe.',
      installationTips: 'Countertop use. Stable surface.',
      safetyTips: 'Probe gets hot.',
      troubleshooting: [
        'Probe not reading: Check connection',
        'Error: Call service'
      ],
      bestFor: 'Serious bakers',
      estimatedPowerConsumption: '1.3 units/hour'
    },
    {
      id: 'orient-convection-premium',
      name: 'Orient Convection Microwave Premium',
      type: 'Convection Microwave',
      capacity: '32L',
      price: 'PKR 34,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '15 Auto Programs',
        'Touch Controls',
        'Recipe Book',
        'Keep Warm',
        'Ceramic Interior',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '32 Liters',
        'Type': 'Convection Microwave',
        'Power': '1100W Microwave, 1200W Grill, 1600W Convection',
        'Auto Programs': '15',
        'Controls': 'Touch',
        'Temperature': '100-220°C',
        'Interior': 'Ceramic Enamel',
        'Turntable': 'Yes, 34cm',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '18 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Touch controls. Ceramic interior easy clean.',
      maintenance: 'Monthly: Clean with soft cloth.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Touch screen lock.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium kitchens',
      estimatedPowerConsumption: '1.4 units/hour'
    },

    // ---------- GRILL MICROWAVE - 3 Models ----------
    {
      id: 'orient-grill-basic',
      name: 'Orient Grill Microwave Basic',
      type: 'Grill Microwave',
      capacity: '23L',
      price: 'PKR 20,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Grill Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Timer',
        'Quartz Grill',
        'Compact'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Grill Microwave',
        'Power': '800W Microwave, 900W Grill',
        'Functions': 'Microwave + Grill',
        'Controls': 'Digital',
        'Grill Type': 'Quartz',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '46 x 36 x 28 cm',
        'Weight': '14 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Grill function for crispy results. Use grill rack.',
      maintenance: 'Weekly: Clean grill plate.',
      installationTips: 'Countertop use.',
      safetyTips: 'Grill gets very hot.',
      troubleshooting: [
        'Grill not working: Check mode',
        'Food burning: Reduce time'
      ],
      bestFor: 'Snacks, grilling',
      estimatedPowerConsumption: '1.0 units/hour'
    },
    {
      id: 'orient-grill-deluxe',
      name: 'Orient Grill Microwave Deluxe',
      type: 'Grill Microwave',
      capacity: '25L',
      price: 'PKR 24,000 - 29,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Combination Grill',
        '10 Auto Programs',
        'Digital Display',
        'Child Lock',
        'Stainless Steel',
        'Keep Warm',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Grill Microwave',
        'Power': '900W Microwave, 1000W Grill',
        'Combination': 'Yes',
        'Auto Programs': '10',
        'Display': 'LED',
        'Grill Type': 'Quartz',
        'Dimensions': '48 x 37 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Combination mode for even cooking.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Countertop use.',
      safetyTips: 'Hot surface.',
      troubleshooting: [
        'Combination not working: Check settings',
        'Uneven grilling: Turn food'
      ],
      bestFor: 'Regular grilling',
      estimatedPowerConsumption: '1.1 units/hour'
    },
    {
      id: 'orient-grill-premium',
      name: 'Orient Grill Microwave Premium',
      type: 'Grill Microwave',
      capacity: '28L',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Dual Grill',
        '12 Auto Programs',
        'Touch Controls',
        'Recipe Assistant',
        'Child Lock',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Grill Microwave',
        'Power': '1000W Microwave, 1100W Grill',
        'Grill Type': 'Dual Quartz',
        'Auto Programs': '12',
        'Controls': 'Touch',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Dual grill for even browning.',
      maintenance: 'Monthly: Clean gently.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dual grill very hot.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium grilling',
      estimatedPowerConsumption: '1.2 units/hour'
    },

    // ---------- INVERTER MICROWAVE - 3 Models ----------
    {
      id: 'orient-inverter-basic',
      name: 'Orient Inverter Microwave Basic',
      type: 'Inverter Microwave',
      capacity: '25L',
      price: 'PKR 28,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Even Heating',
        'Sensor Cooking',
        '8 Auto Programs',
        'Child Lock',
        'Digital Display',
        'Energy Saving'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Inverter Microwave',
        'Power': '900W Inverter',
        'Technology': 'Inverter',
        'Sensors': 'Humidity',
        'Auto Programs': '8',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Dimensions': '48 x 36 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Silver',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Inverter provides consistent power. Even heating.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Countertop use.',
      safetyTips: 'Even heating prevents hot spots.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Error: Call service'
      ],
      bestFor: 'Delicate cooking',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'orient-inverter-deluxe',
      name: 'Orient Inverter Microwave Deluxe',
      type: 'Inverter Microwave',
      capacity: '28L',
      price: 'PKR 34,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Convection + Grill',
        '15 Auto Programs',
        'Sensor Cook',
        'Child Lock',
        'Keep Warm',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1000W Inverter',
        'Convection': '1500W',
        'Grill': '1100W',
        'Auto Programs': '15',
        'Sensors': 'Yes',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'All-in-one: Inverter + Convection + Grill.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Stable surface.',
      safetyTips: 'Multiple functions.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Complete cooking',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'orient-inverter-premium',
      name: 'Orient Inverter Microwave Premium',
      type: 'Inverter Microwave',
      capacity: '30L',
      price: 'PKR 40,000 - 47,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        'Touch Screen',
        '20 Auto Programs',
        'Recipe Assistant',
        'Steam Clean',
        'Child Lock',
        'WiFi Ready'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Auto Programs': '20',
        'Controls': 'Touch Screen',
        'Smart': 'WiFi',
        'Interior': 'Ceramic',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '19 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Smart features. Steam clean.',
      maintenance: 'Monthly: Steam clean cycle.',
      installationTips: 'Professional installation.',
      safetyTips: 'Smart features.',
      troubleshooting: [
        'WiFi not connecting: Reset',
        'Touch screen issues: Restart'
      ],
      bestFor: 'Smart kitchen',
      estimatedPowerConsumption: '1.3 units/hour'
    },

    // ---------- BUILT-IN MICROWAVE - 3 Models ----------
    {
      id: 'orient-builtin-basic',
      name: 'Orient Built-in Microwave Basic',
      type: 'Built-in Microwave',
      capacity: '23L',
      price: 'PKR 32,000 - 37,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Solo Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Flush Fit',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Built-in Solo',
        'Power': '900W',
        'Installation': 'Built-in',
        'Controls': 'Digital',
        'Dimensions': '60 x 38 x 28 cm',
        'Cutout': '56 x 36 x 26 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built into kitchen cabinets. Professional installation required.',
      maintenance: 'Monthly: Clean exterior.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not working: Check power',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'orient-builtin-deluxe',
      name: 'Orient Built-in Microwave Deluxe',
      type: 'Built-in Microwave',
      capacity: '25L',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Convection + Grill',
        'Touch Controls',
        '12 Auto Programs',
        'Child Lock',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Built-in Convection',
        'Power': '1000W Microwave, 1100W Grill, 1500W Convection',
        'Installation': 'Built-in',
        'Controls': 'Touch',
        'Auto Programs': '12',
        'Dimensions': '60 x 40 x 30 cm',
        'Cutout': '56 x 38 x 28 cm',
        'Weight': '19 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built-in convection microwave.',
      maintenance: 'Monthly: Clean interior.',
      installationTips: 'Professional installation.',
      safetyTips: 'Professional installation.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, versatile',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'orient-builtin-premium',
      name: 'Orient Built-in Microwave Premium',
      type: 'Built-in Microwave',
      capacity: '28L',
      price: 'PKR 48,000 - 55,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Inverter Technology',
        'Convection + Grill',
        'Touch Screen',
        '18 Auto Programs',
        'Steam Clean',
        'Black Glass'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Built-in Inverter',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Installation': 'Built-in',
        'Controls': 'Touch Screen',
        'Auto Programs': '18',
        'Dimensions': '60 x 42 x 32 cm',
        'Cutout': '56 x 40 x 30 cm',
        'Weight': '22 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Premium built-in microwave with inverter.',
      maintenance: 'Monthly: Steam clean.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Touch screen not working: Clean',
        'Error: Call service'
      ],
      bestFor: 'Luxury kitchens',
      estimatedPowerConsumption: '1.3 units/hour'
    }
  ]
},
      {
  id: 'pel-microwave',
  name: 'PEL',
  models: [
    // ---------- SOLO MICROWAVE - 3 Models ----------
    {
      id: 'pel-solo-basic',
      name: 'PEL Solo Microwave Basic',
      type: 'Solo Microwave',
      capacity: '20L',
      price: 'PKR 13,000 - 16,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Simple Operation',
        '5 Power Levels',
        'Timer Function',
        'Budget Friendly',
        'Defrost Function',
        'Easy Clean Interior',
        'Rotary Controls'
      ],
      specifications: {
        'Capacity': '20 Liters',
        'Type': 'Solo Microwave',
        'Power': '750W',
        'Power Levels': '5',
        'Timer': '30 minutes',
        'Controls': 'Rotary Knobs',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 24cm',
        'Dimensions': '44 x 34 x 27 cm',
        'Weight': '11 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Basic heating and defrosting. Simple controls. Use microwave-safe containers only.',
      maintenance: 'Weekly: Wipe interior with damp cloth. Clean turntable.',
      installationTips: 'Countertop use. Keep 4 inches ventilation space.',
      safetyTips: 'Never operate empty. Don\'t use metal containers.',
      troubleshooting: [
        'Not heating: Check power, door closure',
        'Turntable not rotating: Check roller ring',
        'Spark inside: Stop immediately'
      ],
      bestFor: 'Basic reheating, defrosting, small families',
      estimatedPowerConsumption: '0.75 units/hour'
    },
    {
      id: 'pel-solo-deluxe',
      name: 'PEL Solo Microwave Deluxe',
      type: 'Solo Microwave',
      capacity: '23L',
      price: 'PKR 16,000 - 20,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Digital Display',
        '6 Power Levels',
        'Express Cook',
        'Auto Defrost',
        'Kitchen Timer',
        'Child Lock',
        'Black Finish'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Solo Microwave',
        'Power': '800W',
        'Power Levels': '6',
        'Display': 'LED Digital',
        'Timer': '99 minutes',
        'Controls': 'Button + Dial',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '47 x 35 x 28 cm',
        'Weight': '12 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Digital controls for precise cooking. Auto defrost by weight.',
      maintenance: 'Weekly: Clean interior. Wipe control panel.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Child lock for safety.',
      troubleshooting: [
        'Display not working: Check power',
        'Keypad unresponsive: Clean panel'
      ],
      bestFor: 'Daily use, families',
      estimatedPowerConsumption: '0.8 units/hour'
    },
    {
      id: 'pel-solo-premium',
      name: 'PEL Solo Microwave Premium',
      type: 'Solo Microwave',
      capacity: '25L',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Smart Sensor Cooking',
        '8 Auto Programs',
        'LED Display',
        'Child Lock',
        'Eco Mode',
        'Stainless Steel',
        'Keep Warm'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Solo Microwave',
        'Power': '850W',
        'Power Levels': '8',
        'Auto Programs': '8',
        'Sensor': 'Humidity Sensor',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 30cm',
        'Dimensions': '49 x 37 x 29 cm',
        'Weight': '13 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Sensor cooking automatically adjusts time. Auto programs for common dishes.',
      maintenance: 'Monthly: Deep clean interior.',
      installationTips: 'Countertop use. Level surface.',
      safetyTips: 'Sensor safe.',
      troubleshooting: [
        'Sensor not working: Clean sensor',
        'Error code: Call service'
      ],
      bestFor: 'Tech-savvy users',
      estimatedPowerConsumption: '0.85 units/hour'
    },

    // ---------- CONVECTION MICROWAVE - 3 Models ----------
    {
      id: 'pel-convection-basic',
      name: 'PEL Convection Microwave Basic',
      type: 'Convection Microwave',
      capacity: '28L',
      price: 'PKR 23,000 - 27,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Microwave',
        'Grill Function',
        'Digital Display',
        '8 Auto Programs',
        'Defrost Function',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Convection Microwave',
        'Power': '850W Microwave, 1000W Grill, 1400W Convection',
        'Cooking Modes': '3',
        'Auto Programs': '8',
        'Display': 'LED Digital',
        'Turntable': 'Yes, 30cm',
        'Temperature': '100-200°C',
        'Dimensions': '48 x 35 x 30 cm',
        'Weight': '15 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Can bake, roast, and grill. Preheat for convection baking.',
      maintenance: 'Weekly: Clean interior after each use.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Use oven mitts - gets hot.',
      troubleshooting: [
        'Not baking evenly: Rotate food',
        'Convection not working: Check mode'
      ],
      bestFor: 'Baking beginners',
      estimatedPowerConsumption: '1.1 units/hour'
    },
    {
      id: 'pel-convection-deluxe',
      name: 'PEL Convection Microwave Deluxe',
      type: 'Convection Microwave',
      capacity: '30L',
      price: 'PKR 27,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '12 Auto Programs',
        'Digital Display',
        'Temperature Probe',
        'Child Lock',
        'Stainless Steel',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Convection Microwave',
        'Power': '900W Microwave, 1100W Grill, 1500W Convection',
        'Auto Programs': '12',
        'Temperature Probe': 'Yes',
        'Temperature': '100-210°C',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 32cm',
        'Dimensions': '50 x 38 x 31 cm',
        'Weight': '16 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Temperature probe for perfect cooking. Crisp function.',
      maintenance: 'Monthly: Clean probe.',
      installationTips: 'Countertop use. Stable surface.',
      safetyTips: 'Probe gets hot.',
      troubleshooting: [
        'Probe not reading: Check connection',
        'Error: Call service'
      ],
      bestFor: 'Serious bakers',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'pel-convection-premium',
      name: 'PEL Convection Microwave Premium',
      type: 'Convection Microwave',
      capacity: '32L',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '15 Auto Programs',
        'Touch Controls',
        'Recipe Book',
        'Keep Warm',
        'Ceramic Interior',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '32 Liters',
        'Type': 'Convection Microwave',
        'Power': '1000W Microwave, 1200W Grill, 1600W Convection',
        'Auto Programs': '15',
        'Controls': 'Touch',
        'Temperature': '100-220°C',
        'Interior': 'Ceramic Enamel',
        'Turntable': 'Yes, 34cm',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '17 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Touch controls. Ceramic interior easy clean.',
      maintenance: 'Monthly: Clean with soft cloth.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Touch screen lock.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium kitchens',
      estimatedPowerConsumption: '1.3 units/hour'
    },

    // ---------- GRILL MICROWAVE - 3 Models ----------
    {
      id: 'pel-grill-master',
      name: 'PEL Grill Master',
      type: 'Grill Microwave',
      capacity: '25L',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Grill Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Multiple Programs',
        'Quartz Grill',
        'Black Finish'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Grill Microwave',
        'Power': '800W Microwave, 1000W Grill',
        'Functions': 'Microwave + Grill',
        'Controls': 'Digital',
        'Grill Type': 'Quartz',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '46 x 36 x 29 cm',
        'Weight': '14 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Can grill and microwave. Use grill rack provided. Perfect for sandwiches, pizza, and snacks.',
      maintenance: 'Weekly: Clean grill plate. Remove grease. Wipe interior.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Grill gets very hot. Use oven mitts.',
      troubleshooting: [
        'Grill not working: Check mode',
        'Food burning: Reduce time',
        'Error: Call service'
      ],
      bestFor: 'Snacks, grilling lovers',
      estimatedPowerConsumption: '1.0 units/hour'
    },
    {
      id: 'pel-grill-deluxe',
      name: 'PEL Grill Microwave Deluxe',
      type: 'Grill Microwave',
      capacity: '27L',
      price: 'PKR 25,000 - 30,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Combination Grill',
        '10 Auto Programs',
        'Digital Display',
        'Child Lock',
        'Stainless Steel',
        'Keep Warm',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '27 Liters',
        'Type': 'Grill Microwave',
        'Power': '900W Microwave, 1000W Grill',
        'Combination': 'Yes',
        'Auto Programs': '10',
        'Display': 'LED',
        'Grill Type': 'Quartz',
        'Dimensions': '48 x 37 x 30 cm',
        'Weight': '15 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Combination mode for even cooking. Crisp function for golden results.',
      maintenance: 'Monthly: Deep clean grill element.',
      installationTips: 'Countertop use. Level surface.',
      safetyTips: 'Hot surface. Keep away.',
      troubleshooting: [
        'Combination not working: Check settings',
        'Uneven grilling: Turn food'
      ],
      bestFor: 'Regular grilling, family snacks',
      estimatedPowerConsumption: '1.1 units/hour'
    },
    {
      id: 'pel-grill-premium',
      name: 'PEL Grill Microwave Premium',
      type: 'Grill Microwave',
      capacity: '30L',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Dual Grill System',
        '12 Auto Programs',
        'Touch Controls',
        'Recipe Assistant',
        'Child Lock',
        'Ceramic Interior',
        'Keep Warm'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Grill Microwave',
        'Power': '1000W Microwave, 1100W Grill',
        'Grill Type': 'Dual Quartz',
        'Auto Programs': '12',
        'Controls': 'Touch',
        'Interior': 'Ceramic Enamel',
        'Dimensions': '50 x 38 x 31 cm',
        'Weight': '16 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Dual grill for even browning. Ceramic interior easy clean.',
      maintenance: 'Monthly: Clean with soft cloth.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Dual grill gets very hot.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium grilling, entertaining',
      estimatedPowerConsumption: '1.2 units/hour'
    },

    // ---------- INVERTER MICROWAVE - 3 Models ----------
    {
      id: 'pel-inverter-basic',
      name: 'PEL Inverter Microwave Basic',
      type: 'Inverter Microwave',
      capacity: '25L',
      price: 'PKR 27,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Even Heating',
        'Sensor Cooking',
        '8 Auto Programs',
        'Child Lock',
        'Digital Display',
        'Energy Saving'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Inverter Microwave',
        'Power': '900W Inverter',
        'Technology': 'Inverter',
        'Sensors': 'Humidity',
        'Auto Programs': '8',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Dimensions': '48 x 36 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Silver',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Inverter provides consistent power. Even heating.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Countertop use.',
      safetyTips: 'Even heating prevents hot spots.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Error: Call service'
      ],
      bestFor: 'Delicate cooking',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'pel-inverter-deluxe',
      name: 'PEL Inverter Microwave Deluxe',
      type: 'Inverter Microwave',
      capacity: '28L',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Convection + Grill',
        '12 Auto Programs',
        'Sensor Cook',
        'Child Lock',
        'Keep Warm',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1000W Inverter',
        'Convection': '1500W',
        'Grill': '1100W',
        'Auto Programs': '12',
        'Sensors': 'Yes',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'All-in-one: Inverter + Convection + Grill.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Stable surface.',
      safetyTips: 'Multiple functions.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Complete cooking',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'pel-inverter-premium',
      name: 'PEL Inverter Microwave Premium',
      type: 'Inverter Microwave',
      capacity: '30L',
      price: 'PKR 38,000 - 45,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        'Touch Screen',
        '18 Auto Programs',
        'Recipe Assistant',
        'Steam Clean',
        'Child Lock',
        'WiFi Ready'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Auto Programs': '18',
        'Controls': 'Touch Screen',
        'Smart': 'WiFi',
        'Interior': 'Ceramic',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '18 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Smart features. Steam clean.',
      maintenance: 'Monthly: Steam clean cycle.',
      installationTips: 'Professional installation.',
      safetyTips: 'Smart features.',
      troubleshooting: [
        'WiFi not connecting: Reset',
        'Touch screen issues: Restart'
      ],
      bestFor: 'Smart kitchen',
      estimatedPowerConsumption: '1.3 units/hour'
    },

    // ---------- BUILT-IN MICROWAVE - 3 Models ----------
    {
      id: 'pel-builtin-basic',
      name: 'PEL Built-in Microwave Basic',
      type: 'Built-in Microwave',
      capacity: '23L',
      price: 'PKR 30,000 - 35,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Solo Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Flush Fit',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Built-in Solo',
        'Power': '900W',
        'Installation': 'Built-in',
        'Controls': 'Digital',
        'Dimensions': '60 x 38 x 28 cm',
        'Cutout': '56 x 36 x 26 cm',
        'Weight': '16 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built into kitchen cabinets. Professional installation required.',
      maintenance: 'Monthly: Clean exterior.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not working: Check power',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'pel-builtin-deluxe',
      name: 'PEL Built-in Microwave Deluxe',
      type: 'Built-in Microwave',
      capacity: '25L',
      price: 'PKR 36,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Convection + Grill',
        'Touch Controls',
        '12 Auto Programs',
        'Child Lock',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Built-in Convection',
        'Power': '1000W Microwave, 1100W Grill, 1500W Convection',
        'Installation': 'Built-in',
        'Controls': 'Touch',
        'Auto Programs': '12',
        'Dimensions': '60 x 40 x 30 cm',
        'Cutout': '56 x 38 x 28 cm',
        'Weight': '18 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built-in convection microwave.',
      maintenance: 'Monthly: Clean interior.',
      installationTips: 'Professional installation.',
      safetyTips: 'Professional installation.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, versatile',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'pel-builtin-premium',
      name: 'PEL Built-in Microwave Premium',
      type: 'Built-in Microwave',
      capacity: '28L',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Inverter Technology',
        'Convection + Grill',
        'Touch Screen',
        '15 Auto Programs',
        'Steam Clean',
        'Black Glass'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Built-in Inverter',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Installation': 'Built-in',
        'Controls': 'Touch Screen',
        'Auto Programs': '15',
        'Dimensions': '60 x 42 x 32 cm',
        'Cutout': '56 x 40 x 30 cm',
        'Weight': '21 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Premium built-in microwave with inverter.',
      maintenance: 'Monthly: Steam clean.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Touch screen not working: Clean',
        'Error: Call service'
      ],
      bestFor: 'Luxury kitchens',
      estimatedPowerConsumption: '1.3 units/hour'
    }
  ]
},
{
  id: 'haier-microwave',
  name: 'Haier',
  models: [
    // ---------- SOLO MICROWAVE - 3 Models ----------
    {
      id: 'haier-solo-basic',
      name: 'Haier Solo Microwave Basic',
      type: 'Solo Microwave',
      capacity: '20L',
      price: 'PKR 15,000 - 18,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Simple Operation',
        '5 Power Levels',
        'Timer Function',
        'Budget Friendly',
        'Defrost Function',
        'Easy Clean Interior',
        'Rotary Controls'
      ],
      specifications: {
        'Capacity': '20 Liters',
        'Type': 'Solo Microwave',
        'Power': '800W',
        'Power Levels': '5',
        'Timer': '30 minutes',
        'Controls': 'Rotary Knobs',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 25cm',
        'Dimensions': '45 x 35 x 28 cm',
        'Weight': '12 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Basic heating and defrosting. Simple controls. Use microwave-safe containers only.',
      maintenance: 'Weekly: Wipe interior with damp cloth. Clean turntable.',
      installationTips: 'Countertop use. Keep 4 inches ventilation space.',
      safetyTips: 'Never operate empty. Don\'t use metal containers.',
      troubleshooting: [
        'Not heating: Check power, door closure',
        'Turntable not rotating: Check roller ring',
        'Spark inside: Stop immediately'
      ],
      bestFor: 'Basic reheating, defrosting, small families',
      estimatedPowerConsumption: '0.8 units/hour'
    },
    {
      id: 'haier-solo-deluxe',
      name: 'Haier Solo Microwave Deluxe',
      type: 'Solo Microwave',
      capacity: '23L',
      price: 'PKR 18,000 - 22,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Digital Display',
        '6 Power Levels',
        'Express Cook',
        'Auto Defrost',
        'Kitchen Timer',
        'Child Lock',
        'Silver Finish'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Solo Microwave',
        'Power': '850W',
        'Power Levels': '6',
        'Display': 'LED Digital',
        'Timer': '99 minutes',
        'Controls': 'Button + Dial',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '48 x 36 x 29 cm',
        'Weight': '13 kg',
        'Color': 'Silver',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Digital controls for precise cooking. Auto defrost by weight.',
      maintenance: 'Weekly: Clean interior. Wipe control panel.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Child lock for safety.',
      troubleshooting: [
        'Display not working: Check power',
        'Keypad unresponsive: Clean panel'
      ],
      bestFor: 'Daily use, families',
      estimatedPowerConsumption: '0.85 units/hour'
    },
    {
      id: 'haier-solo-premium',
      name: 'Haier Solo Microwave Premium',
      type: 'Solo Microwave',
      capacity: '25L',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Smart Sensor Cooking',
        '10 Auto Programs',
        'LED Display',
        'Child Lock',
        'Eco Mode',
        'Stainless Steel',
        'Keep Warm'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Solo Microwave',
        'Power': '900W',
        'Power Levels': '10',
        'Auto Programs': '10',
        'Sensor': 'Humidity Sensor',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 30cm',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '14 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Sensor cooking automatically adjusts time. Auto programs for common dishes.',
      maintenance: 'Monthly: Deep clean interior.',
      installationTips: 'Countertop use. Level surface.',
      safetyTips: 'Sensor safe.',
      troubleshooting: [
        'Sensor not working: Clean sensor',
        'Error code: Call service'
      ],
      bestFor: 'Tech-savvy users',
      estimatedPowerConsumption: '0.9 units/hour'
    },

    // ---------- CONVECTION MICROWAVE - 3 Models ----------
    {
      id: 'haier-convection-basic',
      name: 'Haier Convection Microwave Basic',
      type: 'Convection Microwave',
      capacity: '28L',
      price: 'PKR 26,000 - 30,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Microwave',
        'Grill Function',
        'Digital Display',
        '8 Auto Programs',
        'Defrost Function',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Convection Microwave',
        'Power': '900W Microwave, 1000W Grill, 1400W Convection',
        'Cooking Modes': '3',
        'Auto Programs': '8',
        'Display': 'LED Digital',
        'Turntable': 'Yes, 30cm',
        'Temperature': '100-200°C',
        'Dimensions': '48 x 35 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Can bake, roast, and grill. Preheat for convection baking.',
      maintenance: 'Weekly: Clean interior after each use.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Use oven mitts - gets hot.',
      troubleshooting: [
        'Not baking evenly: Rotate food',
        'Convection not working: Check mode'
      ],
      bestFor: 'Baking beginners',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'haier-convection-deluxe',
      name: 'Haier Convection Microwave Deluxe',
      type: 'Convection Microwave',
      capacity: '30L',
      price: 'PKR 30,000 - 35,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '12 Auto Programs',
        'Digital Display',
        'Temperature Probe',
        'Child Lock',
        'Stainless Steel',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Convection Microwave',
        'Power': '1000W Microwave, 1100W Grill, 1500W Convection',
        'Auto Programs': '12',
        'Temperature Probe': 'Yes',
        'Temperature': '100-210°C',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 32cm',
        'Dimensions': '50 x 38 x 31 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Temperature probe for perfect cooking. Crisp function.',
      maintenance: 'Monthly: Clean probe.',
      installationTips: 'Countertop use. Stable surface.',
      safetyTips: 'Probe gets hot.',
      troubleshooting: [
        'Probe not reading: Check connection',
        'Error: Call service'
      ],
      bestFor: 'Serious bakers',
      estimatedPowerConsumption: '1.3 units/hour'
    },
    {
      id: 'haier-convection-premium',
      name: 'Haier Convection Microwave Premium',
      type: 'Convection Microwave',
      capacity: '32L',
      price: 'PKR 36,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '15 Auto Programs',
        'Touch Controls',
        'Recipe Book',
        'Keep Warm',
        'Ceramic Interior',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '32 Liters',
        'Type': 'Convection Microwave',
        'Power': '1100W Microwave, 1200W Grill, 1600W Convection',
        'Auto Programs': '15',
        'Controls': 'Touch',
        'Temperature': '100-220°C',
        'Interior': 'Ceramic Enamel',
        'Turntable': 'Yes, 34cm',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '18 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Touch controls. Ceramic interior easy clean.',
      maintenance: 'Monthly: Clean with soft cloth.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Touch screen lock.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium kitchens',
      estimatedPowerConsumption: '1.4 units/hour'
    },

    // ---------- GRILL MICROWAVE - 3 Models ----------
    {
      id: 'haier-grill-basic',
      name: 'Haier Grill Microwave Basic',
      type: 'Grill Microwave',
      capacity: '23L',
      price: 'PKR 21,000 - 25,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Grill Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Timer',
        'Quartz Grill',
        'Compact'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Grill Microwave',
        'Power': '800W Microwave, 900W Grill',
        'Functions': 'Microwave + Grill',
        'Controls': 'Digital',
        'Grill Type': 'Quartz',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '46 x 36 x 28 cm',
        'Weight': '14 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Grill function for crispy results. Use grill rack.',
      maintenance: 'Weekly: Clean grill plate.',
      installationTips: 'Countertop use.',
      safetyTips: 'Grill gets very hot.',
      troubleshooting: [
        'Grill not working: Check mode',
        'Food burning: Reduce time'
      ],
      bestFor: 'Snacks, grilling',
      estimatedPowerConsumption: '1.0 units/hour'
    },
    {
      id: 'haier-grill-deluxe',
      name: 'Haier Grill Microwave Deluxe',
      type: 'Grill Microwave',
      capacity: '25L',
      price: 'PKR 24,000 - 29,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Combination Grill',
        '10 Auto Programs',
        'Digital Display',
        'Child Lock',
        'Stainless Steel',
        'Keep Warm',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Grill Microwave',
        'Power': '900W Microwave, 1000W Grill',
        'Combination': 'Yes',
        'Auto Programs': '10',
        'Display': 'LED',
        'Grill Type': 'Quartz',
        'Dimensions': '48 x 37 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Combination mode for even cooking.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Countertop use.',
      safetyTips: 'Hot surface.',
      troubleshooting: [
        'Combination not working: Check settings',
        'Uneven grilling: Turn food'
      ],
      bestFor: 'Regular grilling',
      estimatedPowerConsumption: '1.1 units/hour'
    },
    {
      id: 'haier-grill-premium',
      name: 'Haier Grill Microwave Premium',
      type: 'Grill Microwave',
      capacity: '28L',
      price: 'PKR 29,000 - 35,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Dual Grill',
        '12 Auto Programs',
        'Touch Controls',
        'Recipe Assistant',
        'Child Lock',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Grill Microwave',
        'Power': '1000W Microwave, 1100W Grill',
        'Grill Type': 'Dual Quartz',
        'Auto Programs': '12',
        'Controls': 'Touch',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Dual grill for even browning.',
      maintenance: 'Monthly: Clean gently.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dual grill very hot.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium grilling',
      estimatedPowerConsumption: '1.2 units/hour'
    },

    // ---------- INVERTER MICROWAVE - 3 Models ----------
    {
      id: 'haier-inverter',
      name: 'Haier Inverter Microwave',
      type: 'Inverter Microwave',
      capacity: '32L',
      price: 'PKR 35,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Even Heating',
        'Sensor Cooking',
        'Steam Function',
        'Smart Controls',
        'Child Lock',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '32 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1000W Inverter',
        'Technology': 'Inverter for even power',
        'Sensors': 'Auto humidity sensor',
        'Steam': 'Yes',
        'Controls': 'Smart',
        'Interior': 'Ceramic Enamel',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '22 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Inverter provides consistent power. Sensor cooking automatic. Steam function for healthy cooking.',
      maintenance: 'Monthly: Clean steam outlet. Wipe sensors gently.',
      installationTips: 'Requires more space. Premium features.',
      safetyTips: 'Perfect for delicate foods. Even cooking.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Steam not working: Check water',
        'Error: Call service'
      ],
      bestFor: 'Delicate cooking, healthy meals',
      estimatedPowerConsumption: '1.0 units/hour'
    },
    {
      id: 'haier-inverter-deluxe',
      name: 'Haier Inverter Microwave Deluxe',
      type: 'Inverter Microwave',
      capacity: '28L',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Convection + Grill',
        '15 Auto Programs',
        'Sensor Cook',
        'Child Lock',
        'Keep Warm',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1000W Inverter',
        'Convection': '1500W',
        'Grill': '1100W',
        'Auto Programs': '15',
        'Sensors': 'Yes',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'All-in-one: Inverter + Convection + Grill.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Stable surface.',
      safetyTips: 'Multiple functions.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Complete cooking',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'haier-inverter-premium',
      name: 'Haier Inverter Microwave Premium',
      type: 'Inverter Microwave',
      capacity: '30L',
      price: 'PKR 42,000 - 48,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        'Touch Screen',
        '20 Auto Programs',
        'Recipe Assistant',
        'Steam Clean',
        'Child Lock',
        'WiFi Ready'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Auto Programs': '20',
        'Controls': 'Touch Screen',
        'Smart': 'WiFi',
        'Interior': 'Ceramic',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '19 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Smart features. Steam clean.',
      maintenance: 'Monthly: Steam clean cycle.',
      installationTips: 'Professional installation.',
      safetyTips: 'Smart features.',
      troubleshooting: [
        'WiFi not connecting: Reset',
        'Touch screen issues: Restart'
      ],
      bestFor: 'Smart kitchen',
      estimatedPowerConsumption: '1.3 units/hour'
    },

    // ---------- BUILT-IN MICROWAVE - 3 Models ----------
    {
      id: 'haier-builtin-basic',
      name: 'Haier Built-in Microwave Basic',
      type: 'Built-in Microwave',
      capacity: '23L',
      price: 'PKR 34,000 - 39,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Solo Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Flush Fit',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Built-in Solo',
        'Power': '900W',
        'Installation': 'Built-in',
        'Controls': 'Digital',
        'Dimensions': '60 x 38 x 28 cm',
        'Cutout': '56 x 36 x 26 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built into kitchen cabinets. Professional installation required.',
      maintenance: 'Monthly: Clean exterior.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not working: Check power',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'haier-builtin-deluxe',
      name: 'Haier Built-in Microwave Deluxe',
      type: 'Built-in Microwave',
      capacity: '25L',
      price: 'PKR 40,000 - 46,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Convection + Grill',
        'Touch Controls',
        '12 Auto Programs',
        'Child Lock',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Built-in Convection',
        'Power': '1000W Microwave, 1100W Grill, 1500W Convection',
        'Installation': 'Built-in',
        'Controls': 'Touch',
        'Auto Programs': '12',
        'Dimensions': '60 x 40 x 30 cm',
        'Cutout': '56 x 38 x 28 cm',
        'Weight': '19 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built-in convection microwave.',
      maintenance: 'Monthly: Clean interior.',
      installationTips: 'Professional installation.',
      safetyTips: 'Professional installation.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, versatile',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'haier-builtin-premium',
      name: 'Haier Built-in Microwave Premium',
      type: 'Built-in Microwave',
      capacity: '28L',
      price: 'PKR 50,000 - 58,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Inverter Technology',
        'Convection + Grill',
        'Touch Screen',
        '18 Auto Programs',
        'Steam Clean',
        'Black Glass'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Built-in Inverter',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Installation': 'Built-in',
        'Controls': 'Touch Screen',
        'Auto Programs': '18',
        'Dimensions': '60 x 42 x 32 cm',
        'Cutout': '56 x 40 x 30 cm',
        'Weight': '22 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Premium built-in microwave with inverter.',
      maintenance: 'Monthly: Steam clean.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Touch screen not working: Clean',
        'Error: Call service'
      ],
      bestFor: 'Luxury kitchens',
      estimatedPowerConsumption: '1.3 units/hour'
    }
  ]
},
     {
  id: 'lg-microwave',
  name: 'LG',
  models: [
    // ---------- SOLO MICROWAVE - 3 Models ----------
    {
      id: 'lg-solo-basic',
      name: 'LG Solo Microwave Basic',
      type: 'Solo Microwave',
      capacity: '20L',
      price: 'PKR 18,000 - 22,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Simple Operation',
        '5 Power Levels',
        'Timer Function',
        'Easy Clean Interior',
        'Defrost Function',
        'Rotary Controls',
        'LG Quality'
      ],
      specifications: {
        'Capacity': '20 Liters',
        'Type': 'Solo Microwave',
        'Power': '800W',
        'Power Levels': '5',
        'Timer': '30 minutes',
        'Controls': 'Rotary Knobs',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 25cm',
        'Dimensions': '45 x 35 x 28 cm',
        'Weight': '12 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Basic heating and defrosting. Simple controls. Use microwave-safe containers only.',
      maintenance: 'Weekly: Wipe interior with damp cloth. Clean turntable.',
      installationTips: 'Countertop use. Keep 4 inches ventilation space.',
      safetyTips: 'Never operate empty. Don\'t use metal containers.',
      troubleshooting: [
        'Not heating: Check power, door closure',
        'Turntable not rotating: Check roller ring',
        'Spark inside: Stop immediately'
      ],
      bestFor: 'Basic reheating, defrosting, small families',
      estimatedPowerConsumption: '0.8 units/hour'
    },
    {
      id: 'lg-solo-deluxe',
      name: 'LG Solo Microwave Deluxe',
      type: 'Solo Microwave',
      capacity: '23L',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Digital Display',
        '6 Power Levels',
        'Express Cook',
        'Auto Defrost',
        'Kitchen Timer',
        'Child Lock',
        'Smart Inverter'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Solo Microwave',
        'Power': '850W',
        'Power Levels': '6',
        'Display': 'LED Digital',
        'Timer': '99 minutes',
        'Controls': 'Button + Dial',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '48 x 36 x 29 cm',
        'Weight': '13 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Digital controls for precise cooking. Auto defrost by weight.',
      maintenance: 'Weekly: Clean interior. Wipe control panel.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Child lock for safety.',
      troubleshooting: [
        'Display not working: Check power',
        'Keypad unresponsive: Clean panel'
      ],
      bestFor: 'Daily use, families',
      estimatedPowerConsumption: '0.85 units/hour'
    },
    {
      id: 'lg-solo-premium',
      name: 'LG Solo Microwave Premium',
      type: 'Solo Microwave',
      capacity: '25L',
      price: 'PKR 26,000 - 31,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        '10 Auto Programs',
        'LED Display',
        'Child Lock',
        'Eco Mode',
        'Stainless Steel',
        'Keep Warm'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Solo Microwave',
        'Power': '900W Inverter',
        'Power Levels': '10',
        'Auto Programs': '10',
        'Sensor': 'Yes',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 30cm',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '14 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Inverter technology for even heating. Auto programs for common dishes.',
      maintenance: 'Monthly: Deep clean interior.',
      installationTips: 'Countertop use. Level surface.',
      safetyTips: 'Inverter safe.',
      troubleshooting: [
        'Sensor not working: Clean sensor',
        'Error code: Call service'
      ],
      bestFor: 'Tech-savvy users',
      estimatedPowerConsumption: '0.9 units/hour'
    },

    // ---------- CONVECTION MICROWAVE - 3 Models ----------
    {
      id: 'lg-convection-basic',
      name: 'LG Convection Microwave Basic',
      type: 'Convection Microwave',
      capacity: '28L',
      price: 'PKR 30,000 - 35,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Microwave',
        'Grill Function',
        'Digital Display',
        '8 Auto Programs',
        'Defrost Function',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Convection Microwave',
        'Power': '900W Microwave, 1000W Grill, 1400W Convection',
        'Cooking Modes': '3',
        'Auto Programs': '8',
        'Display': 'LED Digital',
        'Turntable': 'Yes, 30cm',
        'Temperature': '100-200°C',
        'Dimensions': '48 x 35 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Can bake, roast, and grill. Preheat for convection baking.',
      maintenance: 'Weekly: Clean interior after each use.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Use oven mitts - gets hot.',
      troubleshooting: [
        'Not baking evenly: Rotate food',
        'Convection not working: Check mode'
      ],
      bestFor: 'Baking beginners',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'lg-convection-deluxe',
      name: 'LG Convection Microwave Deluxe',
      type: 'Convection Microwave',
      capacity: '32L',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        'True Convection',
        '15 Auto Programs',
        'Temperature Probe',
        'Child Lock',
        'Stainless Steel',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '32 Liters',
        'Type': 'Convection Microwave',
        'Power': '1000W Inverter',
        'Convection': 'True Convection with fan',
        'Auto Programs': '15',
        'Temperature Probe': 'Yes',
        'Temperature': '100-220°C',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 32cm',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '18 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'True convection for even baking. Inverter technology.',
      maintenance: 'Monthly: Clean probe. Deep clean interior.',
      installationTips: 'Countertop use. Stable surface.',
      safetyTips: 'Probe gets hot.',
      troubleshooting: [
        'Probe not reading: Check connection',
        'Error: Call service'
      ],
      bestFor: 'Serious bakers',
      estimatedPowerConsumption: '1.3 units/hour'
    },
    {
      id: 'lg-neochef',
      name: 'LG NeoChef',
      type: 'Convection Microwave',
      capacity: '30L',
      price: 'PKR 45,000 - 50,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        'True Convection',
        'EasyClean Interior',
        'Auto Cook',
        'WiFi Connectivity',
        'Touch Controls',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Convection Microwave',
        'Power': '1000W Smart Inverter',
        'Convection': 'True Convection with fan',
        'Connectivity': 'SmartThinQ WiFi',
        'Auto Programs': '20',
        'Controls': 'Touch Screen',
        'Interior': 'EasyClean Enamel',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '20 kg',
        'Color': 'Black Mirror',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Smart features via app. True convection for baking. EasyClean interior - just wipe.',
      maintenance: 'Monthly: Clean with soft cloth. Update app.',
      installationTips: 'Countertop use. Strong WiFi needed.',
      safetyTips: 'Smart features for safety.',
      troubleshooting: [
        'WiFi not connecting: Reset router',
        'App not working: Update app',
        'Error: Call service'
      ],
      bestFor: 'Tech-savvy families, smart home users',
      estimatedPowerConsumption: '1.2 units/hour'
    },

    // ---------- GRILL MICROWAVE - 3 Models ----------
    {
      id: 'lg-grill-basic',
      name: 'LG Grill Microwave Basic',
      type: 'Grill Microwave',
      capacity: '23L',
      price: 'PKR 25,000 - 29,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Grill Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Timer',
        'Quartz Grill',
        'Compact'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Grill Microwave',
        'Power': '800W Microwave, 900W Grill',
        'Functions': 'Microwave + Grill',
        'Controls': 'Digital',
        'Grill Type': 'Quartz',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '46 x 36 x 28 cm',
        'Weight': '14 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Grill function for crispy results. Use grill rack.',
      maintenance: 'Weekly: Clean grill plate.',
      installationTips: 'Countertop use.',
      safetyTips: 'Grill gets very hot.',
      troubleshooting: [
        'Grill not working: Check mode',
        'Food burning: Reduce time'
      ],
      bestFor: 'Snacks, grilling',
      estimatedPowerConsumption: '1.0 units/hour'
    },
    {
      id: 'lg-grill-deluxe',
      name: 'LG Grill Microwave Deluxe',
      type: 'Grill Microwave',
      capacity: '25L',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Combination Grill',
        '10 Auto Programs',
        'Digital Display',
        'Child Lock',
        'Stainless Steel',
        'Keep Warm',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Grill Microwave',
        'Power': '900W Microwave, 1000W Grill',
        'Combination': 'Yes',
        'Auto Programs': '10',
        'Display': 'LED',
        'Grill Type': 'Quartz',
        'Dimensions': '48 x 37 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Combination mode for even cooking.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Countertop use.',
      safetyTips: 'Hot surface.',
      troubleshooting: [
        'Combination not working: Check settings',
        'Uneven grilling: Turn food'
      ],
      bestFor: 'Regular grilling',
      estimatedPowerConsumption: '1.1 units/hour'
    },
    {
      id: 'lg-grill-premium',
      name: 'LG Grill Microwave Premium',
      type: 'Grill Microwave',
      capacity: '28L',
      price: 'PKR 34,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Dual Grill',
        'Smart Inverter',
        '12 Auto Programs',
        'Touch Controls',
        'Recipe Assistant',
        'Child Lock',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Grill Microwave',
        'Power': '1000W Inverter',
        'Grill Type': 'Dual Quartz',
        'Auto Programs': '12',
        'Controls': 'Touch',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Dual grill for even browning. Inverter technology.',
      maintenance: 'Monthly: Clean gently.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dual grill very hot.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium grilling',
      estimatedPowerConsumption: '1.2 units/hour'
    },

    // ---------- INVERTER MICROWAVE - 3 Models ----------
    {
      id: 'lg-inverter-basic',
      name: 'LG Inverter Microwave Basic',
      type: 'Inverter Microwave',
      capacity: '25L',
      price: 'PKR 30,000 - 35,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        'Even Heating',
        'Sensor Cooking',
        '8 Auto Programs',
        'Child Lock',
        'Digital Display',
        'Energy Saving'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Inverter Microwave',
        'Power': '900W Inverter',
        'Technology': 'Smart Inverter',
        'Sensors': 'Humidity',
        'Auto Programs': '8',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Dimensions': '48 x 36 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Silver',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Smart Inverter provides consistent power. Even heating.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Countertop use.',
      safetyTips: 'Even heating prevents hot spots.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Error: Call service'
      ],
      bestFor: 'Delicate cooking',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'lg-inverter-deluxe',
      name: 'LG Inverter Microwave Deluxe',
      type: 'Inverter Microwave',
      capacity: '28L',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        'Convection + Grill',
        '15 Auto Programs',
        'Sensor Cook',
        'Child Lock',
        'Keep Warm',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1000W Inverter',
        'Convection': '1500W',
        'Grill': '1100W',
        'Auto Programs': '15',
        'Sensors': 'Yes',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'All-in-one: Inverter + Convection + Grill.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Stable surface.',
      safetyTips: 'Multiple functions.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Complete cooking',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'lg-inverter-premium',
      name: 'LG Inverter Microwave Premium',
      type: 'Inverter Microwave',
      capacity: '32L',
      price: 'PKR 48,000 - 55,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter Plus',
        'Touch Screen',
        '25 Auto Programs',
        'Recipe Assistant',
        'Steam Clean',
        'Child Lock',
        'WiFi Connectivity'
      ],
      specifications: {
        'Capacity': '32 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Auto Programs': '25',
        'Controls': 'Touch Screen',
        'Smart': 'SmartThinQ WiFi',
        'Interior': 'Ceramic',
        'Dimensions': '54 x 42 x 34 cm',
        'Weight': '20 kg',
        'Color': 'Black Stainless',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Smart features via app. Steam clean. Recipe suggestions.',
      maintenance: 'Monthly: Steam clean cycle. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Smart features for safety.',
      troubleshooting: [
        'WiFi not connecting: Reset router',
        'Touch screen issues: Restart',
        'Error: Call service'
      ],
      bestFor: 'Smart kitchen, tech enthusiasts',
      estimatedPowerConsumption: '1.3 units/hour'
    },

    // ---------- BUILT-IN MICROWAVE - 3 Models ----------
    {
      id: 'lg-builtin-basic',
      name: 'LG Built-in Microwave Basic',
      type: 'Built-in Microwave',
      capacity: '23L',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Solo Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Flush Fit',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Built-in Solo',
        'Power': '900W',
        'Installation': 'Built-in',
        'Controls': 'Digital',
        'Dimensions': '60 x 38 x 28 cm',
        'Cutout': '56 x 36 x 26 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built into kitchen cabinets. Professional installation required.',
      maintenance: 'Monthly: Clean exterior.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not working: Check power',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'lg-builtin-deluxe',
      name: 'LG Built-in Microwave Deluxe',
      type: 'Built-in Microwave',
      capacity: '25L',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Convection + Grill',
        'Touch Controls',
        '12 Auto Programs',
        'Child Lock',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Built-in Convection',
        'Power': '1000W Microwave, 1100W Grill, 1500W Convection',
        'Installation': 'Built-in',
        'Controls': 'Touch',
        'Auto Programs': '12',
        'Dimensions': '60 x 40 x 30 cm',
        'Cutout': '56 x 38 x 28 cm',
        'Weight': '19 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built-in convection microwave.',
      maintenance: 'Monthly: Clean interior.',
      installationTips: 'Professional installation.',
      safetyTips: 'Professional installation.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, versatile',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'lg-builtin-premium',
      name: 'LG Built-in Microwave Premium',
      type: 'Built-in Microwave',
      capacity: '28L',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Smart Inverter',
        'Convection + Grill',
        'Touch Screen',
        '20 Auto Programs',
        'Steam Clean',
        'WiFi Ready'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Built-in Inverter',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Installation': 'Built-in',
        'Controls': 'Touch Screen',
        'Smart': 'SmartThinQ',
        'Auto Programs': '20',
        'Dimensions': '60 x 42 x 32 cm',
        'Cutout': '56 x 40 x 30 cm',
        'Weight': '23 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Premium built-in microwave with smart features.',
      maintenance: 'Monthly: Steam clean. Update app.',
      installationTips: 'Professional installation only. Strong WiFi needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Touch screen not working: Clean',
        'WiFi issues: Reset router',
        'Error: Call service'
      ],
      bestFor: 'Luxury kitchens, smart home',
      estimatedPowerConsumption: '1.3 units/hour'
    }
  ]
},
      {
  id: 'samsung-microwave',
  name: 'Samsung',
  models: [
    // ---------- SOLO MICROWAVE - 3 Models ----------
    {
      id: 'samsung-solo-basic',
      name: 'Samsung Solo Microwave Basic',
      type: 'Solo Microwave',
      capacity: '20L',
      price: 'PKR 17,000 - 21,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Simple Operation',
        '5 Power Levels',
        'Timer Function',
        'Budget Friendly',
        'Defrost Function',
        'Easy Clean Interior',
        'Rotary Controls'
      ],
      specifications: {
        'Capacity': '20 Liters',
        'Type': 'Solo Microwave',
        'Power': '800W',
        'Power Levels': '5',
        'Timer': '30 minutes',
        'Controls': 'Rotary Knobs',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 25cm',
        'Dimensions': '45 x 35 x 28 cm',
        'Weight': '12 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Basic heating and defrosting. Simple controls. Use microwave-safe containers only.',
      maintenance: 'Weekly: Wipe interior with damp cloth. Clean turntable.',
      installationTips: 'Countertop use. Keep 4 inches ventilation space.',
      safetyTips: 'Never operate empty. Don\'t use metal containers.',
      troubleshooting: [
        'Not heating: Check power, door closure',
        'Turntable not rotating: Check roller ring',
        'Spark inside: Stop immediately'
      ],
      bestFor: 'Basic reheating, defrosting, small families',
      estimatedPowerConsumption: '0.8 units/hour'
    },
    {
      id: 'samsung-solo-deluxe',
      name: 'Samsung Solo Microwave Deluxe',
      type: 'Solo Microwave',
      capacity: '23L',
      price: 'PKR 21,000 - 25,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Digital Display',
        '6 Power Levels',
        'Express Cook',
        'Auto Defrost',
        'Kitchen Timer',
        'Child Lock',
        'Silver Finish'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Solo Microwave',
        'Power': '850W',
        'Power Levels': '6',
        'Display': 'LED Digital',
        'Timer': '99 minutes',
        'Controls': 'Button + Dial',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '48 x 36 x 29 cm',
        'Weight': '13 kg',
        'Color': 'Silver',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Digital controls for precise cooking. Auto defrost by weight.',
      maintenance: 'Weekly: Clean interior. Wipe control panel.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Child lock for safety.',
      troubleshooting: [
        'Display not working: Check power',
        'Keypad unresponsive: Clean panel'
      ],
      bestFor: 'Daily use, families',
      estimatedPowerConsumption: '0.85 units/hour'
    },
    {
      id: 'samsung-solo-premium',
      name: 'Samsung Solo Microwave Premium',
      type: 'Solo Microwave',
      capacity: '25L',
      price: 'PKR 25,000 - 30,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Ceramic Enamel Interior',
        'Eco Mode',
        'Quick Defrost',
        'Simple Design',
        'Durable',
        'Child Lock',
        '10 Auto Programs'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Solo Microwave',
        'Power': '850W',
        'Power Levels': '6',
        'Auto Programs': '10',
        'Interior': 'Ceramic Enamel',
        'Eco Mode': 'Energy saving',
        'Display': 'LED',
        'Turntable': 'Yes, 30cm',
        'Dimensions': '47 x 36 x 29 cm',
        'Weight': '16 kg',
        'Color': 'White',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Ceramic interior easy to clean. Eco mode saves energy.',
      maintenance: 'Monthly: Deep clean interior. Ceramic resists stains.',
      installationTips: 'Countertop use. Good quality.',
      safetyTips: 'Easy maintenance.',
      troubleshooting: [
        'Eco mode not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Family use, reliable brand',
      estimatedPowerConsumption: '0.85 units/hour'
    },

    // ---------- CONVECTION MICROWAVE - 3 Models ----------
    {
      id: 'samsung-convection-basic',
      name: 'Samsung Convection Microwave Basic',
      type: 'Convection Microwave',
      capacity: '28L',
      price: 'PKR 28,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Microwave',
        'Grill Function',
        'Digital Display',
        '8 Auto Programs',
        'Defrost Function',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Convection Microwave',
        'Power': '900W Microwave, 1000W Grill, 1400W Convection',
        'Cooking Modes': '3',
        'Auto Programs': '8',
        'Display': 'LED Digital',
        'Turntable': 'Yes, 30cm',
        'Temperature': '100-200°C',
        'Dimensions': '48 x 35 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Can bake, roast, and grill. Preheat for convection baking.',
      maintenance: 'Weekly: Clean interior after each use.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Use oven mitts - gets hot.',
      troubleshooting: [
        'Not baking evenly: Rotate food',
        'Convection not working: Check mode'
      ],
      bestFor: 'Baking beginners',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'samsung-convection-deluxe',
      name: 'Samsung Convection Microwave Deluxe',
      type: 'Convection Microwave',
      capacity: '30L',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '12 Auto Programs',
        'Digital Display',
        'Temperature Probe',
        'Child Lock',
        'Stainless Steel',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Convection Microwave',
        'Power': '1000W Microwave, 1100W Grill, 1500W Convection',
        'Auto Programs': '12',
        'Temperature Probe': 'Yes',
        'Temperature': '100-210°C',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 32cm',
        'Dimensions': '50 x 38 x 31 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Temperature probe for perfect cooking. Crisp function.',
      maintenance: 'Monthly: Clean probe.',
      installationTips: 'Countertop use. Stable surface.',
      safetyTips: 'Probe gets hot.',
      troubleshooting: [
        'Probe not reading: Check connection',
        'Error: Call service'
      ],
      bestFor: 'Serious bakers',
      estimatedPowerConsumption: '1.3 units/hour'
    },
    {
      id: 'samsung-convection-premium',
      name: 'Samsung Convection Microwave Premium',
      type: 'Convection Microwave',
      capacity: '32L',
      price: 'PKR 38,000 - 45,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '15 Auto Programs',
        'Touch Controls',
        'Recipe Book',
        'Keep Warm',
        'Ceramic Interior',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '32 Liters',
        'Type': 'Convection Microwave',
        'Power': '1100W Microwave, 1200W Grill, 1600W Convection',
        'Auto Programs': '15',
        'Controls': 'Touch',
        'Temperature': '100-220°C',
        'Interior': 'Ceramic Enamel',
        'Turntable': 'Yes, 34cm',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '18 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Touch controls. Ceramic interior easy clean.',
      maintenance: 'Monthly: Clean with soft cloth.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Touch screen lock.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium kitchens',
      estimatedPowerConsumption: '1.4 units/hour'
    },

    // ---------- GRILL MICROWAVE - 3 Models ----------
    {
      id: 'samsung-grill-basic',
      name: 'Samsung Grill Microwave Basic',
      type: 'Grill Microwave',
      capacity: '23L',
      price: 'PKR 23,000 - 27,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Grill Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Timer',
        'Quartz Grill',
        'Compact'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Grill Microwave',
        'Power': '800W Microwave, 900W Grill',
        'Functions': 'Microwave + Grill',
        'Controls': 'Digital',
        'Grill Type': 'Quartz',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '46 x 36 x 28 cm',
        'Weight': '14 kg',
        'Color': 'Black',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Grill function for crispy results. Use grill rack.',
      maintenance: 'Weekly: Clean grill plate.',
      installationTips: 'Countertop use.',
      safetyTips: 'Grill gets very hot.',
      troubleshooting: [
        'Grill not working: Check mode',
        'Food burning: Reduce time'
      ],
      bestFor: 'Snacks, grilling',
      estimatedPowerConsumption: '1.0 units/hour'
    },
    {
      id: 'samsung-grill-deluxe',
      name: 'Samsung Grill Microwave Deluxe',
      type: 'Grill Microwave',
      capacity: '25L',
      price: 'PKR 26,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Combination Grill',
        '10 Auto Programs',
        'Digital Display',
        'Child Lock',
        'Stainless Steel',
        'Keep Warm',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Grill Microwave',
        'Power': '900W Microwave, 1000W Grill',
        'Combination': 'Yes',
        'Auto Programs': '10',
        'Display': 'LED',
        'Grill Type': 'Quartz',
        'Dimensions': '48 x 37 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Combination mode for even cooking.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Countertop use.',
      safetyTips: 'Hot surface.',
      troubleshooting: [
        'Combination not working: Check settings',
        'Uneven grilling: Turn food'
      ],
      bestFor: 'Regular grilling',
      estimatedPowerConsumption: '1.1 units/hour'
    },
    {
      id: 'samsung-grill-premium',
      name: 'Samsung Grill Microwave Premium',
      type: 'Grill Microwave',
      capacity: '28L',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Dual Grill',
        '12 Auto Programs',
        'Touch Controls',
        'Recipe Assistant',
        'Child Lock',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Grill Microwave',
        'Power': '1000W Microwave, 1100W Grill',
        'Grill Type': 'Dual Quartz',
        'Auto Programs': '12',
        'Controls': 'Touch',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Dual grill for even browning.',
      maintenance: 'Monthly: Clean gently.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dual grill very hot.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium grilling',
      estimatedPowerConsumption: '1.2 units/hour'
    },

    // ---------- INVERTER MICROWAVE - 3 Models ----------
    {
      id: 'samsung-inverter-basic',
      name: 'Samsung Inverter Microwave Basic',
      type: 'Inverter Microwave',
      capacity: '25L',
      price: 'PKR 29,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Even Heating',
        'Sensor Cooking',
        '8 Auto Programs',
        'Child Lock',
        'Digital Display',
        'Energy Saving'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Inverter Microwave',
        'Power': '900W Inverter',
        'Technology': 'Inverter',
        'Sensors': 'Humidity',
        'Auto Programs': '8',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Dimensions': '48 x 36 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Silver',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Inverter provides consistent power. Even heating.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Countertop use.',
      safetyTips: 'Even heating prevents hot spots.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Error: Call service'
      ],
      bestFor: 'Delicate cooking',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'samsung-inverter-deluxe',
      name: 'Samsung Inverter Microwave Deluxe',
      type: 'Inverter Microwave',
      capacity: '28L',
      price: 'PKR 35,000 - 41,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Convection + Grill',
        '12 Auto Programs',
        'Sensor Cook',
        'Child Lock',
        'Keep Warm',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1000W Inverter',
        'Convection': '1500W',
        'Grill': '1100W',
        'Auto Programs': '12',
        'Sensors': 'Yes',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'All-in-one: Inverter + Convection + Grill.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Stable surface.',
      safetyTips: 'Multiple functions.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Complete cooking',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'samsung-inverter-premium',
      name: 'Samsung Inverter Microwave Premium',
      type: 'Inverter Microwave',
      capacity: '30L',
      price: 'PKR 42,000 - 48,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        'Touch Screen',
        '20 Auto Programs',
        'Recipe Assistant',
        'Steam Clean',
        'Child Lock',
        'WiFi Ready'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Auto Programs': '20',
        'Controls': 'Touch Screen',
        'Smart': 'SmartThings',
        'Interior': 'Ceramic',
        'Dimensions': '52 x 40 x 32 cm',
        'Weight': '19 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Smart features via SmartThings app. Steam clean.',
      maintenance: 'Monthly: Steam clean cycle. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Smart features for safety.',
      troubleshooting: [
        'WiFi not connecting: Reset router',
        'Touch screen issues: Restart',
        'Error: Call service'
      ],
      bestFor: 'Smart kitchen, tech enthusiasts',
      estimatedPowerConsumption: '1.3 units/hour'
    },

    // ---------- BUILT-IN MICROWAVE - 3 Models ----------
    {
      id: 'samsung-builtin-basic',
      name: 'Samsung Built-in Microwave Basic',
      type: 'Built-in Microwave',
      capacity: '23L',
      price: 'PKR 35,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Solo Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Flush Fit',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Built-in Solo',
        'Power': '900W',
        'Installation': 'Built-in',
        'Controls': 'Digital',
        'Dimensions': '60 x 38 x 28 cm',
        'Cutout': '56 x 36 x 26 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built into kitchen cabinets. Professional installation required.',
      maintenance: 'Monthly: Clean exterior.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not working: Check power',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'samsung-builtin-deluxe',
      name: 'Samsung Built-in Microwave Deluxe',
      type: 'Built-in Microwave',
      capacity: '25L',
      price: 'PKR 42,000 - 48,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Convection + Grill',
        'Touch Controls',
        '12 Auto Programs',
        'Child Lock',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Built-in Convection',
        'Power': '1000W Microwave, 1100W Grill, 1500W Convection',
        'Installation': 'Built-in',
        'Controls': 'Touch',
        'Auto Programs': '12',
        'Dimensions': '60 x 40 x 30 cm',
        'Cutout': '56 x 38 x 28 cm',
        'Weight': '19 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Built-in convection microwave.',
      maintenance: 'Monthly: Clean interior.',
      installationTips: 'Professional installation.',
      safetyTips: 'Professional installation.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, versatile',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'samsung-builtin-premium',
      name: 'Samsung Built-in Microwave Premium',
      type: 'Built-in Microwave',
      capacity: '28L',
      price: 'PKR 52,000 - 60,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Inverter Technology',
        'Convection + Grill',
        'Touch Screen',
        '18 Auto Programs',
        'Steam Clean',
        'SmartThings'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Built-in Inverter',
        'Power': '1100W Inverter',
        'Convection': '1600W',
        'Grill': '1200W',
        'Installation': 'Built-in',
        'Controls': 'Touch Screen',
        'Smart': 'SmartThings',
        'Auto Programs': '18',
        'Dimensions': '60 x 42 x 32 cm',
        'Cutout': '56 x 40 x 30 cm',
        'Weight': '22 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Premium built-in microwave with smart features.',
      maintenance: 'Monthly: Steam clean. Update app.',
      installationTips: 'Professional installation only. Strong WiFi.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Touch screen not working: Clean',
        'SmartThings not connecting: Reset',
        'Error: Call service'
      ],
      bestFor: 'Luxury kitchens, smart home',
      estimatedPowerConsumption: '1.3 units/hour'
    }
  ]
},
     {
  id: 'waves-microwave',
  name: 'Waves',
  models: [
    // ---------- SOLO MICROWAVE - 3 Models ----------
    {
      id: 'waves-solo-basic',
      name: 'Waves Solo Microwave Basic',
      type: 'Solo Microwave',
      capacity: '17L',
      price: 'PKR 12,000 - 15,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Basic Functions',
        'Very Affordable',
        'Easy to Use',
        'Lightweight',
        'Defrost Function',
        'Rotary Controls'
      ],
      specifications: {
        'Capacity': '17 Liters',
        'Type': 'Solo Microwave',
        'Power': '700W',
        'Power Levels': '5',
        'Timer': '30 minutes',
        'Controls': 'Mechanical',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 24cm',
        'Dimensions': '42 x 32 x 26 cm',
        'Weight': '12 kg',
        'Color': 'White',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Most basic microwave. Heating and simple defrosting. Simple controls for easy operation.',
      maintenance: 'Weekly: Wipe interior with damp cloth. Clean turntable.',
      installationTips: 'Small spaces. Dorm rooms. Countertop use.',
      safetyTips: 'Never operate empty. Don\'t use metal containers.',
      troubleshooting: [
        'Not heating: Check power',
        'Turntable not rotating: Check roller',
        'Spark inside: Stop immediately'
      ],
      bestFor: 'Students, small portions, basic heating',
      estimatedPowerConsumption: '0.7 units/hour'
    },
    {
      id: 'waves-solo-deluxe',
      name: 'Waves Solo Microwave Deluxe',
      type: 'Solo Microwave',
      capacity: '20L',
      price: 'PKR 15,000 - 18,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        'Digital Display',
        '6 Power Levels',
        'Auto Defrost',
        'Kitchen Timer',
        'Child Lock',
        'Black Finish',
        'Express Cook'
      ],
      specifications: {
        'Capacity': '20 Liters',
        'Type': 'Solo Microwave',
        'Power': '800W',
        'Power Levels': '6',
        'Display': 'LED Digital',
        'Timer': '99 minutes',
        'Controls': 'Button + Dial',
        'Interior': 'Enamel',
        'Turntable': 'Yes, 25cm',
        'Dimensions': '45 x 35 x 28 cm',
        'Weight': '13 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Digital controls for precise cooking. Auto defrost by weight.',
      maintenance: 'Weekly: Clean interior. Wipe control panel.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Child lock for safety.',
      troubleshooting: [
        'Display not working: Check power',
        'Keypad unresponsive: Clean panel'
      ],
      bestFor: 'Daily use, small families',
      estimatedPowerConsumption: '0.8 units/hour'
    },
    {
      id: 'waves-solo-premium',
      name: 'Waves Solo Microwave Premium',
      type: 'Solo Microwave',
      capacity: '23L',
      price: 'PKR 18,000 - 22,000',
      image: 'https://images.unsplash.com/photo-1584568694244-e676142bae31?auto=format&fit=crop&w=800',
      features: [
        '8 Auto Programs',
        'LED Display',
        'Child Lock',
        'Eco Mode',
        'Stainless Steel',
        'Keep Warm',
        'Defrost by Weight'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Solo Microwave',
        'Power': '850W',
        'Power Levels': '8',
        'Auto Programs': '8',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 27cm',
        'Dimensions': '47 x 36 x 29 cm',
        'Weight': '14 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto programs for common dishes. Eco mode saves energy.',
      maintenance: 'Monthly: Deep clean interior.',
      installationTips: 'Countertop use. Level surface.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Auto program not working: Check settings',
        'Error code: Call service'
      ],
      bestFor: 'Families, value for money',
      estimatedPowerConsumption: '0.85 units/hour'
    },

    // ---------- CONVECTION MICROWAVE - 3 Models ----------
    {
      id: 'waves-convection-basic',
      name: 'Waves Convection Microwave Basic',
      type: 'Convection Microwave',
      capacity: '25L',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Microwave',
        'Grill Function',
        'Digital Display',
        '8 Auto Programs',
        'Defrost Function',
        'Timer',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Convection Microwave',
        'Power': '800W Microwave, 900W Grill, 1300W Convection',
        'Cooking Modes': '3',
        'Auto Programs': '8',
        'Display': 'LED Digital',
        'Turntable': 'Yes, 27cm',
        'Temperature': '100-200°C',
        'Dimensions': '48 x 35 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Silver',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Can bake, roast, and grill. Preheat for convection baking.',
      maintenance: 'Weekly: Clean interior after each use.',
      installationTips: 'Countertop use. Allow ventilation.',
      safetyTips: 'Use oven mitts - gets hot.',
      troubleshooting: [
        'Not baking evenly: Rotate food',
        'Convection not working: Check mode'
      ],
      bestFor: 'Baking beginners on budget',
      estimatedPowerConsumption: '1.1 units/hour'
    },
    {
      id: 'waves-convection-deluxe',
      name: 'Waves Convection Microwave Deluxe',
      type: 'Convection Microwave',
      capacity: '28L',
      price: 'PKR 26,000 - 31,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '10 Auto Programs',
        'Digital Display',
        'Temperature Probe',
        'Child Lock',
        'Stainless Steel',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Convection Microwave',
        'Power': '900W Microwave, 1000W Grill, 1400W Convection',
        'Auto Programs': '10',
        'Temperature Probe': 'Yes',
        'Temperature': '100-210°C',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Turntable': 'Yes, 30cm',
        'Dimensions': '50 x 37 x 30 cm',
        'Weight': '16 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Temperature probe for perfect cooking. Crisp function.',
      maintenance: 'Monthly: Clean probe.',
      installationTips: 'Countertop use. Stable surface.',
      safetyTips: 'Probe gets hot.',
      troubleshooting: [
        'Probe not reading: Check connection',
        'Error: Call service'
      ],
      bestFor: 'Serious bakers on budget',
      estimatedPowerConsumption: '1.2 units/hour'
    },
    {
      id: 'waves-convection-premium',
      name: 'Waves Convection Microwave Premium',
      type: 'Convection Microwave',
      capacity: '30L',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Convection + Grill',
        '12 Auto Programs',
        'Touch Controls',
        'Keep Warm',
        'Ceramic Interior',
        'Child Lock',
        'Recipe Book'
      ],
      specifications: {
        'Capacity': '30 Liters',
        'Type': 'Convection Microwave',
        'Power': '1000W Microwave, 1100W Grill, 1500W Convection',
        'Auto Programs': '12',
        'Controls': 'Touch',
        'Temperature': '100-220°C',
        'Interior': 'Ceramic Enamel',
        'Turntable': 'Yes, 32cm',
        'Dimensions': '52 x 38 x 31 cm',
        'Weight': '17 kg',
        'Color': 'Black Glass',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Touch controls. Ceramic interior easy clean.',
      maintenance: 'Monthly: Clean with soft cloth.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Touch screen lock.',
      troubleshooting: [
        'Touch not working: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Budget premium kitchens',
      estimatedPowerConsumption: '1.3 units/hour'
    },

    // ---------- GRILL MICROWAVE - 3 Models ----------
    {
      id: 'waves-grill-basic',
      name: 'Waves Grill Microwave Basic',
      type: 'Grill Microwave',
      capacity: '20L',
      price: 'PKR 18,000 - 22,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Grill Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Timer',
        'Quartz Grill',
        'Compact'
      ],
      specifications: {
        'Capacity': '20 Liters',
        'Type': 'Grill Microwave',
        'Power': '700W Microwave, 800W Grill',
        'Functions': 'Microwave + Grill',
        'Controls': 'Digital',
        'Grill Type': 'Quartz',
        'Turntable': 'Yes, 25cm',
        'Dimensions': '45 x 35 x 27 cm',
        'Weight': '13 kg',
        'Color': 'Black',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Grill function for crispy results. Use grill rack.',
      maintenance: 'Weekly: Clean grill plate.',
      installationTips: 'Countertop use.',
      safetyTips: 'Grill gets very hot.',
      troubleshooting: [
        'Grill not working: Check mode',
        'Food burning: Reduce time'
      ],
      bestFor: 'Snacks, grilling on budget',
      estimatedPowerConsumption: '0.9 units/hour'
    },
    {
      id: 'waves-grill-deluxe',
      name: 'Waves Grill Microwave Deluxe',
      type: 'Grill Microwave',
      capacity: '23L',
      price: 'PKR 22,000 - 27,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Combination Grill',
        '8 Auto Programs',
        'Digital Display',
        'Child Lock',
        'Stainless Steel',
        'Keep Warm',
        'Crisp Function'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Grill Microwave',
        'Power': '800W Microwave, 900W Grill',
        'Combination': 'Yes',
        'Auto Programs': '8',
        'Display': 'LED',
        'Grill Type': 'Quartz',
        'Dimensions': '47 x 36 x 28 cm',
        'Weight': '14 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Combination mode for even cooking.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Countertop use.',
      safetyTips: 'Hot surface.',
      troubleshooting: [
        'Combination not working: Check settings',
        'Uneven grilling: Turn food'
      ],
      bestFor: 'Regular grilling',
      estimatedPowerConsumption: '1.0 units/hour'
    },
    {
      id: 'waves-grill-premium',
      name: 'Waves Grill Microwave Premium',
      type: 'Grill Microwave',
      capacity: '25L',
      price: 'PKR 26,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1588690154757-badf464419d8?auto=format&fit=crop&w=800',
      features: [
        'Dual Grill',
        '10 Auto Programs',
        'Touch Controls',
        'Child Lock',
        'Ceramic Interior',
        'Keep Warm',
        'Recipe Assistant'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Grill Microwave',
        'Power': '900W Microwave, 1000W Grill',
        'Grill Type': 'Dual Quartz',
        'Auto Programs': '10',
        'Controls': 'Touch',
        'Interior': 'Ceramic',
        'Dimensions': '48 x 37 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Black Glass',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Dual grill for even browning.',
      maintenance: 'Monthly: Clean gently.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dual grill very hot.',
      troubleshooting: [
        'Touch not responding: Clean panel',
        'Error: Call service'
      ],
      bestFor: 'Premium grilling on budget',
      estimatedPowerConsumption: '1.1 units/hour'
    },

    // ---------- INVERTER MICROWAVE - 3 Models ----------
    {
      id: 'waves-inverter-basic',
      name: 'Waves Inverter Microwave Basic',
      type: 'Inverter Microwave',
      capacity: '23L',
      price: 'PKR 24,000 - 28,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Even Heating',
        'Sensor Cooking',
        '6 Auto Programs',
        'Child Lock',
        'Digital Display',
        'Energy Saving'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Inverter Microwave',
        'Power': '800W Inverter',
        'Technology': 'Inverter',
        'Sensors': 'Humidity',
        'Auto Programs': '6',
        'Display': 'LED',
        'Interior': 'Stainless Steel',
        'Dimensions': '47 x 36 x 28 cm',
        'Weight': '14 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Inverter provides consistent power. Even heating.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Countertop use.',
      safetyTips: 'Even heating prevents hot spots.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Error: Call service'
      ],
      bestFor: 'Delicate cooking on budget',
      estimatedPowerConsumption: '0.8 units/hour'
    },
    {
      id: 'waves-inverter-deluxe',
      name: 'Waves Inverter Microwave Deluxe',
      type: 'Inverter Microwave',
      capacity: '25L',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Convection + Grill',
        '10 Auto Programs',
        'Sensor Cook',
        'Child Lock',
        'Keep Warm',
        'Ceramic Interior'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Inverter Microwave',
        'Power': '900W Inverter',
        'Convection': '1400W',
        'Grill': '1000W',
        'Auto Programs': '10',
        'Sensors': 'Yes',
        'Interior': 'Ceramic',
        'Dimensions': '48 x 37 x 29 cm',
        'Weight': '15 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'All-in-one: Inverter + Convection + Grill.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Stable surface.',
      safetyTips: 'Multiple functions.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Complete cooking on budget',
      estimatedPowerConsumption: '1.1 units/hour'
    },
    {
      id: 'waves-inverter-premium',
      name: 'Waves Inverter Microwave Premium',
      type: 'Inverter Microwave',
      capacity: '28L',
      price: 'PKR 34,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter',
        'Touch Screen',
        '15 Auto Programs',
        'Recipe Assistant',
        'Steam Clean',
        'Child Lock',
        'Keep Warm'
      ],
      specifications: {
        'Capacity': '28 Liters',
        'Type': 'Inverter Microwave',
        'Power': '1000W Inverter',
        'Convection': '1500W',
        'Grill': '1100W',
        'Auto Programs': '15',
        'Controls': 'Touch Screen',
        'Interior': 'Ceramic',
        'Dimensions': '50 x 38 x 30 cm',
        'Weight': '17 kg',
        'Color': 'Black Glass',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Steam clean function. Touch screen controls.',
      maintenance: 'Monthly: Steam clean cycle.',
      installationTips: 'Professional installation.',
      safetyTips: 'Touch screen lock.',
      troubleshooting: [
        'Touch screen issues: Restart',
        'Error: Call service'
      ],
      bestFor: 'Budget smart kitchen',
      estimatedPowerConsumption: '1.2 units/hour'
    },

    // ---------- BUILT-IN MICROWAVE - 3 Models ----------
    {
      id: 'waves-builtin-basic',
      name: 'Waves Built-in Microwave Basic',
      type: 'Built-in Microwave',
      capacity: '20L',
      price: 'PKR 28,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Solo Function',
        'Digital Controls',
        'Auto Defrost',
        'Child Lock',
        'Flush Fit',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '20 Liters',
        'Type': 'Built-in Solo',
        'Power': '800W',
        'Installation': 'Built-in',
        'Controls': 'Digital',
        'Dimensions': '55 x 35 x 26 cm',
        'Cutout': '51 x 33 x 24 cm',
        'Weight': '15 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Built into kitchen cabinets. Professional installation required.',
      maintenance: 'Monthly: Clean exterior.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not working: Check power',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens on budget',
      estimatedPowerConsumption: '0.8 units/hour'
    },
    {
      id: 'waves-builtin-deluxe',
      name: 'Waves Built-in Microwave Deluxe',
      type: 'Built-in Microwave',
      capacity: '23L',
      price: 'PKR 34,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Convection + Grill',
        'Touch Controls',
        '8 Auto Programs',
        'Child Lock',
        'Stainless Steel'
      ],
      specifications: {
        'Capacity': '23 Liters',
        'Type': 'Built-in Convection',
        'Power': '900W Microwave, 1000W Grill, 1400W Convection',
        'Installation': 'Built-in',
        'Controls': 'Touch',
        'Auto Programs': '8',
        'Dimensions': '58 x 38 x 28 cm',
        'Cutout': '54 x 36 x 26 cm',
        'Weight': '17 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Built-in convection microwave.',
      maintenance: 'Monthly: Clean interior.',
      installationTips: 'Professional installation.',
      safetyTips: 'Professional installation.',
      troubleshooting: [
        'Convection not working: Check mode',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, versatile on budget',
      estimatedPowerConsumption: '1.1 units/hour'
    },
    {
      id: 'waves-builtin-premium',
      name: 'Waves Built-in Microwave Premium',
      type: 'Built-in Microwave',
      capacity: '25L',
      price: 'PKR 40,000 - 46,000',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Inverter Technology',
        'Convection + Grill',
        'Touch Screen',
        '12 Auto Programs',
        'Steam Clean',
        'Black Glass'
      ],
      specifications: {
        'Capacity': '25 Liters',
        'Type': 'Built-in Inverter',
        'Power': '1000W Inverter',
        'Convection': '1500W',
        'Grill': '1100W',
        'Installation': 'Built-in',
        'Controls': 'Touch Screen',
        'Auto Programs': '12',
        'Dimensions': '60 x 40 x 30 cm',
        'Cutout': '56 x 38 x 28 cm',
        'Weight': '19 kg',
        'Color': 'Black Glass',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Premium built-in microwave with inverter.',
      maintenance: 'Monthly: Steam clean.',
      installationTips: 'Professional installation only.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Touch screen not working: Clean',
        'Error: Call service'
      ],
      bestFor: 'Luxury kitchens on budget',
      estimatedPowerConsumption: '1.2 units/hour'
          }
        ]
      }
    ]
  },

 {
  id: 'dishwasher',
  name: 'Dishwasher',
  description: 'Automatic utensil cleaning appliance',
  types: ['Freestanding Dishwasher', 'Built-in Dishwasher', 'Compact Dishwasher', 'Drawer Dishwasher', 'Portable Dishwasher'],
  companies: [
    // ==================== DAWLANCE DISHWASHER (15 Models) ====================
    {
      id: 'dawlance-dishwasher',
      name: 'Dawlance',
      models: [
        // ---------- FREESTANDING DISHWASHER - 3 Models ----------
        {
          id: 'dawlance-dish-freestanding-basic',
          name: 'Dawlance Freestanding Dishwasher Basic',
          type: 'Freestanding Dishwasher',
          capacity: '12 Place Settings',
          price: 'PKR 65,000 - 75,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            '5 Wash Programs',
            'Delay Start',
            'Child Lock',
            'Half Load Option',
            'Energy Efficient',
            'LED Display',
            'Adjustable Racks'
          ],
          specifications: {
            'Capacity': '12 Place Settings',
            'Type': 'Freestanding',
            'Wash Programs': '5 (Normal, Eco, Intensive, Quick, Glass)',
            'Water Consumption': '10L per cycle',
            'Power': '1800W',
            'Energy Rating': 'A+',
            'Noise Level': '52 dB',
            'Drying System': 'Residual Heat',
            'Dimensions': '85 x 60 x 60 cm',
            'Weight': '45 kg',
            'Color': 'White',
            'Warranty': '2 years'
          },
          warranty: '2 years comprehensive warranty',
          usageGuide: 'Scrape food off dishes before loading. Use recommended detergent. Load properly for best results. Start with normal cycle.',
          maintenance: 'Monthly: Clean filter. Check spray arms. Run empty cycle with vinegar occasionally.',
          installationTips: 'Water connection required. Proper drainage needed. Level carefully.',
          safetyTips: 'Child lock for safety. Use dishwasher salt. Don\'t overload.',
          troubleshooting: [
            'Not cleaning: Check spray arms, filter',
            'Water not draining: Check hose',
            'Error code: Call service'
          ],
          bestFor: 'Medium families, easy installation',
          estimatedConsumption: '250 units/year'
        },
        {
          id: 'dawlance-dish-freestanding-deluxe',
          name: 'Dawlance Freestanding Dishwasher Deluxe',
          type: 'Freestanding Dishwasher',
          capacity: '14 Place Settings',
          price: 'PKR 78,000 - 88,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            '6 Wash Programs',
            'Delay Start',
            'Child Lock',
            'Half Load',
            'Energy Efficient',
            'LED Display',
            'Adjustable Racks',
            'Quick Wash'
          ],
          specifications: {
            'Capacity': '14 Place Settings',
            'Type': 'Freestanding',
            'Wash Programs': '6',
            'Water Consumption': '9.5L per cycle',
            'Power': '1900W',
            'Energy Rating': 'A++',
            'Noise Level': '48 dB',
            'Drying System': 'Heat Exchanger',
            'Dimensions': '85 x 60 x 60 cm',
            'Weight': '47 kg',
            'Color': 'Silver',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Quick wash for lightly soiled dishes. Half load for small loads.',
          maintenance: 'Monthly: Clean filter. Check spray arms.',
          installationTips: 'Professional installation recommended.',
          safetyTips: 'Child lock safety.',
          troubleshooting: [
            'Quick wash not effective: Use normal cycle',
            'Error: Call service'
          ],
          bestFor: 'Large families, better efficiency',
          estimatedConsumption: '240 units/year'
        },
        {
          id: 'dawlance-dish-freestanding-premium',
          name: 'Dawlance Freestanding Dishwasher Premium',
          type: 'Freestanding Dishwasher',
          capacity: '16 Place Settings',
          price: 'PKR 95,000 - 108,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            '8 Wash Programs',
            'Delay Start',
            'Child Lock',
            'Half Load',
            'Inverter Motor',
            'LED Touch',
            'Auto Program',
            'Extra Drying'
          ],
          specifications: {
            'Capacity': '16 Place Settings',
            'Type': 'Freestanding',
            'Wash Programs': '8',
            'Water Consumption': '9L per cycle',
            'Power': '2000W',
            'Motor': 'Inverter',
            'Energy Rating': 'A+++',
            'Noise Level': '44 dB',
            'Drying System': 'Turbo Dry',
            'Dimensions': '85 x 60 x 60 cm',
            'Weight': '50 kg',
            'Color': 'Silver',
            'Warranty': '3 years + 5 years motor'
          },
          warranty: '3 years + 5 years motor warranty',
          usageGuide: 'Auto program detects soil level. Extra drying for plastics.',
          maintenance: 'Monthly: Clean filter. Check inverter.',
          installationTips: 'Professional installation.',
          safetyTips: 'Multiple safety features.',
          troubleshooting: [
            'Auto program error: Reset',
            'Not drying: Check settings'
          ],
          bestFor: 'Large families, premium features',
          estimatedConsumption: '230 units/year'
        },

        // ---------- BUILT-IN DISHWASHER - 3 Models ----------
        {
          id: 'dawlance-dish-builtin-basic',
          name: 'Dawlance Built-in Dishwasher Basic',
          type: 'Built-in Dishwasher',
          capacity: '12 Place Settings',
          price: 'PKR 75,000 - 85,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Built-in Design',
            '5 Wash Programs',
            'Delay Start',
            'Child Lock',
            'Energy Efficient',
            'LED Display',
            'Adjustable Racks'
          ],
          specifications: {
            'Capacity': '12 Place Settings',
            'Type': 'Built-in',
            'Wash Programs': '5',
            'Water Consumption': '10L',
            'Power': '1800W',
            'Energy Rating': 'A+',
            'Noise Level': '50 dB',
            'Dimensions': '82 x 60 x 55 cm',
            'Cutout Size': '80 x 58 x 53 cm',
            'Weight': '48 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Integrates with kitchen cabinets. Professional installation needed.',
          maintenance: 'Monthly: Clean filter. Check door seal.',
          installationTips: 'Professional installation only. Cabinet cutout needed.',
          safetyTips: 'Built-in requires proper installation.',
          troubleshooting: [
            'Not starting: Check door closed',
            'Error: Call service'
          ],
          bestFor: 'Integrated kitchens, seamless look',
          estimatedConsumption: '250 units/year'
        },
        {
          id: 'dawlance-dish-builtin-deluxe',
          name: 'Dawlance Built-in Dishwasher Deluxe',
          type: 'Built-in Dishwasher',
          capacity: '14 Place Settings',
          price: 'PKR 88,000 - 98,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Built-in',
            '6 Programs',
            'Delay Start',
            'Child Lock',
            'Half Load',
            'LED Display',
            'Quick Wash'
          ],
          specifications: {
            'Capacity': '14 Place Settings',
            'Type': 'Built-in',
            'Wash Programs': '6',
            'Water Consumption': '9.5L',
            'Power': '1900W',
            'Energy Rating': 'A++',
            'Noise Level': '46 dB',
            'Dimensions': '82 x 60 x 57 cm',
            'Cutout': '80 x 58 x 55 cm',
            'Weight': '50 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'More programs for better cleaning.',
          maintenance: 'Monthly: Clean filter.',
          installationTips: 'Professional installation.',
          safetyTips: 'Built-in safety.',
          troubleshooting: [
            'Error: Call service',
            'Not cleaning: Check spray arms'
          ],
          bestFor: 'Integrated kitchens, better features',
          estimatedConsumption: '240 units/year'
        },
        {
          id: 'dawlance-dish-builtin-premium',
          name: 'Dawlance Built-in Dishwasher Premium',
          type: 'Built-in Dishwasher',
          capacity: '16 Place Settings',
          price: 'PKR 110,000 - 125,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Built-in',
            '8 Programs',
            'Inverter Motor',
            'Auto Program',
            'LED Touch',
            'Extra Drying',
            'Quiet Operation'
          ],
          specifications: {
            'Capacity': '16 Place Settings',
            'Type': 'Built-in',
            'Wash Programs': '8',
            'Water Consumption': '9L',
            'Power': '2000W',
            'Motor': 'Inverter',
            'Energy Rating': 'A+++',
            'Noise Level': '42 dB',
            'Dimensions': '82 x 60 x 60 cm',
            'Cutout': '80 x 58 x 58 cm',
            'Weight': '53 kg',
            'Color': 'Stainless Steel',
            'Warranty': '3 years + 5 years motor'
          },
          warranty: '3 years + 5 years motor warranty',
          usageGuide: 'Premium built-in with inverter.',
          maintenance: 'Monthly: Deep clean.',
          installationTips: 'Professional installation.',
          safetyTips: 'Premium safety features.',
          troubleshooting: [
            'Inverter error: Call service',
            'Auto program error: Reset'
          ],
          bestFor: 'Luxury kitchens, best performance',
          estimatedConsumption: '230 units/year'
        },

        // ---------- COMPACT DISHWASHER - 3 Models ----------
        {
          id: 'dawlance-dish-compact-basic',
          name: 'Dawlance Compact Dishwasher Basic',
          type: 'Compact Dishwasher',
          capacity: '6 Place Settings',
          price: 'PKR 45,000 - 52,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Compact Design',
            '4 Wash Programs',
            'Quick Wash',
            'Small Household',
            'Water Saving',
            'LED Display',
            'Adjustable Rack'
          ],
          specifications: {
            'Capacity': '6 Place Settings',
            'Type': 'Compact',
            'Wash Programs': '4',
            'Water Consumption': '8L per cycle',
            'Power': '1500W',
            'Energy Rating': 'A',
            'Noise Level': '52 dB',
            'Dimensions': '45 x 55 x 50 cm',
            'Weight': '35 kg',
            'Color': 'White',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Ideal for 1-2 people. Load properly for best results.',
          maintenance: 'Monthly: Clean filter. Check spray arms.',
          installationTips: 'Fits small kitchens. Countertop or under-counter.',
          safetyTips: 'Don\'t overload.',
          troubleshooting: [
            'Not cleaning: Check filter',
            'Error: Call service'
          ],
          bestFor: 'Small families, apartments',
          estimatedConsumption: '180 units/year'
        },
        {
          id: 'dawlance-dish-compact-deluxe',
          name: 'Dawlance Compact Dishwasher Deluxe',
          type: 'Compact Dishwasher',
          capacity: '8 Place Settings',
          price: 'PKR 55,000 - 64,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Compact',
            '5 Programs',
            'Delay Start',
            'Half Load',
            'LED Display',
            'Quick Wash',
            'Energy Efficient'
          ],
          specifications: {
            'Capacity': '8 Place Settings',
            'Type': 'Compact',
            'Wash Programs': '5',
            'Water Consumption': '8.5L',
            'Power': '1600W',
            'Energy Rating': 'A+',
            'Noise Level': '50 dB',
            'Dimensions': '45 x 58 x 52 cm',
            'Weight': '37 kg',
            'Color': 'Silver',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'More capacity for small families.',
          maintenance: 'Monthly: Clean filter.',
          installationTips: 'Compact installation.',
          safetyTips: 'Half load option.',
          troubleshooting: [
            'Delay start not working: Check settings',
            'Error: Call service'
          ],
          bestFor: 'Small families, better features',
          estimatedConsumption: '190 units/year'
        },
        {
          id: 'dawlance-dish-compact-premium',
          name: 'Dawlance Compact Dishwasher Premium',
          type: 'Compact Dishwasher',
          capacity: '9 Place Settings',
          price: 'PKR 68,000 - 78,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Compact',
            '6 Programs',
            'Inverter Motor',
            'Auto Program',
            'LED Touch',
            'Extra Drying',
            'Quiet'
          ],
          specifications: {
            'Capacity': '9 Place Settings',
            'Type': 'Compact',
            'Wash Programs': '6',
            'Water Consumption': '8L',
            'Power': '1700W',
            'Motor': 'Inverter',
            'Energy Rating': 'A++',
            'Noise Level': '46 dB',
            'Dimensions': '45 x 60 x 55 cm',
            'Weight': '40 kg',
            'Color': 'Silver',
            'Warranty': '3 years + 5 years motor'
          },
          warranty: '3 years + 5 years motor warranty',
          usageGuide: 'Premium compact with inverter.',
          maintenance: 'Monthly: Deep clean.',
          installationTips: 'Compact premium installation.',
          safetyTips: 'Multiple safety features.',
          troubleshooting: [
            'Inverter error: Call service',
            'Auto program error: Reset'
          ],
          bestFor: 'Small families, premium compact',
          estimatedConsumption: '185 units/year'
        },

        // ---------- DRAWER DISHWASHER - 3 Models ----------
        {
          id: 'dawlance-dish-drawer-basic',
          name: 'Dawlance Drawer Dishwasher Basic',
          type: 'Drawer Dishwasher',
          capacity: '6 Place Settings Single Drawer',
          price: 'PKR 70,000 - 80,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Single Drawer',
            '4 Wash Programs',
            'Easy Load',
            'Child Lock',
            'LED Display',
            'Quick Wash',
            'Space Saving'
          ],
          specifications: {
            'Capacity': '6 Place Settings',
            'Type': 'Single Drawer',
            'Wash Programs': '4',
            'Water Consumption': '7L',
            'Power': '1500W',
            'Energy Rating': 'A+',
            'Noise Level': '48 dB',
            'Dimensions': '45 x 60 x 55 cm',
            'Weight': '42 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Drawer design for easy loading. No bending required.',
          maintenance: 'Monthly: Clean drawer seal. Clean filter.',
          installationTips: 'Professional installation. Under-counter.',
          safetyTips: 'Drawer safety lock.',
          troubleshooting: [
            'Drawer not closing: Check track',
            'Error: Call service'
          ],
          bestFor: 'Easy access, elderly users',
          estimatedConsumption: '170 units/year'
        },
        {
          id: 'dawlance-dish-drawer-deluxe',
          name: 'Dawlance Drawer Dishwasher Deluxe',
          type: 'Drawer Dishwasher',
          capacity: '6+6 Place Settings Double Drawer',
          price: 'PKR 95,000 - 108,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Double Drawer',
            'Independent Operation',
            '6 Programs',
            'Delay Start',
            'Child Lock',
            'LED Display',
            'Quick Wash'
          ],
          specifications: {
            'Capacity': '6+6 Place Settings',
            'Type': 'Double Drawer',
            'Wash Programs': '6 per drawer',
            'Water Consumption': '7L per drawer',
            'Power': '1800W',
            'Energy Rating': 'A++',
            'Noise Level': '46 dB',
            'Dimensions': '90 x 60 x 55 cm',
            'Weight': '58 kg',
            'Color': 'Stainless Steel',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Run drawers independently. Great for small loads.',
          maintenance: 'Monthly: Clean both drawers.',
          installationTips: 'Professional installation.',
          safetyTips: 'Drawer safety.',
          troubleshooting: [
            'One drawer not working: Check settings',
            'Error: Call service'
          ],
          bestFor: 'Flexible loading, large families',
          estimatedConsumption: '180 units/year'
        },
        {
          id: 'dawlance-dish-drawer-premium',
          name: 'Dawlance Drawer Dishwasher Premium',
          type: 'Drawer Dishwasher',
          capacity: '7+7 Place Settings Double Drawer',
          price: 'PKR 120,000 - 138,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Double Drawer',
            'Inverter Motor',
            '8 Programs',
            'Auto Program',
            'LED Touch',
            'Extra Drying',
            'Quiet'
          ],
          specifications: {
            'Capacity': '7+7 Place Settings',
            'Type': 'Double Drawer',
            'Wash Programs': '8 per drawer',
            'Water Consumption': '6.5L per drawer',
            'Power': '2000W',
            'Motor': 'Inverter',
            'Energy Rating': 'A+++',
            'Noise Level': '42 dB',
            'Dimensions': '90 x 60 x 57 cm',
            'Weight': '62 kg',
            'Color': 'Stainless Steel',
            'Warranty': '3 years + 5 years motor'
          },
          warranty: '3 years + 5 years motor warranty',
          usageGuide: 'Premium double drawer with inverter.',
          maintenance: 'Monthly: Deep clean.',
          installationTips: 'Professional installation.',
          safetyTips: 'Premium safety.',
          troubleshooting: [
            'Inverter error: Call service',
            'Auto program error: Reset'
          ],
          bestFor: 'Luxury kitchens, maximum flexibility',
          estimatedConsumption: '175 units/year'
        },

        // ---------- PORTABLE DISHWASHER - 3 Models ----------
        {
          id: 'dawlance-dish-portable-basic',
          name: 'Dawlance Portable Dishwasher Basic',
          type: 'Portable Dishwasher',
          capacity: '8 Place Settings',
          price: 'PKR 35,000 - 42,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Portable Design',
            '3 Wash Programs',
            'Affordable',
            'Easy to Move',
            'Simple Controls',
            'Quick Connect',
            'Manual Fill Option'
          ],
          specifications: {
            'Capacity': '8 Place Settings',
            'Type': 'Portable',
            'Wash Programs': '3',
            'Water Connection': 'Quick connect or manual fill',
            'Power': '1200W',
            'Energy Rating': 'A',
            'Noise Level': '54 dB',
            'Dimensions': '55 x 60 x 50 cm',
            'Weight': '30 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Portable, no permanent installation. Manual water fill option.',
          maintenance: 'Monthly: Clean filter. Check quick connect.',
          installationTips: 'No plumbing needed. Plug and play.',
          safetyTips: 'Place on level surface.',
          troubleshooting: [
            'Not working: Check power, water',
            'Leaking: Check connections'
          ],
          bestFor: 'Renters, small kitchens',
          estimatedConsumption: '160 units/year'
        },
        {
          id: 'dawlance-dish-portable-deluxe',
          name: 'Dawlance Portable Dishwasher Deluxe',
          type: 'Portable Dishwasher',
          capacity: '10 Place Settings',
          price: 'PKR 45,000 - 52,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Portable',
            '4 Programs',
            'Delay Start',
            'LED Display',
            'Quick Connect',
            'Auto Fill',
            'Child Lock'
          ],
          specifications: {
            'Capacity': '10 Place Settings',
            'Type': 'Portable',
            'Wash Programs': '4',
            'Water Connection': 'Quick connect',
            'Power': '1400W',
            'Energy Rating': 'A+',
            'Noise Level': '52 dB',
            'Dimensions': '55 x 60 x 52 cm',
            'Weight': '32 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Auto fill with quick connect.',
          maintenance: 'Monthly: Clean filter.',
          installationTips: 'Quick connect to faucet.',
          safetyTips: 'Child lock safety.',
          troubleshooting: [
            'Quick connect leaking: Check seal',
            'Error: Call service'
          ],
          bestFor: 'Renters, better features',
          estimatedConsumption: '165 units/year'
        },
        {
          id: 'dawlance-dish-portable-premium',
          name: 'Dawlance Portable Dishwasher Premium',
          type: 'Portable Dishwasher',
          capacity: '12 Place Settings',
          price: 'PKR 58,000 - 68,000',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
          features: [
            'Portable',
            '6 Programs',
            'Inverter Motor',
            'LED Touch',
            'Quick Connect',
            'Auto Fill',
            'Extra Drying'
          ],
          specifications: {
            'Capacity': '12 Place Settings',
            'Type': 'Portable',
            'Wash Programs': '6',
            'Water Connection': 'Quick connect',
            'Power': '1600W',
            'Motor': 'Inverter',
            'Energy Rating': 'A++',
            'Noise Level': '48 dB',
            'Dimensions': '55 x 60 x 55 cm',
            'Weight': '35 kg',
            'Color': 'Silver',
            'Warranty': '2 years + 5 years motor'
          },
          warranty: '2 years + 5 years motor warranty',
          usageGuide: 'Premium portable with inverter.',
          maintenance: 'Monthly: Deep clean.',
          installationTips: 'Quick connect installation.',
          safetyTips: 'Multiple safety features.',
          troubleshooting: [
            'Inverter error: Call service',
            'Not drying: Check settings'
          ],
          bestFor: 'Renters, premium portable',
          estimatedConsumption: '170 units/year'
    }
  ]
},
     {
  id: 'haier-dishwasher',
  name: 'Haier',
  models: [
    // ---------- FREESTANDING DISHWASHER - 3 Models ----------
    {
      id: 'haier-dish-freestanding-basic',
      name: 'Haier Freestanding Dishwasher Basic',
      type: 'Freestanding Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 68,000 - 78,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        '5 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load Option',
        'Energy Efficient',
        'LED Display',
        'Adjustable Racks'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '5 (Normal, Eco, Intensive, Quick, Glass)',
        'Water Consumption': '10L per cycle',
        'Power': '1800W',
        'Energy Rating': 'A+',
        'Noise Level': '52 dB',
        'Drying System': 'Residual Heat',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '46 kg',
        'Color': 'White',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Scrape food off dishes before loading. Use recommended detergent. Load properly for best results.',
      maintenance: 'Monthly: Clean filter. Check spray arms. Run empty cycle with vinegar occasionally.',
      installationTips: 'Water connection required. Proper drainage needed. Level carefully.',
      safetyTips: 'Child lock for safety. Use dishwasher salt. Don\'t overload.',
      troubleshooting: [
        'Not cleaning: Check spray arms, filter',
        'Water not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, reliable performance',
      estimatedConsumption: '245 units/year'
    },
    {
      id: 'haier-dish-freestanding-deluxe',
      name: 'Haier Freestanding Dishwasher Deluxe',
      type: 'Freestanding Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 82,000 - 94,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        '6 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'Energy Efficient',
        'LED Display',
        'Adjustable Racks',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '6',
        'Water Consumption': '9.5L per cycle',
        'Power': '1900W',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Drying System': 'Heat Exchanger',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '48 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Quick wash for lightly soiled dishes. Half load for small loads.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Quick wash not effective: Use normal cycle',
        'Error: Call service'
      ],
      bestFor: 'Large families, better efficiency',
      estimatedConsumption: '235 units/year'
    },
    {
      id: 'haier-dish-freestanding-premium',
      name: 'Haier Freestanding Dishwasher Premium',
      type: 'Freestanding Dishwasher',
      capacity: '16 Place Settings',
      price: 'PKR 100,000 - 115,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        '8 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'Inverter Motor',
        'LED Touch',
        'Auto Program',
        'Extra Drying'
      ],
      specifications: {
        'Capacity': '16 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '8',
        'Water Consumption': '9L per cycle',
        'Power': '2000W',
        'Motor': 'Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '44 dB',
        'Drying System': 'Turbo Dry',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '51 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 5 years motor'
      },
      warranty: '3 years + 5 years motor warranty',
      usageGuide: 'Auto program detects soil level. Extra drying for plastics.',
      maintenance: 'Monthly: Clean filter. Check inverter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Auto program error: Reset',
        'Not drying: Check settings'
      ],
      bestFor: 'Large families, premium features',
      estimatedConsumption: '225 units/year'
    },

    // ---------- BUILT-IN DISHWASHER - 3 Models ----------
    {
      id: 'haier-dish-builtin-basic',
      name: 'Haier Built-in Dishwasher Basic',
      type: 'Built-in Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        '5 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Energy Efficient',
        'LED Display',
        'Adjustable Racks'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '5',
        'Water Consumption': '10L',
        'Power': '1800W',
        'Energy Rating': 'A+',
        'Noise Level': '50 dB',
        'Dimensions': '82 x 60 x 55 cm',
        'Cutout Size': '80 x 58 x 53 cm',
        'Weight': '49 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Integrates with kitchen cabinets. Professional installation needed.',
      maintenance: 'Monthly: Clean filter. Check door seal.',
      installationTips: 'Professional installation only. Cabinet cutout needed.',
      safetyTips: 'Built-in requires proper installation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, seamless look',
      estimatedConsumption: '245 units/year'
    },
    {
      id: 'haier-dish-builtin-deluxe',
      name: 'Haier Built-in Dishwasher Deluxe',
      type: 'Built-in Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 92,000 - 105,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '6 Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '6',
        'Water Consumption': '9.5L',
        'Power': '1900W',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '82 x 60 x 57 cm',
        'Cutout': '80 x 58 x 55 cm',
        'Weight': '51 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'More programs for better cleaning.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Built-in safety.',
      troubleshooting: [
        'Error: Call service',
        'Not cleaning: Check spray arms'
      ],
      bestFor: 'Integrated kitchens, better features',
      estimatedConsumption: '235 units/year'
    },
    {
      id: 'haier-dish-builtin-premium',
      name: 'Haier Built-in Dishwasher Premium',
      type: 'Built-in Dishwasher',
      capacity: '16 Place Settings',
      price: 'PKR 115,000 - 132,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '8 Programs',
        'Inverter Motor',
        'Auto Program',
        'LED Touch',
        'Extra Drying',
        'Quiet Operation'
      ],
      specifications: {
        'Capacity': '16 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '8',
        'Water Consumption': '9L',
        'Power': '2000W',
        'Motor': 'Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '42 dB',
        'Dimensions': '82 x 60 x 60 cm',
        'Cutout': '80 x 58 x 58 cm',
        'Weight': '54 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years + 5 years motor'
      },
      warranty: '3 years + 5 years motor warranty',
      usageGuide: 'Premium built-in with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Premium safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Auto program error: Reset'
      ],
      bestFor: 'Luxury kitchens, best performance',
      estimatedConsumption: '225 units/year'
    },

    // ---------- COMPACT DISHWASHER - 3 Models ----------
    {
      id: 'haier-compact-dishwasher',
      name: 'Haier Compact Dishwasher',
      type: 'Compact Dishwasher',
      capacity: '6 Place Settings',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        '4 Wash Programs',
        'Quick Wash',
        'Small Household',
        'Water Saving',
        'LED Display',
        'Adjustable Rack'
      ],
      specifications: {
        'Capacity': '6 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '4',
        'Water Consumption': '8L per cycle',
        'Power': '1500W',
        'Energy Rating': 'A',
        'Noise Level': '52 dB',
        'Dimensions': '45 x 55 x 50 cm',
        'Weight': '35 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Ideal for 1-2 people. Load properly for best results.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Fits small kitchens. Countertop or under-counter.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not cleaning: Check filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, apartments',
      estimatedConsumption: '175 units/year'
    },
    {
      id: 'haier-compact-deluxe',
      name: 'Haier Compact Dishwasher Deluxe',
      type: 'Compact Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 58,000 - 66,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '5 Programs',
        'Delay Start',
        'Half Load',
        'LED Display',
        'Quick Wash',
        'Energy Efficient'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '5',
        'Water Consumption': '8.5L',
        'Power': '1600W',
        'Energy Rating': 'A+',
        'Noise Level': '50 dB',
        'Dimensions': '45 x 58 x 52 cm',
        'Weight': '37 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'More capacity for small families.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Compact installation.',
      safetyTips: 'Half load option.',
      troubleshooting: [
        'Delay start not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, better features',
      estimatedConsumption: '185 units/year'
    },
    {
      id: 'haier-compact-premium',
      name: 'Haier Compact Dishwasher Premium',
      type: 'Compact Dishwasher',
      capacity: '9 Place Settings',
      price: 'PKR 72,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '6 Programs',
        'Inverter Motor',
        'Auto Program',
        'LED Touch',
        'Extra Drying',
        'Quiet'
      ],
      specifications: {
        'Capacity': '9 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '6',
        'Water Consumption': '8L',
        'Power': '1700W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '40 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 5 years motor'
      },
      warranty: '3 years + 5 years motor warranty',
      usageGuide: 'Premium compact with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Compact premium installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Auto program error: Reset'
      ],
      bestFor: 'Small families, premium compact',
      estimatedConsumption: '180 units/year'
    },

    // ---------- DRAWER DISHWASHER - 3 Models ----------
    {
      id: 'haier-dish-drawer-basic',
      name: 'Haier Drawer Dishwasher Basic',
      type: 'Drawer Dishwasher',
      capacity: '6 Place Settings Single Drawer',
      price: 'PKR 72,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Single Drawer',
        '4 Wash Programs',
        'Easy Load',
        'Child Lock',
        'LED Display',
        'Quick Wash',
        'Space Saving'
      ],
      specifications: {
        'Capacity': '6 Place Settings',
        'Type': 'Single Drawer',
        'Wash Programs': '4',
        'Water Consumption': '7L',
        'Power': '1500W',
        'Energy Rating': 'A+',
        'Noise Level': '48 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '43 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Drawer design for easy loading. No bending required.',
      maintenance: 'Monthly: Clean drawer seal. Clean filter.',
      installationTips: 'Professional installation. Under-counter.',
      safetyTips: 'Drawer safety lock.',
      troubleshooting: [
        'Drawer not closing: Check track',
        'Error: Call service'
      ],
      bestFor: 'Easy access, elderly users',
      estimatedConsumption: '170 units/year'
    },
    {
      id: 'haier-dish-drawer-deluxe',
      name: 'Haier Drawer Dishwasher Deluxe',
      type: 'Drawer Dishwasher',
      capacity: '6+6 Place Settings Double Drawer',
      price: 'PKR 98,000 - 112,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Independent Operation',
        '6 Programs',
        'Delay Start',
        'Child Lock',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '6+6 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '6 per drawer',
        'Water Consumption': '7L per drawer',
        'Power': '1800W',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '90 x 60 x 55 cm',
        'Weight': '59 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Run drawers independently. Great for small loads.',
      maintenance: 'Monthly: Clean both drawers.',
      installationTips: 'Professional installation.',
      safetyTips: 'Drawer safety.',
      troubleshooting: [
        'One drawer not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Flexible loading, large families',
      estimatedConsumption: '180 units/year'
    },
    {
      id: 'haier-dish-drawer-premium',
      name: 'Haier Drawer Dishwasher Premium',
      type: 'Drawer Dishwasher',
      capacity: '7+7 Place Settings Double Drawer',
      price: 'PKR 125,000 - 145,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Inverter Motor',
        '8 Programs',
        'Auto Program',
        'LED Touch',
        'Extra Drying',
        'Quiet'
      ],
      specifications: {
        'Capacity': '7+7 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '8 per drawer',
        'Water Consumption': '6.5L per drawer',
        'Power': '2000W',
        'Motor': 'Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '42 dB',
        'Dimensions': '90 x 60 x 57 cm',
        'Weight': '63 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years + 5 years motor'
      },
      warranty: '3 years + 5 years motor warranty',
      usageGuide: 'Premium double drawer with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Premium safety.',
      troubleshooting: [
        'Inverter error: Call service',
        'Auto program error: Reset'
      ],
      bestFor: 'Luxury kitchens, maximum flexibility',
      estimatedConsumption: '175 units/year'
    },

    // ---------- PORTABLE DISHWASHER - 3 Models ----------
    {
      id: 'haier-dish-portable-basic',
      name: 'Haier Portable Dishwasher Basic',
      type: 'Portable Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 38,000 - 45,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable Design',
        '3 Wash Programs',
        'Affordable',
        'Easy to Move',
        'Simple Controls',
        'Quick Connect',
        'Manual Fill Option'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '3',
        'Water Connection': 'Quick connect or manual fill',
        'Power': '1200W',
        'Energy Rating': 'A',
        'Noise Level': '54 dB',
        'Dimensions': '55 x 60 x 50 cm',
        'Weight': '30 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Portable, no permanent installation. Manual water fill option.',
      maintenance: 'Monthly: Clean filter. Check quick connect.',
      installationTips: 'No plumbing needed. Plug and play.',
      safetyTips: 'Place on level surface.',
      troubleshooting: [
        'Not working: Check power, water',
        'Leaking: Check connections'
      ],
      bestFor: 'Renters, small kitchens',
      estimatedConsumption: '155 units/year'
    },
    {
      id: 'haier-dish-portable-deluxe',
      name: 'Haier Portable Dishwasher Deluxe',
      type: 'Portable Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 48,000 - 56,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '4 Programs',
        'Delay Start',
        'LED Display',
        'Quick Connect',
        'Auto Fill',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '4',
        'Water Connection': 'Quick connect',
        'Power': '1400W',
        'Energy Rating': 'A+',
        'Noise Level': '52 dB',
        'Dimensions': '55 x 60 x 52 cm',
        'Weight': '32 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto fill with quick connect.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Quick connect to faucet.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Quick connect leaking: Check seal',
        'Error: Call service'
      ],
      bestFor: 'Renters, better features',
      estimatedConsumption: '160 units/year'
    },
    {
      id: 'haier-dish-portable-premium',
      name: 'Haier Portable Dishwasher Premium',
      type: 'Portable Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 62,000 - 72,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '6 Programs',
        'Inverter Motor',
        'LED Touch',
        'Quick Connect',
        'Auto Fill',
        'Extra Drying'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '6',
        'Water Connection': 'Quick connect',
        'Power': '1600W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Dimensions': '55 x 60 x 55 cm',
        'Weight': '35 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Premium portable with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Quick connect installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Not drying: Check settings'
      ],
      bestFor: 'Renters, premium portable',
      estimatedConsumption: '165 units/year'
    }
  ]
},
     {
  id: 'orient-dishwasher',
  name: 'Orient',
  models: [
    // ---------- FREESTANDING DISHWASHER - 3 Models ----------
    {
      id: 'orient-dish-freestanding-basic',
      name: 'Orient Freestanding Dishwasher Basic',
      type: 'Freestanding Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 60,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        '5 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load Option',
        'Energy Efficient',
        'LED Display',
        'Adjustable Racks',
        'Budget Friendly'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '5 (Normal, Eco, Intensive, Quick, Glass)',
        'Water Consumption': '10.5L per cycle',
        'Power': '1800W',
        'Energy Rating': 'A',
        'Noise Level': '54 dB',
        'Drying System': 'Residual Heat',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '44 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Scrape food off dishes before loading. Use recommended detergent. Load properly for best results.',
      maintenance: 'Monthly: Clean filter. Check spray arms. Run empty cycle with vinegar occasionally.',
      installationTips: 'Water connection required. Proper drainage needed. Level carefully.',
      safetyTips: 'Child lock for safety. Use dishwasher salt. Don\'t overload.',
      troubleshooting: [
        'Not cleaning: Check spray arms, filter',
        'Water not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, budget conscious',
      estimatedConsumption: '260 units/year'
    },
    {
      id: 'orient-dish-freestanding-deluxe',
      name: 'Orient Freestanding Dishwasher Deluxe',
      type: 'Freestanding Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 72,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        '6 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'Energy Efficient',
        'LED Display',
        'Adjustable Racks',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '6',
        'Water Consumption': '10L per cycle',
        'Power': '1850W',
        'Energy Rating': 'A+',
        'Noise Level': '50 dB',
        'Drying System': 'Heat Exchanger',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '46 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Quick wash for lightly soiled dishes. Half load for small loads.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Quick wash not effective: Use normal cycle',
        'Error: Call service'
      ],
      bestFor: 'Large families, value for money',
      estimatedConsumption: '250 units/year'
    },
    {
      id: 'orient-dish-freestanding-premium',
      name: 'Orient Freestanding Dishwasher Premium',
      type: 'Freestanding Dishwasher',
      capacity: '16 Place Settings',
      price: 'PKR 88,000 - 98,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        '8 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'Inverter Motor',
        'LED Display',
        'Auto Program',
        'Extra Drying'
      ],
      specifications: {
        'Capacity': '16 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '8',
        'Water Consumption': '9.5L per cycle',
        'Power': '1900W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Drying System': 'Turbo Dry',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '49 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Auto program detects soil level. Extra drying for plastics.',
      maintenance: 'Monthly: Clean filter. Check inverter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Auto program error: Reset',
        'Not drying: Check settings'
      ],
      bestFor: 'Large families, premium features on budget',
      estimatedConsumption: '240 units/year'
    },

    // ---------- BUILT-IN DISHWASHER - 3 Models ----------
    {
      id: 'orient-builtin-dishwasher',
      name: 'Orient Built-in Dishwasher',
      type: 'Built-in Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 70,000 - 80,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        'Silent Operation',
        '7 Programs',
        'Digital Display',
        'Auto Door Open',
        'Child Lock',
        'Delay Start'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '7 including Auto, Hygiene',
        'Water Consumption': '10L',
        'Power': '2000W',
        'Noise Level': '48 dB',
        'Energy Rating': 'A+',
        'Dimensions': '82 x 60 x 55 cm',
        'Cutout Size': '80 x 58 x 53 cm',
        'Weight': '50 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Integrates with kitchen cabinets. Professional installation needed.',
      maintenance: 'Monthly: Clean filter. Check door seal.',
      installationTips: 'Professional installation only. Cabinet cutout needed.',
      safetyTips: 'Built-in requires proper installation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, modern look',
      estimatedConsumption: '250 units/year'
    },
    {
      id: 'orient-builtin-deluxe',
      name: 'Orient Built-in Dishwasher Deluxe',
      type: 'Built-in Dishwasher',
      capacity: '15 Place Settings',
      price: 'PKR 85,000 - 95,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '8 Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'LED Display',
        'Quick Wash',
        'Hygiene Program'
      ],
      specifications: {
        'Capacity': '15 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '8',
        'Water Consumption': '9.5L',
        'Power': '2000W',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '82 x 60 x 57 cm',
        'Cutout': '80 x 58 x 55 cm',
        'Weight': '52 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Hygiene program for sanitization.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Built-in safety.',
      troubleshooting: [
        'Error: Call service',
        'Not cleaning: Check spray arms'
      ],
      bestFor: 'Integrated kitchens, hygiene focus',
      estimatedConsumption: '240 units/year'
    },
    {
      id: 'orient-builtin-premium',
      name: 'Orient Built-in Dishwasher Premium',
      type: 'Built-in Dishwasher',
      capacity: '16 Place Settings',
      price: 'PKR 102,000 - 115,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '9 Programs',
        'Inverter Motor',
        'Auto Program',
        'LED Touch',
        'Extra Drying',
        'Quiet Operation',
        'WiFi Ready'
      ],
      specifications: {
        'Capacity': '16 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '9',
        'Water Consumption': '9L',
        'Power': '2100W',
        'Motor': 'Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '42 dB',
        'Dimensions': '82 x 60 x 60 cm',
        'Cutout': '80 x 58 x 58 cm',
        'Weight': '55 kg',
        'Color': 'Black Stainless',
        'Warranty': '3 years + 5 years motor'
      },
      warranty: '3 years + 5 years motor warranty',
      usageGuide: 'Premium built-in with inverter and smart features.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Premium safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'WiFi not connecting: Check router'
      ],
      bestFor: 'Luxury kitchens, smart home',
      estimatedConsumption: '230 units/year'
    },

    // ---------- COMPACT DISHWASHER - 3 Models ----------
    {
      id: 'orient-compact-basic',
      name: 'Orient Compact Dishwasher Basic',
      type: 'Compact Dishwasher',
      capacity: '6 Place Settings',
      price: 'PKR 42,000 - 48,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        '4 Wash Programs',
        'Quick Wash',
        'Small Household',
        'Water Saving',
        'LED Display',
        'Adjustable Rack'
      ],
      specifications: {
        'Capacity': '6 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '4',
        'Water Consumption': '8L per cycle',
        'Power': '1400W',
        'Energy Rating': 'A',
        'Noise Level': '52 dB',
        'Dimensions': '45 x 55 x 50 cm',
        'Weight': '34 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Ideal for 1-2 people. Load properly for best results.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Fits small kitchens. Countertop or under-counter.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not cleaning: Check filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, apartments',
      estimatedConsumption: '170 units/year'
    },
    {
      id: 'orient-compact-deluxe',
      name: 'Orient Compact Dishwasher Deluxe',
      type: 'Compact Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 52,000 - 60,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '5 Programs',
        'Delay Start',
        'Half Load',
        'LED Display',
        'Quick Wash',
        'Energy Efficient'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '5',
        'Water Consumption': '8.5L',
        'Power': '1500W',
        'Energy Rating': 'A+',
        'Noise Level': '50 dB',
        'Dimensions': '45 x 58 x 52 cm',
        'Weight': '36 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'More capacity for small families.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Compact installation.',
      safetyTips: 'Half load option.',
      troubleshooting: [
        'Delay start not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, better features',
      estimatedConsumption: '180 units/year'
    },
    {
      id: 'orient-compact-premium',
      name: 'Orient Compact Dishwasher Premium',
      type: 'Compact Dishwasher',
      capacity: '9 Place Settings',
      price: 'PKR 65,000 - 75,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '6 Programs',
        'Inverter Motor',
        'Auto Program',
        'LED Display',
        'Extra Drying',
        'Quiet'
      ],
      specifications: {
        'Capacity': '9 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '6',
        'Water Consumption': '8L',
        'Power': '1600W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '39 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Premium compact with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Compact premium installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Auto program error: Reset'
      ],
      bestFor: 'Small families, premium compact',
      estimatedConsumption: '175 units/year'
    },

    // ---------- DRAWER DISHWASHER - 3 Models ----------
    {
      id: 'orient-drawer-basic',
      name: 'Orient Drawer Dishwasher Basic',
      type: 'Drawer Dishwasher',
      capacity: '6 Place Settings Single Drawer',
      price: 'PKR 68,000 - 78,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Single Drawer',
        '4 Wash Programs',
        'Easy Load',
        'Child Lock',
        'LED Display',
        'Quick Wash',
        'Space Saving'
      ],
      specifications: {
        'Capacity': '6 Place Settings',
        'Type': 'Single Drawer',
        'Wash Programs': '4',
        'Water Consumption': '7L',
        'Power': '1400W',
        'Energy Rating': 'A+',
        'Noise Level': '48 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '42 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Drawer design for easy loading. No bending required.',
      maintenance: 'Monthly: Clean drawer seal. Clean filter.',
      installationTips: 'Professional installation. Under-counter.',
      safetyTips: 'Drawer safety lock.',
      troubleshooting: [
        'Drawer not closing: Check track',
        'Error: Call service'
      ],
      bestFor: 'Easy access, elderly users',
      estimatedConsumption: '165 units/year'
    },
    {
      id: 'orient-drawer-deluxe',
      name: 'Orient Drawer Dishwasher Deluxe',
      type: 'Drawer Dishwasher',
      capacity: '6+6 Place Settings Double Drawer',
      price: 'PKR 92,000 - 105,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Independent Operation',
        '5 Programs',
        'Delay Start',
        'Child Lock',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '6+6 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '5 per drawer',
        'Water Consumption': '7L per drawer',
        'Power': '1700W',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '90 x 60 x 55 cm',
        'Weight': '57 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Run drawers independently. Great for small loads.',
      maintenance: 'Monthly: Clean both drawers.',
      installationTips: 'Professional installation.',
      safetyTips: 'Drawer safety.',
      troubleshooting: [
        'One drawer not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Flexible loading, large families',
      estimatedConsumption: '175 units/year'
    },
    {
      id: 'orient-drawer-premium',
      name: 'Orient Drawer Dishwasher Premium',
      type: 'Drawer Dishwasher',
      capacity: '7+7 Place Settings Double Drawer',
      price: 'PKR 115,000 - 132,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Inverter Motor',
        '7 Programs',
        'Auto Program',
        'LED Touch',
        'Extra Drying',
        'Quiet'
      ],
      specifications: {
        'Capacity': '7+7 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '7 per drawer',
        'Water Consumption': '6.5L per drawer',
        'Power': '1900W',
        'Motor': 'Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '42 dB',
        'Dimensions': '90 x 60 x 57 cm',
        'Weight': '61 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years + 5 years motor'
      },
      warranty: '3 years + 5 years motor warranty',
      usageGuide: 'Premium double drawer with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Premium safety.',
      troubleshooting: [
        'Inverter error: Call service',
        'Auto program error: Reset'
      ],
      bestFor: 'Luxury kitchens, maximum flexibility',
      estimatedConsumption: '170 units/year'
    },

    // ---------- PORTABLE DISHWASHER - 3 Models ----------
    {
      id: 'orient-portable-basic',
      name: 'Orient Portable Dishwasher Basic',
      type: 'Portable Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 35,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable Design',
        '3 Wash Programs',
        'Affordable',
        'Easy to Move',
        'Simple Controls',
        'Quick Connect',
        'Manual Fill Option'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '3',
        'Water Connection': 'Quick connect or manual fill',
        'Power': '1200W',
        'Energy Rating': 'A',
        'Noise Level': '55 dB',
        'Dimensions': '55 x 60 x 50 cm',
        'Weight': '29 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Portable, no permanent installation. Manual water fill option.',
      maintenance: 'Monthly: Clean filter. Check quick connect.',
      installationTips: 'No plumbing needed. Plug and play.',
      safetyTips: 'Place on level surface.',
      troubleshooting: [
        'Not working: Check power, water',
        'Leaking: Check connections'
      ],
      bestFor: 'Renters, small kitchens, budget',
      estimatedConsumption: '150 units/year'
    },
    {
      id: 'orient-portable-deluxe',
      name: 'Orient Portable Dishwasher Deluxe',
      type: 'Portable Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '4 Programs',
        'Delay Start',
        'LED Display',
        'Quick Connect',
        'Auto Fill',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '4',
        'Water Connection': 'Quick connect',
        'Power': '1300W',
        'Energy Rating': 'A+',
        'Noise Level': '53 dB',
        'Dimensions': '55 x 60 x 52 cm',
        'Weight': '31 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto fill with quick connect.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Quick connect to faucet.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Quick connect leaking: Check seal',
        'Error: Call service'
      ],
      bestFor: 'Renters, better features',
      estimatedConsumption: '155 units/year'
    },
    {
      id: 'orient-portable-premium',
      name: 'Orient Portable Dishwasher Premium',
      type: 'Portable Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '5 Programs',
        'Inverter Motor',
        'LED Display',
        'Quick Connect',
        'Auto Fill',
        'Extra Drying'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '5',
        'Water Connection': 'Quick connect',
        'Power': '1500W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '49 dB',
        'Dimensions': '55 x 60 x 55 cm',
        'Weight': '34 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Premium portable with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Quick connect installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Not drying: Check settings'
      ],
      bestFor: 'Renters, premium portable',
      estimatedConsumption: '160 units/year'
    }
  ]
},
      {
  id: 'bosch-dishwasher',
  name: 'Bosch',
  models: [
    // ---------- FREESTANDING DISHWASHER - 3 Models ----------
    {
      id: 'bosch-dish-freestanding-basic',
      name: 'Bosch Freestanding Dishwasher Basic',
      type: 'Freestanding Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 85,000 - 95,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'German Engineering',
        '5 Wash Programs',
        'EcoSilence Drive',
        'Delay Start',
        'Child Lock',
        'Half Load Option',
        'Energy Efficient',
        'LED Display'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '5 (Normal, Eco, Intensive, Quick, Glass)',
        'Water Consumption': '9.5L per cycle',
        'Power': '1900W',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Drying System': 'Heat Exchanger',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '48 kg',
        'Color': 'White',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'German engineering for reliable performance. Scrape food off dishes before loading. Use recommended detergent.',
      maintenance: 'Monthly: Clean filter. Check spray arms. Run empty cycle with cleaner occasionally.',
      installationTips: 'Water connection required. Proper drainage needed. Level carefully.',
      safetyTips: 'Child lock for safety. Use dishwasher salt and rinse aid.',
      troubleshooting: [
        'Not cleaning: Check spray arms, filter',
        'Water not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Quality seekers, reliable performance',
      estimatedConsumption: '230 units/year'
    },
    {
      id: 'bosch-dish-freestanding-deluxe',
      name: 'Bosch Freestanding Dishwasher Deluxe',
      type: 'Freestanding Dishwasher',
      capacity: '13 Place Settings',
      price: 'PKR 98,000 - 110,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'EcoSilence Drive',
        '6 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'Energy Efficient',
        'LED Display',
        'Quick Wash',
        'VarioSpeed'
      ],
      specifications: {
        'Capacity': '13 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '6',
        'Water Consumption': '9L per cycle',
        'Power': '1950W',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Drying System': 'Heat Exchanger',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '50 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'VarioSpeed reduces wash time by 66%. Perfect for busy households.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'VarioSpeed not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Busy families, time savers',
      estimatedConsumption: '225 units/year'
    },
    {
      id: 'bosch-silent-dishwasher',
      name: 'Bosch Silent Series',
      type: 'Freestanding Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 115,000 - 130,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Extremely Quiet (44 dB)',
        'EcoSilence Drive',
        'VarioSpeed Plus',
        'Auto Program',
        'PerfectDry',
        'LED Display',
        'Child Lock',
        '8 Programs'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '8 including Auto, Hygiene',
        'Water Consumption': '8.5L per cycle',
        'Power': '2000W',
        'Motor': 'EcoSilence Drive',
        'Energy Rating': 'A+++',
        'Noise Level': '44 dB',
        'Drying System': 'PerfectDry',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '52 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years comprehensive warranty',
      usageGuide: 'Premium dishwasher. Very quiet operation. Perfect for open kitchens.',
      maintenance: 'Monthly: Clean filter. Check PerfectDry system.',
      installationTips: 'Professional installation. Standard dishwasher installation.',
      safetyTips: 'German quality. Reliable performance.',
      troubleshooting: [
        'PerfectDry not working: Check rinse aid',
        'Error: Call service'
      ],
      bestFor: 'Premium homes, open kitchens',
      estimatedConsumption: '220 units/year'
    },

    // ---------- BUILT-IN DISHWASHER - 3 Models ----------
    {
      id: 'bosch-builtin-basic',
      name: 'Bosch Built-in Dishwasher Basic',
      type: 'Built-in Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        '5 Wash Programs',
        'EcoSilence Drive',
        'Delay Start',
        'Child Lock',
        'Energy Efficient',
        'LED Display'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '5',
        'Water Consumption': '9.5L',
        'Power': '1900W',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Dimensions': '82 x 60 x 55 cm',
        'Cutout Size': '80 x 58 x 53 cm',
        'Weight': '52 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Integrates with kitchen cabinets. Professional installation needed.',
      maintenance: 'Monthly: Clean filter. Check door seal.',
      installationTips: 'Professional installation only. Cabinet cutout needed.',
      safetyTips: 'Built-in requires proper installation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, German quality',
      estimatedConsumption: '230 units/year'
    },
    {
      id: 'bosch-builtin-deluxe',
      name: 'Bosch Built-in Dishwasher Deluxe',
      type: 'Built-in Dishwasher',
      capacity: '13 Place Settings',
      price: 'PKR 112,000 - 128,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '6 Programs',
        'VarioSpeed',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'LED Display',
        'PerfectDry'
      ],
      specifications: {
        'Capacity': '13 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '6',
        'Water Consumption': '9L',
        'Power': '1950W',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Dimensions': '82 x 60 x 57 cm',
        'Cutout': '80 x 58 x 55 cm',
        'Weight': '54 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'VarioSpeed for faster washing. PerfectDry for better drying.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Built-in safety.',
      troubleshooting: [
        'Error: Call service',
        'Not cleaning: Check spray arms'
      ],
      bestFor: 'Integrated kitchens, fast wash',
      estimatedConsumption: '225 units/year'
    },
    {
      id: 'bosch-builtin-premium',
      name: 'Bosch Built-in Dishwasher Premium',
      type: 'Built-in Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 135,000 - 155,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '8 Programs',
        'EcoSilence Drive',
        'VarioSpeed Plus',
        'Auto Program',
        'PerfectDry',
        'LED Touch',
        'Home Connect'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '8',
        'Water Consumption': '8.5L',
        'Power': '2000W',
        'Motor': 'EcoSilence Drive',
        'Energy Rating': 'A+++',
        'Noise Level': '42 dB',
        'Drying': 'PerfectDry',
        'Smart': 'Home Connect',
        'Dimensions': '82 x 60 x 60 cm',
        'Cutout': '80 x 58 x 58 cm',
        'Weight': '57 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Home Connect for smart control via app. Perfect drying results.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Premium safety features.',
      troubleshooting: [
        'Home Connect not working: Check WiFi',
        'Error: Call service'
      ],
      bestFor: 'Luxury kitchens, smart home',
      estimatedConsumption: '220 units/year'
    },

    // ---------- COMPACT DISHWASHER - 3 Models ----------
    {
      id: 'bosch-compact-basic',
      name: 'Bosch Compact Dishwasher Basic',
      type: 'Compact Dishwasher',
      capacity: '9 Place Settings',
      price: 'PKR 75,000 - 85,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        '5 Wash Programs',
        'EcoSilence Drive',
        'Quick Wash',
        'Small Household',
        'Water Saving',
        'LED Display'
      ],
      specifications: {
        'Capacity': '9 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '5',
        'Water Consumption': '8L per cycle',
        'Power': '1700W',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Dimensions': '45 x 55 x 50 cm',
        'Weight': '38 kg',
        'Color': 'White',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Perfect for small kitchens. German quality in compact size.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Fits small kitchens. Countertop or under-counter.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not cleaning: Check filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, apartments, quality seekers',
      estimatedConsumption: '190 units/year'
    },
    {
      id: 'bosch-compact-deluxe',
      name: 'Bosch Compact Dishwasher Deluxe',
      type: 'Compact Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 88,000 - 98,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '6 Programs',
        'VarioSpeed',
        'Delay Start',
        'Half Load',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '6',
        'Water Consumption': '8L',
        'Power': '1750W',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Dimensions': '45 x 58 x 52 cm',
        'Weight': '40 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'More capacity with fast wash option.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Compact installation.',
      safetyTips: 'Half load option.',
      troubleshooting: [
        'VarioSpeed not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, fast wash',
      estimatedConsumption: '195 units/year'
    },
    {
      id: 'bosch-compact-premium',
      name: 'Bosch Compact Dishwasher Premium',
      type: 'Compact Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 105,000 - 118,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '7 Programs',
        'EcoSilence Drive',
        'PerfectDry',
        'Auto Program',
        'LED Touch',
        'Extra Quiet'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '7',
        'Water Consumption': '7.5L',
        'Power': '1800W',
        'Motor': 'EcoSilence Drive',
        'Energy Rating': 'A+++',
        'Noise Level': '44 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '42 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Premium compact with perfect drying.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Compact premium installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'PerfectDry not working: Check rinse aid',
        'Error: Call service'
      ],
      bestFor: 'Small families, premium compact',
      estimatedConsumption: '185 units/year'
    },

    // ---------- DRAWER DISHWASHER - 3 Models ----------
    {
      id: 'bosch-drawer-basic',
      name: 'Bosch Drawer Dishwasher Basic',
      type: 'Drawer Dishwasher',
      capacity: '6 Place Settings Single Drawer',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Single Drawer',
        '4 Wash Programs',
        'Easy Load',
        'Child Lock',
        'EcoSilence Drive',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '6 Place Settings',
        'Type': 'Single Drawer',
        'Wash Programs': '4',
        'Water Consumption': '7L',
        'Power': '1600W',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '45 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Drawer design for easy loading. No bending required. Perfect for elderly.',
      maintenance: 'Monthly: Clean drawer seal. Clean filter.',
      installationTips: 'Professional installation. Under-counter.',
      safetyTips: 'Drawer safety lock.',
      troubleshooting: [
        'Drawer not closing: Check track',
        'Error: Call service'
      ],
      bestFor: 'Easy access, elderly users, premium',
      estimatedConsumption: '165 units/year'
    },
    {
      id: 'bosch-drawer-deluxe',
      name: 'Bosch Drawer Dishwasher Deluxe',
      type: 'Drawer Dishwasher',
      capacity: '6+6 Place Settings Double Drawer',
      price: 'PKR 135,000 - 155,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Independent Operation',
        '5 Programs',
        'VarioSpeed',
        'Delay Start',
        'Child Lock',
        'LED Display'
      ],
      specifications: {
        'Capacity': '6+6 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '5 per drawer',
        'Water Consumption': '7L per drawer',
        'Power': '1800W',
        'Energy Rating': 'A+++',
        'Noise Level': '44 dB',
        'Dimensions': '90 x 60 x 55 cm',
        'Weight': '62 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Run drawers independently. Great for mixed loads.',
      maintenance: 'Monthly: Clean both drawers.',
      installationTips: 'Professional installation.',
      safetyTips: 'Drawer safety.',
      troubleshooting: [
        'One drawer not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Flexible loading, large families, premium',
      estimatedConsumption: '170 units/year'
    },
    {
      id: 'bosch-drawer-premium',
      name: 'Bosch Drawer Dishwasher Premium',
      type: 'Drawer Dishwasher',
      capacity: '7+7 Place Settings Double Drawer',
      price: 'PKR 165,000 - 185,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'EcoSilence Drive',
        '6 Programs',
        'PerfectDry',
        'Auto Program',
        'Home Connect',
        'LED Touch'
      ],
      specifications: {
        'Capacity': '7+7 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '6 per drawer',
        'Water Consumption': '6.5L per drawer',
        'Power': '2000W',
        'Motor': 'EcoSilence Drive',
        'Energy Rating': 'A+++',
        'Noise Level': '42 dB',
        'Drying': 'PerfectDry',
        'Smart': 'Home Connect',
        'Dimensions': '90 x 60 x 57 cm',
        'Weight': '66 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Premium double drawer with smart features.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Premium safety.',
      troubleshooting: [
        'Home Connect not working: Check WiFi',
        'PerfectDry error: Check settings'
      ],
      bestFor: 'Luxury kitchens, maximum flexibility',
      estimatedConsumption: '165 units/year'
    },

    // ---------- PORTABLE DISHWASHER - 3 Models ----------
    {
      id: 'bosch-portable-basic',
      name: 'Bosch Portable Dishwasher Basic',
      type: 'Portable Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 65,000 - 75,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable Design',
        '4 Wash Programs',
        'Quick Connect',
        'Easy to Move',
        'LED Display',
        'Quick Wash',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '4',
        'Water Connection': 'Quick connect',
        'Power': '1500W',
        'Energy Rating': 'A+',
        'Noise Level': '52 dB',
        'Dimensions': '55 x 60 x 50 cm',
        'Weight': '32 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Portable, no permanent installation. Quick connect to faucet.',
      maintenance: 'Monthly: Clean filter. Check quick connect.',
      installationTips: 'No plumbing needed. Plug and play.',
      safetyTips: 'Place on level surface.',
      troubleshooting: [
        'Not working: Check power, water',
        'Quick connect leaking: Check seal'
      ],
      bestFor: 'Renters, small kitchens, quality portable',
      estimatedConsumption: '160 units/year'
    },
    {
      id: 'bosch-portable-deluxe',
      name: 'Bosch Portable Dishwasher Deluxe',
      type: 'Portable Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '5 Programs',
        'Delay Start',
        'LED Display',
        'Quick Connect',
        'Auto Fill',
        'Child Lock',
        'VarioSpeed'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '5',
        'Water Connection': 'Quick connect',
        'Power': '1600W',
        'Energy Rating': 'A++',
        'Noise Level': '50 dB',
        'Dimensions': '55 x 60 x 52 cm',
        'Weight': '34 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'VarioSpeed for faster washing. Auto fill with quick connect.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Quick connect to faucet.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'VarioSpeed not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Renters, fast wash needed',
      estimatedConsumption: '165 units/year'
    },
    {
      id: 'bosch-portable-premium',
      name: 'Bosch Portable Dishwasher Premium',
      type: 'Portable Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '6 Programs',
        'EcoSilence Drive',
        'PerfectDry',
        'LED Touch',
        'Quick Connect',
        'Auto Fill',
        'Home Connect'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '6',
        'Water Connection': 'Quick connect',
        'Power': '1800W',
        'Motor': 'EcoSilence Drive',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Drying': 'PerfectDry',
        'Smart': 'Home Connect',
        'Dimensions': '55 x 60 x 55 cm',
        'Weight': '37 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Premium portable with smart features.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Quick connect installation. Strong WiFi.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Home Connect not working: Check WiFi',
        'PerfectDry error: Check settings'
      ],
      bestFor: 'Renters, premium portable',
      estimatedConsumption: '170 units/year'
    }
  ]
},
    {
  id: 'samsung-dishwasher',
  name: 'Samsung',
  models: [
    // ---------- FREESTANDING DISHWASHER - 3 Models ----------
    {
      id: 'samsung-dish-freestanding-basic',
      name: 'Samsung Freestanding Dishwasher Basic',
      type: 'Freestanding Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 75,000 - 85,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Digital Inverter Motor',
        '5 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load Option',
        'Energy Efficient',
        'LED Display',
        'Adjustable Racks'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '5 (Normal, Eco, Intensive, Quick, Glass)',
        'Water Consumption': '9.5L per cycle',
        'Power': '1800W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '50 dB',
        'Drying System': 'Residual Heat',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '47 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Digital inverter motor for quiet operation. Scrape food off dishes before loading. Use recommended detergent.',
      maintenance: 'Monthly: Clean filter. Check spray arms. Run empty cycle with cleaner occasionally.',
      installationTips: 'Water connection required. Proper drainage needed. Level carefully.',
      safetyTips: 'Child lock for safety. Use dishwasher salt and rinse aid.',
      troubleshooting: [
        'Not cleaning: Check spray arms, filter',
        'Water not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, reliable performance',
      estimatedConsumption: '235 units/year'
    },
    {
      id: 'samsung-dish-freestanding-deluxe',
      name: 'Samsung Freestanding Dishwasher Deluxe',
      type: 'Freestanding Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 88,000 - 98,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Digital Inverter Motor',
        '6 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'Energy Efficient',
        'LED Display',
        'Quick Wash',
        'Zone Booster'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '6',
        'Water Consumption': '9L per cycle',
        'Power': '1900W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '48 dB',
        'Drying System': 'Heat Exchanger',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '49 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Zone booster for extra cleaning power in specific zone.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Zone booster not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Large families, targeted cleaning',
      estimatedConsumption: '230 units/year'
    },
    {
      id: 'samsung-stormwash',
      name: 'Samsung StormWash',
      type: 'Freestanding Dishwasher',
      capacity: '16 Place Settings',
      price: 'PKR 105,000 - 120,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'StormWash Technology',
        'Zone Booster',
        'Digital Inverter Motor',
        'WiFi Connectivity',
        'WaterWall',
        '8 Wash Programs',
        'LED Display',
        'Auto Program'
      ],
      specifications: {
        'Capacity': '16 Place Settings',
        'Type': 'Freestanding',
        'Technology': 'StormWash with WaterWall',
        'Motor': 'Digital Inverter',
        'Connectivity': 'SmartThings App',
        'Wash Programs': '8',
        'Water Consumption': '8.5L',
        'Power': '2000W',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '52 kg',
        'Color': 'Black Stainless',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Powerful cleaning with StormWash. App control available.',
      maintenance: 'Monthly: Clean filter. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Smart features for safety.',
      troubleshooting: [
        'StormWash not working: Check settings',
        'WiFi not connecting: Check router'
      ],
      bestFor: 'Large families, smart home users',
      estimatedConsumption: '225 units/year'
    },

    // ---------- BUILT-IN DISHWASHER - 3 Models ----------
    {
      id: 'samsung-builtin-basic',
      name: 'Samsung Built-in Dishwasher Basic',
      type: 'Built-in Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 85,000 - 95,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        '5 Wash Programs',
        'Digital Inverter Motor',
        'Delay Start',
        'Child Lock',
        'Energy Efficient',
        'LED Display'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '5',
        'Water Consumption': '9.5L',
        'Power': '1800W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Dimensions': '82 x 60 x 55 cm',
        'Cutout Size': '80 x 58 x 53 cm',
        'Weight': '50 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Integrates with kitchen cabinets. Professional installation needed.',
      maintenance: 'Monthly: Clean filter. Check door seal.',
      installationTips: 'Professional installation only. Cabinet cutout needed.',
      safetyTips: 'Built-in requires proper installation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, reliable',
      estimatedConsumption: '235 units/year'
    },
    {
      id: 'samsung-builtin-deluxe',
      name: 'Samsung Built-in Dishwasher Deluxe',
      type: 'Built-in Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 100,000 - 115,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '6 Programs',
        'Zone Booster',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '6',
        'Water Consumption': '9L',
        'Power': '1900W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Dimensions': '82 x 60 x 57 cm',
        'Cutout': '80 x 58 x 55 cm',
        'Weight': '52 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Zone booster for tough stains.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Built-in safety.',
      troubleshooting: [
        'Error: Call service',
        'Not cleaning: Check spray arms'
      ],
      bestFor: 'Integrated kitchens, better features',
      estimatedConsumption: '230 units/year'
    },
    {
      id: 'samsung-builtin-premium',
      name: 'Samsung Built-in Dishwasher Premium',
      type: 'Built-in Dishwasher',
      capacity: '16 Place Settings',
      price: 'PKR 125,000 - 145,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '8 Programs',
        'StormWash',
        'WaterWall',
        'Auto Program',
        'LED Touch',
        'WiFi',
        'Zone Booster'
      ],
      specifications: {
        'Capacity': '16 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '8',
        'Water Consumption': '8.5L',
        'Power': '2000W',
        'Motor': 'Digital Inverter',
        'Technology': 'StormWash',
        'Smart': 'SmartThings',
        'Energy Rating': 'A+++',
        'Noise Level': '44 dB',
        'Dimensions': '82 x 60 x 60 cm',
        'Cutout': '80 x 58 x 58 cm',
        'Weight': '55 kg',
        'Color': 'Black Stainless',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Premium built-in with smart features.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Premium safety features.',
      troubleshooting: [
        'SmartThings not working: Check WiFi',
        'StormWash error: Call service'
      ],
      bestFor: 'Luxury kitchens, smart home',
      estimatedConsumption: '225 units/year'
    },

    // ---------- COMPACT DISHWASHER - 3 Models ----------
    {
      id: 'samsung-compact-basic',
      name: 'Samsung Compact Dishwasher Basic',
      type: 'Compact Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 65,000 - 75,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        '4 Wash Programs',
        'Digital Inverter Motor',
        'Quick Wash',
        'Small Household',
        'Water Saving',
        'LED Display'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '4',
        'Water Consumption': '8L per cycle',
        'Power': '1600W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Dimensions': '45 x 55 x 50 cm',
        'Weight': '36 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Perfect for small kitchens. Samsung quality in compact size.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Fits small kitchens. Countertop or under-counter.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not cleaning: Check filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, apartments',
      estimatedConsumption: '185 units/year'
    },
    {
      id: 'samsung-compact-deluxe',
      name: 'Samsung Compact Dishwasher Deluxe',
      type: 'Compact Dishwasher',
      capacity: '9 Place Settings',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '5 Programs',
        'Zone Booster',
        'Delay Start',
        'Half Load',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '9 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '5',
        'Water Consumption': '8L',
        'Power': '1650W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Dimensions': '45 x 58 x 52 cm',
        'Weight': '38 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Zone booster for tough stains in compact size.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Compact installation.',
      safetyTips: 'Half load option.',
      troubleshooting: [
        'Zone booster not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, better cleaning',
      estimatedConsumption: '190 units/year'
    },
    {
      id: 'samsung-compact-premium',
      name: 'Samsung Compact Dishwasher Premium',
      type: 'Compact Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '6 Programs',
        'Digital Inverter',
        'Auto Program',
        'LED Display',
        'Quick Wash',
        'WiFi Ready'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '6',
        'Water Consumption': '7.5L',
        'Power': '1700W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '44 dB',
        'Smart': 'SmartThings Ready',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '40 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Premium compact with smart features.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Compact premium installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Smart not connecting: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, premium compact',
      estimatedConsumption: '185 units/year'
    },

    // ---------- DRAWER DISHWASHER - 3 Models ----------
    {
      id: 'samsung-drawer-basic',
      name: 'Samsung Drawer Dishwasher Basic',
      type: 'Drawer Dishwasher',
      capacity: '6 Place Settings Single Drawer',
      price: 'PKR 85,000 - 95,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Single Drawer',
        '4 Wash Programs',
        'Easy Load',
        'Child Lock',
        'Digital Inverter',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '6 Place Settings',
        'Type': 'Single Drawer',
        'Wash Programs': '4',
        'Water Consumption': '7L',
        'Power': '1500W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '44 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Drawer design for easy loading. No bending required.',
      maintenance: 'Monthly: Clean drawer seal. Clean filter.',
      installationTips: 'Professional installation. Under-counter.',
      safetyTips: 'Drawer safety lock.',
      troubleshooting: [
        'Drawer not closing: Check track',
        'Error: Call service'
      ],
      bestFor: 'Easy access, elderly users',
      estimatedConsumption: '160 units/year'
    },
    {
      id: 'samsung-drawer-deluxe',
      name: 'Samsung Drawer Dishwasher Deluxe',
      type: 'Drawer Dishwasher',
      capacity: '6+6 Place Settings Double Drawer',
      price: 'PKR 125,000 - 142,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Independent Operation',
        '5 Programs',
        'Zone Booster',
        'Delay Start',
        'Child Lock',
        'LED Display'
      ],
      specifications: {
        'Capacity': '6+6 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '5 per drawer',
        'Water Consumption': '7L per drawer',
        'Power': '1700W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A+++',
        'Noise Level': '44 dB',
        'Dimensions': '90 x 60 x 55 cm',
        'Weight': '60 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Run drawers independently. Zone booster for tough stains.',
      maintenance: 'Monthly: Clean both drawers.',
      installationTips: 'Professional installation.',
      safetyTips: 'Drawer safety.',
      troubleshooting: [
        'One drawer not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Flexible loading, large families',
      estimatedConsumption: '165 units/year'
    },
    {
      id: 'samsung-drawer-premium',
      name: 'Samsung Drawer Dishwasher Premium',
      type: 'Drawer Dishwasher',
      capacity: '7+7 Place Settings Double Drawer',
      price: 'PKR 155,000 - 175,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Digital Inverter',
        '6 Programs',
        'StormWash',
        'Auto Program',
        'SmartThings',
        'LED Touch'
      ],
      specifications: {
        'Capacity': '7+7 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '6 per drawer',
        'Water Consumption': '6.5L per drawer',
        'Power': '1900W',
        'Motor': 'Digital Inverter',
        'Technology': 'StormWash',
        'Smart': 'SmartThings',
        'Energy Rating': 'A+++',
        'Noise Level': '42 dB',
        'Dimensions': '90 x 60 x 57 cm',
        'Weight': '64 kg',
        'Color': 'Black Stainless',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Premium double drawer with smart features.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Premium safety.',
      troubleshooting: [
        'SmartThings not working: Check WiFi',
        'StormWash error: Call service'
      ],
      bestFor: 'Luxury kitchens, maximum flexibility',
      estimatedConsumption: '160 units/year'
    },

    // ---------- PORTABLE DISHWASHER - 3 Models ----------
    {
      id: 'samsung-portable-basic',
      name: 'Samsung Portable Dishwasher Basic',
      type: 'Portable Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 55,000 - 65,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable Design',
        '4 Wash Programs',
        'Quick Connect',
        'Easy to Move',
        'LED Display',
        'Quick Wash',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '4',
        'Water Connection': 'Quick connect',
        'Power': '1400W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A+',
        'Noise Level': '52 dB',
        'Dimensions': '55 x 60 x 50 cm',
        'Weight': '31 kg',
        'Color': 'White',
        'Warranty': '1 year + 5 years motor'
      },
      warranty: '1 year + 5 years motor warranty',
      usageGuide: 'Portable, no permanent installation. Quick connect to faucet.',
      maintenance: 'Monthly: Clean filter. Check quick connect.',
      installationTips: 'No plumbing needed. Plug and play.',
      safetyTips: 'Place on level surface.',
      troubleshooting: [
        'Not working: Check power, water',
        'Quick connect leaking: Check seal'
      ],
      bestFor: 'Renters, small kitchens',
      estimatedConsumption: '155 units/year'
    },
    {
      id: 'samsung-portable-deluxe',
      name: 'Samsung Portable Dishwasher Deluxe',
      type: 'Portable Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 68,000 - 78,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '5 Programs',
        'Delay Start',
        'LED Display',
        'Quick Connect',
        'Auto Fill',
        'Child Lock',
        'Zone Booster'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '5',
        'Water Connection': 'Quick connect',
        'Power': '1500W',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '50 dB',
        'Dimensions': '55 x 60 x 52 cm',
        'Weight': '33 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Zone booster for tough stains. Auto fill with quick connect.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Quick connect to faucet.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Zone booster not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Renters, better cleaning',
      estimatedConsumption: '160 units/year'
    },
    {
      id: 'samsung-portable-premium',
      name: 'Samsung Portable Dishwasher Premium',
      type: 'Portable Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 85,000 - 98,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '6 Programs',
        'Digital Inverter',
        'StormWash',
        'LED Touch',
        'Quick Connect',
        'Auto Fill',
        'SmartThings'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '6',
        'Water Connection': 'Quick connect',
        'Power': '1600W',
        'Motor': 'Digital Inverter',
        'Technology': 'StormWash',
        'Smart': 'SmartThings',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Dimensions': '55 x 60 x 55 cm',
        'Weight': '36 kg',
        'Color': 'Black Stainless',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Premium portable with smart features.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Quick connect installation. Strong WiFi.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'SmartThings not working: Check WiFi',
        'StormWash error: Call service'
      ],
      bestFor: 'Renters, premium portable',
      estimatedConsumption: '165 units/year'
    }
  ]
},
     {
  id: 'lg-dishwasher',
  name: 'LG',
  models: [
    // ---------- FREESTANDING DISHWASHER - 3 Models ----------
    {
      id: 'lg-dish-freestanding-basic',
      name: 'LG Freestanding Dishwasher Basic',
      type: 'Freestanding Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 80,000 - 90,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Direct Drive Motor',
        '5 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load Option',
        'Energy Efficient',
        'LED Display',
        'Adjustable Racks'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '5 (Normal, Eco, Intensive, Quick, Glass)',
        'Water Consumption': '9.5L per cycle',
        'Power': '1800W',
        'Motor': 'Direct Drive',
        'Energy Rating': 'A++',
        'Noise Level': '49 dB',
        'Drying System': 'Residual Heat',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '48 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Direct Drive motor reliable and quiet. Scrape food off dishes before loading. Use recommended detergent.',
      maintenance: 'Monthly: Clean filter. Check spray arms. Run empty cycle with cleaner occasionally.',
      installationTips: 'Water connection required. Proper drainage needed. Level carefully.',
      safetyTips: 'Child lock for safety. Use dishwasher salt and rinse aid.',
      troubleshooting: [
        'Not cleaning: Check spray arms, filter',
        'Water not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, LG reliability',
      estimatedConsumption: '230 units/year'
    },
    {
      id: 'lg-dish-freestanding-deluxe',
      name: 'LG Freestanding Dishwasher Deluxe',
      type: 'Freestanding Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Direct Drive Motor',
        '6 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'Energy Efficient',
        'LED Display',
        'Quick Wash',
        'QuadWash'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '6',
        'Water Consumption': '9L per cycle',
        'Power': '1900W',
        'Motor': 'Direct Drive',
        'Energy Rating': 'A+++',
        'Noise Level': '47 dB',
        'Drying System': 'Heat Exchanger',
        'Wash System': 'QuadWash',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '50 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'QuadWash with multi-motion arms for complete coverage.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'QuadWash not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Large families, thorough cleaning',
      estimatedConsumption: '225 units/year'
    },
    {
      id: 'lg-direct-drive-dishwasher',
      name: 'LG Direct Drive Dishwasher',
      type: 'Freestanding Dishwasher',
      capacity: '16 Place Settings',
      price: 'PKR 115,000 - 130,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Direct Drive Motor',
        'QuadWash System',
        'TrueSteam',
        'SmartThinQ',
        'LoDecibel Quiet',
        '8 Wash Programs',
        'LED Display',
        'Auto Program'
      ],
      specifications: {
        'Capacity': '16 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '8',
        'Water Consumption': '8.5L',
        'Power': '2000W',
        'Motor': 'Direct Drive',
        'Wash System': 'QuadWash',
        'Steam': 'TrueSteam',
        'Smart': 'SmartThinQ',
        'Noise': '44 dB',
        'Energy Rating': 'A+++',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '53 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'QuadWash cleans from all angles. Steam for sanitization.',
      maintenance: 'Monthly: Clean filter. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Steam safety features.',
      troubleshooting: [
        'TrueSteam not working: Check settings',
        'SmartThinQ error: Check WiFi'
      ],
      bestFor: 'Large families, premium cleaning',
      estimatedConsumption: '220 units/year'
    },

    // ---------- BUILT-IN DISHWASHER - 3 Models ----------
    {
      id: 'lg-builtin-basic',
      name: 'LG Built-in Dishwasher Basic',
      type: 'Built-in Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 90,000 - 102,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        '5 Wash Programs',
        'Direct Drive Motor',
        'Delay Start',
        'Child Lock',
        'Energy Efficient',
        'LED Display'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '5',
        'Water Consumption': '9.5L',
        'Power': '1800W',
        'Motor': 'Direct Drive',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Dimensions': '82 x 60 x 55 cm',
        'Cutout Size': '80 x 58 x 53 cm',
        'Weight': '51 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Integrates with kitchen cabinets. Professional installation needed.',
      maintenance: 'Monthly: Clean filter. Check door seal.',
      installationTips: 'Professional installation only. Cabinet cutout needed.',
      safetyTips: 'Built-in requires proper installation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, LG quality',
      estimatedConsumption: '230 units/year'
    },
    {
      id: 'lg-builtin-deluxe',
      name: 'LG Built-in Dishwasher Deluxe',
      type: 'Built-in Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 108,000 - 122,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '6 Programs',
        'QuadWash',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '6',
        'Water Consumption': '9L',
        'Power': '1900W',
        'Motor': 'Direct Drive',
        'Wash System': 'QuadWash',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Dimensions': '82 x 60 x 57 cm',
        'Cutout': '80 x 58 x 55 cm',
        'Weight': '53 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'QuadWash for better coverage.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Built-in safety.',
      troubleshooting: [
        'QuadWash error: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, better cleaning',
      estimatedConsumption: '225 units/year'
    },
    {
      id: 'lg-builtin-premium',
      name: 'LG Built-in Dishwasher Premium',
      type: 'Built-in Dishwasher',
      capacity: '16 Place Settings',
      price: 'PKR 135,000 - 155,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '8 Programs',
        'QuadWash',
        'TrueSteam',
        'SmartThinQ',
        'LED Touch',
        'Auto Program',
        'LoDecibel'
      ],
      specifications: {
        'Capacity': '16 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '8',
        'Water Consumption': '8.5L',
        'Power': '2000W',
        'Motor': 'Direct Drive',
        'Wash': 'QuadWash',
        'Steam': 'TrueSteam',
        'Smart': 'SmartThinQ',
        'Energy Rating': 'A+++',
        'Noise Level': '42 dB',
        'Dimensions': '82 x 60 x 60 cm',
        'Cutout': '80 x 58 x 58 cm',
        'Weight': '56 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Premium built-in with steam and smart features.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Premium safety features.',
      troubleshooting: [
        'TrueSteam not working: Check settings',
        'SmartThinQ error: Check WiFi'
      ],
      bestFor: 'Luxury kitchens, smart home',
      estimatedConsumption: '220 units/year'
    },

    // ---------- COMPACT DISHWASHER - 3 Models ----------
    {
      id: 'lg-compact-basic',
      name: 'LG Compact Dishwasher Basic',
      type: 'Compact Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 70,000 - 80,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        '4 Wash Programs',
        'Direct Drive Motor',
        'Quick Wash',
        'Small Household',
        'Water Saving',
        'LED Display'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '4',
        'Water Consumption': '8L per cycle',
        'Power': '1500W',
        'Motor': 'Direct Drive',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Dimensions': '45 x 55 x 50 cm',
        'Weight': '37 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Perfect for small kitchens. LG quality in compact size.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Fits small kitchens. Countertop or under-counter.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not cleaning: Check filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, apartments',
      estimatedConsumption: '180 units/year'
    },
    {
      id: 'lg-compact-deluxe',
      name: 'LG Compact Dishwasher Deluxe',
      type: 'Compact Dishwasher',
      capacity: '9 Place Settings',
      price: 'PKR 82,000 - 94,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '5 Programs',
        'QuadWash',
        'Delay Start',
        'Half Load',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '9 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '5',
        'Water Consumption': '8L',
        'Power': '1600W',
        'Motor': 'Direct Drive',
        'Wash': 'QuadWash',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Dimensions': '45 x 58 x 52 cm',
        'Weight': '39 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'QuadWash in compact size.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Compact installation.',
      safetyTips: 'Half load option.',
      troubleshooting: [
        'QuadWash not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, better cleaning',
      estimatedConsumption: '185 units/year'
    },
    {
      id: 'lg-compact-premium',
      name: 'LG Compact Dishwasher Premium',
      type: 'Compact Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 100,000 - 115,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '6 Programs',
        'QuadWash',
        'TrueSteam',
        'SmartThinQ',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '6',
        'Water Consumption': '7.5L',
        'Power': '1700W',
        'Motor': 'Direct Drive',
        'Wash': 'QuadWash',
        'Steam': 'TrueSteam',
        'Smart': 'SmartThinQ',
        'Energy Rating': 'A+++',
        'Noise Level': '44 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '42 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Premium compact with steam and smart features.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Compact premium installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'TrueSteam not working: Check settings',
        'SmartThinQ error: Check WiFi'
      ],
      bestFor: 'Small families, premium compact',
      estimatedConsumption: '180 units/year'
    },

    // ---------- DRAWER DISHWASHER - 3 Models ----------
    {
      id: 'lg-drawer-basic',
      name: 'LG Drawer Dishwasher Basic',
      type: 'Drawer Dishwasher',
      capacity: '6 Place Settings Single Drawer',
      price: 'PKR 88,000 - 98,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Single Drawer',
        '4 Wash Programs',
        'Easy Load',
        'Child Lock',
        'Direct Drive',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '6 Place Settings',
        'Type': 'Single Drawer',
        'Wash Programs': '4',
        'Water Consumption': '7L',
        'Power': '1500W',
        'Motor': 'Direct Drive',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '45 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Drawer design for easy loading. No bending required.',
      maintenance: 'Monthly: Clean drawer seal. Clean filter.',
      installationTips: 'Professional installation. Under-counter.',
      safetyTips: 'Drawer safety lock.',
      troubleshooting: [
        'Drawer not closing: Check track',
        'Error: Call service'
      ],
      bestFor: 'Easy access, elderly users',
      estimatedConsumption: '160 units/year'
    },
    {
      id: 'lg-drawer-deluxe',
      name: 'LG Drawer Dishwasher Deluxe',
      type: 'Drawer Dishwasher',
      capacity: '6+6 Place Settings Double Drawer',
      price: 'PKR 130,000 - 148,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Independent Operation',
        '5 Programs',
        'QuadWash',
        'Delay Start',
        'Child Lock',
        'LED Display'
      ],
      specifications: {
        'Capacity': '6+6 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '5 per drawer',
        'Water Consumption': '7L per drawer',
        'Power': '1700W',
        'Motor': 'Direct Drive',
        'Wash': 'QuadWash',
        'Energy Rating': 'A+++',
        'Noise Level': '44 dB',
        'Dimensions': '90 x 60 x 55 cm',
        'Weight': '62 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Run drawers independently. QuadWash for better cleaning.',
      maintenance: 'Monthly: Clean both drawers.',
      installationTips: 'Professional installation.',
      safetyTips: 'Drawer safety.',
      troubleshooting: [
        'One drawer not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Flexible loading, large families',
      estimatedConsumption: '165 units/year'
    },
    {
      id: 'lg-drawer-premium',
      name: 'LG Drawer Dishwasher Premium',
      type: 'Drawer Dishwasher',
      capacity: '7+7 Place Settings Double Drawer',
      price: 'PKR 160,000 - 180,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Direct Drive',
        '6 Programs',
        'QuadWash',
        'TrueSteam',
        'SmartThinQ',
        'LED Touch'
      ],
      specifications: {
        'Capacity': '7+7 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '6 per drawer',
        'Water Consumption': '6.5L per drawer',
        'Power': '1900W',
        'Motor': 'Direct Drive',
        'Wash': 'QuadWash',
        'Steam': 'TrueSteam',
        'Smart': 'SmartThinQ',
        'Energy Rating': 'A+++',
        'Noise Level': '42 dB',
        'Dimensions': '90 x 60 x 57 cm',
        'Weight': '66 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Premium double drawer with steam and smart features.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Premium safety.',
      troubleshooting: [
        'TrueSteam not working: Check settings',
        'SmartThinQ error: Check WiFi'
      ],
      bestFor: 'Luxury kitchens, maximum flexibility',
      estimatedConsumption: '160 units/year'
    },

    // ---------- PORTABLE DISHWASHER - 3 Models ----------
    {
      id: 'lg-portable-basic',
      name: 'LG Portable Dishwasher Basic',
      type: 'Portable Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable Design',
        '4 Wash Programs',
        'Quick Connect',
        'Easy to Move',
        'LED Display',
        'Quick Wash',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '4',
        'Water Connection': 'Quick connect',
        'Power': '1400W',
        'Motor': 'Direct Drive',
        'Energy Rating': 'A+',
        'Noise Level': '52 dB',
        'Dimensions': '55 x 60 x 50 cm',
        'Weight': '32 kg',
        'Color': 'White',
        'Warranty': '1 year + 5 years motor'
      },
      warranty: '1 year + 5 years motor warranty',
      usageGuide: 'Portable, no permanent installation. Quick connect to faucet.',
      maintenance: 'Monthly: Clean filter. Check quick connect.',
      installationTips: 'No plumbing needed. Plug and play.',
      safetyTips: 'Place on level surface.',
      troubleshooting: [
        'Not working: Check power, water',
        'Quick connect leaking: Check seal'
      ],
      bestFor: 'Renters, small kitchens',
      estimatedConsumption: '150 units/year'
    },
    {
      id: 'lg-portable-deluxe',
      name: 'LG Portable Dishwasher Deluxe',
      type: 'Portable Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 72,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '5 Programs',
        'Delay Start',
        'LED Display',
        'Quick Connect',
        'Auto Fill',
        'Child Lock',
        'QuadWash'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '5',
        'Water Connection': 'Quick connect',
        'Power': '1500W',
        'Motor': 'Direct Drive',
        'Wash': 'QuadWash',
        'Energy Rating': 'A++',
        'Noise Level': '50 dB',
        'Dimensions': '55 x 60 x 52 cm',
        'Weight': '34 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'QuadWash for better cleaning. Auto fill with quick connect.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Quick connect to faucet.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'QuadWash not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Renters, better cleaning',
      estimatedConsumption: '155 units/year'
    },
    {
      id: 'lg-portable-premium',
      name: 'LG Portable Dishwasher Premium',
      type: 'Portable Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 90,000 - 105,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '6 Programs',
        'Direct Drive',
        'QuadWash',
        'TrueSteam',
        'SmartThinQ',
        'LED Touch'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '6',
        'Water Connection': 'Quick connect',
        'Power': '1600W',
        'Motor': 'Direct Drive',
        'Wash': 'QuadWash',
        'Steam': 'TrueSteam',
        'Smart': 'SmartThinQ',
        'Energy Rating': 'A+++',
        'Noise Level': '46 dB',
        'Dimensions': '55 x 60 x 55 cm',
        'Weight': '37 kg',
        'Color': 'Stainless Steel',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Premium portable with steam and smart features.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Quick connect installation. Strong WiFi.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'TrueSteam not working: Check settings',
        'SmartThinQ error: Check WiFi'
      ],
      bestFor: 'Renters, premium portable',
      estimatedConsumption: '160 units/year'
    }
  ]
},
     {
  id: 'waves-dishwasher',
  name: 'Waves',
  models: [
    // ---------- FREESTANDING DISHWASHER - 3 Models ----------
    {
      id: 'waves-dish-freestanding-basic',
      name: 'Waves Freestanding Dishwasher Basic',
      type: 'Freestanding Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        '3 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load Option',
        'Energy Efficient',
        'LED Display',
        'Adjustable Racks',
        'Budget Friendly'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '3 (Normal, Eco, Intensive)',
        'Water Consumption': '11L per cycle',
        'Power': '1600W',
        'Energy Rating': 'A',
        'Noise Level': '54 dB',
        'Drying System': 'Residual Heat',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '42 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Scrape food off dishes before loading. Use recommended detergent. Load properly for best results.',
      maintenance: 'Monthly: Clean filter. Check spray arms. Run empty cycle with vinegar occasionally.',
      installationTips: 'Water connection required. Proper drainage needed. Level carefully.',
      safetyTips: 'Child lock for safety. Use dishwasher salt. Don\'t overload.',
      troubleshooting: [
        'Not cleaning: Check spray arms, filter',
        'Water not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, budget conscious',
      estimatedConsumption: '270 units/year'
    },
    {
      id: 'waves-dish-freestanding-deluxe',
      name: 'Waves Freestanding Dishwasher Deluxe',
      type: 'Freestanding Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 55,000 - 64,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        '4 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'Energy Efficient',
        'LED Display',
        'Quick Wash',
        'Adjustable Racks'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '4',
        'Water Consumption': '10.5L per cycle',
        'Power': '1700W',
        'Energy Rating': 'A+',
        'Noise Level': '52 dB',
        'Drying System': 'Heat Exchanger',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '44 kg',
        'Color': 'Silver',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Quick wash for lightly soiled dishes. Half load for small loads.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Quick wash not effective: Use normal cycle',
        'Error: Call service'
      ],
      bestFor: 'Large families, value for money',
      estimatedConsumption: '260 units/year'
    },
    {
      id: 'waves-dish-freestanding-premium',
      name: 'Waves Freestanding Dishwasher Premium',
      type: 'Freestanding Dishwasher',
      capacity: '15 Place Settings',
      price: 'PKR 68,000 - 78,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        '5 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'LED Display',
        'Quick Wash',
        'Extra Drying',
        'Inverter Motor'
      ],
      specifications: {
        'Capacity': '15 Place Settings',
        'Type': 'Freestanding',
        'Wash Programs': '5',
        'Water Consumption': '10L per cycle',
        'Power': '1800W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '50 dB',
        'Drying System': 'Turbo Dry',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '47 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Inverter motor for quiet operation. Extra drying for plastics.',
      maintenance: 'Monthly: Clean filter. Check inverter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Not drying: Check settings'
      ],
      bestFor: 'Large families, premium features on budget',
      estimatedConsumption: '250 units/year'
    },

    // ---------- BUILT-IN DISHWASHER - 3 Models ----------
    {
      id: 'waves-builtin-basic',
      name: 'Waves Built-in Dishwasher Basic',
      type: 'Built-in Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 50,000 - 58,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in Design',
        '3 Wash Programs',
        'Delay Start',
        'Child Lock',
        'Energy Efficient',
        'LED Display',
        'Adjustable Racks'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '3',
        'Water Consumption': '11L',
        'Power': '1600W',
        'Energy Rating': 'A',
        'Noise Level': '52 dB',
        'Dimensions': '82 x 60 x 55 cm',
        'Cutout Size': '80 x 58 x 53 cm',
        'Weight': '46 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Integrates with kitchen cabinets. Professional installation needed.',
      maintenance: 'Monthly: Clean filter. Check door seal.',
      installationTips: 'Professional installation only. Cabinet cutout needed.',
      safetyTips: 'Built-in requires proper installation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens on budget',
      estimatedConsumption: '270 units/year'
    },
    {
      id: 'waves-builtin-deluxe',
      name: 'Waves Built-in Dishwasher Deluxe',
      type: 'Built-in Dishwasher',
      capacity: '14 Place Settings',
      price: 'PKR 62,000 - 72,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '4 Programs',
        'Delay Start',
        'Child Lock',
        'Half Load',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '14 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '4',
        'Water Consumption': '10.5L',
        'Power': '1700W',
        'Energy Rating': 'A+',
        'Noise Level': '50 dB',
        'Dimensions': '82 x 60 x 57 cm',
        'Cutout': '80 x 58 x 55 cm',
        'Weight': '48 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'More programs for better cleaning.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Built-in safety.',
      troubleshooting: [
        'Error: Call service',
        'Not cleaning: Check spray arms'
      ],
      bestFor: 'Integrated kitchens, better features',
      estimatedConsumption: '260 units/year'
    },
    {
      id: 'waves-builtin-premium',
      name: 'Waves Built-in Dishwasher Premium',
      type: 'Built-in Dishwasher',
      capacity: '15 Place Settings',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Built-in',
        '5 Programs',
        'Inverter Motor',
        'Delay Start',
        'LED Display',
        'Extra Drying',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '15 Place Settings',
        'Type': 'Built-in',
        'Wash Programs': '5',
        'Water Consumption': '10L',
        'Power': '1800W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Dimensions': '82 x 60 x 60 cm',
        'Cutout': '80 x 58 x 58 cm',
        'Weight': '51 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Premium built-in with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Premium safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Error: Call service'
      ],
      bestFor: 'Integrated kitchens, premium on budget',
      estimatedConsumption: '250 units/year'
    },

    // ---------- COMPACT DISHWASHER - 3 Models ----------
    {
      id: 'waves-compact-basic',
      name: 'Waves Compact Dishwasher Basic',
      type: 'Compact Dishwasher',
      capacity: '6 Place Settings',
      price: 'PKR 35,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact Design',
        '3 Wash Programs',
        'Quick Wash',
        'Small Household',
        'Water Saving',
        'LED Display',
        'Budget Friendly'
      ],
      specifications: {
        'Capacity': '6 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '3',
        'Water Consumption': '8.5L per cycle',
        'Power': '1300W',
        'Energy Rating': 'A',
        'Noise Level': '54 dB',
        'Dimensions': '45 x 55 x 50 cm',
        'Weight': '32 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Ideal for 1-2 people. Load properly for best results.',
      maintenance: 'Monthly: Clean filter. Check spray arms.',
      installationTips: 'Fits small kitchens. Countertop or under-counter.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not cleaning: Check filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, apartments, budget',
      estimatedConsumption: '190 units/year'
    },
    {
      id: 'waves-compact-deluxe',
      name: 'Waves Compact Dishwasher Deluxe',
      type: 'Compact Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '4 Programs',
        'Delay Start',
        'Half Load',
        'LED Display',
        'Quick Wash',
        'Energy Efficient'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '4',
        'Water Consumption': '8.5L',
        'Power': '1400W',
        'Energy Rating': 'A+',
        'Noise Level': '52 dB',
        'Dimensions': '45 x 58 x 52 cm',
        'Weight': '34 kg',
        'Color': 'Silver',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'More capacity for small families.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Compact installation.',
      safetyTips: 'Half load option.',
      troubleshooting: [
        'Delay start not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, better features',
      estimatedConsumption: '200 units/year'
    },
    {
      id: 'waves-compact-premium',
      name: 'Waves Compact Dishwasher Premium',
      type: 'Compact Dishwasher',
      capacity: '9 Place Settings',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        '5 Programs',
        'Inverter Motor',
        'LED Display',
        'Quick Wash',
        'Extra Drying',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '9 Place Settings',
        'Type': 'Compact',
        'Wash Programs': '5',
        'Water Consumption': '8L',
        'Power': '1500W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '48 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '37 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Premium compact with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Compact premium installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Error: Call service'
      ],
      bestFor: 'Small families, premium compact',
      estimatedConsumption: '190 units/year'
    },

    // ---------- DRAWER DISHWASHER - 3 Models ----------
    {
      id: 'waves-drawer-basic',
      name: 'Waves Drawer Dishwasher Basic',
      type: 'Drawer Dishwasher',
      capacity: '6 Place Settings Single Drawer',
      price: 'PKR 55,000 - 64,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Single Drawer',
        '3 Wash Programs',
        'Easy Load',
        'Child Lock',
        'LED Display',
        'Quick Wash',
        'Space Saving'
      ],
      specifications: {
        'Capacity': '6 Place Settings',
        'Type': 'Single Drawer',
        'Wash Programs': '3',
        'Water Consumption': '7.5L',
        'Power': '1300W',
        'Energy Rating': 'A',
        'Noise Level': '50 dB',
        'Dimensions': '45 x 60 x 55 cm',
        'Weight': '40 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Drawer design for easy loading. No bending required.',
      maintenance: 'Monthly: Clean drawer seal. Clean filter.',
      installationTips: 'Professional installation. Under-counter.',
      safetyTips: 'Drawer safety lock.',
      troubleshooting: [
        'Drawer not closing: Check track',
        'Error: Call service'
      ],
      bestFor: 'Easy access, elderly users on budget',
      estimatedConsumption: '170 units/year'
    },
    {
      id: 'waves-drawer-deluxe',
      name: 'Waves Drawer Dishwasher Deluxe',
      type: 'Drawer Dishwasher',
      capacity: '6+6 Place Settings Double Drawer',
      price: 'PKR 85,000 - 98,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Independent Operation',
        '4 Programs',
        'Delay Start',
        'Child Lock',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '6+6 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '4 per drawer',
        'Water Consumption': '7.5L per drawer',
        'Power': '1500W',
        'Energy Rating': 'A+',
        'Noise Level': '48 dB',
        'Dimensions': '90 x 60 x 55 cm',
        'Weight': '55 kg',
        'Color': 'Stainless Steel',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Run drawers independently. Great for small loads.',
      maintenance: 'Monthly: Clean both drawers.',
      installationTips: 'Professional installation.',
      safetyTips: 'Drawer safety.',
      troubleshooting: [
        'One drawer not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Flexible loading, large families on budget',
      estimatedConsumption: '175 units/year'
    },
    {
      id: 'waves-drawer-premium',
      name: 'Waves Drawer Dishwasher Premium',
      type: 'Drawer Dishwasher',
      capacity: '7+7 Place Settings Double Drawer',
      price: 'PKR 105,000 - 120,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Double Drawer',
        'Inverter Motor',
        '5 Programs',
        'LED Display',
        'Quick Wash',
        'Extra Drying',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '7+7 Place Settings',
        'Type': 'Double Drawer',
        'Wash Programs': '5 per drawer',
        'Water Consumption': '7L per drawer',
        'Power': '1700W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '46 dB',
        'Dimensions': '90 x 60 x 57 cm',
        'Weight': '59 kg',
        'Color': 'Stainless Steel',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Premium double drawer with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Premium safety.',
      troubleshooting: [
        'Inverter error: Call service',
        'Error: Call service'
      ],
      bestFor: 'Large families, premium on budget',
      estimatedConsumption: '170 units/year'
    },

    // ---------- PORTABLE DISHWASHER - 3 Models ----------
    {
      id: 'waves-basic-dishwasher',
      name: 'Waves Basic Dishwasher',
      type: 'Portable Dishwasher',
      capacity: '8 Place Settings',
      price: 'PKR 35,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable Design',
        '3 Wash Programs',
        'Affordable',
        'Easy to Move',
        'Simple Controls',
        'Quick Connect',
        'Manual Fill Option'
      ],
      specifications: {
        'Capacity': '8 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '3',
        'Water Connection': 'Manual fill option',
        'Power': '1200W',
        'Energy Rating': 'A',
        'Noise Level': '56 dB',
        'Dimensions': '55 x 60 x 50 cm',
        'Weight': '28 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Portable, no permanent installation. Manual water fill option.',
      maintenance: 'Monthly: Clean filter. Check quick connect.',
      installationTips: 'No plumbing needed. Plug and play.',
      safetyTips: 'Place on level surface.',
      troubleshooting: [
        'Not working: Check power, water',
        'Leaking: Check connections'
      ],
      bestFor: 'Renters, small kitchens, most budget',
      estimatedConsumption: '150 units/year'
    },
    {
      id: 'waves-portable-deluxe',
      name: 'Waves Portable Dishwasher Deluxe',
      type: 'Portable Dishwasher',
      capacity: '10 Place Settings',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '4 Programs',
        'Delay Start',
        'LED Display',
        'Quick Connect',
        'Auto Fill',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '10 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '4',
        'Water Connection': 'Quick connect',
        'Power': '1300W',
        'Energy Rating': 'A+',
        'Noise Level': '54 dB',
        'Dimensions': '55 x 60 x 52 cm',
        'Weight': '30 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto fill with quick connect.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Quick connect to faucet.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Quick connect leaking: Check seal',
        'Error: Call service'
      ],
      bestFor: 'Renters, better features on budget',
      estimatedConsumption: '155 units/year'
    },
    {
      id: 'waves-portable-premium',
      name: 'Waves Portable Dishwasher Premium',
      type: 'Portable Dishwasher',
      capacity: '12 Place Settings',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        '5 Programs',
        'Inverter Motor',
        'LED Display',
        'Quick Connect',
        'Auto Fill',
        'Extra Drying'
      ],
      specifications: {
        'Capacity': '12 Place Settings',
        'Type': 'Portable',
        'Wash Programs': '5',
        'Water Connection': 'Quick connect',
        'Power': '1500W',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Noise Level': '50 dB',
        'Dimensions': '55 x 60 x 55 cm',
        'Weight': '33 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Premium portable with inverter.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Quick connect installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Not drying: Check settings'
      ],
      bestFor: 'Renters, premium portable on budget',
      estimatedConsumption: '160 units/year'
          }
        ]
      }
    ]
  },
 {
  id: 'washing-machine',
  name: 'Washing Machine',
  description: 'Clothes washing appliance',
  types: ['Top Load Fully Automatic', 'Front Load Fully Automatic', 'Semi-Automatic', 'Washer Dryer Combo', 'Mini/Portable Washer'],
  companies: [
    // ==================== DAWLANCE WASHING MACHINE (15 Models) ====================
    {
      id: 'dawlance-washing',
      name: 'Dawlance',
      models: [
        // ---------- TOP LOAD FULLY AUTOMATIC - 3 Models ----------
        {
          id: 'dawlance-top-basic',
          name: 'Dawlance Top Load Basic',
          type: 'Top Load Fully Automatic',
          capacity: '7 kg',
          price: 'PKR 35,000 - 40,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Fully Automatic',
            '5 Wash Programs',
            'Water Level Selector',
            'Stainless Steel Drum',
            'Child Lock',
            'Delay Timer',
            'Energy Efficient'
          ],
          specifications: {
            'Capacity': '7 kg',
            'Type': 'Top Load Fully Automatic',
            'Wash Programs': '5 (Normal, Delicate, Quick, Heavy, Spin)',
            'Spin Speed': '700 RPM',
            'Drum Material': 'Stainless Steel',
            'Water Consumption': '100L per cycle',
            'Power': '500W',
            'Dimensions': '90 x 55 x 60 cm',
            'Weight': '35 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive warranty',
          usageGuide: 'Load clothes evenly. Use recommended detergent amount. Select program based on fabric type. Close lid properly to start.',
          maintenance: 'Monthly: Clean filter. Leave lid open after use to prevent mold. Clean drum with empty hot water cycle.',
          installationTips: 'Level surface needed. Water connection required. Keep on solid floor. Avoid direct sunlight.',
          safetyTips: 'Child lock for safety. Don\'t overload. Unplug when not in use for long periods.',
          troubleshooting: [
            'Not starting: Check power, lid closed',
            'Water not filling: Check tap, hose',
            'Not spinning: Check load balance',
            'Leaking: Check hoses'
          ],
          bestFor: 'Small families, easy loading preference',
          estimatedConsumption: '150 units/year'
        },
        {
          id: 'dawlance-top-deluxe',
          name: 'Dawlance Top Load Deluxe',
          type: 'Top Load Fully Automatic',
          capacity: '8 kg',
          price: 'PKR 42,000 - 48,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Fully Automatic',
            '8 Wash Programs',
            'Fuzzy Logic',
            'Quick Wash',
            'Child Lock',
            'Water Level Selector',
            'LED Display'
          ],
          specifications: {
            'Capacity': '8 kg',
            'Type': 'Top Load Fully Automatic',
            'Wash Programs': '8 (Normal, Delicate, Quick, Heavy, Bedding, Jeans, Spin, Rinse+)',
            'Spin Speed': '750 RPM',
            'Technology': 'Fuzzy Logic',
            'Drum Material': 'Stainless Steel',
            'Display': 'LED',
            'Dimensions': '92 x 56 x 62 cm',
            'Weight': '37 kg',
            'Color': 'Silver',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Fuzzy logic automatically adjusts settings. Quick wash for lightly soiled clothes. Separate colors.',
          maintenance: 'Monthly: Clean filter. Clean drum with tub clean program.',
          installationTips: 'Level surface. Water connection. Proper drainage.',
          safetyTips: 'Child lock safety.',
          troubleshooting: [
            'Fuzzy logic error: Reset',
            'Not draining: Check hose',
            'Error code: Call service'
          ],
          bestFor: 'Medium families, smart features',
          estimatedConsumption: '160 units/year'
        },
        {
          id: 'dawlance-tornado',
          name: 'Dawlance Tornado Washing Machine',
          type: 'Top Load Fully Automatic',
          capacity: '9 kg',
          price: 'PKR 48,000 - 55,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Tornado Pulsator',
            'Fuzzy Logic',
            'Quick Wash',
            'Child Lock',
            'Water Level Selector',
            '10 Wash Programs',
            'LED Display'
          ],
          specifications: {
            'Capacity': '9 kg',
            'Type': 'Top Load Fully Automatic',
            'Wash Programs': '10',
            'Spin Speed': '800 RPM',
            'Technology': 'Tornado Pulsator',
            'Display': 'LED',
            'Drum Material': 'Stainless Steel',
            'Dimensions': '55 x 60 x 95 cm',
            'Weight': '40 kg',
            'Color': 'Silver',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Tornado pulsator for powerful cleaning. Load clothes evenly. Use correct water level.',
          maintenance: 'Monthly: Clean filter. Leave door open after use.',
          installationTips: 'Level surface needed. Water connection required.',
          safetyTips: 'Child lock safety.',
          troubleshooting: [
            'Not spinning: Check load balance',
            'Water leaking: Clean drain'
          ],
          bestFor: 'Large families, powerful cleaning',
          estimatedConsumption: '170 units/year'
        },

        // ---------- FRONT LOAD FULLY AUTOMATIC - 3 Models ----------
        {
          id: 'dawlance-front-basic',
          name: 'Dawlance Front Load Basic',
          type: 'Front Load Fully Automatic',
          capacity: '7 kg',
          price: 'PKR 55,000 - 62,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Front Load Design',
            '6 Wash Programs',
            'Energy Efficient',
            'Child Lock',
            'Delay Start',
            'LED Display',
            'Quick Wash'
          ],
          specifications: {
            'Capacity': '7 kg',
            'Type': 'Front Load Fully Automatic',
            'Wash Programs': '6',
            'Spin Speed': '1000 RPM',
            'Energy Rating': 'A++',
            'Drum Material': 'Stainless Steel',
            'Display': 'LED',
            'Dimensions': '85 x 60 x 55 cm',
            'Weight': '65 kg',
            'Color': 'White',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Front load uses less water. Load from front. Use HE detergent. Don\'t overload.',
          maintenance: 'Monthly: Clean door gasket. Run cleaning cycle. Leave door open.',
          installationTips: 'Built-under or freestanding. Level carefully. Water connection.',
          safetyTips: 'Child lock safety. Door lock during operation.',
          troubleshooting: [
            'Not starting: Check door closed',
            'Not draining: Clean filter',
            'Error: Call service'
          ],
          bestFor: 'Water conscious users, better cleaning',
          estimatedConsumption: '120 units/year'
        },
        {
          id: 'dawlance-front-deluxe',
          name: 'Dawlance Front Load Deluxe',
          type: 'Front Load Fully Automatic',
          capacity: '8 kg',
          price: 'PKR 65,000 - 75,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Front Load',
            '8 Wash Programs',
            'Quick Wash',
            'Child Lock',
            'Delay Start',
            'LED Display',
            'Steam Function'
          ],
          specifications: {
            'Capacity': '8 kg',
            'Type': 'Front Load Fully Automatic',
            'Wash Programs': '8',
            'Spin Speed': '1200 RPM',
            'Steam': 'Yes',
            'Energy Rating': 'A++',
            'Dimensions': '85 x 60 x 58 cm',
            'Weight': '68 kg',
            'Color': 'Silver',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Steam for sanitization. Quick wash 15 min. Energy efficient.',
          maintenance: 'Monthly: Clean gasket. Clean detergent drawer.',
          installationTips: 'Professional installation recommended.',
          safetyTips: 'Steam safety.',
          troubleshooting: [
            'Steam not working: Check settings',
            'Error: Call service'
          ],
          bestFor: 'Families, sanitization needed',
          estimatedConsumption: '130 units/year'
        },
        {
          id: 'dawlance-front-premium',
          name: 'Dawlance Front Load Premium',
          type: 'Front Load Fully Automatic',
          capacity: '10 kg',
          price: 'PKR 85,000 - 95,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Front Load',
            '12 Wash Programs',
            'Quick Wash',
            'Child Lock',
            'Delay Start',
            'LED Touch',
            'Inverter Motor',
            'Steam'
          ],
          specifications: {
            'Capacity': '10 kg',
            'Type': 'Front Load Fully Automatic',
            'Wash Programs': '12',
            'Spin Speed': '1400 RPM',
            'Motor': 'Inverter',
            'Steam': 'Yes',
            'Energy Rating': 'A+++',
            'Dimensions': '85 x 60 x 60 cm',
            'Weight': '72 kg',
            'Color': 'Silver',
            'Warranty': '3 years + 10 years motor'
          },
          warranty: '3 years + 10 years motor warranty',
          usageGuide: 'Inverter motor quiet and efficient. Steam for allergy care.',
          maintenance: 'Monthly: Clean drum. Check motor.',
          installationTips: 'Professional installation.',
          safetyTips: 'Multiple safety features.',
          troubleshooting: [
            'Inverter error: Call service',
            'Not spinning: Check load'
          ],
          bestFor: 'Large families, premium features',
          estimatedConsumption: '140 units/year'
        },

        // ---------- SEMI-AUTOMATIC - 3 Models ----------
        {
          id: 'dawlance-semi-basic',
          name: 'Dawlance Semi-Automatic Basic',
          type: 'Semi-Automatic',
          capacity: '8 kg Wash, 4 kg Spin',
          price: 'PKR 22,000 - 26,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Double Tub',
            'Manual Operation',
            'Affordable',
            'Energy Saving',
            'Durable',
            'Simple Controls',
            'Timer'
          ],
          specifications: {
            'Wash Capacity': '8 kg',
            'Spin Capacity': '4 kg',
            'Type': 'Semi-Automatic',
            'Tubs': '2 (Wash + Spin)',
            'Timer': 'Mechanical 15 min',
            'Power': '400W',
            'Dimensions': '85 x 80 x 45 cm',
            'Weight': '30 kg',
            'Color': 'White/Blue',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Manual water filling. Transfer clothes to spin tub. Set timer for wash and spin.',
          maintenance: 'Monthly: Clean both tubs. Check drain hose.',
          installationTips: 'No permanent water connection needed. Near water source.',
          safetyTips: 'Don\'t open lid during spin.',
          troubleshooting: [
            'Not spinning: Check load balance',
            'Not washing: Check timer'
          ],
          bestFor: 'Budget buyers, areas with water issues',
          estimatedConsumption: '100 units/year'
        },
        {
          id: 'dawlance-semi-deluxe',
          name: 'Dawlance Semi-Automatic Deluxe',
          type: 'Semi-Automatic',
          capacity: '10 kg Wash, 6 kg Spin',
          price: 'PKR 28,000 - 34,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Double Tub',
            'Pulsator Wash',
            'Spin Dry',
            'Timer Controls',
            'Durable Body',
            'Easy Move Wheels',
            'Lint Filter'
          ],
          specifications: {
            'Wash Capacity': '10 kg',
            'Spin Capacity': '6 kg',
            'Type': 'Semi-Automatic',
            'Tubs': '2',
            'Timer': 'Dual timer',
            'Power': '450W',
            'Dimensions': '88 x 82 x 48 cm',
            'Weight': '33 kg',
            'Color': 'White/Blue',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Dual timer for wash and spin. Lint filter easy clean.',
          maintenance: 'Monthly: Clean lint filter. Check hoses.',
          installationTips: 'Near water source. Drain hose position.',
          safetyTips: 'Lid safety switch.',
          troubleshooting: [
            'Spin not working: Check lid closed',
            'Wash weak: Check pulsator'
          ],
          bestFor: 'Medium families, budget conscious',
          estimatedConsumption: '110 units/year'
        },
        {
          id: 'dawlance-semi-premium',
          name: 'Dawlance Semi-Automatic Premium',
          type: 'Semi-Automatic',
          capacity: '12 kg Wash, 7 kg Spin',
          price: 'PKR 35,000 - 42,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Double Tub',
            'Powerful Pulsator',
            'Spin Dry',
            'Timer Controls',
            'Wheels for Mobility',
            'Lint Filter',
            'Anti-rust Body'
          ],
          specifications: {
            'Wash Capacity': '12 kg',
            'Spin Capacity': '7 kg',
            'Type': 'Semi-Automatic',
            'Tubs': '2',
            'Timer': 'Dual',
            'Power': '500W',
            'Dimensions': '90 x 85 x 50 cm',
            'Weight': '36 kg',
            'Color': 'White/Blue',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Large capacity. Easy move wheels.',
          maintenance: 'Monthly: Clean thoroughly.',
          installationTips: 'Near water source.',
          safetyTips: 'Lid safety.',
          troubleshooting: [
            'Not working: Check power',
            'Leaking: Check hoses'
          ],
          bestFor: 'Large families, budget option',
          estimatedConsumption: '120 units/year'
        },

        // ---------- WASHER DRYER COMBO - 3 Models ----------
        {
          id: 'dawlance-combo-basic',
          name: 'Dawlance Washer Dryer Basic',
          type: 'Washer Dryer Combo',
          capacity: '7 kg Wash, 4 kg Dry',
          price: 'PKR 85,000 - 95,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Wash and Dry',
            'Front Load',
            '6 Programs',
            'Child Lock',
            'Delay Start',
            'LED Display',
            'Quick Dry'
          ],
          specifications: {
            'Wash Capacity': '7 kg',
            'Dry Capacity': '4 kg',
            'Type': 'Washer Dryer Combo',
            'Wash Programs': '6',
            'Dry Programs': '2',
            'Spin Speed': '1200 RPM',
            'Dimensions': '85 x 60 x 58 cm',
            'Weight': '70 kg',
            'Color': 'White',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Wash and dry in one machine. Don\'t overload for drying.',
          maintenance: 'Monthly: Clean filter. Check door seal.',
          installationTips: 'Professional installation. Proper drainage.',
          safetyTips: 'Don\'t leave wet clothes long.',
          troubleshooting: [
            'Not drying: Check load size',
            'Error: Call service'
          ],
          bestFor: 'Space saving, no space for dryer',
          estimatedConsumption: '200 units/year'
        },
        {
          id: 'dawlance-combo-deluxe',
          name: 'Dawlance Washer Dryer Deluxe',
          type: 'Washer Dryer Combo',
          capacity: '8 kg Wash, 5 kg Dry',
          price: 'PKR 100,000 - 115,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Wash and Dry',
            '8 Programs',
            'Child Lock',
            'Delay Start',
            'LED Display',
            'Sensor Dry',
            'Steam'
          ],
          specifications: {
            'Wash Capacity': '8 kg',
            'Dry Capacity': '5 kg',
            'Type': 'Washer Dryer Combo',
            'Wash Programs': '8',
            'Dry Programs': '3',
            'Spin Speed': '1300 RPM',
            'Sensor Dry': 'Yes',
            'Dimensions': '85 x 60 x 60 cm',
            'Weight': '73 kg',
            'Color': 'Silver',
            'Warranty': '2 years'
          },
          warranty: '2 years warranty',
          usageGuide: 'Sensor dry prevents over-drying.',
          maintenance: 'Monthly: Clean sensors.',
          installationTips: 'Professional installation.',
          safetyTips: 'Sensor safe.',
          troubleshooting: [
            'Sensor error: Clean sensor',
            'Not drying: Check settings'
          ],
          bestFor: 'Medium families, convenience',
          estimatedConsumption: '220 units/year'
        },
        {
          id: 'dawlance-combo-premium',
          name: 'Dawlance Washer Dryer Premium',
          type: 'Washer Dryer Combo',
          capacity: '10 kg Wash, 6 kg Dry',
          price: 'PKR 130,000 - 150,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Wash and Dry',
            '12 Programs',
            'Child Lock',
            'Delay Start',
            'LED Touch',
            'Sensor Dry',
            'Inverter Motor',
            'Steam'
          ],
          specifications: {
            'Wash Capacity': '10 kg',
            'Dry Capacity': '6 kg',
            'Type': 'Washer Dryer Combo',
            'Wash Programs': '12',
            'Dry Programs': '4',
            'Spin Speed': '1400 RPM',
            'Motor': 'Inverter',
            'Sensor Dry': 'Yes',
            'Dimensions': '85 x 60 x 62 cm',
            'Weight': '78 kg',
            'Color': 'Silver',
            'Warranty': '3 years + 10 years motor'
          },
          warranty: '3 years + 10 years motor warranty',
          usageGuide: 'Complete laundry solution. Inverter efficient.',
          maintenance: 'Monthly: Deep clean.',
          installationTips: 'Professional installation.',
          safetyTips: 'Multiple safety features.',
          troubleshooting: [
            'Inverter error: Call service',
            'Not drying: Check load'
          ],
          bestFor: 'Large families, all-in-one solution',
          estimatedConsumption: '240 units/year'
        },

        // ---------- MINI/PORTABLE WASHER - 3 Models ----------
        {
          id: 'dawlance-mini-basic',
          name: 'Dawlance Mini Washer Basic',
          type: 'Mini/Portable Washer',
          capacity: '3 kg',
          price: 'PKR 18,000 - 22,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Compact Size',
            'Portable',
            'Simple Controls',
            'Affordable',
            'Lightweight',
            'Manual Fill',
            'Spin Dry'
          ],
          specifications: {
            'Capacity': '3 kg',
            'Type': 'Mini Portable',
            'Operation': 'Manual fill',
            'Spin': 'Yes',
            'Timer': '15 min',
            'Dimensions': '60 x 45 x 45 cm',
            'Weight': '15 kg',
            'Color': 'White',
            'Warranty': '6 months'
          },
          warranty: '6 months warranty',
          usageGuide: 'Small loads. Perfect for singles. Manual water fill.',
          maintenance: 'Monthly: Clean drum.',
          installationTips: 'Portable. No permanent installation.',
          safetyTips: 'Don\'t overload.',
          troubleshooting: [
            'Not working: Check power',
            'Not spinning: Check load'
          ],
          bestFor: 'Singles, small apartments, dorms',
          estimatedConsumption: '50 units/year'
        },
        {
          id: 'dawlance-mini-deluxe',
          name: 'Dawlance Mini Washer Deluxe',
          type: 'Mini/Portable Washer',
          capacity: '4 kg',
          price: 'PKR 24,000 - 28,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Compact',
            'Portable',
            'Digital Timer',
            'Spin Dry',
            'Auto Fill',
            'Lightweight',
            'Quiet Operation'
          ],
          specifications: {
            'Capacity': '4 kg',
            'Type': 'Mini Portable',
            'Operation': 'Auto fill option',
            'Spin': 'Yes',
            'Timer': 'Digital',
            'Dimensions': '62 x 48 x 48 cm',
            'Weight': '17 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Auto fill option. Perfect for small spaces.',
          maintenance: 'Monthly: Clean filter.',
          installationTips: 'Portable. Near water source.',
          safetyTips: 'Stable surface.',
          troubleshooting: [
            'Auto fill not working: Check hose',
            'Not spinning: Check load'
          ],
          bestFor: 'Couples, small apartments',
          estimatedConsumption: '60 units/year'
        },
        {
          id: 'dawlance-mini-premium',
          name: 'Dawlance Mini Washer Premium',
          type: 'Mini/Portable Washer',
          capacity: '5 kg',
          price: 'PKR 30,000 - 36,000',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
          features: [
            'Compact',
            'Portable',
            'Digital Display',
            'Spin Dry',
            'Auto Fill',
            'Multiple Programs',
            'Child Lock'
          ],
          specifications: {
            'Capacity': '5 kg',
            'Type': 'Mini Portable',
            'Operation': 'Auto fill',
            'Spin': 'Yes',
            'Programs': '3',
            'Dimensions': '65 x 50 x 50 cm',
            'Weight': '19 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Multiple programs for different fabrics.',
          maintenance: 'Monthly: Clean thoroughly.',
          installationTips: 'Portable. Near water source.',
          safetyTips: 'Child lock safety.',
          troubleshooting: [
            'Program not working: Check settings',
            'Error: Call service'
          ],
          bestFor: 'Small families, limited space',
          estimatedConsumption: '70 units/year'
          }
        ]
      },
     {
  id: 'orient-washing',
  name: 'Orient',
  models: [
    // ---------- TOP LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'orient-top-basic',
      name: 'Orient Top Load Basic',
      type: 'Top Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 32,000 - 37,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '5 Wash Programs',
        'Water Level Selector',
        'Stainless Steel Drum',
        'Child Lock',
        'Delay Timer',
        'Budget Friendly'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '5',
        'Spin Speed': '700 RPM',
        'Drum Material': 'Stainless Steel',
        'Water Consumption': '95L per cycle',
        'Power': '450W',
        'Dimensions': '90 x 54 x 58 cm',
        'Weight': '34 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Load clothes evenly. Use recommended detergent amount. Select program based on fabric type. Close lid properly to start.',
      maintenance: 'Monthly: Clean filter. Leave lid open after use to prevent mold.',
      installationTips: 'Level surface needed. Water connection required.',
      safetyTips: 'Child lock for safety. Don\'t overload.',
      troubleshooting: [
        'Not starting: Check power, lid closed',
        'Water not filling: Check tap, hose',
        'Not spinning: Check load balance'
      ],
      bestFor: 'Small families, budget conscious',
      estimatedConsumption: '140 units/year'
    },
    {
      id: 'orient-top-deluxe',
      name: 'Orient Top Load Deluxe',
      type: 'Top Load Fully Automatic',
      capacity: '8 kg',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '8 Wash Programs',
        'Fuzzy Logic',
        'Quick Wash',
        'Child Lock',
        'Water Level Selector',
        'LED Display'
      ],
      specifications: {
        'Capacity': '8 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '8',
        'Spin Speed': '750 RPM',
        'Technology': 'Fuzzy Logic',
        'Drum Material': 'Stainless Steel',
        'Display': 'LED',
        'Dimensions': '92 x 55 x 60 cm',
        'Weight': '36 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Fuzzy logic automatically adjusts settings. Quick wash for lightly soiled clothes.',
      maintenance: 'Monthly: Clean filter. Clean drum with tub clean program.',
      installationTips: 'Level surface. Water connection. Proper drainage.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Fuzzy logic error: Reset',
        'Not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, smart features',
      estimatedConsumption: '150 units/year'
    },
    {
      id: 'orient-top-premium',
      name: 'Orient Top Load Premium',
      type: 'Top Load Fully Automatic',
      capacity: '9 kg',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '10 Wash Programs',
        'Fuzzy Logic',
        'Quick Wash',
        'Child Lock',
        'Water Level Selector',
        'LED Display',
        'Delay Start'
      ],
      specifications: {
        'Capacity': '9 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '10',
        'Spin Speed': '800 RPM',
        'Technology': 'Fuzzy Logic',
        'Display': 'LED',
        'Dimensions': '94 x 56 x 62 cm',
        'Weight': '38 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Delay start for convenience. Multiple programs.',
      maintenance: 'Monthly: Clean filter. Leave door open.',
      installationTips: 'Level surface. Water connection.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Delay start not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Large families, convenience features',
      estimatedConsumption: '160 units/year'
    },

    // ---------- FRONT LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'orient-front-basic',
      name: 'Orient Front Load Basic',
      type: 'Front Load Fully Automatic',
      capacity: '6 kg',
      price: 'PKR 50,000 - 57,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load Design',
        '6 Wash Programs',
        'Energy Efficient',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '6 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '6',
        'Spin Speed': '1000 RPM',
        'Energy Rating': 'A+',
        'Drum Material': 'Stainless Steel',
        'Display': 'LED',
        'Dimensions': '85 x 60 x 52 cm',
        'Weight': '62 kg',
        'Color': 'White',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Front load uses less water. Load from front. Use HE detergent.',
      maintenance: 'Monthly: Clean door gasket. Run cleaning cycle.',
      installationTips: 'Built-under or freestanding. Level carefully.',
      safetyTips: 'Child lock safety. Door lock during operation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Not draining: Clean filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, water saving',
      estimatedConsumption: '110 units/year'
    },
    {
      id: 'orient-front-deluxe',
      name: 'Orient Front Load Deluxe',
      type: 'Front Load Fully Automatic',
      capacity: '8 kg',
      price: 'PKR 62,000 - 70,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load',
        '8 Wash Programs',
        'Quick Wash',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Inverter Motor'
      ],
      specifications: {
        'Capacity': '8 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '8',
        'Spin Speed': '1200 RPM',
        'Motor': 'Inverter',
        'Energy Rating': 'A++',
        'Dimensions': '85 x 60 x 55 cm',
        'Weight': '65 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Inverter motor quiet and efficient.',
      maintenance: 'Monthly: Clean gasket. Clean detergent drawer.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Inverter error: Call service',
        'Not spinning: Check load'
      ],
      bestFor: 'Medium families, energy saving',
      estimatedConsumption: '120 units/year'
    },
    {
      id: 'orient-front-premium',
      name: 'Orient Front Load Premium',
      type: 'Front Load Fully Automatic',
      capacity: '10 kg',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load',
        '10 Wash Programs',
        'Quick Wash',
        'Child Lock',
        'Delay Start',
        'LED Touch',
        'Inverter Motor',
        'Steam'
      ],
      specifications: {
        'Capacity': '10 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '10',
        'Spin Speed': '1400 RPM',
        'Motor': 'Inverter',
        'Steam': 'Yes',
        'Energy Rating': 'A+++',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '70 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Steam for sanitization. Inverter efficient.',
      maintenance: 'Monthly: Clean drum. Check motor.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Steam not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Large families, premium features',
      estimatedConsumption: '130 units/year'
    },

    // ---------- SEMI-AUTOMATIC - 3 Models ----------
    {
      id: 'orient-semi-auto',
      name: 'Orient Semi-Automatic',
      type: 'Semi-Automatic',
      capacity: '10 kg Wash, 6 kg Spin',
      price: 'PKR 25,000 - 30,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Manual Operation',
        'Affordable',
        'Energy Saving',
        'Durable',
        'Simple Controls',
        'Timer'
      ],
      specifications: {
        'Wash Capacity': '10 kg',
        'Spin Capacity': '6 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2 (Wash + Spin)',
        'Timer': 'Mechanical 15 min',
        'Power': '400W',
        'Dimensions': '85 x 80 x 48 cm',
        'Weight': '32 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Manual water filling. Transfer clothes to spin tub.',
      maintenance: 'Monthly: Clean both tubs. Check drain hose.',
      installationTips: 'No permanent water connection needed.',
      safetyTips: 'Don\'t open lid during spin.',
      troubleshooting: [
        'Not spinning: Check load balance',
        'Not washing: Check timer'
      ],
      bestFor: 'Budget buyers, areas with water issues',
      estimatedConsumption: '105 units/year'
    },
    {
      id: 'orient-semi-deluxe',
      name: 'Orient Semi-Automatic Deluxe',
      type: 'Semi-Automatic',
      capacity: '12 kg Wash, 7 kg Spin',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Pulsator Wash',
        'Spin Dry',
        'Timer Controls',
        'Durable Body',
        'Easy Move Wheels',
        'Lint Filter'
      ],
      specifications: {
        'Wash Capacity': '12 kg',
        'Spin Capacity': '7 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual timer',
        'Power': '450W',
        'Dimensions': '88 x 82 x 50 cm',
        'Weight': '34 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual timer for wash and spin. Lint filter easy clean.',
      maintenance: 'Monthly: Clean lint filter.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety switch.',
      troubleshooting: [
        'Spin not working: Check lid closed',
        'Wash weak: Check pulsator'
      ],
      bestFor: 'Medium families, budget conscious',
      estimatedConsumption: '115 units/year'
    },
    {
      id: 'orient-semi-premium',
      name: 'Orient Semi-Automatic Premium',
      type: 'Semi-Automatic',
      capacity: '14 kg Wash, 8 kg Spin',
      price: 'PKR 38,000 - 45,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Powerful Pulsator',
        'Spin Dry',
        'Timer Controls',
        'Wheels',
        'Lint Filter',
        'Anti-rust Body'
      ],
      specifications: {
        'Wash Capacity': '14 kg',
        'Spin Capacity': '8 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual',
        'Power': '500W',
        'Dimensions': '92 x 85 x 52 cm',
        'Weight': '38 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Large capacity for big families.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety.',
      troubleshooting: [
        'Not working: Check power',
        'Leaking: Check hoses'
      ],
      bestFor: 'Large families, budget option',
      estimatedConsumption: '125 units/year'
    },

    // ---------- WASHER DRYER COMBO - 3 Models ----------
    {
      id: 'orient-combo-basic',
      name: 'Orient Washer Dryer Basic',
      type: 'Washer Dryer Combo',
      capacity: '7 kg Wash, 4 kg Dry',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        'Front Load',
        '6 Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Dry'
      ],
      specifications: {
        'Wash Capacity': '7 kg',
        'Dry Capacity': '4 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '6',
        'Dry Programs': '2',
        'Spin Speed': '1100 RPM',
        'Dimensions': '85 x 60 x 58 cm',
        'Weight': '68 kg',
        'Color': 'White',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Wash and dry in one machine. Don\'t overload for drying.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Don\'t leave wet clothes long.',
      troubleshooting: [
        'Not drying: Check load size',
        'Error: Call service'
      ],
      bestFor: 'Space saving',
      estimatedConsumption: '190 units/year'
    },
    {
      id: 'orient-combo-deluxe',
      name: 'Orient Washer Dryer Deluxe',
      type: 'Washer Dryer Combo',
      capacity: '8 kg Wash, 5 kg Dry',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        '8 Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Sensor Dry',
        'Inverter Motor'
      ],
      specifications: {
        'Wash Capacity': '8 kg',
        'Dry Capacity': '5 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '8',
        'Dry Programs': '3',
        'Spin Speed': '1200 RPM',
        'Motor': 'Inverter',
        'Sensor Dry': 'Yes',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '72 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Sensor dry prevents over-drying.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Professional installation.',
      safetyTips: 'Sensor safe.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Not drying: Check settings'
      ],
      bestFor: 'Medium families, convenience',
      estimatedConsumption: '210 units/year'
    },
    {
      id: 'orient-combo-premium',
      name: 'Orient Washer Dryer Premium',
      type: 'Washer Dryer Combo',
      capacity: '10 kg Wash, 6 kg Dry',
      price: 'PKR 120,000 - 138,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        '10 Programs',
        'Child Lock',
        'Delay Start',
        'LED Touch',
        'Sensor Dry',
        'Inverter Motor',
        'Steam'
      ],
      specifications: {
        'Wash Capacity': '10 kg',
        'Dry Capacity': '6 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '10',
        'Dry Programs': '4',
        'Spin Speed': '1300 RPM',
        'Motor': 'Inverter',
        'Steam': 'Yes',
        'Sensor Dry': 'Yes',
        'Dimensions': '85 x 60 x 62 cm',
        'Weight': '76 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Complete laundry solution with steam.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Steam not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Large families, all-in-one',
      estimatedConsumption: '230 units/year'
    },

    // ---------- MINI/PORTABLE WASHER - 3 Models ----------
    {
      id: 'orient-mini-basic',
      name: 'Orient Mini Washer Basic',
      type: 'Mini/Portable Washer',
      capacity: '3 kg',
      price: 'PKR 16,000 - 20,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Portable',
        'Simple Controls',
        'Affordable',
        'Lightweight',
        'Manual Fill',
        'Spin Dry'
      ],
      specifications: {
        'Capacity': '3 kg',
        'Type': 'Mini Portable',
        'Operation': 'Manual fill',
        'Spin': 'Yes',
        'Timer': '15 min',
        'Dimensions': '58 x 44 x 44 cm',
        'Weight': '14 kg',
        'Color': 'White',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Small loads. Perfect for singles.',
      maintenance: 'Monthly: Clean drum.',
      installationTips: 'Portable.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not working: Check power',
        'Not spinning: Check load'
      ],
      bestFor: 'Singles, dorms',
      estimatedConsumption: '45 units/year'
    },
    {
      id: 'orient-mini-deluxe',
      name: 'Orient Mini Washer Deluxe',
      type: 'Mini/Portable Washer',
      capacity: '4 kg',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Timer',
        'Spin Dry',
        'Auto Fill',
        'Lightweight',
        'Quiet'
      ],
      specifications: {
        'Capacity': '4 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill option',
        'Spin': 'Yes',
        'Timer': 'Digital',
        'Dimensions': '60 x 46 x 46 cm',
        'Weight': '16 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto fill option.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Portable.',
      safetyTips: 'Stable surface.',
      troubleshooting: [
        'Auto fill not working: Check hose',
        'Not spinning: Check load'
      ],
      bestFor: 'Couples, small apartments',
      estimatedConsumption: '55 units/year'
    },
    {
      id: 'orient-mini-premium',
      name: 'Orient Mini Washer Premium',
      type: 'Mini/Portable Washer',
      capacity: '5 kg',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Display',
        'Spin Dry',
        'Auto Fill',
        'Multiple Programs',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '5 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill',
        'Spin': 'Yes',
        'Programs': '3',
        'Dimensions': '64 x 48 x 48 cm',
        'Weight': '18 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Multiple programs.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Portable.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Program not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, limited space',
      estimatedConsumption: '65 units/year'
    }
  ]
},
    {
  id: 'haier-washing',
  name: 'Haier',
  models: [
    // ---------- TOP LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'haier-top-basic',
      name: 'Haier Top Load Basic',
      type: 'Top Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '6 Wash Programs',
        'Water Level Selector',
        'Stainless Steel Drum',
        'Child Lock',
        'Delay Timer',
        'Energy Efficient'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '6',
        'Spin Speed': '700 RPM',
        'Drum Material': 'Stainless Steel',
        'Water Consumption': '98L per cycle',
        'Power': '480W',
        'Dimensions': '91 x 55 x 59 cm',
        'Weight': '36 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Load clothes evenly. Use recommended detergent amount. Select program based on fabric type. Close lid properly to start.',
      maintenance: 'Monthly: Clean filter. Leave lid open after use to prevent mold. Clean drum with empty hot water cycle.',
      installationTips: 'Level surface needed. Water connection required. Keep on solid floor. Avoid direct sunlight.',
      safetyTips: 'Child lock for safety. Don\'t overload. Unplug when not in use for long periods.',
      troubleshooting: [
        'Not starting: Check power, lid closed',
        'Water not filling: Check tap, hose',
        'Not spinning: Check load balance',
        'Leaking: Check hoses'
      ],
      bestFor: 'Small families, reliable performance',
      estimatedConsumption: '145 units/year'
    },
    {
      id: 'haier-top-deluxe',
      name: 'Haier Top Load Deluxe',
      type: 'Top Load Fully Automatic',
      capacity: '8 kg',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '8 Wash Programs',
        'Fuzzy Logic',
        'Quick Wash',
        'Child Lock',
        'Water Level Selector',
        'LED Display'
      ],
      specifications: {
        'Capacity': '8 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '8',
        'Spin Speed': '750 RPM',
        'Technology': 'Fuzzy Logic',
        'Drum Material': 'Stainless Steel',
        'Display': 'LED',
        'Dimensions': '93 x 56 x 61 cm',
        'Weight': '38 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Fuzzy logic automatically adjusts settings. Quick wash for lightly soiled clothes. Separate colors.',
      maintenance: 'Monthly: Clean filter. Clean drum with tub clean program.',
      installationTips: 'Level surface. Water connection. Proper drainage.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Fuzzy logic error: Reset',
        'Not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, smart features',
      estimatedConsumption: '155 units/year'
    },
    {
      id: 'haier-top-premium',
      name: 'Haier Top Load Premium',
      type: 'Top Load Fully Automatic',
      capacity: '10 kg',
      price: 'PKR 55,000 - 64,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '12 Wash Programs',
        'Fuzzy Logic',
        'Quick Wash',
        'Child Lock',
        'Water Level Selector',
        'LED Display',
        'Delay Start',
        'Inverter Motor'
      ],
      specifications: {
        'Capacity': '10 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '12',
        'Spin Speed': '800 RPM',
        'Technology': 'Fuzzy Logic',
        'Motor': 'Inverter',
        'Display': 'LED',
        'Dimensions': '95 x 58 x 64 cm',
        'Weight': '42 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Inverter motor for quiet operation. Delay start for convenience.',
      maintenance: 'Monthly: Clean filter. Leave door open.',
      installationTips: 'Level surface. Water connection.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Inverter error: Call service',
        'Delay start not working: Check settings'
      ],
      bestFor: 'Large families, quiet operation',
      estimatedConsumption: '165 units/year'
    },

    // ---------- FRONT LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'haier-front-load',
      name: 'Haier Front Load Washer',
      type: 'Front Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 60,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load Design',
        '7 Wash Programs',
        'Energy Efficient',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '7',
        'Spin Speed': '1000 RPM',
        'Energy Rating': 'A++',
        'Drum Material': 'Stainless Steel',
        'Display': 'LED',
        'Dimensions': '85 x 60 x 55 cm',
        'Weight': '64 kg',
        'Color': 'White',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Front load uses less water. Load from front. Use HE detergent. Don\'t overload.',
      maintenance: 'Monthly: Clean door gasket. Run cleaning cycle. Leave door open.',
      installationTips: 'Built-under or freestanding. Level carefully. Water connection.',
      safetyTips: 'Child lock safety. Door lock during operation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Not draining: Clean filter',
        'Error: Call service'
      ],
      bestFor: 'Water conscious users, better cleaning',
      estimatedConsumption: '115 units/year'
    },
    {
      id: 'haier-front-deluxe',
      name: 'Haier Front Load Deluxe',
      type: 'Front Load Fully Automatic',
      capacity: '9 kg',
      price: 'PKR 75,000 - 85,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Direct Drive Motor',
        'Steam Wash',
        'Allergy Care',
        'Quiet Operation',
        'Energy Efficient',
        '14 Programs',
        'LED Display'
      ],
      specifications: {
        'Capacity': '9 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '14',
        'Spin Speed': '1200 RPM',
        'Motor': 'Direct Drive',
        'Steam': 'Yes',
        'Energy Rating': 'A+++',
        'Dimensions': '85 x 60 x 58 cm',
        'Weight': '68 kg',
        'Color': 'Silver',
        'Warranty': '3 years'
      },
      warranty: '3 years warranty',
      usageGuide: 'Direct Drive motor quiet and durable. Steam for allergy care. Quick wash 15 min.',
      maintenance: 'Monthly: Clean gasket. Clean detergent drawer.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Steam safety. Child lock.',
      troubleshooting: [
        'Direct Drive error: Call service',
        'Steam not working: Check settings'
      ],
      bestFor: 'Families with allergies, quiet operation',
      estimatedConsumption: '125 units/year'
    },
    {
      id: 'haier-front-premium',
      name: 'Haier Front Load Premium',
      type: 'Front Load Fully Automatic',
      capacity: '12 kg',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Direct Drive Motor',
        'Steam Wash',
        'Allergy Care',
        'Smart Controls',
        '16 Programs',
        'LED Touch',
        'WiFi Ready'
      ],
      specifications: {
        'Capacity': '12 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '16',
        'Spin Speed': '1400 RPM',
        'Motor': 'Direct Drive',
        'Steam': 'Yes',
        'Smart': 'WiFi',
        'Energy Rating': 'A+++',
        'Dimensions': '85 x 60 x 62 cm',
        'Weight': '74 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Smart features via app. Steam for sanitization.',
      maintenance: 'Monthly: Clean drum. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Smart features for safety.',
      troubleshooting: [
        'WiFi not connecting: Reset router',
        'Steam not working: Check settings'
      ],
      bestFor: 'Large families, smart home users',
      estimatedConsumption: '135 units/year'
    },

    // ---------- SEMI-AUTOMATIC - 3 Models ----------
    {
      id: 'haier-semi-basic',
      name: 'Haier Semi-Automatic Basic',
      type: 'Semi-Automatic',
      capacity: '9 kg Wash, 5 kg Spin',
      price: 'PKR 24,000 - 28,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Manual Operation',
        'Affordable',
        'Energy Saving',
        'Durable',
        'Simple Controls',
        'Timer'
      ],
      specifications: {
        'Wash Capacity': '9 kg',
        'Spin Capacity': '5 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2 (Wash + Spin)',
        'Timer': 'Mechanical 15 min',
        'Power': '420W',
        'Dimensions': '86 x 82 x 46 cm',
        'Weight': '31 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Manual water filling. Transfer clothes to spin tub. Set timer for wash and spin.',
      maintenance: 'Monthly: Clean both tubs. Check drain hose.',
      installationTips: 'No permanent water connection needed. Near water source.',
      safetyTips: 'Don\'t open lid during spin.',
      troubleshooting: [
        'Not spinning: Check load balance',
        'Not washing: Check timer'
      ],
      bestFor: 'Budget buyers, areas with water issues',
      estimatedConsumption: '100 units/year'
    },
    {
      id: 'haier-semi-deluxe',
      name: 'Haier Semi-Automatic Deluxe',
      type: 'Semi-Automatic',
      capacity: '11 kg Wash, 6 kg Spin',
      price: 'PKR 29,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Pulsator Wash',
        'Spin Dry',
        'Timer Controls',
        'Durable Body',
        'Easy Move Wheels',
        'Lint Filter'
      ],
      specifications: {
        'Wash Capacity': '11 kg',
        'Spin Capacity': '6 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual timer',
        'Power': '460W',
        'Dimensions': '88 x 84 x 48 cm',
        'Weight': '33 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual timer for wash and spin. Lint filter easy clean.',
      maintenance: 'Monthly: Clean lint filter. Check hoses.',
      installationTips: 'Near water source. Drain hose position.',
      safetyTips: 'Lid safety switch.',
      troubleshooting: [
        'Spin not working: Check lid closed',
        'Wash weak: Check pulsator'
      ],
      bestFor: 'Medium families, budget conscious',
      estimatedConsumption: '110 units/year'
    },
    {
      id: 'haier-semi-premium',
      name: 'Haier Semi-Automatic Premium',
      type: 'Semi-Automatic',
      capacity: '13 kg Wash, 7 kg Spin',
      price: 'PKR 36,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Powerful Pulsator',
        'Spin Dry',
        'Timer Controls',
        'Wheels',
        'Lint Filter',
        'Anti-rust Body'
      ],
      specifications: {
        'Wash Capacity': '13 kg',
        'Spin Capacity': '7 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual',
        'Power': '500W',
        'Dimensions': '91 x 86 x 50 cm',
        'Weight': '36 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Large capacity for big families.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety.',
      troubleshooting: [
        'Not working: Check power',
        'Leaking: Check hoses'
      ],
      bestFor: 'Large families, budget option',
      estimatedConsumption: '120 units/year'
    },

    // ---------- WASHER DRYER COMBO - 3 Models ----------
    {
      id: 'haier-combo-basic',
      name: 'Haier Washer Dryer Basic',
      type: 'Washer Dryer Combo',
      capacity: '7 kg Wash, 4 kg Dry',
      price: 'PKR 82,000 - 92,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        'Front Load',
        '6 Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Dry'
      ],
      specifications: {
        'Wash Capacity': '7 kg',
        'Dry Capacity': '4 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '6',
        'Dry Programs': '2',
        'Spin Speed': '1100 RPM',
        'Dimensions': '85 x 60 x 58 cm',
        'Weight': '69 kg',
        'Color': 'White',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Wash and dry in one machine. Don\'t overload for drying.',
      maintenance: 'Monthly: Clean filter. Check door seal.',
      installationTips: 'Professional installation. Proper drainage.',
      safetyTips: 'Don\'t leave wet clothes long.',
      troubleshooting: [
        'Not drying: Check load size',
        'Error: Call service'
      ],
      bestFor: 'Space saving, convenience',
      estimatedConsumption: '195 units/year'
    },
    {
      id: 'haier-combo-deluxe',
      name: 'Haier Washer Dryer Deluxe',
      type: 'Washer Dryer Combo',
      capacity: '9 kg Wash, 5 kg Dry',
      price: 'PKR 105,000 - 118,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        '8 Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Sensor Dry',
        'Inverter Motor'
      ],
      specifications: {
        'Wash Capacity': '9 kg',
        'Dry Capacity': '5 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '8',
        'Dry Programs': '3',
        'Spin Speed': '1200 RPM',
        'Motor': 'Inverter',
        'Sensor Dry': 'Yes',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '73 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Sensor dry prevents over-drying.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Professional installation.',
      safetyTips: 'Sensor safe.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Not drying: Check settings'
      ],
      bestFor: 'Medium families, energy saving',
      estimatedConsumption: '215 units/year'
    },
    {
      id: 'haier-combo-premium',
      name: 'Haier Washer Dryer Premium',
      type: 'Washer Dryer Combo',
      capacity: '11 kg Wash, 7 kg Dry',
      price: 'PKR 135,000 - 155,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        '12 Programs',
        'Child Lock',
        'Delay Start',
        'LED Touch',
        'Sensor Dry',
        'Inverter Motor',
        'Steam'
      ],
      specifications: {
        'Wash Capacity': '11 kg',
        'Dry Capacity': '7 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '12',
        'Dry Programs': '4',
        'Spin Speed': '1400 RPM',
        'Motor': 'Inverter',
        'Steam': 'Yes',
        'Sensor Dry': 'Yes',
        'Dimensions': '85 x 60 x 64 cm',
        'Weight': '78 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Complete laundry solution with steam.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Steam not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Large families, all-in-one premium',
      estimatedConsumption: '235 units/year'
    },

    // ---------- MINI/PORTABLE WASHER - 3 Models ----------
    {
      id: 'haier-mini-basic',
      name: 'Haier Mini Washer Basic',
      type: 'Mini/Portable Washer',
      capacity: '3 kg',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Portable',
        'Simple Controls',
        'Affordable',
        'Lightweight',
        'Manual Fill',
        'Spin Dry'
      ],
      specifications: {
        'Capacity': '3 kg',
        'Type': 'Mini Portable',
        'Operation': 'Manual fill',
        'Spin': 'Yes',
        'Timer': '15 min',
        'Dimensions': '59 x 45 x 45 cm',
        'Weight': '15 kg',
        'Color': 'White',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Small loads. Perfect for singles. Manual water fill.',
      maintenance: 'Monthly: Clean drum.',
      installationTips: 'Portable. No permanent installation.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not working: Check power',
        'Not spinning: Check load'
      ],
      bestFor: 'Singles, small apartments, dorms',
      estimatedConsumption: '48 units/year'
    },
    {
      id: 'haier-mini-deluxe',
      name: 'Haier Mini Washer Deluxe',
      type: 'Mini/Portable Washer',
      capacity: '4 kg',
      price: 'PKR 25,000 - 30,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Timer',
        'Spin Dry',
        'Auto Fill',
        'Lightweight',
        'Quiet'
      ],
      specifications: {
        'Capacity': '4 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill option',
        'Spin': 'Yes',
        'Timer': 'Digital',
        'Dimensions': '62 x 47 x 47 cm',
        'Weight': '17 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto fill option. Perfect for small spaces.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Portable. Near water source.',
      safetyTips: 'Stable surface.',
      troubleshooting: [
        'Auto fill not working: Check hose',
        'Not spinning: Check load'
      ],
      bestFor: 'Couples, small apartments',
      estimatedConsumption: '58 units/year'
    },
    {
      id: 'haier-mini-premium',
      name: 'Haier Mini Washer Premium',
      type: 'Mini/Portable Washer',
      capacity: '5 kg',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Display',
        'Spin Dry',
        'Auto Fill',
        'Multiple Programs',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '5 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill',
        'Spin': 'Yes',
        'Programs': '3',
        'Dimensions': '65 x 49 x 49 cm',
        'Weight': '19 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Multiple programs for different fabrics.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Portable. Near water source.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Program not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, limited space',
      estimatedConsumption: '68 units/year'
    }
  ]
},
      {
  id: 'lg-washing',
  name: 'LG',
  models: [
    // ---------- TOP LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'lg-top-basic',
      name: 'LG Top Load Basic',
      type: 'Top Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter Motor',
        '6 Motion Technology',
        'Fully Automatic',
        '6 Wash Programs',
        'Water Level Selector',
        'Child Lock',
        'Delay Timer'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '6',
        'Spin Speed': '700 RPM',
        'Motor': 'Smart Inverter',
        'Technology': '6 Motion',
        'Drum Material': 'Stainless Steel',
        'Dimensions': '93 x 56 x 60 cm',
        'Weight': '38 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Load clothes evenly. 6 Motion technology for different fabric care. Use recommended detergent.',
      maintenance: 'Monthly: Clean filter. Leave lid open after use. Run tub clean cycle.',
      installationTips: 'Level surface needed. Water connection required. Keep on solid floor.',
      safetyTips: 'Child lock for safety. Don\'t overload.',
      troubleshooting: [
        'Not starting: Check power, lid closed',
        'Water not filling: Check tap, hose',
        'Error code: Call service'
      ],
      bestFor: 'Small families, LG quality',
      estimatedConsumption: '140 units/year'
    },
    {
      id: 'lg-top-deluxe',
      name: 'LG Top Load Deluxe',
      type: 'Top Load Fully Automatic',
      capacity: '8 kg',
      price: 'PKR 55,000 - 64,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Smart Inverter Motor',
        '6 Motion Technology',
        'TurboWash',
        '8 Wash Programs',
        'Fuzzy Logic',
        'LED Display',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '8 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '8',
        'Spin Speed': '750 RPM',
        'Motor': 'Smart Inverter',
        'Technology': '6 Motion + TurboWash',
        'Display': 'LED',
        'Dimensions': '95 x 58 x 62 cm',
        'Weight': '40 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'TurboWash for quick cleaning. 6 Motion adapts to fabric type.',
      maintenance: 'Monthly: Clean filter. Run tub clean program.',
      installationTips: 'Level surface. Water connection.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'TurboWash not working: Check settings',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, fast wash',
      estimatedConsumption: '150 units/year'
    },
    {
      id: 'lg-top-premium',
      name: 'LG Top Load Premium',
      type: 'Top Load Fully Automatic',
      capacity: '10 kg',
      price: 'PKR 70,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'AI DD Motor',
        '6 Motion',
        'TurboWash 360',
        '12 Wash Programs',
        'ThinQ WiFi',
        'LED Touch',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '10 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '12',
        'Spin Speed': '800 RPM',
        'Motor': 'AI Direct Drive',
        'Technology': 'TurboWash 360',
        'Smart': 'ThinQ WiFi',
        'Display': 'LED Touch',
        'Dimensions': '97 x 60 x 65 cm',
        'Weight': '45 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 20 years motor'
      },
      warranty: '3 years + 20 years motor warranty',
      usageGuide: 'AI DD detects fabric and optimizes wash. Control via app.',
      maintenance: 'Monthly: Update app. Clean filter.',
      installationTips: 'Level surface. Strong WiFi.',
      safetyTips: 'Smart features for safety.',
      troubleshooting: [
        'AI error: Reset',
        'WiFi not connecting: Check router',
        'Error: Call service'
      ],
      bestFor: 'Large families, smart home users',
      estimatedConsumption: '160 units/year'
    },

    // ---------- FRONT LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'lg-front-basic',
      name: 'LG Front Load Basic',
      type: 'Front Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 65,000 - 75,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Inverter Direct Drive',
        '6 Motion',
        '7 Wash Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '7',
        'Spin Speed': '1000 RPM',
        'Motor': 'Inverter Direct Drive',
        'Energy Rating': 'A++',
        'Display': 'LED',
        'Dimensions': '85 x 60 x 55 cm',
        'Weight': '65 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Front load uses less water. Load from front. Use HE detergent.',
      maintenance: 'Monthly: Clean door gasket. Run cleaning cycle.',
      installationTips: 'Built-under or freestanding. Level carefully.',
      safetyTips: 'Child lock safety. Door lock during operation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Not draining: Clean filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, water saving',
      estimatedConsumption: '110 units/year'
    },
    {
      id: 'lg-front-deluxe',
      name: 'LG Front Load Deluxe',
      type: 'Front Load Fully Automatic',
      capacity: '9 kg',
      price: 'PKR 85,000 - 98,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'AI Direct Drive',
        'Steam Technology',
        '6 Motion',
        '12 Wash Programs',
        'ThinQ WiFi',
        'LED Display',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '9 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '12',
        'Spin Speed': '1200 RPM',
        'Motor': 'AI Direct Drive',
        'Steam': 'Yes',
        'Smart': 'ThinQ',
        'Energy Rating': 'A+++',
        'Dimensions': '85 x 60 x 58 cm',
        'Weight': '68 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'AI detects fabric. Steam for allergy care.',
      maintenance: 'Monthly: Clean gasket. Update app.',
      installationTips: 'Professional installation.',
      safetyTips: 'Steam safety.',
      troubleshooting: [
        'AI error: Reset',
        'Steam not working: Check settings'
      ],
      bestFor: 'Families with allergies, smart features',
      estimatedConsumption: '120 units/year'
    },
    {
      id: 'lg-front-premium',
      name: 'LG Front Load Premium',
      type: 'Front Load Fully Automatic',
      capacity: '12 kg',
      price: 'PKR 115,000 - 135,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'AI DD Motor',
        'Steam+',
        'TurboWash 360',
        '16 Programs',
        'ThinQ WiFi',
        'LED Touch',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '12 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '16',
        'Spin Speed': '1400 RPM',
        'Motor': 'AI Direct Drive',
        'Steam': 'Steam+',
        'Smart': 'ThinQ',
        'Energy Rating': 'A+++',
        'Dimensions': '85 x 60 x 64 cm',
        'Weight': '75 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 20 years motor'
      },
      warranty: '3 years + 20 years motor warranty',
      usageGuide: 'Premium features with AI and steam.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'AI error: Call service',
        'Steam+ not working: Check'
      ],
      bestFor: 'Large families, premium performance',
      estimatedConsumption: '130 units/year'
    },

    // ---------- SEMI-AUTOMATIC - 3 Models ----------
    {
      id: 'lg-semi-basic',
      name: 'LG Semi-Automatic Basic',
      type: 'Semi-Automatic',
      capacity: '8 kg Wash, 4 kg Spin',
      price: 'PKR 28,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Manual Operation',
        'Affordable',
        'Energy Saving',
        'Durable',
        'Simple Controls',
        'Timer'
      ],
      specifications: {
        'Wash Capacity': '8 kg',
        'Spin Capacity': '4 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Mechanical 15 min',
        'Power': '400W',
        'Dimensions': '85 x 80 x 45 cm',
        'Weight': '30 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Manual water filling. Transfer clothes to spin tub.',
      maintenance: 'Monthly: Clean both tubs.',
      installationTips: 'No permanent water connection needed.',
      safetyTips: 'Don\'t open lid during spin.',
      troubleshooting: [
        'Not spinning: Check load balance',
        'Not washing: Check timer'
      ],
      bestFor: 'Budget buyers',
      estimatedConsumption: '95 units/year'
    },
    {
      id: 'lg-semi-deluxe',
      name: 'LG Semi-Automatic Deluxe',
      type: 'Semi-Automatic',
      capacity: '10 kg Wash, 6 kg Spin',
      price: 'PKR 35,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Pulsator Wash',
        'Spin Dry',
        'Timer Controls',
        'Durable Body',
        'Wheels',
        'Lint Filter'
      ],
      specifications: {
        'Wash Capacity': '10 kg',
        'Spin Capacity': '6 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual',
        'Power': '450W',
        'Dimensions': '88 x 82 x 48 cm',
        'Weight': '33 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual timer for wash and spin.',
      maintenance: 'Monthly: Clean lint filter.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety switch.',
      troubleshooting: [
        'Spin not working: Check lid closed',
        'Wash weak: Check pulsator'
      ],
      bestFor: 'Medium families, budget',
      estimatedConsumption: '105 units/year'
    },
    {
      id: 'lg-semi-premium',
      name: 'LG Semi-Automatic Premium',
      type: 'Semi-Automatic',
      capacity: '12 kg Wash, 7 kg Spin',
      price: 'PKR 42,000 - 50,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Powerful Pulsator',
        'Spin Dry',
        'Timer Controls',
        'Wheels',
        'Lint Filter',
        'Anti-rust'
      ],
      specifications: {
        'Wash Capacity': '12 kg',
        'Spin Capacity': '7 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual',
        'Power': '500W',
        'Dimensions': '90 x 85 x 50 cm',
        'Weight': '36 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Large capacity for big families.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety.',
      troubleshooting: [
        'Not working: Check power',
        'Leaking: Check hoses'
      ],
      bestFor: 'Large families, budget',
      estimatedConsumption: '115 units/year'
    },

    // ---------- WASHER DRYER COMBO - 3 Models ----------
    {
      id: 'lg-twinwash',
      name: 'LG TwinWash System',
      type: 'Washer Dryer Combo',
      capacity: '12 kg Wash, 7 kg Dry',
      price: 'PKR 120,000 - 140,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'TwinWash System',
        'Direct Drive Motor',
        'Steam Technology',
        'AI DD',
        'SmartThinQ',
        '14 Programs',
        'Child Lock'
      ],
      specifications: {
        'Wash Capacity': '12 kg',
        'Dry Capacity': '7 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '14',
        'Dry Programs': '4',
        'Spin Speed': '1400 RPM',
        'Motor': 'Direct Drive',
        'AI': 'AI Direct Drive',
        'Steam': 'Steam+',
        'Smart': 'ThinQ',
        'Dimensions': '85 x 60 x 70 cm',
        'Weight': '82 kg',
        'Color': 'Black Stainless',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'Wash and dry in one machine. AI optimizes cycles.',
      maintenance: 'Monthly: Deep clean. Update app.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Premium features for safety.',
      troubleshooting: [
        'AI error: Reset',
        'Not drying: Check load',
        'Error: Call service'
      ],
      bestFor: 'Large families, space saving',
      estimatedConsumption: '240 units/year'
    },
    {
      id: 'lg-combo-deluxe',
      name: 'LG Washer Dryer Deluxe',
      type: 'Washer Dryer Combo',
      capacity: '10 kg Wash, 6 kg Dry',
      price: 'PKR 105,000 - 120,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Inverter Direct Drive',
        '6 Motion',
        'Sensor Dry',
        '10 Programs',
        'Child Lock',
        'LED Display',
        'Delay Start'
      ],
      specifications: {
        'Wash Capacity': '10 kg',
        'Dry Capacity': '6 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '10',
        'Dry Programs': '3',
        'Spin Speed': '1300 RPM',
        'Motor': 'Inverter Direct Drive',
        'Sensor Dry': 'Yes',
        'Dimensions': '85 x 60 x 65 cm',
        'Weight': '76 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Sensor dry prevents over-drying.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Professional installation.',
      safetyTips: 'Sensor safe.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Not drying: Check settings'
      ],
      bestFor: 'Medium families, convenience',
      estimatedConsumption: '220 units/year'
    },
    {
      id: 'lg-combo-basic',
      name: 'LG Washer Dryer Basic',
      type: 'Washer Dryer Combo',
      capacity: '8 kg Wash, 5 kg Dry',
      price: 'PKR 88,000 - 100,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Inverter Direct Drive',
        '6 Programs',
        'Quick Dry',
        'Child Lock',
        'LED Display',
        'Delay Start'
      ],
      specifications: {
        'Wash Capacity': '8 kg',
        'Dry Capacity': '5 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '6',
        'Dry Programs': '2',
        'Spin Speed': '1100 RPM',
        'Motor': 'Inverter Direct Drive',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '70 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Basic wash and dry combo.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Don\'t overload for drying.',
      troubleshooting: [
        'Not drying: Check load size',
        'Error: Call service'
      ],
      bestFor: 'Small families, space saving',
      estimatedConsumption: '200 units/year'
    },

    // ---------- MINI/PORTABLE WASHER - 3 Models ----------
    {
      id: 'lg-mini-basic',
      name: 'LG Mini Washer Basic',
      type: 'Mini/Portable Washer',
      capacity: '3 kg',
      price: 'PKR 22,000 - 26,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Portable',
        'Simple Controls',
        'Affordable',
        'Lightweight',
        'Manual Fill',
        'Spin Dry'
      ],
      specifications: {
        'Capacity': '3 kg',
        'Type': 'Mini Portable',
        'Operation': 'Manual fill',
        'Spin': 'Yes',
        'Timer': '15 min',
        'Dimensions': '58 x 44 x 44 cm',
        'Weight': '14 kg',
        'Color': 'White',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Small loads. Perfect for singles.',
      maintenance: 'Monthly: Clean drum.',
      installationTips: 'Portable.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not working: Check power',
        'Not spinning: Check load'
      ],
      bestFor: 'Singles, dorms',
      estimatedConsumption: '45 units/year'
    },
    {
      id: 'lg-mini-deluxe',
      name: 'LG Mini Washer Deluxe',
      type: 'Mini/Portable Washer',
      capacity: '4 kg',
      price: 'PKR 28,000 - 34,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Timer',
        'Spin Dry',
        'Auto Fill',
        'Lightweight',
        'Quiet'
      ],
      specifications: {
        'Capacity': '4 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill option',
        'Spin': 'Yes',
        'Timer': 'Digital',
        'Dimensions': '61 x 46 x 46 cm',
        'Weight': '16 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto fill option.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Portable.',
      safetyTips: 'Stable surface.',
      troubleshooting: [
        'Auto fill not working: Check hose',
        'Not spinning: Check load'
      ],
      bestFor: 'Couples, small apartments',
      estimatedConsumption: '55 units/year'
    },
    {
      id: 'lg-mini-premium',
      name: 'LG Mini Washer Premium',
      type: 'Mini/Portable Washer',
      capacity: '5 kg',
      price: 'PKR 35,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Display',
        'Spin Dry',
        'Auto Fill',
        'Multiple Programs',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '5 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill',
        'Spin': 'Yes',
        'Programs': '3',
        'Dimensions': '64 x 48 x 48 cm',
        'Weight': '18 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Multiple programs.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Portable.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Program not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, limited space',
      estimatedConsumption: '65 units/year'
    }
  ]
},
     {
  id: 'samsung-washing',
  name: 'Samsung',
  models: [
    // ---------- TOP LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'samsung-top-basic',
      name: 'Samsung Top Load Basic',
      type: 'Top Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 48,000 - 55,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Digital Inverter Motor',
        'Wobble Technology',
        'Fully Automatic',
        '6 Wash Programs',
        'Water Level Selector',
        'Child Lock',
        'Delay Timer'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '6',
        'Spin Speed': '700 RPM',
        'Motor': 'Digital Inverter',
        'Technology': 'Wobble',
        'Drum Material': 'Stainless Steel',
        'Dimensions': '94 x 57 x 61 cm',
        'Weight': '39 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Wobble technology for gentle yet powerful cleaning. Load clothes evenly. Use recommended detergent.',
      maintenance: 'Monthly: Clean filter. Leave lid open after use. Run tub clean cycle.',
      installationTips: 'Level surface needed. Water connection required. Keep on solid floor.',
      safetyTips: 'Child lock for safety. Don\'t overload.',
      troubleshooting: [
        'Not starting: Check power, lid closed',
        'Water not filling: Check tap, hose',
        'Error code: Call service'
      ],
      bestFor: 'Small families, Samsung quality',
      estimatedConsumption: '145 units/year'
    },
    {
      id: 'samsung-top-deluxe',
      name: 'Samsung Top Load Deluxe',
      type: 'Top Load Fully Automatic',
      capacity: '8 kg',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Digital Inverter Motor',
        'Wobble Technology',
        'Quick Drive',
        '8 Wash Programs',
        'LED Display',
        'Child Lock',
        'Delay End'
      ],
      specifications: {
        'Capacity': '8 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '8',
        'Spin Speed': '750 RPM',
        'Motor': 'Digital Inverter',
        'Technology': 'Wobble + Quick Drive',
        'Display': 'LED',
        'Dimensions': '96 x 59 x 63 cm',
        'Weight': '41 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Quick Drive for faster washing. Wobble technology reduces tangling.',
      maintenance: 'Monthly: Clean filter. Run tub clean program.',
      installationTips: 'Level surface. Water connection.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Quick Drive not working: Check settings',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, fast wash',
      estimatedConsumption: '155 units/year'
    },
    {
      id: 'samsung-top-premium',
      name: 'Samsung Top Load Premium',
      type: 'Top Load Fully Automatic',
      capacity: '10 kg',
      price: 'PKR 75,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Digital Inverter Motor',
        'Ecobubble',
        'Quick Drive',
        '12 Wash Programs',
        'Smart Control',
        'LED Touch',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '10 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '12',
        'Spin Speed': '800 RPM',
        'Motor': 'Digital Inverter',
        'Technology': 'Ecobubble + Quick Drive',
        'Smart': 'Smart Control',
        'Display': 'LED Touch',
        'Dimensions': '98 x 61 x 66 cm',
        'Weight': '46 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 20 years motor'
      },
      warranty: '3 years + 20 years motor warranty',
      usageGuide: 'Ecobubble technology for cold water washing. Saves energy.',
      maintenance: 'Monthly: Clean filter. Check bubble generator.',
      installationTips: 'Level surface. Water connection.',
      safetyTips: 'Smart features for safety.',
      troubleshooting: [
        'Ecobubble not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Large families, energy saving',
      estimatedConsumption: '165 units/year'
    },

    // ---------- FRONT LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'samsung-front-basic',
      name: 'Samsung Front Load Basic',
      type: 'Front Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 68,000 - 78,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Digital Inverter Motor',
        '6 Wash Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Wash',
        'Diamond Drum'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '6',
        'Spin Speed': '1000 RPM',
        'Motor': 'Digital Inverter',
        'Drum': 'Diamond Drum',
        'Energy Rating': 'A++',
        'Dimensions': '85 x 60 x 55 cm',
        'Weight': '66 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Diamond drum gentle on clothes. Front load uses less water.',
      maintenance: 'Monthly: Clean door gasket. Run cleaning cycle.',
      installationTips: 'Built-under or freestanding. Level carefully.',
      safetyTips: 'Child lock safety. Door lock during operation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Not draining: Clean filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, gentle wash',
      estimatedConsumption: '115 units/year'
    },
    {
      id: 'samsung-ecobubble',
      name: 'Samsung EcoBubble',
      type: 'Front Load Fully Automatic',
      capacity: '9 kg',
      price: 'PKR 90,000 - 105,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'EcoBubble Technology',
        'Digital Inverter Motor',
        'AddWash Door',
        'Self Clean+',
        'QuickDrive',
        '10 Wash Programs',
        'LED Display'
      ],
      specifications: {
        'Capacity': '9 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '10',
        'Spin Speed': '1200 RPM',
        'Technology': 'EcoBubble',
        'AddWash': 'Yes',
        'Self Clean': 'Self Clean+',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A+++',
        'Dimensions': '85 x 60 x 58 cm',
        'Weight': '69 kg',
        'Color': 'White',
        'Warranty': '3 years + 10 years motor'
      },
      warranty: '3 years + 10 years motor warranty',
      usageGuide: 'EcoBubble works in cold water. AddWash feature to add forgotten items.',
      maintenance: 'Monthly: Clean AddWash door. Self cleaning drum.',
      installationTips: 'Professional installation.',
      safetyTips: 'AddWash door safety.',
      troubleshooting: [
        'EcoBubble not working: Check settings',
        'AddWash not sealing: Check door',
        'Error: Call service'
      ],
      bestFor: 'Families, cold water wash',
      estimatedConsumption: '125 units/year'
    },
    {
      id: 'samsung-front-premium',
      name: 'Samsung Front Load Premium',
      type: 'Front Load Fully Automatic',
      capacity: '12 kg',
      price: 'PKR 120,000 - 140,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'QuickDrive',
        'EcoBubble',
        'AddWash',
        'AI Control',
        'SmartThings',
        '14 Programs',
        'LED Touch'
      ],
      specifications: {
        'Capacity': '12 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '14',
        'Spin Speed': '1400 RPM',
        'Technology': 'QuickDrive + EcoBubble',
        'AddWash': 'Yes',
        'AI': 'AI Control',
        'Smart': 'SmartThings',
        'Motor': 'Digital Inverter',
        'Energy Rating': 'A+++',
        'Dimensions': '85 x 60 x 65 cm',
        'Weight': '76 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 20 years motor'
      },
      warranty: '3 years + 20 years motor warranty',
      usageGuide: 'QuickDrive reduces wash time by 50%. AI recommends cycles.',
      maintenance: 'Monthly: Update app. Deep clean.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'AI safety features.',
      troubleshooting: [
        'QuickDrive error: Call service',
        'SmartThings not connecting: Check WiFi',
        'Error: Call service'
      ],
      bestFor: 'Large families, smart home',
      estimatedConsumption: '135 units/year'
    },

    // ---------- SEMI-AUTOMATIC - 3 Models ----------
    {
      id: 'samsung-semi-basic',
      name: 'Samsung Semi-Automatic Basic',
      type: 'Semi-Automatic',
      capacity: '9 kg Wash, 5 kg Spin',
      price: 'PKR 30,000 - 35,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Manual Operation',
        'Affordable',
        'Energy Saving',
        'Durable',
        'Simple Controls',
        'Timer'
      ],
      specifications: {
        'Wash Capacity': '9 kg',
        'Spin Capacity': '5 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Mechanical 15 min',
        'Power': '420W',
        'Dimensions': '86 x 82 x 46 cm',
        'Weight': '31 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Manual water filling. Transfer clothes to spin tub.',
      maintenance: 'Monthly: Clean both tubs.',
      installationTips: 'No permanent water connection needed.',
      safetyTips: 'Don\'t open lid during spin.',
      troubleshooting: [
        'Not spinning: Check load balance',
        'Not washing: Check timer'
      ],
      bestFor: 'Budget buyers',
      estimatedConsumption: '100 units/year'
    },
    {
      id: 'samsung-semi-deluxe',
      name: 'Samsung Semi-Automatic Deluxe',
      type: 'Semi-Automatic',
      capacity: '11 kg Wash, 6 kg Spin',
      price: 'PKR 38,000 - 45,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Pulsator Wash',
        'Spin Dry',
        'Timer Controls',
        'Durable Body',
        'Wheels',
        'Lint Filter'
      ],
      specifications: {
        'Wash Capacity': '11 kg',
        'Spin Capacity': '6 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual',
        'Power': '460W',
        'Dimensions': '88 x 84 x 48 cm',
        'Weight': '33 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual timer for wash and spin.',
      maintenance: 'Monthly: Clean lint filter.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety switch.',
      troubleshooting: [
        'Spin not working: Check lid closed',
        'Wash weak: Check pulsator'
      ],
      bestFor: 'Medium families, budget',
      estimatedConsumption: '110 units/year'
    },
    {
      id: 'samsung-semi-premium',
      name: 'Samsung Semi-Automatic Premium',
      type: 'Semi-Automatic',
      capacity: '13 kg Wash, 7 kg Spin',
      price: 'PKR 45,000 - 54,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Powerful Pulsator',
        'Spin Dry',
        'Timer Controls',
        'Wheels',
        'Lint Filter',
        'Anti-rust'
      ],
      specifications: {
        'Wash Capacity': '13 kg',
        'Spin Capacity': '7 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual',
        'Power': '500W',
        'Dimensions': '91 x 86 x 50 cm',
        'Weight': '37 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Large capacity for big families.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety.',
      troubleshooting: [
        'Not working: Check power',
        'Leaking: Check hoses'
      ],
      bestFor: 'Large families, budget',
      estimatedConsumption: '120 units/year'
    },

    // ---------- WASHER DRYER COMBO - 3 Models ----------
    {
      id: 'samsung-combo-basic',
      name: 'Samsung Washer Dryer Basic',
      type: 'Washer Dryer Combo',
      capacity: '8 kg Wash, 5 kg Dry',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        'Digital Inverter',
        '6 Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Dry'
      ],
      specifications: {
        'Wash Capacity': '8 kg',
        'Dry Capacity': '5 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '6',
        'Dry Programs': '2',
        'Spin Speed': '1100 RPM',
        'Motor': 'Digital Inverter',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '71 kg',
        'Color': 'White',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'Wash and dry in one machine. Don\'t overload for drying.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Don\'t leave wet clothes long.',
      troubleshooting: [
        'Not drying: Check load size',
        'Error: Call service'
      ],
      bestFor: 'Space saving, convenience',
      estimatedConsumption: '205 units/year'
    },
    {
      id: 'samsung-combo-deluxe',
      name: 'Samsung Washer Dryer Deluxe',
      type: 'Washer Dryer Combo',
      capacity: '10 kg Wash, 6 kg Dry',
      price: 'PKR 120,000 - 138,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        'EcoBubble',
        '8 Programs',
        'Sensor Dry',
        'Child Lock',
        'LED Display',
        'Digital Inverter'
      ],
      specifications: {
        'Wash Capacity': '10 kg',
        'Dry Capacity': '6 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '8',
        'Dry Programs': '3',
        'Spin Speed': '1200 RPM',
        'Technology': 'EcoBubble',
        'Sensor Dry': 'Yes',
        'Motor': 'Digital Inverter',
        'Dimensions': '85 x 60 x 62 cm',
        'Weight': '74 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 10 years motor'
      },
      warranty: '2 years + 10 years motor warranty',
      usageGuide: 'EcoBubble for cold water wash. Sensor dry prevents over-drying.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Professional installation.',
      safetyTips: 'Sensor safe.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Not drying: Check settings'
      ],
      bestFor: 'Medium families, energy saving',
      estimatedConsumption: '225 units/year'
    },
    {
      id: 'samsung-combo-premium',
      name: 'Samsung Washer Dryer Premium',
      type: 'Washer Dryer Combo',
      capacity: '12 kg Wash, 7 kg Dry',
      price: 'PKR 150,000 - 175,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'QuickDrive',
        'EcoBubble',
        'AI Control',
        'SmartThings',
        'Sensor Dry',
        '12 Programs',
        'LED Touch'
      ],
      specifications: {
        'Wash Capacity': '12 kg',
        'Dry Capacity': '7 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '12',
        'Dry Programs': '4',
        'Spin Speed': '1400 RPM',
        'Technology': 'QuickDrive + EcoBubble',
        'AI': 'AI Control',
        'Smart': 'SmartThings',
        'Motor': 'Digital Inverter',
        'Dimensions': '85 x 60 x 68 cm',
        'Weight': '80 kg',
        'Color': 'Silver',
        'Warranty': '3 years + 20 years motor'
      },
      warranty: '3 years + 20 years motor warranty',
      usageGuide: 'QuickDrive reduces time. AI optimizes cycles.',
      maintenance: 'Monthly: Update app. Deep clean.',
      installationTips: 'Professional installation. Strong WiFi.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'AI error: Call service',
        'SmartThings not working: Check WiFi',
        'Error: Call service'
      ],
      bestFor: 'Large families, premium smart',
      estimatedConsumption: '245 units/year'
    },

    // ---------- MINI/PORTABLE WASHER - 3 Models ----------
    {
      id: 'samsung-mini-basic',
      name: 'Samsung Mini Washer Basic',
      type: 'Mini/Portable Washer',
      capacity: '3 kg',
      price: 'PKR 24,000 - 28,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Portable',
        'Simple Controls',
        'Affordable',
        'Lightweight',
        'Manual Fill',
        'Spin Dry'
      ],
      specifications: {
        'Capacity': '3 kg',
        'Type': 'Mini Portable',
        'Operation': 'Manual fill',
        'Spin': 'Yes',
        'Timer': '15 min',
        'Dimensions': '58 x 44 x 44 cm',
        'Weight': '14 kg',
        'Color': 'White',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Small loads. Perfect for singles.',
      maintenance: 'Monthly: Clean drum.',
      installationTips: 'Portable.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not working: Check power',
        'Not spinning: Check load'
      ],
      bestFor: 'Singles, dorms',
      estimatedConsumption: '48 units/year'
    },
    {
      id: 'samsung-mini-deluxe',
      name: 'Samsung Mini Washer Deluxe',
      type: 'Mini/Portable Washer',
      capacity: '4 kg',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Timer',
        'Spin Dry',
        'Auto Fill',
        'Lightweight',
        'Quiet'
      ],
      specifications: {
        'Capacity': '4 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill option',
        'Spin': 'Yes',
        'Timer': 'Digital',
        'Dimensions': '61 x 46 x 46 cm',
        'Weight': '16 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto fill option.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Portable.',
      safetyTips: 'Stable surface.',
      troubleshooting: [
        'Auto fill not working: Check hose',
        'Not spinning: Check load'
      ],
      bestFor: 'Couples, small apartments',
      estimatedConsumption: '58 units/year'
    },
    {
      id: 'samsung-mini-premium',
      name: 'Samsung Mini Washer Premium',
      type: 'Mini/Portable Washer',
      capacity: '5 kg',
      price: 'PKR 38,000 - 45,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Display',
        'Spin Dry',
        'Auto Fill',
        'Multiple Programs',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '5 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill',
        'Spin': 'Yes',
        'Programs': '3',
        'Dimensions': '64 x 48 x 48 cm',
        'Weight': '18 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Multiple programs.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Portable.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Program not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, limited space',
      estimatedConsumption: '68 units/year'
    }
  ]
},
     {
  id: 'waves-washing',
  name: 'Waves',
  models: [
    // ---------- TOP LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'waves-top-basic',
      name: 'Waves Top Load Basic',
      type: 'Top Load Fully Automatic',
      capacity: '6 kg',
      price: 'PKR 28,000 - 33,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '5 Wash Programs',
        'Water Level Selector',
        'Stainless Steel Drum',
        'Child Lock',
        'Budget Friendly',
        'Simple Controls'
      ],
      specifications: {
        'Capacity': '6 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '5',
        'Spin Speed': '650 RPM',
        'Drum Material': 'Stainless Steel',
        'Water Consumption': '90L per cycle',
        'Power': '400W',
        'Dimensions': '88 x 52 x 56 cm',
        'Weight': '32 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Load clothes evenly. Use recommended detergent amount. Select program based on fabric type. Close lid properly to start.',
      maintenance: 'Monthly: Clean filter. Leave lid open after use to prevent mold.',
      installationTips: 'Level surface needed. Water connection required. Keep on solid floor.',
      safetyTips: 'Child lock for safety. Don\'t overload.',
      troubleshooting: [
        'Not starting: Check power, lid closed',
        'Water not filling: Check tap, hose',
        'Not spinning: Check load balance'
      ],
      bestFor: 'Small families, budget entry',
      estimatedConsumption: '130 units/year'
    },
    {
      id: 'waves-top-deluxe',
      name: 'Waves Top Load Deluxe',
      type: 'Top Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 34,000 - 40,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '6 Wash Programs',
        'Fuzzy Logic',
        'Quick Wash',
        'Child Lock',
        'Water Level Selector',
        'LED Display'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '6',
        'Spin Speed': '700 RPM',
        'Technology': 'Fuzzy Logic',
        'Drum Material': 'Stainless Steel',
        'Display': 'LED',
        'Dimensions': '90 x 54 x 58 cm',
        'Weight': '34 kg',
        'Color': 'Silver',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Fuzzy logic automatically adjusts settings. Quick wash for lightly soiled clothes.',
      maintenance: 'Monthly: Clean filter. Clean drum with tub clean program.',
      installationTips: 'Level surface. Water connection. Proper drainage.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Fuzzy logic error: Reset',
        'Not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, value for money',
      estimatedConsumption: '140 units/year'
    },
    {
      id: 'waves-top-premium',
      name: 'Waves Top Load Premium',
      type: 'Top Load Fully Automatic',
      capacity: '8 kg',
      price: 'PKR 42,000 - 48,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '8 Wash Programs',
        'Fuzzy Logic',
        'Quick Wash',
        'Child Lock',
        'LED Display',
        'Delay Start',
        'Energy Efficient'
      ],
      specifications: {
        'Capacity': '8 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '8',
        'Spin Speed': '750 RPM',
        'Technology': 'Fuzzy Logic',
        'Display': 'LED',
        'Dimensions': '92 x 55 x 60 cm',
        'Weight': '36 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Delay start for convenience. Multiple programs for different fabrics.',
      maintenance: 'Monthly: Clean filter. Leave door open.',
      installationTips: 'Level surface. Water connection.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Delay start not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Medium to large families, good features',
      estimatedConsumption: '150 units/year'
    },

    // ---------- FRONT LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'waves-front-basic',
      name: 'Waves Front Load Basic',
      type: 'Front Load Fully Automatic',
      capacity: '6 kg',
      price: 'PKR 48,000 - 55,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load Design',
        '6 Wash Programs',
        'Energy Efficient',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '6 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '6',
        'Spin Speed': '1000 RPM',
        'Energy Rating': 'A+',
        'Drum Material': 'Stainless Steel',
        'Display': 'LED',
        'Dimensions': '85 x 60 x 52 cm',
        'Weight': '62 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Front load uses less water. Load from front. Use HE detergent.',
      maintenance: 'Monthly: Clean door gasket. Run cleaning cycle.',
      installationTips: 'Built-under or freestanding. Level carefully.',
      safetyTips: 'Child lock safety. Door lock during operation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Not draining: Clean filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, water saving on budget',
      estimatedConsumption: '105 units/year'
    },
    {
      id: 'waves-front-deluxe',
      name: 'Waves Front Load Deluxe',
      type: 'Front Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 58,000 - 66,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load',
        '8 Wash Programs',
        'Quick Wash',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Energy Efficient'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '8',
        'Spin Speed': '1100 RPM',
        'Energy Rating': 'A++',
        'Display': 'LED',
        'Dimensions': '85 x 60 x 55 cm',
        'Weight': '64 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'More programs for better fabric care.',
      maintenance: 'Monthly: Clean gasket. Clean detergent drawer.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Not draining: Clean filter',
        'Error: Call service'
      ],
      bestFor: 'Medium families, better efficiency',
      estimatedConsumption: '115 units/year'
    },
    {
      id: 'waves-front-premium',
      name: 'Waves Front Load Premium',
      type: 'Front Load Fully Automatic',
      capacity: '9 kg',
      price: 'PKR 72,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load',
        '10 Wash Programs',
        'Quick Wash',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Inverter Motor'
      ],
      specifications: {
        'Capacity': '9 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '10',
        'Spin Speed': '1200 RPM',
        'Motor': 'Inverter',
        'Energy Rating': 'A+++',
        'Display': 'LED',
        'Dimensions': '85 x 60 x 58 cm',
        'Weight': '68 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Inverter motor for quiet operation.',
      maintenance: 'Monthly: Clean drum.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Not spinning: Check load'
      ],
      bestFor: 'Large families, quiet operation',
      estimatedConsumption: '125 units/year'
    },

    // ---------- SEMI-AUTOMATIC - 3 Models ----------
    {
      id: 'waves-semi-basic',
      name: 'Waves Semi-Automatic Basic',
      type: 'Semi-Automatic',
      capacity: '8 kg Wash, 4 kg Spin',
      price: 'PKR 18,000 - 22,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Manual Operation',
        'Affordable',
        'Energy Saving',
        'Durable',
        'Simple Controls',
        'Timer'
      ],
      specifications: {
        'Wash Capacity': '8 kg',
        'Spin Capacity': '4 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Mechanical 15 min',
        'Power': '380W',
        'Dimensions': '84 x 78 x 44 cm',
        'Weight': '28 kg',
        'Color': 'White/Blue',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Manual water filling. Transfer clothes to spin tub.',
      maintenance: 'Monthly: Clean both tubs.',
      installationTips: 'No permanent water connection needed.',
      safetyTips: 'Don\'t open lid during spin.',
      troubleshooting: [
        'Not spinning: Check load balance',
        'Not washing: Check timer'
      ],
      bestFor: 'Budget buyers, basic needs',
      estimatedConsumption: '90 units/year'
    },
    {
      id: 'waves-semi-deluxe',
      name: 'Waves Semi-Automatic Deluxe',
      type: 'Semi-Automatic',
      capacity: '10 kg Wash, 6 kg Spin',
      price: 'PKR 24,000 - 28,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Pulsator Wash',
        'Spin Dry',
        'Timer Controls',
        'Durable Body',
        'Easy Move Wheels',
        'Lint Filter'
      ],
      specifications: {
        'Wash Capacity': '10 kg',
        'Spin Capacity': '6 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual timer',
        'Power': '420W',
        'Dimensions': '86 x 80 x 46 cm',
        'Weight': '31 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual timer for wash and spin. Lint filter easy clean.',
      maintenance: 'Monthly: Clean lint filter.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety switch.',
      troubleshooting: [
        'Spin not working: Check lid closed',
        'Wash weak: Check pulsator'
      ],
      bestFor: 'Medium families, budget conscious',
      estimatedConsumption: '100 units/year'
    },
    {
      id: 'waves-semi-premium',
      name: 'Waves Semi-Automatic Premium',
      type: 'Semi-Automatic',
      capacity: '12 kg Wash, 7 kg Spin',
      price: 'PKR 30,000 - 36,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Powerful Pulsator',
        'Spin Dry',
        'Timer Controls',
        'Wheels',
        'Lint Filter',
        'Anti-rust Body'
      ],
      specifications: {
        'Wash Capacity': '12 kg',
        'Spin Capacity': '7 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual',
        'Power': '460W',
        'Dimensions': '88 x 82 x 48 cm',
        'Weight': '34 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Large capacity for big families.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety.',
      troubleshooting: [
        'Not working: Check power',
        'Leaking: Check hoses'
      ],
      bestFor: 'Large families, budget option',
      estimatedConsumption: '110 units/year'
    },

    // ---------- WASHER DRYER COMBO - 3 Models ----------
    {
      id: 'waves-combo-basic',
      name: 'Waves Washer Dryer Basic',
      type: 'Washer Dryer Combo',
      capacity: '6 kg Wash, 3 kg Dry',
      price: 'PKR 65,000 - 75,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        'Front Load',
        '5 Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Dry'
      ],
      specifications: {
        'Wash Capacity': '6 kg',
        'Dry Capacity': '3 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '5',
        'Dry Programs': '2',
        'Spin Speed': '1000 RPM',
        'Dimensions': '85 x 60 x 55 cm',
        'Weight': '65 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Wash and dry in one machine. Don\'t overload for drying.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Don\'t leave wet clothes long.',
      troubleshooting: [
        'Not drying: Check load size',
        'Error: Call service'
      ],
      bestFor: 'Small families, space saving on budget',
      estimatedConsumption: '180 units/year'
    },
    {
      id: 'waves-combo-deluxe',
      name: 'Waves Washer Dryer Deluxe',
      type: 'Washer Dryer Combo',
      capacity: '7 kg Wash, 4 kg Dry',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        '6 Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Sensor Dry',
        'Inverter Motor'
      ],
      specifications: {
        'Wash Capacity': '7 kg',
        'Dry Capacity': '4 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '6',
        'Dry Programs': '2',
        'Spin Speed': '1100 RPM',
        'Motor': 'Inverter',
        'Sensor Dry': 'Yes',
        'Dimensions': '85 x 60 x 58 cm',
        'Weight': '68 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Sensor dry prevents over-drying.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Professional installation.',
      safetyTips: 'Sensor safe.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Not drying: Check settings'
      ],
      bestFor: 'Medium families, better features',
      estimatedConsumption: '195 units/year'
    },
    {
      id: 'waves-combo-premium',
      name: 'Waves Washer Dryer Premium',
      type: 'Washer Dryer Combo',
      capacity: '9 kg Wash, 5 kg Dry',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        '8 Programs',
        'Child Lock',
        'Delay Start',
        'LED Touch',
        'Sensor Dry',
        'Inverter Motor'
      ],
      specifications: {
        'Wash Capacity': '9 kg',
        'Dry Capacity': '5 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '8',
        'Dry Programs': '3',
        'Spin Speed': '1200 RPM',
        'Motor': 'Inverter',
        'Sensor Dry': 'Yes',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '72 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Complete laundry solution on budget.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Error: Call service'
      ],
      bestFor: 'Large families, all-in-one budget',
      estimatedConsumption: '215 units/year'
    },

    // ---------- MINI/PORTABLE WASHER - 3 Models ----------
    {
      id: 'waves-mini-basic',
      name: 'Waves Mini Washer Basic',
      type: 'Mini/Portable Washer',
      capacity: '2.5 kg',
      price: 'PKR 14,000 - 17,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Portable',
        'Simple Controls',
        'Affordable',
        'Lightweight',
        'Manual Fill',
        'Spin Dry'
      ],
      specifications: {
        'Capacity': '2.5 kg',
        'Type': 'Mini Portable',
        'Operation': 'Manual fill',
        'Spin': 'Yes',
        'Timer': '15 min',
        'Dimensions': '55 x 42 x 42 cm',
        'Weight': '12 kg',
        'Color': 'White',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Very small loads. Perfect for singles.',
      maintenance: 'Monthly: Clean drum.',
      installationTips: 'Portable.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not working: Check power',
        'Not spinning: Check load'
      ],
      bestFor: 'Singles, very small spaces',
      estimatedConsumption: '40 units/year'
    },
    {
      id: 'waves-mini-deluxe',
      name: 'Waves Mini Washer Deluxe',
      type: 'Mini/Portable Washer',
      capacity: '4 kg',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Timer',
        'Spin Dry',
        'Auto Fill',
        'Lightweight',
        'Quiet'
      ],
      specifications: {
        'Capacity': '4 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill option',
        'Spin': 'Yes',
        'Timer': 'Digital',
        'Dimensions': '60 x 45 x 45 cm',
        'Weight': '15 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto fill option.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Portable.',
      safetyTips: 'Stable surface.',
      troubleshooting: [
        'Auto fill not working: Check hose',
        'Not spinning: Check load'
      ],
      bestFor: 'Couples, small apartments',
      estimatedConsumption: '50 units/year'
    },
    {
      id: 'waves-mini-premium',
      name: 'Waves Mini Washer Premium',
      type: 'Mini/Portable Washer',
      capacity: '5 kg',
      price: 'PKR 24,000 - 28,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Display',
        'Spin Dry',
        'Auto Fill',
        'Multiple Programs',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '5 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill',
        'Spin': 'Yes',
        'Programs': '3',
        'Dimensions': '62 x 46 x 46 cm',
        'Weight': '17 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Multiple programs.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Portable.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Program not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, limited space',
      estimatedConsumption: '60 units/year'
    }
  ]
},
     {
  id: 'pel-washing',
  name: 'PEL',
  models: [
    // ---------- TOP LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'pel-top-basic',
      name: 'PEL Top Load Basic',
      type: 'Top Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 32,000 - 37,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '5 Wash Programs',
        'Water Level Selector',
        'Stainless Steel Drum',
        'Child Lock',
        'Budget Friendly',
        'Simple Controls'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '5',
        'Spin Speed': '700 RPM',
        'Drum Material': 'Stainless Steel',
        'Water Consumption': '95L per cycle',
        'Power': '420W',
        'Dimensions': '90 x 54 x 58 cm',
        'Weight': '34 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Load clothes evenly. Use recommended detergent amount. Select program based on fabric type. Close lid properly to start.',
      maintenance: 'Monthly: Clean filter. Leave lid open after use to prevent mold.',
      installationTips: 'Level surface needed. Water connection required. Keep on solid floor.',
      safetyTips: 'Child lock for safety. Don\'t overload.',
      troubleshooting: [
        'Not starting: Check power, lid closed',
        'Water not filling: Check tap, hose',
        'Not spinning: Check load balance'
      ],
      bestFor: 'Small families, budget entry',
      estimatedConsumption: '135 units/year'
    },
    {
      id: 'pel-top-deluxe',
      name: 'PEL Top Load Deluxe',
      type: 'Top Load Fully Automatic',
      capacity: '8 kg',
      price: 'PKR 38,000 - 44,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Fully Automatic',
        '6 Wash Programs',
        'Fuzzy Logic',
        'Quick Wash',
        'Child Lock',
        'Water Level Selector',
        'LED Display'
      ],
      specifications: {
        'Capacity': '8 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '6',
        'Spin Speed': '750 RPM',
        'Technology': 'Fuzzy Logic',
        'Drum Material': 'Stainless Steel',
        'Display': 'LED',
        'Dimensions': '92 x 55 x 60 cm',
        'Weight': '36 kg',
        'Color': 'Silver',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Fuzzy logic automatically adjusts settings. Quick wash for lightly soiled clothes.',
      maintenance: 'Monthly: Clean filter. Clean drum with tub clean program.',
      installationTips: 'Level surface. Water connection. Proper drainage.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Fuzzy logic error: Reset',
        'Not draining: Check hose',
        'Error code: Call service'
      ],
      bestFor: 'Medium families, smart features on budget',
      estimatedConsumption: '145 units/year'
    },
    {
      id: 'pel-powerwash',
      name: 'PEL PowerWash',
      type: 'Top Load Fully Automatic',
      capacity: '9 kg',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Powerful Motor',
        'Jet Spray System',
        'Fuzzy Logic',
        'Quick Wash',
        'Water Saving',
        '8 Wash Programs',
        'LED Display'
      ],
      specifications: {
        'Capacity': '9 kg',
        'Type': 'Top Load Fully Automatic',
        'Wash Programs': '8',
        'Spin Speed': '800 RPM',
        'Spray System': 'Jet Spray',
        'Technology': 'Fuzzy Logic',
        'Display': 'LED',
        'Dimensions': '58 x 62 x 92 cm',
        'Weight': '38 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'Jet spray helps remove stains. Good water pressure needed.',
      maintenance: 'Monthly: Clean filter. Check jet nozzles.',
      installationTips: 'Level surface. Water connection with good pressure.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Jet spray not working: Check pressure',
        'Not spinning: Check load balance'
      ],
      bestFor: 'Large families, powerful cleaning',
      estimatedConsumption: '155 units/year'
    },

    // ---------- FRONT LOAD FULLY AUTOMATIC - 3 Models ----------
    {
      id: 'pel-front-basic',
      name: 'PEL Front Load Basic',
      type: 'Front Load Fully Automatic',
      capacity: '6 kg',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load Design',
        '6 Wash Programs',
        'Energy Efficient',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Wash'
      ],
      specifications: {
        'Capacity': '6 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '6',
        'Spin Speed': '1000 RPM',
        'Energy Rating': 'A+',
        'Drum Material': 'Stainless Steel',
        'Display': 'LED',
        'Dimensions': '85 x 60 x 52 cm',
        'Weight': '62 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Front load uses less water. Load from front. Use HE detergent.',
      maintenance: 'Monthly: Clean door gasket. Run cleaning cycle.',
      installationTips: 'Built-under or freestanding. Level carefully.',
      safetyTips: 'Child lock safety. Door lock during operation.',
      troubleshooting: [
        'Not starting: Check door closed',
        'Not draining: Clean filter',
        'Error: Call service'
      ],
      bestFor: 'Small families, water saving on budget',
      estimatedConsumption: '105 units/year'
    },
    {
      id: 'pel-front-deluxe',
      name: 'PEL Front Load Deluxe',
      type: 'Front Load Fully Automatic',
      capacity: '7 kg',
      price: 'PKR 55,000 - 63,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load',
        '8 Wash Programs',
        'Quick Wash',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Energy Efficient'
      ],
      specifications: {
        'Capacity': '7 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '8',
        'Spin Speed': '1100 RPM',
        'Energy Rating': 'A++',
        'Display': 'LED',
        'Dimensions': '85 x 60 x 55 cm',
        'Weight': '64 kg',
        'Color': 'Silver',
        'Warranty': '2 years'
      },
      warranty: '2 years warranty',
      usageGuide: 'More programs for better fabric care.',
      maintenance: 'Monthly: Clean gasket. Clean detergent drawer.',
      installationTips: 'Professional installation recommended.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Not draining: Clean filter',
        'Error: Call service'
      ],
      bestFor: 'Medium families, better efficiency',
      estimatedConsumption: '115 units/year'
    },
    {
      id: 'pel-front-premium',
      name: 'PEL Front Load Premium',
      type: 'Front Load Fully Automatic',
      capacity: '9 kg',
      price: 'PKR 70,000 - 80,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Front Load',
        '10 Wash Programs',
        'Quick Wash',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Inverter Motor'
      ],
      specifications: {
        'Capacity': '9 kg',
        'Type': 'Front Load Fully Automatic',
        'Wash Programs': '10',
        'Spin Speed': '1200 RPM',
        'Motor': 'Inverter',
        'Energy Rating': 'A+++',
        'Display': 'LED',
        'Dimensions': '85 x 60 x 58 cm',
        'Weight': '68 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Inverter motor for quiet operation.',
      maintenance: 'Monthly: Clean drum.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Inverter error: Call service',
        'Not spinning: Check load'
      ],
      bestFor: 'Large families, quiet operation on budget',
      estimatedConsumption: '125 units/year'
    },

    // ---------- SEMI-AUTOMATIC - 3 Models ----------
    {
      id: 'pel-semi-basic',
      name: 'PEL Semi-Automatic Basic',
      type: 'Semi-Automatic',
      capacity: '8 kg Wash, 4 kg Spin',
      price: 'PKR 19,000 - 23,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Manual Operation',
        'Affordable',
        'Energy Saving',
        'Durable',
        'Simple Controls',
        'Timer'
      ],
      specifications: {
        'Wash Capacity': '8 kg',
        'Spin Capacity': '4 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Mechanical 15 min',
        'Power': '380W',
        'Dimensions': '84 x 78 x 44 cm',
        'Weight': '28 kg',
        'Color': 'White/Blue',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Manual water filling. Transfer clothes to spin tub.',
      maintenance: 'Monthly: Clean both tubs.',
      installationTips: 'No permanent water connection needed.',
      safetyTips: 'Don\'t open lid during spin.',
      troubleshooting: [
        'Not spinning: Check load balance',
        'Not washing: Check timer'
      ],
      bestFor: 'Budget buyers, basic needs',
      estimatedConsumption: '90 units/year'
    },
    {
      id: 'pel-semi-deluxe',
      name: 'PEL Semi-Automatic Deluxe',
      type: 'Semi-Automatic',
      capacity: '10 kg Wash, 6 kg Spin',
      price: 'PKR 25,000 - 30,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Pulsator Wash',
        'Spin Dry',
        'Timer Controls',
        'Durable Body',
        'Easy Move Wheels',
        'Lint Filter'
      ],
      specifications: {
        'Wash Capacity': '10 kg',
        'Spin Capacity': '6 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual timer',
        'Power': '420W',
        'Dimensions': '86 x 80 x 46 cm',
        'Weight': '31 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual timer for wash and spin. Lint filter easy clean.',
      maintenance: 'Monthly: Clean lint filter.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety switch.',
      troubleshooting: [
        'Spin not working: Check lid closed',
        'Wash weak: Check pulsator'
      ],
      bestFor: 'Medium families, budget conscious',
      estimatedConsumption: '100 units/year'
    },
    {
      id: 'pel-semi-premium',
      name: 'PEL Semi-Automatic Premium',
      type: 'Semi-Automatic',
      capacity: '12 kg Wash, 7 kg Spin',
      price: 'PKR 32,000 - 38,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Double Tub',
        'Powerful Pulsator',
        'Spin Dry',
        'Timer Controls',
        'Wheels',
        'Lint Filter',
        'Anti-rust Body'
      ],
      specifications: {
        'Wash Capacity': '12 kg',
        'Spin Capacity': '7 kg',
        'Type': 'Semi-Automatic',
        'Tubs': '2',
        'Timer': 'Dual',
        'Power': '460W',
        'Dimensions': '88 x 82 x 48 cm',
        'Weight': '34 kg',
        'Color': 'White/Blue',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Large capacity for big families.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Near water source.',
      safetyTips: 'Lid safety.',
      troubleshooting: [
        'Not working: Check power',
        'Leaking: Check hoses'
      ],
      bestFor: 'Large families, budget option',
      estimatedConsumption: '110 units/year'
    },

    // ---------- WASHER DRYER COMBO - 3 Models ----------
    {
      id: 'pel-combo-basic',
      name: 'PEL Washer Dryer Basic',
      type: 'Washer Dryer Combo',
      capacity: '6 kg Wash, 3 kg Dry',
      price: 'PKR 60,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        'Front Load',
        '5 Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Quick Dry'
      ],
      specifications: {
        'Wash Capacity': '6 kg',
        'Dry Capacity': '3 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '5',
        'Dry Programs': '2',
        'Spin Speed': '1000 RPM',
        'Dimensions': '85 x 60 x 55 cm',
        'Weight': '65 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Wash and dry in one machine. Don\'t overload for drying.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Professional installation.',
      safetyTips: 'Don\'t leave wet clothes long.',
      troubleshooting: [
        'Not drying: Check load size',
        'Error: Call service'
      ],
      bestFor: 'Small families, space saving on budget',
      estimatedConsumption: '175 units/year'
    },
    {
      id: 'pel-combo-deluxe',
      name: 'PEL Washer Dryer Deluxe',
      type: 'Washer Dryer Combo',
      capacity: '7 kg Wash, 4 kg Dry',
      price: 'PKR 72,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        '6 Programs',
        'Child Lock',
        'Delay Start',
        'LED Display',
        'Sensor Dry',
        'Inverter Motor'
      ],
      specifications: {
        'Wash Capacity': '7 kg',
        'Dry Capacity': '4 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '6',
        'Dry Programs': '2',
        'Spin Speed': '1100 RPM',
        'Motor': 'Inverter',
        'Sensor Dry': 'Yes',
        'Dimensions': '85 x 60 x 58 cm',
        'Weight': '68 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Sensor dry prevents over-drying.',
      maintenance: 'Monthly: Clean sensors.',
      installationTips: 'Professional installation.',
      safetyTips: 'Sensor safe.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Not drying: Check settings'
      ],
      bestFor: 'Medium families, better features',
      estimatedConsumption: '190 units/year'
    },
    {
      id: 'pel-combo-premium',
      name: 'PEL Washer Dryer Premium',
      type: 'Washer Dryer Combo',
      capacity: '9 kg Wash, 5 kg Dry',
      price: 'PKR 90,000 - 102,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Wash and Dry',
        '8 Programs',
        'Child Lock',
        'Delay Start',
        'LED Touch',
        'Sensor Dry',
        'Inverter Motor'
      ],
      specifications: {
        'Wash Capacity': '9 kg',
        'Dry Capacity': '5 kg',
        'Type': 'Washer Dryer Combo',
        'Wash Programs': '8',
        'Dry Programs': '3',
        'Spin Speed': '1200 RPM',
        'Motor': 'Inverter',
        'Sensor Dry': 'Yes',
        'Dimensions': '85 x 60 x 60 cm',
        'Weight': '72 kg',
        'Color': 'Silver',
        'Warranty': '2 years + 5 years motor'
      },
      warranty: '2 years + 5 years motor warranty',
      usageGuide: 'Complete laundry solution on budget.',
      maintenance: 'Monthly: Deep clean.',
      installationTips: 'Professional installation.',
      safetyTips: 'Multiple safety features.',
      troubleshooting: [
        'Sensor error: Clean sensor',
        'Error: Call service'
      ],
      bestFor: 'Large families, all-in-one budget',
      estimatedConsumption: '210 units/year'
    },

    // ---------- MINI/PORTABLE WASHER - 3 Models ----------
    {
      id: 'pel-mini-basic',
      name: 'PEL Mini Washer Basic',
      type: 'Mini/Portable Washer',
      capacity: '3 kg',
      price: 'PKR 15,000 - 18,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact Size',
        'Portable',
        'Simple Controls',
        'Affordable',
        'Lightweight',
        'Manual Fill',
        'Spin Dry'
      ],
      specifications: {
        'Capacity': '3 kg',
        'Type': 'Mini Portable',
        'Operation': 'Manual fill',
        'Spin': 'Yes',
        'Timer': '15 min',
        'Dimensions': '56 x 43 x 43 cm',
        'Weight': '13 kg',
        'Color': 'White',
        'Warranty': '6 months'
      },
      warranty: '6 months warranty',
      usageGuide: 'Small loads. Perfect for singles.',
      maintenance: 'Monthly: Clean drum.',
      installationTips: 'Portable.',
      safetyTips: 'Don\'t overload.',
      troubleshooting: [
        'Not working: Check power',
        'Not spinning: Check load'
      ],
      bestFor: 'Singles, dorms',
      estimatedConsumption: '42 units/year'
    },
    {
      id: 'pel-mini-deluxe',
      name: 'PEL Mini Washer Deluxe',
      type: 'Mini/Portable Washer',
      capacity: '4 kg',
      price: 'PKR 20,000 - 24,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Timer',
        'Spin Dry',
        'Auto Fill',
        'Lightweight',
        'Quiet'
      ],
      specifications: {
        'Capacity': '4 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill option',
        'Spin': 'Yes',
        'Timer': 'Digital',
        'Dimensions': '60 x 45 x 45 cm',
        'Weight': '15 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Auto fill option.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Portable.',
      safetyTips: 'Stable surface.',
      troubleshooting: [
        'Auto fill not working: Check hose',
        'Not spinning: Check load'
      ],
      bestFor: 'Couples, small apartments',
      estimatedConsumption: '52 units/year'
    },
    {
      id: 'pel-mini-premium',
      name: 'PEL Mini Washer Premium',
      type: 'Mini/Portable Washer',
      capacity: '5 kg',
      price: 'PKR 26,000 - 32,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
      features: [
        'Compact',
        'Portable',
        'Digital Display',
        'Spin Dry',
        'Auto Fill',
        'Multiple Programs',
        'Child Lock'
      ],
      specifications: {
        'Capacity': '5 kg',
        'Type': 'Mini Portable',
        'Operation': 'Auto fill',
        'Spin': 'Yes',
        'Programs': '3',
        'Dimensions': '62 x 46 x 46 cm',
        'Weight': '17 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Multiple programs.',
      maintenance: 'Monthly: Clean thoroughly.',
      installationTips: 'Portable.',
      safetyTips: 'Child lock safety.',
      troubleshooting: [
        'Program not working: Check settings',
        'Error: Call service'
      ],
      bestFor: 'Small families, limited space',
      estimatedConsumption: '62 units/year'
    }
        ]
      }
    ]
  },
{
  id: 'air-conditioner',
  name: 'Air Conditioner',
  description: 'Room cooling appliance',
  types: ['Window AC', 'Split AC', 'Inverter AC', 'Floor Standing/Cassette AC', 'Portable AC'],
  companies: [
    // ==================== GREE AIR CONDITIONER (15 Models) ====================
    {
      id: 'gree-ac',
      name: 'Gree',
      models: [
        // ---------- WINDOW AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
        {
          id: 'gree-window-1ton',
          name: 'Gree Window AC 1 Ton',
          type: 'Window AC',
          capacity: '1 Ton',
          price: 'PKR 45,000 - 52,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Rotary Compressor',
            'Anti-dust Filter',
            'Auto Restart',
            '3 Speed Fan',
            'Timer Function',
            'Energy Efficient',
            'Sleep Mode'
          ],
          specifications: {
            'Capacity': '1 Ton',
            'Type': 'Window AC',
            'Cooling Capacity': '12000 BTU',
            'Energy Rating': '2 Star',
            'Power Consumption': '1050 Watts',
            'Refrigerant': 'R-410A',
            'Air Flow': '350 CFM',
            'Controls': 'Remote + Manual',
            'Dimensions': '55 x 40 x 65 cm',
            'Weight': '45 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive + 5 years compressor',
          usageGuide: 'Install in window frame. Set temperature to 24-26°C for optimal cooling. Clean filter every 2 weeks.',
          maintenance: 'Monthly: Clean air filter. Every 6 months: Professional servicing. Clean condenser coils.',
          installationTips: 'Window frame must be strong enough. Proper sealing required. Level installation.',
          safetyTips: 'Use dedicated 15A socket. Don\'t use extension cords. Ensure proper drainage.',
          troubleshooting: [
            'Not cooling: Check filter, temperature setting',
            'Water leaking: Clean drain hole',
            'Noise: Check if level',
            'Not starting: Check power'
          ],
          bestFor: 'Small rooms (100-120 sq ft), budget cooling',
          estimatedConsumption: '1.05 units/hour'
        },
        {
          id: 'gree-window-1.5ton',
          name: 'Gree Window AC 1.5 Ton',
          type: 'Window AC',
          capacity: '1.5 Ton',
          price: 'PKR 58,000 - 68,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Rotary Compressor',
            'Anti-dust Filter',
            'Auto Restart',
            '3 Speed Fan',
            'Timer Function',
            'Energy Efficient',
            'Sleep Mode',
            'LED Display'
          ],
          specifications: {
            'Capacity': '1.5 Ton',
            'Type': 'Window AC',
            'Cooling Capacity': '18000 BTU',
            'Energy Rating': '2 Star',
            'Power Consumption': '1600 Watts',
            'Refrigerant': 'R-410A',
            'Air Flow': '450 CFM',
            'Controls': 'Remote + Manual',
            'Dimensions': '65 x 45 x 75 cm',
            'Weight': '55 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive + 5 years compressor',
          usageGuide: 'Install in window frame. Set temperature to 24-26°C. Clean filter every 2 weeks.',
          maintenance: 'Monthly: Clean air filter. Every 6 months: Professional servicing.',
          installationTips: 'Window frame must be strong. Proper sealing required.',
          safetyTips: 'Use dedicated 15A socket. Don\'t use extension cords.',
          troubleshooting: [
            'Not cooling: Check filter, temperature',
            'Water leaking: Clean drain hole',
            'Noise: Check if level'
          ],
          bestFor: 'Medium rooms (150-180 sq ft)',
          estimatedConsumption: '1.6 units/hour'
        },
        {
          id: 'gree-window-2ton',
          name: 'Gree Window AC 2 Ton',
          type: 'Window AC',
          capacity: '2 Ton',
          price: 'PKR 75,000 - 85,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Rotary Compressor',
            'Anti-dust Filter',
            'Auto Restart',
            '3 Speed Fan',
            'Timer Function',
            'Energy Efficient',
            'Sleep Mode',
            'LED Display',
            'Turbo Cooling'
          ],
          specifications: {
            'Capacity': '2 Ton',
            'Type': 'Window AC',
            'Cooling Capacity': '24000 BTU',
            'Energy Rating': '1 Star',
            'Power Consumption': '2100 Watts',
            'Refrigerant': 'R-410A',
            'Air Flow': '550 CFM',
            'Controls': 'Remote',
            'Dimensions': '70 x 48 x 80 cm',
            'Weight': '65 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive + 5 years compressor',
          usageGuide: 'Install in strong window frame. Turbo cooling for quick cooling.',
          maintenance: 'Monthly: Clean filter. Professional service every 6 months.',
          installationTips: 'Requires strong support. Dedicated 20A socket needed.',
          safetyTips: 'Heavy unit - ensure proper support.',
          troubleshooting: [
            'Not cooling enough: Check filter',
            'Tripping breaker: Check power supply'
          ],
          bestFor: 'Large rooms (200-250 sq ft), living rooms',
          estimatedConsumption: '2.1 units/hour'
        },

        // ---------- SPLIT AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
        {
          id: 'gree-split-1ton',
          name: 'Gree Split AC 1 Ton',
          type: 'Split AC',
          capacity: '1 Ton',
          price: 'PKR 55,000 - 65,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Rotary Compressor',
            'Anti-bacterial Filter',
            'Auto Restart',
            'Sleep Mode',
            'Timer',
            'LED Display',
            'Quiet Operation'
          ],
          specifications: {
            'Capacity': '1 Ton',
            'Type': 'Split AC',
            'Cooling Capacity': '12000 BTU',
            'Energy Rating': '2 Star',
            'Power Consumption': '1000 Watts',
            'Refrigerant': 'R-410A',
            'Air Flow': '400 CFM',
            'Indoor Noise': '28 dB',
            'Outdoor Unit': '85 x 70 x 30 cm',
            'Indoor Unit': '90 x 30 x 20 cm',
            'Weight': 'Indoor: 12 kg, Outdoor: 40 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive + 5 years compressor',
          usageGuide: 'Set temperature to 24-26°C. Clean filters every 2 weeks. Use sleep mode at night.',
          maintenance: 'Monthly: Clean indoor filters. Every 6 months: Professional servicing of outdoor unit.',
          installationTips: 'Professional installation required. Proper drainage needed. Level mounting.',
          safetyTips: 'Outdoor unit needs ventilation. Dedicated circuit required.',
          troubleshooting: [
            'Not cooling: Check filters, temperature',
            'Water leaking: Clean drain pipe',
            'Error code: Call service'
          ],
          bestFor: 'Small rooms (100-120 sq ft), quiet operation',
          estimatedConsumption: '1.0 units/hour'
        },
        {
          id: 'gree-split-1.5ton',
          name: 'Gree Split AC 1.5 Ton',
          type: 'Split AC',
          capacity: '1.5 Ton',
          price: 'PKR 70,000 - 82,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Rotary Compressor',
            'Anti-bacterial Filter',
            'Auto Restart',
            'Sleep Mode',
            'Timer',
            'LED Display',
            'Turbo Cool',
            'Self Diagnosis'
          ],
          specifications: {
            'Capacity': '1.5 Ton',
            'Type': 'Split AC',
            'Cooling Capacity': '18000 BTU',
            'Energy Rating': '2 Star',
            'Power Consumption': '1550 Watts',
            'Refrigerant': 'R-410A',
            'Air Flow': '500 CFM',
            'Indoor Noise': '30 dB',
            'Outdoor Unit': '90 x 75 x 32 cm',
            'Indoor Unit': '95 x 32 x 22 cm',
            'Weight': 'Indoor: 14 kg, Outdoor: 45 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive + 5 years compressor',
          usageGuide: 'Turbo cool for quick cooling. Self diagnosis for easy troubleshooting.',
          maintenance: 'Monthly: Clean filters. Professional service yearly.',
          installationTips: 'Professional installation required.',
          safetyTips: 'Outdoor unit ventilation essential.',
          troubleshooting: [
            'Error code display: Check manual',
            'Not cooling: Call service'
          ],
          bestFor: 'Medium rooms (150-180 sq ft)',
          estimatedConsumption: '1.55 units/hour'
        },
        {
          id: 'gree-split-2ton',
          name: 'Gree Split AC 2 Ton',
          type: 'Split AC',
          capacity: '2 Ton',
          price: 'PKR 90,000 - 105,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Rotary Compressor',
            'Anti-bacterial Filter',
            'Auto Restart',
            'Sleep Mode',
            'Timer',
            'LED Display',
            'Turbo Cool',
            'Self Diagnosis',
            'Wide Angle Louver'
          ],
          specifications: {
            'Capacity': '2 Ton',
            'Type': 'Split AC',
            'Cooling Capacity': '24000 BTU',
            'Energy Rating': '1 Star',
            'Power Consumption': '2050 Watts',
            'Refrigerant': 'R-410A',
            'Air Flow': '600 CFM',
            'Indoor Noise': '32 dB',
            'Outdoor Unit': '95 x 80 x 35 cm',
            'Indoor Unit': '100 x 35 x 25 cm',
            'Weight': 'Indoor: 16 kg, Outdoor: 50 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive + 5 years compressor',
          usageGuide: 'Wide angle louver for even cooling. Turbo cool for quick cooling.',
          maintenance: 'Monthly: Clean filters. Professional service yearly.',
          installationTips: 'Professional installation required. Strong outdoor unit mounting.',
          safetyTips: 'Dedicated 20A circuit required.',
          troubleshooting: [
            'Error code: Call service',
            'Not cooling enough: Check filters'
          ],
          bestFor: 'Large rooms (200-250 sq ft), living rooms',
          estimatedConsumption: '2.05 units/hour'
        },

        // ---------- INVERTER AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
        {
          id: 'gree-inverter-1ton',
          name: 'Gree Inverter AC 1 Ton',
          type: 'Inverter AC',
          capacity: '1 Ton',
          price: 'PKR 75,000 - 85,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Inverter Technology',
            'Energy Efficient',
            'Self Cleaning',
            'Sleep Mode',
            'Turbo Cooling',
            'LED Display',
            'Quiet Operation',
            'Anti-bacterial Filter'
          ],
          specifications: {
            'Capacity': '1 Ton',
            'Type': 'Inverter Split AC',
            'Cooling Capacity': '12000 BTU',
            'Energy Rating': '3 Star',
            'Power Consumption': '800-1200 Watts (Variable)',
            'Refrigerant': 'R-32 Eco-Friendly',
            'Air Flow': '400 CFM',
            'Noise Level': '24 dB (Indoor)',
            'Outdoor Unit': '85 x 70 x 30 cm',
            'Indoor Unit': '90 x 30 x 20 cm',
            'Weight': 'Indoor: 12 kg, Outdoor: 42 kg',
            'Color': 'White',
            'Warranty': '5 years compressor, 1 year general'
          },
          warranty: '5 years compressor + 1 year general',
          usageGuide: 'Set temperature to 24-26°C for optimal efficiency. Use sleep mode at night. Inverter saves 30-40% electricity.',
          maintenance: 'Monthly: Clean filters. Every 6 months: Professional servicing.',
          installationTips: 'Professional installation required. Proper drainage needed. Level mounting.',
          safetyTips: 'Use stabilizer-free operation. Dedicated circuit.',
          troubleshooting: [
            'Not cooling: Check filters, temperature',
            'Error code: Call service',
            'Inverter not working: Check power'
          ],
          bestFor: 'Small rooms, energy conscious buyers',
          estimatedConsumption: '0.9 units/hour average'
        },
        {
          id: 'gree-inverter-1.5ton',
          name: 'Gree Inverter AC 1.5 Ton',
          type: 'Inverter AC',
          capacity: '1.5 Ton',
          price: 'PKR 95,000 - 110,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Inverter Technology',
            'Energy Efficient',
            'Self Cleaning',
            'Sleep Mode',
            'Turbo Cooling',
            'LED Display',
            'WiFi Ready',
            'Anti-bacterial Filter'
          ],
          specifications: {
            'Capacity': '1.5 Ton',
            'Type': 'Inverter Split AC',
            'Cooling Capacity': '18000 BTU',
            'Energy Rating': '3 Star',
            'Power Consumption': '1200-1800 Watts (Variable)',
            'Refrigerant': 'R-32 Eco-Friendly',
            'Air Flow': '500 CFM',
            'Noise Level': '26 dB (Indoor)',
            'Outdoor Unit': '90 x 75 x 32 cm',
            'Indoor Unit': '95 x 32 x 22 cm',
            'Weight': 'Indoor: 14 kg, Outdoor: 46 kg',
            'Color': 'White',
            'Warranty': '5 years compressor, 1 year general'
          },
          warranty: '5 years compressor + 1 year general',
          usageGuide: 'WiFi ready for smart control. Inverter technology for energy saving.',
          maintenance: 'Monthly: Clean filters. Professional service yearly.',
          installationTips: 'Professional installation required.',
          safetyTips: 'Stabilizer-free operation.',
          troubleshooting: [
            'WiFi not connecting: Check router',
            'Error code: Call service'
          ],
          bestFor: 'Medium rooms, smart home ready',
          estimatedConsumption: '1.4 units/hour average'
        },
        {
          id: 'gree-inverter-2ton',
          name: 'Gree Inverter AC 2 Ton',
          type: 'Inverter AC',
          capacity: '2 Ton',
          price: 'PKR 120,000 - 140,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Inverter Technology',
            'Energy Efficient',
            'Self Cleaning',
            'Sleep Mode',
            'Turbo Cooling',
            'LED Display',
            'WiFi Ready',
            'Gold Fin Condenser'
          ],
          specifications: {
            'Capacity': '2 Ton',
            'Type': 'Inverter Split AC',
            'Cooling Capacity': '24000 BTU',
            'Energy Rating': '3 Star',
            'Power Consumption': '1600-2400 Watts (Variable)',
            'Refrigerant': 'R-32 Eco-Friendly',
            'Air Flow': '600 CFM',
            'Noise Level': '28 dB (Indoor)',
            'Outdoor Unit': '95 x 80 x 35 cm',
            'Indoor Unit': '100 x 35 x 25 cm',
            'Weight': 'Indoor: 16 kg, Outdoor: 52 kg',
            'Color': 'White',
            'Warranty': '5 years compressor, 1 year general'
          },
          warranty: '5 years compressor + 1 year general',
          usageGuide: 'Gold fin condenser for corrosion resistance. Inverter for large room efficiency.',
          maintenance: 'Monthly: Clean filters. Professional service yearly.',
          installationTips: 'Professional installation required. Strong outdoor unit mounting.',
          safetyTips: 'Dedicated 20A circuit. Stabilizer-free.',
          troubleshooting: [
            'Error code: Call service',
            'Not cooling enough: Check filters'
          ],
          bestFor: 'Large rooms, maximum energy saving',
          estimatedConsumption: '1.9 units/hour average'
        },

        // ---------- FLOOR STANDING/CASSETTE AC - 3 Models (1.5 Ton, 2 Ton, 2.5 Ton) ----------
        {
          id: 'gree-floor-1.5ton',
          name: 'Gree Floor Standing AC 1.5 Ton',
          type: 'Floor Standing/Cassette AC',
          capacity: '1.5 Ton',
          price: 'PKR 95,000 - 110,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Floor Standing Design',
            'High Air Flow',
            'Wide Angle Louver',
            'Remote Control',
            'LED Display',
            'Timer',
            'Sleep Mode',
            'Anti-bacterial Filter'
          ],
          specifications: {
            'Capacity': '1.5 Ton',
            'Type': 'Floor Standing AC',
            'Cooling Capacity': '18000 BTU',
            'Energy Rating': '2 Star',
            'Power Consumption': '1600 Watts',
            'Refrigerant': 'R-410A',
            'Air Flow': '700 CFM',
            'Noise Level': '45 dB',
            'Dimensions': '170 x 50 x 35 cm',
            'Weight': '55 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive + 5 years compressor',
          usageGuide: 'Place on floor near wall. High air flow for large spaces.',
          maintenance: 'Monthly: Clean filters. Professional service yearly.',
          installationTips: 'No wall mounting needed. Place on level floor.',
          safetyTips: 'Keep away from curtains. Stable placement.',
          troubleshooting: [
            'Not cooling: Check filters',
            'Noise: Check if level'
          ],
          bestFor: 'Shops, offices, large halls',
          estimatedConsumption: '1.6 units/hour'
        },
        {
          id: 'gree-floor-2ton',
          name: 'Gree Floor Standing AC 2 Ton',
          type: 'Floor Standing/Cassette AC',
          capacity: '2 Ton',
          price: 'PKR 120,000 - 140,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Floor Standing',
            'High Air Flow',
            'Wide Angle',
            'Remote',
            'LED Display',
            'Timer',
            'Turbo Cool'
          ],
          specifications: {
            'Capacity': '2 Ton',
            'Type': 'Floor Standing AC',
            'Cooling Capacity': '24000 BTU',
            'Energy Rating': '1 Star',
            'Power Consumption': '2100 Watts',
            'Air Flow': '850 CFM',
            'Dimensions': '175 x 52 x 38 cm',
            'Weight': '60 kg',
            'Warranty': '1 year'
          },
          warranty: '1 year comprehensive + 5 years compressor',
          usageGuide: 'Ideal for commercial spaces.',
          maintenance: 'Monthly: Clean filters.',
          installationTips: 'Floor placement.',
          safetyTips: 'Stable placement essential.',
          troubleshooting: [
            'Not cooling: Check power',
            'Error: Call service'
          ],
          bestFor: 'Restaurants, large offices',
          estimatedConsumption: '2.1 units/hour'
        },
        {
          id: 'gree-cassette-2.5ton',
          name: 'Gree Cassette AC 2.5 Ton',
          type: 'Floor Standing/Cassette AC',
          capacity: '2.5 Ton',
          price: 'PKR 150,000 - 180,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Ceiling Mounted',
            '4-Way Air Flow',
            'Commercial Use',
            'Quiet Operation',
            'High Capacity',
            'Remote Control',
            'Timer'
          ],
          specifications: {
            'Capacity': '2.5 Ton',
            'Type': 'Cassette AC',
            'Cooling Capacity': '30000 BTU',
            'Energy Rating': '1 Star',
            'Power Consumption': '2600 Watts',
            'Mounting': 'Ceiling recessed',
            'Air Flow': '4-directional',
            'Noise Level': 'Very low',
            'Dimensions': 'Panel: 95 x 95 cm',
            'Weight': '70 kg',
            'Applications': 'Offices, Shops, Restaurants',
            'Warranty': '2 years'
          },
          warranty: '2 years comprehensive + 5 years compressor',
          usageGuide: 'Commercial spaces. Ceiling installation. 4-way air flow for even cooling.',
          maintenance: 'Monthly: Clean filters. Professional maintenance required.',
          installationTips: 'Professional installation only. False ceiling needed. Strong ceiling support.',
          safetyTips: 'Professional installation essential.',
          troubleshooting: [
            'Not cooling: Check filters',
            'Error: Call service only'
          ],
          bestFor: 'Commercial spaces, large halls',
          estimatedConsumption: '2.6 units/hour'
        },

        // ---------- PORTABLE AC - 3 Models (0.8 Ton, 1 Ton, 1.2 Ton) ----------
        {
          id: 'gree-portable-0.8ton',
          name: 'Gree Portable AC 0.8 Ton',
          type: 'Portable AC',
          capacity: '0.8 Ton',
          price: 'PKR 40,000 - 48,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Portable Design',
            'No Installation',
            'Wheels for Mobility',
            'Dehumidifier',
            'Remote Control',
            'Timer',
            'Sleep Mode'
          ],
          specifications: {
            'Capacity': '0.8 Ton',
            'Type': 'Portable AC',
            'Cooling Capacity': '9000 BTU',
            'Power Consumption': '900 Watts',
            'Exhaust': 'Hot air hose to window',
            'Mobility': '4 wheels',
            'Noise Level': '52 dB',
            'Dimensions': '45 x 75 x 40 cm',
            'Weight': '30 kg',
            'Color': 'White',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Place near window for exhaust hose. Mobile between rooms. Empty water tank regularly.',
          maintenance: 'Monthly: Clean filter. Empty water tank. Clean exhaust hose.',
          installationTips: 'No installation needed. Just plug in and place near window.',
          safetyTips: 'Ensure exhaust hose properly vented. Don\'t block air intake.',
          troubleshooting: [
            'Not cooling: Check exhaust hose',
            'Water full: Empty tank',
            'Noise: Check if level'
          ],
          bestFor: 'Small rooms, rented homes, temporary cooling',
          estimatedConsumption: '0.9 units/hour'
        },
        {
          id: 'gree-portable-1ton',
          name: 'Gree Portable AC 1 Ton',
          type: 'Portable AC',
          capacity: '1 Ton',
          price: 'PKR 50,000 - 60,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Portable Design',
            'No Installation',
            'Wheels',
            'Dehumidifier',
            'Remote',
            'Timer',
            'LED Display'
          ],
          specifications: {
            'Capacity': '1 Ton',
            'Type': 'Portable AC',
            'Cooling Capacity': '12000 BTU',
            'Power': '1100 Watts',
            'Exhaust': 'Hot air hose',
            'Mobility': 'Wheels',
            'Noise': '54 dB',
            'Dimensions': '48 x 78 x 42 cm',
            'Weight': '32 kg',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Mobile between rooms. Easy to store in winter.',
          maintenance: 'Monthly: Clean filter.',
          installationTips: 'Window vent kit included.',
          safetyTips: 'Proper venting required.',
          troubleshooting: [
            'Not cooling: Check vent',
            'Water full: Empty tank'
          ],
          bestFor: 'Small rooms, apartments',
          estimatedConsumption: '1.1 units/hour'
        },
        {
          id: 'gree-portable-1.2ton',
          name: 'Gree Portable AC 1.2 Ton',
          type: 'Portable AC',
          capacity: '1.2 Ton',
          price: 'PKR 60,000 - 72,000',
          image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
          features: [
            'Portable',
            'No Installation',
            'Wheels',
            'Dehumidifier',
            'Remote',
            'Timer',
            'LED',
            'Sleep Mode'
          ],
          specifications: {
            'Capacity': '1.2 Ton',
            'Type': 'Portable AC',
            'Cooling': '14000 BTU',
            'Power': '1300 Watts',
            'Exhaust': 'Dual hose',
            'Dimensions': '50 x 80 x 45 cm',
            'Weight': '35 kg',
            'Warranty': '1 year'
          },
          warranty: '1 year warranty',
          usageGuide: 'Dual hose for better efficiency.',
          maintenance: 'Monthly: Clean filters.',
          installationTips: 'Window kit included.',
          safetyTips: 'Proper venting essential.',
          troubleshooting: [
            'Not cooling: Check hoses',
            'Error: Call service'
          ],
          bestFor: 'Medium rooms, portable solution',
          estimatedConsumption: '1.3 units/hour'
          }
        ]
      },
     {
  id: 'haier-ac',
  name: 'Haier',
  models: [
    // ---------- WINDOW AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'haier-window-1ton',
      name: 'Haier Window AC 1 Ton',
      type: 'Window AC',
      capacity: '1 Ton',
      price: 'PKR 48,000 - 55,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Easy Installation',
        'Auto Restart',
        '3 Speed Fan',
        'Timer Function',
        'Affordable',
        'Sleep Mode',
        'Anti-dust Filter'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1050 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '350 CFM',
        'Controls': 'Remote',
        'Dimensions': '55 x 40 x 65 cm',
        'Weight': '45 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Window AC needs proper window space. Clean front grille regularly. Set temperature to 24-26°C.',
      maintenance: 'Monthly: Clean air filter. Every 6 months: Professional servicing.',
      installationTips: 'Window frame must be strong enough. Proper sealing required.',
      safetyTips: 'Use dedicated 15A socket. Don\'t use extension cords.',
      troubleshooting: [
        'Not cooling: Check filter, temperature',
        'Water leaking: Clean drain hole',
        'Noise: Check if level'
      ],
      bestFor: 'Small rooms, budget cooling',
      estimatedConsumption: '1.05 units/hour'
    },
    {
      id: 'haier-window-1.5ton',
      name: 'Haier Window AC 1.5 Ton',
      type: 'Window AC',
      capacity: '1.5 Ton',
      price: 'PKR 62,000 - 72,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Easy Installation',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'LED Display',
        'Sleep Mode',
        'Turbo Cooling'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '18000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1600 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '450 CFM',
        'Dimensions': '65 x 45 x 75 cm',
        'Weight': '55 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Turbo cooling for quick cooling. Clean filter regularly.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Strong window frame needed.',
      safetyTips: 'Dedicated socket required.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Water leaking: Clean drain'
      ],
      bestFor: 'Medium rooms',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'haier-window-2ton',
      name: 'Haier Window AC 2 Ton',
      type: 'Window AC',
      capacity: '2 Ton',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'LED Display',
        'Turbo Cool',
        'Sleep Mode',
        'Anti-bacterial Filter'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '24000 BTU',
        'Energy Rating': '1 Star',
        'Power Consumption': '2100 Watts',
        'Air Flow': '550 CFM',
        'Dimensions': '70 x 48 x 80 cm',
        'Weight': '65 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'For large rooms. Turbo cool for quick cooling.',
      maintenance: 'Monthly: Clean filter. Professional service yearly.',
      installationTips: 'Requires strong support. Dedicated 20A socket.',
      safetyTips: 'Heavy unit - ensure proper support.',
      troubleshooting: [
        'Not cooling enough: Check filter',
        'Tripping breaker: Check power'
      ],
      bestFor: 'Large rooms, living rooms',
      estimatedConsumption: '2.1 units/hour'
    },

    // ---------- SPLIT AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'haier-split-1ton',
      name: 'Haier Split AC 1 Ton',
      type: 'Split AC',
      capacity: '1 Ton',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Quiet Operation',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Split AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1000 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '400 CFM',
        'Indoor Noise': '28 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor Unit': '85 x 70 x 30 cm',
        'Weight': 'Indoor: 12 kg, Outdoor: 40 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Set temperature to 24-26°C. Clean filters every 2 weeks. Use sleep mode at night.',
      maintenance: 'Monthly: Clean indoor filters. Every 6 months: Professional servicing.',
      installationTips: 'Professional installation required. Proper drainage needed.',
      safetyTips: 'Outdoor unit needs ventilation. Dedicated circuit required.',
      troubleshooting: [
        'Not cooling: Check filters, temperature',
        'Water leaking: Clean drain pipe',
        'Error code: Call service'
      ],
      bestFor: 'Small rooms, quiet operation',
      estimatedConsumption: '1.0 units/hour'
    },
    {
      id: 'haier-split-1.5ton',
      name: 'Haier Split AC 1.5 Ton',
      type: 'Split AC',
      capacity: '1.5 Ton',
      price: 'PKR 75,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Turbo Cool',
        'Self Diagnosis'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Split AC',
        'Cooling Capacity': '18000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1550 Watts',
        'Indoor Unit': '95 x 32 x 22 cm',
        'Outdoor Unit': '90 x 75 x 32 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Turbo cool for quick cooling.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Outdoor unit ventilation.',
      troubleshooting: [
        'Error code: Check manual',
        'Not cooling: Call service'
      ],
      bestFor: 'Medium rooms',
      estimatedConsumption: '1.55 units/hour'
    },
    {
      id: 'haier-split-2ton',
      name: 'Haier Split AC 2 Ton',
      type: 'Split AC',
      capacity: '2 Ton',
      price: 'PKR 95,000 - 110,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED',
        'Turbo Cool',
        'Wide Angle'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Split AC',
        'Cooling': '24000 BTU',
        'Power': '2050 Watts',
        'Energy': '1 Star',
        'Indoor Unit': '100 x 35 x 25 cm',
        'Outdoor': '95 x 80 x 35 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Wide angle for even cooling.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dedicated 20A circuit.',
      troubleshooting: [
        'Error code: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms',
      estimatedConsumption: '2.05 units/hour'
    },

    // ---------- INVERTER AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'haier-inverter-1ton',
      name: 'Haier Inverter AC 1 Ton',
      type: 'Inverter AC',
      capacity: '1 Ton',
      price: 'PKR 80,000 - 92,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Energy Efficient',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Anti-bacterial Filter',
        'Quiet Operation'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Inverter Split AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '3 Star',
        'Power Consumption': '800-1200 Watts',
        'Refrigerant': 'R-32',
        'Noise Level': '24 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor': '85 x 70 x 30 cm',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor + 1 year general',
      usageGuide: 'Set to 24-26°C for efficiency. Inverter saves 30-40% electricity.',
      maintenance: 'Monthly: Clean filters. Professional service yearly.',
      installationTips: 'Professional installation required.',
      safetyTips: 'Stabilizer-free operation.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error code: Call service'
      ],
      bestFor: 'Small rooms, energy saving',
      estimatedConsumption: '0.9 units/hour average'
    },
    {
      id: 'haier-inverter-1.5ton',
      name: 'Haier Inverter AC 1.5 Ton',
      type: 'Inverter AC',
      capacity: '1.5 Ton',
      price: 'PKR 100,000 - 115,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'WiFi Ready',
        'Anti-bacterial Filter'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Inverter AC',
        'Cooling': '18000 BTU',
        'Energy': '3 Star',
        'Power': '1200-1800 Watts',
        'Refrigerant': 'R-32',
        'Noise': '26 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'WiFi ready for smart control.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'WiFi not connecting: Check router',
        'Error code: Call service'
      ],
      bestFor: 'Medium rooms, smart home',
      estimatedConsumption: '1.4 units/hour average'
    },
    {
      id: 'haier-inverter-2ton',
      name: 'Haier Inverter AC 2 Ton',
      type: 'Inverter AC',
      capacity: '2 Ton',
      price: 'PKR 130,000 - 150,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'WiFi Ready',
        'Gold Fin'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Inverter AC',
        'Cooling': '24000 BTU',
        'Energy': '3 Star',
        'Power': '1600-2400 Watts',
        'Refrigerant': 'R-32',
        'Noise': '28 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'Gold fin for corrosion resistance.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dedicated 20A circuit.',
      troubleshooting: [
        'Error code: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms, max energy saving',
      estimatedConsumption: '1.9 units/hour average'
    },

    // ---------- FLOOR STANDING/CASSETTE AC - 3 Models ----------
    {
      id: 'haier-floor-1.5ton',
      name: 'Haier Floor Standing AC 1.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '1.5 Ton',
      price: 'PKR 98,000 - 112,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Wide Angle',
        'Remote',
        'LED Display',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Floor Standing',
        'Cooling': '18000 BTU',
        'Power': '1600 Watts',
        'Air Flow': '700 CFM',
        'Dimensions': '170 x 50 x 35 cm',
        'Weight': '55 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Place on floor. High air flow.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'No wall mounting.',
      safetyTips: 'Keep away from curtains.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Noise: Check level'
      ],
      bestFor: 'Shops, offices',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'haier-floor-2ton',
      name: 'Haier Floor Standing AC 2 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2 Ton',
      price: 'PKR 125,000 - 145,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Turbo Cool',
        'Remote',
        'LED',
        'Timer'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Floor Standing',
        'Cooling': '24000 BTU',
        'Power': '2100 Watts',
        'Air Flow': '850 CFM',
        'Dimensions': '175 x 52 x 38 cm',
        'Weight': '60 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'For commercial spaces.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Floor placement.',
      safetyTips: 'Stable placement.',
      troubleshooting: [
        'Not cooling: Check power',
        'Error: Call service'
      ],
      bestFor: 'Restaurants, large offices',
      estimatedConsumption: '2.1 units/hour'
    },
    {
      id: 'haier-cassette-2.5ton',
      name: 'Haier Cassette AC 2.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2.5 Ton',
      price: 'PKR 160,000 - 185,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Ceiling Cassette',
        '4-Way Air Flow',
        'Commercial',
        'Quiet',
        'Remote',
        'Timer'
      ],
      specifications: {
        'Capacity': '2.5 Ton',
        'Type': 'Cassette AC',
        'Cooling': '30000 BTU',
        'Power': '2600 Watts',
        'Mounting': 'Ceiling',
        'Air Flow': '4-way',
        'Panel': '95 x 95 cm',
        'Warranty': '2 years'
      },
      warranty: '2 years + 5 years compressor',
      usageGuide: 'Commercial spaces. Ceiling installation.',
      maintenance: 'Monthly: Clean filters. Professional maintenance.',
      installationTips: 'Professional installation only. False ceiling needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Commercial spaces, halls',
      estimatedConsumption: '2.6 units/hour'
    },

    // ---------- PORTABLE AC - 3 Models ----------
    {
      id: 'haier-portable-0.8ton',
      name: 'Haier Portable AC 0.8 Ton',
      type: 'Portable AC',
      capacity: '0.8 Ton',
      price: 'PKR 42,000 - 50,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '0.8 Ton',
        'Type': 'Portable AC',
        'Cooling': '9000 BTU',
        'Power': '900 Watts',
        'Exhaust': 'Hose',
        'Dimensions': '45 x 75 x 40 cm',
        'Weight': '30 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Place near window. Empty water tank.',
      maintenance: 'Monthly: Clean filter. Empty tank.',
      installationTips: 'No installation. Window vent kit.',
      safetyTips: 'Proper venting required.',
      troubleshooting: [
        'Not cooling: Check exhaust',
        'Water full: Empty tank'
      ],
      bestFor: 'Small rooms, rented homes',
      estimatedConsumption: '0.9 units/hour'
    },
    {
      id: 'haier-portable-1ton',
      name: 'Haier Portable AC 1 Ton',
      type: 'Portable AC',
      capacity: '1 Ton',
      price: 'PKR 52,000 - 62,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Portable AC',
        'Cooling': '12000 BTU',
        'Power': '1100 Watts',
        'Dimensions': '48 x 78 x 42 cm',
        'Weight': '32 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Mobile between rooms.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting.',
      troubleshooting: [
        'Not cooling: Check vent',
        'Water full: Empty'
      ],
      bestFor: 'Small rooms, apartments',
      estimatedConsumption: '1.1 units/hour'
    },
    {
      id: 'haier-portable-1.2ton',
      name: 'Haier Portable AC 1.2 Ton',
      type: 'Portable AC',
      capacity: '1.2 Ton',
      price: 'PKR 65,000 - 75,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'Dual Hose',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1.2 Ton',
        'Type': 'Portable AC',
        'Cooling': '14000 BTU',
        'Power': '1300 Watts',
        'Exhaust': 'Dual hose',
        'Dimensions': '50 x 80 x 45 cm',
        'Weight': '35 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual hose for better efficiency.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting essential.',
      troubleshooting: [
        'Not cooling: Check hoses',
        'Error: Call service'
      ],
      bestFor: 'Medium rooms, portable',
      estimatedConsumption: '1.3 units/hour'
    }
  ]
},
     {
  id: 'dawlance-ac',
  name: 'Dawlance',
  models: [
    // ---------- WINDOW AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'dawlance-window-1ton',
      name: 'Dawlance Window AC 1 Ton',
      type: 'Window AC',
      capacity: '1 Ton',
      price: 'PKR 46,000 - 54,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer Function',
        'Sleep Mode',
        'Energy Efficient',
        'Turbo Cooling'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1050 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '350 CFM',
        'Controls': 'Remote',
        'Dimensions': '55 x 40 x 65 cm',
        'Weight': '45 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Install in window frame. Set temperature to 24-26°C for optimal cooling. Clean filter every 2 weeks.',
      maintenance: 'Monthly: Clean air filter. Every 6 months: Professional servicing.',
      installationTips: 'Window frame must be strong enough. Proper sealing required. Level installation.',
      safetyTips: 'Use dedicated 15A socket. Don\'t use extension cords. Ensure proper drainage.',
      troubleshooting: [
        'Not cooling: Check filter, temperature setting',
        'Water leaking: Clean drain hole',
        'Noise: Check if level',
        'Not starting: Check power'
      ],
      bestFor: 'Small rooms (100-120 sq ft), budget cooling',
      estimatedConsumption: '1.05 units/hour'
    },
    {
      id: 'dawlance-window-1.5ton',
      name: 'Dawlance Window AC 1.5 Ton',
      type: 'Window AC',
      capacity: '1.5 Ton',
      price: 'PKR 60,000 - 70,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer Function',
        'Sleep Mode',
        'LED Display',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '18000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1600 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '450 CFM',
        'Dimensions': '65 x 45 x 75 cm',
        'Weight': '55 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Turbo cooling for quick cooling. Clean filter regularly.',
      maintenance: 'Monthly: Clean filter. Professional service yearly.',
      installationTips: 'Strong window frame needed.',
      safetyTips: 'Dedicated 15A socket required.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Water leaking: Clean drain'
      ],
      bestFor: 'Medium rooms (150-180 sq ft)',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'dawlance-window-2ton',
      name: 'Dawlance Window AC 2 Ton',
      type: 'Window AC',
      capacity: '2 Ton',
      price: 'PKR 76,000 - 86,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'LED Display',
        'Turbo Cool',
        'Sleep Mode',
        'Anti-bacterial Filter'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '24000 BTU',
        'Energy Rating': '1 Star',
        'Power Consumption': '2100 Watts',
        'Air Flow': '550 CFM',
        'Dimensions': '70 x 48 x 80 cm',
        'Weight': '65 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'For large rooms. Turbo cool for quick cooling.',
      maintenance: 'Monthly: Clean filter. Professional service yearly.',
      installationTips: 'Requires strong support. Dedicated 20A socket.',
      safetyTips: 'Heavy unit - ensure proper support.',
      troubleshooting: [
        'Not cooling enough: Check filter',
        'Tripping breaker: Check power'
      ],
      bestFor: 'Large rooms (200-250 sq ft), living rooms',
      estimatedConsumption: '2.1 units/hour'
    },

    // ---------- SPLIT AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'dawlance-split-1ton',
      name: 'Dawlance Split AC 1 Ton',
      type: 'Split AC',
      capacity: '1 Ton',
      price: 'PKR 55,000 - 65,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Quiet Operation',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Split AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1000 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '400 CFM',
        'Indoor Noise': '28 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor Unit': '85 x 70 x 30 cm',
        'Weight': 'Indoor: 12 kg, Outdoor: 40 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Set temperature to 24-26°C. Clean filters every 2 weeks. Use sleep mode at night.',
      maintenance: 'Monthly: Clean indoor filters. Every 6 months: Professional servicing.',
      installationTips: 'Professional installation required. Proper drainage needed. Level mounting.',
      safetyTips: 'Outdoor unit needs ventilation. Dedicated circuit required.',
      troubleshooting: [
        'Not cooling: Check filters, temperature',
        'Water leaking: Clean drain pipe',
        'Error code: Call service'
      ],
      bestFor: 'Small rooms, quiet operation',
      estimatedConsumption: '1.0 units/hour'
    },
    {
      id: 'dawlance-split-1.5ton',
      name: 'Dawlance Split AC 1.5 Ton',
      type: 'Split AC',
      capacity: '1.5 Ton',
      price: 'PKR 72,000 - 84,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Turbo Cool',
        'Self Diagnosis'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Split AC',
        'Cooling Capacity': '18000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1550 Watts',
        'Indoor Unit': '95 x 32 x 22 cm',
        'Outdoor Unit': '90 x 75 x 32 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Turbo cool for quick cooling. Self diagnosis for easy troubleshooting.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Outdoor unit ventilation.',
      troubleshooting: [
        'Error code: Check manual',
        'Not cooling: Call service'
      ],
      bestFor: 'Medium rooms',
      estimatedConsumption: '1.55 units/hour'
    },
    {
      id: 'dawlance-split-2ton',
      name: 'Dawlance Split AC 2 Ton',
      type: 'Split AC',
      capacity: '2 Ton',
      price: 'PKR 92,000 - 106,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED',
        'Turbo Cool',
        'Wide Angle'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Split AC',
        'Cooling': '24000 BTU',
        'Power': '2050 Watts',
        'Energy': '1 Star',
        'Indoor Unit': '100 x 35 x 25 cm',
        'Outdoor': '95 x 80 x 35 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Wide angle for even cooling.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dedicated 20A circuit.',
      troubleshooting: [
        'Error code: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms',
      estimatedConsumption: '2.05 units/hour'
    },

    // ---------- INVERTER AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'dawlance-inverter-1ton',
      name: 'Dawlance Inverter AC 1 Ton',
      type: 'Inverter AC',
      capacity: '1 Ton',
      price: 'PKR 78,000 - 88,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Energy Efficient',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Anti-bacterial Filter',
        'Quiet Operation'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Inverter Split AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '3 Star',
        'Power Consumption': '800-1200 Watts',
        'Refrigerant': 'R-32',
        'Noise Level': '24 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor': '85 x 70 x 30 cm',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor + 1 year general',
      usageGuide: 'Set to 24-26°C for efficiency. Inverter saves 30-40% electricity.',
      maintenance: 'Monthly: Clean filters. Professional service yearly.',
      installationTips: 'Professional installation required.',
      safetyTips: 'Stabilizer-free operation.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error code: Call service'
      ],
      bestFor: 'Small rooms, energy saving',
      estimatedConsumption: '0.9 units/hour average'
    },
    {
      id: 'dawlance-inverter-1.5ton',
      name: 'Dawlance Inverter AC 1.5 Ton',
      type: 'Inverter AC',
      capacity: '1.5 Ton',
      price: 'PKR 98,000 - 112,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Anti-bacterial Filter',
        'Gold Fin'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Inverter AC',
        'Cooling': '18000 BTU',
        'Energy': '3 Star',
        'Power': '1200-1800 Watts',
        'Refrigerant': 'R-32',
        'Noise': '26 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'Gold fin for corrosion resistance.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Error code: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Medium rooms, energy saving',
      estimatedConsumption: '1.4 units/hour average'
    },
    {
      id: 'dawlance-inverter-2ton',
      name: 'Dawlance Inverter AC 2 Ton',
      type: 'Inverter AC',
      capacity: '2 Ton',
      price: 'PKR 125,000 - 145,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Gold Fin',
        'WiFi Ready'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Inverter AC',
        'Cooling': '24000 BTU',
        'Energy': '3 Star',
        'Power': '1600-2400 Watts',
        'Refrigerant': 'R-32',
        'Noise': '28 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'WiFi ready for smart control.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dedicated 20A circuit.',
      troubleshooting: [
        'WiFi not connecting: Check router',
        'Error code: Call service'
      ],
      bestFor: 'Large rooms, smart home',
      estimatedConsumption: '1.9 units/hour average'
    },

    // ---------- FLOOR STANDING/CASSETTE AC - 3 Models ----------
    {
      id: 'dawlance-floor-1.5ton',
      name: 'Dawlance Floor Standing AC 1.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '1.5 Ton',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Wide Angle',
        'Remote',
        'LED Display',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Floor Standing',
        'Cooling': '18000 BTU',
        'Power': '1600 Watts',
        'Air Flow': '700 CFM',
        'Dimensions': '170 x 50 x 35 cm',
        'Weight': '55 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Place on floor. High air flow for large spaces.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'No wall mounting needed.',
      safetyTips: 'Keep away from curtains.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Noise: Check level'
      ],
      bestFor: 'Shops, offices',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'dawlance-floor-2ton',
      name: 'Dawlance Floor Standing AC 2 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2 Ton',
      price: 'PKR 120,000 - 138,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Turbo Cool',
        'Remote',
        'LED',
        'Timer'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Floor Standing',
        'Cooling': '24000 BTU',
        'Power': '2100 Watts',
        'Air Flow': '850 CFM',
        'Dimensions': '175 x 52 x 38 cm',
        'Weight': '60 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'For commercial spaces.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Floor placement.',
      safetyTips: 'Stable placement.',
      troubleshooting: [
        'Not cooling: Check power',
        'Error: Call service'
      ],
      bestFor: 'Restaurants, large offices',
      estimatedConsumption: '2.1 units/hour'
    },
    {
      id: 'dawlance-cassette-2.5ton',
      name: 'Dawlance Cassette AC 2.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2.5 Ton',
      price: 'PKR 155,000 - 175,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Ceiling Cassette',
        '4-Way Air Flow',
        'Commercial',
        'Quiet',
        'Remote',
        'Timer'
      ],
      specifications: {
        'Capacity': '2.5 Ton',
        'Type': 'Cassette AC',
        'Cooling': '30000 BTU',
        'Power': '2600 Watts',
        'Mounting': 'Ceiling',
        'Air Flow': '4-way',
        'Panel': '95 x 95 cm',
        'Warranty': '2 years'
      },
      warranty: '2 years + 5 years compressor',
      usageGuide: 'Commercial spaces. Ceiling installation.',
      maintenance: 'Monthly: Clean filters. Professional maintenance.',
      installationTips: 'Professional installation only. False ceiling needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Commercial spaces, halls',
      estimatedConsumption: '2.6 units/hour'
    },

    // ---------- PORTABLE AC - 3 Models ----------
    {
      id: 'dawlance-portable-0.8ton',
      name: 'Dawlance Portable AC 0.8 Ton',
      type: 'Portable AC',
      capacity: '0.8 Ton',
      price: 'PKR 40,000 - 48,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '0.8 Ton',
        'Type': 'Portable AC',
        'Cooling': '9000 BTU',
        'Power': '900 Watts',
        'Exhaust': 'Hose',
        'Dimensions': '45 x 75 x 40 cm',
        'Weight': '30 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Place near window. Empty water tank regularly.',
      maintenance: 'Monthly: Clean filter. Empty tank.',
      installationTips: 'No installation. Window vent kit.',
      safetyTips: 'Proper venting required.',
      troubleshooting: [
        'Not cooling: Check exhaust',
        'Water full: Empty tank'
      ],
      bestFor: 'Small rooms, rented homes',
      estimatedConsumption: '0.9 units/hour'
    },
    {
      id: 'dawlance-portable-1ton',
      name: 'Dawlance Portable AC 1 Ton',
      type: 'Portable AC',
      capacity: '1 Ton',
      price: 'PKR 50,000 - 60,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Portable AC',
        'Cooling': '12000 BTU',
        'Power': '1100 Watts',
        'Dimensions': '48 x 78 x 42 cm',
        'Weight': '32 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Mobile between rooms.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting.',
      troubleshooting: [
        'Not cooling: Check vent',
        'Water full: Empty'
      ],
      bestFor: 'Small rooms, apartments',
      estimatedConsumption: '1.1 units/hour'
    },
    {
      id: 'dawlance-portable-1.2ton',
      name: 'Dawlance Portable AC 1.2 Ton',
      type: 'Portable AC',
      capacity: '1.2 Ton',
      price: 'PKR 62,000 - 72,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'Dual Hose',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1.2 Ton',
        'Type': 'Portable AC',
        'Cooling': '14000 BTU',
        'Power': '1300 Watts',
        'Exhaust': 'Dual hose',
        'Dimensions': '50 x 80 x 45 cm',
        'Weight': '35 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual hose for better efficiency.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting essential.',
      troubleshooting: [
        'Not cooling: Check hoses',
        'Error: Call service'
      ],
      bestFor: 'Medium rooms, portable',
      estimatedConsumption: '1.3 units/hour'
    }
  ]
},
     {
  id: 'orient-ac',
  name: 'Orient',
  models: [
    // ---------- WINDOW AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'orient-window-1ton',
      name: 'Orient Window AC 1 Ton',
      type: 'Window AC',
      capacity: '1 Ton',
      price: 'PKR 42,000 - 48,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer Function',
        'Sleep Mode',
        'Budget Friendly',
        'Energy Efficient'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1050 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '350 CFM',
        'Controls': 'Remote',
        'Dimensions': '55 x 40 x 65 cm',
        'Weight': '44 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Install in window frame. Set temperature to 24-26°C for optimal cooling. Clean filter every 2 weeks.',
      maintenance: 'Monthly: Clean air filter. Every 6 months: Professional servicing.',
      installationTips: 'Window frame must be strong enough. Proper sealing required.',
      safetyTips: 'Use dedicated 15A socket. Don\'t use extension cords.',
      troubleshooting: [
        'Not cooling: Check filter, temperature',
        'Water leaking: Clean drain hole',
        'Noise: Check if level'
      ],
      bestFor: 'Small rooms, budget cooling',
      estimatedConsumption: '1.05 units/hour'
    },
    {
      id: 'orient-window-1.5ton',
      name: 'Orient Window AC 1.5 Ton',
      type: 'Window AC',
      capacity: '1.5 Ton',
      price: 'PKR 55,000 - 64,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'Sleep Mode',
        'LED Display',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '18000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1600 Watts',
        'Air Flow': '450 CFM',
        'Dimensions': '65 x 45 x 75 cm',
        'Weight': '53 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Turbo cooling for quick cooling. Clean filter regularly.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Strong window frame needed.',
      safetyTips: 'Dedicated socket required.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Water leaking: Clean drain'
      ],
      bestFor: 'Medium rooms, value for money',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'orient-window-2ton',
      name: 'Orient Window AC 2 Ton',
      type: 'Window AC',
      capacity: '2 Ton',
      price: 'PKR 70,000 - 80,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'LED Display',
        'Turbo Cool',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Window AC',
        'Cooling': '24000 BTU',
        'Energy': '1 Star',
        'Power': '2100 Watts',
        'Dimensions': '70 x 48 x 80 cm',
        'Weight': '63 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'For large rooms. Turbo cool.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Strong support needed. 20A socket.',
      safetyTips: 'Heavy unit - proper support.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Tripping: Check power'
      ],
      bestFor: 'Large rooms, budget option',
      estimatedConsumption: '2.1 units/hour'
    },

    // ---------- SPLIT AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'orient-split-1ton',
      name: 'Orient Split AC 1 Ton',
      type: 'Split AC',
      capacity: '1 Ton',
      price: 'PKR 52,000 - 60,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Quiet Operation',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Split AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1000 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '400 CFM',
        'Indoor Noise': '29 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor Unit': '85 x 70 x 30 cm',
        'Weight': 'Indoor: 12 kg, Outdoor: 39 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Set temperature to 24-26°C. Clean filters every 2 weeks.',
      maintenance: 'Monthly: Clean indoor filters. Professional service yearly.',
      installationTips: 'Professional installation required. Proper drainage.',
      safetyTips: 'Outdoor unit needs ventilation. Dedicated circuit.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Water leaking: Clean drain',
        'Error: Call service'
      ],
      bestFor: 'Small rooms, affordable split',
      estimatedConsumption: '1.0 units/hour'
    },
    {
      id: 'orient-split-1.5ton',
      name: 'Orient Split AC 1.5 Ton',
      type: 'Split AC',
      capacity: '1.5 Ton',
      price: 'PKR 68,000 - 78,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Split AC',
        'Cooling': '18000 BTU',
        'Energy': '2 Star',
        'Power': '1550 Watts',
        'Indoor Unit': '95 x 32 x 22 cm',
        'Outdoor': '90 x 75 x 32 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Turbo cool for quick cooling.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Outdoor ventilation.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Medium rooms, good value',
      estimatedConsumption: '1.55 units/hour'
    },
    {
      id: 'orient-split-2ton',
      name: 'Orient Split AC 2 Ton',
      type: 'Split AC',
      capacity: '2 Ton',
      price: 'PKR 88,000 - 100,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Split AC',
        'Cooling': '24000 BTU',
        'Power': '2050 Watts',
        'Energy': '1 Star',
        'Indoor Unit': '100 x 35 x 25 cm',
        'Outdoor': '95 x 80 x 35 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Wide angle for even cooling.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dedicated 20A circuit.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms, budget',
      estimatedConsumption: '2.05 units/hour'
    },

    // ---------- INVERTER AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'orient-inverter-1ton',
      name: 'Orient Inverter AC 1 Ton',
      type: 'Inverter AC',
      capacity: '1 Ton',
      price: 'PKR 72,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Energy Efficient',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Anti-bacterial Filter'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Inverter Split AC',
        'Cooling': '12000 BTU',
        'Energy': '3 Star',
        'Power': '800-1200 Watts',
        'Refrigerant': 'R-32',
        'Noise': '25 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor': '85 x 70 x 30 cm',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor + 1 year general',
      usageGuide: 'Set to 24-26°C for efficiency. Inverter saves electricity.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Small rooms, energy saving on budget',
      estimatedConsumption: '0.9 units/hour average'
    },
    {
      id: 'orient-inverter-1.5ton',
      name: 'Orient Inverter AC 1.5 Ton',
      type: 'Inverter AC',
      capacity: '1.5 Ton',
      price: 'PKR 92,000 - 105,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Gold Fin'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Inverter AC',
        'Cooling': '18000 BTU',
        'Energy': '3 Star',
        'Power': '1200-1800 Watts',
        'Refrigerant': 'R-32',
        'Noise': '27 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'Gold fin for protection.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Medium rooms, value inverter',
      estimatedConsumption: '1.4 units/hour average'
    },
    {
      id: 'orient-inverter-2ton',
      name: 'Orient Inverter AC 2 Ton',
      type: 'Inverter AC',
      capacity: '2 Ton',
      price: 'PKR 118,000 - 135,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Gold Fin'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Inverter AC',
        'Cooling': '24000 BTU',
        'Energy': '3 Star',
        'Power': '1600-2400 Watts',
        'Refrigerant': 'R-32',
        'Noise': '29 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'Energy saving for large rooms.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation. 20A circuit.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms, budget inverter',
      estimatedConsumption: '1.9 units/hour average'
    },

    // ---------- FLOOR STANDING/CASSETTE AC - 3 Models ----------
    {
      id: 'orient-floor-1.5ton',
      name: 'Orient Floor Standing AC 1.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '1.5 Ton',
      price: 'PKR 90,000 - 102,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Wide Angle',
        'Remote',
        'LED Display',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Floor Standing',
        'Cooling': '18000 BTU',
        'Power': '1600 Watts',
        'Air Flow': '700 CFM',
        'Dimensions': '170 x 50 x 35 cm',
        'Weight': '54 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Place on floor. High air flow.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'No wall mounting.',
      safetyTips: 'Keep away from curtains.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Noise: Check level'
      ],
      bestFor: 'Shops, offices on budget',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'orient-floor-2ton',
      name: 'Orient Floor Standing AC 2 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2 Ton',
      price: 'PKR 115,000 - 130,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Turbo Cool',
        'Remote',
        'LED',
        'Timer'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Floor Standing',
        'Cooling': '24000 BTU',
        'Power': '2100 Watts',
        'Air Flow': '850 CFM',
        'Dimensions': '175 x 52 x 38 cm',
        'Weight': '59 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'For commercial spaces.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Floor placement.',
      safetyTips: 'Stable placement.',
      troubleshooting: [
        'Not cooling: Check power',
        'Error: Call service'
      ],
      bestFor: 'Restaurants, offices',
      estimatedConsumption: '2.1 units/hour'
    },
    {
      id: 'orient-cassette-2.5ton',
      name: 'Orient Cassette AC 2.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2.5 Ton',
      price: 'PKR 145,000 - 165,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Ceiling Cassette',
        '4-Way Air Flow',
        'Commercial',
        'Quiet',
        'Remote',
        'Timer'
      ],
      specifications: {
        'Capacity': '2.5 Ton',
        'Type': 'Cassette AC',
        'Cooling': '30000 BTU',
        'Power': '2600 Watts',
        'Mounting': 'Ceiling',
        'Air Flow': '4-way',
        'Panel': '95 x 95 cm',
        'Warranty': '2 years'
      },
      warranty: '2 years + 5 years compressor',
      usageGuide: 'Commercial spaces. Ceiling installation.',
      maintenance: 'Monthly: Clean filters. Professional maintenance.',
      installationTips: 'Professional installation only. False ceiling needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Commercial spaces, budget cassette',
      estimatedConsumption: '2.6 units/hour'
    },

    // ---------- PORTABLE AC - 3 Models ----------
    {
      id: 'orient-portable-ac',
      name: 'Orient Portable AC',
      type: 'Portable AC',
      capacity: '1 Ton',
      price: 'PKR 50,000 - 60,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable Design',
        'No Installation',
        'Wheels for Mobility',
        'Dehumidifier',
        'Remote Control',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Portable AC',
        'Cooling': '12000 BTU',
        'Power': '1100 Watts',
        'Exhaust': 'Hot air hose',
        'Mobility': '4 wheels',
        'Dimensions': '45 x 75 x 40 cm',
        'Weight': '30 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Place near window for exhaust hose. Mobile between rooms. Empty water tank regularly.',
      maintenance: 'Monthly: Clean filter. Empty water tank.',
      installationTips: 'No installation needed. Just plug in.',
      safetyTips: 'Ensure exhaust hose properly vented.',
      troubleshooting: [
        'Not cooling: Check exhaust',
        'Water full: Empty tank'
      ],
      bestFor: 'Small rooms, rented homes',
      estimatedConsumption: '1.1 units/hour'
    },
    {
      id: 'orient-portable-0.8ton',
      name: 'Orient Portable AC 0.8 Ton',
      type: 'Portable AC',
      capacity: '0.8 Ton',
      price: 'PKR 42,000 - 48,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer'
      ],
      specifications: {
        'Capacity': '0.8 Ton',
        'Type': 'Portable AC',
        'Cooling': '9000 BTU',
        'Power': '900 Watts',
        'Dimensions': '45 x 75 x 40 cm',
        'Weight': '28 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Small rooms. Easy to move.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting.',
      troubleshooting: [
        'Not cooling: Check vent',
        'Water full: Empty'
      ],
      bestFor: 'Very small rooms, budget',
      estimatedConsumption: '0.9 units/hour'
    },
    {
      id: 'orient-portable-1.2ton',
      name: 'Orient Portable AC 1.2 Ton',
      type: 'Portable AC',
      capacity: '1.2 Ton',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'Dual Hose',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1.2 Ton',
        'Type': 'Portable AC',
        'Cooling': '14000 BTU',
        'Power': '1300 Watts',
        'Exhaust': 'Dual hose',
        'Dimensions': '50 x 80 x 45 cm',
        'Weight': '34 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual hose for better efficiency.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting essential.',
      troubleshooting: [
        'Not cooling: Check hoses',
        'Error: Call service'
      ],
      bestFor: 'Medium rooms, portable',
      estimatedConsumption: '1.3 units/hour'
    }
  ]
},
     {
  id: 'pel-ac',
  name: 'PEL',
  models: [
    // ---------- WINDOW AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'pel-window-1ton',
      name: 'PEL Window AC 1 Ton',
      type: 'Window AC',
      capacity: '1 Ton',
      price: 'PKR 44,000 - 50,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer Function',
        'Sleep Mode',
        'Energy Efficient',
        'Budget Friendly'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1050 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '350 CFM',
        'Controls': 'Remote',
        'Dimensions': '55 x 40 x 65 cm',
        'Weight': '44 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Install in window frame. Set temperature to 24-26°C. Clean filter every 2 weeks.',
      maintenance: 'Monthly: Clean air filter. Every 6 months: Professional servicing.',
      installationTips: 'Window frame must be strong. Proper sealing required.',
      safetyTips: 'Use dedicated 15A socket. Don\'t use extension cords.',
      troubleshooting: [
        'Not cooling: Check filter, temperature',
        'Water leaking: Clean drain hole',
        'Noise: Check if level'
      ],
      bestFor: 'Small rooms, budget cooling',
      estimatedConsumption: '1.05 units/hour'
    },
    {
      id: 'pel-window-1.5ton',
      name: 'PEL Window AC 1.5 Ton',
      type: 'Window AC',
      capacity: '1.5 Ton',
      price: 'PKR 58,000 - 66,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'Sleep Mode',
        'LED Display',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '18000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1600 Watts',
        'Air Flow': '450 CFM',
        'Dimensions': '65 x 45 x 75 cm',
        'Weight': '53 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Turbo cooling for quick cooling. Clean filter regularly.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Strong window frame needed.',
      safetyTips: 'Dedicated socket required.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Water leaking: Clean drain'
      ],
      bestFor: 'Medium rooms, good value',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'pel-window-2ton',
      name: 'PEL Window AC 2 Ton',
      type: 'Window AC',
      capacity: '2 Ton',
      price: 'PKR 74,000 - 84,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'LED Display',
        'Turbo Cool',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Window AC',
        'Cooling': '24000 BTU',
        'Energy': '1 Star',
        'Power': '2100 Watts',
        'Dimensions': '70 x 48 x 80 cm',
        'Weight': '63 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'For large rooms. Turbo cool.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Strong support needed. 20A socket.',
      safetyTips: 'Heavy unit - proper support.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Tripping: Check power'
      ],
      bestFor: 'Large rooms, budget option',
      estimatedConsumption: '2.1 units/hour'
    },

    // ---------- SPLIT AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'pel-split-1ton',
      name: 'PEL Split AC 1 Ton',
      type: 'Split AC',
      capacity: '1 Ton',
      price: 'PKR 54,000 - 62,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Quiet Operation',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Split AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1000 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '400 CFM',
        'Indoor Noise': '29 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor Unit': '85 x 70 x 30 cm',
        'Weight': 'Indoor: 12 kg, Outdoor: 39 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Set temperature to 24-26°C. Clean filters every 2 weeks.',
      maintenance: 'Monthly: Clean indoor filters. Professional service yearly.',
      installationTips: 'Professional installation required. Proper drainage.',
      safetyTips: 'Outdoor unit needs ventilation. Dedicated circuit.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Water leaking: Clean drain',
        'Error: Call service'
      ],
      bestFor: 'Small rooms, affordable split',
      estimatedConsumption: '1.0 units/hour'
    },
    {
      id: 'pel-split-1.5ton',
      name: 'PEL Split AC 1.5 Ton',
      type: 'Split AC',
      capacity: '1.5 Ton',
      price: 'PKR 70,000 - 80,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Split AC',
        'Cooling': '18000 BTU',
        'Energy': '2 Star',
        'Power': '1550 Watts',
        'Indoor Unit': '95 x 32 x 22 cm',
        'Outdoor': '90 x 75 x 32 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Turbo cool for quick cooling.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Outdoor ventilation.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Medium rooms, good value',
      estimatedConsumption: '1.55 units/hour'
    },
    {
      id: 'pel-split-2ton',
      name: 'PEL Split AC 2 Ton',
      type: 'Split AC',
      capacity: '2 Ton',
      price: 'PKR 90,000 - 102,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Split AC',
        'Cooling': '24000 BTU',
        'Power': '2050 Watts',
        'Energy': '1 Star',
        'Indoor Unit': '100 x 35 x 25 cm',
        'Outdoor': '95 x 80 x 35 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Wide angle for even cooling.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dedicated 20A circuit.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms, budget',
      estimatedConsumption: '2.05 units/hour'
    },

    // ---------- INVERTER AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'pel-inverter-1ton',
      name: 'PEL Inverter AC 1 Ton',
      type: 'Inverter AC',
      capacity: '1 Ton',
      price: 'PKR 74,000 - 84,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Energy Efficient',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Anti-bacterial Filter'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Inverter Split AC',
        'Cooling': '12000 BTU',
        'Energy': '3 Star',
        'Power': '800-1200 Watts',
        'Refrigerant': 'R-32',
        'Noise': '25 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor': '85 x 70 x 30 cm',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor + 1 year general',
      usageGuide: 'Set to 24-26°C for efficiency. Inverter saves electricity.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Small rooms, energy saving',
      estimatedConsumption: '0.9 units/hour average'
    },
    {
      id: 'pel-inverter-1.5ton',
      name: 'PEL Inverter AC 1.5 Ton',
      type: 'Inverter AC',
      capacity: '1.5 Ton',
      price: 'PKR 95,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Gold Fin'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Inverter AC',
        'Cooling': '18000 BTU',
        'Energy': '3 Star',
        'Power': '1200-1800 Watts',
        'Refrigerant': 'R-32',
        'Noise': '27 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'Gold fin for protection.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Medium rooms, value inverter',
      estimatedConsumption: '1.4 units/hour average'
    },
    {
      id: 'pel-inverter-2ton',
      name: 'PEL Inverter AC 2 Ton',
      type: 'Inverter AC',
      capacity: '2 Ton',
      price: 'PKR 120,000 - 138,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Gold Fin'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Inverter AC',
        'Cooling': '24000 BTU',
        'Energy': '3 Star',
        'Power': '1600-2400 Watts',
        'Refrigerant': 'R-32',
        'Noise': '29 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'Energy saving for large rooms.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation. 20A circuit.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms, budget inverter',
      estimatedConsumption: '1.9 units/hour average'
    },

    // ---------- FLOOR STANDING/CASSETTE AC - 3 Models ----------
    {
      id: 'pel-floor-1.5ton',
      name: 'PEL Floor Standing AC 1.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '1.5 Ton',
      price: 'PKR 92,000 - 105,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Wide Angle',
        'Remote',
        'LED Display',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Floor Standing',
        'Cooling': '18000 BTU',
        'Power': '1600 Watts',
        'Air Flow': '700 CFM',
        'Dimensions': '170 x 50 x 35 cm',
        'Weight': '54 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Place on floor. High air flow.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'No wall mounting.',
      safetyTips: 'Keep away from curtains.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Noise: Check level'
      ],
      bestFor: 'Shops, offices',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'pel-floor-2ton',
      name: 'PEL Floor Standing AC 2 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2 Ton',
      price: 'PKR 118,000 - 135,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Turbo Cool',
        'Remote',
        'LED',
        'Timer'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Floor Standing',
        'Cooling': '24000 BTU',
        'Power': '2100 Watts',
        'Air Flow': '850 CFM',
        'Dimensions': '175 x 52 x 38 cm',
        'Weight': '59 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'For commercial spaces.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Floor placement.',
      safetyTips: 'Stable placement.',
      troubleshooting: [
        'Not cooling: Check power',
        'Error: Call service'
      ],
      bestFor: 'Restaurants, offices',
      estimatedConsumption: '2.1 units/hour'
    },
    {
      id: 'pel-cassette-2.5ton',
      name: 'PEL Cassette AC 2.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2.5 Ton',
      price: 'PKR 148,000 - 168,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Ceiling Cassette',
        '4-Way Air Flow',
        'Commercial',
        'Quiet',
        'Remote',
        'Timer'
      ],
      specifications: {
        'Capacity': '2.5 Ton',
        'Type': 'Cassette AC',
        'Cooling': '30000 BTU',
        'Power': '2600 Watts',
        'Mounting': 'Ceiling',
        'Air Flow': '4-way',
        'Panel': '95 x 95 cm',
        'Warranty': '2 years'
      },
      warranty: '2 years + 5 years compressor',
      usageGuide: 'Commercial spaces. Ceiling installation.',
      maintenance: 'Monthly: Clean filters. Professional maintenance.',
      installationTips: 'Professional installation only. False ceiling needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Commercial spaces, halls',
      estimatedConsumption: '2.6 units/hour'
    },

    // ---------- PORTABLE AC - 3 Models ----------
    {
      id: 'pel-portable-0.8ton',
      name: 'PEL Portable AC 0.8 Ton',
      type: 'Portable AC',
      capacity: '0.8 Ton',
      price: 'PKR 40,000 - 46,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '0.8 Ton',
        'Type': 'Portable AC',
        'Cooling': '9000 BTU',
        'Power': '900 Watts',
        'Exhaust': 'Hose',
        'Dimensions': '45 x 75 x 40 cm',
        'Weight': '28 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Place near window. Empty water tank.',
      maintenance: 'Monthly: Clean filter. Empty tank.',
      installationTips: 'No installation. Window kit.',
      safetyTips: 'Proper venting required.',
      troubleshooting: [
        'Not cooling: Check exhaust',
        'Water full: Empty tank'
      ],
      bestFor: 'Small rooms, budget portable',
      estimatedConsumption: '0.9 units/hour'
    },
    {
      id: 'pel-portable-1ton',
      name: 'PEL Portable AC 1 Ton',
      type: 'Portable AC',
      capacity: '1 Ton',
      price: 'PKR 48,000 - 56,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Portable AC',
        'Cooling': '12000 BTU',
        'Power': '1100 Watts',
        'Dimensions': '48 x 78 x 42 cm',
        'Weight': '30 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Mobile between rooms.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting.',
      troubleshooting: [
        'Not cooling: Check vent',
        'Water full: Empty'
      ],
      bestFor: 'Small rooms, apartments',
      estimatedConsumption: '1.1 units/hour'
    },
    {
      id: 'pel-portable-1.2ton',
      name: 'PEL Portable AC 1.2 Ton',
      type: 'Portable AC',
      capacity: '1.2 Ton',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'Dual Hose',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1.2 Ton',
        'Type': 'Portable AC',
        'Cooling': '14000 BTU',
        'Power': '1300 Watts',
        'Exhaust': 'Dual hose',
        'Dimensions': '50 x 80 x 45 cm',
        'Weight': '34 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual hose for better efficiency.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting essential.',
      troubleshooting: [
        'Not cooling: Check hoses',
        'Error: Call service'
      ],
      bestFor: 'Medium rooms, portable',
      estimatedConsumption: '1.3 units/hour'
    }
  ]
},
     {
  id: 'eco-star-ac',
  name: 'EcoStar',
  models: [
    // ---------- WINDOW AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'eco-window-1ton',
      name: 'EcoStar Window AC 1 Ton',
      type: 'Window AC',
      capacity: '1 Ton',
      price: 'PKR 40,000 - 46,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer Function',
        'Sleep Mode',
        'Budget Friendly',
        'Energy Efficient'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '1 Star',
        'Power Consumption': '1100 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '330 CFM',
        'Controls': 'Remote',
        'Dimensions': '55 x 40 x 65 cm',
        'Weight': '42 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 3 years compressor',
      usageGuide: 'Install in window frame. Set temperature to 24-26°C. Clean filter every 2 weeks.',
      maintenance: 'Monthly: Clean air filter. Every 6 months: Professional servicing.',
      installationTips: 'Window frame must be strong. Proper sealing required.',
      safetyTips: 'Use dedicated 15A socket. Don\'t use extension cords.',
      troubleshooting: [
        'Not cooling: Check filter, temperature',
        'Water leaking: Clean drain hole',
        'Noise: Check if level'
      ],
      bestFor: 'Small rooms, most budget option',
      estimatedConsumption: '1.1 units/hour'
    },
    {
      id: 'eco-window-1.5ton',
      name: 'EcoStar Window AC 1.5 Ton',
      type: 'Window AC',
      capacity: '1.5 Ton',
      price: 'PKR 52,000 - 60,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'Sleep Mode',
        'LED Display'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '18000 BTU',
        'Energy Rating': '1 Star',
        'Power Consumption': '1650 Watts',
        'Air Flow': '430 CFM',
        'Dimensions': '65 x 45 x 75 cm',
        'Weight': '50 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 3 years compressor',
      usageGuide: 'Basic cooling for medium rooms. Clean filter regularly.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Strong window frame needed.',
      safetyTips: 'Dedicated socket required.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Water leaking: Clean drain'
      ],
      bestFor: 'Medium rooms, super budget',
      estimatedConsumption: '1.65 units/hour'
    },
    {
      id: 'eco-window-2ton',
      name: 'EcoStar Window AC 2 Ton',
      type: 'Window AC',
      capacity: '2 Ton',
      price: 'PKR 68,000 - 78,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'LED Display',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Window AC',
        'Cooling': '24000 BTU',
        'Energy': '1 Star',
        'Power': '2150 Watts',
        'Dimensions': '70 x 48 x 80 cm',
        'Weight': '60 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 3 years compressor',
      usageGuide: 'For large rooms on budget.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Strong support needed. 20A socket.',
      safetyTips: 'Heavy unit - proper support.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Tripping: Check power'
      ],
      bestFor: 'Large rooms, most affordable',
      estimatedConsumption: '2.15 units/hour'
    },

    // ---------- SPLIT AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'eco-split-1ton',
      name: 'EcoStar Split AC 1 Ton',
      type: 'Split AC',
      capacity: '1 Ton',
      price: 'PKR 48,000 - 55,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Budget Split'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Split AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '1 Star',
        'Power Consumption': '1050 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '380 CFM',
        'Indoor Noise': '31 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor Unit': '85 x 70 x 30 cm',
        'Weight': 'Indoor: 11 kg, Outdoor: 37 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 3 years compressor',
      usageGuide: 'Set temperature to 24-26°C. Clean filters every 2 weeks.',
      maintenance: 'Monthly: Clean indoor filters. Professional service yearly.',
      installationTips: 'Professional installation required. Proper drainage.',
      safetyTips: 'Outdoor unit needs ventilation. Dedicated circuit.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Water leaking: Clean drain',
        'Error: Call service'
      ],
      bestFor: 'Small rooms, most affordable split',
      estimatedConsumption: '1.05 units/hour'
    },
    {
      id: 'eco-split-1.5ton',
      name: 'EcoStar Split AC 1.5 Ton',
      type: 'Split AC',
      capacity: '1.5 Ton',
      price: 'PKR 62,000 - 72,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Split AC',
        'Cooling': '18000 BTU',
        'Energy': '1 Star',
        'Power': '1600 Watts',
        'Indoor Unit': '95 x 32 x 22 cm',
        'Outdoor': '90 x 75 x 32 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 3 years compressor',
      usageGuide: 'Basic split AC for medium rooms.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Outdoor ventilation.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Medium rooms, value split',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'eco-split-2ton',
      name: 'EcoStar Split AC 2 Ton',
      type: 'Split AC',
      capacity: '2 Ton',
      price: 'PKR 82,000 - 94,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Split AC',
        'Cooling': '24000 BTU',
        'Power': '2100 Watts',
        'Energy': '1 Star',
        'Indoor Unit': '100 x 35 x 25 cm',
        'Outdoor': '95 x 80 x 35 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 3 years compressor',
      usageGuide: 'Basic cooling for large rooms.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dedicated 20A circuit.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms, budget split',
      estimatedConsumption: '2.1 units/hour'
    },

    // ---------- INVERTER AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'eco-inverter-1ton',
      name: 'EcoStar Inverter AC 1 Ton',
      type: 'Inverter AC',
      capacity: '1 Ton',
      price: 'PKR 65,000 - 75,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Energy Efficient',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Anti-bacterial Filter',
        'Budget Inverter'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Inverter Split AC',
        'Cooling': '12000 BTU',
        'Energy': '3 Star',
        'Power': '850-1250 Watts',
        'Refrigerant': 'R-32',
        'Noise': '26 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor': '85 x 70 x 30 cm',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor + 1 year general',
      usageGuide: 'Set to 24-26°C for efficiency. Inverter saves electricity.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Small rooms, affordable inverter',
      estimatedConsumption: '0.95 units/hour average'
    },
    {
      id: 'eco-inverter-1.5ton',
      name: 'EcoStar Inverter AC 1.5 Ton',
      type: 'Inverter AC',
      capacity: '1.5 Ton',
      price: 'PKR 85,000 - 98,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Gold Fin'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Inverter AC',
        'Cooling': '18000 BTU',
        'Energy': '3 Star',
        'Power': '1250-1850 Watts',
        'Refrigerant': 'R-32',
        'Noise': '28 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'Gold fin for protection.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Medium rooms, value inverter',
      estimatedConsumption: '1.45 units/hour average'
    },
    {
      id: 'eco-inverter-2ton',
      name: 'EcoStar Inverter AC 2 Ton',
      type: 'Inverter AC',
      capacity: '2 Ton',
      price: 'PKR 108,000 - 125,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Gold Fin'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Inverter AC',
        'Cooling': '24000 BTU',
        'Energy': '3 Star',
        'Power': '1650-2450 Watts',
        'Refrigerant': 'R-32',
        'Noise': '30 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'Energy saving for large rooms.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation. 20A circuit.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms, budget inverter',
      estimatedConsumption: '1.95 units/hour average'
    },

    // ---------- FLOOR STANDING/CASSETTE AC - 3 Models ----------
    {
      id: 'eco-floor-1.5ton',
      name: 'EcoStar Floor Standing AC 1.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '1.5 Ton',
      price: 'PKR 85,000 - 98,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Wide Angle',
        'Remote',
        'LED Display',
        'Timer',
        'Budget Commercial'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Floor Standing',
        'Cooling': '18000 BTU',
        'Power': '1600 Watts',
        'Air Flow': '680 CFM',
        'Dimensions': '170 x 50 x 35 cm',
        'Weight': '52 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 3 years compressor',
      usageGuide: 'Place on floor. High air flow for shops.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'No wall mounting.',
      safetyTips: 'Keep away from curtains.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Noise: Check level'
      ],
      bestFor: 'Shops, offices on tight budget',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'eco-floor-2ton',
      name: 'EcoStar Floor Standing AC 2 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2 Ton',
      price: 'PKR 108,000 - 122,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Remote',
        'LED',
        'Timer'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Floor Standing',
        'Cooling': '24000 BTU',
        'Power': '2100 Watts',
        'Air Flow': '820 CFM',
        'Dimensions': '175 x 52 x 38 cm',
        'Weight': '57 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 3 years compressor',
      usageGuide: 'For commercial spaces on budget.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Floor placement.',
      safetyTips: 'Stable placement.',
      troubleshooting: [
        'Not cooling: Check power',
        'Error: Call service'
      ],
      bestFor: 'Restaurants, offices budget',
      estimatedConsumption: '2.1 units/hour'
    },
    {
      id: 'eco-cassette-2.5ton',
      name: 'EcoStar Cassette AC 2.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2.5 Ton',
      price: 'PKR 135,000 - 155,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Ceiling Cassette',
        '4-Way Air Flow',
        'Commercial',
        'Remote',
        'Timer'
      ],
      specifications: {
        'Capacity': '2.5 Ton',
        'Type': 'Cassette AC',
        'Cooling': '30000 BTU',
        'Power': '2600 Watts',
        'Mounting': 'Ceiling',
        'Air Flow': '4-way',
        'Panel': '95 x 95 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 3 years compressor',
      usageGuide: 'Commercial spaces. Ceiling installation.',
      maintenance: 'Monthly: Clean filters. Professional maintenance.',
      installationTips: 'Professional installation only. False ceiling needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Commercial spaces, most affordable cassette',
      estimatedConsumption: '2.6 units/hour'
    },

    // ---------- PORTABLE AC - 3 Models ----------
    {
      id: 'eco-portable-0.8ton',
      name: 'EcoStar Portable AC 0.8 Ton',
      type: 'Portable AC',
      capacity: '0.8 Ton',
      price: 'PKR 35,000 - 42,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'Most Affordable'
      ],
      specifications: {
        'Capacity': '0.8 Ton',
        'Type': 'Portable AC',
        'Cooling': '9000 BTU',
        'Power': '900 Watts',
        'Exhaust': 'Hose',
        'Dimensions': '45 x 75 x 40 cm',
        'Weight': '27 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Place near window. Empty water tank regularly.',
      maintenance: 'Monthly: Clean filter. Empty tank.',
      installationTips: 'No installation. Window vent kit.',
      safetyTips: 'Proper venting required.',
      troubleshooting: [
        'Not cooling: Check exhaust',
        'Water full: Empty tank'
      ],
      bestFor: 'Small rooms, lowest price portable',
      estimatedConsumption: '0.9 units/hour'
    },
    {
      id: 'eco-portable-1ton',
      name: 'EcoStar Portable AC 1 Ton',
      type: 'Portable AC',
      capacity: '1 Ton',
      price: 'PKR 45,000 - 52,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Portable AC',
        'Cooling': '12000 BTU',
        'Power': '1100 Watts',
        'Dimensions': '48 x 78 x 42 cm',
        'Weight': '29 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Mobile between rooms.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting.',
      troubleshooting: [
        'Not cooling: Check vent',
        'Water full: Empty'
      ],
      bestFor: 'Small rooms, budget portable',
      estimatedConsumption: '1.1 units/hour'
    },
    {
      id: 'eco-portable-1.2ton',
      name: 'EcoStar Portable AC 1.2 Ton',
      type: 'Portable AC',
      capacity: '1.2 Ton',
      price: 'PKR 55,000 - 65,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'Dual Hose',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1.2 Ton',
        'Type': 'Portable AC',
        'Cooling': '14000 BTU',
        'Power': '1300 Watts',
        'Exhaust': 'Dual hose',
        'Dimensions': '50 x 80 x 45 cm',
        'Weight': '33 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual hose for better efficiency.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting essential.',
      troubleshooting: [
        'Not cooling: Check hoses',
        'Error: Call service'
      ],
      bestFor: 'Medium rooms, budget portable',
      estimatedConsumption: '1.3 units/hour'
    }
  ]
},
      {
  id: 'kenwood-ac',
  name: 'Kenwood',
  models: [
    // ---------- WINDOW AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'kenwood-window-1ton',
      name: 'Kenwood Window AC 1 Ton',
      type: 'Window AC',
      capacity: '1 Ton',
      price: 'PKR 43,000 - 49,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer Function',
        'Sleep Mode',
        'Energy Efficient',
        'LED Display'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1050 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '350 CFM',
        'Controls': 'Remote',
        'Dimensions': '55 x 40 x 65 cm',
        'Weight': '44 kg',
        'Color': 'White',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Install in window frame. Set temperature to 24-26°C. Clean filter every 2 weeks.',
      maintenance: 'Monthly: Clean air filter. Every 6 months: Professional servicing.',
      installationTips: 'Window frame must be strong. Proper sealing required.',
      safetyTips: 'Use dedicated 15A socket. Don\'t use extension cords.',
      troubleshooting: [
        'Not cooling: Check filter, temperature',
        'Water leaking: Clean drain hole',
        'Noise: Check if level'
      ],
      bestFor: 'Small rooms, reliable cooling',
      estimatedConsumption: '1.05 units/hour'
    },
    {
      id: 'kenwood-window-1.5ton',
      name: 'Kenwood Window AC 1.5 Ton',
      type: 'Window AC',
      capacity: '1.5 Ton',
      price: 'PKR 56,000 - 65,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-dust Filter',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'Sleep Mode',
        'LED Display',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Window AC',
        'Cooling Capacity': '18000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1600 Watts',
        'Air Flow': '450 CFM',
        'Dimensions': '65 x 45 x 75 cm',
        'Weight': '53 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Turbo cooling for quick cooling. Clean filter regularly.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Strong window frame needed.',
      safetyTips: 'Dedicated socket required.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Water leaking: Clean drain'
      ],
      bestFor: 'Medium rooms, reliable performance',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'kenwood-window-2ton',
      name: 'Kenwood Window AC 2 Ton',
      type: 'Window AC',
      capacity: '2 Ton',
      price: 'PKR 72,000 - 82,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Auto Restart',
        '3 Speed Fan',
        'Timer',
        'LED Display',
        'Turbo Cool',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Window AC',
        'Cooling': '24000 BTU',
        'Energy': '1 Star',
        'Power': '2100 Watts',
        'Dimensions': '70 x 48 x 80 cm',
        'Weight': '63 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'For large rooms. Turbo cool.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Strong support needed. 20A socket.',
      safetyTips: 'Heavy unit - proper support.',
      troubleshooting: [
        'Not cooling: Check filter',
        'Tripping: Check power'
      ],
      bestFor: 'Large rooms, reliable brand',
      estimatedConsumption: '2.1 units/hour'
    },

    // ---------- SPLIT AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'kenwood-split-1ton',
      name: 'Kenwood Split AC 1 Ton',
      type: 'Split AC',
      capacity: '1 Ton',
      price: 'PKR 53,000 - 61,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Quiet Operation',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Split AC',
        'Cooling Capacity': '12000 BTU',
        'Energy Rating': '2 Star',
        'Power Consumption': '1000 Watts',
        'Refrigerant': 'R-410A',
        'Air Flow': '400 CFM',
        'Indoor Noise': '29 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor Unit': '85 x 70 x 30 cm',
        'Weight': 'Indoor: 12 kg, Outdoor: 39 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year comprehensive + 5 years compressor',
      usageGuide: 'Set temperature to 24-26°C. Clean filters every 2 weeks.',
      maintenance: 'Monthly: Clean indoor filters. Professional service yearly.',
      installationTips: 'Professional installation required. Proper drainage.',
      safetyTips: 'Outdoor unit needs ventilation. Dedicated circuit.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Water leaking: Clean drain',
        'Error: Call service'
      ],
      bestFor: 'Small rooms, quality split',
      estimatedConsumption: '1.0 units/hour'
    },
    {
      id: 'kenwood-split-1.5ton',
      name: 'Kenwood Split AC 1.5 Ton',
      type: 'Split AC',
      capacity: '1.5 Ton',
      price: 'PKR 68,000 - 78,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED Display',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Split AC',
        'Cooling': '18000 BTU',
        'Energy': '2 Star',
        'Power': '1550 Watts',
        'Indoor Unit': '95 x 32 x 22 cm',
        'Outdoor': '90 x 75 x 32 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Turbo cool for quick cooling.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Outdoor ventilation.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Medium rooms, reliable',
      estimatedConsumption: '1.55 units/hour'
    },
    {
      id: 'kenwood-split-2ton',
      name: 'Kenwood Split AC 2 Ton',
      type: 'Split AC',
      capacity: '2 Ton',
      price: 'PKR 88,000 - 100,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Rotary Compressor',
        'Anti-bacterial Filter',
        'Auto Restart',
        'Sleep Mode',
        'Timer',
        'LED',
        'Turbo Cool'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Split AC',
        'Cooling': '24000 BTU',
        'Power': '2050 Watts',
        'Energy': '1 Star',
        'Indoor Unit': '100 x 35 x 25 cm',
        'Outdoor': '95 x 80 x 35 cm',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Wide angle for even cooling.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Dedicated 20A circuit.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Large rooms, quality',
      estimatedConsumption: '2.05 units/hour'
    },

    // ---------- INVERTER AC - 3 Models (1 Ton, 1.5 Ton, 2 Ton) ----------
    {
      id: 'kenwood-inverter-1ton',
      name: 'Kenwood Inverter AC 1 Ton',
      type: 'Inverter AC',
      capacity: '1 Ton',
      price: 'PKR 73,000 - 83,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Energy Efficient',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Anti-bacterial Filter'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Inverter Split AC',
        'Cooling': '12000 BTU',
        'Energy': '3 Star',
        'Power': '800-1200 Watts',
        'Refrigerant': 'R-32',
        'Noise': '25 dB',
        'Indoor Unit': '90 x 30 x 20 cm',
        'Outdoor': '85 x 70 x 30 cm',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor + 1 year general',
      usageGuide: 'Set to 24-26°C for efficiency. Inverter saves electricity.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Small rooms, quality inverter',
      estimatedConsumption: '0.9 units/hour average'
    },
    {
      id: 'kenwood-inverter-1.5ton',
      name: 'Kenwood Inverter AC 1.5 Ton',
      type: 'Inverter AC',
      capacity: '1.5 Ton',
      price: 'PKR 94,000 - 108,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Inverter Technology',
        'Self Cleaning',
        'Sleep Mode',
        'Turbo Cooling',
        'LED Display',
        'Gold Fin'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Inverter AC',
        'Cooling': '18000 BTU',
        'Energy': '3 Star',
        'Power': '1200-1800 Watts',
        'Refrigerant': 'R-32',
        'Noise': '27 dB',
        'Warranty': '5 years compressor'
      },
      warranty: '5 years compressor',
      usageGuide: 'Gold fin for protection.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Professional installation.',
      safetyTips: 'Stabilizer-free.',
      troubleshooting: [
        'Error: Call service',
        'Not cooling: Check filters'
      ],
      bestFor: 'Medium rooms, quality inverter',
      estimatedConsumption: '1.4 units/hour average'
    },
    {
      id: 'kenwood-premium-inverter',
      name: 'Kenwood Premium Inverter AC',
      type: 'Inverter AC',
      capacity: '2 Ton',
      price: 'PKR 130,000 - 150,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Premium Inverter',
        'WiFi Control',
        'Air Purification',
        'Self Diagnosis',
        'Premium Finish',
        'Gold Fin',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Premium Inverter Split',
        'Cooling': '24000 BTU',
        'Energy': '5 Star',
        'Power': '1500-2300 Watts',
        'Refrigerant': 'R-32',
        'Noise': '20 dB',
        'Features': 'WiFi, Air Purifier, Self Clean',
        'Color': 'Titanium Gold',
        'Warranty': '5 years compressor + 2 years general'
      },
      warranty: '5 years compressor + 2 years general',
      usageGuide: 'Premium features. Smart control via app. Air purification for clean air.',
      maintenance: 'Monthly: Clean filters. Update app. Professional service yearly.',
      installationTips: 'Professional installation. Strong WiFi needed.',
      safetyTips: 'Premium safety features. Stabilizer-free.',
      troubleshooting: [
        'WiFi not connecting: Check router',
        'Air purification not working: Check filter',
        'Error: Call service'
      ],
      bestFor: 'Large rooms, premium features, smart home',
      estimatedConsumption: '1.8 units/hour average'
    },

    // ---------- FLOOR STANDING/CASSETTE AC - 3 Models ----------
    {
      id: 'kenwood-floor-1.5ton',
      name: 'Kenwood Floor Standing AC 1.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '1.5 Ton',
      price: 'PKR 92,000 - 105,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Wide Angle',
        'Remote',
        'LED Display',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '1.5 Ton',
        'Type': 'Floor Standing',
        'Cooling': '18000 BTU',
        'Power': '1600 Watts',
        'Air Flow': '700 CFM',
        'Dimensions': '170 x 50 x 35 cm',
        'Weight': '54 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'Place on floor. High air flow for shops and offices.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'No wall mounting needed.',
      safetyTips: 'Keep away from curtains.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Noise: Check level'
      ],
      bestFor: 'Shops, offices, commercial',
      estimatedConsumption: '1.6 units/hour'
    },
    {
      id: 'kenwood-floor-2ton',
      name: 'Kenwood Floor Standing AC 2 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2 Ton',
      price: 'PKR 118,000 - 135,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Floor Standing',
        'High Air Flow',
        'Turbo Cool',
        'Remote',
        'LED',
        'Timer'
      ],
      specifications: {
        'Capacity': '2 Ton',
        'Type': 'Floor Standing',
        'Cooling': '24000 BTU',
        'Power': '2100 Watts',
        'Air Flow': '850 CFM',
        'Dimensions': '175 x 52 x 38 cm',
        'Weight': '59 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year + 5 years compressor',
      usageGuide: 'For commercial spaces.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Floor placement.',
      safetyTips: 'Stable placement.',
      troubleshooting: [
        'Not cooling: Check power',
        'Error: Call service'
      ],
      bestFor: 'Restaurants, large offices',
      estimatedConsumption: '2.1 units/hour'
    },
    {
      id: 'kenwood-cassette-2.5ton',
      name: 'Kenwood Cassette AC 2.5 Ton',
      type: 'Floor Standing/Cassette AC',
      capacity: '2.5 Ton',
      price: 'PKR 150,000 - 170,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Ceiling Cassette',
        '4-Way Air Flow',
        'Commercial',
        'Quiet',
        'Remote',
        'Timer'
      ],
      specifications: {
        'Capacity': '2.5 Ton',
        'Type': 'Cassette AC',
        'Cooling': '30000 BTU',
        'Power': '2600 Watts',
        'Mounting': 'Ceiling',
        'Air Flow': '4-way',
        'Panel': '95 x 95 cm',
        'Warranty': '2 years'
      },
      warranty: '2 years + 5 years compressor',
      usageGuide: 'Commercial spaces. Ceiling installation. 4-way air flow.',
      maintenance: 'Monthly: Clean filters. Professional maintenance.',
      installationTips: 'Professional installation only. False ceiling needed.',
      safetyTips: 'Professional installation essential.',
      troubleshooting: [
        'Not cooling: Check filters',
        'Error: Call service'
      ],
      bestFor: 'Commercial spaces, halls, quality cassette',
      estimatedConsumption: '2.6 units/hour'
    },

    // ---------- PORTABLE AC - 3 Models ----------
    {
      id: 'kenwood-portable-0.8ton',
      name: 'Kenwood Portable AC 0.8 Ton',
      type: 'Portable AC',
      capacity: '0.8 Ton',
      price: 'PKR 38,000 - 45,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'Sleep Mode'
      ],
      specifications: {
        'Capacity': '0.8 Ton',
        'Type': 'Portable AC',
        'Cooling': '9000 BTU',
        'Power': '900 Watts',
        'Exhaust': 'Hose',
        'Dimensions': '45 x 75 x 40 cm',
        'Weight': '28 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Place near window. Empty water tank regularly.',
      maintenance: 'Monthly: Clean filter. Empty tank.',
      installationTips: 'No installation. Window vent kit.',
      safetyTips: 'Proper venting required.',
      troubleshooting: [
        'Not cooling: Check exhaust',
        'Water full: Empty tank'
      ],
      bestFor: 'Small rooms, portable cooling',
      estimatedConsumption: '0.9 units/hour'
    },
    {
      id: 'kenwood-portable-1ton',
      name: 'Kenwood Portable AC 1 Ton',
      type: 'Portable AC',
      capacity: '1 Ton',
      price: 'PKR 48,000 - 56,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'No Installation',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1 Ton',
        'Type': 'Portable AC',
        'Cooling': '12000 BTU',
        'Power': '1100 Watts',
        'Dimensions': '48 x 78 x 42 cm',
        'Weight': '30 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Mobile between rooms.',
      maintenance: 'Monthly: Clean filter.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting.',
      troubleshooting: [
        'Not cooling: Check vent',
        'Water full: Empty'
      ],
      bestFor: 'Small rooms, apartments',
      estimatedConsumption: '1.1 units/hour'
    },
    {
      id: 'kenwood-portable-1.2ton',
      name: 'Kenwood Portable AC 1.2 Ton',
      type: 'Portable AC',
      capacity: '1.2 Ton',
      price: 'PKR 58,000 - 68,000',
      image: 'https://images.unsplash.com/photo-1585735672820-f6b0f36d48d5?auto=format&fit=crop&w=800',
      features: [
        'Portable',
        'Dual Hose',
        'Wheels',
        'Dehumidifier',
        'Remote',
        'Timer',
        'LED'
      ],
      specifications: {
        'Capacity': '1.2 Ton',
        'Type': 'Portable AC',
        'Cooling': '14000 BTU',
        'Power': '1300 Watts',
        'Exhaust': 'Dual hose',
        'Dimensions': '50 x 80 x 45 cm',
        'Weight': '34 kg',
        'Warranty': '1 year'
      },
      warranty: '1 year warranty',
      usageGuide: 'Dual hose for better efficiency.',
      maintenance: 'Monthly: Clean filters.',
      installationTips: 'Window kit included.',
      safetyTips: 'Proper venting essential.',
      troubleshooting: [
        'Not cooling: Check hoses',
        'Error: Call service'
      ],
      bestFor: 'Medium rooms, quality portable',
      estimatedConsumption: '1.3 units/hour'
          }
        ]
      }
    ]
  },
 {
  id: 'water-dispenser',
  name: 'Water Dispenser',
  description: 'Hot and cold water appliance',
  types: ['Hot & Cold', 'Only Cold', 'Table Top', 'Floor Standing', 'Bottom Load'],
  companies: [
    // ==================== WAVES ====================
    {
      id: 'waves-water',
      name: 'Waves',
      models: [
        {
          id: 'waves-hot-cold',
          name: 'Waves Hot & Cold Dispenser',
          type: 'Hot & Cold',
          price: 'PKR 15,000 - 20,000',
          // ... details
        },
        {
          id: 'waves-only-cold',
          name: 'Waves Only Cold Dispenser',
          type: 'Only Cold',
          price: 'PKR 12,000 - 16,000',
          // ... details
        },
        {
          id: 'waves-table-top',
          name: 'Waves Table Top Dispenser',
          type: 'Table Top',
          price: 'PKR 10,000 - 14,000',
          // ... details
        },
        {
          id: 'waves-floor-standing',
          name: 'Waves Floor Standing Dispenser',
          type: 'Floor Standing',
          price: 'PKR 22,000 - 28,000',
          // ... details
        },
        {
          id: 'waves-bottom-load',
          name: 'Waves Bottom Load Dispenser',
          type: 'Bottom Load',
          price: 'PKR 28,000 - 34,000',
          // ... details
        }
      ]
    },
    // ==================== ORIENT ====================
    {
      id: 'orient-water',
      name: 'Orient',
      models: [
        {
          id: 'orient-hot-cold',
          name: 'Orient Hot & Cold Dispenser',
          type: 'Hot & Cold',
          price: 'PKR 16,000 - 22,000',
          // ... details
        },
        {
          id: 'orient-only-cold',
          name: 'Orient Only Cold Dispenser',
          type: 'Only Cold',
          price: 'PKR 13,000 - 17,000',
          // ... details
        },
        {
          id: 'orient-table-top',
          name: 'Orient Table Top Dispenser',
          type: 'Table Top',
          price: 'PKR 11,000 - 15,000',
          // ... details
        },
        {
          id: 'orient-floor-standing',
          name: 'Orient Floor Standing Dispenser',
          type: 'Floor Standing',
          price: 'PKR 24,000 - 30,000',
          // ... details
        },
        {
          id: 'orient-bottom-load',
          name: 'Orient Bottom Load Dispenser',
          type: 'Bottom Load',
          price: 'PKR 30,000 - 36,000',
          // ... details
        }
      ]
    },
    // ==================== PEL ====================
    {
      id: 'pel-water',
      name: 'PEL',
      models: [
        {
          id: 'pel-hot-cold',
          name: 'PEL Hot & Cold Dispenser',
          type: 'Hot & Cold',
          price: 'PKR 17,000 - 23,000',
          // ... details
        },
        {
          id: 'pel-only-cold',
          name: 'PEL Only Cold Dispenser',
          type: 'Only Cold',
          price: 'PKR 14,000 - 18,000',
          // ... details
        },
        {
          id: 'pel-table-top',
          name: 'PEL Table Top Dispenser',
          type: 'Table Top',
          price: 'PKR 12,000 - 16,000',
          // ... details
        },
        {
          id: 'pel-floor-standing',
          name: 'PEL Floor Standing Dispenser',
          type: 'Floor Standing',
          price: 'PKR 25,000 - 32,000',
          // ... details
        },
        {
          id: 'pel-bottom-load',
          name: 'PEL Bottom Load Dispenser',
          type: 'Bottom Load',
          price: 'PKR 32,000 - 38,000',
          // ... details
        }
      ]
    },
    // ==================== HAIER ====================
    {
      id: 'haier-water',
      name: 'Haier',
      models: [
        {
          id: 'haier-hot-cold',
          name: 'Haier Hot & Cold Dispenser',
          type: 'Hot & Cold',
          price: 'PKR 22,000 - 28,000',
          // ... details
        },
        {
          id: 'haier-only-cold',
          name: 'Haier Only Cold Dispenser',
          type: 'Only Cold',
          price: 'PKR 18,000 - 24,000',
          // ... details
        },
        {
          id: 'haier-table-top',
          name: 'Haier Table Top Dispenser',
          type: 'Table Top',
          price: 'PKR 16,000 - 20,000',
          // ... details
        },
        {
          id: 'haier-floor-standing',
          name: 'Haier Floor Standing Dispenser',
          type: 'Floor Standing',
          price: 'PKR 28,000 - 35,000',
          // ... details
        },
        {
          id: 'haier-bottom-load',
          name: 'Haier Bottom Load Dispenser',
          type: 'Bottom Load',
          price: 'PKR 30,000 - 36,000',
          // ... details
        }
      ]
    },
    // ==================== DAWLANCE ====================
    {
      id: 'dawlance-water',
      name: 'Dawlance',
      models: [
        {
          id: 'dawlance-hot-cold',
          name: 'Dawlance Hot & Cold Dispenser',
          type: 'Hot & Cold',
          price: 'PKR 25,000 - 32,000',
          // ... details
        },
        {
          id: 'dawlance-only-cold',
          name: 'Dawlance Only Cold Dispenser',
          type: 'Only Cold',
          price: 'PKR 20,000 - 26,000',
          // ... details
        },
        {
          id: 'dawlance-table-top',
          name: 'Dawlance Table Top Dispenser',
          type: 'Table Top',
          price: 'PKR 18,000 - 24,000',
          // ... details
        },
        {
          id: 'dawlance-floor-standing',
          name: 'Dawlance Floor Standing Dispenser',
          type: 'Floor Standing',
          price: 'PKR 30,000 - 38,000',
          // ... details
        },
        {
          id: 'dawlance-bottom-load',
          name: 'Dawlance Bottom Load Dispenser',
          type: 'Bottom Load',
          price: 'PKR 35,000 - 42,000',
          // ... details
        }
      ]
    },
    // ==================== AQUA ====================
    {
      id: 'aqua-water',
      name: 'Aqua',
      models: [
        {
          id: 'aqua-hot-cold',
          name: 'Aqua Hot & Cold Dispenser',
          type: 'Hot & Cold',
          price: 'PKR 14,000 - 18,000',
          // ... details
        },
        {
          id: 'aqua-only-cold',
          name: 'Aqua Only Cold Dispenser',
          type: 'Only Cold',
          price: 'PKR 10,000 - 14,000',
          // ... details
        },
        {
          id: 'aqua-table-top',
          name: 'Aqua Table Top Dispenser',
          type: 'Table Top',
          price: 'PKR 9,000 - 12,000',
          // ... details
        },
        {
          id: 'aqua-floor-standing',
          name: 'Aqua Floor Standing Dispenser',
          type: 'Floor Standing',
          price: 'PKR 20,000 - 26,000',
          // ... details
        },
        {
          id: 'aqua-bottom-load',
          name: 'Aqua Bottom Load Dispenser',
          type: 'Bottom Load',
          price: 'PKR 26,000 - 32,000',
          // ... details
        }
      ]
    },
    // ==================== COOL ====================
    {
      id: 'cool-water',
      name: 'Cool',
      models: [
        {
          id: 'cool-hot-cold',
          name: 'Cool Hot & Cold Dispenser',
          type: 'Hot & Cold',
          price: 'PKR 18,000 - 24,000',
          // ... details
        },
        {
          id: 'cool-only-cold',
          name: 'Cool Only Cold Dispenser',
          type: 'Only Cold',
          price: 'PKR 15,000 - 20,000',
          // ... details
        },
        {
          id: 'cool-table-top',
          name: 'Cool Table Top Dispenser',
          type: 'Table Top',
          price: 'PKR 13,000 - 17,000',
          // ... details
        },
        {
          id: 'cool-floor-standing',
          name: 'Cool Floor Standing Dispenser',
          type: 'Floor Standing',
          price: 'PKR 28,000 - 35,000',
          // ... details
        },
        {
          id: 'cool-bottom-load',
          name: 'Cool Bottom Load Dispenser',
          type: 'Bottom Load',
          price: 'PKR 32,000 - 40,000',
          // ... details
        }
      ]
    }
  ]
}
]; // END OF appliancesData - 7 appliances


// ======================
// MIGRATION LOGIC
// ======================

// Schema define karte hain – flexible rakhne ke liye Mixed type use kiya
const kitchenApplianceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  types: [String],
  companies: [mongoose.Schema.Types.Mixed],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // optional
}, { timestamps: true });

const KitchenAppliance = mongoose.model('KitchenAppliance', kitchenApplianceSchema);

const migrate = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    // Check if data exists
    if (!appliancesData || appliancesData.length === 0) {
      console.error('❌ No data found! Please paste your appliancesData array in this file.');
      process.exit(1);
    }

    // Optional: Agar admin se link karna hai to admin fetch karein
    // const admin = await User.findOne({ email: 'admin@chefbot.com' });
    // if (!admin) { console.error('Admin not found'); process.exit(1); }
    // const dataWithAdmin = appliancesData.map(app => ({ ...app, createdBy: admin._id }));

    // Insert data (ordered: false se ek document fail ho to baki insert hote rahenge)
    const result = await KitchenAppliance.insertMany(appliancesData, { ordered: false });
    console.log(`✅ Migration successful: ${result.length} appliances inserted.`);

    process.exit(0);
  } catch (err) {
    // Agar duplicate key error aata hai to ignore karte hain (already exist)
    if (err.code === 11000) {
      console.log('⚠️ Some appliances already exist. Skipping duplicates.');
      console.log('✅ Migration completed with no critical errors.');
      process.exit(0);
    } else {
      console.error('❌ Migration failed:', err);
      process.exit(1);
    }
  }
};

migrate();