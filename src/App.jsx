// src/App.jsx
/**
 * Appens huvudkomponent 🎼
 *
 * Styr routing och navigation.
 * Tre sidor: inloggning, startsida och 404.
 */
import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router";
import AuthGuard from "./components/Auth/AuthGuard.jsx";
import { AuthProvider } from "./hooks/useAuth.jsx";
import ErrorBoundary from "./components/UI/ErrorBoundary.jsx";

// Lazy loading för snabbare start
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          {/* Väntar medan sidor laddas */}
          <Suspense fallback={null}>
            <Routes>
              {/* Inloggningssida */}
              <Route path="/login" element={<LoginPage />} />

              {/* Skyddad startsida */}
              <Route
                path="/"
                element={
                  <AuthGuard>
                    <HomePage />
                  </AuthGuard>
                }
              />

              {/* 404-sida */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
