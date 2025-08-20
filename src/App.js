import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBmi = () => {
    if (!height || !weight) return;
    const h = height / 100; // convert cm to meters
    const bmiValue = (weight / (h * h)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Normal weight");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  const resetFields = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <div className="buttons">
        <button onClick={calculateBmi}>Calculate BMI</button>
        <button onClick={resetFields} className="reset">Reset</button>
      </div>

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default App;
