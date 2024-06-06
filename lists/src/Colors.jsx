import Color from "./Color";

const colorsArray = [
    { name: "blue", id: "1" },
    { name: "red", id: "2"},
    { name: "yellow", id: "3"}

];

function Colors({colors=colorsArray}) {
  return (
  <ul>
    {/* <p>{colors[0].name}</p>
    <p>{colors[1].name}</p> */}

    {colors.map((color)=> {
        return <Color color={color}/>
         
    })}
  </ul>
);
}

export default Colors;
