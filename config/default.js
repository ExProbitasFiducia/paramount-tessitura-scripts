module.exports = {
    knex: {
        client: "pg",
        connection: {
            user: "myUsername",
            host: "localhost",
            database: "myDatabase",
            password: "myPassword",
            port: 5432
        }
    }
};
