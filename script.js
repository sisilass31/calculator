const calculator = document.querySelector('.calculatrice');

//div screen = ou les chiffres apparaitront
const screen = document.createElement('div');
screen.classList.add('ecran');
calculator.appendChild(screen)

//div englobant les touches
const touch = document.createElement('div');
touch.classList.add('touches');
calculator.appendChild(touch)

//touches: data key = une clé (une valeur variable appliquée à une chaîne ou à un bloc de texte pour le crypter ou le décrypter)
const restart = document.createElement('button');
restart.classList.add('bouton')
restart.innerText = 'AC';
touch.appendChild(restart);
restart.setAttribute("data-key", "8");

const parenthèse1 = document.createElement('button');
parenthèse1.classList.add('bouton')
parenthèse1.innerText = '(';
touch.appendChild(parenthèse1);
parenthèse1.setAttribute("data-key", "53");

const parenthèse2 = document.createElement('button');
parenthèse2.classList.add('bouton')
parenthèse2.innerText = ')';
touch.appendChild(parenthèse2);
parenthèse2.setAttribute("data-key", "219");

const diviser = document.createElement('button');
diviser.classList.add('bouton')
diviser.innerText = '/';
touch.appendChild(diviser);
diviser.setAttribute("data-key", "111");

const sept = document.createElement('button');
sept.classList.add('bouton')
sept.innerText = '7';
touch.appendChild(sept);
sept.setAttribute("data-key", "103");

const huit = document.createElement('button');
huit.classList.add('bouton')
huit.innerText = '8';
touch.appendChild(huit);
huit.setAttribute("data-key", "104");

const neuf = document.createElement('button');
neuf.classList.add('bouton')
neuf.innerText = '9';
touch.appendChild(neuf);
neuf.setAttribute("data-key", "105");

const fois = document.createElement('button');
fois.classList.add('bouton')
fois.innerText = '*';
touch.appendChild(fois);
fois.setAttribute("data-key", "106");

const quatre = document.createElement('button');
quatre.classList.add('bouton')
quatre.innerText = '4';
touch.appendChild(quatre);
quatre.setAttribute("data-key", "100");

const cinq = document.createElement('button');
cinq.classList.add('bouton')
cinq.innerText = '5';
touch.appendChild(cinq);
cinq.setAttribute("data-key", "101");

const six = document.createElement('button');
six.classList.add('bouton')
six.innerText = '6';
touch.appendChild(six);
six.setAttribute("data-key", "102");

const moins = document.createElement('button');
moins.classList.add('bouton')
moins.innerText = '-';
touch.appendChild(moins);
moins.setAttribute("data-key", "109");

const un = document.createElement('button');
un.classList.add('bouton')
un.innerText = '1';
touch.appendChild(un);
un.setAttribute("data-key", "97");

const deux = document.createElement('button');
deux.classList.add('bouton')
deux.innerText = '2';
touch.appendChild(deux);
deux.setAttribute("data-key", "98");

const trois = document.createElement('button');
trois.classList.add('bouton')
trois.innerText = '3';
touch.appendChild(trois);
trois.setAttribute("data-key", "99");

const plus = document.createElement('button');
plus.classList.add('bouton')
plus.innerText = '+';
touch.appendChild(plus);
plus.setAttribute("data-key", "107");

const zero = document.createElement('button');
zero.classList.add('bouton')
zero.innerText = '0';
touch.appendChild(zero);
zero.setAttribute("data-key", "96");

const point = document.createElement('button');
point.classList.add('bouton')
point.innerText = '.';
touch.appendChild(point);
point.setAttribute("data-key", "110");


const egal = document.createElement('button');
egal.classList.add('bouton')
egal.innerText = "=";
touch.appendChild(egal);
egal.setAttribute("data-key", "13");


// l'événement keydown est déclenché pour toutes les clés.
// e =  représente l'objet "événement"
// addEventListener = fonction qui sera appelée à chaque fois que l'événement spécifié est livré.
// keyCode = est une propriété de l'évènement qui contient le code numérique de la touche qui a été pressée.

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

/* lorsqu'on appuyera sur un bouton:  retourne la valeur de "data-key" de l'élément HTML sur lequel l'événement de clic a été déclenché,
sous forme de chaîne de caractères.*/
// dataset = permet d'accéder à tous les attributs "data"
// key =  nom de la valeur que l'on veut récupérer.
// target = est une propriété de l'évènement qui contient la référence à l'élément HTML sur lequel l'événement s'est produit.

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

// on a mis nos boutons dans un tableau appelé 'touches'
const touches = [...document.querySelectorAll('.bouton')];
//listeKeycode = permet de créer un nouveau tableau qui contient les valeurs de l'attribut data-key de chaque élément du tableau initial touches.
const listeKeycode = touches.map(touche => touche.dataset.key);

// valeur = représente le code numérique de la touche qui a été pressée.
const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                screen.textContent = ""; // quand la touche AC est appuyée alors le screen sera vide
                break;
            case '13':
                const calcul = eval(screen.textContent); // quand la touche = est appuyée alors le calcul sera exécuter
                screen.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}