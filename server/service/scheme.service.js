const { NotFoundError } = require("../error/errors/NotFoundError");
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
    if (!scheme) throw new NotFoundError(`Scheme id ${id} not found`);
    return scheme;
  }

  async updateScheme(id, scheme) {
    const schemeToUpdate = await Scheme.findOne({
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
    if (!schemeToUpdate) throw new NotFoundError(`Scheme id ${id} not found`);

    //to update
    console.log(schemeToUpdate);
    return schemeToUpdate.id;
  }

  async deleteScheme(id) {
    const schemeToDelete = await Scheme.findOne({
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
    if (!schemeToDelete) throw new NotFoundError(`Scheme id ${id} not found`);

    //to delete

    return schemeToDelete.id;
  }
}
module.exports = new SchemeController();
