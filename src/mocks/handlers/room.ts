server.post('/rooms', (req, res) => {
  const { difficult } = req.body;
  res.json({ invite_id: 1234 });
});

server.put('/rooms', (req, res) => {
  const { invite_id } = req.body;
  res.status(200).json({ success: true });
});

server.get('/rooms', (req, res) => {
  res.status(200).json(req.query);
});

server.delete('/rooms', (req, res) => {
  
});
