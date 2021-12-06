import mongoose from 'mongoose';
const { Schema } = mongoose;

const advanceSchema = new Schema({
    projectID: {
        type: Schema.ObjectId,
        required: true,
    },
    userID: {
        type: Schema.ObjectId,
        required: true,
    },
    advance: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

const Advance = new mongoose.model('advance', advanceSchema);

export default Advance;