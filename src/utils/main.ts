const sayHi = (name: string) => {
  console.log('Hello, ', name);
};

const waitToSayHi = async (name: string) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  console.log('Hello, ', name);
};

export { sayHi, waitToSayHi };
