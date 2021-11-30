const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'ec2-44-193-111-218.compute-1.amazonaws.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'jefmspteharqdn',
    password: env.DB_PASSWORD || 'bcda48859599e49a05ea7c4e90913798d6ffac26bfa64416bc787c318f8d1bda',
    database: env.DB_NAME || 'dih9o4blv40v0',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

// const config = {
//   db: { /* do not put password or any sensitive info here, done only for demo */
//     host: env.DB_HOST || 'otto.db.elephantsql.com',
//     port: env.DB_PORT || '5432',
//     user: env.DB_USER || 'cklijfef',
//     password: env.DB_PASSWORD || 'V1qidES5k3DSJICDRgXtyT8qeu2SPCZp',
//     database: env.DB_NAME || 'cklijfef',
//   },
//   listPerPage: env.LIST_PER_PAGE || 10,
// };


// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "jefmspteharqdn",
//     password: "bcda48859599e49a05ea7c4e90913798d6ffac26bfa64416bc787c318f8d1bda",
//     database: "dih9o4blv40v0",
//     host: "localhost",
//     port: 5432
// });

// module.exports = pool;

module.exports = config;
