const calculator = document.querySelector('.calculatrice');

// div screen = où les chiffres apparaîtront
const screen = document.createElement('div');
screen.classList.add('ecran');
calculator.appendChild(screen);

// div englobant les touches
const touch = document.createElement('div');
touch.classList.add('touches');
calculator.appendChild(touch);

// --- Création des boutons ---
const boutonsData = [
    { text: 'AC', key: '8' },
    { text: '(', key: '53' },
    { text: ')', key: '219' },
    { text: '÷', key: '111' },
    { text: '7', key: '103' },
    { text: '8', key: '104' },
    { text: '9', key: '105' },
    { text: '×', key: '106' },
    { text: '4', key: '100' },
    { text: '5', key: '101' },
    { text: '6', key: '102' },
    { text: '-', key: '109' },
    { text: '1', key: '97' },
    { text: '2', key: '98' },
    { text: '3', key: '99' },
    { text: '+', key: '107' },
    { text: '0', key: '96' },
    { text: '.', key: '110' },
    { text: '=', key: '13' }
];

boutonsData.forEach(btnData => {
    const btn = document.createElement('button');
    btn.classList.add('bouton');
    btn.innerText = btnData.text;
    btn.setAttribute('data-key', btnData.key);
    touch.appendChild(btn);
});

// liste des touches et des keycodes
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(t => t.dataset.key);

// Fonction pour ajuster la taille du texte selon la longueur
const ajusterTailleTexte = () => {
    const maxLength = 12; // caractères avant de réduire
    if (screen.textContent.length > maxLength) {
        let nouvelleTaille = 50 - (screen.textContent.length - maxLength) * 2;
        if (nouvelleTaille < 20) nouvelleTaille = 20; // taille minimale
        screen.style.fontSize = `${nouvelleTaille}px`;
    } else {
        screen.style.fontSize = '50px'; // taille normale
    }
}

// Fonction de calcul
const calculer = (valeur) => {
    if (!listeKeycode.includes(valeur)) return;

    switch (valeur) {
        case '8': // AC
            screen.textContent = "";
            break;
        case '13': // =
            try {
                // Remplace × par * et ÷ par /
                let calculTexte = screen.textContent.replace(/×/g, '*').replace(/÷/g, '/');
                let calcul = eval(calculTexte);
                if (!Number.isInteger(calcul)) {
                    calcul = calcul.toFixed(6); // arrondi à 6 décimales
                    calcul = parseFloat(calcul).toString(); // supprime les zéros inutiles
                }
                screen.textContent = calcul;
            } catch {
                screen.textContent = "Erreur";
            }
            break;
        default:
            const indexKeycode = listeKeycode.indexOf(valeur);
            const touche = touches[indexKeycode];
            screen.textContent += touche.innerText;
    }

    ajusterTailleTexte(); // ajuste la taille après chaque entrée
}

// Événement clavier
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

// Événement clic
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});