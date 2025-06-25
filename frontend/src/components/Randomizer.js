import React from 'react';
import { Routes, Route } from 'react-router-dom';

const verbs = ["להשתפר","לעדכן","להצטרף","להתמודד","להעדיף","לוּכַל"];
const tenses = ["עבר", "הווה", "עתיד"];
const subjects = [
  "אני", "אתה", "את", "הוא", "היא", "אנחנו", "אתם", "אתן", "הם", "הן"
];
function getRandomVerbCombo() {
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