const check=(a,b,c)=>{
    if(a>=b&&c>=a){
        return true;
    }
    else{
        return false
    }
}
const check1=(a,b)=>{
    if(b>=a){
        return true;
    }
}
console.log(check(3,2,5))
