document.getElementById('coolButton').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "<img src=\"assets/wow.gif\" alt=\"Wow!\"><p>Wow! Thanks for clicking!</p><p>We have code solutions like you wouldn't believe! What are you worried about? Come get AI solutions. Call us up (<b><a href=\"tel:+14107010140\">410-701-0140</a></b>), and order some software and AI solutions today.</p><p>We also are able to receive electronic mail at <a href=\"mailto:hello@stoopid.email\">hello@stoopid.email</a></p>";

    window.open('https://www.jasonanton.com', '_blank');
});

function cornify() {
    var script = document.createElement('script');
    script.src = 'cornify.js';
    document.body.appendChild(script);
    script.onload = () => cornify_add();
}

var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]; 
var konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            cornify();
            konamiIndex = 0;  
        }
    } else {
        konamiIndex = 0;  
    }
});

function makeItMetal() {

    document.querySelector('body').style.backgroundImage = "url('assets/fire.gif')";
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'red';
    document.getElementById('metal').innerHTML = "<img src=\"assets/butthead.gif\" alt=\"AC/DC\"><img src=\"assets/bevis.gif\" alt=\"METALLICA\">";

    document.getElementById('footer-left').innerHTML = '<a href="https://youtu.be/6Mr7mQuGmp0?feature=shared" target="_blank"><img src="assets/skull.gif" alt="Go O\'s!"></a>'

    document.getElementById('footer-right').innerHTML = '<a href="bitcoin:bc1q7m767cqhsaupd3pyq8eym9dmrkhp08wz35pp0e" target="_blank"><img src="assets/skull.gif" alt="Give me Bitcoin for no reason."></a>'
    
    var audio = new Audio('assets/mk.mp3');
    
    // Play first audio, then chain the second one
    audio.play().then(() => {
        alert("GET OVER HERE!...for some modern software solutions!");

        var audio2 = new Audio('assets/toasty.mp3');
        audio2.play()
        
        var audio3 = new Audio('assets/mop.mp3');
        audio3.play();
    }).catch(error => {
        console.error('Error playing audio:', error);
    });
}

var mortalCombatCode = [65, 66, 65, 67, 65, 66, 66];
var combatIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.keyCode === mortalCombatCode[combatIndex]) {
        combatIndex++;
        if (combatIndex === mortalCombatCode.length) {
            makeItMetal();
            combatIndex = 0;  
        }
    } else {
        combatIndex = 0;  
    }
});

console.log("↑ ↑ ↓ ↓ ← → ← → B A ENTER");
console.log('A B A C A B B')
console.log(`
    ⠐⡄⠒⡄⢢⠐⡠⢂⠔⡠⢂⡐⡀⠆⡐⣀⠂⡔⢀⠢⢐⠠⢘⣿⣿⣿⣿⣿⣿⣿
    ⠐⢌⠡⠒⣀⠣⢐⠡⠒⡠⠡⢄⡑⢈⡐⠠⢁⠢⡁⠎⢄⠡⡈⠽⣿⣿⢿⣿⣿⣿
    ⢈⡐⠢⡑⡀⢆⠡⢊⠔⠡⡁⠆⢌⠠⣄⠃⠤⢑⡈⠆⡌⠒⢠⠁⢌⡙⣿⣿⣿⣿
    ⠠⢐⠡⢂⠅⢢⠁⠎⢠⠃⠔⡉⠄⢂⠽⣿⡔⡂⠌⠰⢠⠉⠆⠌⡈⠛⠿⣿⣿⣿
    ⠐⡈⠰⢁⡘⠄⠩⠐⠡⢈⠒⡈⠔⡈⠰⢈⠿⣶⠈⡁⠆⡉⡐⡈⢤⣑⣠⢂⣿⣿
    ⢶⣽⣧⠠⠐⣨⣡⣮⣵⣦⣦⣵⣦⣬⣥⣂⡴⣻⣧⢐⣰⣴⣷⠼⢶⢿⣶⣮⠾⣿
    ⡜⣿⣿⡴⠿⠛⣛⣩⣭⣿⣿⣯⣤⣬⣍⣉⣻⣿⣿⣿⣩⣵⣮⣵⡾⣿⢿⣷⣤⣿
    ⢸⣹⣿⣶⠶⠟⠛⢋⠉⣉⠩⢠⠉⠌⡉⠍⢛⣿⣿⣿⣍⠠⠁⡄⠐⣀⠂⠄⣈⣽
    ⠠⠙⣿⣄⠐⡈⠔⠢⢁⠆⡑⠢⡑⠢⢐⢨⣸⡿⢉⠉⠻⣷⣂⡄⢃⠄⠌⡐⣱⣿
    ⢀⠃⠌⡉⡐⠌⢌⡁⠆⠂⡅⠢⠑⢌⠠⠂⠟⡁⢂⢉⡐⢈⠛⠻⠛⠾⠷⢿⣿⣿
    ⠠⠘⡐⠰⠀⢎⠰⡀⢌⠱⢀⠃⡍⠠⢂⠱⠀⢆⠡⠂⡔⠢⢌⠡⡘⠄⡱⢂⠰⢻
    ⢀⠣⠌⢡⠁⠎⡐⢈⠄⢢⠁⠎⣀⠃⠌⡄⠩⢐⠨⡁⢄⠣⢈⢂⠁⠎⡐⢂⠓⣤
    ⢀⠂⠍⡄⢊⠐⡡⢈⠄⠃⡌⠰⢠⠈⢆⠠⢑⠨⢠⢁⠢⠐⢂⣼⣶⣿⣶⣧⣾⣿
    ⠠⡉⠔⡠⢁⢊⡐⠢⠌⡑⢠⠑⡠⢁⠢⠌⠠⠑⠂⡌⠄⠃⠌⠡⠉⠄⡠⢀⠌⢹
    ⠐⡈⠆⡑⠌⠒⡨⠑⠌⡐⢁⠂⠔⠠⠂⠌⠡⠌⠡⢐⠈⠌⢂⡁⠎⡐⡄⢂⠌⣤
    `);