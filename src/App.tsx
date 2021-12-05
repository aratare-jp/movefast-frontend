import React, { useState } from "react";
import "./App.css";

/**
 * Given an array of colour strings, shuffle them and return the new ordered array. Note that this function does not
 * mutate the given array.
 *
 * This function implements the Fisher-Yates shuffling algorithm to randomise with equal probability.
 */
const randomise = (colours: string[]): string[] => {
  const ans = [...colours];
  const N = ans.length;
  for (let i = 0; i < N; ++i) {
    const swapIdx = Math.floor(Math.random() * (N - 1 - i + 1) + i);
    const tmp = ans[i];
    ans[i] = ans[swapIdx];
    ans[swapIdx] = tmp;
  }
  return ans;
};

const App = () => {
  // Take a collection of colours strings and set this component's state to it so we can shuffle it later on.
  const [colours, setColours] = useState([
    "#2c88d9",
    "#d3455b",
    "#897a5f",
    "#ac6363",
    "#730fc3",
    "#1aae9f",
    "#207868",
    "#6558f5",
    "#4b5c6b",
  ]);

  // Simple on click handler which randomise the colours and set it back to the state for React to rerender.
  const onClickHandler = () => {
    setColours(randomise(colours));
  };

  // Go through the colours and map them to the appropriate child div. Note that this means the number of components
  // is dependent on the number of colours, which may not be what we want. For this exercise I reckon it's good
  // enough.
  const children = colours.map((c, i) => {
    const className = `grid-item item-${i + 1}`;
    const style = { backgroundColor: c };
    return (
      <div key={i} className={className} style={style} onClick={onClickHandler}>
        {i + 1}
      </div>
    );
  });

  return (
    <div className="App">
      <div className="grid-container-base grid-container">{children}</div>
    </div>
  );
};

export default App;
