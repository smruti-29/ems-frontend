import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import FotterComponent from "./components/FotterComponent";
import HeaderComponenet from "./components/HeaderComponenet";
// import HelloWorld from './HelloWorld'
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponenet />
        <Routes>
          {/* // http://localhost:300 */}

          <Route path="/" element={<ListEmployeeComponent />}></Route>

    {/* http://localhost:300/employees */}

          <Route path="/employees" element = {<ListEmployeeComponent/>}></Route>

          <Route path="/add-employee" element={<EmployeeComponent/>}></Route>

          <Route path="/edit-employee/:id" element={<EmployeeComponent/>}>

          </Route>

        </Routes>
        <FotterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
