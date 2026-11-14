const express = require('express');
const app = express();
const sequelize = require('./common/database');
const defineUser = require('./common/models/Users');
const User = defineUser(sequelize);
const authRoutes = require('./authorization/routes');


app.use(express.json());
app.use('/', authRoutes);
sequelize.sync();
app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));