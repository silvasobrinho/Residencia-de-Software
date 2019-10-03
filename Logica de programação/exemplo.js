//IF
let a = true;
let b = true;

if ( a&& b){
    console.log('1');
    if(a){
        console.log('2')
        b=false;
    }
    console.log('3');
}
if(a||b){
    console.log('4');
    if(b){
        console.log('5');
    }
console.log('6');
}
console.log('7');
