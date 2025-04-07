import { ComboSequenceBar } from "./combo-sequence-bar.component";

const combo = [
  "FlashFrost",
  "SummonerFlash",
  "Frostbite",
  "Crystallize",
  "GlacialStorm",
];
const championSlug = "ahri";

export default function App() {
  return (
    <div
      style={{
        background: "#140e30",
      }}
    >
      <ComboSequenceBar combo={combo} championSlug={championSlug} />
    </div>
  );
}
