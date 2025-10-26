const parseEnv = () => {
  const prefix = "RSS_";
  Object.entries(process.env)
    .filter(([key]) => key.startsWith(prefix))
    .forEach(([key, value]) => console.log(`${key}=${value};`));
};

parseEnv();
