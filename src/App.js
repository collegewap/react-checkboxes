import { useState } from "react";

const allToppings = [
  { name: "Golden Corn", checked: false },
  { name: "Paneer", checked: false },
  { name: "Tomato", checked: false },
  { name: "Mushroom", checked: false },
  { name: "Onion", checked: false },
  { name: "Black Olives", checked: false },
];

const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  console.log({ isChecked });
  return (
    <div>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  );
};
function App() {
  const [toppings, setToppings] = useState(allToppings);
  const onHandleChange = (index) => {
    console.log({ index });
    setToppings(
      toppings.map((topping, currentIndex) => {
        return currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping;
      })
    );
  };

  const selectAll = () => {
    setToppings(
      toppings.map((topping, currentIndex) => {
        return { ...topping, checked: true };
      })
    );
  };

  const unSelectAll = () => {
    setToppings(
      toppings.map((topping, currentIndex) => {
        return { ...topping, checked: false };
      })
    );
  };

  return (
    <div>
      <p>
        <button onClick={selectAll}>Select All</button>
        <button onClick={unSelectAll}>Unselect All</button>
      </p>
      {toppings.map((topping, index) => {
        console.log({ index, checked: topping.checked });
        return (
          <Checkbox
            isChecked={topping.checked}
            label={topping.name}
            checkHandler={() => onHandleChange(index)}
            index={index}
          />
        );
      })}
      <pre>{JSON.stringify(toppings, null, 2)}</pre>
    </div>
  );
}

export default App;
