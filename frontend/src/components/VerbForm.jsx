import React, { useState } from 'react';

function AddVerb() {
  const [verb, setVerb] = useState({ hebrew: "", english: "" });
  const [showConfirm, setShowConfirm] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setVerb((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const confirmSubmit = async () => {
  const res = await fetch('http://localhost:8080/api/add-verb', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(verb)
  });

  console.log("Submitted verb:", verb);
  setVerb({ hebrew: "", english: "" });
  setShowConfirm(false); // Close modal
};

const handleSubmit = (e) => {
  e.preventDefault();
  setShowConfirm(true); // Just show the modal
};

  return (
    <form onSubmit={handleSubmit}>
        <div className="verb-form">
            <h3>Add a New Verb</h3>
            <label htmlFor="hebrew">Hebrew Verb</label>
            <input
                type="text"
                name="hebrew"
                value={verb.hebrew}
                placeholder="לכתוב"
                onChange={handleChange}
            />

        <label htmlFor="english">English Verb</label>
        <input
            type="text"
            name="english"
            value={verb.english}
            placeholder="to write"
            onChange={handleChange}
        />

  <button type="submit"
    disabled={!verb.english || !verb.hebrew}>
    Add Verb
  </button>


{showConfirm && (
  <div className="modal-overlay">
    <div className="modal">
      <p>Are you sure you want to add this verb?</p>
      <p><strong>{verb.hebrew}</strong> = {verb.english}</p>

      <div className="modal-buttons">
        <button className="yes-button" onClick={confirmSubmit}>Yes, Add It</button>
        <button className="cancel-button" onClick={() => setShowConfirm(false)}>Cancel</button>
      </div>
    </div>
  </div>
)}

</div>

    



  </form> 
  

  

        

   
  );
}

export default AddVerb;
