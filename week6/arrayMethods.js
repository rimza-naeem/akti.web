let arrayOfSubjects = ["eng", "urdu", "maths","phy","chem","bio"]
console.log(arrayOfSubjects);
//push array(add at end)
arrayOfSubjects.push("islamiat")
console.log(arrayOfSubjects)
//pop array(remove from end)
arrayOfSubjects.pop()
console.log(arrayOfSubjects);
//shift(remove from start)
arrayOfSubjects.shift()
console.log(arrayOfSubjects);
//unshift(add at start)
arrayOfSubjects.unshift("pakstudies")
console.log(arrayOfSubjects);
//slice (remove from any point)
arrayOfSubjects.splice("0,1","g,x")
console.log(arrayOfSubjects);