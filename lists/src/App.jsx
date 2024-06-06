import Color from './Color'
import Colors from './Colors'
import './App.css'

const colorsArray = [
  { name: "white", id: "1" },
  { name: "black", id: "2"},
  { name: "green", id: "3"}

];

function App() {
 

  return (
    <>
     <Colors colors={colorsArray}/>
     
    </>
  )
}

export default App
