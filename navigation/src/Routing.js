import { Navigate, Route, Routes } from "react-router-dom";
import {Test} from "./components/topbar/Test";
import {TestII} from "./components/topbarII/TestII";
import {Dashboard} from "./components/topbar/Dashboard";
import {DashboardII} from "./components/topbarII/DashboardII";

export default function Routing() {
  
  return (
    <Routes>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/test" element={<Test />} />

      <Route path="/dashboardII" element={<DashboardII />} />
      <Route path="/testII" element={<TestII />} />

      <Route path="/" element={<Navigate to="/dashboard" />} />

    </Routes>
  );
}