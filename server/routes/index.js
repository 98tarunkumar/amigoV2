const express = require('express');
const router = express.Router();
const {
  getRequest,
  postRequest,
  getByIdRequest,
  putRequest,
  deleteRequest
} = require('./requests/index.js');

router.get('/', getRequest);
router.post('/', postRequest);
router.get('/:id', getByIdRequest);
router.put('/:id', putRequest);
router.delete('/:id', deleteRequest);

module.exports = router;
