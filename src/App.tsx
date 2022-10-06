import { useCallback } from "react";
import { CatFact } from "./components/CatFact";
import { RecentFacts } from "./components/RecentFacts";
import { useCatFacts } from "./hooks/useCatFacts";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./styles.css";

export default function App() {
  const [open, setOpen] = useLocalStorage("catfacts:open-history", false);
  const { busy, fact, handleNext, recent } = useCatFacts();

  const handleToggle = useCallback(
    (newOpen) => {
      setOpen(newOpen);
    },
    [setOpen]
  );

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <CatFact busy={busy} fact={fact} onClickNext={handleNext} />
      <RecentFacts onToggle={handleToggle} open={open} facts={recent} />
    </div>
  );
}
