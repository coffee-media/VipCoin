if (localStorage.coins) {
    localStorage.coins = Number(localStorage.coins);
    document.getElementById("CURRENT BALANCE").innerHTML = 
        "<strong>CURRENT BALANCE:</strong>" + 
        localStorage.coins;
    
} else {
    localStorage.coins = 50;
    document.getElementById("CURRENT BALANCE").innerHTML = 
        "<strong>CURRENT BALANCE:</strong>" + 
        localStorage.coins;
}

