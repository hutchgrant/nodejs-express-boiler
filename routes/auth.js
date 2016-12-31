exports.isLoggedIn = function(req, res, next) {
	if (req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
};

exports.notLoggedIn = function(req, res, next) {
	if (!req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
};
exports.isAdmin = function(req, res, next) {
	if (req.isAuthenticated()){
		if (req.user.admin) { 
			return next();
		}
	}
	res.redirect('/');
};

exports.isAdminBool = function(req, res, next) {
	if (req.isAuthenticated()){
		if (req.user.admin) { 
			return true;
		}
	}
	return false;
};