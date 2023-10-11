const jwt = require('jsonwebtoken')
//推薦用UUID生成key


function setToken(user) {
     return new Promise((resolve, reject) => {
          
          const token = jwt.sign({ userId: user.id }, process.env.Key, { expiresIn: '2h' });
          resolve(token)
     })

}


function authentication(req, res, next) {
     try {
          var token = req.headers.authorization
          jwt.verify(token, process.env.Key, (err, decoded) => {
               if (err) {
                    return res.status(401);

               } else {
                    req.auth = {};
                    req.auth.decoded = decoded
                    next();
               }
          })
     } catch (e) {
          res.send('error');

     }

}


module.exports ={ authentication, setToken}