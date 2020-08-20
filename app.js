async function test(){

    const para = document.querySelector('.test');

    let response = await fetch('http://www.notifii.com', {mode: 'cors'});

    if(response.ok) {
        let json = await response.text();
    } else {
        alert("Error: " + response.status);
    }
}