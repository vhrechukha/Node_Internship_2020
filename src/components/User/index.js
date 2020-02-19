const UserService = require('./service');
const UserValidation = require('./validation');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findUser(req, res, next) {
    try {
        let userEmail = req.query.email;

        const value = await UserValidation.validateEmail(userEmail);

        if (!value.error) {
            const user = await UserService.findUser(userEmail);
            res.status(200).send(user);
        }
        if (value.error) {
            res.status(200).send(`You wrote something weird. Please, verify you data :3`);
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function createUser(req, res, next) {
    try {
        let userFullName = req.body.fullName,
            userEmail = req.body.email;

        const value = await UserValidation.validateEmailAndFullName(userEmail, userFullName);
        
        if (!value.error) {
            const user = await UserService.createUser(userEmail, userFullName);
            res.status(200).send(user);
        }
        if (value.error) {
            res.status(400).send(`You wrote something weird. Please, verify you data :3`);
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function deleteUser(req, res, next) {
    try {
        let userEmail = req.body.email;

        const value = await UserValidation.validateEmail(userEmail);
        
        if (!value.error) {
            const user = await UserService.deleteUser(userEmail);
            res.status(200).send(user);
        }
        if (value.error) {
            res.status(200).send(`You wrote something weird. Please, verify you data :3`);
        }
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function updateUser(req, res, next) {
    try {
        let userFullNameNew = req.body.updatedName,
            userFullName = req.body.fullName;

        const value = await UserValidation.validateFullNameAndUpdatedName(userFullName, userFullNameNew);
        
        if (!value.error) {
            const user = await UserService.updateUser(userFullNameNew, userFullName);
            res.status(200).send(user);
        }
        if (value.error) {
            res.status(200).send(`You wrote something weird. Please, verify you data :3`);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll,
    findUser,
    createUser,
    deleteUser,
    updateUser
}