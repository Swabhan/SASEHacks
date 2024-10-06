"use client";
import TimeBankHeader from './components/TimeBankHeader';
import ActivityList from './components/ActivityList';
import TimeBankForm from './components/TimeBankForm';
import './timebank.css';

export default function TimeBank() {
  return (
    <div 
      className="timebank-container" 
      style={{
        backgroundImage: "url('/city.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center-aligns content horizontally
        color: 'white', // Sets default text color
      }}
    >

      {/* Title Section */}
      <div className="title-section bg-blue-900 text-white py-6 w-full flex justify-center ">
        <h2 className="title text-4xl md:text-5xl font-bold">Welcome to the <span className ="text-yellow-500">Time Bank</span> </h2>
      </div>

      {/* Form Section */}
      <div className="form-section p-8 rounded-lg shadow-lg w-full max-w-xl mt-6">
        <TimeBankForm />
      </div>

      {/* Activity List Section */}
      <div className="activity-list-section p-8 rounded-lg shadow-lg w-full max-w-xl mt-2">
        <ActivityList />
      </div>
    </div>
  );
}
