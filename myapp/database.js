var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "./database/db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.');

        db.run(`CREATE TABLE Restaurant (
            ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            Name text NOT NULL,
            RestaurantType text NOT NULL,
            TimeVisit text NOT NULL,
            CleanessRating INTEGER NOT NULL,
            ServicesRating INTEGER NOT NULL,
            FoodQualityRating INTEGER NOT NULL,
            OverallRating INTEGER NOT NULL,
            Description text);
            `,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 
                'INSERT INTO Restaurant (Name, RestaurantType, TimeVisit, CleanessRating, ServicesRating, FoodQualityRating, OverallRating, Description) VALUES (?,?,?,?,?,?,?,?);';
                var insert2 = 
                'INSERT INTO Restaurant (Name, RestaurantType, TimeVisit, CleanessRating, ServicesRating, FoodQualityRating, OverallRating, Description) VALUES (?,?,?,?,?,?,?,?);';
                db.run(insert, ["Name","RestaurantType","ts", 3, 3, 3, 3, ""]);
                db.run(insert, ["NaASDADme","ASDSADAS","ts", 1, 324132, 1324324, 3, ""]);
            }
        });  
    }
});


module.exports = db





// var sqlite3 = require('sqlite3').verbose();
// var md5 = require('md5');

// const DBSOURCE = "./database/Test.db";

// let db = new sqlite3.Database(DBSOURCE, (err) => {
//     if (err) {
//       // Cannot open database
//       console.error(err.message)
//       throw err
//     }else{
//         console.log('Connected to the SQLite database.')
//         db.run(`CREATE TABLE IF NOT EXISTS Reviewed (
//             ID INT NULL,
//             Name VARCHAR NULL,
//             RestaurantType VARCHAR NULL,
//             TimeVisit VARCHAR NULL,
//             CleanessRating INT NULL,
//             ServicesRating INT NULL,
//             FoodQualityRating INT NULL,
//             OverallRating INT NULL,
//             Description VARCHAR NULL)`,
//         (err) => {
//             if (err) {
//                 // Table already created
//             }else{
//                 // Table just created, creating some rows
//                 //var insert = 'INSERT INTO Reviewed (name, email, password) VALUES (?,?,?)'
//                 //db.run(insert, ["admin","admin@example.com",md5("admin123456")])
//                 //db.run(insert, ["user","user@example.com",md5("user123456")])
//             }
//         });  
//     }
// });


// module.exports = db