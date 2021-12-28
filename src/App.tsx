import { Header } from "./components/organism/Header"
import { Hero } from "./components/organism/Hero"
import { Profile } from "./components/organism/Profile";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Profile />
    </div>
  );
}

export default App;
