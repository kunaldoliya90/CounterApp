const countValue = document.querySelector("#counter");

const increment = () => {
  // Get value from UI
  let value = parseInt(countValue.innerText);
  // update the value
  value = value + 1;
  // set value again
  countValue.innerText = value;
};

const decrement = () => {
  // Get value from UI
  let value = parseInt(countValue.innerText);
  // update the value
  value = value - 1;
  // set value again
  countValue.innerText = value;
};
