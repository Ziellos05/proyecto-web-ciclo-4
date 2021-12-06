import mongoose from 'mongoose';

const connect = (DB) => mongoose.connect(DB, {
  autoIndex: true,
})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error(err));

export default connect;
