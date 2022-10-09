//spread operators
const arr1 = ['jan', 'FEB','MAR','APR','MAY'];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = 'potato' 
})();
console.log(arr1);