const { Router } = require( 'express' );
const { body } = require( 'express-validator' );

const { loginUser, createUser, renewToken } = require('../controllers/auth');
const { tokenValidator } = require('../middlewares/tokenValidator');
const { validator } = require( '../middlewares/validator' );

const router = Router();

router.post( 
    '/', 
    [
        body('email', 'El correo es obligatorio').isEmail(),
        body('password', 'La contraseña es obligatorio').not().isEmpty(),
        validator,
    ],
    loginUser 
);

router.post( 
    '/create',
    [
        body('email', 'El correo es obligatorio').isEmail(),
        body('username', 'El nombre es obligatorio').not().isEmpty(),
        body('last_name', 'El apellido es obligatorio').not().isEmpty(),
        body('password', 'La contraseña es obligatoria').isLength({ min: 7 }),
        validator,
    ], 
    createUser 
);
router.get( 
    '/renew',
    tokenValidator, 
    renewToken 
);

module.exports = router;
