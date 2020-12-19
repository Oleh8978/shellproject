const express = require("express");
const  spawn = require("child_process").spawn;


const app = express();
app.use(express.json());
const port = 5000;

let processId;
let child = spawn("powershell.exe",["C:\Users\Oleh\Desktop\shellproject\procid.ps1"]);
processId = child.pid;
child.stdin.end();





const fibanacii = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibanacii(n - 1) + fibanacii(n - 2);
  }
};

const checker = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push({ i: fibanacii(i) });
  }
  return arr;
};

app.get("/quit", (req, res) => {
  res.json({ quit: "quit" });
  console.log(`Process with ID ${processId}  has died`)
  process.exit()
});

const informer = () => {
  setInterval(() => {
    return console.log(`Process is working ${processId}`);
  }, 1000);
};
app.get("/", (req, res) => {
  const mass = checker();
  res.json(mass);
  informer();
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
