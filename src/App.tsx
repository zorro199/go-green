import { Route, Routes, useLocation } from "react-router-dom";

import { SharedLayout } from "./components";
import { About, Blog, Contact, Home, NotFound, Services } from "./pages";

export function App() {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return isRootPath ? (
    <div id="bg">
      <div id="right-gradient">
        <Routes>
          <Route path="/go-green" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/go-green/about" element={<About />} />
            <Route path="/go-green/blog" element={<Blog />} />
            <Route path="/go-green/services" element={<Services />} />
            <Route path="/go-green/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  ) : (
    <Routes>
      <Route path="/go-green" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/go-green/about" element={<About />} />
        <Route path="/go-green/blog" element={<Blog />} />
        <Route path="/go-green/services" element={<Services />} />
        <Route path="/go-green/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
