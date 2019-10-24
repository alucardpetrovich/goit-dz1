const ProductRouter = require('./products/product.router');
const UserRouter = require('./users/user.router');
const http = require('http');

const PORT = 3000;
const routes = getRoutes();

http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;

    const handled = routes.some(routeInfo => {
        if ( method === routeInfo.method && url === routeInfo.routePath ) {
            console.log(routeInfo);
            routeInfo.handler(req, res);
            return true;
        }
    });

    if ( !handled ) {
        res.statusCode = 404;
        res.end();
    }

})
    .listen(PORT, () => {
        console.log('Server listening on port', PORT);
    });

function getRoutes() {
    const routers = [ ProductRouter, UserRouter ];
    
    return routers.reduce((allRoutes, router) => {
        const { basePath, routes } = router;
        const paths = Object.entries(routes).map(([ path, handler ]) => {
            const [ method, relativePath ] = path.split(' ');
            let routePath = basePath + relativePath;
            routePath = routePath.replace(/\/$/, '');

            return {
                method,
                routePath,
                handler
            };
        });

        return allRoutes.concat(paths);
    }, []);
}
