import React from 'react';
import { Routes, Route } from 'react-router-dom';

const verbs = ["להשתפר","לעדכן","להצטרף","להתמודד","להעדיף"]
const tenses = ["עבר", "הווה", "עתיד"]
const subjects = [
  "אני", "אתה", "את", "הוא", "היא", "אנחנו", "אתם", "אתן", "הם", "הן"
];
function getRandomVerbCombo() {
    verb_idx = getRandomInteger(0,verbs.length - 1);
    tense_idx = getRandomInteger(0,2);
    subject_idx = getRandomInteger(0,subject.length - 1);

    verb = verbs[verb_idx];
    tense = tenses[tense_idx];
    subject = subjects[subject_idx];

    return { verb, tense, subject };
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}