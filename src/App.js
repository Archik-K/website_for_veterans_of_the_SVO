import "./assets/styles/main.module.css"
import Header from './components/Header';
import Description from './components/Description';
import Button from './components/Button';
import Directions from './components/Directions';
import Team from './components/Team';
import Footer from './components/Footer';
import Biography from './components/Biography'


function App() {
  return (
    <div className="App">
     <Header/>
     <Description/>
     <Directions/>
     <Team/>
     <Biography/>
     <Button/>
     <Footer/>
    </div>
  );
}

export default App;
