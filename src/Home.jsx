
const Home = () => (
  <div className="min-h-screen bg-gradient-to-r from-[#E0BBE4] to-[#98FF98] p-8">
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold text-center text-[#29AB87] mb-4">
          Welcome to Travel Budget Tracker
        </h1>
        <p className="text-center text-lg text-gray-700">
          Plan your trips and manage your expenses effortlessly with our intuitive dashboard. Explore, organize, and track your adventures with ease.
        </p>
      </div>

      {/* Section Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#29AB87] mb-4">Your Trips</h2>
          <p className="text-gray-700 mb-4">
            View and manage your upcoming trips. Stay organized with detailed itineraries, travel notes, and more.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-[#29AB87] mb-2">Upcoming Trips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Trip to Paris - July 15, 2024</li>
              <li>Weekend Getaway to New York - August 5, 2024</li>
              <li>Adventure in Tokyo - September 20, 2024</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#29AB87] mb-4">Expenses</h2>
          <p className="text-gray-700 mb-4">
            Track your expenses for each trip and stay within budget. Monitor your spending to ensure a hassle-free travel experience.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-[#29AB87] mb-2">Recent Expenses</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Flight to Paris - $650</li>
              <li>Hotel Booking - $500</li>
              <li>Dinner - $80</li>
              <li>Guided Tour - $120</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#29AB87] mb-4">Travel Tips</h2>
          <p className="text-gray-700 mb-4">
            Here are some tips to make your travels more enjoyable and stress-free:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Pack light and only bring essentials.</li>
            <li>Research local customs and regulations.</li>
            <li>Keep a copy of important documents.</li>
            <li>Always have a backup plan for unexpected events.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#29AB87] mb-4">Budget Planner</h2>
          <p className="text-gray-700 mb-4">
            Use our budget planner to estimate your expenses and save accordingly. Make sure you are financially prepared for your trips.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-[#29AB87] mb-2">Budget Overview</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Accommodation - Estimated $500</li>
              <li>Food & Dining - Estimated $200</li>
              <li>Activities - Estimated $150</li>
              <li>Miscellaneous - Estimated $100</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
