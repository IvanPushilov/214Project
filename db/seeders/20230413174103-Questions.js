'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const dataQuestions = [
      {
        questions:'Сколько котиков живет в моем доме',
        answers: 'один',
        theme_id: 1
      },
      {
        questions:'ksnflkjsf',
        answers: 'lksafkas',
        theme_id: 1
      },
      {
        questions:'ksnflkdgdhgjjsf',
        answers: 'gjggj',
        theme_id: 1
      },
      {
        questions:'sdlgalsgdgdslg',
        answers: 'sfadsgsd',
        theme_id: 2
      },
      {
        questions:';lkjhgf',
        answers: 'bnm',
        theme_id: 2
      },
      {
        questions:'mc,c.d;',
        answers: 'plkn',
        theme_id: 2
      },
      {
        questions:';s;s;s',
        answers: 'sss',
        theme_id: 3
      },
      {
        questions:'asdds',
        answers: 's',
        theme_id: 3
      },
      {
        questions:'eteurtj',
        answers: 'fgh',
        theme_id: 3
      },
     
    ];
    const questions = dataQuestions.map((question) => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
    await queryInterface.bulkInsert('Questions', questions);
      },
    
      async down (queryInterface) {
       await queryInterface.bulkDelete('Questions')
      }
};
