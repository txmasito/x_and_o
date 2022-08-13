const container = document.getElementById('container');
const message = document.getElementById('message');
const win =document.getElementById('win');
let numero = 0;
let id;

let array1 = [2, 2, 2,
              2, 2, 2,
              2, 2, 2]


container.addEventListener('click', (e) => {
    let id = e.target;
    if(id.value == 0){
        id.value = 1;
        if(numero % 2 == 0){
            if(numero == 0){
                numero += 1;
            }
            id.classList.add('background-o');
        } else{
            if(numero == 1){
                numero -= 1;
            }
            id.classList.add('background-x');
        }
    }else{
        message.innerHTML = 'Esta casilla ya está marcada 🤨';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
        }, 2000);
    }
    asign(id.name);
    change();

    const numbers2 = array1.filter(number => number == 2);
    if(numbers2.length == 0){
        message.innerHTML = 'El juego se trancó! 😭';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
            location.reload();
        }, 2000);
        container.style.opacity = '50%';
    }

    

})

const asign = (element) => {
    if(element == 'c1'){
        array1[0] = numero;
    } else if(element == 'c2'){
        array1[1] = numero;
    } else if(element == 'c3'){
        array1[2] = numero;
    } else if(element == 'c4'){
        array1[3] = numero;
    } else if(element == 'c5'){
        array1[4] = numero;
    } else if(element == 'c6'){
        array1[5] = numero;
    } else if(element == 'c7'){
        array1[6] = numero;
    } else if(element == 'c8'){
        array1[7] = numero;
    } else if(element == 'c9'){
        array1[8] = numero;
    }
}

const change = () => {
    if((array1[0] == 1) && (array1[1] == 1) && (array1[2] == 1)){
        win.classList.add('win-first-row');
        document.getElementById('div4').style.opacity = '50%';
        document.getElementById('div5').style.opacity = '50%';
        document.getElementById('div6').style.opacity = '50%';
        document.getElementById('div7').style.opacity = '50%';
        document.getElementById('div8').style.opacity = '50%';
        document.getElementById('div9').style.opacity = '50%';
        message.innerHTML = 'Has ganado!! 🤑';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
            location.reload();
        }, 2000);
    }else if((array1[3] == 1) && (array1[4] == 1) && (array1[5] == 1)){
        win.classList.add('win-second-row');
        document.getElementById('div1').style.opacity = '50%';
        document.getElementById('div2').style.opacity = '50%';
        document.getElementById('div3').style.opacity = '50%';
        document.getElementById('div7').style.opacity = '50%';
        document.getElementById('div8').style.opacity = '50%';
        document.getElementById('div9').style.opacity = '50%';
        message.innerHTML = 'Has ganado!! 🤑';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
            location.reload();
        }, 2000);
    }else if((array1[6] == 1) && (array1[7] == 1) && (array1[8] == 1)){
        win.classList.add('win-last-row');
        document.getElementById('div1').style.opacity = '50%';
        document.getElementById('div2').style.opacity = '50%';
        document.getElementById('div3').style.opacity = '50%';
        document.getElementById('div4').style.opacity = '50%';
        document.getElementById('div5').style.opacity = '50%';
        document.getElementById('div6').style.opacity = '50%';
        message.innerHTML = 'Has ganado!! 🤑';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
            location.reload();
        }, 2000);
    }else if((array1[0] == 1) && (array1[3] == 1) && (array1[6] == 1)){
        win.classList.add('win-first-column');
        document.getElementById('div2').style.opacity = '50%';
        document.getElementById('div3').style.opacity = '50%';
        document.getElementById('div5').style.opacity = '50%';
        document.getElementById('div6').style.opacity = '50%';
        document.getElementById('div8').style.opacity = '50%';
        document.getElementById('div9').style.opacity = '50%';
        message.innerHTML = 'Has ganado!! 🤑';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
            location.reload();
        }, 2000);
    }else if((array1[1] == 1) && (array1[4] == 1) && (array1[7] == 1)){
        win.classList.add('win-second-column');
        document.getElementById('div1').style.opacity = '50%';
        document.getElementById('div3').style.opacity = '50%';
        document.getElementById('div4').style.opacity = '50%';
        document.getElementById('div6').style.opacity = '50%';
        document.getElementById('div7').style.opacity = '50%';
        document.getElementById('div9').style.opacity = '50%';
        message.innerHTML = 'Has ganado!! 🤑';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
            location.reload();
        }, 2000);
    }else if((array1[2] == 1) && (array1[5] == 1) && (array1[8] == 1)){
        win.classList.add('win-last-column');
        document.getElementById('div1').style.opacity = '50%';
        document.getElementById('div2').style.opacity = '50%';
        document.getElementById('div4').style.opacity = '50%';
        document.getElementById('div5').style.opacity = '50%';
        document.getElementById('div7').style.opacity = '50%';
        document.getElementById('div8').style.opacity = '50%';
        message.innerHTML = 'Has ganado!! 🤑';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
            location.reload();
        }, 2000);
    }else if((array1[0] == 1) && (array1[4] == 1) && (array1[8] == 1)){
        win.classList.add('win-top-left-to-bottom-right');
        document.getElementById('div2').style.opacity = '50%';
        document.getElementById('div3').style.opacity = '50%';
        document.getElementById('div4').style.opacity = '50%';
        document.getElementById('div6').style.opacity = '50%';
        document.getElementById('div7').style.opacity = '50%';
        document.getElementById('div9').style.opacity = '50%';
        message.innerHTML = 'Has ganado!! 🤑';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
            location.reload();
        }, 2000);
    }else if((array1[6] == 1) && (array1[4] == 1) && (array1[2] == 1)){
        win.classList.add('win-top-right-to-botton-left');
        document.getElementById('div1').style.opacity = '50%';
        document.getElementById('div2').style.opacity = '50%';
        document.getElementById('div4').style.opacity = '50%';
        document.getElementById('div6').style.opacity = '50%';
        document.getElementById('div8').style.opacity = '50%';
        document.getElementById('div9').style.opacity = '50%';
        message.innerHTML = 'Has ganado!! 🤑';
        message.classList.add('message-show');
        setTimeout(() => {
            message.classList.remove('message-show');
            location.reload();
        }, 2000);
    }
    
}