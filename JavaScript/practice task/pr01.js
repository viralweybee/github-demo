var arr=['a','b','c','a','b','c']
var task=['c','a','a']
var temp=[]
let j=0
for(let i=0;i<arr.length;i++){
    if(arr[i]!==task[j]){
        temp.push(arr[i])
        j++;
    }
    else if(j>=task.length){
        temp.push(arr[i])
    }
}
console.log(temp)