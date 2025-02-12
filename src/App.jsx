import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./views/NotFound/NotFound"
import Home from "./views/Home/Home"
import Components from "./views/Components/Components"
import Layout from "./views/Layout/Layout"
import { useState } from "react"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            element={
              <Layout
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
              />
            }
          >
            <Route path="/components" element={<Components toggleSidebar={toggleSidebar} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter >
  )
}

export default App
