const { Config } = require("./src/config");
const { PORT, DB_URL } = require("./src/constants");

new Config(PORT, DB_URL);
