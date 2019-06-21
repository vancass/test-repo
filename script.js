function clicka() {
    console.log('test');
    fetch('https://api.meetup.com/find/locations').then(response => response.json())
        .then(res => {
            console.log(res);
        })
}