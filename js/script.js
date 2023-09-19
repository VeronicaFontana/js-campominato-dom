const container = document.querySelector(".container");
const btnStart = document.querySelector(".btn-start");
const btnRestart = document.querySelector(".btn-restart");
const select = document.querySelector(".form-select");
let randomicNumber; 
let numeroTrovato = false;
const bombs = [];







//BUTTONS//
btnRestart.addEventListener("click", function(){
  btnStart.classList.remove("d-none");
  container.classList.add("d-none");
  container.innerHTML = " ";
  select.value = 0;
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
    bombs.push(randomicNumber);
  }
  console.log(bombs)

  for(i = 1; i <= 100; i++){
    const square = createBox(i);
    square.classList.add("box-100");
    container.append(square);

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
    const square = createBox(i);
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
    const square = createBox(i);
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
    numeroTrovato = false;
  }else{
    console.log("non bomba");
  }
}