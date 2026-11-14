const sequelize = require('../database');
const defineUser = require('../models/Users');
const User = defineUser(sequelize);

exports.has = (requiredRole) => async (req, res, next) => {
    const user = await User.findByPk(req.uer.userId);
    if(!user || user.role !== requiredRole) {
        return res.status(403).json({ error : `Requries ${requiredRole} role`});
    }
    next();
};