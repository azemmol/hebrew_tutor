import React, { useEffect, useState } from 'react';

function ViewDictionary() {
  const [verbs, setVerbs] = useState([]);
  const [dict, showDict] = useState(false)

  useEffect(() => {
    if (!dict) return;
    const fetchVerbs = async () => {
      const res = await fetch('http://localhost:8080/api/view-dictionary');
      const data = await res.json();
    console.log("Fetched verbs:", data); // 👈 See what you're actually getting

      setVerbs(data);
    };
    fetchVerbs();
  }, [dict]); // only runs when value of dict changes


  return (
    <div className="container-flex">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => showDict(true)}
      >
        View Dictionary
      </button>

      {dict && (
        <div className="verb_dict">
          <h2 className="text-2xl font-bold mb-4">Verb Dictionary</h2>
          <ul className="space-y-2">
            {verbs.map((verb) => (
              <li key={verb.id} className="border p-2 rounded">
                <strong>{verb.Hebrew}</strong> – {verb.English}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ViewDictionary;
