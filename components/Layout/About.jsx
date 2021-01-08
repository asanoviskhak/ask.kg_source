import AboutC from './components/AboutC/AboutC'
import Header from './components/Header/Header';
import Script from './components/Misc/Script'

export default function About() {
  
  Script('assets/js/script.js');
    return (
      <>
        <Header/>
        <AboutC/>
      </>
    )
}
