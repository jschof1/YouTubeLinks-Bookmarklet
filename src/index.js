import "./styles.css";

var arr = [], l = document.links;
for (var i = 0; i < l.length; i++) {
  arr.push(l[i].href);
}



let final = []
for(let i of arr){
  final.push(i.replaceAll('jsitor.com', 'youtube.com'))
}



let uniq = [...new Set(final)];

// function coshema(){
// for (let i; i<uniq.length; i++){
//   if (!uniq[i].includes("channel") == true){
//     let hi = uniq[i]
//   }
// }
// return hi
// }

// console.log(coshema)


const result = uniq.filter(uniq => uniq.includes('watch'))
// const resultFinal = result.replaceAll(`&t=${Number(true)}`, '')
console.log(result)



