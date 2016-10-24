import * as ctools from './checktools';
import * as dbtools from './databasetools';

const login = async (body, db) => {
	const users = db.collection('users');
	console.log('aaa');
	if (await ctools.objectIsEmpty(body) === false) {
		return false;
	} else if (await ctools.usernameCheck(body.username) === false) {
		return false;
	} else if (await dbtools.dbPasswordCheck(body.username, body.password, users) === false) {
		return false;
	}
	return true;
};

export default login;
