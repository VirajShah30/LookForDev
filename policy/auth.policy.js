const JWTService = require('../services/auth.service');
const { response } = require('express');
const e = require('express');

module.exports = (req, res, next) => {
    let tokenVerify;

    if (req.header('Authorization')) {
        const parts = req.header('Authorization').split(' ');
        if(parts.length === 2) {
            const scheme = parts[0];
            const credentials = parts[1];

            if (/^Bearer$/.test(scheme)) {
                tokenVerify = credentials;
            }

            else {
                return res.status(401).json({
                    msg: "Authorization Format Invalid: (BEARER TOKEN)"
                })
            }
        }

        else {
            return res.status(401).json({
                msg: "Authorization Format Invalid: (BEARER TOKEN)"
            })
        }
    } 
    
    else if (req.body.token) {
        tokenVerify = req.body.token;
        delete req.body.token;
    }

    else {
        return req.status(401).json({
            msg: "JWT Authorization Failed!: No authorization was found."
        })
    }

    return JWTService.verify(tokenVerify, (err, token) => {
        if (err) {
            return req.status(400).json({
                msg: err.name,
                status: false
            })
        }

        req.token = token;
        return next()  
    })

}