export default (sequelize, type) => {
    return sequelize.define('task',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        description: type.STRING,
    })
}