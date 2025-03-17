import "./assets/styles/main.module.css"
import Header from './components/Header';
import Description from './components/Description';
import Button from './components/Button';
import Directions from './components/Directions';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <Description/>
     <Directions/>
     <Contacts/>
     <Button/>
     <Footer/>
    </div>
  );
}

export default App;
