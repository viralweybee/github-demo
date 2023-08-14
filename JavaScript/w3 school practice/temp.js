// //set in javascript 
// const a="a";
// const b='b'
// const c='c'
// const set =new Set()
// set.add(a)
// set.add(b)
// set.add(c)
// set.add(2)
// // set.delete(a)
// console.log(set)
// let text='';
// set.forEach(function(value){
//     text+=value;
// })
// set.has('b')
// console.log(set.has('b'))



//map in javascript
// const fruits=new Map();
// fruits.set("apples",0)
// fruits.set("banana",1)
// fruits.set("oranges",2)
// fruits.set(1,2)

// fruits.has(1)
// console.log(fruits.has(2))


// const airline='TAP Air Portugal'
// console.log(airline.indexOf('r'))
// console.log(airline.indexOf('Portugal'))
// console.log(airline.slice(' '))

// const s='Viral Devmurari'
// const arr=s.split(' ')
// console.log(arr)

const captializeName=function(name){
    const names=name.split(' ');
    const namesUpper=[]
    for(const n of names){
        namesUpper.push(n[0].toUpperCase()+n.slice(1))
    }
    console.log(namesUpper.join(' '));
}
captializeName('jessica ann smith davis')