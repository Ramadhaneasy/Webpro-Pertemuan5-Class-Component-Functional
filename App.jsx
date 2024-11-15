// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

// export default function App() {
//     return (
//         <div className="text-2xl flex justify-center bg-blue-500 min-h-screen items-center">
//             <div>
//                 <button
//                    className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//                     type="submit"
//                 >
//                     Belanja Sekarang
//                 </button>
//                 <button
//                     className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//                     type="submit"
//                 >
//                     Belanja Sekarang
//                 </button>
//                 <button
//                     className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//                     type="submit"
//                 >
//                     Belanja Sekarang
//                 </button>
//             </div>
//         </div>
//     );
// }

// import React from "react"; 

// // Kelas komponen
// class Button extends React.Component {
//     render() {
//         return (
//             <button
//                 className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//                 type="submit"
//             >
//                 Belanja Sekarang
//             </button>
//         );
//     }
// }

// // Fungsi komponen
// function ButtonBlue() {
//     return (
//         <button
//             className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
//             type="submit"
//         >
//             Belanja Sekarang
//         </button>
//     );
// }

// export default function App() {
//     return (
//         <div className="text-2xl flex justify-center bg-blue-500 min-h-screen items-center">
//             <div>
//                 <Button />
//                 <ButtonBlue />
//                 <Button />
//             </div>
//         </div>
//     );
// }

import React from "react"; 

// Komponen tombol berwarna
function ButtonBlue() {
    return (
        <button
            className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
            type="submit"
        >
            Belanja
        </button>
    );
}

function ButtonYellow() {
    return (
        <button
            className="h-10 px-6 font-semibold rounded-md bg-yellow-500 text-white"
            type="submit"
        >
            Belanja
        </button>
    );
}

function ButtonBlack() {
    return (
        <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white hover:bg-blue-500"
      type="submit"
        >
            Belanja
        </button>
    );
}

function ButtonRed() {
    return (
        <button
            className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
            type="submit"
        >
            Belanja
        </button>
    );
}

function ButtonGreen() {
    return (
        <button
            className="h-10 px-6 font-semibold rounded-md bg-green-500 text-white"
            type="submit"
        >
            Belanja
        </button>
    );
}

export default function App() {
    return (
        <div className="text-2xl flex justify-center bg-gray-100 min-h-screen items-center">
            <div className="flex gap-4">
                <ButtonBlue />
                <ButtonYellow />
                <ButtonBlack />
                <ButtonRed />
                <ButtonGreen />
            </div>
        </div>
    );
}
