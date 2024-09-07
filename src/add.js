import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

export default function Add() {
    const [image, setImage] = useState(null);
    const onInputChange = (event) => {
        console.log(event.target.files[0]);
        setImage(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!image) {
            
            return;
        }

        const formData = new FormData();
        formData.append("image", image);

        try {
            const result = await axios.post(
                "http://localhost:3000/upload-image", 
                formData, 
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            console.log(result.data);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }

    return (
        <div className="addPage">
            <form>
                <input onChange={onInputChange} accept='/image/*' className="block text-sm text-gray-900 border rounded-lg cursor-pointer" aria-describedby="file_input_help" id="file_input" type="file" />
                <Link to="/"><button>Submit</button></Link>
            </form>
        </div>
    )
}