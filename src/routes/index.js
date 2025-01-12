import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import AppLayout from "../components/Layout/AppLayout"

const configRoute= createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<AppLayout />}>
          

      </Route>
    )

)
export default configRoute