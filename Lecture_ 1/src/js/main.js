function execute(end){
  for(let i=2;i<end;i++){
      let check = false;
    for(let j=2;j<i;j++){
      if(i%j===0)
        check=true;
      }
     if(!check){
      document.body.innerHTML += `Число ${i} имеет делители: 1 и ${i} <br>`;
    }
  }
}
execute(100);