import Listado from './listado/listado';
import Router from './Router';
import './App.css';
import { UserContextProvider } from './services/authService';

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;
