"use strict";

const express = require('express');
const listRouter = express.Router();
const listController = require('../controllers/list-controller');

listRouter.post("/lists", (req, res) => {
    listController.addList(req, res);
});
listRouter.get("/lists", (req, res) => {
    listController.getAllList(req, res);
});
// listRouter.delete("/list/delete/:id", (req, res) => {
//     listController.deleteList(req, res);
// });
// listRouter.get("/list/get/:id", (req, res) => {
//     listController.getListById(req, res);
// });

// get card from list by listid and card id
// listRouter.post("/list/card", (req, res) => {
//     listController.getCardsFromList(req, res);
// });

module.exports.listRouter = listRouter;