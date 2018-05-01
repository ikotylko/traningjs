var A=[1, 11, 11, 1, 2, -323, 11, -11];
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
console.log(result)