const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

//console.log(marvel_heros.concat(dc_heros));

const allnewsHeros=[...marvel_heros,...dc_heros]
console.log(allnewsHeros);


const anotherArray=[1,2,3,[4,5,6],7,[6,7,[8,9]]]
const usableAnotherArray=anotherArray.flat(Infinity)
console.log(usableAnotherArray);

console.log(Array.isArray("saurah"));
console.log(Array.from("da"));
console.log(Array.of("da","df"));



