const mongoose = require('mongoose');
const requestModel = require('../../models/index.js');

const getRequest = async (req, res) => {
  try {
    const allRequests = await requestModel.find();
    res.status(200).json(allRequests);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getByIdRequest = async (req, res) => {
  try {
    const getId = req.params.id;
    const getResponse = await requestModel.findById(getId);
    res.status(200).json(getResponse);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const postRequest = async (req, res) => {
  const request = req.body;
  const newRequest = new requestModel(request);
  try {
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(309).json({ message: err.message });
  }
};

const putRequest = async (req, res) => {
  const id = req.params.id;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: 'Data with this id not found' });
  }
  const updatedRequest = await requestModel.findByIdAndUpdate(id, post, { new: true });
  res.status(201).json(updatedRequest);
};

const deleteRequest = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: 'Data with this id not found' });
  }
  await requestModel.findByIdAndRemove(id,{new: true});
  res.json({ message: `Data with id:${id} removed successfully` });
};

module.exports = { getRequest, postRequest, getByIdRequest, putRequest, deleteRequest };
