import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'normalize.css';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
