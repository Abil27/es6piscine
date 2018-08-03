let posts = [
    {id: 1, title: 'new post'},
    {id: 2, title: 'old post'}
]

let comment = {postId : 1, content: 'Love Africa'};

 function postForComment (posts, comment) {
    return posts.find((post) => {
        return post.id === comment.postId;
    })
}

console.log(postForComment(posts, comment));