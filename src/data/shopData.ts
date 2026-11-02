export interface ServiceItem {
  id: string;
  name: string;
  category: 'diagnostics' | 'brakes' | 'engine' | 'climate' | 'maintenance' | 'electrical';
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  estimateRange: string;
  estimatedHours: string;
  included: string[];
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: 'Google Reviews' | 'CARFAX' | 'RepairPal';
  vehicle: string;
  comment: string;
  tag: 'Honesty' | 'Diagnostics' | 'Brakes' | 'Customer Service' | 'Speed';
  verifiedCustomer: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  code: string;
  discount: string;
  description: string;
  terms: string;
  expiry: string;
}

export const SHOP_INFO = {
  name: "MasterTech Auto Repair",
  legalName: "MasterTech Auto Repair LLC",
  tagline: "Spartanburg's Most Trusted Automotive Repair & Diagnostic Center",
  address: "151 S Forest St",
  city: "Spartanburg",
  state: "SC",
  zip: "29306",
  fullAddress: "151 S Forest St, Spartanburg, SC 29306",
  phone: "(864) 504-6374",
  phoneAlt: "(864) 504-9888",
  phoneClean: "8645046374",
  email: "service@mastertechautorepairsc.com",
  tekmetricBookingUrl: "https://booking.tekmetric.com/?shop=a41a3956-c55f-4e62-b640-2e7678a9f11e&rwg_token=ALcMQYbt35MRa9y8d47uE4mV-KAx8774o59dA0QBc0Vml_cRrSiGLYp0r6n08RgomyPMYKaMHk39_qTI1ZTuLDXqtq3LITfTCQ%3D%3D",
  facebookUrl: "https://www.facebook.com/mastertechautorepairshop/",
  googleShareUrl: "https://share.google/D9cY0Y2kSTIFKvUXS",
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=151+S+Forest+St+Spartanburg+SC+29306",
  googleSearchQueryUrl: "https://www.google.com/maps/search/?api=1&query=MasterTech+Auto+Repair+Spartanburg+SC",
  rating: 4.9,
  reviewCount: 184,
  warranty: "24-Month / 24,000-Mile Nationwide Warranty",
  operatingHours: [
    { day: "Monday", open: "8:00 AM", close: "5:30 PM", isOpen: true, hours: "8:00 AM - 5:30 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "5:30 PM", isOpen: true, hours: "8:00 AM - 5:30 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "5:30 PM", isOpen: true, hours: "8:00 AM - 5:30 PM" },
    { day: "Thursday", open: "8:00 AM", close: "5:30 PM", isOpen: true, hours: "8:00 AM - 5:30 PM" },
    { day: "Friday", open: "8:00 AM", close: "5:30 PM", isOpen: true, hours: "8:00 AM - 5:30 PM" },
    { day: "Saturday", open: "Closed", close: "Closed", isOpen: false, hours: "Closed (Drop-Box Available)" },
    { day: "Sunday", open: "Closed", close: "Closed", isOpen: false, hours: "Closed (Drop-Box Available)" },
  ],
  features: [
    "RepairPal Certified Shop",
    "CARFAX Top-Rated Service Center",
    "ASE Master Certified Technicians",
    "Digital Vehicle Inspections (Photos & Video texted to you)",
    "Domestic, Import & European Specialists",
    "Zero Pushy Upselling - 100% Upfront Quotes",
    "Secure 24/7 After-Hours Key Drop Box",
    "Comfortable Lounge with Free Wi-Fi & Beverages"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "check-engine-diagnostics",
    name: "Advanced Computer Diagnostics & Check Engine",
    category: "diagnostics",
    shortDesc: "Dealer-level digital scan tools to pinpoint electrical, sensor, and performance faults accurately.",
    fullDesc: "Modern vehicles have dozens of interconnected onboard computers. Our ASE Master Technicians don't just read trouble codes—we perform live-data testing, oscilloscope waveform analysis, and pinpoint electrical diagnosis to find the root cause before replacing any parts.",
    symptoms: ["Check engine light on or flashing", "Rough idle or stalling", "Misfiring cylinders", "Poor gas mileage", "Hesitation upon acceleration"],
    estimateRange: "$95 - $165",
    estimatedHours: "1 - 2 Hours",
    included: ["Comprehensive OBD-II scan", "Live freeze-frame data review", "Battery & alternator voltage test", "Technician inspection report with photos"],
    popular: true
  },
  {
    id: "brake-system-service",
    name: "Complete Brake Repair & Rotor Replacement",
    category: "brakes",
    shortDesc: "Premium ceramic pads, precision rotor machining/replacement, caliper servicing, and fluid flushes.",
    fullDesc: "Your vehicle's braking system is your most vital safety feature. We inspect pads, rotors, drums, calipers, brake lines, and hydraulic fluid. We use high-grade ceramic or semi-metallic friction materials that resist fade, eliminate noise, and stop on a dime.",
    symptoms: ["High-pitched squealing or metal grinding", "Brake pedal feels spongy or sinks to the floor", "Steering wheel shakes when braking", "Vehicle pulls to one side when stopping", "Brake warning light illuminated"],
    estimateRange: "$185 - $420 per axle",
    estimatedHours: "1.5 - 3 Hours",
    included: ["Premium ceramic brake pads", "Rotor runout measurement & replacement/resurfacing", "Caliper slide pin lubrication", "Brake hardware kit & road test"],
    popular: true
  },
  {
    id: "oil-maintenance",
    name: "Full Synthetic Oil & Filter Service",
    category: "maintenance",
    shortDesc: "OEM-spec synthetic motor oil, premium filter, plus complimentary 21-point vehicle safety inspection.",
    fullDesc: "Keep your engine running smoothly with manufacturer-approved full synthetic oil designed to withstand extreme thermal conditions. Every oil change at MasterTech includes a comprehensive 21-point digital health checkup.",
    symptoms: ["Maintenance due reminder on dashboard", "Dark or gritty oil on dipstick", "Engine ticking louder on cold start", "Over 5,000 miles since last service"],
    estimateRange: "$69 - $98",
    estimatedHours: "45 Minutes",
    included: ["Up to 5 quarts premium synthetic oil", "OEM-grade spin-on/cartridge filter", "Tire pressure check & adjustment", "Fluid top-offs & 21-point safety inspection"],
    popular: true
  },
  {
    id: "ac-heating-climate",
    name: "A/C & Heating Climate Control Service",
    category: "climate",
    shortDesc: "R134a & R1234yf system diagnostics, leak detection, compressor replacement, and cabin air purification.",
    fullDesc: "Spartanburg summers are hot and humid. We test compressor clutch operation, condenser airflow, expansion valves, evaporator temperature, and perform vacuum leak detection to restore icy-cold cabin air.",
    symptoms: ["A/C blowing lukewarm or warm air", "Musty or mildew odor from vents", "Clicking or rattling when A/C is turned on", "Defroster not clearing windshield in winter", "Puddle of fluid inside passenger floorboard"],
    estimateRange: "$140 - $350 (excl. major compressor units)",
    estimatedHours: "1 - 3 Hours",
    included: ["Freon level & high/low pressure test", "Electronic UV dye leak detection", "Cabin vent output temperature check", "Compressor belt & clutch inspection"],
    popular: true
  },
  {
    id: "steering-suspension",
    name: "Suspension, Shocks & Steering Alignment",
    category: "brakes",
    shortDesc: "Struts, control arms, ball joints, tie rods, bushings, and precision laser wheel alignment.",
    fullDesc: "Restore smooth handling, responsive steering, and even tire wear. Worn suspension parts can dramatically increase your stopping distance and cause erratic vehicle sway over bumps.",
    symptoms: ["Bouncy ride over bumps or potholes", "Clunking or popping noise when turning", "Uneven or premature tire tread wear", "Steering wheel is off-center while driving straight", "Excessive body roll around corners"],
    estimateRange: "$220 - $680",
    estimatedHours: "2 - 4 Hours",
    included: ["Shocks & struts visual & bounce test", "Ball joint & tie rod play inspection", "Control arm bushings & sway bar links check", "Road test and alignment check"]
  },
  {
    id: "engine-timing-drivetrain",
    name: "Engine Repair, Timing Belts & Cooling Systems",
    category: "engine",
    shortDesc: "Radiators, water pumps, thermostats, head gaskets, timing belts, and major mechanical rebuilds.",
    fullDesc: "From minor coolant leaks to timing chain replacements and complete engine swaps, our seasoned technicians have the factory tools and heavy equipment to get your powertrain performing like new.",
    symptoms: ["Engine overheating or coolant temp spike", "Sweet smell of coolant or green/orange puddle under car", "Rattling noise from timing cover", "Steam from under the hood", "White or blue exhaust smoke"],
    estimateRange: "$280 - $950+",
    estimatedHours: "3 - 6+ Hours",
    included: ["Cooling system pressure test", "Thermostat opening verification", "Belt tensioner & pulley inspection", "OEM gaskets and factory-spec torque sequence"]
  },
  {
    id: "transmission-drivetrain",
    name: "Transmission & Driveline Service",
    category: "engine",
    shortDesc: "Transmission fluid flush, filter change, differential fluid, CV axles, and driveline troubleshooting.",
    fullDesc: "Protect one of the most expensive components in your vehicle. Regular fluid replacement removes clutch material debris and restores clean shifting without slippage.",
    symptoms: ["Transmission slipping or delayed engagement", "Harsh clunking when shifting into drive or reverse", "Burnt brown transmission fluid", "Whining or grinding from transmission tunnel"],
    estimateRange: "$180 - $390",
    estimatedHours: "1.5 - 3 Hours",
    included: ["Full fluid exchange with approved ATF", "Transmission pan gasket & internal filter inspection", "Axle seals & CV boot check", "Road test through all gears"]
  },
  {
    id: "battery-electrical-alternator",
    name: "Starting, Charging & Electrical Systems",
    category: "electrical",
    shortDesc: "High-amp battery testing, alternator output diagnosis, starter motor replacement, and parasitic draw tests.",
    fullDesc: "Don't get stranded with a dead battery in the morning. We test your alternator's diode ripple, cold cranking amps (CCA), starter draw, and trace hidden battery drains.",
    symptoms: ["Slow cranking or clicking sound when turning key", "Battery warning light on dashboard", "Headlights dimming at idle", "Accessories cutting in and out"],
    estimateRange: "$150 - $380",
    estimatedHours: "1 - 2 Hours",
    included: ["Digital conductance battery test", "Alternator load test under heavy electrical draw", "Starter current draw measurement", "Terminal corrosion cleaning and protectant"]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Marcus T.",
    rating: 5,
    date: "2 weeks ago",
    source: "CARFAX",
    vehicle: "2019 Toyota Highlander",
    comment: "Chris and the technicians at MasterTech on Forest St are the real deal. Another shop in town quoted me $1,400 for new calipers and brake lines. Brought it to MasterTech for a second opinion—they discovered it was just worn front pads and lubricated the slide pins for a fraction of the cost. Honest people who don't rip you off!",
    tag: "Honesty",
    verifiedCustomer: true
  },
  {
    id: "rev-2",
    author: "Jennifer B.",
    rating: 5,
    date: "1 month ago",
    source: "Google Reviews",
    vehicle: "2018 Honda CR-V",
    comment: "Best mechanic shop in Spartanburg hands down. My check engine light was coming on intermittently and causing hesitation. They diagnosed a faulty sensor within two hours, texted me photos and an estimate, and had it ready before 4 PM. Very courteous and clean shop.",
    tag: "Diagnostics",
    verifiedCustomer: true
  },
  {
    id: "rev-3",
    author: "David R.",
    rating: 5,
    date: "2 months ago",
    source: "RepairPal",
    vehicle: "2016 Ford F-150",
    comment: "I've been taking my personal truck and my company work van to MasterTech for two years now. They are always upfront about what needs immediate attention and what can wait. Fair pricing, no pressure, and the repairs are always done right the first time.",
    tag: "Customer Service",
    verifiedCustomer: true
  },
  {
    id: "rev-4",
    author: "Ashley W.",
    rating: 5,
    date: "3 months ago",
    source: "Google Reviews",
    vehicle: "2020 Subaru Outback",
    comment: "A/C blew warm right at the start of summer. Dropped it off in the morning using their key drop box. By noon they had called with the exact diagnosis and cost. By 5 PM my car was blowing ice cold again. MasterTech is our family's go-to mechanic in Spartanburg.",
    tag: "Speed",
    verifiedCustomer: true
  },
  {
    id: "rev-5",
    author: "Robert C.",
    rating: 5,
    date: "4 months ago",
    source: "CARFAX",
    vehicle: "2017 Chevrolet Tahoe",
    comment: "Repaired the suspension and replaced the front brake rotors. Rides like a brand new vehicle again. Transparent pricing and the 24-month warranty gives huge peace of mind. Highly recommend Chris and his crew.",
    tag: "Brakes",
    verifiedCustomer: true
  },
  {
    id: "rev-6",
    author: "Sarah L.",
    rating: 5,
    date: "5 months ago",
    source: "Google Reviews",
    vehicle: "2015 BMW 328i",
    comment: "A lot of independent shops in the Upstate refuse to touch German cars or charge dealership prices. MasterTech diagnosed my oil filter housing leak and cooling system issue flawlessly. Fast, affordable, and respectful.",
    tag: "Diagnostics",
    verifiedCustomer: true
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: "offer-1",
    title: "Major Service & Repair Savings",
    code: "MASTER25",
    discount: "$25 OFF",
    description: "Save $25 on any maintenance or mechanical repair of $150 or more.",
    terms: "Valid on parts & labor. Cannot be combined with other offers. One coupon per vehicle.",
    expiry: "Active This Month"
  },
  {
    id: "offer-2",
    title: "Brake Safety Package",
    code: "BRAKE40",
    discount: "$40 OFF",
    description: "Get $40 off complete front or rear brake pad & rotor replacement.",
    terms: "Includes premium ceramic pads, rotor replacement/turn, and brake fluid inspection.",
    expiry: "Active This Month"
  },
  {
    id: "offer-3",
    title: "Complimentary Scan with Repair",
    code: "DIAGFREE",
    discount: "FREE SCAN",
    description: "Computer trouble code retrieval and basic diagnostic fee credited toward repair if completed with us.",
    terms: "Applies to repairs approved following diagnosis.",
    expiry: "Ongoing Shop Special"
  },
  {
    id: "offer-4",
    title: "Full Synthetic Oil Care Special",
    code: "SYNTH15",
    discount: "$15 OFF",
    description: "Save $15 on Full Synthetic Oil Change with complimentary 21-point digital inspection.",
    terms: "Includes up to 5 quarts of oil and premium oil filter. Specialty filters extra.",
    expiry: "Active This Month"
  }
];

