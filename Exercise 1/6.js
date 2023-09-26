/*User Input date format – “DD/MM/YYYY” (27/11/2022)
Output format –
“Day – DD , Month – MM , Year – YYYY” (Day – 27 ,Month – 07 , Year – 2022*/
const date=new Date().getDate();
const month=new Date().getMonth()+1;
const year=new Date().getFullYear();
console.log(`Day - ${date} ,Month - ${month} , Year - ${year}`)