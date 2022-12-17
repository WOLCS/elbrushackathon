"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Files",
      [
        {
          caption: "Лови мем!",
          link: "https://sun6-20.userapi.com/impg/E38H04ZuX2jg422-kLBQ-Xqh2TyLCEL7SQ0Ocw/xKfosj4dGlU.jpg?size=599x1059&quality=95&sign=8d16578f6356461ab4b91ce7c2588562&c_uniq_tag=8SrkPDwrXg0UsTR3coc61G_9wVz2Nzi8nrlHG03G1qA&type=album",
          id: 0,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Files", null, {});
  },
};
