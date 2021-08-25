const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

conn.on('connect', () => {
  console.log('You\'re connected!');

  conn.write("Name: CMH");

  // const interval = setInterval( () => {
  //   conn.write("Move: up");
  //   }, 50);
  
  // setTimeout(() => {
  //   clearInterval(interval); }, 3000);

  
conn.write("Say: hey y'all!");


})

conn.on('data', (data) => {
  console.log(data);
})

  return conn;
};

module.exports = {
  //same as connect: connect,
connect
};
