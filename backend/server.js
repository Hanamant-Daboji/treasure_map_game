const express = require('express');
const cors = require("cors");
 
const app = express();

 
app.use(express.json());
app.use(cors());  
 
app.get('/', (req, res) => {
  res.send('Treasure Map API is running!');
});

 
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
