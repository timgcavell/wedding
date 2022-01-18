import { readSwatchesFile } from 'procreate-swatches';
import { promises as fs } from 'fs';

(async () => {
  const data = await fs.readFile('Wedding.swatches');
  const swatches = await readSwatchesFile(data);
  console.log(swatches);

  for (const swatch in swatches) {
    console.log(swatch);
    console.log(swatch.name);
    console.log(swatch.colors);
    for (const color in swatch.colors) {
        console.log(color);
    }
  }
})();
