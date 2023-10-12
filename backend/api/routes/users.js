const express = require('express')
const router = express.Router()
const User = require('../models/user');
const { UserHelper } = require('../helper/funcHelper.js');

router.get('/', (req, res) => {
     let users = new User()
     let error = {}
     try {
          users = User.find().exec().then(result => {
               res.json({ status: "success", users: result })

          })



     } catch (e) {
          error = e
          res.json(error)
     }
     return res
})
router.post('/', async (req, res) => {
     let user = req.body
     let userCreate = null
     let type = user.type || null
     let response = {}
     try {
          if (!type && type !== "signin") {
               let message = await UserHelper.SignUpCheck(user.email, user.username)
               if (message === "") {
                    user.role = 'user';
                    console.log(user)
                    userCreate = new User(user); // 将 user 对象传递给构造函数
                    const createdUser = await userCreate.save(); // 创建并保存文档实例
                    response.message = "用戶創建成功";
                    response.data = createdUser;
                    response.error = false;
                    return res.json(response);
               } else {
                    response.message = message + "已經存在"
                    response.error = true
                    return res.json(response)
               }
          } else {
               if (await User.findOne({ username: user.vainput, password: user.password }).exec() !== null || await User.findOne({ email: user.vainput, password: user.password }).exec() !== null) {

                    if (await User.findOne({ username: user.vainput, password: user.password }).exec() !== null) {
                         response.message = "用戶名稱登入"
                    } else {
                         response.message = "用戶電郵登入"
                    }
               } else {
                    response.message = "密碼名字錯誤/n 註冊新的賬號"
               }
          } return res.json(response)

     } catch (error) {
          console.log(error)
     }
})
module.exports = router;