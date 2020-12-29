import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { data } from './axios/axios';
import { DataContext } from './context/context';
import Dashboard from './components/dashboard';
import './App.scss';

function App() {
  const { name, setName } = useContext(DataContext);
  const getData = async () => {
    const response = await data.get('/users');
    console.log(response.data);
    setName(response.data[7].name);
  };
  return (
    <div className="App mt-2 d-flex flex-column justify-content-center align-items-center">
      <button className="btn btnPrime mb-2 ">test btn</button>
      <Button variant="primary" onClick={getData}>
        My Button
      </Button>
      {name && <h2>{name}</h2>}
      <Dashboard />
    </div>
  );
}

export default App;
