// src/App.jsx
/**
 * Appens huvudkomponent 🎼
 *
 * Styr routing och navigation.
 * Tre sidor: inloggning, startsida och 404.
 */
import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AuthGuard from "./components/Auth/AuthGuard.jsx";
import { AuthProvider } from "./hooks/useAuth.jsx";
import { ErrorBoundary } from "react-error-boundary"; // Använd paketet istället

// Fallback UI för ErrorBoundary
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="error-boundary">
    <h2>Något gick fel</h2>
    <p>Ett oväntat fel uppstod. Försök ladda om sidan.</p>
    <div className="error-details">
      <p>
        <strong>Felmeddelande:</strong> {error.message}
      </p>
    </div>
    <button onClick={resetErrorBoundary}>Ladda om sidan</button>
  </div>
);

// Lazy loading för snabbare start
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
      onError={(error, info) => console.error("App error:", error, info)}
    >
      <AuthProvider>
        <Router>
          {/* Väntar medan sidor laddas */}
          <Suspense fallback={<div>Laddar...</div>}>
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
