exports.createPostValidator = (req, res, next) => {
    req.chek('title', 'write a title').notEmpty()
    req.chek('title', "Title must be between 4 to 150 charcters").isLength({
        min: 4,
        max: 150
    });

    //body

    req.chek('body', 'write a body').notEmpty()
    req.chek('body', "Body must be between 4 to 150 charcters").isLength({
        min: 4,
        max: 2000
    });

    //chek for errors
    const errors = req.validationErrors()
    //if error show the first one as ther happen

    if (errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({ error: firstError })
    }
    //proceed to next middleware
    next();
}