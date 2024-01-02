"use client"
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function CountrySelector() {
    const [selected, setSelected] = useState("");
  return (
    <ReactFlagsSelect
    selected={selected}
    onSelect={(code) => setSelected(code)}
    placeholder="Select Country"
    searchable
    searchPlaceholder="Search countries"
    className="select-flags"
  />
  )
}
