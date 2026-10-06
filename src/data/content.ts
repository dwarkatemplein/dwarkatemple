export type Service = {
  title: string;
  description: string;
  to: string;
};

export const services: Service[] = [
  {
    title: "Dwarka Tour Packages",
    description: "Explore Dwarka and nearby pilgrimage destinations with customized itineraries.",
    to: "/tour-packages",
  },
  {
    title: "Taxi & Cab Booking",
    description: "Private AC cars, family taxis, and group transportation.",
    to: "/taxi-service",
  },
  {
    title: "Hotels & Resorts",
    description: "Accommodation assistance for different budgets and travel needs.",
    to: "/hotel-booking",
  },
  {
    title: "Dharamshala Booking",
    description: "Find suitable budget and pilgrimage accommodation options.",
    to: "/dharamshala-booking",
  },
  {
    title: "Local Sightseeing",
    description: "Explore Dwarka's temples, ghats, beaches, and nearby attractions.",
    to: "/sightseeing",
  },
  {
    title: "Bus & Train Assistance",
    description: "Get help planning your journey and finding official reservation channels.",
    to: "/travel-guide/how-to-reach-dwarka",
  },
];

export type Package = {
  slug: string;
  href: string;
  title: string;
  duration: string;
  travellers: string;
  destinations: string;
  inclusions: string;
  intro: string;
  itinerary: { day: string; detail: string }[];
};

export const packages: Package[] = [
  {
    slug: "dwarka-1-day",
    href: "/tour-packages/dwarka-1-day",
    title: "1 Day Dwarka Local Sightseeing",
    duration: "1 Day",
    travellers: "Families, senior citizens, short-stay visitors",
    destinations: "Dwarkadhish Temple, Gomti Ghat, Sudama Setu, Rukmini Devi Temple, Nageshwar",
    inclusions: "Private vehicle for local sightseeing, driver, fuel, day-long assistance",
    intro:
      "A relaxed single day covering Dwarka's main darshan points with a private vehicle, planned around temple timings so you are not rushed.",
    itinerary: [
      {
        day: "Morning",
        detail:
          "Pickup from your hotel, railway station, or bus stand. Dwarkadhish Temple darshan followed by Gomti Ghat and Sudama Setu.",
      },
      {
        day: "Afternoon",
        detail:
          "Rest and meals at your convenience, then Rukmini Devi Temple and Gopi Talav as time allows.",
      },
      {
        day: "Evening",
        detail:
          "Nageshwar Jyotirlinga darshan, optional Shivrajpur Beach stop, and drop back at your stay.",
      },
    ],
  },
  {
    slug: "dwarka-2-days",
    href: "/tour-packages/dwarka-2-days",
    title: "2 Days Dwarka Darshan",
    duration: "2 Days / 1 Night",
    travellers: "Families and couples wanting an unhurried darshan",
    destinations: "Dwarka temples, Bet Dwarka, Nageshwar, Shivrajpur Beach",
    inclusions: "Private vehicle, accommodation assistance, sightseeing plan, travel support",
    intro:
      "Two days let you attend temple aartis without hurrying, and still keep Bet Dwarka and the coastline in your plan.",
    itinerary: [
      {
        day: "Day 1",
        detail:
          "Arrival and check-in assistance. Dwarkadhish Temple darshan, Gomti Ghat, Sudama Setu and the evening aarti.",
      },
      {
        day: "Day 2",
        detail:
          "Bet Dwarka by ferry, Nageshwar Jyotirlinga, Rukmini Devi Temple, and a Shivrajpur Beach stop before departure.",
      },
    ],
  },
  {
    slug: "dwarka-somnath",
    href: "/tour-packages/dwarka-somnath",
    title: "Dwarka & Somnath Tour",
    duration: "4 Days / 3 Nights",
    travellers: "Pilgrim families and groups combining two Jyotirlinga circuits",
    destinations: "Dwarka, Bet Dwarka, Nageshwar, Porbandar, Somnath",
    inclusions: "Private vehicle for the full route, accommodation assistance, itinerary planning",
    intro:
      "The most requested pilgrimage route in Saurashtra, planned so travel hours stay comfortable for elders and children.",
    itinerary: [
      {
        day: "Day 1",
        detail: "Arrival in Dwarka, check-in assistance, Dwarkadhish darshan and Gomti Ghat.",
      },
      {
        day: "Day 2",
        detail: "Bet Dwarka ferry darshan, Nageshwar Jyotirlinga, Rukmini Devi Temple.",
      },
      {
        day: "Day 3",
        detail: "Drive to Somnath via Porbandar with a Kirti Mandir and Sudama Temple stop.",
      },
      { day: "Day 4", detail: "Somnath darshan and departure to your onward station or airport." },
    ],
  },
  {
    slug: "dwarka-gujarat",
    href: "/tour-packages/dwarka-gujarat",
    title: "Customized Gujarat Pilgrimage Tour",
    duration: "5 to 9 Days, planned to your dates",
    travellers: "Groups, extended families, and travellers wanting a full Gujarat route",
    destinations: "Dwarka, Somnath, Gir, Diu, Porbandar, Ahmedabad and more on request",
    inclusions: "Route planning, vehicle arrangement, accommodation assistance across budgets",
    intro:
      "Tell us your arrival city, dates and pace, and we prepare a Gujarat route that fits your group instead of a fixed template.",
    itinerary: [
      { day: "Stage 1", detail: "Dwarka darshan circuit including Bet Dwarka and Nageshwar." },
      { day: "Stage 2", detail: "Porbandar and Somnath along the coastal route." },
      { day: "Stage 3", detail: "Gir and Diu, or Ahmedabad and Saurashtra additions on request." },
      { day: "Stage 4", detail: "Departure transfer from the city of your choice." },
    ],
  },
];

