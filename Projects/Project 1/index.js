// //Method 1
// // const buttons=document.querySelectorAll('.button');
// // const body=document.querySelector("body");

//  buttons.forEach(function (button)
//  {
// //     button.addEventListener('click', function(e)
// //     {
// //         console.log(e.target);
// //         if(e.target.id==='grey')
// //         {
// //             body.style.backgroundColor=e.target.id;
// //         }
// //         if(e.target.id==='yellow')
// //         {
// //             body.style.backgroundColor=e.target.id;
// //         }
// //         if(e.target.id==='blue')
// //         {
//             body.style.backgroundColor=e.target.id;
//          }
//          if(e.target.id==='green')
//         {
//             body.style.backgroundColor=e.target.id;
//         }
//      })
// });

//Method 2
const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function (button)
{
button.addEventListener('click', function(e)
{
const key=e.target;
switch (key) {
    case grey:
        body.style.backgroundColor=key.id;
        break;
        case yellow:
        body.style.backgroundColor=key.id;
        break;
        case blue:
        body.style.backgroundColor=key.id;
        break;
        case green:
        body.style.backgroundColor=key.id;
        break;
    default:
        break;
}

})});