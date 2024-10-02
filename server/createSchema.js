const pool = require('./db');

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
      id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      author_id INT,
      content VARCHAR(2000),
      likes BIGINT,
      reposts BIGINT,
      replies BIGINT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

pool.query(createTableQuery, (err, results, fields) => {
    if(err){
        console.error('/!\\ Something went wrong: ', err);
    }else{
        console.log('(i) Table created or already existing');
    }
    pool.end((err) =>{
        if(err){
            console.error('/!\\ Error while ending connection: ', err)
        }else{
            console.log('(i) Connection ended')
        }
    })
}); 
