import * as ctools from './checktools';

const firstCheck = async (body) => {
	if (await ctools.objectIsEmpty(body) === false) {
		return false;
	} else if (await ctools.usernameCheck(body.username) === false) {
		return false;
	}	else if (await ctools.emailCheck(body.email, body.emailRe) === false) {
		return false;
	} else if (await ctools.nameCheck(body.firstName) === false) {
		return false;
	} else if (await ctools.nameCheck(body.lastName) === false) {
		return false;
	}	else if (await ctools.passwordCheck(body.password, body.passwordRe) === false) {
		return false;
	}
};

export default firstCheck;
