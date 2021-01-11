'use strict';
const bcrypt = require("bcrypt")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[
     {
       firstname:"rayen",
       lastName:"douss",
       email:"rayendouss@gmail.com",
        password: bcrypt.hashSync("rayen",10),
        gender : "male"
     },
     {
      firstname:"moez",
      lastName:"taieb",
      email:"vandlez@gmail.com",
       password:bcrypt.hashSync("vdlz",10),
       gender : "female"
    },
    {
      firstname:"hassneoui",
      lastName:"kadheb",
      email:"la7am@gmail.com",
       password:bcrypt.hashSync("ule",10),
       gender : "female"
    },
    {
      firstname:"ghassen",
      lastName:"satamouni",
      email:"zaBatista@gmail.com",
       password:"linda",
       gender : "male"
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
