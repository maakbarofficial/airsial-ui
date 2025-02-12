import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./views/NotFound/NotFound"

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<h1>AirSial UI</h1>} />
          <Route path="/about" element={<h1>About AirSial UI</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter >
  )
}

export default App
