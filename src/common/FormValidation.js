export const validateMail = mail => {
	const pattern = new RegExp(
		'^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$'
	);
	return pattern.test(mail);
};

export const validatePassword = password => {
	return password.length > 5;
};
