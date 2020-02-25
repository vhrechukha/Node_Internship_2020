const UserModel = require('./model');

module.exports = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    findAll() {
        return UserModel.find({});
    },

    /**
     * @exports
     * @method findUser
     * @param {email: userEmail}
     * @summary get user data
     * @returns Promise<UserModel[]>
     */
    findUser(userEmail) {
        return UserModel.find({ email: userEmail });
    },

    /**
     * @exports
     * @method findUser
     * @param {email: userEmail, fullname: userFullName}
     * @summary create user
     * @returns Promise<UserModel[]>
     */
    createUser(userEmail, userFullName) {
        return UserModel.create({ email: userEmail, fullName: userFullName });
    },

    /**
     * @exports
     * @method deleteUser
     * @param {email: userEmail}
     * @summary delete user
     * @returns Promise<UserModel[]>
     */
    deleteUser(userEmail) {
        return UserModel.deleteOne({ email: userEmail });
    },

    /**
     * @exports
     * @method deleteUser
     * @param {fullname: userFullNameNew, fullname: userFullName}
     * @summary update user data
     * @returns Promise<UserModel[]>
     */
    updateUser(userFullNameNew, userFullName) {
        return UserModel.updateOne({ fullName: userFullName }, { fullName: userFullNameNew });
    }
};
