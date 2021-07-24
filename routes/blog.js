const { Router } = require( 'express' );

const { getBlogsPosts } = require('../controllers/blog');

const router = Router();

router.get( 
    '/:initLimit',
    getBlogsPosts
);

module.exports = router;