
// import Card from './Component/Card';
import DownNavbar from './Component/DownNavbar';
import FirstBanner from './Component/FirstBanner';
import Navbar from './Component/Navbar';
import SecondBanner from './Component/SecondBanner';
import "./Component/style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Category from './Component/Category';




function App() {
  return (
    
    <div className="app">
    <div>
      {/* <Menubar/> */}
      <Navbar/>
      <DownNavbar/>
    </div>
    <div>
      <FirstBanner/>
    </div>
    <div>
      <SecondBanner/>
    </div>
    <div>
      <Category/>
    </div>
    </div>
  );
}

export default App;
