/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex(`movies`).del()
  await knex(`movies`).insert([
    { 
      name: 'Better Call Saul', 
      description: 'Os julgamentos e atribulações do advogado criminal, Jimmy McGill, e o estabelecimento de seu escritório de advocacia em Albuquerque, Novo México.',
      image: 'https://i.pinimg.com/originals/dd/a4/35/dda4354721c45e538838558f481e25d2.png'
    },
    { 
      name: 'Better Call Saul', 
      description: 'Os julgamentos e atribulações do advogado criminal, Jimmy McGill, e o estabelecimento de seu escritório de advocacia em Albuquerque, Novo México.',
      image: 'https://i.pinimg.com/originals/dd/a4/35/dda4354721c45e538838558f481e25d2.png'
    },
    { 
      name: 'Better Call Saul', 
      description: 'Os julgamentos e atribulações do advogado criminal, Jimmy McGill, e o estabelecimento de seu escritório de advocacia em Albuquerque, Novo México.',
      image: 'https://i.pinimg.com/originals/dd/a4/35/dda4354721c45e538838558f481e25d2.png'
    }
  ]);
};
