import { useState } from "react";

export default function CommentForm () {
    let [formData, setFormData] = useState({
        remarks: "",
        rating: 5,
    });
    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData, [event.target.name]: event.target.value};
        });
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            remarks: "",
            rating: 5,
        })
    }
    return (
        <div>
            <h2>Give a comment!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="remarks">Remarks : </label>
                <textarea value={formData.remarks} placeholder="Add few remarks" onChange={handleInputChange} id="remarks" name="remarks"></textarea>
                <br />

                <label htmlFor="rating">Rating : </label>
                <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    );
}