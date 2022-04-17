const { Schema, model } = require('mongoose');

const studentAttendanceSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    adminAttendanceId: {
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendanceSchema'
    },
    createdAt: Date
});


const StudentAttendance = model('StudentAttendance', studentAttendanceSchema);
module.exports = StudentAttendance;


// - UserId
// - CreatedAt: DateTime
// - AdminAttendanceID