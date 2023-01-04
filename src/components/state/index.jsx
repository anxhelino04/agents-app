import React from "react";
import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  openModal: false,
});
export { useGlobalState, setGlobalState };
