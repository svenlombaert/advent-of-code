import { promises as fs } from 'fs';

(async () => {
  const data = await fs.readFile(__dirname + '/input.txt', { encoding: 'utf8' });
  const inputs = data.split('\n').map(num => [...num]);

  const part1 = () => {
    const oneCounts: number[] = [];
    const zeroCounts: number[] = [];
    inputs.forEach((binaryArray) => {
      binaryArray.forEach((bit, index) => {
        parseInt(bit, 10) ? oneCounts[index] = (oneCounts[index] ?? 0) + 1 : zeroCounts[index] = (zeroCounts[index] ?? 0) + 1
      });
    });

    let gamma = [];
    let epsilon = [];
    for (let i = 0; i < oneCounts.length; i++) {
      if (oneCounts[i]! > zeroCounts[i]!) {
        gamma[i] = 1;
        epsilon[i] = 0;
      } else {
        gamma[i] = 0;
        epsilon[i] = 1;
      }
    }

    return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
  }

  const part2 = () => {

  }

  console.log(part1()); // 1025636
  console.log(part2()); // 
})()