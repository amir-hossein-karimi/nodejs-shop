const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Routes } = require("./routes");
const path = require("path");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerJs = require("swagger-jsdoc");

class Config {
  #app = express();

  constructor(PORT, DB_URL) {
    this.configDatabase(DB_URL);
    this.configApp();
    this.configRoutes();
    this.configErrors();
    this.configConectApp(PORT);
  }

  configDatabase(DB_URL) {
    mongoose.connect(DB_URL, (error) => {
      console.log(error ? `error: ${error}` : "shop database is created");
    });
  }

  configConectApp(PORT) {
    this.#app.listen(PORT, () => {
      console.log("server is run on port 8000");
    });
  }

  configApp() {
    this.#app.use(morgan("dev"));
    this.#app.use(bodyParser.json());
    this.#app.use(bodyParser.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
    this.#app.use(
      "/apis",
      swaggerUi.serve,
      swaggerUi.setup(
        swaggerJs({
          swaggerDefinition: {
            info: {
              title: "this is a testing shop",
              description:
                "this shop created using nodejs , express and mongodb",
              version: 1,
            },
            servers: [
              {
                url: "http://localhost:8000",
              },
            ],
          },
          apis: [`${__dirname}/routes/*/*.js`],
        })
      )
    );
  }

  configRoutes() {
    this.#app.use("/", Routes);
  }

  configErrors() {
    this.#app.use((req, res, next) => {
      res.status(404).json({
        status: 404,
        success: false,
        message: "route not found",
      });
    });

    this.#app.use((error, req, res, next) => {
      res.status(error?.status || 500).json({
        status: error?.status || 500,
        success: false,
        message: error?.message || "internal error",
      });
    });
  }
}

module.exports = {
  Config,
};
