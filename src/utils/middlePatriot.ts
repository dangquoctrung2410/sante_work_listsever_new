const middlePatriot = (a: number) => {
  const b = [];
  for (let index = 0; index < a; index++) {
    if (a % index === 0) {
      b.push(index);
    }
  }
  const c = Math.round(b.length / 2);
  return b[c];
};

export { middlePatriot };
