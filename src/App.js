import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components for different routes
import Form from './components/Form/Form.jsx';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
