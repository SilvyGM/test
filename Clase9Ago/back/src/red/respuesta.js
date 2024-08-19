exports.success = function (req, res, mensaje, status) {
  const statuscode = status || 200;
  const messageok = mensaje || "";
  res
    .status(statuscode)
    .send({ error: false, status: statuscode, body: messageok });
};
exports.error = function (req, res, mensaje, status) {
  const statuscode = status || 500;
  const messageerror = mensaje || "internal error";
  res
    .status(statuscode)
    .send({ error: true, status: statuscode, body: messageerror });
};
