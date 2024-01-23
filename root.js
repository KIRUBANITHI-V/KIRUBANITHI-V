import React from "react";
import {Route,BrowserRouter,Routes} from "react-router-dom";
import Pagetwo from "./pagetwo";
import LoginPage from "./loginpage";

function Root(){
    return(
        <BrowserRouter>
        <Routes>
             
             <Route path="/" element ={<LoginPage/>}/>
             <Route path="/pagetwo" element ={<Pagetwo/>}/>
             {/* <Route path="/view" element ={<View/>}/> */}
             {/*<Route path="/update/=proid" element={<update/>}/> */}

        </Routes>
        </BrowserRouter>
    )
}
export default Root