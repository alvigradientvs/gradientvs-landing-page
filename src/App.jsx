import GradientStudio from "./pages/GradientStudio";
import GradientTech from "./pages/GradientTech";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gradient-studio" element={<GradientStudio />} />
      <Route path="/gradient-tech" element={<GradientTech />} />
    </Routes>
  );
}

export default App;