export const packageHighlights = [
  {
    title: "1 Day Dwarka Local Sightseeing",
    duration: "1 Day",
    href: "/tour-packages/dwarka-1-day",
  },
  { title: "2 Days Dwarka Darshan", duration: "2 Days", href: "/tour-packages/dwarka-2-days" },
  { title: "3 Days Dwarka & Bet Dwarka", duration: "3 Days", href: "/tour-packages" },
  { title: "4 Days Dwarka & Somnath", duration: "4 Days", href: "/tour-packages/dwarka-somnath" },
  {
    title: "5 Days Dwarka, Somnath & Diu",
    duration: "5 Days",
    href: "/tour-packages/dwarka-gujarat",
  },
  {
    title: "Customized Gujarat Pilgrimage Tour",
    duration: "Flexible",
    href: "/tour-packages/dwarka-gujarat",
  },
];

export type Destination = {
  name: string;
  summary: string;
  time: string;
  to?: string;
};

export const destinations: Destination[] = [
  {
    name: "Dwarkadhish Temple",
    summary: "The main darshan point in Dwarka city, beside the Gomti creek.",
    time: "1 to 2 hours, longer during festival days",
    to: "/temple-darshan",
  },
  {
    name: "Bet Dwarka",
    summary: "An island shrine reached by ferry from Okha, about 30 km from Dwarka.",
    time: "Half day including the ferry ride",
    to: "/bet-dwarka",
  },
  {
    name: "Nageshwar Jyotirlinga",
    summary: "A Jyotirlinga shrine on the Dwarka to Bet Dwarka road.",
    time: "45 minutes to 1 hour",
    to: "/nageshwar-temple",
  },
  {
    name: "Rukmini Devi Temple",
    summary: "A separate temple a short drive outside the city.",
    time: "30 to 45 minutes",
  },
  {
    name: "Gomti Ghat",
    summary: "Steps on the Gomti creek beside the main temple.",
    time: "30 minutes",
  },
  {
    name: "Sudama Setu",
    summary: "A pedestrian bridge across the creek, a short walk from the temple.",
    time: "30 minutes",
  },
  {
    name: "Shivrajpur Beach",
    summary: "A Blue Flag certified beach near Dwarka with clear shallow water.",
    time: "1 to 2 hours",
  },
  {
    name: "Gopi Talav",
    summary: "A quiet pond site known for its yellow gopi chandan soil.",
    time: "45 minutes",
  },
  {
    name: "Porbandar",
    summary: "Kirti Mandir and Sudama Temple, on the way towards Somnath.",
    time: "Half day, usually en route",
  },
  {
    name: "Somnath",
    summary: "A Jyotirlinga temple on the Saurashtra coast, commonly paired with Dwarka.",
    time: "Overnight stay recommended",
  },
];

export type Guide = {
  title: string;
  summary: string;
  read: string;
  href: string;
};

