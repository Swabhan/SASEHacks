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
    <div className="activity-list bg-purple-300 p-3 rounded-lg shadow-lg">
      <h3 className="text-blue-800 text-2xl font-semibold mb-4">Available Activities</h3>
      <ul className="list-disc pl-5">
        {activities.map((activity) => (
          <li key={activity.name} className="text-blue-900 mb-2">
            <Link href={`/timebank/${activity.name.replace(/\s+/g, '-').toLowerCase()}/${userId}`}>
              {activity.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
