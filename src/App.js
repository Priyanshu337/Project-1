
import './App.css';
import bootstrap from '../src/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeScreen />
    </div>
  );
}

export default App;
