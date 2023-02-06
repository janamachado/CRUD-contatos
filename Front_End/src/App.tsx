import Routes from './Routes/index'
import AuthProvider from './context/AuthContext';
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

import './App.css';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <Routes/>
      </AuthProvider>

    </div>
  );
}

export default App;
