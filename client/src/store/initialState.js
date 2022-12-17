export const initialState = {
   scheme1: {
      schemeId: 'scheme1',
      title: 'Переговоры',
      schemeNodes: {
         sa1: {
            schemeNodeId: 'sa1',
            schemeId: 'scheme1',
            elements: [
               { elementId: 'esa11', elementType: 'text', elementText: 'Вам звонит HR и сообщает' },
               {
                  elementId: 'esa12',
                  elementType: 'button',
                  elementText: 'Дальше',
                  nextSchemeId: 'scheme1',
                  nextSchemeNodeId: 'sa2'
               }
            ]
         },
         s2a: {
            schemeNodeId: 'sa2',
            schemeId: 'scheme1',
            elements: [
               { elementId: 'esa21', elementType: 'text', elementText: 'Запишите все, что сказал' },
               {
                  elementId: 'esa22',
                  elementType: 'button',
                  elementText: 'Дальше',
                  nextSchemeId: 'scheme1',
                  nextSchemeNodeId: 'sa3'
               }
            ]
         }
      }
   },
   scheme2: {
      schemeId: 'scheme2',
      title: 'Поиcк работы',
      schemeNodes: {
         sb1: {
            schemeNodeId: 'sb1',
            schemeId: 'scheme1',
            elements: [
               { elementId: 'esb11', elementType: 'text', elementText: 'Вы выложили резюме на HH' },
               {
                  elementId: 'esb12',
                  elementType: 'button',
                  elementText: 'Вы сами откликнулись и Вас внесли в базу',
                  nextSchemeId: 'scheme2',
                  nextSchemeNodeId: 'sb2'
               },
               {
                  elementId: 'esb13',
                  elementType: 'button',
                  elementText: 'Вы сыми откликнулиси и Вас пригласили на собеседование',
                  nextSchemeId: 'scheme2',
                  nextSchemeNodeId: 'sb3'
               }
            ]
         },
         sb2: {
            schemeNodeId: 'sb2',
            schemeId: 'scheme1',
            elements: [{ elementId: '2esb21', elementType: 'text', elementText: 'Ну ждите теперь' }]
         },
         sb3: {
            schemeNodeId: 'sb3',
            schemeId: 'scheme2',
            elements: [{ elementId: 'esb31', elementType: 'text', elementText: 'Ура!' }]
         }
      }
   }
}
