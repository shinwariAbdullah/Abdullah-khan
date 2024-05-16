import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Abdullah",
    age: 23,


  }

  return (
    <>
     <h1 className="bg-green-400 text-black p-5 rounded-xl ">
      Hello world!
    </h1>
    <Card username='Abdullah' btntext="clickMe"  />
    <Card username='shinwari' btntext="visist Me" />

    
    </>
  )
}

export default App
