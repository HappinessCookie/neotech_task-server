const casual = require('casual');
const fs = require('fs');

let dbRaw = fs.readFileSync('db.json');
let db = JSON.parse(dbRaw);

debugger;

casual.define('user', function () {
	return {
		email: casual.email,
		username: casual.first_name,
		firstName: casual.first_name,
		lastName: casual.last_name,
		phone: casual.phone,
	};
});

const users = [];

for (let i = 0; i < 200; i++) {
	const user = casual.user;
	user.id = i;
	users.push(user);
}

db.user = users;

fs.writeFileSync('db.json', JSON.stringify(db));
