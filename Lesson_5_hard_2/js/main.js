var date = new Date();
function addZero(temp){
	if(temp<10)
		return "0"+temp;
	else
	 return temp;
}
console.log(`${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} ${addZero(date.getDate())}.${addZero(date.getMonth())}.${addZero(date.getFullYear())}`);

var options = {
  weekday: 'long',
};

alert( date.toLocaleString("ru", options) ); 


let date1 = document.querySelector("#date1"),
date2 = document.querySelector("#date2"),
output= document.querySelector("#output"),
btn = document.querySelector("#btn");

btn.addEventListener('click', ()=>{
	// output=(Date.parse(date1.value)).getDate()-Date.parse(date1.value).getDate();
	// output=(date1.value.toDateString()-date2.value.toDateString());

	console.log(Date.parse(date1.value).toLocaleString().getHours());
	console.log(Date.parse(date2.value));
	console.log(new Date());
});
