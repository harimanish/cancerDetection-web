import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageUpload from "./pages/ImageUploadPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/imageUpload" element={<ImageUpload />} />
            </Routes>
        </>
    );
}

export default App;
