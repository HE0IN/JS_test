let moon = {
    name: "배문형",
    age: 36,
}

let HEO = {
    name: "허영인",
    age: 26,
}

console.log(moon.age > HEO.age);

if (moon.age > HEO.age) {
    console.log(moon.name + '이 ' + HEO.name + '보다 나이가 많습니다.')
}
else if (moon.age < HEO.age) {
    console.log(moon.name + '이 ' + HEO.name + '보다 나이가 적습니다.')
}
else {
    console.log('둘은 나이가 같습니다.');
}
console.log((moon.age < HEO.age ? moon.name : HEO.name) + '이 젊습니다');
console.log('------------------------------------------------');

moon.weight = 80;
HEO.weight = 70;
console.log(moon);

for(let i = 1 ; i < 11 ; i++){
    for(let j = 0 ; j < 3 ; j++){
        console.log(i);
    }
    console.log(i);
}