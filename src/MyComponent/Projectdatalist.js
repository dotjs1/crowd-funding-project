import image1 from './images/image1.jpg'
import image2 from './images/imag2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image5.jpg'
import image5 from './images/image4.jpg'
const projectData = [
  {
    id: 1,
    name: 'HMfinance',
    about: 'Empowering rural women entrepreneurs in India with microloans and mentorship.',
    image: image1,
    fundingTarget: 500000,
    remainingTarget: 100000,
    category: 'Finance',
    targetDays: 30,
    fundraiserName: 'Aarushi Mehta',
    previousCampaigns: 6,
    location: 'Jaipur, India'
  },
  {
    id: 2,
    name: 'GreenSprout',
    about: 'An environmental campaign promoting sustainable farming in Southeast Asia.',
    image: image2,
    fundingTarget: 300000,
    remainingTarget: 75000,
    category: 'Environment',
    targetDays: 45,
    fundraiserName: 'Nguyen Tran',
    previousCampaigns: 3,
    location: 'Ho Chi Minh City, Vietnam'
  },
  {
    id: 3,
    name: 'Code4Youth',
    about: 'Teaching coding and digital literacy to underserved youth across Africa.',
    image: image3,
    fundingTarget: 250000,
    remainingTarget: 50000,
    category: 'Education',
    targetDays: 60,
    fundraiserName: 'Kwame Mensah',
    previousCampaigns: 8,
    location: 'Accra, Ghana'
  },
  {
    id: 4,
    name: 'PKhealth',
    about: 'Providing mental health support and therapy workshops for LGBTQ+ teens.',
    image: image4,
    fundingTarget: 150000,
    remainingTarget: 20000,
    category: 'Medical',
    targetDays: 30,
    fundraiserName: 'Jordan Ramirez',
    previousCampaigns: 5,
    location: 'San Diego, USA'
  },
  {
    id: 5,
    name: 'ArtRise',
    about: 'A global campaign supporting refugee artists with tools, space, and exhibitions.',
    image: image5,
    fundingTarget: 200000,
    remainingTarget: 60000,
    category: 'Arts & Culture',
    targetDays: 40,
    fundraiserName: 'Leila Haddad',
    previousCampaigns: 2,
    location: 'Berlin, Germany'
  }
];
export default projectData;