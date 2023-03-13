const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamNo: { type: String, required: true },
  score: { type: Number, required: true },
  wins: { type: Number, required: true },
  losses: { type: Number, required: true },
  draws: { type: Number, required: true },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
