/*
 * @Description: đĺ¨čżéĺä˝ çćčż°
 * @Autor: ćščćż
 * @Date: 2022-03-22 09:35:38
 * @LastEditTime: 2022-03-25 11:49:09
 */
// const num = 233000




/**
 * ćžĺşéĺ¤çĺç´ 
 */
let a = [1,1,1,2,2,3,"a","b","a"];
let b = []
for(let i=0;i<a.length;i++){
    for(let j = i+1;j<a.length;j++){
        if(a[i] === a[j] && b.indexOf(a[j])){
            b.push(a[j])
        }
    }
}
console.log(b);
const c = a.filter(item=>{
    return b.indexOf(item)==-1
})
console.log(c);



// ćžä¸ĺ
// function getArrDifference(arr1, arr2) {
//     return arr1.concat(arr2).filter(function(v, i, arr) {
//         return arr.indexOf(v) === arr.lastIndexOf(v);
//     });
// };
// // ćžéĺ¤
// function getArrRepeat(arr) {
//     let obj = {};
//     for (let i in arr) {
//         if(obj[arr[i]]) {
//             return true;
//         }
//         obj[arr[i]] = true;
//     }
//     return false;
// };