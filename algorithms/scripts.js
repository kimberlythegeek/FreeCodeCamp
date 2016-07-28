// function updateInventory(inventory, shipment) {

//   console.log(inventory);
//   console.log(shipment);

//   var found = false;
//   for(i=0; i<shipment.length; i++){
//     found = false;
//     for(j=0; j<inventory.length; j++){
//       if(shipment[i][1] === inventory[j][1]){
//         found = true;
//         inventory[j][0] += shipment[i][0];
//       }
//     }
//     if(!found) console.log('item ' + shipment[i][1] + ' not already in inventory');
//     else console.log('item ' + shipment[i][1] + ' exists');
//     if(!found) inventory.push(shipment[i]);
//   }
//     inventory.sort(function(a,b){
//       return a[1] > b[1];
//     });

//     return inventory;
// }

// // Example inventory lists
// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];

// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];


// $(document).ready(function(){

//   console.log('\n\n\ntest 1\n');
//   console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length);
//   console.log('\n\n\ntest 2\n');
//   console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
//   console.log('\n\n\ntest 3\n');
//   console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []));
//   console.log('\n\n\ntest 4\n');
//   console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
//   console.log('\n\n\ntest 5\n');
//   console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));
// });





var newArray = [];
function steamrollArray(arr) {
  for(i=0; i<arr.length; i++){
    if(arr.length < 1) break;
    else if(Array.isArray(arr[i])) steamrollArray(arr[i]);
    else newArray.push(arr[i]);
  }
}


$(document).ready(function(){
  steamrollArray([1, [], [3, [[4]]]]);
  console.log(newArray);
});
