import Navbar from "../components/Navbar";

function Login() {
    return (
        <div className="min-h-screen bg-green-50 px-6 py-16">
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
        </div>
    )
}
export default Login;