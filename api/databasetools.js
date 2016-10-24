import whirlpool from 'whirlpool';

const dbUsernameCheck = async (username, users) => {
	const user = await users.findOne({ username });
	// console.log(user);
	if (user) {
		return false;
	}
	return true;
};

const dbEmailCheck = async (email, users) => {
	const mail = await users.findOne({ email });
	if (mail) {
		return false;
	}
	return true;
};

const dbPasswordCheck = async (username, password, users) => {
		const user = await users.findOne({ username });
		if (user.password.localeCompare(whirlpool(password)) !== 0) {
			return false;
		}
		return true;
};

export { dbUsernameCheck, dbEmailCheck, dbPasswordCheck };
