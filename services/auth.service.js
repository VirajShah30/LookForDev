const jwt = require('jsonwebtoken');
const secret = "3572de28bb48caee64326cb1897ea9dcb0a1791592659454fe73a2e239d188aad8e811f16895b0556ba6b3dd93871a73efcfdff8809333228dcf90ce5099d601";
const authService = () => {
    const issue = (payload) => jwt.sign(payload, secret, {
        expiresIn: 10800
    });
    const verify = (token, callback) => jwt.verify(token, secret, {}, callback);
    return {
        issue, 
        verify
    }
};

module.exports = authService()