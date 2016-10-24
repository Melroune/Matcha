import getIP from 'external-ip';
import satelize from 'satelize';
import geocoder from 'node-geocoder';

const getIpLocation = (req, res) => {
		console.log('los ojos des cielo');
		getIP((err, ip) => {
			if (err) {
				console.log('maria');
				console.log(err);
			}
			if (!err) {
					satelize.satelize({ ip:ip }, (err, payload) => {
						geocoder.reverse({
							lat: payload.latitude,
							lon: payload.longitude,
						}, (err, loc) => {
							console.log('test');
							console.log(loc[0].city);
							res.send({
								city: loc[0].city,
								country: loc[0].country,
								latitude: payload.latitude,
								longitude: payload.longitude,
							});
						}
					);
				});
			}
			return true;
		});
		// getIP();
};

export default getIpLocation;
