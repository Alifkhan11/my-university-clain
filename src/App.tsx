import MainLayout from "./components/layout/MainLayout"
import ProtectRouter from "./components/layout/ProtectRouter"

function App() {
  return (
    <ProtectRouter role={undefined}>
      <MainLayout />
    </ProtectRouter>
  )
}

export default App
