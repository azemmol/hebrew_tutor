import { useState } from "react";

function AddVerb() {
  const [verb, setVerb] = useState({ hebrew: "", english: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVerb((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the verb — send to backend or local state
    console.log("Submitted verb:", verb);

    // Reset form
    setVerb({ hebrew: "", english: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded max-w-sm">
      <div>
        <input
          type="text"
          name="english"
          value={verb.english}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="text"
          name="hebrew"
          value={verb.hebrew}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
      >
        Add Verb
      </button>
    </form>
  );
}

export default AddVerb;
