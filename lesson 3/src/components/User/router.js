const { Router } = require('express');
const UserComponent = require('../User');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });


/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving list of users.
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', csrfProtection, UserComponent.findAll);

/**
 * Route serving a user
 * @name /v1/users/:id
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/:id', csrfProtection, UserComponent.findById);

/**
 * Route serving a new user
 * @name /v1/users/create
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/create', csrfProtection, UserComponent.create);

/**
 * Route serving a new user
 * @name /v1/users/update
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/update', csrfProtection, UserComponent.updateById);

/**
 * Route serving a new user
 * @name /v1/users/delete
 * @function
 * @inner
 * @param {string} path -Express path
 * @param {callback} middleware - Express middleware
 */
router.delete('/delete', csrfProtection, UserComponent.deleteById);

module.exports = router;
