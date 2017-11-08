import * as SwaggerExpress from "swagger-express-mw";
import * as express from "express";

let swaggerUi = require('swagger-ui-express');
let resolveRefsAt = require('json-refs').resolveRefsAt;
let jsYaml = require('js-yaml');

let app = express();
let config: SwaggerExpress.Config = {
    appRoot: __dirname
};

loadSpec('./api/swagger/swagger.yaml').then(spec => {
    (<any>config).swagger = spec;

    SwaggerExpress.create(config, (err, middleware) => {
        if (err) {
            throw err; // or handle error
        }

        app.use('/docs', swaggerUi.serve, swaggerUi.setup(spec, false, {
            validatorUrl: null
        }));

        middleware.register(app);

        const port = process.env.PORT || 1000;
        app.listen(port);

        console.log('App listening on port ' + port);
    });
}).catch(err => {
    console.log(err);
});

function loadSpec(path: string): any {
    return resolveRefsAt(path, {
        filter: ref => ref.type !== 'local',
        loaderOptions: {
            processContent: (res, callback) => {
                try {
                    callback(null, jsYaml.safeLoad(res.text));
                } catch (e) {
                    console.log(JSON.stringify(e));
                }
            }
        }
    }).then(result => consolidate(result.resolved));
}

function consolidate(spec: any): any {
    let result = Object.assign({}, spec);
    delete result['x-include'];
    result.paths = result.paths || {};
    result.definitions = result.definitions || {};

    var children = spec['x-include'];
    if (children) {
        children.forEach(child => {
            child = consolidate(child);
            Object.keys(child.paths).forEach(p => {
                result.paths[joinPaths(child.basePath, p)] = child.paths[p];
            });
            Object.assign(result.definitions, child.definitions);
        });
    }

    return result;
}

function joinPaths(...paths: string[]): string {
    let result = '';
    for (let i = 0; i < paths.length; i++) {
        let p = paths[i];
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
