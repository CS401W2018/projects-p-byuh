document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    // alert("Form Submitted");
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;

    if (!fname || !email) {
        alert("You are missing your fullname or email!");
        return;
    };

    const formData = {
        name: fname,
        email: email,
        password: password,
        age: age
    };
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open =("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.')
        }
    };
    xhr.send(JSON.stringify(formData));
});