const express = require('express');
const http = require('http');
const UserRouter = require('../components/User/router');

module.exports = {
    /**
     * @function
     * @param {express.Application} app
     * @summary init Application router
     * @returns void
     */
    init(app) {
        const router = express.Router();

        /**
         * Forwards any requests to the /v1/users URI to UserRouter.
         * @name /v1/users
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        app.use('/v1/users', UserRouter);

        /**
         * Forwards requests to the /v1/users/find URI to UserRouter.
         * @name /v1/users/find
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        app.use('/v1/users/find', UserRouter);

        /**
         * Forwards requests to the /v1/users/create URI to UserRouter.
         * @name /v1/users/create
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        app.use('/v1/users/create', UserRouter);

        /**
         * Forwards requests to the /v1/users/delete URI to UserRouter.
         * @name /v1/users/delete
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        app.use('/v1/users/delete', UserRouter);

        /**
         * Forwards requests to the /v1/users/update URI to UserRouter.
         * @name /v1/users/update
         * @function
         * @inner
         * @param {string} path - Express path
         * @param {callback} middleware - Express middleware.
         */
        app.use('/v1/users/update', UserRouter);

        /**
         * @description No results returned mean the object is not found
         * @function
         * @inner
         * @param {callback} middleware - Express middleware.
         */
        app.use((req, res, next) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        /**
         * @function
         * @inner
         * @param {express.Router}
         */
        app.use(router);
    }
};