import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;