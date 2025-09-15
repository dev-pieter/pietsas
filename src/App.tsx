import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "@/pages/Homepage";
import OurStory from "@/pages/OurStory";
import EventInfo from "@/pages/EventInfo";
import TravelStay from "@/pages/TravelStay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/event-info" element={<EventInfo />} />
        <Route path="/travel" element={<TravelStay />} />
      </Routes>
    </Router>
  );
}

export default App;
