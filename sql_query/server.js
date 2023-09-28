const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');
// db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");
// db.run("INSERT INTO users (name, email) VALUES (?, ?)", ["John", "shubham@gmail.com"]);
// db.all('SELECT * FROM users', (err, rows) => {
//     console.log(rows);
// }
// );
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/create', (req, res) => {
    const { query } = req.body; // Extract the query from the request body
    if (!query) {
        res.status(400).json({ error: 'Missing query in the request body' });
        return;
    }

    db.run(query, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to execute the query' });
        } else { 
            console.log("Working")
            res.status(200).json({ message: 'Query executed successfully' });
        }
    });
});

// app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.set('views', './views');
// app.get('/', (req, res) => res.render('index'));
// app.get('test', (req, res) => {
//     db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)")
//     db.run("INSERT INTO users (name, email) VALUES (?, ?)", ["John", "faizkhan@gmail.com"]);
//     res.send("test");

// })
// app.get('/list', (req, res) => {
//     db.all('SELECT * FROM users', (err, rows) => {
//         res.render('list', { users: rows });
//     });
// });
// app.get('/create', (req, res) => res.render('create'));
// app.post('/create', (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) => {
//         res.redirect('/list');
//     });
// });
// app.get('/edit/:id', (req, res) => {
//     const id = req.params.id;
//     db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
//         res.render('edit', { user: row });
//     });
// });
// app.post('/edit/:id', (req, res) => {
//     const id = req.params.id;
//     const name = req.body.name;
//     const email = req.body.email;
//     db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err) => {
//         res.redirect('/list');
//     });
// });
// app.get('/delete/:id', (req, res) => {
//     const id = req.params.id;
//     db.run('DELETE FROM users WHERE id = ?', [id], (err) => {
//         res.redirect('/list');
//     });
// });
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
