const promisePool = require('../PromisePool').pool;

const SELECT_CAR = 'select * from car where car_id = ?';

exports.selectCarById = async (carId) => {
	try {
		const [rows] = await promisePool.query(SELECT_CAR, [carId]);
		return rows[0];
	} catch (e) {
		console.log(e);
	}
};
