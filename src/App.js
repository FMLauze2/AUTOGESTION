
import './App.css';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketForm from './components/TicketForm/TicketForm';
import TicketList from './components/TicketList/TicketList';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar fixée en haut */}
      <Routes>
        <Route path="/" element={<TicketForm />} /> 
        <Route path="/creation-ticket" element={<TicketForm />} />
        <Route path="/tickets" element={<TicketList />} />
        {/* Autres routes */}
      </Routes>
    </Router>
  );
};

export default App;
