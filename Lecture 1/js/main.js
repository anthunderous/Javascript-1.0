let count=0;
for(let i=2;i<100;i++){
  let check = false;
  for(let j=2;j<i;j++){
    count++;
    if(i%j==0)
      check = true;
  }
  if(check==false){
    document.body.innerHTML += "Число " + i + " - простое. Его натуральные делители это: 1 и "+i + "<br>";
  }
}
console.log(count);