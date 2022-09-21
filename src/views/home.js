import Landing from '../components/home/landing.js';
import Navbar from '../components/navbar.js';
import { FiInstagram, FiGithub } from "react-icons/fi";
import { BsSpotify } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import navStyles from '../components/css-modules/navbar.module.css';

function Home() {
  return (
    <div className="App">
        <Navbar 
          logo_text="hasan." 
          navArr={[
            {text: 'projects', linkTo: 'projects'}, 
            {text: 'about', linkTo: 'about'}, 
            {text: 'resume', linkTo: 'resume'}
          ]}
          socials={[
            {link: '', render: <FiInstagram className={navStyles.social_icon}/>},
            {link: '', render: <FaLinkedinIn className={navStyles.social_icon}/>},
            {link: '', render: <FiGithub className={navStyles.social_icon}/>},
            {link: '', render: <BsSpotify className={navStyles.social_icon}/>}
          ]} 
        />
        <Landing 
          heading="Design. Code. Music." 
          paras={[
            <span>Hasan Khalid is a New-York based developer, designer and electronic music producer currently pursuing his masters at the Parsons school of design</span>,
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</span>
          ]}
        />
    </div>
  );
}

export default Home;
