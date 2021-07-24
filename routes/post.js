const { Router } = require( 'express' );

const { upload } = require('../middlewares/uploadFiles');
const { tokenValidator } = require('../middlewares/tokenValidator');
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/posts');

const router = Router();

router.get( 
    '/', 
    tokenValidator,
    getPosts,
);

router.post( 
    '/', 
    tokenValidator,
    upload.single( 'image' ),
    createPost, 
);

router.put( 
    '/:id',
    tokenValidator,
    upload.single( 'image' ),
    updatePost 
);

router.delete( 
    '/:id',
    tokenValidator,
    deletePost 
);


module.exports = router;