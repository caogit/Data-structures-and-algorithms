/*
 * @Description: ðå¨è¿éåä½ çæè¿°
 * @Autor: æ¹èæ¿
 * @Date: 2022-03-22 08:59:12
 * @LastEditTime: 2022-03-22 09:29:45
 */

// [1,2,[3,[4]]]

const arr = [1,2,[3,[4,[5,'a']]]]



/**
 * æ°ç»æå¹³å,æ·±åº¦æå¹³å
 * @param {arr} arr 
 * @returns arr
 */
function foo(arr,filterArr = []){
    for(let i =0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            foo(arr[i],filterArr)
        }else{  
            filterArr.push(arr[i])
        }
    }
    return filterArr
} 
console.log(foo(arr)); 



const brr = [1,2,[3,[4]]]
/**
 * åå±æ°ç»æå¹³å,æ³¨æconcatè¿åä¸ä¸ªæ°æ°ç»
 * @param {*} arr 
 * @returns arr
 */
function foo2(arr){
    let res = []

    arr.forEach(item => {
      res= res.concat(item)
    });

    return res
}

console.log(foo2(brr));