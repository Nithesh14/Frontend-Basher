import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar';
import ProfilePage from './components/ProfilePage';
import Dashboard from './pages/Dashboard';
import HistoryPage from './components/HistoryPage';
import PrivateRoute from './components/PrivateRoute';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '196864594092-h4rt5tkfcb18b8424gk3h3l5qf39obg5.apps.googleusercontent.com';

const App = () => {
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
                    <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/history" element={<PrivateRoute><HistoryPage /></PrivateRoute>} />
                </Routes>
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;
