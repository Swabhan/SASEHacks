import { useState } from 'react';

export default function TimeBankForm() {
  const [activity, setActivity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle activity submission logic here
    console.log('Activity submitted:', activity);
    setActivity('');
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form bg-purple-300 p-3 rounded-lg shadow-lg">
      <h3 className="text-blue-800 text-2xl font-semibold mb-4">Add Your Activity</h3>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="What do you want to do?"
        required
        className=" text-blue-900 border border-blue-500 p-2 rounded w-full mb-4" // Styling for input
      />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Find Someone
      </button>
    </form>
  );
}
