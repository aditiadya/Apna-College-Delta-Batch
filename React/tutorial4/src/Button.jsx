function handleClick() {
    console.log("Hello!");
}

function handleMouseOver() {
    console.log("Bye")
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio ipsam blanditiis nisi architecto corrupti neque, possimus perspiciatis ad quas enim! Saepe, illum laborum rerum numquam cum inventore nemo magnam!</p>
        </div>
    )
}