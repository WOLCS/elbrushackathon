const { File } = require("../models");

class FileController {
  async getAll(id) {
    const files = await File.findAll();
    return files;
  }

  async getById(id) {
    const file = await File.findOne({ where: { id } });
    return file;
  }
  //   async getRandom(req, res, next) {
  //     const { id } = req.body;
  //     const file = await File.findOne({ where: { id } });
  //     if (!file)
  //         return next(ApiError.badRequest("No user with this email exists"));
  //     return res.json({ file });
  //   }
}
module.exports = new FileController();
