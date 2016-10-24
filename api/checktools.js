import _ from 'lodash';
import regex from 'regex-email';

const objectIsEmpty = (object) => {
		const empty = _.filter(object, (el) => el === ''); // etudier le fonctionnment de filter
		return (!empty.length);
};

const usernameCheck = (username) => {
	const usernameRegex = new RegExp('^[a-zA-Z\-]*$', 'g');
	if (username.length < 5 || username.length > 15) {
		return false;
	}	else if (!usernameRegex.test(username)) {
		return false;
	}
	return true;
};

const emailCheck = (email, emailRe) => {
		if (!regex.test(email)) {
			return false;
		}	else if (emailRe.localeCompare(email) !== 0) {
			return false;
		}
		return true;
};

const nameCheck = (value) => {
	const valueRegex = new RegExp('^[a-zA-Z\-]*$', 'g');
	if (value.length < 2 || value.length > 30) {
		return false;
	} else if (!valueRegex.test(value)) {
		return false;
	}
	return true;
};

const passwordCheck = (password, passwordRe) => {
	const passRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.).*$', 'g');
	if (password.length < 8 || password.length > 20) {
		return false;
	} else if (!passRegex.test(password)) {
		return false;
	}	else if (passwordRe.localeCompare(password) !== 0) {
		return false;
	}
	return true;
};

export { objectIsEmpty, usernameCheck, emailCheck, nameCheck, passwordCheck };
