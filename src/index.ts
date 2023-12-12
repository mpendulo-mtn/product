import http from 'http';
import createApp from './app';
import 'dotenv/config';


const app = createApp();
const httpServer = http.createServer(app);

const PORT: number = parseInt(process.env.PORT || '6060', 10);

httpServer.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
