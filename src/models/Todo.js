import mongoose from 'mongoose';

const TodoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Todo', TodoSchema);
