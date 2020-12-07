console.log('agg');



function f2 (a,b) {
    let maxValue = Math.max(a,b);
    console.log(maxValue);
}
f2(3,18);

function f3 (a,b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    let randomValue = Math.floor(Math.random()*(a-b)) + b;
    console.log(randomValue);
}
f3(0, 10)

