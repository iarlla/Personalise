import mysql from "mysql2";

// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "blueberry",
//   password: "Linux_Mint@",
//   database: "personalise",
//   port: 3306,
//   insecureAuth: true,
// });


export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "personalise",
    port: 3306,
    insecureAuth: true
});


// export const db = poolConnection.getConnection();