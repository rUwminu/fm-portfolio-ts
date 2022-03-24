// Fiber Img
import FiberMain from '../CodeWellImage/Fiber/FiberMain.jpg'
import FiberMobile from '../CodeWellImage/Fiber/FiberMobile.jpg'
import FiberLogin from '../CodeWellImage/Fiber/FiberLogin.jpg'
// Chirp Img
import ChirpMain from '../CodeWellImage/Chirp/ChirpMain.jpg'
import ChirpMobile from '../CodeWellImage/Chirp/ChirpMobile.jpg'
// Snipper Img
import SnipperMain from '../CodeWellImage/Snipper/SnipperMain.jpg'
import SnipperMobile from '../CodeWellImage/Snipper/SnipperMobile.jpg'
// Netflix clone
import NCRegister from '../SelfDev/NetflixClone/NCRegister.png'
import NCCreate from '../SelfDev/NetflixClone/NCCreate.png'
import NCHome from '../SelfDev/NetflixClone/NCHome.png'
import NCList from '../SelfDev/NetflixClone/NCList.png'
// Gallery Live View
import GlvMain from '../SelfDev/GLV/glvMain.png'
import GlvView from '../SelfDev/GLV/glvView.png'
import GlvRes from '../SelfDev/GLV/glvRes.png'
// Foodie
import FaMain from '../SelfDev/foodapp/mainFA.png'
import FaMenu from '../SelfDev/foodapp/menuFA.png'
import FaRes from '../SelfDev/foodapp/resFA.png'
import FaCart from '../SelfDev/foodapp/cartFA.png'
import FaSet from '../SelfDev/foodapp/settingFA.png'
import FaLogin from '../SelfDev/foodapp/loginFA.png'
// Shoppingify
import SfMain from '../SelfDev/Shoppingify/MainPage.png'
import SfMainRes from '../SelfDev/Shoppingify/MainPageRes.png'
import SfHis from '../SelfDev/Shoppingify/HisPage.png'
import SfHisRes from '../SelfDev/Shoppingify/HisPageRes.png'
import SfHisView from '../SelfDev/Shoppingify/HisViewPage.png'
import SfHisViewRes from '../SelfDev/Shoppingify/HisViewPageRes.png'

type DummyData = {
  id: number
  name: string
  idea: string
  type: string
  isFeatured: boolean
  links: string
  image: Array<string>
  tools: Array<string>
  description: string
  instruction: string
}

export const ProjectData: Array<DummyData> = [
  {
    id: 1,
    name: 'Chirp Landing Page',
    idea: 'CodeWell',
    type: 'frontend',
    isFeatured: true,
    links: 'https://ruwminu.github.io/chip-clone-cw/',
    image: [ChirpMain, ChirpMobile],
    tools: ['React', 'Styled Component', 'Tailwindcss'],
    description:
      'Learning on creating modern design layout with fully responsive website for both mobile and desktop view',
    instruction: '',
  },
  {
    id: 2,
    name: 'Fiber Landing Page',
    idea: 'CodeWell',
    type: 'frontend',
    isFeatured: false,
    links: 'https://ruwminu.github.io/fiber-clone-cw/',
    image: [FiberMain, FiberMobile, FiberLogin],
    tools: ['React', 'Styled Component', 'Tailwindcss'],
    description:
      'Learning on creating modern design layout with fully responsive website for both mobile and desktop view',
    instruction: '',
  },
  {
    id: 3,
    name: 'Foodie Food Ordering App',
    idea: 'Myself',
    type: 'frontend',
    isFeatured: true,
    links: 'https://ruwminu.github.io/food-ordering-app-client/',
    image: [FaMain, FaLogin, FaMenu, FaRes, FaCart, FaSet],
    tools: ['React', 'Redux', 'Styled Component', 'Tailwindcss'],
    description:
      'Mock FullStack project development. Mock up API data, focusing on Frontend development and general web app function.',
    instruction: 'https://github.com/rUwminu/food-ordering-app-client',
  },
  {
    id: 4,
    name: 'Snipper Landing Page',
    idea: 'CodeWell',
    type: 'frontend',
    isFeatured: false,
    links: 'https://ruwminu.github.io/snipper-clone-cw/',
    image: [SnipperMain, SnipperMobile],
    tools: ['React', 'Styled Component', 'Tailwindcss'],
    description:
      'Learning on creating modern design layout with fully responsive website for both mobile and desktop view',
    instruction: '',
  },
  {
    id: 5,
    name: 'Netflix Clone',
    idea: 'Lama Dev',
    type: 'fullstack',
    isFeatured: true,
    links: 'https://ruwminu.github.io/netflix-clone/',
    image: [NCRegister, NCCreate, NCHome, NCList],
    tools: [
      'React',
      'Material-UI',
      'Styled Component',
      'Tailwindcss',
      'MongoDB',
      'Express',
    ],
    description:
      'To practice fullstack development of a website, cloning other amazing website is a way for me to learnd',
    instruction: 'https://github.com/rUwminu/netflix-clone',
  },
  {
    id: 6,
    name: 'Gallery Live View',
    idea: 'Myself',
    type: 'frontend',
    isFeatured: true,
    links: 'https://ruwminu.github.io/gallery-live-view/',
    image: [GlvMain, GlvView, GlvRes],
    tools: ['React', 'Material-UI', 'Styled Component', 'Tailwindcss'],
    description:
      'This is an interest project, just playing around with the idea of displaying an product in intersting way',
    instruction: 'https://github.com/rUwminu/gallery-live-view',
  },
  {
    id: 7,
    name: 'Shopingify',
    idea: 'DevChanllenge.io',
    type: 'fullstack',
    isFeatured: true,
    links: 'https://ruwminu.github.io/shopping-list-client/',
    image: [SfMain, SfHis, SfHisView, SfMainRes, SfHisRes, SfHisViewRes],
    tools: [
      'React',
      'Styled Component',
      'Tailwindcss',
      'Material-UI',
      'Apollo-Server',
      'Graphql',
      'MongoDB',
    ],
    description:
      'A challenge project idea from DevChallenge.io. This project challenge us on unique horizontal UI design, data formation and dynamic data update in backend.',
    instruction: 'https://github.com/rUwminu/shopping-list-fullstack',
  },
]
