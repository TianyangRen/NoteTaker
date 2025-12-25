import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import toast from "react-hot-toast"

const App = () => {
  return (
    <div>
      <button onClick={()=> toast.success("Success!!")} className="text-red-500 p-4">
        Show Toast
      </button>
      <Routes>
        <Route path="/"         element={<HomePage/>}>       </Route>
        <Route path="/create"   element={<CreatePage/>}>     </Route>
        <Route path="/note/:id" element={<NoteDetailPage/>}> </Route>
      </Routes>
    </div>
  )
}

export default App