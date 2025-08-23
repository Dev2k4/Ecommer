import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import {routes} from "./routes"
function App(){
  return(
    <>
    <Router>
      <Routes>
        {routes.map((route)=>{
          const Page = route.page
          return (
          <>
          <Route path={route.path} element={<Page/>}/>
          </>
          )
        })}

        <Route/>
      </Routes>
    </Router>
    </>
  )
}
export default App