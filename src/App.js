import Header from "./components/Header/Header";
import About from "./components/About/About";
import OurServices from "./components/Our-services/OurServices";
import Works from "./components/Works/Works";
import Team from "./components/Team/Team";
import Contacts from "./components/Contacts/Contacts";
import Testimonial from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./styles/main.css"
import "./styles/media.css"


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <OurServices />
      <Works />
      <Team />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
