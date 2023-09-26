/*WAP to take time as an input in below given format and convert the time format and 
display the result as given below.
User Input date format – “HH:MM”
Output format – “HH hour and MM Minute”
Example –
“11:25” converted to “11 Hour and 25 Minute”*/
const hour=new Date().getHours();
const min=new Date().getMinutes();
const sec=new Date().getSeconds();
console.log(`${hour} Hour and ${min} Minute ${sec} Seconds`);