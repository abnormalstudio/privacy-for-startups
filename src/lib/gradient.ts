let i = 0;
const gradients = [
  `radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )`,
  `linear-gradient( 116.9deg,  rgba(232,10,116,1) -9.3%, rgba(244,79,79,1) 77.3% )`,
  `linear-gradient(to right, #240b36, #c31432)`,
  `linear-gradient(to right, #f12711, #f5af19)`,
  `linear-gradient(to right, #00f260, #0575e6)`,
  `linear-gradient(to right, #ff9966, #ff5e62)`,
  `linear-gradient(to right, #7f00ff, #e100ff)`,
  `linear-gradient(to right, #396afc, #2948ff)`,
  `linear-gradient(to right, #eb5757, #000000)`,
  `linear-gradient(to right, #e44d26, #f16529)`,
  `linear-gradient(to right, #ee0979, #ff6a00)`,
  `linear-gradient(to right, #834d9b, #d04ed6)`,
  `linear-gradient(to right, #ff0084, #33001b)`,
  `linear-gradient(to right, #42275a, #734b6d)`
];
let titles: any = {};

export default function gradient(title: string) {
  if (titles[title]) {
    return titles[title];
  }

  const current = gradients[i];

  i++;
  if (i >= gradients.length) {
    i = 0;
  }

  titles[title] = current;

  return current;
}
