import Paleltte from "@/components/Palette/Palette";

import colorPalette from "@/util/seedPalettes";
import { generatePalette } from "@/util/colorHelper";

export default function Home() {
  return (
    <main>
      <Paleltte palette={colorPalette[5]} />
    </main>
  );
}
