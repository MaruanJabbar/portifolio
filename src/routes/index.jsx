import { Route, Routes } from "react-router-dom"
import { HomePage, Projects, NotFound, AboutPage } from "../pages"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />    
        </Routes>
    )
}