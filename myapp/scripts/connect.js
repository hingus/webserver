const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/Test.db', (err) =>
{
  if (err) {
        console.error(err.message);
    }

    console.log('Connected to the users.db database.');
});


db.serialize(() => {
  // const sql = `CREATE TABLE IF NOT EXISTS Restaurant (ID INT NULL,Name VARCHAR NULL,RestaurantType VARCHAR NULL,TimeVisit VARCHAR NULL,CleanessRating INT NULL,ServicesRating INT NULL,FoodQualityRating INT NULL,OverallRating INT NULL,Description VARCHAR NULL)`;

  // db.run(sql, (err) => {
  //     if (err) {
  //         console.log(err);
  //         throw err;
  //     }
  // });
});


db.close((err) => {
  if (err) {
      console.error(err.message);
  }
  console.log('Close the database connection.');
});
