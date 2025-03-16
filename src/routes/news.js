const express = require('express');
// express router giúp tổ chức routes trong ứng dụng Express thành từng module nhỏ.
const router = express.Router();

const newsController = require('../app/controller/NewsController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
