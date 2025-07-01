import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Landing from './Landing';

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            {/* Catch all invalid routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </HashRouter>
  );
}

export default App;