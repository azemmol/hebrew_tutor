import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const verbs = ["להשתפר","לעדכן","להצטרף","להתמודד","להעדיף"
  ,"לוּכַל","לקיים","לחשוף","להשיג","לְהִיפָּצֵעַ",
  "לאשר","לארגן","להשפיע","לפרסם","להירגע","לוותר","לְבַטֵּל"];


const tenses = ["עבר", "הווה", "עתיד"];
const subjects = [
  "אני", "אתה", "את", "הוא", "היא", "אנחנו", "אתם", "אתן", "הם", "הן",
  "שם פועל","שם פועל","שם פועל"
];
function getRandomVerbCombo() {
  const [real_verb,setVerb] = useState("");

  const api_data = {
    hebrew_verb:
    english_verb
  }

  const res = await fetch('http://localhost:8080/api/get-verb',){
    method : 'GET',
    headers: {
            'Content-Type': 'application/json'
            },
    body: JSON.stringify(api_data)

  }


  const verb_idx = getRandomInteger(0, verbs.length - 1);
  const tense_idx = getRandomInteger(0, tenses.length - 1);
  const subject_idx = getRandomInteger(0, subjects.length - 1);

  const verb = verbs[verb_idx];
  const tense = tenses[tense_idx];
  const subject = subjects[subject_idx];
  
  return { verb, tense, subject };
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default getRandomVerbCombo;


