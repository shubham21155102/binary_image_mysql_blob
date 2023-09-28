const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_image'
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);

    // Perform database operations here
    createTable();
});

function createTable() {
    connection.query(
        "CREATE TABLE IF NOT EXISTS image_data (id INT AUTO_INCREMENT PRIMARY KEY, image_name VARCHAR(255), image MEDIUMBLOB)",
        function (err, result) {
            if (err) throw err;
            console.log("Table created");

            // Perform the next operation (e.g., insert data)
            insertData();
        }
    );
}

function insertData() {
    fetch('https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg')
        .then(response => response.arrayBuffer())
        .then(binaryData => {
            console.log(binaryData);
            connection.query('INSERT INTO image_data SET ?', { image_name: 'Jawan_film_poster.jpg', image: binaryData }, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");

                // Perform the next operation (e.g., select data)
                selectData();
            });
        })
        .catch(error => {
            console.error(error);
        });
}

function selectData() {
    connection.query('SELECT * FROM image_data', function (err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows);

        // Perform the final operation (e.g., drop table)
        dropTable();
    });
}

function dropTable() {
    connection.query('DROP TABLE image_data', function (err, result) {
        if (err) throw err;
        console.log('Table dropped');

        // Close the connection after all operations are done
        connection.end(function (err) {
            if (err) {
                console.error('Error closing MySQL connection: ' + err.stack);
                return;
            }
            console.log('MySQL connection closed.');
        });
    });
}
