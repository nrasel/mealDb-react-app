import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="App">
      {/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
          import { faCoffee } from '@fortawesome/free-solid-svg-icons'

          const element = <FontAwesomeIcon icon={faCoffee} />
      */}
      <Header />
      <Meals />
      
    </div>
  );
}

export default App;
