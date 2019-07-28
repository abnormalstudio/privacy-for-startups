let i = 0;
const gradients = [
  `radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )`,
  `linear-gradient( 90.2deg,  rgba(190,70,102,0.93) -15.6%, rgba(252,154,154,1) -15.6%, rgba(190,70,102,0.92) 17.9%, rgba(58,13,48,1) 81.6% )`,
  `linear-gradient( 109.6deg,  rgba(9,154,151,1) 11.2%, rgba(21,205,168,1) 91.1% )`,
  `linear-gradient( 68.1deg,  rgba(61,114,180,1) 5.8%, rgba(82,82,82,1) 98.1% )`,
  `linear-gradient( 116.9deg,  rgba(232,10,116,1) -9.3%, rgba(244,79,79,1) 77.3% )`
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
