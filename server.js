const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! Deployed with Render');
});

app.get('/about', (req, res) => {
    res.send('This is the About page');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
