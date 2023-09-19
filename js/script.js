const container = document.querySelector(".container");
const btnStart = document.querySelector(".btn-start");
const btnRestart = document.querySelector(".btn-restart");
const select = document.querySelector(".form-select");
const endgameResult =  document.getElementById("endgame");
const mLayer = document.querySelector(".m-layer");
const tLayer = document.querySelector(".t-layer");


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
  mLayer.innerHTML = " ";
  select.value = 0;
  bombs = [];
  endgameResult.classList.add("d-none");
  tLayer.classList.add("d-none");
  counter = 0;
})

btnStart.addEventListener("click", function(){
  btnStart.classList.add("d-none");
  mLayer.classList.remove("d-none");
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
  do{
    randomicNumber = randomizer(1, 100);
    doppio();
  }while(bombs.length < 16);

  console.log(bombs)

  for(i = 1; i <= 100; i++){
    const square = createBox(i);
    const mSquare = createBox(i);
    square.classList.add("box-100");
    mSquare.classList.add("box-100");
    
    mLayer.append(mSquare);
    container.append(square);
    const inclusion = bombs.includes(i);

    if(inclusion){
      square.classList.add("box-bomb");
    }

    function listenAdd(){
      mSquare.addEventListener("click", function(){
        bombFinder(mSquare);
      })
    }
    
    mSquare.removeEventListener("click", listenAdd())
  }
}

function medium(){
  do{
    randomicNumber = randomizer(1, 81);
    doppio();
  }while(bombs.length < 16);

  console.log(bombs)

  for(i = 1; i <= 81; i++){
    const square = createBox(i);
    const mSquare = createBox(i);
    square.classList.add("box-81");
    mSquare.classList.add("box-81");
    
    mLayer.append(mSquare);
    container.append(square);
    const inclusion = bombs.includes(i);

    if(inclusion){
      square.classList.add("box-bomb");
    }

    function listenAdd(){
      mSquare.addEventListener("click", function(){
        bombFinder(mSquare);
      })
    }
    
    mSquare.removeEventListener("click", listenAdd())
  }
}

function hard(){
  do{
    randomicNumber = randomizer(1, 49);
    doppio();
  }while(bombs.length < 16);

  console.log(bombs)

  for(i = 1; i <= 49; i++){
    const square = createBox(i);
    const mSquare = createBox(i);
    square.classList.add("box-49");
    mSquare.classList.add("box-49");
    
    mLayer.append(mSquare);
    container.append(square);
    const inclusion = bombs.includes(i);

    if(inclusion){
      square.classList.add("box-bomb");
    }

    function listenAdd(){
      mSquare.addEventListener("click", function(){
        bombFinder(mSquare);
      })
    }
    
    mSquare.removeEventListener("click", listenAdd())
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
    tLayer.classList.remove("d-none");
    mLayer.classList.add("d-none");
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
    bombs.push(randomicNumber);
  }

  console.log(blackList);
}


