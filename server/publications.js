Meteor.publish('posts', function(){
    return Post.find({}, {sort: {created_at: -1}, limit: 5});
});
