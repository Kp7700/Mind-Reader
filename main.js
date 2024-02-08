function mindReader() {
    var x = parseInt(prompt("Think of a number between 1 to 10:"));

    if (1 <= x && x <= 10) {
        var output = document.getElementById('output');
        output.classList.add('loading');
        output.innerHTML = "Analysing Brainwaves";
        setTimeout(function() {
            output.innerHTML = "Scanning Memories";
        }, 1000);
        setTimeout(function() {
            output.innerHTML = "Calculating Probabilities";
        }, 3000);
        setTimeout(function() {
            output.innerHTML = "Decoding Thoughts";
        }, 4500);
        setTimeout(function() {
            output.classList.remove('loading');
            output.innerHTML = "You're thinking of the number " + x;
        }, 6250);
    } else {
        document.getElementById('output').innerHTML = "Ben ke lode pagal hai kya yahi maar dunga khatam kar dunga🤨";
    }
}

// Call the mindReader function when the page loads
window.onload = mindReader;