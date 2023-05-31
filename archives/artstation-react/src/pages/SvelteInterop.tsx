import SvelteWrapper from "../components/SvelteWrapper";
import Button from "../components/Button.svelte";
import { useState } from "react";

interface SvelteButtonProps {
  count: number;
  onClick: () => void;
}

function SvelteInterop() {
  const [count, setCount] = useState(0);
  const SvelteButton = SvelteWrapper<SvelteButtonProps>(Button);

  return (
    <main>
      <h1>Hi this is Svelte in React: Counter {count}</h1>
      <SvelteButton
        count={count}
        onClick={() => setCount((count) => ++count)}
      />
    </main>
  );
}

export default SvelteInterop;
