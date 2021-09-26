import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Developerteam from './components/Developerteam/Developerteam';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App pb-2">
      <Header></Header>
      <Developerteam></Developerteam>
    </div>
  );
}

export default App;
