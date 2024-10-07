import React, { useState, useRef } from 'react';

export default function DigitalJournal() {
  // State to store the answer and toggle the pop-up
  const [answer, setAnswer] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // State to store additional journal data
  const [journalEntry, setJournalEntry] = useState('');
  const [photos, setPhotos] = useState([]);
  const [date] = useState(new Date());

  // Camera related states
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [photo, setPhoto] = useState(null);

  // Toggle pop-up
  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePopupToggle(); // Open the pop-up when answer is submitted
  };

  // Start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraActive(true);
    } catch (error) {
      console.error("Error accessing camera: ", error);
    }
  };

  // Capture photo from the video feed
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL('image/png'));
  };

  return (
    <div className="journal-container bg-opacity-50  bg-black p-6 rounded-lg shadow-lg mb-8">
      {/* Daily Prompt */}
      <h2 className="text-blue-300 bg-opacity-50 text-4xl font-semibold mb-4 rounded-lg shadow-lg mt-4">
        Your<span className="text-white font-bold px-4 py-1 inline-block">Digital Journal</span>
      </h2>
      <p className="text-lg bg-blue-900 rounded-lg text-center mb-4">
        What are you grateful for today?
      </p>

      {/* Answer Form */}
      <form onSubmit={handleSubmit} className="w-full">
        <input 
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          className="text-black border border-black rounded p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>

      {/* Expandable Pop-up for Journal Entry and Photos */}
      {isPopupOpen && (
        <div className="popup bg-white shadow-lg rounded p-4 mt-4">
          <h3 className="text-xl font-bold mb-2">Expand Your Journal Entry</h3>
          
          {/* Journal Text Entry */}
          <textarea 
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            placeholder="Write more about your thoughts here..."
            className="border border-gray-300 rounded p-2 w-full mb-4"
            rows="4"
          />
          
          {/* Date and Time */}
          <p className="text-gray-500 text-sm mb-4">
            Date: {date.toLocaleDateString()} | Time: {date.toLocaleTimeString()}
          </p>

          {/* Camera Section */}
          <div className="flex flex-col mb-4">
            {!isCameraActive ? (
              <button onClick={startCamera} className="bg-blue-500 text-white py-2 px-4 rounded mb-2">
                Open Camera
              </button>
            ) : (
              <div>
                <video ref={videoRef} autoPlay className="border border-gray-300 rounded mb-2" />
                <button onClick={capturePhoto} className="bg-blue-500 text-white py-2 px-4 rounded mb-2">
                  Take Photo
                </button>
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                {photo && (
                  <div>
                    <h3>Captured Photo:</h3>
                    <img src={photo} alt="Captured" className="border border-gray-300 rounded mb-2" />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Photo Upload Option */}
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700">Upload a photo:</label>
            <input 
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setPhotos([...e.target.files])}
              className="mb-2"
            />
          </div>
          {photos.length > 0 && (
            <p className="text-sm text-green-500 mb-4">
              {photos.length} photo(s) selected.
            </p>
          )}

          <button 
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert('Journal saved!')}
          >
            Save Journal Entry
          </button>
        </div>
      )}
    </div>
  );
}
