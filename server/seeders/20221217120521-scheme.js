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
          startSchemeNodeId: 12,
        },
      ],
      {}
    );
    const schemes = await queryInterface.sequelize.query(
      'SELECT "Schemes"."schemeId" from "Schemes"'
    );
    const schemeIds = schemes[0];
    const schemeNodesArray = [...new Array(12), ...new Array(28)].map(
      (el, i) => {
        if (i < 12) {
          return {
            SchemeSchemeId: schemeIds[0].schemeId,
            schemeNodeId: i,
          };
        }
        return {
          SchemeSchemeId: schemeIds[1].schemeId,
          schemeNodeId: i,
        };
      }
    );
    await queryInterface.bulkInsert("SchemeNodes", schemeNodesArray, {});
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
        elementType: "image",
        elementText: "start",
        elementLink: "images/start.png",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[1].schemeNodeId,
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
        next: schemeNodeIds[2].schemeNodeId,
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
        elementText: "Stop",
        elementLink: "images/stop.png",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[2].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[3].schemeNodeId,
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
        elementText: "Phone",
        elementLink: "images/phone.png",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[4].schemeNodeId,
        elementType: "button",
        elementText: "Сообщить другим работодателям",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[5].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeOneCard4 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "text",
        elementText:
          'Вы получили оффер - для "поднятия" своего рейтинга у других работодателей сообщите всем компаниям, от которых ждете ответ по собеседованиям (особенно тем, в которые очень хотите), что вы получили оффер:',
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "text",
        elementText:
          "Добрый день, _имя рекрутера__, хотел(а) бы сделать апдейт по процессу рекрутинга - я на днях  получил(а) оффер, однако ваша компания для меня приоритетна,",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "text",
        elementText:
          "и я бы хотел(а) пройти дальнейшие этапы/получить обратную связь по собеседованию как можно скорее. Подскажите, пожалуйста, сможете ли вы до (свой день недели) вернуться с ответом по моей кандидатуре?",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "text",
        elementText:
          "Сообщать от какой компании оффер и на какую сумму не нужно.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "image",
        elementText: "smile",
        elementLink: "images/smile.png",
      },
    ];
    const schemeOneCard5 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        elementType: "text",
        elementText:
          "Скажите, что вам нужно время обдумать их предложение и назовите срок, когда вы вернетесь с ответом (в идеале не больше 3-4 рабочих дней).",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        elementType: "text",
        elementText:
          "Не принимайте оффер сразу же так как первый оффер от любой компании ВСЕГДА минимален по сумме, он только открывает пространство переговоров по зарплате.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        elementType: "text",
        elementText:
          "Помните, что  зарплата разработчика прежде всего зависит от суммы, в которую он сам себя оценивает.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        elementType: "text",
        elementText:
          "Добрый день, _имя рекрутера__,Благодарю, документ получил(а).Я внимательно ознакомлюсь с оффером и вернусь к вам до день недели/дата. Большое спасибо, что поделились со мной хорошими новостями, будем на связи!",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[6].schemeNodeId,
        elementType: "button",
        elementText: "Почему не следует торопиться",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[7].schemeNodeId,
        elementType: "button",
        elementText: "Вы получили хороший оффер",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[10].schemeNodeId,
        elementType: "button",
        elementText: "Вы получили не очень хороший оффер",
      },
    ];
    const schemeOneCard6 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "Если вы получили оффер, на который просят ответить за короткое время (24/48/72 часа), а вы не готовы так быстро принять решение/ждете информации от других работодателей.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "Не ведитесь на срочность и не переживайте - это просто способ работодателя надавить и поскорее закрыть вакансию.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText: "Напишите ответ HR в таком ключе:",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "Добрый день, _имя рекрутера__, благодарю, документ получил(а). К сожалению, принять решение по данному предложению в такой короткий срок/за 24-48-72 часа/1 день/2 дня я не имею возможности,",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "так как нахожусь на финальной стадии переговоров с другими компаниями и этот процесс займет еще примерно неделю. Мне понадобится больше времени, чтобы принять взвешенное решение",
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
        elementType: "text",
        elementText:
          "Очень жаль, мне нравится ваша компания, проект и команда. Решение о выборе работодателя для меня очень важное и ответственное и я никак не могу его принять за такой короткий срок",
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
        elementType: "text",
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
        elementType: "image",
        elementText: "test",
        elementLink: "images/test.png",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[8].schemeNodeId,
        elementType: "button",
        elementText: "Решил не торговаться, условия меня устраивают",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[9].schemeNodeId,
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
        elementText:
          "1. Поднимаем сумму: Однако на днях у меня завершились переговоры с другой компанией и я получил(а) оффер привлекательнее по размеру заработной платы. Предлагаю пересмотреть размер зарплаты до (сумма).",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText:
          "2.Улучшаем условия, которые не устраивают:Однако я хотел(а) бы обсудить возможность удаленной работы (работы в офисе), возможность получить ДМС со стоматологией (перечислить условия, которые для вас идеальны).",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText:
          "Подскажите, пожалуйста, есть ли возможность обсудить варианты обновления оффера?",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "image",
        elementText: "important",
        elementLink: "images/important.png",
      },
    ];
    const schemeOneCard10 = [
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        elementType: "text",
        elementText:
          "Если вам сделали предложение с низкой зарплатой: Не соглашайтесь, не попробовав поднять сумму, даже если отчаялись и считаете это первым и последним оффером.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        elementType: "text",
        elementText:
          "Самое страшное, что может произойти, если вы попробуете договориться о повышении - работодатель ответит, что это финальный оффер и дальнейшие переговоры невозможны.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        schemeId: schemeIds[0].schemeId,
        next: schemeNodeIds[11].schemeNodeId,
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
          "Я внимательно ознакомился(лась) с вашим предложением. Мне нравится ваша компания/проект/команда и я заинтересован в сотрудничестве с вами, однако меня смущает уровень заработной платы.",
      },
      {
        SchemeSchemeId: schemeIds[0].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "text",
        elementText:
          "В других компаниях, с которыми я веду переговоры, предлагается более высокий уровень дохода. Давайте обсудим/предлагаю пересмотреть размер зарплаты до (сумма).",
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
        elementType: "text",
        elementText: "Какой метод поиска работы вас интересует?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        elementType: "image",
        elementText: "start",
        elementLink: "images/start.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[1].schemeNodeId,
        elementType: "button",
        elementText: "Размещение резюме в открытом доступе",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[0].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[10].schemeNodeId,
        elementType: "button",
        elementText: "'Холодные' письма HR",
      },
    ];
    const schemeTwoCard1 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        elementType: "text",
        elementText:
          "Вы выложили резюме в открытом доступе на HHHabr Career и пр.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        elementType: "text",
        elementText:
          "Присоединяем сопроводительное письмо + одностраничное резюме отдельным файлом!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[3].schemeNodeId,
        elementType: "button",
        elementText:
          "Вы откликнулись, и вам ответили 'Спасибо, мы внесли ваше резюме в базу",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[2].schemeNodeId,
        elementType: "button",
        elementText: "HR сама связалась с предложением созвониться",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[1].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[4].schemeNodeId,
        elementType: "button",
        elementText: "Вы сами откликнулись, и вас пригласили",
      },
    ];
    const schemeTwoCard2 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[2].schemeNodeId,
        elementType: "text",
        elementText: "Поздравляю, резюме работает!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[2].schemeNodeId,
        elementType: "image",
        elementText: "salut",
        elementLink: "images/salut.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[2].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[4].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeTwoCard3 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        elementType: "text",
        elementText:
          "Поблагодарите HR и напишите емкое сообщение, налаживая коммуникацию с первого касания. Например:",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        elementType: "text",
        elementText:
          "Здравствуйте (Имя HR-менеджера). Благодарю Вас за внимание, проявленное к моей кандидатуре. Буду рад(а) оставаться с вами на связи и получить приглашение на собеседование.С уважением, (Ваше имя).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[3].schemeNodeId,
        elementType: "image",
        elementText: "smile",
        elementLink: "images/smile.png",
      },
    ];
    const schemeTwoCard4 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "text",
        elementText:
          "Ура! Вас заметили! Хотите продолжить общение по вакансии?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        elementType: "image",
        elementText: "point",
        elementLink: "images/point.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[5].schemeNodeId,
        elementType: "button",
        elementText: "Возможно, но в резюме не указана ЗП",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[8].schemeNodeId,
        elementType: "button",
        elementText: "Нет",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[4].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[9].schemeNodeId,
        elementType: "button",
        elementText: "Да",
      },
    ];
    const schemeTwoCard5 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[6].schemeNodeId,
        elementType: "button",
        elementText: "У вас есть оффер",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[5].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[7].schemeNodeId,
        elementType: "button",
        elementText: "У вас нет оффера, и вы хотите уточнить по ЗП",
      },
    ];
    const schemeTwoCard6 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "Как спросить про заработную плату, если она не указана в вакансии?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "image",
        elementText: "phone",
        elementLink: "images/phone.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "Здравствуйте (Имя HR-менеджера). Спасибо за интересное предложение. Я ознакомился(лась) с условиями, готов(а) начать общение и рассказать о своем опыте работы.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "Пожалуйста, уточните размер оклада (на руки) на данной позиции?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText:
          "Дело в том, что я сейчас в процессе оформления документов в другой компании и хочу понимать есть ли смысл менять ситуацию или нет. Спасибо за понимание.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[6].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, (Ваше имя).",
      },
    ];
    const schemeTwoCard7 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        elementType: "text",
        elementText:
          "Как спросить про заработную плату, если она не указана в вакансии?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        elementType: "image",
        elementText: "phone",
        elementLink: "images/phone.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        elementType: "text",
        elementText: "Здравствуйте (Имя HR-менеджера).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        elementType: "text",
        elementText:
          "Спасибо за интересное предложение. Я ознакомился(лась) с условиями, готов(а) начать общение и рассказать о своем опыте работы.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        elementType: "text",
        elementText:
          "Пожалуйста, уточните размер оклада (на руки) на данной позиции? Спасибо за понимание. ",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[7].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, (Ваше имя).",
      },
    ];
    const schemeTwoCard8 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "text",
        elementText: "Как отказаться от вакансии.",
      },

      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "text",
        elementText: "Здравствуйте (Имя HR-менеджера).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "text",
        elementText:
          "Благодарю Вас за внимание, проявленное к моей кандидатуре и предложение о сотрудничестве. К сожалению, в настоящее время я вынужден(а)  отказаться от вашего предложения, так как:",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "text",
        elementText:
          "не рассматриваю позицию FrontBackFullstack или стэк...., рассматриваю только удаленный формат работы, принял оффер от другой компании, завершил(а) поиски работы...",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "text",
        elementText:
          "Буду рад(а) оставаться с вами на связи и сообщу вам, если возобновлю поиск работы.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "text",
        elementText:
          "Желаю вам успехов в поиске подходящего кандидата на эту должность. Всего наилучшего вам и (название компании)!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, (Ваше имя).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[8].schemeNodeId,
        elementType: "image",
        elementText: "pin",
        elementLink: "images/pin.png",
      },
    ];
    const schemeTwoCard9 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText: "Здравствуйте (Имя HR-менеджера).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText:
          "Спасибо за интересное предложение. Я ознакомился(лась) с условиями, готов(а) начать общение и рассказать о своем опыте работы.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText: "Когда вам будет удобно созвониться?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, (Ваше имя).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "text",
        elementText:
          "Вопросы для подготовки к собеседованию с HR: https://docs.google.com/document/d/1fRN77t5175Df4fTns0qULSKE4eK5Ecy4AS6qeSY_o1U/edit?usp=sharing",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        elementType: "image",
        elementText: "thumb",
        elementLink: "images/thumb.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[9].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[14].schemeNodeId,
        elementType: "button",
        elementText: "Какие вопросы стоит задать сотруднику HR?",
      },
    ];
    const schemeTwoCard10 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        elementType: "text",
        elementText: 'Холодные" письма. Вы сами пишите HR впервые.',
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        elementType: "image",
        elementText: "programmer",
        elementLink: "images/programmer.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[11].schemeNodeId,
        elementType: "button",
        elementText: "LinkedIn",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[12].schemeNodeId,
        elementType: "button",
        elementText: "Telegram",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[10].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[13].schemeNodeId,
        elementType: "button",
        elementText: "Кадровое агенство",
      },
    ];
    const schemeTwoCard11 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "text",
        elementText:
          "NOTE: Форма обращения до 300 символов (строгое требование LinkedIn).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "text",
        elementText:
          "Здравствуйте! Меня зовут _______. Буду рад(а) присоединиться к вашему кругу профессиональных контактов.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "text",
        elementText:
          "Сейчас я приступил(а) к поиску работы и открыт(а) к предложениям на позицию ___________ разработчик.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "text",
        elementText:
          "С удовольствием пообщаюсь с Вами по открытым вакансиям в вашей компании.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, (Ваше имя).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "text",
        elementText:
          "Если HR-рекрутер вышла с вами на связь и у них есть открытые вакансии, то вы продолжаете коммуникацию и договариваетесь о собеседовании",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        elementType: "image",
        elementText: "important",
        elementLink: "images/important.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[11].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[14].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeTwoCard12 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        elementType: "text",
        elementText:
          "Здравствуйте! Меня зовут____. Заинтересовала ваша вакансия ____.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        elementType: "text",
        elementText:
          "Владею основными технологиями web-разработки: JS, HTML, CSS, Node.js, Express, PostgreSQL,Sequelize, React, Redux.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        elementType: "text",
        elementText:
          "Имею опыт реализации разноплановых проектов, посмотреть которые можно по ссылке:...",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        elementType: "text",
        elementText:
          "Всегда ищу оптимальные пути решения, альтернативные варианты улучшения качества продукта.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        elementType: "text",
        elementText:
          "Интересуюсь новыми технологиями, свободное время посвящаю изучению нового стека.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        elementType: "text",
        elementText:
          "Буду рад обсудить подробнее свой опыт на собеседовании, когда вам будет удобнее созвониться?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        elementType: "text",
        elementText: "Мои контакты: (телефон:..., e-mail:... telegram:...)",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, (Ваше имя).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        elementType: "text",
        elementText:
          "Если HR-рекрутер вышла с вами на связь и у них есть открытые вакансии, то вы продолжаете коммуникацию и договариваетесь о собеседовании",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[12].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[14].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeTwoCard13 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[13].schemeNodeId,
        elementType: "text",
        elementText:
          "Здравствуйте! Прошу рассмотреть мою кандидатуру на открытые в Вашем кадровом агентстве вакансии в сфере разработки ПО.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[13].schemeNodeId,
        elementType: "text",
        elementText:
          "В настоящий момент ориентирован(а) на работу в крупных российских и иностранных компаниях.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[13].schemeNodeId,
        elementType: "text",
        elementText:
          "Возможные должности: Frontend-разработчик, Fullstack-разработчик.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[13].schemeNodeId,
        elementType: "text",
        elementText:
          "На данный момент нахожусь в г. __________, готов к переезду в г. ___________. Ориентируюсь на доход от _________ тыс. руб. (без учета премий).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[13].schemeNodeId,
        elementType: "text",
        elementText:
          "В приложении Вы найдете мое резюме, буду рад(а) предоставить любую дополнительную информацию, необходимую для рассмотрения моей кандидатуры.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[13].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, _____________",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[13].schemeNodeId,
        elementType: "text",
        elementText:
          "Если HR-рекрутер вышла с вами на связь и у них есть открытые вакансии, то вы продолжаете коммуникацию и договариваетесь о собеседовании",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[13].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[14].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeTwoCard14 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[14].schemeNodeId,
        elementType: "text",
        elementText:
          "Вы договорились о звонке и в концы Звонка вы задаете рекрутеру HR вопросы:",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[14].schemeNodeId,
        elementType: "text",
        elementText: "Какой следующий этап общения с компанией?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[14].schemeNodeId,
        elementType: "text",
        elementText: "Когда рекрутер HR даст об этом знать?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[14].schemeNodeId,
        elementType: "text",
        elementText: "Не возражает ли рекрутер HR, если вы напомните о себе?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[14].schemeNodeId,
        elementType: "text",
        elementText: "Какие этапы собеседований (сколько всего этапов)?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[14].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[15].schemeNodeId,
        elementType: "button",
        elementText: "Далее",
      },
    ];
    const schemeTwoCard15 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[15].schemeNodeId,
        elementType: "text",
        elementText:
          "После общения/собеса вы получаете следующий фидбек от рекрутера:",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[15].schemeNodeId,
        elementType: "image",
        elementText: "point",
        elementLink: "images/point.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[15].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[16].schemeNodeId,
        elementType: "button",
        elementText: "Рекрутер не выходит на связь",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[15].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[20].schemeNodeId,
        elementType: "button",
        elementText: "Рекрутер вышла с фидбеком, и это отказ(((",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[15].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[22].schemeNodeId,
        elementType: "button",
        elementText: "Рекрутер вышла с фидбеком, и это оффер!!!",
      },
    ];
    const schemeTwoCard16 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[16].schemeNodeId,
        elementType: "text",
        elementText: "Что написать рекрутеру, который не выходит на связь:",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[16].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[17].schemeNodeId,
        elementType: "button",
        elementText: "В обычном случае",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[16].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[18].schemeNodeId,
        elementType: "button",
        elementText: "Если очень хотите в эту компанию",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[16].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[19].schemeNodeId,
        elementType: "button",
        elementText: "Если у вас уже есть другой оффер, и вы торопитесь",
      },
    ];
    const schemeTwoCard17 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[17].schemeNodeId,
        elementType: "text",
        elementText:
          "Здравствуйте! Уточните, пожалуйста, есть ли уже решение по моей кандидатуре?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[17].schemeNodeId,
        elementType: "text",
        elementText:
          "Если решения нет, то уточните когда вам можно будет вернуться за обратной связью. Например:",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[17].schemeNodeId,
        elementType: "text",
        elementText:
          "Благодарю за ответ. Сообщите, пожалуйста, когда мне ожидать обратной связи по моей кандидатуре?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[17].schemeNodeId,
        elementType: "text",
        elementText:
          "NOTE: если рекрутер обещал вам дать ответ в четверг, не надо писать в середине рабочего дня четверга что-то вроде:”",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[17].schemeNodeId,
        elementType: "text",
        elementText: "«Неужели даже отрицательного фидбэка не заслуживаю?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[17].schemeNodeId,
        elementType: "image",
        elementText: "stop",
        elementLink: "images/stop.png",
      },
    ];
    const schemeTwoCard18 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[18].schemeNodeId,
        elementType: "text",
        elementText:
          "Здравствуйте! Дело в том, что до (день недели или число) я должен дать ответ по офферу, который получил на днях,",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[18].schemeNodeId,
        elementType: "text",
        elementText:
          "однако ваша компания для меня приоритетна и я бы хотел пройти дальнейшие этапы как можно скорее.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[18].schemeNodeId,
        elementType: "text",
        elementText: "А дальше:",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[18].schemeNodeId,
        elementType: "text",
        elementText:
          "Подскажите, получится с ближайшее время провести со мной (техническое) собеседование?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[18].schemeNodeId,
        elementType: "text",
        elementText: "или",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[18].schemeNodeId,
        elementType: "text",
        elementText:
          "Подскажите, сможете ли вы до пятницы вернуться с ответом по моей кандидатуре?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[18].schemeNodeId,
        elementType: "image",
        elementText: "fast",
        elementLink: "images/fast.png",
      },
    ];
    const schemeTwoCard19 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[19].schemeNodeId,
        elementType: "text",
        elementText: "Здравствуйте _____.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[19].schemeNodeId,
        elementType: "text",
        elementText:
          "Пожалуйста, уточните, каковы дальнейшие этапы собеседования?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[19].schemeNodeId,
        elementType: "text",
        elementText:
          "Мне сегодня сделали оффер, нужно дать ответ до (день недели или число), хотел бы успеть сравнить вакансии.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[19].schemeNodeId,
        elementType: "image",
        elementText: "fast",
        elementLink: "images/fast.png",
      },
    ];
    const schemeTwoCard20 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "text",
        elementText:
          "Не расстраивайтесь!  Поблагодарите рекрутера за уделенное время и внимание к вам. Например:",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "image",
        elementText: "hurt",
        elementLink: "images/hurt.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "text",
        elementText: "Здравствуйте (Имя HR-менеджера).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "text",
        elementText:
          "Спасибо за обратную связь, уделенное моей кандидатуре время и приятный опыт собеседования!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "text",
        elementText:
          "Жаль, что не получится посотрудничать по данной вакансии. Но я продолжаю искать работу в этой сфере.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "text",
        elementText:
          "И мне был бы очень полезен ваш взгляд как профессионала, почему я получил(а) отказ.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "text",
        elementText:
          "Хочу разобраться, над чем стоит поработать, какие навыки подтянуть.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "text",
        elementText:
          "Я сейчас активно ищу работу и буду благодарен(на), если вы порекомендуете мою кандидатуру коллегам.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "text",
        elementText: "Буду признателен(льна), если сможете ответить.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[20].schemeNodeId,
        elementType: "text",
        elementText: "(Ваше имя).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[14].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[21].schemeNodeId,
        elementType: "button",
        elementText: "Если сложились хорошие отношения с HR",
      },
    ];
    const schemeTwoCard21 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[21].schemeNodeId,
        elementType: "text",
        elementText:
          'В случае, если с hr случилась "взаимная любовь" написать:',
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[21].schemeNodeId,
        elementType: "text",
        elementText:
          "Хочу поделиться с вами положительным впечатлением. После собеседования я понял(а), что ваша компания - это та самая компания мечты.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[21].schemeNodeId,
        elementType: "text",
        elementText:
          "Если у вас что-то изменится или откроется еще одна вакансия, то я буду очень счастлив(а) принять участие в отборе на вакансию и пройти собеседование.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[21].schemeNodeId,
        elementType: "text",
        elementText: "(Ваше имя).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[21].schemeNodeId,
        elementType: "image",
        elementText: "heart",
        elementLink: "images/heart.png",
      },
    ];
    const schemeTwoCard22 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[22].schemeNodeId,
        elementType: "text",
        elementText:
          "Рекрутер вышла к вам с фидбэком после тех. собеса. И это оффер!!!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[22].schemeNodeId,
        elementType: "text",
        elementText:
          "Срочно писать вашему карьерному коучу!!!!!!! NOTE: коуч поможет вам понять что ОК или НЕ ОК в оффере, подскажет как поторговаться по условиям и конечно разделит с вами вашу победу",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[22].schemeNodeId,
        elementType: "image",
        elementText: "salut",
        elementLink: "images/salut.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[22].schemeNodeId,
        elementType: "text",
        elementText: "Вы  решили принять оффер?",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[23].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[23].schemeNodeId,
        elementType: "button",
        elementText: "Да!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[22].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[24].schemeNodeId,
        elementType: "button",
        elementText: "Да, но вас не устраивают условия",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[22].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[25].schemeNodeId,
        elementType: "button",
        elementText: "Нет",
      },
    ];
    const schemeTwoCard23 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[23].schemeNodeId,
        elementType: "text",
        elementText: "Здравствуйте (Имя HR-менеджера).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[23].schemeNodeId,
        elementType: "text",
        elementText:
          "Спасибо за предложение присоединиться к команде (название компании). Ознакомившись с условиями найма, я с радостью принимаю ваше предложение.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[23].schemeNodeId,
        elementType: "text",
        elementText:
          "Размер оплаты труда и прочие условия, указанные в оффере, полностью меня устраивают.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[23].schemeNodeId,
        elementType: "text",
        elementText:
          "Готов(а) приступить к работе с (числомесяц) и с нетерпением жду своего первого дня в вашей компании.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[23].schemeNodeId,
        elementType: "text",
        elementText:
          "Если у вас есть ко мне дополнительные вопросы, готов(а) ответить в удобное вам время.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[23].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, (Ваше имя).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[23].schemeNodeId,
        elementType: "image",
        elementText: "thumb",
        elementLink: "images/thumb.png",
      },
    ];
    const schemeTwoCard24 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[24].schemeNodeId,
        elementType: "text",
        elementText: "СМОТРИ БЛОК-СХЕМУ ПО ПЕРЕГОВОРАМ",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[24].schemeNodeId,
        elementType: "image",
        elementText: "important",
        elementLink: "images/important.png",
      },
    ];
    const schemeTwoCard25 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[25].schemeNodeId,
        elementType: "text",
        elementText:
          "NOTE: чем дольше вы общаетесь с компанией, тем более обоснованным должен быть ваш отказ.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[25].schemeNodeId,
        elementType: "text",
        elementText:
          "Главное ― избегать исчезновения из коммуникации с компанией без объяснения причин.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[25].schemeNodeId,
        elementType: "text",
        elementText:
          "Это может сыграть во вред вашей репутации на рынке труда.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[25].schemeNodeId,
        elementType: "image",
        elementText: "programmer",
        elementLink: "images/programmer.png",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[25].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[26].schemeNodeId,
        elementType: "button",
        elementText: "Отказ без объяснения причины",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[25].schemeNodeId,
        schemeId: schemeIds[1].schemeId,
        next: schemeNodeIds[27].schemeNodeId,
        elementType: "button",
        elementText: "Отказ с объяснением причины",
      },
    ];
    const schemeTwoCard26 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[26].schemeNodeId,
        elementType: "text",
        elementText: "Здравствуйте (Имя HR-менеджера).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[26].schemeNodeId,
        elementType: "text",
        elementText:
          "Спасибо за предложение присоединиться к команде (название компании).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[26].schemeNodeId,
        elementType: "text",
        elementText:
          "Я ценю время, которое вы потратили на то, чтобы провести собеседование и ответить на все мои вопросы.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[26].schemeNodeId,
        elementType: "text",
        elementText:
          "Мне нелегко далось это решение, но я вынужден(а) отказаться от вашего предложения.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[26].schemeNodeId,
        elementType: "text",
        elementText:
          "Желаю вам успехов в поиске подходящего кандидата на эту должность. Всего наилучшего вам и (название компании)!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[26].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, (Ваше имя).",
      },
    ];
    const schemeTwoCard27 = [
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[27].schemeNodeId,
        elementType: "text",
        elementText: "Здравствуйте (Имя HR-менеджера).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[27].schemeNodeId,
        elementType: "text",
        elementText:
          "Спасибо за предложение стать частью (название компании) в роли (название позиции).",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[27].schemeNodeId,
        elementType: "text",
        elementText:
          "Я ценю предоставленную возможность и ваш интерес к моей кандидатуре.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[27].schemeNodeId,
        elementType: "text",
        elementText:
          "К сожалению, я выбрал(а) позицию в другой компании. На данном этапе она лучше всего соответствует моим карьерным ожиданиям и целям.",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[27].schemeNodeId,
        elementType: "text",
        elementText:
          "Еще раз спасибо за ваше время и приятный опыт собеседования!",
      },
      {
        SchemeSchemeId: schemeIds[1].schemeId,
        SchemeNodeSchemeNodeId: schemeNodeIds[27].schemeNodeId,
        elementType: "text",
        elementText: "С уважением, (Ваше имя).",
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
        schemeTwoCard0,
        schemeTwoCard1,
        schemeTwoCard2,
        schemeTwoCard3,
        schemeTwoCard4,
        schemeTwoCard5,
        schemeTwoCard6,
        schemeTwoCard7,
        schemeTwoCard8,
        schemeTwoCard9,
        schemeTwoCard10,
        schemeTwoCard11,
        schemeTwoCard12,
        schemeTwoCard13,
        schemeTwoCard14,
        schemeTwoCard15,
        schemeTwoCard16,
        schemeTwoCard17,
        schemeTwoCard18,
        schemeTwoCard19,
        schemeTwoCard20,
        schemeTwoCard21,
        schemeTwoCard22,
        schemeTwoCard23,
        schemeTwoCard24,
        schemeTwoCard25,
        schemeTwoCard26,
        schemeTwoCard27,
      ]
        .map((el, i) => {
          if (i <= 11) return el;
          return el.map((item) => {
            if (item.next) item.next = item.next + 12;
            item.SchemeNodeSchemeNodeId = item.SchemeNodeSchemeNodeId + 12;
            return item;
          });
        })
        .flat(),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Elements", null, {});
    await queryInterface.bulkDelete("SchemeNodes", null, {});
    await queryInterface.bulkDelete("Schemes", null, {});
  },
};
