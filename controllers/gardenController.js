exports.getAllGardens = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'sample data',
  });
};

exports.addGarden = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: 'new garden added',
  });
};

exports.getGarden = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'a garden',
  });
};

exports.updateGarden = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: ' upated garden',
  });
};

exports.deleteGarden = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
