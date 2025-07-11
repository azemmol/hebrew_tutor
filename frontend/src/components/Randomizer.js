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


export async function getRandomVerbCombo() {
  const res = await fetch('http://localhost:8080/api/get-verb', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const realVerb = await res.json();

  const hebrew = realVerb.Hebrew;
  const english = realVerb.English;

  const tense_idx = getRandomInteger(0, tenses.length - 1);
  const subject_idx = getRandomInteger(0, subjects.length - 1);

  const tense = tenses[tense_idx];
  const subject = subjects[subject_idx];

  return { verb: hebrew, englishVerb: english, tense, subject };
}


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

