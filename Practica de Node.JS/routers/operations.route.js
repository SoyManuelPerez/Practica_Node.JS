const express = requiere("express");
const { body } = requiere("express-validator");
const operationsController= require("../controllers/operations.controlles");
const route = express.Router();

route.post("/sum",
    [
        body("valueOne")
            .exists()
            .whihMessage("El valor One es requerido.")
            .matches(/^[0-9]+$/,"i")
            .whihMessage("El valor One de ser numerico.")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .whihMessage("El valor Two es requerido.")
            .matches(/^[0-9]+$/,"i")
            .whihMessage("El valor Two de ser numerico.")
            .trim()
            .escape()
    ], 
    operationsController.sum
);
route.post("/resta",
    [
        body("valueOne")
            .exists()
            .whihMessage("El valor One es requerido.")
            .matches(/^[0-9]+$/,"i")
            .whihMessage("El valor One de ser numerico.")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .whihMessage("El valor Two es requerido.")
            .matches(/^[0-9]+$/,"i")
            .whihMessage("El valor Two de ser numerico.")
            .trim()
            .escape()
    ], 
    operationsController.resta
);
route.post("/mult",
    [
        body("valueOne")
            .exists()
            .whihMessage("El valor One es requerido.")
            .matches(/^[0-9]+$/,"i")
            .whihMessage("El valor One de ser numerico.")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .whihMessage("El valor Two es requerido.")
            .matches(/^[0-9]+$/,"i")
            .whihMessage("El valor Two de ser numerico.")
            .trim()
            .escape()
    ], 
    operationsController.mult
);
route.post("/div",
    [
        body("valueOne")
            .exists()
            .whihMessage("El valor One es requerido.")
            .matches(/^[0-9]+$/,"i")
            .whihMessage("El valor One de ser numerico.")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .whihMessage("El valor Two es requerido.")
            .matches(/^[0-9]+$/,"i")
            .whihMessage("El valor Two de ser numerico.")
            .trim()
            .escape()
    ], 
    operationsController.div
);

module.exports = route;





