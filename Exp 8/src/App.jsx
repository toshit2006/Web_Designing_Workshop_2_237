import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <section className="counter-panel">
        <p className="eyebrow">Experiment 8</p>
        <h1>Counter Application</h1>
        <p className="summary">State management using the React useState hook.</p>

        <div className="counter-value" aria-live="polite">{count}</div>

        <div className="button-row">
          <button type="button" onClick={() => setCount(count + 1)}>Increment (+)</button>
          <button type="button" onClick={() => setCount(count - 1)}>Decrement (-)</button>
          <button type="button" className="secondary" onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>
    </main>
  );
}

export default App;
