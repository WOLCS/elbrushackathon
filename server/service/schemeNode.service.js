const { NotFoundError } = require("../error/errors/NotFoundError");
const { SchemeNode, Scheme, Element } = require("../models");

class SchemeController {
  async getAll() {
    const schemeNodes = await SchemeNode.findAll({
      include: [
        {
          model: Element,
          as: "elements",
        },
      ],
      nest: true,
    });
    return schemeNodes;
  }
  async getById(id) {
    const schemeNode = await SchemeNode.findOne({
      where: { schemeNodeId: id },
      include: [
        {
          model: Element,
          as: "elements",
        },
      ],
      nest: true,
    });
    if (!schemeNode) throw new NotFoundError(`Scheme id ${id} not found`);
    return schemeNode;
  }

  async updateScheme(id, schemeNode) {
    const schemeNodeToUpdate = await SchemeNode.findOne({
      where: { schemeNodeId: id },
      include: [
        {
          model: Element,
          as: "elements",
        },
      ],
      nest: true,
    });
    if (!schemeNodeToUpdate)
      throw new NotFoundError(`Scheme id ${id} not found`);

    //to update
    console.log(schemeNodeToUpdate);
    return schemeNodeToUpdate.schemeNodeId;
  }

  async deleteScheme(id) {
    const schemeNodeToDelete = await Scheme.findOne({
      where: { schemeNodeId: id },
      include: [
        {
          model: Element,
          as: "elements",
        },
      ],
      nest: true,
    });
    if (!schemeNodeToDelete)
      throw new NotFoundError(`Scheme id ${id} not found`);

    //to delete

    return schemeNodeToDelete.schemeNodeId;
  }
}
module.exports = new SchemeController();
