module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_Name || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabracker.sqlite'
        }
    }
};