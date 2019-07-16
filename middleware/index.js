const badUrl = (req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Take a good look at the URL!',
  });

module.exports = {
  badUrl,
};
