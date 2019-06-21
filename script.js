function clicka() {
    console.log('test');
    fetch('http://api.meetup.com/find/locations').then(response => response.json())
        .then(res => {
            console.log(res);
        })
}