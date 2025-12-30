let Tableprint = prompt("Which table do you want to print?");
let Limit = prompt("Up to which number do you want to print it?");

for(let i = 1; i <= Limit; i++){
    console.log(Tableprint + " x " + i + " = " + i * Tableprint);
}