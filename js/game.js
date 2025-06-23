/**
 * Globale Variable, die die Instanz der Hauptspielwelt enthält.
 * @type {World}
 */
let world;
/**
 * Globale Variable für das HTML-Canvas-Element.
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * Initialisiert das Spiel. Versteckt das Start-Overlay, zeigt den Spiel-Container an
 * und erstellt eine neue Instanz der World-Klasse.
 */
function initGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    document.getElementById('introOverlay').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('gameOverOverlay').style.display = 'none';
    document.getElementById('winOverlay').style.display = 'none';
}

/**
 * Lädt die Seite neu, um das Spiel von vorne zu beginnen.
 */
function restartGame() {
    window.location.reload();
}

function goToImpressum(url) {
  window.location.href = url;
}

/** 
* Event Listener, um das gesamte HTML zu laden 
*/
window.addEventListener('DOMContentLoaded', (event) => {
    const infoBox = document.querySelector('game-info');
    if (infoBox) {
    setTimeout(() => {
      infoBox.classList.add('visible'); 
    }, 2000);
    }
    /**
    * Event Listener für die Schaltflächen im Spiel.
    * Diese Listener ermöglichen die Interaktion mit dem Spiel, wie Starten, Anzeigen von Hilfe    
    */
    const startButton = document.getElementById('startButton');
    const helpButton = document.getElementById('helpButton');
    const impButton = document.getElementById('impButton');
    const backButton = document.getElementById('backButton');
    const helpText = document.getElementById('helpText');
    const imprintText = document.getElementById('imprintText');
    const restartButton = document.getElementById('restartButton');
    const pauseButton = document.getElementById('pauseButton');
    const weiterButton = document.getElementById('weiterButton');
    const restartButtonWin = document.getElementById('restartButtonWin');
    const buyLifeButton = document.getElementById('buyLifeButton'); 

    if (startButton) {
        startButton.addEventListener('click', initGame);
    } 

    if (helpButton && helpText) {
        helpButton.addEventListener('click', () => {
            helpText.style.display = helpText.style.display === 'none' ? 'block' : 'none';
            imprintText.style.display = 'none'; 
        });
    }

    if (impButton) {
        impButton.addEventListener('click', () => {
          window.location.href = 'impressum.html';       
          });
    }

    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }

    if (pauseButton) {
        pauseButton.addEventListener('click', () => {
          if (world && typeof world.togglePause === 'function') {
              world.togglePause();      
          } 
        });
    }

    if (restartButton) {
        restartButton.addEventListener('click', restartGame);
    }

    if (restartButtonWin) {
        restartButtonWin.addEventListener('click', restartGame);
    }

    if (buyLifeButton) {
        buyLifeButton.addEventListener('click', () => {
            if (world && typeof world.buyLife === 'function') {
                 world.buyLife(); 
            }  
        });
        buyLifeButton.style.display = 'none';
    }
});

/** * Zeigt den Game Over-Bildschirm an, wenn das Spiel verloren ist.
 * Diese Funktion wird aufgerufen, wenn der Spieler keine Leben mehr hat.
 */
function showGameOverScreen() {
     const gameOverOverlay = document.getElementById('gameOverOverlay');
     if(gameOverOverlay) {
        gameOverOverlay.style.display = 'flex';
     }
}

/**
 * Zeigt den Gewinn-Bildschirm an, wenn das Spiel gewonnen ist.
 * Diese Funktion wird aufgerufen, wenn der Spieler das Ziel erreicht hat.
 */
function showWinScreen() {
    const winOverlay = document.getElementById('winOverlay');
    if(winOverlay) {
       winOverlay.style.display = 'flex';
    }
}
