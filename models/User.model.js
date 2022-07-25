const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true
    },

    email: {
      type: String,
    },

    password: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },

    description: {
      type: String,
      minlength: 0,
      maxlength: 150,
      trim: true,
    },

    role: {
      type: String,
      enum: ['ADMIN', 'PARTNER', 'USER'],
      default: 'USER',
      required: true,
    },

    category: {
      type: String,
      enum: ['THEATRE', 'MUSEM', 'ART GALLERY', 'CONCERT HALL', 'BOOKSTORE', 'MULTIDISCIPLINARY SPACE', 'OTHERS', 'UNKOWN'],
      default: 'UNKOWN'
    },

    websiteUrl: {
      type: String,
    },


  }, {
  timestamps: true
}
)



const User = model("User", userSchema);

module.exports = User;