export const FAQS = [
  {
    question: "Where is MasterTech Auto Repair located in Spartanburg?",
    answer: "We are located at 151 S Forest St, Spartanburg, SC 29306. We are centrally located near downtown Spartanburg, just minutes from East Main Street and Pine Street, making it easy to drop your car off before work."
  },
  {
    question: "What are your business hours?",
    answer: "We are open Monday through Friday from 8:00 AM to 5:30 PM. We are closed on Saturday and Sunday so our technicians can spend time with their families. However, our secure 24/7 key drop box is always available for weekend and early-morning drop-offs!"
  },
  {
    question: "Do you offer after-hours drop-off and pickup?",
    answer: "Yes! We have a secure after-hours Key Drop Box located right near our main entrance at 151 S Forest St. Simply fill out the drop envelope with your contact details and keys, and drop it in the lockbox. We will inspect your car first thing on the next business morning."
  },
  {
    question: "What does it mean that MasterTech is RepairPal Certified and CARFAX Top-Rated?",
    answer: "RepairPal Certified shops undergo rigorous audits of technician qualifications, diagnostic tooling, customer satisfaction, and guarantee fair pricing backed by a nationwide warranty. CARFAX Top-Rated status is awarded strictly based on verified 5-star customer reviews from real vehicle owners."
  },
  {
    question: "Do you work on foreign, European, or hybrid/electric vehicles?",
    answer: "Yes. Our master technicians service all domestic makes (Ford, Chevy, Dodge, GMC, Chrysler, Jeep) as well as Asian imports (Toyota, Honda, Subaru, Hyundai, Kia, Nissan, Lexus, Acura) and European brands (BMW, Audi, Volkswagen, Mercedes-Benz, Volvo), as well as hybrid and electric models."
  },
  {
    question: "Will you call me before performing any work?",
    answer: "100% yes. We strictly operate on a 'No Surprises' policy. We inspect the vehicle, send digital photos or videos of our findings directly to your phone, explain the repair options and exact prices, and obtain your explicit approval before turning a single wrench."
  },
  {
    question: "What warranty do you provide on repairs?",
    answer: "Most qualifying mechanical repairs and parts installed by MasterTech Auto Repair carry a 24-Month / 24,000-Mile warranty for your peace of mind."
  }
];
