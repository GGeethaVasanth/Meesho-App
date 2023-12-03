
// import Card from './Component/Card';
import DownNavbar from './Component/DownNavbar';
import FirstBanner from './Component/FirstBanner';
import Navbar from './Component/Navbar';
import SecondBanner from './Component/SecondBanner';
import "./Component/style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Category from './Component/Category';
import ThirdBanner from './Component/ThirdBanner';
//import Categories from './Component/Categories';




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
      <SecondBanner/>
      <ThirdBanner/>
    </div>
    <div>
      <Category/>
      
    </div>
    </div>
  );
}

export default App;
