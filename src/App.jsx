import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { routes } from "./Components/utils/routes";
import { Routes, Route} from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import "./styles/App.css";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";



function App() {
  return (
    /*  <div className="App">
        <ContextProvider>
        <Navbar/>
        <Home></Home>
        <Footer/>
        </ContextProvider>
      </div>*/

      <>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.favs} element={<Favs/>}/>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
      </Routes>
      <Footer></Footer>
      </>
  );
}

export default App;
