const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const metric = require('./routes/metric')

app.use(express.json());
app.get('/', (req, res) => res.send({ status: "ok" }));
app.use('/metric', metric)

app.listen(port, () => console.log(`Server listening on ${port}`));
