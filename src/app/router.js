/*
 * Created by Ho Wang Lam
 * marcohwlam@hotmail.com
 * Copyright (c) Seamless Compute 2019.
 */

module.exports = function (server) {
    let express, router;
    express = require('express');
    router = express.Router();
    router.use('/UI', require('./UI/ui')(server));
    return router;
};
