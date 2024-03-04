import React from 'react';
import DataComponent from './Utils/DataComponent';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CardComp from './Components/CardComp'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Process from './Components/Process';


const App = () => {
  return (
    <div>
      <div>

        <DataComponent>
          <CardComp />
        </DataComponent>
      </div>
      <ToastContainer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/process" elements={<Process/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
