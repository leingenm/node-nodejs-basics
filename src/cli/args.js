const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);

  const result = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      result.push(`${args[i].replace("--", "")} is ${args[i + 1]}`);
    }
  }
  console.log(result.join(', '));
};

parseArgs();
