let a = "beautiful";
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);

const food = "I was feeling hungry today";
let fourthIndex = 5;
let output = food.slice(0, fourthIndex) + "eat";
console.log(output);

const story = "The quick brown fox jumps over the lazy dog";
let t = (story.match(/the/g) || []).length;
console.log(t);
let z = (story.match(/brown/g) || []).length;
console.log(z);

const string1 = "We are now going to school";
stringFind = "now";
if(stringFind ){
console.log(true)
}
else{
    console.log(false)
}

const string2 = "The child was sitting on the table before it fell";
stringFind2 = "sitting";
if(stringFind2){
    console.log(true)
}
else{
    console.log(false)
}

let b = "wonderful";
let c = b.toUpperCase();
console.log(c);

let d = "amazing";
let e = d.toUpperCase();
console.log(e);

let f = "BEneath";
let g = f.toLowerCase();
console.log(g);

let x = "A beautiful wedding";
x=x.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(x);