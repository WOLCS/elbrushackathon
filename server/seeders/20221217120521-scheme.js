// @ts-nocheck
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
          startSchemeNodeId: 0,
        },
        {
          schemeId: 1,
          title: "Поиск работы",
          startSchemeNodeId: 1230981209380213,
        },
      ],
      {}
    );

    const schemes = await queryInterface.sequelize.query(
      'SELECT "Schemes"."schemeId" from "Schemes"'
    );
    const schemeIds = schemes[0];
    const schemeNodesScheme1 = [...new Array(15)].map((el, i) => ({
      SchemeSchemeId: schemeIds[0].schemeId,
      schemeNodeId: i,
    }));

    const schemeNodesScheme2 = [...new Array(28)].map((el, i) => ({
      SchemeSchemeId: schemeIds[1].schemeId,
      schemeNodeId: i,
    }));

    await queryInterface.bulkInsert(
      "SchemeNodes",
      schemeNodesScheme1.concat(schemeNodesScheme2),
      {}
    );
    const schemeNodes = await queryInterface.sequelize.query(
      'SELECT "SchemeNodes"."schemeNodeId" from "SchemeNodes"'
    );
    const schemeNodeIds = schemeNodes[0];
    const schemeOneCard0 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        elementType: "text",
        elementText:
          "Вам звонит/пишет HR и говорит, что работодатель готов сделать оффер!",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[1].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeOneCard1 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        elementType: "text",
        elementText:
          "Запишите все, что HR рассказал по телефону/сравните текст сообщения с текстом вакансии - информация может немного отличаться от опубликованной в вакансии, то, что озвучил/написал  HR  имеет большую силу.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        elementType: "image",
        elementText: "Red phone",
        elementLink: "images/phone.png",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[2].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeOneCard2 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[2].schemeNodeId,
        elementType: "text",
        elementText:
          'Не говорите сразу же "да, я согласен", попросите выслать оффер в письменном виде, чтобы вы могли подробно в спокойной обстановке ознакомиться с информацией.',
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[2].schemeNodeId,
        elementType: "image",
        elementText: "Red phone",
        elementLink: "images/stop.png",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[2].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[3].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeOneCard3 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        elementType: "text",
        elementText:
          "Вы получили письменный оффер (обычно по имейлу в приложении отдельным файлом).",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        elementType: "image",
        elementText: "Red phone",
        elementLink: "images/stop.png",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "button",
        elementText: "Сообщить другим работодателям",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[5].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeOneCard4 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "spoiler",
        elementText:
          'Вы получили оффер - для "поднятия" своего рейтинга у других работодателей сообщите всем компаниям, от которых ждете ответ по собеседованиям (особенно тем, в которые очень хотите), что вы получили оффер:',
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "text",
        elementText:
          "Добрый день, _имя рекрутера__, хотел(а) бы сделать апдейт по процессу рекрутинга - я на днях  получил(а) оффер, однако ваша компания для меня приоритетна и я бы хотел(а) пройти дальнейшие этапы/получить обратную связь по собеседованию как можно скорее. Подскажите, пожалуйста, сможете ли вы до (свой день недели) вернуться с ответом по моей кандидатуре?",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "text",
        elementText:
          "Сообщать от какой компании оффер и на какую сумму не нужно.",
      },
    ];
    const schemeOneCard5 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        elementType: "spoiler",
        elementText:
          "Скажите, что вам нужно время обдумать их предложение и назовите срок, когда вы вернетесь с ответом (в идеале не больше 3-4 рабочих дней). Не принимайте оффер сразу же так как первый оффер от любой компании ВСЕГДА минимален по сумме, он только открывает пространство переговоров по зарплате. помните, что  зарплата разработчика прежде всего зависит от суммы, в которую он сам себя оценивает.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        elementType: "text",
        elementText:
          '"Добрый день, _имя рекрутера__,Благодарю, документ получил(а).Я внимательно ознакомлюсь с оффером и вернусь к вам до день недели/дата. Большое спасибо, что поделились со мной хорошими новостями, будем на связи!"',
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "button",
        elementText: "Почему не следует торопиться",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "button",
        elementText: "Вы получили хороший оффер",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[10].schemeNodeId,
        elementType: "button",
        elementText: "Вы получили не очень хороший оффер",
      },
    ];
    const schemeOneCard6 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "spoiler",
        elementText:
          "Если вы получили оффер, на который просят ответить за короткое время (24/48/72 часа), а вы не готовы так быстро принять решение/ждете информации от других работодателей. Не ведитесь на срочность и не переживайте - это просто способ работодателя надавить и поскорее закрыть вакансию. Напишите ответ HR в таком ключе:",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          '"Добрый день, _имя рекрутера__, благодарю, документ получил(а). К сожалению, принять решение по данному предложению в такой короткий срок/за 24-48-72 часа/1 день/2 дня я не имею возможности, так как нахожусь на финальной стадии переговоров с другими компаниями и этот процесс займет еще примерно неделю. Мне понадобится больше времени, чтобы принять взвешенное решение."',
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "Если компания возвращается с ответом, что это единственный вариант и они не могут предложить других опций по времени, напишите им:",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "spoiler",
        elementText:
          '"Очень жаль, мне нравится ваша компания, проект и команда. Решение о выборе работодателя для меня очень важное и ответственное и я никак не могу его принять за такой короткий срок"',
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "Большинство компаний на этом этапе продлят срок или начнут торговаться по сроку. Если этого не происходит - возможно, это не твоя компания.",
      },
    ];
    const schemeOneCard7 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        elementType: "spoiler",
        elementText:
          "Если вам сделали отличное предложение, оффер на большую зарплату, чем вы рассчитывали, или хорошее предложение, оффер на среднюю зарплату:",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        elementType: "text",
        elementText:
          "Прежде чем согласиться, вспомните про то, что первый оффер всегда минимальный - обдумайте и  решите, хотите ли попробовать поднять сумму - это возможно!",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "button",
        elementText: "Решил не торговаться, условия меня устраивают",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "button",
        elementText: "Решил попытать счастья/не все условия меня устраивают",
      },
    ];
    const schemeOneCard8 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "text",
        elementText:
          "Ок, не забудьте про юридическое оформление вашего сотрудничества.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "image",
        elementText: "Programmer",
        elementLink: "images/programmer.png",
      },
    ];
    const schemeOneCard9 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText:
          "Я внимательно ознакомился(лась) с вашим предложением. Должен(а) признать, что оно привлекательно и конкурентоспособно. Мне нравится ваша компания/проект/команда и я заинтересован в сотрудничестве с вами.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText: `1. Поднимаем сумму.
        Однако на днях у меня завершились переговоры с другой компанией и я получил(а) оффер привлекательнее по размеру заработной платы. Предлагаю пересмотреть размер зарплаты до (сумма).`,
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText: `2.Улучшаем условия, которые не устраивают.
        Однако я хотел(а) бы обсудить возможность удаленной работы (работы в офисе), возможность получить ДМС со стоматологией (перечислить условия, которые для вас идеальны). Подскажите, пожалуйста, есть ли возможность обсудить варианты обновления оффера?`,
      },
    ];
    const schemeOneCard10 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        elementType: "spoiler",
        elementText: "Если вам сделали предложение с низкой зарплатой:",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        elementType: "text",
        elementText:
          "Не соглашайтесь, не попробовав поднять сумму, даже если отчаялись и считаете это первым и последним оффером. Самое страшное, что может произойти, если вы попробуете договориться о повышении - работодатель ответит, что это финальный оффер и дальнейшие переговоры невозможны.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        schemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeOneCard11 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "text",
        elementText:
          "Я внимательно ознакомился(лась) с вашим предложением. Мне нравится ваша компания/проект/команда и я заинтересован в сотрудничестве с вами, однако меня смущает уровень заработной платы. В других компаниях, с которыми я веду переговоры, предлагается более высокий уровень дохода. Давайте обсудимпредлагаю пересмотреть размер зарплаты до (сумма).",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "image",
        elementText: "Rocket",
        elementLink: "images/rocket.png",
      },
    ];
    const schemeTwoCard0 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        elementType: "spoiler",
        elementText:
          "Вы выложили резюме в открытом доступе на HHHabr Career и пр.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        elementType: "text",
        elementText:
          "Присоединяем сопроводительное письмо + одностраничное резюме отдельным файлом!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        schemeNodeId: schemeNodeIds[2].schemeNodeId,
        elementType: "button",
        elementText:
          "Вы откликнулись, и вам ответили 'Спасибо, мы внесли ваше резюме в базу",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        schemeNodeId: schemeNodeIds[1].schemeNodeId,
        elementType: "button",
        elementText: "HR сама связалась с предложением созвониться",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        schemeNodeId: schemeNodeIds[3].schemeNodeId,
        elementType: "button",
        elementText: "Вы сами откликнулись, и вас пригласили",
      },
    ];
    const schemeTwoCard1 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        elementType: "text",
        elementText: "Поздравляю, резюме работает!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        schemeNodeId: schemeNodeIds[3].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeTwoCard2 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[2].schemeNodeId,
        elementType: "text",
        elementText:
          "Поблагодарите HR и напишите емкое сообщение, налаживая коммуникацию с первого касания. Например:",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[2].schemeNodeId,
        elementType: "text",
        elementText: `Здравствуйте (Имя HR-менеджера).
Благодарю Вас за внимание, проявленное к моей кандидатуре.
Буду рад(а) оставаться с вами на связи и получить приглашение на собеседование.
С уважением, (Ваше имя).`,
      },
    ];
    const schemeTwoCard3 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        elementType: "text",
        elementText:
          "Ура! Вас заметили! Хотите продолжить общение по вакансии?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        schemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "button",
        elementText: "Возможно, но в резюме не указана ЗП",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        schemeNodeId: schemeNodeIds[5].schemeNodeId,
        elementType: "button",
        elementText: "Да",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        schemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "button",
        elementText: "Нет",
      },
    ];
    await queryInterface.bulkInsert(
      "Elements",
      [
        schemeOneCard0,
        schemeOneCard1,
        schemeOneCard2,
        schemeOneCard3,
        schemeOneCard4,
        schemeOneCard5,
        schemeOneCard6,
        schemeOneCard7,
        schemeOneCard8,
        schemeOneCard9,
        schemeOneCard10,
        schemeOneCard11,
      ]
        .flat()
        .map((el, i) => {
          return el;
        }),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Elements", null, {});
    await queryInterface.bulkDelete("SchemeNodes", null, {});
    await queryInterface.bulkDelete("Schemes", null, {});
  },
};
