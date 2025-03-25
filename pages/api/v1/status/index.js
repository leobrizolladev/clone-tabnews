function status(req, res) {
  res.status(200).json({
    status: "ok",
    message: "API está funcionando",
  });
}

export default status;
