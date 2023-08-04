import {
	addUpdateCustomer,
	getCustomer,
	deleteCustomer,
    getCustomersForAge
} from './ddb-proxy.mjs';

const main = async () => {
	const customer = {
		customerId: 1,
		firstName: 'Alice',
		lastName: 'Jones',
		age: 27,
		zip: 14580,
	};
	await addUpdateCustomer(customer);
};
main();


// const res = await getCustomer(1);
// console.log(res);

const res = await getCustomersForAge(27);
console.log(res);