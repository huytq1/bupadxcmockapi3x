"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwaggerExpress = require("swagger-express-mw");
var express = require("express");
var swaggerUi = require('swagger-ui-express');
var resolveRefsAt = require('json-refs').resolveRefsAt;
var jsYaml = require('js-yaml');
var app = express();
var config = {
    appRoot: __dirname
};
loadSpec('./api/swagger/swagger.yaml').then(function (spec) {
    config.swagger = spec;
    SwaggerExpress.create(config, function (err, middleware) {
        if (err) {
            throw err; // or handle error
        }
        app.use('/docs', swaggerUi.serve, swaggerUi.setup(spec, false, {
            validatorUrl: null
        }));
        middleware.register(app);
        var port = process.env.PORT || 10010;
        app.listen(port);
        console.log('App listening on port ' + port);
    });
}).catch(function (err) {
    console.log(err);
});
function loadSpec(path) {
    return resolveRefsAt(path, {
        filter: function (ref) { return ref.type !== 'local'; },
        loaderOptions: {
            processContent: function (res, callback) {
                try {
                    callback(null, jsYaml.safeLoad(res.text));
                }
                catch (e) {
                    console.log(JSON.stringify(e));
                }
            }
        }
    }).then(function (result) { return consolidate(result.resolved); });
}
function consolidate(spec) {
    var result = Object.assign({}, spec);
    delete result['x-include'];
    result.paths = result.paths || {};
    result.definitions = result.definitions || {};
    var children = spec['x-include'];
    if (children) {
        children.forEach(function (child) {
            child = consolidate(child);
            Object.keys(child.paths).forEach(function (p) {
                result.paths[joinPaths(child.basePath, p)] = child.paths[p];
            });
            Object.assign(result.definitions, child.definitions);
        });
    }
    return result;
}
function joinPaths() {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    var result = '';
    for (var i = 0; i < paths.length; i++) {
        var p = paths[i];
        if (p && result && p.charAt(0) === '/') {
            p = p.substring(1);
        }
        if (p) {
            if (result && result.charAt(result.length - 1) !== '/') {
                result += '/';
            }
            result += p;
        }
    }
    return result;
}
//# sourceMappingURL=app.js.map