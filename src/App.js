import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {routes} from "./routes"
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
function App(){
  return(
    <>
    <HeaderComponent/>
    <Router>
      <Routes>
        {routes.map((route)=>{
          const Page = route.page
          const layout = !(route.isShowHeader) ? Fragment : DefaultComponent
          return(
            <Route key={route.path} path = {route.path} element={
              <layout>
                <Page/>
              </layout>
            } />
          )

        })}
        

      </Routes>
    </Router>
    </>
  )
}
export default App