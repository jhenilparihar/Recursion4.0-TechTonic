import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="profile" element={<Main />} />
        {/* <Route path="upload" element={<UploadImage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
