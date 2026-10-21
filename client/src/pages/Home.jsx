import Navbar from "../components/Navbar";

function Home() {
    return(
        <div className="min-h-screen bg-green-50">
        <Navbar />

        <main className="relative mx-auto max-w-7xl px-6 py-12 lg:py-12">
            <img
            src="/college-outline.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-[100%] w-[100%] object-cover object-center opacity-[0.12]"
            />
            <div className="max-w-3xl">
            <p className="mb-4 font-semibold uppercase tracking-widest text-green-700">
                Smart Mess Management
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-green-950 sm:text-6xl">
                Good food.
                <br />
                Better campus living.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Discover today's mess menu, reserve your meals, and enjoy a
                smarter, simpler dining experience on campus.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <a
                href="/menu"
                className="rounded-xl bg-green-900 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-800"
                >
                Explore Today's Menu →
                </a>

                <a
                href="#how-it-works"
                className="rounded-xl border border-green-900/20 bg-white px-6 py-3 font-semibold text-green-950 transition hover:bg-green-100"
                >
                How It Works
                </a>
            </div>
            </div>

            <div
            id="how-it-works"
            className="mt-12 grid gap-5 sm:grid-cols-3"
            >
            <div className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-green-950">
                Today's Menu
                </h2>
                <p className="mt-2 leading-6 text-gray-600">
                Check what's cooking for breakfast, lunch, and dinner.
                </p>
            </div>

            <div className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-green-950">
                Easy Reservations
                </h2>
                <p className="mt-2 leading-6 text-gray-600">
                Reserve your meal in advance and avoid unnecessary food preparation.
                </p>
            </div>

            <div className="rounded-2xl border border-green-900/10 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-green-950">
                QR Meal Pass
                </h2>
                <p className="mt-2 leading-6 text-gray-600">
                Use a QR pass to make meal collection easier and more organized.
                </p>
            </div>
            </div>
        </main>
        </div>
    )
}

export default Home;