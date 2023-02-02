// Internal hypothetical mechanism of act()

const act = (callback) => {
  // 1. Calls the callback, which causes the following:
  //     - Any set states are added to the states work queue
  //     - Any effects are added to the effects work queue
  callback();

  // 2. Execute all set states from the states work queue
  updateStates();

  // 3. Re-render components
  reRender();

  // 4. Execute all effects from the effects work queue
  callEffects();
};

function updateStates() {}
function reRender() {}
function callEffects() {}

export { act };
