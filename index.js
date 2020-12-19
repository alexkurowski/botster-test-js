import fs from "fs";

(function () {
  const input = JSON.parse(fs.readFileSync("input.json"));

  const result = [
    {
      'Message': "Hello, World!",
      "Got input": JSON.stringify(input)
    }
  ];

  fs.writeFileSync("output.json", JSON.stringify(result));
})();
