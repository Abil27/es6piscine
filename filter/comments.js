let post = {id: 4, title: 'New Post'};
let comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'ok get it'},
    {postId: 4, content: 'hmmmmm'},
];

function commentsOnPosts(post, comments){
    return comments.filter((comment) => {
        return comment.postId === post.id;
    });
}
console.log(commentsOnPosts(post, comments));