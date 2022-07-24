import './App.css';
import Data from './components/Data';
import Users from './components/Users';

function App() {
  return (
    <>
      <div className="App">
        <div className="contenedor-principal">
          <h1>Esto es lo que dicen nuestros alumnos</h1>
          <Data />
          <Users />

        </div>
      </div>
    </>
  );
}

export default App;
