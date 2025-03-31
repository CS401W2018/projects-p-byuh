document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    // alert("Form Submitted");
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const package_mod_gift = document.getElementById('package-mod-gift').value;
    const package_mod_fragile = document.getElementById('package-mod-fragile').value;
    const quantity = document.getElementById('quantity').value;
    const fname = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address1 = document.getElementById('address1').value;
    const address2 = document.getElementById('address2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const set_default = document.getElementById('set-default').value;
    const ship_standard = document.getElementById('ship-standard').value;
    const ship_express = document.getElementById('ship-express').value;
    const ship_overnight = document.getElementById('ship-overnight').value;
    const ship_details = document.getElementById('ship_details').value;
    
    const submitb = document.getElementById('submitb').value
    submitb.disabled = true;

    if (!fname || !email) {
        alert("You are missing your fullname or email!");
        return;
    };

    if (!quantity || quantity < 1 || quantity > 99) {
        alert("Please enter a valid quantity!")
        return;
    };

    const formData = {
        email: email,
        password: password,
        package_mod_gift: package_mod_gift,
        package_mod_fragile: package_mod_fragile,
        quantity: quantity,
        fname: fname,
        phone: phone,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zip: zip,
        set_default: set_default,
        ship_standard: ship_standard,
        ship_express: ship_express,
        ship_overnight: ship_overnight,
        ship_details: ship_details
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