import { Routes, Route } from "react-router-dom";

import PasswordGenerator from "./pages/password";
import Erro404 from "./pages/mistakes/Erro404";

export default function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<PasswordGenerator />} />
        <Route path="/*" element={<Erro404 />} />
      </Route>
    </Routes>
  );
}
