export function changeItem (state, index, value) {
  let currentState = state.items;
  currentState[index] = value;

  return {
    items: currentState
  };
}

export function addItem (state) {
  return {
    items: state.items.concat([''])
  };
}

export function removeItem (state, index) {
  const remainingItems = state.items.filter((choice, i) => i !== index);

  return {
    items: remainingItems
  };
}
