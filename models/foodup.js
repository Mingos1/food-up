const mongoose = require("mongoose")

const foodDataSchema = new mongoose.Schema({
	name: String,
	description: String,
   image: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
})

const foodData = mongoose.model("foodData", foodDataSchema)

module.exports = foodData
