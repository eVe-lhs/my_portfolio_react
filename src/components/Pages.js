import React from "react";

export default function Pages({ small, header, children }) {
  return (
    <div className="pt-40 mt-5 mx-6">
      <div className="mx-2  p-3 text-gray-700 dark:text-gray-200 mb-5 tracking-widest">
        <span className="text-sm font-extralight   text-gray-800 dark:text-white font-body mt-36">
          {small}
        </span>
        <h1 className="text-xl font-light text-gray-800 dark:text-white font-subhead mt-5">
          {header}
        </h1>
      </div>
      {children}
    </div>
  );
}
