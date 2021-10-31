const fs = require("fs");

// Data Template
const datas = [[], []];

for (let i = 0; i < 5; i++) {
  datas.forEach((data) => {
    data[1] = data[1].replace("ي", "ی");
  });
}

for (let i = 0; i < 5; i++) {
  datas.forEach((data) => {
    data[1] = data[1].replace("ك", "ک");
  });
}

fs.writeFileSync("a.json", JSON.stringify(datas), (err, data) => {
  if(err)
    console.log(err);
  else
    console.log(data);
});