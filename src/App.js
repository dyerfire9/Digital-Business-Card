import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Socials from "./components/Socials";
import "./style.css";


export default function App() {
  return (
    <div className="container">
      <Info/>
      <About/>
      <Interests/>
      <Socials/>
    </div>
  );
}

