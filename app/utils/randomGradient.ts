const gradients = [
  ["#3ca55c", "#b5ac49"],
  ["#ff6e7f", "#bfe9ff"],
  ["#003973", "#e5e5be"],
  ["#433CA2", "#4A73C0"],
  ["#EA40EC", "#763DFB"],
  ["#FE8055", "#ED27A2"],
  ["#FFD53E", "#FF810A"],
  ["#7BAAF9", "#2255EA"],
];

export const getRandomGradient = () => {
  const min = 0;
  const max = gradients.length - 1;

  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return gradients[randomNumber];
};
