document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    // alert("Form Submitted");
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('quantity').value;
    const phone = document.getElementById('phone').value;
    const time = document.getElementById('time').value;
    const visit_details = document.getElementById('visit-details').value;
    
    const submitb = document.getElementById('submitb').value
    submitb.disabled = true;

    if (!fname || !email) {
        alert("You are missing your first name or email!");
        return;
    };

    if (!quantity || quantity < 1 || quantity > 14) {
        alert("Please enter a valid quantity!")
        return;
    };

    const formData = {
        fname: fname,
        lname: lname,
        email: email,
        quantity: quantity,
        fname: fname,
        phone: phone,
        time: time,
        visit_details: visit_details
    };
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
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