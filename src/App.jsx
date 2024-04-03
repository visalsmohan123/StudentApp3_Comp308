import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentForm from "../../StudentApp1/src/StudentForm";
import Header from "./Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <StudentForm />
    </>
  )
}

export default App
