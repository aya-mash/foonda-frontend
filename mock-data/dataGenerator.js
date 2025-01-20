import { writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";

const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];
const getRandomSubset = (array, size) =>
  [...array].sort(() => 0.5 - Math.random()).slice(0, size);

const DEFAULT_COUNT = 10000;

const universities = [
  "University of Cape Town",
  "University of the Witwatersrand",
  "Stellenbosch University",
  "University of Pretoria",
  "University of KwaZulu-Natal",
  "Rhodes University",
  "University of the Western Cape",
  "North-West University",
  "University of Johannesburg",
  "Nelson Mandela University",
  "University of Fort Hare",
  "University of Limpopo",
  "Walter Sisulu University",
  "University of Venda",
  "Central University of Technology",
  "Durban University of Technology",
  "Tshwane University of Technology",
  "Vaal University of Technology",
  "Mangosuthu University of Technology",
];

const tvetColleges = [
  "Boland College",
  "Buffalo City TVET College",
  "Capricorn College",
  "Central Johannesburg College",
  "Coastal KZN TVET College",
  "College of Cape Town",
  "Eastcape Midlands College",
  "Ehlanzeni TVET College",
  "Ekurhuleni East TVET College",
  "Ekurhuleni West TVET College",
  "Elangeni TVET College",
  "Esayidi TVET College",
  "False Bay College",
  "Flavius Mareka TVET College",
  "Gert Sibande TVET College",
  "Goldfields TVET College",
  "Ikhala TVET College",
  "Ingwe TVET College",
  "King Hintsa TVET College",
  "King Sabata Dalindyebo TVET College",
];

const interestsList = [
  "Medicine",
  "Business Management",
  "Education",
  "Engineering",
  "Law",
  "Technology",
  "Art",
  "Science",
  "Agriculture",
];
const educationLevelsList = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Diploma",
  "Certificate",
];
const skillsList = [
  "Critical Thinking",
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Creativity",
  "Adaptability",
];

const generateEntities = (names) =>
  names.map((name) => ({
    id: uuidv4(),
    name,
    createdAt: new Date().toISOString(),
  }));

const generateCareers = (interests, educationLevels, count = DEFAULT_COUNT) =>
  Array.from({ length: count }, (_, i) => ({
    id: uuidv4(),
    name: `Career ${i + 1}`,
    interestId: getRandomElement(interests).id,
    qualificationId: getRandomElement(educationLevels).id,
    description: "A promising career path.",
    minSalary: `R ${(Math.random() * 20000 + 20000).toFixed(2)}`,
    maxSalary: `R ${(Math.random() * 50000 + 70000).toFixed(2)}`,
    growthOpportunities: "High",
    createdAt: new Date().toISOString(),
  }));

const generateInstitutions = () =>
  [...universities, ...tvetColleges].map((name) => ({
    id: uuidv4(),
    name,
    location: `${name} Location`,
    type: universities.includes(name) ? "University" : "TVET College",
    website: `https://${name.replace(/\s+/g, "").toLowerCase()}.ac.za`,
    contactEmail: `info@${name.replace(/\s+/g, "").toLowerCase()}.ac.za`,
    createdAt: new Date().toISOString(),
  }));

const generateBursaries = (institutions, educationLevels, count = 200) =>
  Array.from({ length: count }, (_, i) => {
    const institution = getRandomElement(institutions);
    return {
      id: uuidv4(),
      name: `Bursary ${i + 1}`,
      eligibility: "Open to students with good academic records",
      fundingDetails: "Covers tuition and living expenses",
      requiredQualificationId: getRandomElement(educationLevels).id,
      institutionId: institution.id,
      institutionName: institution.name,
      applicationLink: "https://example-bursary-application.com",
      createdAt: new Date().toISOString(),
    };
  });

const generateUsers = (interests, educationLevels, count = 200) =>
  Array.from({ length: count }, () => ({
    id: uuidv4(),
    name: `User ${Math.random().toString(36).substring(7)}`,
    email: `user${Math.random().toString(36).substring(7)}@foonda.com`,
    role: getRandomElement(["Student", "Career Seeker", "Admin"]),
    location: "South Africa",
    skills: getRandomSubset(skillsList, 2),
    interestIds: getRandomSubset(interests, 2).map((i) => i.id),
    educationLevelId: getRandomElement(educationLevels).id,
    createdAt: new Date().toISOString(),
  }));

const interests = generateEntities(interestsList);
const educationLevels = generateEntities(educationLevelsList);
const institutions = generateInstitutions();
const careers = generateCareers(interests, educationLevels);
const bursaries = generateBursaries(institutions, educationLevels);
const users = generateUsers(interests, educationLevels);

const data = {
  interests,
  educationLevels,
  institutions,
  careers,
  bursaries,
  users,
};

writeFileSync("foonda_data.json", JSON.stringify(data, null, 4));
console.log("Foonda data generated and saved to 'foonda_data.json'");
