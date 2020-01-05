
//Create Connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
  });
  
  //connect to database
  conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
  })

  module.exports = connection;