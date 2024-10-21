import Dashboard from './components/Dashboard';
import {Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-blue-500 text-center">Newsletter Generator</h1>
      
      <Routes>
        <Route path='/' element={<Dashboard />}/>
      </Routes>
    </>
  );
};

export default App;
