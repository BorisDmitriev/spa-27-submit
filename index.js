// Your code here
const urlPost = "https://reqres.in/api/users";

// Sending Data from Forms
const form = document.getElementById("submit-form");

form.addEventListener("submit", async event => {

    alert('Thank you for submitting your details.')

    event.preventDefault();

    const formData = new FormData(form);

    const formDataObj = {};
    for (const [key, value] of formData) {
        formDataObj[key] = value;
    }

    // console.log( formData );
    // console.log( "----------------------------------------------" );
    // console.log( formDataObj );
    const options = {
        method: "POST",
        body: JSON.stringify(formDataObj),
        headers: { "Content-Type": "application/json" },
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", options)
        const data = await response.json()
        console.log(data);
    } catch (error) {

    }

});

