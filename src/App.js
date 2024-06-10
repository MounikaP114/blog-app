import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import TopBar from './components/topbar/TopBar';

function App() {
  return (
    <div className="App">
       <TopBar></TopBar>
     {/* <Home/> */}
      {/* <Login/> */}
      <Register/>
    </div>
  );
}

export default App;
