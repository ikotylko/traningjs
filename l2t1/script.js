var A=[1, 11, -11, -1, 2, -323];
var B=[];
var C=[];
for (i=0; i<A.length; i++){
  if (A[i]>0){
    B.push(A[i]);
  }else if(A[i]<0){
    C.push(A[i]);
  }
}
console.log(B,C);