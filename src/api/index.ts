const socket = new WebSocket("ws://localhost:42069/ws");

export const connect = (callback: (msg: any) => void) => {
  console.log("Attempting connection...");

  socket.onopen = () => console.log("Successfully connected!");

  socket.onmessage = (msg) => {
    callback(msg);
  };

  socket.onclose = (event) => console.log(`Socket closed connection: ${event}`);

  socket.onerror = (error) => console.log(`Socket error: ${error}`);
};

export const sendMsg = (msg: string) => {
  socket.send(msg);
};
