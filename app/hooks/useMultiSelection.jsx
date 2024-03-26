"use client";
import { useState } from "react";

export const useMultiSelection = (initialState = []) => {
  const [selectedValues, setSelectedWidgets] = useState(initialState);

  const handleSelection = (value) => {
    setSelectedWidgets((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return { selectedValues, handleSelection };
};
