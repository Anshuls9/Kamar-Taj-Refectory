import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function StudentDashboard() {
    const [meals,setMeals] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5001/api/meals")
        .then((response) => response.json())
        .then((data) => {
            setMeals(data.meals)
        });
    },[]); //only use when the component renders first time ,not after every render
    return (
        <div className="min-h-screen bg-green-50 text-green-950">
        <aside className="border-b border-green-900/10 bg-white px-6 py-5 lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-b-0 lg:border-r">
            <Link
            to="/about"
            className="inline-block font-['Dancing_Script'] text-3xl font-bold tracking-tight text-green-950 transition hover:text-green-700"
            >
                Kamar-Taj
            </Link>

            <p className="mt-1 text-sm text-gray-500">
            Student Portal
            </p>

            <nav className="mt-8 flex gap-3 lg:flex-col">
            <button className="rounded-xl bg-green-100 px-4 py-3 text-left font-semibold text-green-900">
                Dashboard
            </button>

            <button className="rounded-xl px-4 py-3 text-left text-gray-600 transition hover:bg-green-50">
                My Bookings
            </button>

            <button className="rounded-xl px-4 py-3 text-left text-gray-600 transition hover:bg-green-50">
                Meal Pass
            </button>
            </nav>
        </aside>


        <main className="px-6 py-8 lg:ml-64 lg:px-10">
            <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                Student Portal
                </p>

                <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Good evening!
                </h1>

                <p className="mt-2 text-gray-600">
                What would you like to eat today?
                </p>
            </div>

            <div className="flex h-12 w-12 hover:scale-105 hover:bg-blue-600 duration-500 cursor-pointer items-center justify-center rounded-full bg-green-200 text-lg font-bold text-green-900">
                S
            </div>
            </header>

            <div>
                <div>
                    <h2 className="text-2xl font-bold mt-10">Today's Menu</h2>
                    <p className="mt-2 text-gray-600">
                        Choose your meal and reserve your seat.
                    </p>
                </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {meals.map((meal) => (
                <div
                    key={meal.id}
                    className="flex h-full flex-col rounded-2xl hover:bg-amber-100 border border-green-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                    <h3 className="text-xl font-bold text-green-950">
                    {meal.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                    {meal.time}
                    </p>

                    <div className="mt-5">
                    <p className="text-sm font-semibold text-gray-500">
                        TODAY'S MENU
                    </p>
                    <img
                        src={meal.image}
                        alt={`${meal.name} meal`}
                        className="h-48 w-full rounded-xl object-cover mb-2"
                    />
                    <h3 className="text-xl font-medium text-green-950">
                        {meal.menu}
                    </h3>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Price per meal</p>
                        <p className="text-2xl font-extrabold text-green-900">
                        ₹{meal.price}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-sm text-gray-500">Availability</p>
                        <p className="font-semibold text-green-700">
                        {meal.seatsLeft} seats left
                        </p>
                    </div>
                    </div>

                    <button
                    onClick={() => {
                        // We'll connect this to checkout next.
                        console.log("Selected meal:", meal);
                    }}
                    className="mt-auto w-full cursor-pointer hover:scale-105 rounded-xl bg-green-800 px-4 py-3 font-semibold text-white transition hover:bg-green-900"
                    >
                        Reserve Meal →
                    </button>
                </div>
                ))}
            </div>
        </main>
        </div>
  );
}

export default StudentDashboard;
