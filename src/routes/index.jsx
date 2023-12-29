import { Route, Routes } from "react-router-dom"
import { HomePage, Projects } from "../pages"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects/>} />
        </Routes>
    )
}