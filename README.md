# WIK-DPS-TP01

### Run the project

1. Clone the repository

`git clone https://github.com/Clementadm/WIK-DPS-TP01.git`

2. Open the project in your terminal and install all dependencies :

`npm install`

3. Create a .env file to define a port (everything you want)
   `PING_LISTEN_PORT="1111"`

4. Now run the project

- `npx tsc`
- `node build/index.js`

### What happened ?

The only path that respond is **/ping**.  
It returns the headers of the actual page.

All the other paths return nothing (error 404).
