import "./assets/styles/main.module.css";
import Header from './components/Header';
import Description from './components/Description';
import Directions from './components/Directions';
import Team from './components/Team';
import Footer from './components/Footer';
import Biography from './components/Biography';
import Grantswon from './components/Grantswon';
import Projects from './components/Projects';
import News from './components/News';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import NewsEditor from './components/NewsEditor';

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
      <News />
      <Team />
      <Grantswon />
      <Biography />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Публичная часть сайта */}
        <Route path="/" element={<MainPage />} />
        {/* Маршрут для входа */}
        <Route path="/login" element={<Login />} />
        {/* Защищённые маршруты для админ-панели */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/news/:id?"
          element={
            <PrivateRoute>
              <NewsEditor />
            </PrivateRoute>
          }
        />
        {/* Если ни один маршрут не подошёл, перенаправляем на главную */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
