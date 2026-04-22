import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './theme/ThemeContext';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <CursorGlow />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/finflow" element={<Navigate to="/project/maiq" replace />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
