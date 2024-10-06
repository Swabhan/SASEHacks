"use client";
import TimeBankHeader from './components/TimeBankHeader';
import ActivityList from './components/ActivityList';
import TimeBankForm from './components/TimeBankForm';
import DigitalJournal from './components/DigitalJournal';
import './timebank.css';

export default function TimeBank() {
  return (
    <div className="timebank-container">
      
      {/* Header Section */}
      <header className="title-section">
      <h2 className="text-3xl text-black  md:text-5xl bg-opacity-30 backdrop-blur-lg text-black font-bold leading-tight">
        Welcome to<span className=" text-blue-900 font-bold px-3 py-1 inline-block">
          Time Bank
        </span>
      </h2>
      </header>

      {/* Form Section */}
      <main className="form-section">
        <TimeBankForm />
      </main>

      {/* Activity List Section */}
      <section className="activity-list-section">
        <ActivityList />
      </section>

       {/* Digital Journal Section */}
       <section className="journal-section">
        <DigitalJournal />
      </section>
    </div>
  );
}
