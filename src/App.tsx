import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import DressCodePage from "./pages/DressCodePage";
import RsvpPage from "./pages/RsvpPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              activeItem="home"
              heroImage="/images/home-bg.png"
              heroTitle="Saskia &amp; Pieter"
            >
              <HomePage />
            </AppLayout>
          }
        />
        <Route
          path="/info"
          element={
            <AppLayout
              activeItem="information"
              heroImage="/images/hero-info.png"
              heroTitle="Information"
            >
              <InfoPage />
            </AppLayout>
          }
        />
        <Route
          path="/dress-code"
          element={
            <AppLayout
              activeItem="dress code"
              heroImage="/images/hero-dress-code.png"
              heroTitle="Dress Code"
            >
              <DressCodePage />
            </AppLayout>
          }
        />
        <Route
          path="/rsvp"
          element={
            <AppLayout
              activeItem="rsvp"
              heroImage="/images/hero-rsvp.png"
              heroTitle="RSVP"
            >
              <RsvpPage />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
