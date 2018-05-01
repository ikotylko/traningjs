function task1(A){
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
}

function task2(A){
var newArr= [];
result = {};
for(i=0; i<A.length; i++){
  idx= A.indexOf(A[i]);

  while (idx != -1) {
      newArr.push(idx);
      idx = A.indexOf(A[i], idx + 1);
  }
result[A[i]]=newArr.length
newArr= []
}
console.log(result);
}

A=[1, 11, 11, 1, 2, -323, 11, -11];

console.log(A);
task1(A);
task2(A);