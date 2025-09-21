import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Landing from './Landing';
import Chess from './Chess';
import './App.css';

function App() {
  return (
    <div className="bg-light">
      <HashRouter>
          <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/chess" element={<Chess />} />
              {/* Catch all invalid routes */}
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
