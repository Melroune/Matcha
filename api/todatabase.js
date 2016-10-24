import whirlpool from 'whirlpool';

const toDatabase = (body, db) => {
	const users = db.collection('users');
	users.insertOne({
		username: body.username,
		email: body.email,
		firstName: body.firstName,
		lastName: body.lastName,
		password: whirlpool(body.password),
		birthdate: body.birthdate,
		token: null,
		mailCheck: 0,
		location: null,
		orientation: 'bisexual',
		liked: null,
		likedby: null,
		lastLogout: null,
		report: 0,
		popularity: 0,
	}, (err, result) => {
		if (err) {
			return false;
		}
			// console.log(result);
			return true;
	}
);
};

export default toDatabase;
