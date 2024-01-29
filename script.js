console.log("script running...")
document.querySelector('.cancel').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cancel').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cancel').style.display = 'inline'
        }, 300);
    }
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbxnVIJ7U1_GmT_sLUe1zNSCTekHpwWV51X-V8mg7lLSMCuCnL89dU71pnPvglTQsM9l/exec';
const form = document.forms['infoForm'];

form.addEventListener('submit', e => {
    e.preventDefault();
    let data = {
        name: document.getElementById("clientname").value,
        email: document.getElementById("clientemail").value,
        phone: document.getElementById("clientPhone").value
    }
    console.log(data);
    fetch(scriptURL, { method: 'POST', body: JSON.stringify(data) })
        .then(response => {
            alert("Information Saved Successfully.")
            console.log(response);
        })
        .catch(error => console.error('Error!', error.message))
    form.reset();
})
