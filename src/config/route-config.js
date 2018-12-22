module.exports = {
    init(app) {
        const staticRoutes = require('../routes/static');
        const topicRoutes = require('../routes/topics');
        const postRoutes = require('../routes/posts');
        const userRoutes = require('../routes/users');

        console.log("I'M IN ROUTE-CONFIG outside of if statement: " + process.env.NODE_ENV);
        if(process.env.NODE_ENV === 'test') {
            const mockAuth = require('../../spec/support/mock-auth.js');
            mockAuth.fakeIt(app);
            console.log("I'M IN ROUTE-CONFIG INSIDE of if statement: " + process.env.NODE_ENV);
        }

        app.use(staticRoutes);
        app.use(topicRoutes);
        app.use(postRoutes);
        app.use(userRoutes);
    }
}