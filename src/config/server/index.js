const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient()

const PORT = process.env.PORT || 8080;

app.get('/users', (req,res) => {
    res.status(200).json({
        error: false
    });
})

app.post('/user', (req,res) => {
    const { name, email, password, photo } = req.body;
    prisma.user.create({
        data: {
            name,
            email,
            password,
            photo
        }
    })
    res.status(200).json({
        error: false,
        message: 'User created'
    })
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));