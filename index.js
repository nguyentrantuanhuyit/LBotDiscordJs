// Require the necessary discord.js classes
const {
  Client,
  Events,
  GatewayIntentBits,
  ///// O duoi la thuoc buoc 2
  Collection,
  MessageFlags,
} = require("discord.js");

const fs = require("node:fs"); // used to read the commands directory and identify our command files.
const path = require("node:path"); //is Node's native path utility module. path helps construct paths to access files and directories. One of the advantages of the path module is that it automatically detects the operating system and uses the appropriate joiners.

const { token } = require("./config.json");

///// Creat client insstance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection(); //attaching a .commands property to your client instance so that you can access your commands in other files. The rest of the examples in this guide will follow this convention. -----Also Collection is a Class extends JavaScript's native Map class, and includes more extensive, useful functionality. Collection is used to store and efficiently retrieve commands for execution.

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);
for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
}

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.

client.once(Events.ClientReady, (readyClient) => {
  console.log(`ready logged in as ${readyClient.user.tag}`);
});

client.login(token);
