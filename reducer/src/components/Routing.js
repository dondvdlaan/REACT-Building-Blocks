import { Navigate, Route, Routes } from "react-router-dom";
import ReducerI from "./ReducerI";
import ReducerII from "./ReducerII";
import ReducerIII from "./ReducerIII";
import ReducerIV from "./ReducerIV";

export default function Routing() {
  
  return (
    <Routes>

      <Route path="/reducerI" element={<ReducerI />} />
      <Route path="/reducerII" element={<ReducerII />} />
      <Route path="/reducerIII" element={<ReducerIII />} />
      <Route path="/reducerIV" element={<ReducerIV />} />

      <Route path="/" element={<Navigate to="/reducerI" />} />

    </Routes>
  );
}