import Navbar from "../components/Navbar";
import ConsultationSession from "../layouts/Home/ConsultationSession";

import FirstSection from "../layouts/Home/FirstSection";
import HomeBanner from "../layouts/Home/HomeBanner";
import Partnership from "../layouts/Home/Partnership";
import Projects from "../layouts/Home/Projects";

function Home() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <Partnership />
      <HomeBanner />
      <Projects />
      <ConsultationSession />
    </>
  );
}

export default Home;
