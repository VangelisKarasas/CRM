import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Client from "./Pages/Client.jsx";
import Update from "./Pages/Update.jsx";
import Add from "./Pages/Add.jsx";
import "./style.css";
import Navbar from "./components/NavBar";


function App() {
  return (
          <div className="App">
              <Navbar />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Client/>}/>
                  <Route path="/add" element={<Add/>}/>
                  <Route path="/update/:GID" element={<Update/>}/>
                </Routes>
              </BrowserRouter>
          </div>

  );
}

export default App;
