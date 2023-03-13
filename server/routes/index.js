const express = require('express');
// routes
const router = express.Router();
// model
const teamModel = require('../models/team');
const pdfBoxModel = require('../models/pdfBox');

// teams ©route
router
  .route('/teams')
  .get(async (req, res) => {
    const allTeams = await teamModel.find({});
    try {
      res.status(200).send(allTeams);
    } catch (err) {
      res.status(500).send(`[ErrorFile]:©teamRoute.js, ${err}`);
    }
  })
  .post(async (req, res) => {
    const newTeam = new teamModel({
      teamNo: req.body.teamNo,
      score: req.body.score,
      wins: req.body.wins,
      losses: req.body.losses,
      draws: req.body.draws,
    });

    try {
      await newTeam.save();
      res.status(201).send(newTeam);
    } catch (err) {
      res.status(500).send(`[ErrorFile]:©teamRoute.js`);
    }
  });

// /teams/:id
router
  .route('/teams/:id')
  .get(async (req, res) => {
    const { id } = req.params;

    try {
      const team = await teamModel.findById(id);
      res.status(200).send(team);
    } catch (err) {
      res.status(500).send(`[ErrorFile]:©teamRoute.js, ${err}`);
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;

    try {
      const team = await teamModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).send(team);
    } catch (err) {
      res.status(500).send(`[ErrorFile]:©teamRoute.js, ${err}`);
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;

    try {
      await teamModel.findByIdAndDelete(id);
      await res.sendStatus(204);
    } catch (err) {
      res.status(500).send(`[ErrorFile]:©teamRoute.js, ${err}`);
    }
  });

// pdf ©route
router.route('/pdf').get(async (req, res) => {
  const newPdfBox = new pdfBoxModel({
    teamNo: '12',
    generated: false,
    boxName: 'team12pdf',
  });

  try {
    const message = `
            All Good Things Take Time  ¬ 
            <br /><br />
            Final checks are almost completed.....`;
    await newPdfBox.save();
    res.status(201).send(message);
  } catch (err) {
    res.status(500).send(`[ErrorFile]:©teamRoute.js, ${err}`);
  }
});

module.exports = router;
