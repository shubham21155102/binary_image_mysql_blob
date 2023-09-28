**Check available databases**

```sql
 SHOW DATABASES;
```

```sql
-- Create a database named 'users'
CREATE DATABASE users;
```

```sql
-- Datatypes

In SQL, there are various data types that you can use to define the type of data that can be stored in a database table's columns. The specific data types available may vary slightly depending on the database management system (DBMS) you are using, as different DBMSs may have their own proprietary data types. However, here are some common SQL data types:

Numeric Data Types:
INT or INTEGER: Integer values.
SMALLINT: Small integer values.
TINYINT: Tiny integer values.
BIGINT: Large integer values.
DECIMAL(p, s) or NUMERIC(p, s): Fixed-point numbers with precision p and scale s.
FLOAT(p): Floating-point numbers.
REAL: Real numbers.
DOUBLE PRECISION: Double-precision floating-point numbers.
Character and String Data Types:
CHAR(n): Fixed-length character strings of length n.
VARCHAR(n): Variable-length character strings with a maximum length of n.
TEXT: Variable-length character strings with no maximum length.
Date and Time Data Types:
DATE: Date values in the format 'YYYY-MM-DD'.
TIME: Time values in the format 'HH:MI:SS'.
DATETIME or TIMESTAMP: Date and time values.
YEAR: Year values in two-digit or four-digit format.
Boolean Data Type:
BOOLEAN or BOOL: Represents true or false values.
Binary Data Types:
BINARY(n): Fixed-length binary data of length n.
VARBINARY(n): Variable-length binary data with a maximum length of n.
BLOB: Binary large object for storing large binary data.
Other Data Types:
ENUM: Enumeration type for specifying a set of values.
SET: Set type for specifying a set of values.
JSON: JSON data type for storing JSON-formatted data.
UUID: Universally unique identifier.
Custom/User-Defined Data Types:
Some database systems allow you to define your own custom data types.

```

```javascript
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

```
