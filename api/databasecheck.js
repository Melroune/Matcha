import * as dbtools from './databasetools';

const databaseCheck = async (body, db) => {
	const users = db.collection('users');
	if (await dbtools.dbUsernameCheck(body.username, users) === false) {
		return false;
	}
	if (await dbtools.dbEmailCheck(body.email, users) === false) {
		return false;
	}
	return true;
};

export default databaseCheck;
