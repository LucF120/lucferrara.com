import { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    document.title = "Coming Soon 🚀"; // Set tab title when component mounts
    return () => {
      document.title = "Default Title"; // Reset if needed when unmounted
    };
  }, []);
  
  return (
    <div>
      <h1>Coming Soon!</h1>
      <p>Luc Ferrara's site is coming soon. Stay tuned!</p>
    </div>
  )
}
export default App
