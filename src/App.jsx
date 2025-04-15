import { Route, Routes } from "react-router-dom"
import MyContextProvider from "./Components/context"

import Category from "./Pages/Category/Category"
import Home from "./Pages/Home"
import ScoreScreen from "./Pages/Score/ScoreScreen"

import { useState } from "react"
import { useEffect } from "react"
import Addition from "./Pages/SingleLevel/Addition"
import Subtraction from "./Pages/SingleLevel/Subtraction"
import Division from "./Pages/SingleLevel/Division"
import Multiplication from "./Pages/SingleLevel/Multiplication"

function App() {
  const [nameInLocalStorage, setNameInLocalStorage] = useState("")

  useEffect(()=>{
    if (localStorage.getItem("math-game-react")) {
      setNameInLocalStorage(localStorage.getItem("math-game-react"))
    }
  }, [])

  return (
    <MyContextProvider>
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/Penjumlahan" element={<Addition />} />
      <Route path="/category/Pengurangan" element={<Subtraction />} />
      <Route path="/category/Pembagian" element={<Division />} />
      <Route path="/category/Perkalian" element={<Multiplication />} />
      <Route path="/Score" element={<ScoreScreen />} />
    </Routes>
   </>
   </MyContextProvider>
  )
}

export default App
