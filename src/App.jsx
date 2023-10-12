import { Outlet } from 'react-router-dom';
import './App.css';
import useLoader from './hooks/use-loader';

function App() {
  const { loading, loader } = useLoader();

  return loading ? (
    loader
  ) : (
    <div className='font-main'>
      <Outlet />
    </div>
  );
}

export default App;
