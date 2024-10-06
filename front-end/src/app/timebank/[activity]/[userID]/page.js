// src/app/timebank/[activity]/[userId]/page.js

'use client';
import { useParams } from 'next/navigation';

export default function ActivityPage() {
  const { activity, userId } = useParams();

  return (
    <div 
      className="activity-page bg-yellow-300 p-6 min-h-screen flex flex-col items-center" 
      style={{ 
        backgroundImage: "url('/city.jpg')", // You can change this to your desired background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="content-container bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-blue-800 text-4xl font-bold mb-4">
          Activity: Calulus 3 Grind Session
        </h1>
        <h2 className="text-blue-700 text-2xl mb-2">User ID: Ivory Le</h2>
        <p className="text-blue-600">
          <span>Details: I need help with my Calculus 3 homework. I'm looking for someone who can help me understand the concepts and solve problems together.</span>
          <br />
          <span>Location: FML 6th Floor, Quiet Side</span>
          <br />
          <span>Time: Till 5pm Today</span>
        </p>
      </div>
    </div>
  );
}
