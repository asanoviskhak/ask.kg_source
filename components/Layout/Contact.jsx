import ContactsC from './components/ContactsC/ContactsC'
import Header from './components/Header/Header';
import Script from './components/Misc/Script'

export default function Contacts() {
  Script('assets/js/script.js');
    return (
      <>
        <Header/>
        <ContactsC/>
      </>
    )
}
