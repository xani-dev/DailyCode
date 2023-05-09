let num = 3;
let person1 = { firstName: 'Alice' };
let person2 = { firstName: 'Bob' };


const changeStuff = (a, b, c) => {
	a = a * 10; //Primitive type, passed by copy
	console.log(a); //This is inside the function, it will be changed
	b.firstName = 'ALICE'; //Reference type, updates are propagted
	c = { firstName: 'Charles' }; //Reference type: New creations are not propagated
	console.log(c.firstName);
};

changeStuff(num, person1, person2);

console.log(num); //num is now outside of the function's scope, the change won't persist
console.log(person1.firstName);
console.log(person2.firstName);
