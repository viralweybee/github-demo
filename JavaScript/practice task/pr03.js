var arr1=['apple',7,1]
var arr2=[7,3,'apple','apple']
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            console.log(arr1[i]);
            arr2.splice(j,1)
            arr1.splice(i,1)
            i=-1;
        }
    }
}
