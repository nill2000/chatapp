##Project Overview:

The project is a real time application that allows multiple users to communicate

##Tech Stack & Features:
Frontend: React 

Backend: Node.js & Express.js

Database: MongoDB - Preserve Messages

Real-Time "Tool": Socket.io

Installation:

```sh
git clone <repo>
```

Go into both files of client and server and run npm install: 
```sh
cd client/react-app && npm install + cd server && npm install
```

Create a .env file in server with the dedicated MONGOURI
```sh
MONGOURI = <MONGO_CONNECTION_STRING>
```

Starting:
```sh
cd chatapp/client/react-app
npm run dev
```

```sh
cd chatapp/server
npm start
```

Possible Improvements:
1. Authentication
2. Web hosting
