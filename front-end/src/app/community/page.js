import React from 'react';
import LocationComponent from './LocationComponent.js'; // Adjust the path as necessary

export default function CommunityPage() {
  return (
    <div
      className="community-container flex flex-col justify-center min-h-screen p-10 mx-auto rounded-lg shadow-lg bg-white bg-opacity-30 backdrop-blur-lg"
      style={{ backgroundImage: "url('/city.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="bg-blue-300 text-blue-900 text-4xl font-semibold mb-4 text-center rounded-lg">
        Connect with Others
      </h2>

      <section className="community-section mb-6 bg-white bg-opacity-50 backdrop-blur-md p-4 rounded-lg">
        <h3 className="text-purple-700 text-3xl font-semibold mb-3">Communities</h3>
        <p className="text-blue-900 mb-2">
          Add people to different communities (work friends, school friends, everyone…)
        </p>
        <p className="text-blue-900 mb-2">
          Hang out with your community.
        </p>
        <LocationComponent />
      </section>

      <section className="activity-section mb-6 bg-white bg-opacity-50 backdrop-blur-md p-4 rounded-lg">
        <h3 className="text-purple-700 text-3xl font-semibold mb-3">Connect and Hang Out</h3>
        <p className="text-blue-900 mb-2">
          When you are free, our app will help connect you with others who are also free while recommending different activities everyone might be interested in.
        </p>
      </section>

      <section className="recommendation-section bg-white bg-opacity-50 backdrop-blur-md p-4 rounded-lg">
        <h3 className="text-purple-700 text-3xl font-semibold mb-3">Recommend Activities</h3>
        <p className="text-blue-900 mb-2">
          With a matrix factorization algorithm, our app provides recommendations on activities and utilizes Yelp/Google APIs to suggest location-based activities.
        </p>
      </section>
    </div>
  );
}
