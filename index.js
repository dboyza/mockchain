// ./index.js

// * Imports
const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition

// Imports from our class modules
const Blockchain = require("./src/blockchain");

// Global variables
global.difficulty = 4; // Difficulty to mine a particular block
global.blockchain = new Blockchain(); // Our copy of the blockchain
global.transactions = []; // Our current transactions
global.navigation = `<header><h1>Boyza's Blockchain</h1><img style="height: 100px;" src="https://media3.giphy.com/media/l49JMVDvP8D38LHwI/giphy.gif" alt="Bitcoin gif"></header><hr></hr><nav> <a href="http://localhost:8080/mine">Mine</a> <a href="http://localhost:8080/newtransaction">Transact</a> <a href="http://localhost:8080/listtransactions">Transaction List</a> <a href="http://localhost:8080/chain">Chain</a> <a href="http://localhost:8080/validate">Validate</a> <a href="http://localhost:8080/brew">Brew Coffee...</a> </nav><br></br><hr></hr>`

// Initialize express's class object
const app = express();
// Tell Express to use Morgan for logging requests to the console
app.use(morgan("dev")); // Pretty-print requests with the "dev" format

// Create the port number for the server to listen on
const port = 8080; // See: Wikipedia's List of TCP and UDP port numbers

// Dynamically load all routes from the ./routes folder
require("./routes")(app);

// Configure our server to run
app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening at http://localhost:${port}/`);
});