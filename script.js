// Generate a random number between 1337000 and 1337999
var randomNumber = 1337000 + Math.floor(Math.random() * 1000);

// Update the hit counter
document.querySelector('.hit-counter').textContent = 'Visitor #: ' + randomNumber;

document.getElementById('bizButton').addEventListener('click', function() {
    window.location.href = 'https://www.jasonanton.com';
});

document.getElementById('coolButton').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "<img src=\"assets/wow.gif\" alt=\"Wow!\"><p>Wow! Thanks for clicking!</p><div id=\"theater\"><div id=\"screen\"><pre id=\"output\">The Stoopid Theater Proudly Presents...</pre></div></div><button id=\"stopAudioButton\">Stop The Music</button>";

    // Display the theater
    document.getElementById('theater').style.display = 'block';

    var audioMovie = new Audio('assets/sw.mp3');

    document.getElementById('stopAudioButton').addEventListener('click', function() {
        audioMovie.pause();
        // audioMovie.currentTime = 0; 
    });

    const output = document.getElementById('output');

    const ws = new WebSocket('wss://stoopidmovie.fly.dev/');
    var i=0;
    
    ws.onmessage = event => {
        if (i < 55) i++;

        if (i === 1) {
            output.textContent = 'The Stoopid Theater Proudly Presents...'
        } else if (i === 2) {
            output.textContent = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⠀⢀⣤⣤⣤⣤⣤⣤⣤⠀⠀⠀⠀⢠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣼⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣟⠛⠛⠛⠛⠛⣿⣿⣿⣿⡟⠛⠛⠛⠛⠛⢠⣿⣿⣿⣿⠿⣿⣿⣿⣿⡀⠀⠀⢸⣿⣿⣿⣿⡏⠉⠉⢉⣿⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣷⡀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⣾⣿⣿⣿⡟⠀⢻⣿⣿⣿⣧⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀
⣤⣤⣤⣤⣤⣤⣤⣤⣤⣬⣿⣿⣿⣿⣿⣷⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣤⣤⣤⣤
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⢀⣿⣿⣿⣿⡿⠿⠿⠿⠿⣿⣿⣿⣿⡀⢸⣿⣿⣿⣿⡇⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠟⠛⠁⠀⠀⠀⠀⠿⠿⠿⠿⠇⠀⠀⠀⠸⠿⠿⠿⠟⠀⠀⠀⠀⠀⠻⠿⠿⠿⠇⠸⠿⠿⠿⠿⠇⠀⠀⠙⠛⠿⠿⠿⠿⠿⠿⠿⠿
⢻⣿⣿⣿⣿⡄⢠⣿⣿⣿⣿⣿⡆⠀⣾⣿⣿⣿⡟⠀⢀⣾⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣦⣄⠀⠀⠀⠀⣠⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿
⠈⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿⠁⠀⣼⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣇⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⢠⣿⣿⣿⣿⠏⢿⣿⣿⣿⣇⠀⠀⠀⣿⣿⣿⣿⣿⣀⣀⣀⣼⣿⣿⣿⡟⠀⠀⢹⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀
⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣾⣿⣿⣿⣟⣀⣸⣿⣿⣿⣿⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠙⢿⣿⣿⣿⣿⣧⠀⠀⠀⠀
⠀⠀⠘⣿⣿⣿⣿⣿⣿⠋⣿⣿⣿⣿⣿⣿⠇⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⠇⠀⠀⠀
⠀⠀⠀⢻⣿⣿⣿⣿⡏⠀⢹⣿⣿⣿⣿⡟⠀⢀⣿⣿⣿⣿⡟⠛⠛⠛⠛⣿⣿⣿⣿⡆⠀⣿⣿⣿⣿⣿⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀
⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠉⠉⠉⠉⠁⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠀⠉⠉⠉⠉⠉⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀
        \nvia telnet towel.blinkenlights.nl`;
        } else if (i === 3) {
            output.textContent = 'Enjoy!';
        } else {
            output.textContent = event.data;
        }

        if (i === 54) {
            audioMovie.play();        
            
            document.getElementById('stopAudioButton').addEventListener('click', function() {
                if (audioMovie) {
                    audioMovie.pause();
                    audioMovie.currentTime = 0; 
                }
            });
        }
    };

    ws.onopen = () => {
        console.log('Enjoy telnet Star Wars via a websocket connection!');
    };
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

    document.getElementById('footer-left').innerHTML = '<img src="assets/skull.gif">'

    document.getElementById('footer-right').innerHTML = '<img src="assets/skull.gif">'
    
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

console.log('Howdy!')
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