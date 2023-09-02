const jsonServer= require('json-server');
const server= jsonServer.create();
const router= jsonServer.router('db.json');
const jsonMiddlewares = jsonServer.defaults();

server.use(jsonMiddlewares);

server.use(jsonServer.rewriter({
  "/__rules": "/rules"
}));

server.post('/users', (req, res) => {
  const { userName, password } = req.body;
  res.status(200).json({ success: true });
});

server.patch('/users/name', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ success: true });
});

server.patch('/users/password', (req, res) => {
  const { password } = req.body;
  res.status(200).json({ success: true });
});

server.post('/users/credentials', (req, res) => {
  const { userName, password } = req.body;
  res.status(200).json({ success: true });
});

server.delete('/users/credentials', (req, res) => {

});

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

server.use(router);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Mock server is running on port ${PORT}`);
});