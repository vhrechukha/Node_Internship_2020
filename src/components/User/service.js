const UserModel = require('./model');

module.exports = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    async findAll() {
        return await UserModel.find({});
    },

    /**
     * @exports
     * @method findUser
     * @param {email: userEmail}
     * @summary get user data
     * @returns Promise<UserModel[]>
     */
    async findUser(userEmail) {
        return await UserModel.find({email: userEmail});
    },

    /**
     * @exports
     * @method findUser
     * @param {email: userEmail, fullname: userFullName}
     * @summary create user
     * @returns Promise<UserModel[]>
     */
    async createUser(userEmail, userFullName) {
        return await UserModel.create({email: userEmail, fullName: userFullName});
    },

    /**
     * @exports
     * @method deleteUser
     * @param {email: userEmail}
     * @summary delete user
     * @returns Promise<UserModel[]>
     */
    async deleteUser(userEmail) {
        return await UserModel.deleteOne({email: userEmail});
    },

    /**
     * @exports
     * @method deleteUser
     * @param {fullname: userFullNameNew, fullname: userFullName}
     * @summary update user data
     * @returns Promise<UserModel[]>
     */
    async updateUser(userFullNameNew, userFullName) {
        return await UserModel.updateOne({fullName: userFullName}, {fullName: userFullNameNew});
    }
};
