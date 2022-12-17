"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Schemes",
      [
        {
          schemeId: 0,
          title: "Переговоры",
        },
      ],
      {}
    );

    const schemes = await queryInterface.sequelize.query(
      'SELECT "Schemes"."schemeId" from "Schemes"'
    );
    const schemeIds = schemes[0];
    await queryInterface.bulkInsert(
      "SchemeNodes",
      [
        {
          SchemeSchemeId: schemeIds[0].schemeId,
          schemeNodeId: 0,
        },
        {
          SchemeSchemeId: schemeIds[0].schemeId,
          schemeNodeId: 1,
        },
      ],
      {}
    );
    const schemeNodes = await queryInterface.sequelize.query(
      'SELECT "SchemeNodes"."schemeNodeId" from "SchemeNodes"'
    );

    const schemeNodeIds = schemeNodes[0];
    await queryInterface.bulkInsert(
      "Elements",
      [
        {
          SchemeSchemeId: schemeIds[0].schemeId,
          SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
          elementId: 0,
          elementType: "text",
          elementText:
            "Вам звонит/пишет HR и говорит, что работодатель готов сделать оффер!",
        },
        {
          SchemeSchemeId: schemeIds[0].schemeId,
          SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
          elementId: 1,
          elementType: "button",
          elementText: "Далее",
        },
        {
          SchemeSchemeId: schemeIds[0].schemeId,
          SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
          elementId: 2,
          elementType: "text",
          elementText:
            "Запишите все, что HR рассказал по телефону/сравните текст сообщения с текстом вакансии - информация может немного отличаться от опубликованной в вакансии, то, что озвучил/написал  HR  имеет большую силу.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Elements", null, {});
    await queryInterface.bulkDelete("SchemeNodes", null, {});
    await queryInterface.bulkDelete("Schemes", null, {});
  },
};
