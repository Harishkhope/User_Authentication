const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const connectDB = require('./db/dbConnection');
const User = require('./db/user');

//middleware for parsing JSON
app.use(express.json());

//enabled cors
app.use(cors());

//Registrations
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        // console.log(req.body)
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: "Registration successful" });
    }
    catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
})

//Login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or Password' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful' })
    }
    catch (error) {
        res.status(500).json({ error: 'Login failed' })
    }
})

connectDB();

app.listen(port, () => {
    console.log("server listening on port 4000")
});