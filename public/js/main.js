document.addEventListener("DOMContentLoaded", () => {


    const form = document.getElementById("logIn");

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log('submit clicked!')

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const formData = { email, password }

        // localStorage.setItem("form", JSON.stringify(form));

        //fetch post request (mdn) "POST" - /logIn 

        alert('Message sent!')

        form.reset();
    });



}); //LOAD