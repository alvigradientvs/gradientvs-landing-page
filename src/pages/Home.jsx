import { useState } from "react";
import Navbar from "../components/Navbar";
import ConsultationSession from "../layouts/Home/ConsultationSession";

import FirstSection from "../layouts/Home/FirstSection";
import HomeBanner from "../layouts/Home/HomeBanner";
import Partnership from "../layouts/Home/Partnership";
import Projects from "../layouts/Home/Projects";
import Footer from "../components/Footer";

function Home() {
  const [formRef, setFormRef] = useState(null);

  return (
    <>
      <Navbar />
      <FirstSection formRef={formRef} />
      <Partnership />
      <HomeBanner />
      <Projects />
      <ConsultationSession setFormRef={setFormRef} />
      <Footer />
    </>
  );
}

export default Home;
