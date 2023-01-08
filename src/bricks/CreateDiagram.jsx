import React, { useState } from "react";
import "../theme/create.css"

function CreateDiagram(props) {
    let defaultForm = {
        name: "Von Neumanovo schéma",
        type: "Schéma",
        authorList: [
            "Franta Vomáčka"
        ],
        description: "Schéma počítače",
        topics: [
            "Informatika"
        ],
        publishDate: (new Date()).toString(),
        img: "http://path/to/img",
        published: true
    };
    const [form, setForm] = useState(defaultForm);

    let handleChange = () => {
        let newObject = {
            name: document.getElementById("name").value,
            type: document.getElementById("type").value,
            authorList: [
                document.getElementById("author").value,
            ],
            description: document.getElementById("description").value,
            topics: [
                document.getElementById("topics").value,
            ],
            publishDate: (new Date()).toString(),
            img: document.getElementById("img").value,
            published: true
        };
        setForm(newObject);
    };
    let submit = async () => {
        console.log(JSON.stringify(form));
        fetch("diagram/createFull", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
            .then(response => response.json())
            .then(data => console.log(data))

    };


    return (
        <div className="createDiagram">
            <label>Name</label>
            <input onChange={() => { handleChange() }} id="name" value={form.name}></input>
            <label>Type</label>
            <input onChange={() => { handleChange() }} id="type" value={form.type}></input>
            <label>Author</label>
            <input onChange={() => { handleChange() }} id="author" value={form.authorList[0]}></input>
            <label>Description</label>
            <input onChange={() => { handleChange() }} id="description" value={form.description}></input>
            <label>Topics</label>
            <input onChange={() => { handleChange() }} id="topics" value={form.topics[0]}></input>
            <label>Image URL</label>
            <input onChange={() => { handleChange() }} id="img" value={form.img}></input>
            <button onClick={() => { submit(); props.handleClose(false); }}>Submit</button>
            <button onClick={() => { props.handleClose(false); }}>Cancel</button>
        </div>
    );
}
export default CreateDiagram;