import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routs/Routers';

function App() {
  return (
    <div className="bg-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
