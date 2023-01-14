module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceu8nbkgqg40d6h71fpg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_p1jk'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'd6spbkWGOopdZKnis1uds9bjwEPMGtPA'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
