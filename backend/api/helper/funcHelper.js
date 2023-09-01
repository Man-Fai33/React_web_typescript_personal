const User = require("../models/user")

const UserHelper = {
     async SignUpCheck(email, username) {
          let message = ""

          if (await User.findOne({ email: email }).exec() !== null) {
               message += "用戶電郵"
          }
          if (await User.findOne({ username: username }).exec() !== null) {
               message += "用戶名稱"
          }

          return message
     }
}
module.exports = { UserHelper }