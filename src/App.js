import "./assets/styles/main.module.css";
import Header from './components/Header';
import Description from './components/Description';
import Directions from './components/Directions';
import Team from './components/Team';
import Footer from './components/Footer';
import Biography from './components/Biography';
import Grantswon from './components/Grantswon';
import Projects from './components/Projects';
import FrequentQuestions from './components/FrequentQuestions';
import Map from './components/Map';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Компонент для защищённых маршрутов
function PrivateRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Компонент публичной части сайта
function MainPage() {
  return (
    <>
      <Header />
      <Description />
      <Directions />
      <Projects />
      <FrequentQuestions/>
      <Team />
      <Grantswon />
      <Biography />
      <Map/>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        {/* Публичная часть сайта */}
        <Route path="/" element={<MainPage />} />

        {/* Пример защищённого маршрута */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              {/* <AdminPanel /> */}
              <div>Admin Panel Placeholder</div>
            </PrivateRoute>
          }
        />

        {/* Резервный маршрут */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;