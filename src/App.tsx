import Navbar from './components/Navbar/Navbar.tsx';
import { useEffect, useState } from 'react';

import './App.css'

function App() {
  
  const sections: string[] = ["Section 1", "Section 2", "Section 3", "Section 4"];
  
  const navbarProps = {
    urlLogo: "src/assets/Logo.svg",
    altLogo: "Alternative text for your logo",
    fontLogo: "Roboto",
    textLogo: "Logo",
    sections
  };
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
    console.table(offsets)
    console.log("innerHeigt: ",window.innerHeight /2)
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
    </>
  )
}

export default App
