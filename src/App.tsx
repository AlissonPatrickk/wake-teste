import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';

/**
 * This component uses react-router-dom to define routes for the application.
 * It includes a Header component that is displayed on all pages, and a Routes
 * component to handle the different routes of the application.
 * 
 * @returns {JSX.Element} The JSX code for the App component.
 */
function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        {/* Header component displayed on all pages */}
        <Header />
        <div className="content">
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
