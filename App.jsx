import React from "react";

// Komponen tombol berwarna menggunakan Props dan Children
// Ini Functional Component
function Button({ bgColor, children }) {
    return (
        <button
            className={`h-10 px-6 font-semibold rounded-md ${bgColor} text-white`}
            type="submit"
        >
            {children}
        </button>
    );
}

// Tambah Class Component
class ButtonList extends React.Component {
    render() {
        return (
            <div className="flex gap-4">
                {/* Menggunakan Props dan Children */}
                <Button bgColor="bg-blue-500">Belanja</Button> {/* Props dan Children */}
                <Button bgColor="bg-yellow-500">Belanja</Button> {/* Props dan Children */}
                <Button bgColor="bg-black">Belanja</Button> {/* Props dan Children */}
                <Button bgColor="bg-red-500">Belanja</Button> {/* Props dan Children */}
                <Button bgColor="bg-green-500">Belanja</Button> {/* Props dan Children */}
            </div>
        );
    }
}

// Ini Functional Component
export default function App() {
    return (
        <div className="text-2xl flex justify-center bg-gray-100 min-h-screen items-center">
            {/* Menggunakan Class Component */}
            <ButtonList /> {/* Class Component */}
        </div>
    );
}
