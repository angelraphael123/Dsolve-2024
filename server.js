document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var name = document.getElementById('name').value;
    var department = document.getElementById('department').value;
    var sport = document.getElementById('sport').value;

    // Send data to Sheety API
    fetch('https://docs.google.com/spreadsheets/d/1DB4Yeqt36HuBhvDZJTC28pvXLpkuEedntQOm3ecYQag/edit?usp=sharing', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            department: department,
            sport: sport,
            sign_in_time: new Date(),
            sign_out_time: null
        })
    });

    // Update equipment count
    if (sport === 'badminton') {
        document.getElementById('badminton_rackets').innerText = parseInt(document.getElementById('badminton_rackets').innerText) - 1;
        document.getElementById('shuttles').innerText = parseInt(document.getElementById('shuttles').innerText) - 1;
    } else if (sport === 'cricket') {
        document.getElementById('cricket_bats').innerText = parseInt(document.getElementById('cricket_bats').innerText) - 1;
        document.getElementById('cricket_balls').innerText = parseInt(document.getElementById('cricket_balls').innerText) - 1;
    } else if (sport === 'table_tennis') {
        // Add code to update table tennis equipment count
    } else if (sport === 'football') {
        document.getElementById('footballs').innerText = parseInt(document.getElementById('footballs').innerText) - 1;
    } else if (sport === 'basketball') {
        // Add code to update basketball equipment count
    }
});