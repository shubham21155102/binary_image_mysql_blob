const express = require('express');
const mysql = require('mysql2');
const path = require('path')
const app = express();
const port = 3000;
const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_image'
});

function blobToBase64(blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});
app.get('/get-data', (req, reso) => {
    connection.query('SELECT * FROM image_data', (err, res) => {
        if (err) throw err;
        console.log(res)
        reso.json(res);
        // var reader = new FileReader();
        // reader.readAsDataURL(res[0].image);
        // reader.onloadend = function () {
        //     var base64data = reader.result;
        //     console.log(base64data);
        // }

    })
    // connection.query('SELECT * FROM image_data WHERE id = ?', [1], (err, results) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).json({ error: 'Database error' });
    //         return;
    //     }

    //     if (results.length === 0) {
    //         res.status(404).json({ error: 'Image not found' });
    //         return;
    //     }

    //     // Assuming the image data is stored as a Buffer in the 'image' column
    //     const imageBuffer = results[0].image;
    //     console.log(results[0].image)
    //     const buffer = Buffer.from(results[0].image);
    //     console.log(buffer)
    //     var reader = new FileReader();
    //     reader.readAsDataURL(blob);
    //     reader.onloadend = function () {
    //         var base64data = reader.result;
    //         console.log(base64data);
    //     }
    //     const dataUrl = `data:image/jpeg;base64,${buffer.toString('base64')}`;
    //     console.log(dataUrl)
    //     // Set appropriate headers for binary data (image)
    //     res.setHeader('Content-Type', 'image/jpeg'); // Adjust the content type as needed
    //     console.log('Blob Size:', imageBuffer.size);
    //     console.log('Blob Type:', imageBuffer.type);

    //     res.end(imageBuffer);
    // });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
