var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
 exports.addRSVP = function(req, res){
	var rsvpEmail = req.body.rsvpEmail;
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail);

	res.send(rsvpEmail);
}

exports.adminView = function(req, res){
  res.render('rsvp', data);
};
