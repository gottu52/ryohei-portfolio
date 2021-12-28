import { Header } from "./components/organism/Header"
import { Hero } from "./components/organism/Hero"
import { Profile } from "./components/organism/Profile";
import { Contact } from "./components/organism/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Profile />
        <Contact />
    </div>
  );
}

export default App;
