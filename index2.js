// // // // //destructuring assignment
// // // // let voxel = {x: 3.6, y: 7.4, z: 6.54};

// // // // let x = voxel.x;
// // // // let y = voxel.y;
// // // // let z = voxel.z;

// // // // const {x : a, y: b, z : c } = voxel;


// // // // const AVG_TEMPETURES = {
// // // //     today: 77.5,
// // // //     tomorrow: 79
// // // // };

// // // // function getTempOfTmrw(AVG_TEMPETURES) {
// // // //     "use strict";

// // // //     const {tomorrow : tempOfTomorrow}= AVG_TEMPETURES;

// // // //     return tempOfTomorrow
// // // // }

// // // // console.log(getTempOfTmrw(AVG_TEMPETURES));

// // // //Destructuring assignment with nested objects

// // // const LOCAL_FORECAST = {
// // //     today: {min: 72, max : 83},
// // //     tomorrow: { min: 73.3, max: 84.6}
// // // };

// // // function getMaxOfTmrw(forecast) {
// // //     "use strict";

// // //     const {tomorrow : { max : maxOfTomorrow }} = forecast;
    
// // //     return maxOfTomorrow;
// // // }

// // // console.log(getMaxOfTmrw(LOCAL_FORECAST));

// // //destructuring assignment to variables from arrays

// // const [z, x, , y] = [1, 2, 3, 4, 5, 6];
// // console.log(z, x, y);

// // let a = 8, b = 6;
// // (() => {
// //     "use strict";
// //     [a, b] = [b, a]
// // })();
// // console.log(a)
// // console.log(b)

// //destructuring with rest operators

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {

//     const [ , , ...arr] = list; 

//     return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

//destructuring assignment as a function parameter

const stats = {
    max:56.78,
    standard_deviation: 4.34,
    median:34.54,
    mode:23.87,
    min:-0.75,
    average:35.85
};
const half = (function(){

    return function half({ max, min }) {
        return (max + min / 2.0);
    };

})();
console.log(stats);
console.log(half(stats));