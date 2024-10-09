import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapDemo from "./BootstrapDemo";
import List from "./List";
import Navigation from "./Nav";
import SpinnerDemo from "./Spinner";
import CarouselFadeExample from "./Carousels";
import CardDemo from "./CardDemo";
import NavScrollExample from "./petlover/NavBar";
import IndividualIntervalsExample from "./petlover/Carousel";
import Vacation from "./petlover/Vacation";
import AboutUs from "./petlover/AboutUs";
import Service from "./petlover/Service";
import Choose from "./petlover/Choose";
import Plan from "./petlover/Plan";
import Team from "./petlover/Team";
import Says from "./petlover/Says";
import Blog from "./petlover/Blog";
import Footer from "./petlover/Footer";

function App() {
  return (
    <div className="App">
      {/* <TopNav /> */}
      <NavScrollExample />
      <IndividualIntervalsExample />
      <Vacation />
      <AboutUs />
      <Service />
      <Choose />
      <Plan />
      <Team />
      <Says />
      <Blog />
      <Footer />

      {/* <Navigation /> */}
      {/* <CarouselFadeExample /> */}

      {/* <CardDemo /> */}
      {/* <BootstrapDemo /> */}
      {/* <List /> */}
      {/* <SpinnerDemo /> */}
    </div>
  );
}

export default App;
