const promisePool = require('./PromisePool.js').promisePool;

const SELECT_PERSON = 'select * from person where person_id = ?';

exports.selectPersonById = async (personId) => {
	try {
		const [rows] = await promisePool.query(SELECT_PERSON, [personId]);
		return rows;
	} catch (e) {
		console.log(e);
	}
};
