import "./app.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Card from "./components/Cards"
import React ,{ useState  }  from "react";
import {Route , Routes } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import UpdateUser from "./components/UpdateUser";
import ContactUpdate from "./components/ContactUpdate";
import Voyage from "./components/Voyage";
function App() {

  return (
    <>
      <div style={{backgroundColor: "white" , height:"100vh" , width:"100vw"}}>
      <NavBar title="Facebook" />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/voyage" element={<Voyage />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
        <Route path="/updateContact/:matriculeId" element={<ContactUpdate />} />
        <Route path="/*" element={<h2 className="notFound">404 Not Found</h2>} />
      </Routes>
      <Footer />
</div>

    </>
  )

}




export default App


