Router.configure({
    loadingTemplate: 'loading',
    layoutTemplate: 'layout',
});

if (Meteor.isClient) {
    
    Meteor.subscribe('posts');
}


Router.map(function() {    
    this.route('index', {
	name:'index',
	path: '/'
	// data: function () {
	//     return Post.find({}, {
	// 	sort: {created_at: -1},
	// 	limit:1})
	// }
	
    });    
    
    this.route('post', {
	name: 'post',
	path: '/post/:id',
	template: 'postOne'
    });
});


IndexController = RouteController.extend({

    waitOn: function () { return Meteor.subscribe('posts'); },
    
    // subscriptions: function(){
    // 	//this.subscribe('posts', this.limit)
    // },
    
    data: function (){
	return {posts: Post.find({}, {sort: {created_at: -1}})};
    }
});


PostController = RouteController.extend({
    data: function(params) {
	return Post.findOne(this.params.id);
    },
    action: function(){
	$("#link").val("http://" + this.params._id);
	this.render();
    }
});


Router.onBeforeAction('loading');

