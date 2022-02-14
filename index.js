require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./Router/user");
const notesRouter = require("./Router/notes");

const swaggerJSdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notes API",
      version: "1.0.0",
      description: "Hallo saya marwan",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./Router/*.js"],
};

const specs = swaggerJSdoc(options);

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(notesRouter);
app.use(userRouter);

app.listen(process.env.PORT, console.log("listening at " + process.env.PORT));

module.exports = app;
