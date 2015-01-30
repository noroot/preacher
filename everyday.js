
Handlebars.registerHelper("formatDate", function(timestamp) {
    return moment(timestamp).format('DD-MM-YYYY')
});



if (Meteor.isClient) {

    Template.postForm.events({
	'submit .post-form': function(event) {
	    var text = event.target.message.value;
	    var title = event.target.title.value;
	    var privateFlag = event.target.title.value;

	    if (text && title)
	    {
		var id = Post.insert({
		    title: title,
		    message: text,
		    user: Meteor.user(),
		    private_flag: privateFlag,
		    created_at: Date.now(),
		    
		});
		$(".form-msg").html('');

		Router.go('post', {id: id});
	    }
	    else
	    {
		$(".form-msg").html('<div class="alert alert-warning" role="alert">Empty values not allowed</div>');
	    }
	    return false;
	}	
    }); 
}

    

if (Meteor.isServer) {
    Meteor.startup(function () {
	// code to run on server at startup
    });
}
