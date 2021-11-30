const Pool = require("pg").Pool;

const config = new Pool({
    user: "jefmspteharqdn",
    password: "bcda48859599e49a05ea7c4e90913798d6ffac26bfa64416bc787c318f8d1bda",
    database: "dih9o4blv40v0",
    host: "ec2-44-193-111-218.compute-1.amazonaws.com",
    port: 5432
});

module.exports = config;
