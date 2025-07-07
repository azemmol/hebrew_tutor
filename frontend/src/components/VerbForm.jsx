import React, { useState } from 'react';

function AddVerb() {
  const [verb, setVerb] = useState({ hebrew: "", english: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVerb((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save the verb — send to backend or local state
    console.log("Submitted verb:", verb);
    const res = await fetch('http://localhost:8080/api/add-verb', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(verb)
    });
    console.log(verb)

    // Reset form
    setVerb({ hebrew: "", english: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
        label='hebrew'
          type="text"
          name="english"
          value={verb.english}
          placeholder='english verb'
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="text"
          name="hebrew"
          value={verb.hebrew}
          placeholder='hebrew verb'
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={!verb.english || !verb.hebrew} 
        >
        Add Verb
      </button>
    </form>
  );
}

export default AddVerb;
