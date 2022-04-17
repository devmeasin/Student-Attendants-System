const { Schema, model } = require('mongoose');

const adminAttendanceSchemaSchema = new Schema({
    timeLimit: String,
    status: String,
    createdAt: Date,
});


const AdminAttendance = model('AdminAttendance', adminAttendanceSchemaSchema);

module.exports = AdminAttendance;

// - CreatedAt: DateTime
// - Status
// - TimeLimit