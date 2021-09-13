const { Router } = require( 'express' );

const { upload } = require('../middlewares/uploadFiles');
const { tokenValidator } = require('../middlewares/tokenValidator');
const { getPosts, createPost, updatePost, deletePost, uploadImg } = require('../controllers/posts');

const router = Router();

router.get( 
    '/', 
    tokenValidator,
    getPosts,
);

router.post( 
    '/', 
    tokenValidator,
    upload.single( 'imageUrl' ),
    createPost, 
);

router.put( 
    '/:id',
    tokenValidator,
    upload.single( 'imageUrl' ),
    updatePost 
);
router.post( 
    '/updateImg',
    tokenValidator,
    upload.single( 'imageUrl' ),
    uploadImg
);

router.delete( 
    '/:id',
    tokenValidator,
    deletePost 
);


module.exports = router;