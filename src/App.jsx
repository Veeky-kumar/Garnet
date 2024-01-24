import './App.css'
import NavBarLinks from './components/Navbar/nav-bar-links';
import ContainerFrame from './components/container_frame/container-frame';

import FrameComponent2 from "../src/components/container_frame/frame-component2";
import FrameComponent1 from "../src/components/container_frame/frame-component1";

import FranchiseEnquiryFrame from "./components/franchise-enquiry-frame";

import CertificationGuideJewellery from "../src/components/certification-guide-jewellery";

const App = () => {
  return (
    <div>
      <NavBarLinks/>
      <ContainerFrame/>

      <FrameComponent1/>
      <FranchiseEnquiryFrame />
      <CertificationGuideJewellery/>
    </div>
  )
}

export default App
