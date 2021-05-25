const Garden = require('./../models/gardenModel');

exports.getAllGardens = async (req, res) => {
  try {
    const gardens = await Garden.find();
    res.status(200).json({
      status: 'success',
      results: gardens.length,
      data: {
        gardens,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.addGarden = async (req, res) => {
  try {
    const newGarden = await Garden.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        garden: newGarden,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.getGarden = async (req, res) => {
  try {
    const garden = await Garden.findById(req.params.id);

    res.status(201).json({
      status: 'success',
      data: {
        garden,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.updateGarden = async (req, res) => {
  try {
    const garden = await Garden.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        garden,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.deleteGarden = async (req, res) => {
  try {
    await Garden.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};
