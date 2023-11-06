const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path'); // 引入 path 模块

// 修改存储目录
const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, 'public/files'); // 存储文件的目录，确保它在服务器的根目录下的 public/files
     },
     filename: (req, file, cb) => {
          cb(null, file.originalname); // 使用原始文件名
     }
});

const upload = multer({
     storage: storage,
     
});


// 修改静态文件服务
router.use('/public/files', express.static(path.join(__dirname, 'public/files')));

// 处理文件上传
router.post('/', upload.single('file'), (req, res) => {
     console.log("file", req.body)
     if (!req.file) {
          console.error('未接收到文件');
          return res.status(400).send('未接收到文件');
     }

     // 通过 req.file 来访问上传的文件信息
     const uploadedFile = req.file;
     console.log('上传的文件信息:', uploadedFile);

     // 如果你需要访问文件的路径，可以使用 uploadedFile.path
     const filePath = uploadedFile.path;
     console.log('文件路径:', filePath);

     res.send('文件已上传');
});
module.exports = router;