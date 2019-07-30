const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");


const users = require("./users.js");
const User = users.model;

const gameSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    lastPlayed: Date,
    created: {
      type: Date,
      default: Date.now
    },
});
  
const Game = mongoose.model('Game', gameSchema);

router.post("/", auth.verifyToken, User.verify, async (req, res) => {
    const game = new Game({
        user: req.body.user,
        lastPlayed: Date.now(),
    });
    try {
        await game.save();
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
  });

router.get("/", async (req, res) => {
    try {
        let games = await Game.find({
            user: req.body.user
        }).sort({
            lastPlayed: -1
        });
        return res.send(games);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
});

module.exports = {
    model: Game,
    routes: router,
}