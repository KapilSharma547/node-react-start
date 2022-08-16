const express = require('express')
const postController = require('../controllers/post')
// const validator = require('../validator/index')


const router = express.Router();   

router.get('/post', postController.getPosts)
router.post('/createpost', postController.createPost);
// router.post('/createpost', validator.createPostValidator, postController.createPost);

module.exports = router;

