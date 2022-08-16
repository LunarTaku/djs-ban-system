const { Schema, model } = require("mongoose");
const banUserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guildId: String,
  channelId: String,
  userId: String,
  banReason: String,
  banTime: String,
});

module.exports = model("banSchema", banUserSchema, "bannedUsers");
