import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";



function NewItem({page}){
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: "",
        recipe: "",
        serve: "",
    });
    const navigate = useNavigate();

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
            id: formData.name.toLowerCase().replace(/ /g, "-")
        }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        // add new item to API
        // redirect to home page
        navigate(`/${page}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="description">Description</label>
            <input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />

            <label htmlFor="recipe">Recipe</label>
            <input
                id="recipe"
                name="recipe"
                value={formData.recipe}
                onChange={handleChange}
            />

            <label htmlFor="serve">Serve</label>
            <input
                id="serve"
                name="serve"
                value={formData.serve}
                onChange={handleChange}
            />
            <button type="submit">Add New {page.slice(0, -1)}</button>
        </form>
    )
}

export default NewItem;