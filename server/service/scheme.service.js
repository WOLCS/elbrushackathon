const { SchemeNode, Scheme, Element } = require("../models");

class SchemeController {
  async getAll() {
    const schemes = await Scheme.findAll({
      include: [
        {
          model: SchemeNode,
          as: "schemeNodes",
          include: [
            {
              model: Element,
              as: "elements",
            },
          ],
        },
      ],
      nest: true,
    });
    return schemes;
  }
  async getById(id) {
    const scheme = await Scheme.findOne({
      where: { schemeId: id },
      include: [
        {
          model: SchemeNode,
          as: "schemeNodes",
          include: [
            {
              model: Element,
              as: "elements",
            },
          ],
        },
      ],
      nest: true,
    });
    return scheme;
  }
}
module.exports = new SchemeController();
