module.exports = {
    server: {
        port: process.env.PORT_DEV || 4000,
        domain: 'localhost',
    },

    mongoDb: {
        url:
            process.env.MONGODB_URL_DEV || 'mongodb://localhost/db-development',
    },

    database: {
        name: process.env.DATABASE_DEV || 'db-development',
        user: process.env.USER_DEV || 'root',
        password: process.env.PASSWORD_DEV || '',
        host: process.env.DATABASE_HOST_DEV || 'localhost',
        dialect: process.env.DIALECT || 'mysql',
        port: process.env.DATABASE_PORT || '3306',
    },

    jwt: {
        secret: process.env.JWT_SECRET || 'a super secret',
    },

    logger: 'dev',

    swagger: {
        options: {
            definition: {
                info: {
                    title: 'Task api'
                }
            },
            apis: ['./src/routes/**/*.js']
        },
    },
};
