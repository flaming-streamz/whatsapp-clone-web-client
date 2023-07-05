import React from "react";

function Input({ name, state, setState, label = false }) {
  return (
    <div className="flex flex-col gap-1 ">
      {label && (
        <label htmlFor={name} className="text-teal-light text-lg px-1">
          {name}
        </label>
      )}
      <div className="">
        <input type="text" name={name} value={state} onChange={(e) => setState(e.target.value)} />
      </div>
    </div>
  );
}

export default Input;
