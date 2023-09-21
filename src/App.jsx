import { useState } from 'react'
import NavBar from "./components/navbar/NavBar.jsx"
import Item from "./components/item/item.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Item
        imagePath="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      />
      <Item
        imagePath="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      />
      <Item
        imagePath="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      />
      <Item
        imagePath="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
