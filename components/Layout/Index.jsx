
import Header from './components/Header/Header';
import IndexC from './components/IndexC/IndexC'
import Script from './components/Misc/Script'

export default function Index() {
  
  Script('assets/js/script.js');
  
 
    return (
        <>
          <Header/>
          <IndexC/>
        </>
    )
}
