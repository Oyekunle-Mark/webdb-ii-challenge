exports.seed = function(knex) {
  return knex('cars')
    .truncate()
    .then(() =>
      knex('cars').insert([
        {
          VIN: '3838JDI339F',
          make: 'Mercedes Benz',
          model: '4Matic',
          mileage: 10,
          transmission: 'Automatic',
          status: 'Clean',
        },
        {
          VIN: 'JDJ939JDDJ',
          make: 'Nissan',
          model: 'Altima',
          mileage: 29295,
          transmission: 'Automatic',
          status: 'Salvage',
        },
        {
          VIN: '3929JFFWWZ1',
          make: 'MACK',
          model: 'Super Truck',
          mileage: 9503,
        },
        {
          VIN: '929LQZNXX1',
          make: 'Range Rover',
          model: 'Sport',
          mileage: 9456,
          transmission: 'Automatic',
          status: 'Salvage',
        },
        {
          VIN: 'QIIO12O11',
          make: 'Tata',
          model: 'Omni Bus',
          mileage: 758389,
          status: 'Salvage',
        },
      ]),
    );
};
