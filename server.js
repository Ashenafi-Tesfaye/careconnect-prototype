const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 5000;

// Serve static assets from root
app.use(express.static(path.join(__dirname, '/')));

// Always send index.html for any other route (SPA fallback)
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'index.html'))
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

