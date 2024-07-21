import Description from "./Description.jsx"

function Title(){
    let name = "Aditi";
  return (
    <>
        <h1>This is Title.</h1>
        <Description/>
        <p>2 x 2 = {2*2}</p>
        <p>Name : {name}</p>
    </>
  );
}

export default Title;