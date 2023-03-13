const mongoose = require('mongoose');

const pdfBoxSchema = new mongoose.Schema({
  teamNo: { type: String, required: true },
  generated: { type: Boolean, required: true },
  boxName: { type: String, required: true },
});

const PDFBox = mongoose.model('PDFBox', pdfBoxSchema);

module.exports = PDFBox;
