/*const prompt = require("prompt-sync")();

prompt("Enter Speed: ");
*/
function speedDetector(speed){
const speedLimit= 70
const speedRate = 5
if(speed < speedLimit){
    console.log("Okay")
}
const speedDifference = speed - speedLimit

let demeritPoint = 0
for(let i=0;i<speedDifference; i+=speedRate){
    demeritPoint+=1
    if(demeritPoint>12){
        return 'License suspended'
     }
   }
   return `Points: ${demeritPoint}`

}
console.log(speedDetector(150))
    