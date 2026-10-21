import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    return (
        <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-white via-emerald-100 to-white px-6 py-16">
        
        
            <div className="mx-auto max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                Kamar-Taj Refectory
                </p>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-green-950 sm:text-5xl">
                Welcome back.
                </h1>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                Choose your role to enter the smart mess management portal.
                </p>
                
            </div>


        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <button
                type="button"
                onClick={() => navigate("/login/student")}
                className="rounded-2xl hover:bg-purple-100 cursor-pointer border border-green-900/10 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
                <div className="text-3xl">🎓</div>
                <h2 className="mt-5 text-xl hover:text-blue-900 font-bold text-green-950">
                Student
                </h2>
                <p className="mt-2 leading-6 text-gray-600">
                Reserve meals and access your QR meal<br/> pass.
                </p>
                <span className="mt-5 inline-block hover:transition-transform duration-200 hover:scale-110 font-semibold text-green-800">
                Continue as Student →
                </span>
            </button>

            <button
                type="button"
                onClick={() => navigate("/login/staff")}
                className="rounded-2xl cursor-pointer hover:bg-purple-100 border border-green-900/10 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
                <div className="text-3xl">🍽️</div>
                <h2 className="mt-5 text-xl hover:text-blue-900 font-bold text-green-950">
                Mess Staff
                </h2>
                <p className="mt-2 leading-6 text-gray-600">
                Manage menus, meal capacity, and QR verification.
                </p>
                <span className="mt-5 inline-block hover:transition-transform duration-200 hover:scale-110 font-semibold text-green-800">
                Continue as Staff →
                </span>
            </button>

            <button
                type="button"
                onClick={() => navigate("/login/admin")}
                className="rounded-2xl cursor-pointer border border-green-900/10 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:bg-purple-100"
            >
                <div className="text-3xl">🛡️</div>
                <h2 className="mt-5 text-xl hover:text-blue-900 font-bold text-green-950">
                Admin
                </h2>
                <p className="mt-2 leading-6 text-gray-600">
                View bookings, revenue, and food-waste analytics.
                </p>
                <span className="mt-5 inline-block hover:transition-transform duration-200 hover:scale-110 font-semibold text-green-800">
                Continue as Admin →
                </span>
            </button>
        </div>

        </div>
    )
}
export default Login;