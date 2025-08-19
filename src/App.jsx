import "./App.css";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import Topbar from "./components/Topbar/Topbar";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="landing">
      
      <Topbar />
      
      <Header />

      <Section
        id="autos"
        title="AUTOS"
        bgClass="bg-autos"
        icon="/img/icon-autos.svg"
      />
      <Section
        id="diversos"
        title="DIVERSOS"
        bgClass="bg-diversos"
        icon="/img/icon-diversos.svg"
      />
      <Section
        id="vida"
        title="VIDA"
        bgClass="bg-vida"
        icon="/img/icon-vida.svg"
      />

      <Footer/>
    </div>
  );
}