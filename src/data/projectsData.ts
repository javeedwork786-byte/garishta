// This is the final, comprehensive database for all projects.
// - Red Gold & Raigiri highlights are transcribed from the latest images.
// - Elite County & Elite Homes have new, professionally written content.
// - All map paths are corrected to the new '/maps/' folder.

export interface Project {
  id: string;
  name: string;
  location: string;
  launchDate: string;
  coverImage: string;
  description: string;
  heroImage: string;
  locationMapImage?: string;
  projectHighlights: string[];
  locationHighlights: string[];
  galleryImages: { url: string; alt: string }[];
}

export const projectsData: Project[] = [
  // 1. elite Raigiri
  {
    id: 'elite-raigiri',
    name: "Elite Raigiri",
    location: "Raigiri, Yadadri",
    launchDate: "2019-12-08",
    coverImage: "/elite_reigir/Raigir2.jpeg",
    description: "YTDA approved, 100% Vastu compliant residential plots in a gated community.",
    heroImage: "/elite_reigir/Raigir2.jpeg",
    locationMapImage: "/maps/raigiri.png",
    projectHighlights: [
      "YTDA Approved Gated Community",
      "100% Vastu Residential Plots",
      "Clear Title & Spot Registration",
      "40' & 30' BT Roads",
      "Majestic Entrance Gate",
      "Electricity with street lights",
      "Beautifully landscaped garden",
      "Underground Drainage system",
    ],
    locationHighlights: [
      "Very close to Raigir Town",
      "1km from Hyderabad-Warangal Highway",
      "2nd bit from Raigiri Mothkur Highway",
      "Beside Shree Vasupjya Swami Jain Temple",
      "5 min drive from Yadadri Temple & Temple City",
      "Very near to Yadadri Railway Station & Proposed MMTS Station",
      "15 drive from AIIMS Hospitals",
      "Very close to Regional Ring Road",
    ],
    galleryImages: [
        { url: "/elite_reigir/Raigir3.jpeg", alt: "Site Image 1" },
        { url: "/elite_reigir/Raigir4.jpeg", alt: "Site Image 2" }
    ],
  },
  // 2. elite city
  {
    id: 'elite-city',
    name: "Elite City",
    location: "Penchikalapahad, Bhongir",
    launchDate: "2021-03-07",
    coverImage: "/Elitecity/elitecity1.jpg",
    description: "A premier HMDA approved gated community facing a 100 feet road.",
    heroImage: "/Elitecity/elitecity1.jpg",
    locationMapImage: "/maps/elitecityproject.png",
    projectHighlights: [
      "HMDA Approved Gated Community", "100 Feet Road Facing Venture", "Majestic Entrance Gate Arch", "100% Vastu Residential Plots", "Clear Title & Spot Registration", "Underground Drainage System", "Avenue Plantation", "Beautifully Landscaped Garden", "Rainwater Harvesting Pits",
    ],
    locationHighlights: [
      "Very Close to Regional Ring Road (RRR)", "Inside of proposed Bhongir Ring Road", "Less than 1km Hyderabad-Warangal Highway", "5 min away from District Collectorate & Govt offices", "5 min Drive From Bhongir Town", "10 min Drive From Yadadri Temple", "20 min away from AIIMS Hospital",
    ],
    galleryImages: [
        { url: "/Elitecity/elitecity2.jpg", alt: "Elite City View" },
        { url: "/Elitecity/elitecity3.jpg", alt: "Elite City Layout" }
    ],
  },
  // 3. Gid Farms
  {
    id: 'gid-farms-veeravvelly',
    name: "Gid Farms",
    location: "Veeravvelly",
    launchDate: "2022-02-21",
    coverImage: "/Gid Farms _veeravvelly/veeravvelly1.jpg",
    description: "Spacious farm plots perfect for a peaceful and green retreat.",
    heroImage: "/Gid Farms _veeravvelly/veeravvelly1.jpg",
    locationMapImage: "/maps/GiDfarms.png",
    projectHighlights: [
      "Farm Plots with Fruit Plantations", "Natural Environment", "Reserved Company Guest House", "Ideal for Weekend Homes"
    ],
    locationHighlights: [
      "Away from City Pollution", "Located at Veeravvelly", "Serene Atmosphere"
    ],
    galleryImages: [
        { url: "/Gid Farms _veeravvelly/veeravvelly2.jpg", alt: "Farm Plot View" },
        { url: "/Gid Farms _veeravvelly/veeravvelly3.jpg", alt: "Lush Greenery" }
    ],
  },
  // 4. elite home's
  {
    id: 'elite-homes-vangapally',
    name: "Elite Homes",
    location: "Vangapally",
    launchDate: "2023-12-21",
    coverImage: "/Elite homes_vangapally/vangapally3.jpeg",
    description: "DTCP approved residential plots designed for modern family living.",
    heroImage: "/Elite homes_vangapally/vangapally3.jpeg",
    locationMapImage: "",
    projectHighlights: [
      "DTCP Approved Layout with Clear Title",
      "All 33' & 40' Feet Black Top Roads",
      "Designed for Modern Family Living",
      "Ready for Immediate Construction",
      "Underground Drainage & Electricity with Streetlights",
      "Designated Green Spaces and Park Area",
    ],
    locationHighlights: [
      "Strategically located in the developing Vangapally region",
      "Excellent connectivity to the Hyderabad-Warangal Highway",
      "Close proximity to local schools, markets, and essentials",
      "Peaceful, pollution-free residential environment",
      "High potential for property appreciation",
    ],
    galleryImages: [
        { url: "/Elite homes_vangapally/vangapally2.jpeg", alt: "Model Villa Exterior" },
        { url: "/Elite homes_vangapally/vangapally4.jpeg", alt: "Interior Living Space" }
    ],
  },
  // 5. red gold
  {
    id: 'red-gold-motakondur',
    name: "Red Gold",
    location: "Motakondur",
    launchDate: "2024-06-23",
    coverImage: "/Red gold_motakondur/motakondur2.jpeg",
    description: "A 10-acre farmland venture offering a resort and high appreciation potential.",
    heroImage: "/Red gold_motakondur/motakondur2.jpeg",
    locationMapImage: "/maps/redgold.png",
    projectHighlights: [
      "Total 10 acres land extent",
      "30' and 25' feet roads",
      "Drip Irrigation",
      "Red Sandal plantation",
      "4 BHK Resort with Swimming Pool",
    ],
    locationHighlights: [
      "Mandal Head Quarter Beside",
      "Yadadri to Motakondur Bus Way",
      "10 mins drive from Warangal Highway (NH 164)",
      "Near by Sri Lakshmi Narsimha Swamy Temple, Yadagirigutta",
      "15 mins to World Famous Jain Temple at Kolanpaka",
      "Proposed Bhongir Industrial Area (in 500 acres)",
      "AIIMS Medical University 1000 Beds Hospital",
      "35 mins Drive from ORR Ghatkesar",
    ],
    galleryImages: [
        { url: "/Red gold_motakondur/motakondur3.jpeg", alt: "Investment Plots" },
        { url: "/Red gold_motakondur/motakondur4.jpeg", alt: "Infrastructure" }
    ],
  },
  // 6. elite County
  {
    id: 'elite-county-vangapalli',
    name: "Elite County",
    location: "Vangapalli",
    launchDate: "2025-07-21",
    coverImage: "/Elite County_vangapalli/country5.jpeg",
    description: "Premium residential plots and villas offering a serene lifestyle.",
    heroImage: "/Elite County_vangapalli/country5.jpeg",
    locationMapImage: "",
    projectHighlights: [
      "Premium Gated Community Layout",
      "Grand Entrance Arch with 24/7 Security",
      "Wide 60' & 40' Black Top Roads",
      "Avenue Plantation and Landscaped Gardens",
      "Clubhouse with Modern Amenities",
      "Clear Title and 100% Vastu Compliant",
    ],
    locationHighlights: [
      "Prime location near the Vangapalli growth corridor",
      "Direct access to the main Hyderabad-Warangal Highway",
      "Surrounded by educational institutions and upcoming ventures",
      "A serene environment ideal for a premium lifestyle",
      "Excellent investment with high future growth potential",
    ],
    galleryImages: [
        { url: "/Elite County_vangapalli/country4.jpeg", alt: "Project Layout" },
        { url: "/Elite County_vangapalli/country6.jpeg", alt: "Greenery and Landscaping" }
    ],
  },
];