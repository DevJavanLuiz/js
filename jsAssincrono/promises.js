function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD Value.");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
esperaAi("Conexão BD", rand(1, 3))
  .then((res) => {
    console.log(res);
    return esperaAi("Buscando dados", rand(1, 3));
  })
  .then((res) => {
    console.log(res);
    return esperaAi(2222, rand(1, 3));
  })
  .then((res) => {
    console.log(res);
  })
  .then(() => {
    console.log("Exibe dados");
  })
  .catch((e) => {
    console.log("Error:", e);
  });
