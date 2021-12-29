import { Header } from "./components/organism/Header"
import { Hero } from "./components/organism/Hero"
import { Profile } from "./components/organism/Profile";
import { Skill } from "./components/organism/Skill";
import { Works } from "./components/organism/Works";
import { Contact } from "./components/organism/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Profile />
        <Skill />
        <Works />
        <Contact />
    </div>
  );
}

export default App;
