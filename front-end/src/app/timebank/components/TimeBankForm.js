import { useState } from 'react';

export default function TimeBankForm() {
  const [activity, setActivity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Activity submitted:', activity);
    setActivity('');
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form rounded-lg shadow-lg bg-white bg-opacity-30 backdrop-blur-lg p-6 mx-auto mt-16">
      <h3 className="text-white text-4xl font-bold mb-6 py-2 px-4 rounded-lg"> {/* Background and shadow for emphasis */}
        Add <span className="text-blue-300">Your Activity</span>
      </h3>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="What do you want to do?"
        required
        className="text-blue-900 border border-blue-500 p-2 rounded w-full mb-4"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Find Someone
      </button>
    </form>
  );
}
