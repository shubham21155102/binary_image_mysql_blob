// alert("hii")
// import mysql from 'mysql2';

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
});

connection.query(
    "CREATE TABLE IF NOT EXISTS image_data (id INT AUTO_INCREMENT PRIMARY KEY, image_name VARCHAR(255), image MEDIUMBLOB)",
    function (err, result) {
        if (err) throw err;
        console.log("Table created");
    }
);
// const file=document.getElementsByTagName("input");
// console.log(file)
// console.log(typeof(file))
// const reader=new FileReader();
// reader.onload=function(){
//         const binaryString=reader.result;
//         console.log(binaryString)
// }
// reader.readAsDataURL(file[0].files[0])
fetch('https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg')
    .then(response => response.arrayBuffer())
    .then(binaryData => {
        console.log(binaryData);
        connection.query('INSERT INTO image_data SET ?', { image_name: 'Jawan_film_poster.jpg', image: binaryData }, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
        // alert(binaryData.byteLength)
        // const imgElement = document.createElement('img');
        // imgElement.src = URL.createObjectURL(new Blob([binaryData]));
        // document.body.appendChild(imgElement);
    })
    .catch(error => {
        console.error(error);
    });

