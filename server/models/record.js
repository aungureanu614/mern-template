var mongoose = require("mongoose");

var RecordSchema = new mongoose.Schema({
  field: {type:String, required:true}
});

var Record = mongoose.model("Record", RecordSchema);

module.exports = Record;
