import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer/Footer.tsx';
import { useEffect, useState } from 'react';
import GITHUB from "./assets/github.svg"
import INSTAGRAM from "./assets/instagram-logo.svg"
import X from "./assets/x.svg"

import './App.css'
import PageContainer from './containers/PageContainer.tsx';

function App() {
  
  const sections: string[] = ["Home", "Section 2", "Section 3", "Section 4"];
  
  const navbarProps = {
    urlLogo: "src/assets/Logo.svg",
    altLogo: "Alternative text for your logo",
    fontLogo: "Roboto",
    textLogo: "Your Brand",
    sections
  } as const;

  const footerProps = {
    year: 2024,
    brandName: "Your brand",
    licence: "All Rights Reserved",
    urlLogo: navbarProps.urlLogo,
    altLogo: navbarProps.altLogo,
    footerContents: [
      {"Learn More": ["About Your Brand", "Press Releases", "Environment", "Jobs", "Privacy Policy"]},
      {"Contact Us": ["Email: your@email.com", "+91 589 5522"]}
    ],
    socialTitle: "Social",
    socialInfo: [
      {
      socialLink: "https://github.com/",
      socialDescription: "Github logo" ,
      socialIcon: GITHUB
    },
      {
      socialLink: "https://x.com/",
      socialDescription: "X logo" ,
      socialIcon: X
    },
      {
      socialLink: "https://instagram.com/",
      socialDescription: "Github" ,
      socialIcon: INSTAGRAM
    }
  ]
  } as const;

  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleClick = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  const handleScroll = ()=>{
    const offsets = sections.map( section => {
      const element = document.getElementById(section);
      return {
        section,
        offset: element?.getBoundingClientRect().top || 0,
      };
    });
    const visibleSection = offsets.find(offset => offset.offset >= 0 && offset.offset <= window.innerHeight / 2)

    if (visibleSection) {
      setActiveSection(visibleSection.section)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  return (
    <>
      <Navbar {...navbarProps} activeSection={activeSection} onClick={handleClick} />
      <PageContainer sections={sections} />
      <Footer {...footerProps} />
    </>
  )
}

export default App
