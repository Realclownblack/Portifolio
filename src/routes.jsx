import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from './page/Home'

export const RoutesJS = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
   );
}