import { BrowserRouter as Router, Routes, Route } from "react-router";
import DisplayContent from "./components/organisms/DisplayContent/DisplayContent";
import Features from "./Features";
import Team from "./Team";
import SignIn from "./SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayContent />} />
        <Route path="/features" element={<Features />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;