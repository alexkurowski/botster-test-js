import fs from "fs";

(function () {
  const input = JSON.parse(fs.readFileSync("input.json"));

  console.log("Log test")

  const result = [
    {
      'Message': "Hello, World!",
      "Got input": JSON.stringify(input)
    }
  ];

  throw new Error("Error test")

  fs.writeFileSync("output.json", JSON.stringify(result));
})();
