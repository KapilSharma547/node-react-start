const Post = require('../models/post')

exports.getPosts = async (req, res) => {
    // res.send("Hello world from node js regularly");
    const post = await Post.find().exec()
    return res.status(200).json({
        post
    })
}


exports.createPost = async (req, res) => {
    const { title, body } = req.body;
    const post = new Post({ title, body })
    const obj = await post.save()
    return res.status(200).json({
        obj
    })

    // const post = new Post(req.body);
    // post.save().then(result => {
    //     res.result(200).json({
    //         post: result
    //     })
    // })


};
// console.log("CREATING POST:", req.body);