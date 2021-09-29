import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Developerteam from "./components/Developerteam/Developerteam";
import Header from "./components/Header/Header";
import { Flip } from "react-toastify";

function App() {
  return (
    <div className="App pb-2">
      <Header></Header>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        rtl={false}
        transition={Flip}
      />
      <Developerteam></Developerteam>
    </div>
  );
}

export default App;
