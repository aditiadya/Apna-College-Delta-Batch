function handleFormSubmit(event) {
    event.preventDefault();     // it prevents the disappearing of the prompt in next line.
    console.log("Form submitted successfully.")
}

export default function Form() {
    return (
        <form>
            <input placeholder="write something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}