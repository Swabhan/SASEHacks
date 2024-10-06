import Link from 'next/link';

export default function ActivityList() {
  const userId = 'ivory'; // Replace with actual user ID logic

  // Array of activities with corresponding names
  const activities = [
    { name: 'Calculus 3 Grind Session' },
    { name: 'Dog Walking' },
    { name: 'Grocery Shopping' },
  ];

  return (
    <div className="activity-list bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg mb-8"> {/* Adjusted background for transparency */}
      <h3 className="text-blue-300 text-4xl font-semibold mb-4">Available Activities</h3>
      <ul className="list-disc pl-5">
        {activities.map((activity) => (
          <li key={activity.name} className="text-blue-300 mb-2"> {/* Adjusted text color */}
            <Link href={`/timebank/${activity.name.replace(/\s+/g, '-').toLowerCase()}/${userId}`}>
              <span className="hover:underline">{activity.name}</span> {/* Added hover effect */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
