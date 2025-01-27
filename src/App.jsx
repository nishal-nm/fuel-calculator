import { useState } from "react";

function App() {
  const [fuelCost, setFuelCost] = useState(0);
  const [isTwoWay, setIsTwoWay] = useState(false);
  const [isExtra, setIsExtra] = useState(false);
  const [inputs, setInputs] = useState({
    dist: 0,
    mileage: 0,
    fuel: 106.25,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleExtra(event) {
    setIsExtra(event.target.checked);
  }

  function handleTwoWay(event) {
    setIsTwoWay(event.target.value === "true");
  }

  function handleSubmit(event) {
    event.preventDefault();
    let { dist, mileage, fuel } = inputs;
    isTwoWay && (dist *= 2);
    isExtra && (dist += 10);
    console.log(dist);
    let cost = Math.ceil(((dist / mileage) * fuel) / 10) * 10;
    setFuelCost(cost);
  }

  return (
    <div className="container">
      <h1>Fuel Cost Calculator</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dist">Distance: </label>
          <div className="input-wrapper">
            <input
              type="number"
              placeholder="Distance in km"
              name="dist"
              value={inputs.dist}
              className="input"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="radio-inputs">
          <label className="radio">
            <input
              type="radio"
              name="radio"
              value="false"
              checked={!isTwoWay}
              onChange={handleTwoWay}
            />
            <span className="name">One Way</span>
          </label>

          <label className="radio">
            <input
              type="radio"
              name="radio"
              value="true"
              checked={isTwoWay}
              onChange={handleTwoWay}
            />
            <span className="name">Two Way</span>
          </label>
        </div>
        <br />

        <div>
          <label htmlFor="mileage">Vehicle Mileage: </label>
          <div className="input-wrapper">
            <input
              type="number"
              placeholder="Enter the milage"
              name="mileage"
              value={inputs.mileage}
              className="input"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="fuel">Fuel Price: </label>
          <div className="input-wrapper">
            <input
              type="number"
              placeholder="Price per litre"
              name="fuel"
              value={inputs.fuel}
              className="input"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="checkbox-wrapper-46">
          <input
            type="checkbox"
            id="cbx-46"
            className="inp-cbx"
            name="extra"
            checked={isExtra}
            onChange={handleExtra}
          />
          <label htmlFor="cbx-46" className="cbx">
            <span>
              <svg viewBox="0 0 12 10" height="10px" width="12px">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </svg>
            </span>
            <span>Additional travel at destination?</span>
          </label>
        </div>
        <br />
        <br />

        <button className="button">
          <svg
            viewBox="0 0 16 16"
            className="bi bi-lightning-charge-fill"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
          </svg>
          Estimate Cost
        </button>
      </form>
      <br />
      <label style={{ fontFamily: "monospace" }}>{fuelCost}</label>
    </div>
  );
}

export default App;