export const guides: Guide[] = [
  {
    title: "How to Reach Dwarka",
    summary: "Train, bus, road and nearest airport options, with practical arrival tips.",
    read: "5 min read",
    href: "/travel-guide/how-to-reach-dwarka",
  },
  {
    title: "Best Time to Visit Dwarka",
    summary: "Season by season weather, festival periods and crowd expectations.",
    read: "4 min read",
    href: "/travel-guide/best-time-to-visit",
  },
  {
    title: "Dwarka Itinerary: How Many Days Do You Need?",
    summary: "Sample 1, 2 and 3 day plans including Bet Dwarka and Nageshwar.",
    read: "6 min read",
    href: "/travel-guide/dwarka-itinerary",
  },
  {
    title: "Dwarka to Somnath Travel Guide",
    summary: "Route options, approximate driving time and the usual stops on the way.",
    read: "5 min read",
    href: "/travel-guide/dwarka-to-somnath",
  },
  {
    title: "Dwarka Local Transport Guide",
    summary: "Getting around the city, from the railway station to the temple and beyond.",
    read: "4 min read",
    href: "/travel-guide/dwarka-local-transport",
  },
];

export const vehicles = [
  {
    name: "Sedan",
    seats: "4 passengers",
    luggage: "2 medium bags",
    note: "AC, suited to couples and small families",
  },
  {
    name: "SUV",
    seats: "6 passengers",
    luggage: "3 medium bags",
    note: "AC, comfortable on outstation routes",
  },
  {
    name: "Maruti Ertiga",
    seats: "6 passengers",
    luggage: "2 to 3 bags",
    note: "AC, popular for family sightseeing",
  },
  {
    name: "Toyota Innova",
    seats: "6 to 7 passengers",
    luggage: "3 bags",
    note: "AC, extra legroom for elders",
  },
  {
    name: "Innova Crysta",
    seats: "6 to 7 passengers",
    luggage: "3 to 4 bags",
    note: "AC, preferred for long routes",
  },
  {
    name: "Tempo Traveller",
    seats: "9 to 17 passengers",
    luggage: "Group luggage space",
    note: "AC, for group pilgrimage",
  },
  {
    name: "Bus",
    seats: "20 passengers and above",
    luggage: "Boot storage",
    note: "Arranged on request for large groups",
  },
];

export const routesFromDwarka = [
  "Dwarka Local Sightseeing",
  "Dwarka to Bet Dwarka",
  "Dwarka to Nageshwar",
  "Dwarka to Porbandar",
  "Dwarka to Somnath",
  "Dwarka to Rajkot",
  "Dwarka to Ahmedabad",
  "Dwarka to Diu",
];

export const faqs = [
  {
    q: "How can I book a taxi in Dwarka?",
    a: "Send your pickup point, date, time and sightseeing plan through the taxi inquiry form or on WhatsApp. We share the available vehicle options and charges before anything is confirmed.",
  },
  {
    q: "Can I book a hotel and taxi together?",
    a: "Yes. Mention both in one inquiry and we plan the stay and the vehicle together so your sightseeing timings match your check-in.",
  },
  {
    q: "Do you offer Dwarka and Somnath tour packages?",
    a: "Yes, the Dwarka and Somnath route is our most requested itinerary and can be extended to Porbandar, Gir or Diu.",
  },
  {
    q: "Can I customize the itinerary?",
    a: "Every plan is prepared for your dates, group size and pace. Tell us what you want to add or remove.",
  },
  {
    q: "Do you assist with dharamshala accommodation?",
    a: "We help you understand the options and assist with requests where the property allows it. Allotment always rests with the dharamshala management.",
  },
  {
    q: "Can senior citizens request a relaxed itinerary?",
    a: "Yes. We plan fewer stops per day, shorter driving stretches and rest breaks around temple timings.",
  },
  {
    q: "Can I book a taxi for Bet Dwarka and Nageshwar?",
    a: "Yes, this is a common half-day or full-day trip and can be combined with Shivrajpur Beach.",
  },
  {
    q: "Can you help with bus and train reservations?",
    a: "We guide you on suitable trains and buses and point you to the official reservation channels. We do not issue tickets ourselves.",
  },
  {
    q: "How do I confirm a booking?",
    a: "After you approve the quotation and inclusions, we confirm with the supplier and share the confirmation details with you. An inquiry on its own is not a confirmed booking.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellation terms depend on the hotel, transport operator or supplier involved. The applicable terms are shared in writing with your quotation before payment.",
  },
];
