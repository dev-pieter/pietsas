import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "@/pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
