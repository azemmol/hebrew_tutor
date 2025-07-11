import React, { useEffect, useState } from 'react';

function ViewDictionary() {
  const [verbs, setVerbs] = useState([]);

  useEffect(() => {
    const fetchVerbs = async () => {
      const res = await fetch('http://localhost:8080/api/view-dictionary');
      const data = await res.json();
    console.log("Fetched verbs:", data); // 👈 See what you're actually getting

      setVerbs(data);
    };
    fetchVerbs();
  }, []);

  return (
    <div className="container-flex">


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
        </div>
  );
}

export default ViewDictionary;
