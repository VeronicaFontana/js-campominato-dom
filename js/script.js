const container = document.querySelector(".container");
const btnStart = document.querySelector(".btn-start");
const btnRestart = document.querySelector(".btn-restart");
const select = document.querySelector(".form-select");
const endgameResult =  document.getElementById("endgame");
endgameResult.classList.add("d-none");

let randomicNumber; 
let numeroTrovato = false;
let numeroDoppio = false;
let bombs = [];
let blackList = [];
let counter = 0;



//BUTTONS//
btnRestart.addEventListener("click", function(){
  btnStart.classList.remove("d-none");
  container.classList.add("d-none");
  container.innerHTML = " ";
  select.value = 0;
  bombs = [];
  endgameResult.classList.add("d-none");
})

btnStart.addEventListener("click", function(){
  btnStart.classList.add("d-none");
  container.classList.remove("d-none");

  if(select.value == 1){
    console.log("facile");
    easy();
  }else if(select.value == 2){
    console.log("medio");
    medium();
  }else if(select.value == 3){
    console.log("difficile");
    hard();
  }else{
    console.log("seleziona un livello di difficoltà");
  }
})


// FUNCTIONS //
function easy(){
  for(c = 1; c <= 16; c++){
    randomicNumber = randomizer(1, 100);
    doppio();
    bombs.push(randomicNumber);
  }
  console.log(bombs)

  for(i = 1; i <= 100; i++){
    const square = createBox(i);
    square.classList.add("box-100");
    container.append(square);
    const inclusion = bombs.includes(i);

    if(inclusion){
      square.classList.add("box-bomb");
    }
    
    square.addEventListener("click", function(){
      bombFinder(square);
    })
  }
}

function medium(){
  for(c = 1; c <= 16; c++){
    randomicNumber = randomizer(1, 81);
    bombs.push(randomicNumber);
  }
  console.log(bombs);

  for(i = 1; i <= 81; i++){
    square = createBox(i);
    square.classList.add("box-81");
		container.append(square);
    
    square.addEventListener("click", function(){
      bombFinder(square);
    })
  }
}

function hard(){
  for(c = 1; c <= 16; c++){
    randomicNumber = randomizer(1, 49);
    bombs.push(randomicNumber);
  }
  console.log(bombs);

  for(i = 1; i <= 49; i++){
    square = createBox(i);
    square.classList.add("box-49");
		container.append(square);

    square.addEventListener("click", function(){
      bombFinder(square);
    })
  }
}


function createBox(index){
	const newBox = document.createElement("div");
	newBox.className = "box";
	newBox.innerHTML = index;
	return newBox;
}

function randomizer(min, max){
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

function bombFinder(variable){
  for(let i = 0; i < bombs.length; i++){
    if(bombs[i] == variable.innerHTML){
      numeroTrovato = true;
    }
  }

  if(numeroTrovato){
    console.log("bomba");
    endgameResult.classList.remove("d-none");
    endgameResult.innerHTML = `Hai fatto ${counter} punti!`
    numeroTrovato = false;
  }else{
    console.log("non bomba");
    variable.classList.add("no-box-bomb");
    counter++;
  }
}

function doppio(){
  for(let i = 0; i < bombs.length; i++){
    if(bombs.includes(randomicNumber)){
      numeroDoppio = true;
    }else{
      numeroDoppio = false;
    }
  }
  

  if(numeroDoppio){
    console.log("numero doppio")
    blackList.push(randomicNumber);
    numeroDoppio = false;
  }else{
    console.log("no numero doppio")
  }

  console.log(blackList);
}