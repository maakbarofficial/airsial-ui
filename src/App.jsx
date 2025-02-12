import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./views/NotFound/NotFound"
import Home from "./views/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About AirSial UI</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter >
  )
}

export default App
