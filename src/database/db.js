import Sequelize from 'sequelize';
import taskModel from './models/task';
import config from 'config';

const sequelize = new Sequelize(
    config.get('database.name'),
    config.get('database.user'),
    config.get('database.password'),
    {
        host: config.get('database.host'),
        dialect: config.get('database.dialect'),
        port: config.get('database.port'),
    }
);

const Task = taskModel(sequelize, Sequelize);

sequelize
    .sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
        console.log(`Conected to: ${sequelize.config.database}`);
    })
    .catch((err) => {
        if (
            err.hasOwnProperty('original.sqlMessage') &&
            err.original.sqlMessage.includes('Unknown database')
        ) {
            console.log(err.original.sqlMessage);
            console.log('Please create the database.');
        } else if (err.hasOwnProperty('original.sqlMessage')) {
            console.log(err.original.sqlMessage);
        } else console.log(err.original);
    });


export {
    Task
}

