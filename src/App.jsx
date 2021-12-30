import { Header } from "./components/organism/Header"
import { Hero } from "./components/organism/Hero"
import { Profile } from "./components/organism/Profile";
import { Skills } from "./components/organism/Skills";
import { Works } from "./components/organism/Works";
import { Contact } from "./components/organism/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Profile/>
        <Skills />
        <Works />
        <Contact />  
    </div>
  );
}

export default App;
