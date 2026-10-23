import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateBmi, calculateFitnessTargets, checkGymOpenStatus, formatWhatsAppUrl } from './calculator.ts';

test('calculateBmi returns correct value and categories', () => {
  // Normal weight: 70kg at 175cm -> 22.86 -> 22.9
  const res1 = calculateBmi(70, 175);
  assert.equal(res1.bmi, 22.9);
  assert.equal(res1.category, 'Peso ideal');

  // Underweight: 48kg at 170cm -> 16.6
  const res2 = calculateBmi(48, 170);
  assert.equal(res2.bmi, 16.6);
  assert.equal(res2.category, 'Abaixo do peso');

  // Overweight: 85kg at 175cm -> 27.8
  const res3 = calculateBmi(85, 175);
  assert.equal(res3.bmi, 27.8);
  assert.equal(res3.category, 'Sobrepeso');

  // Obese: 105kg at 175cm -> 34.3
  const res4 = calculateBmi(105, 175);
  assert.equal(res4.bmi, 34.3);
  assert.equal(res4.category, 'Obesidade');
});

test('calculateBmi throws on invalid inputs', () => {
  assert.throws(() => calculateBmi(0, 170));
  assert.throws(() => calculateBmi(70, -10));
});

test('calculateFitnessTargets calculates protein and sessions by goal', () => {
  const bodybuilding = calculateFitnessTargets('fisiculturismo', 80);
  assert.equal(bodybuilding.dailyProteinGrams, 176); // 80 * 2.2
  assert.equal(bodybuilding.recommendedWeeklyWorkouts, 6);

  const hypertrophy = calculateFitnessTargets('hipertrofia', 75);
  assert.equal(hypertrophy.dailyProteinGrams, 135); // 75 * 1.8
  assert.equal(hypertrophy.recommendedWeeklyWorkouts, 5);
});

test('checkGymOpenStatus evaluates schedule accurately', () => {
  // Wednesday at 14:30 -> Open
  const wednesdayOpen = new Date('2026-10-21T14:30:00');
  const resWed = checkGymOpenStatus(wednesdayOpen);
  assert.equal(resWed.isOpen, true);

  // Wednesday at 23:30 -> Closed
  const wednesdayNight = new Date('2026-10-21T23:30:00');
  assert.equal(checkGymOpenStatus(wednesdayNight).isOpen, false);

  // Sunday -> Closed
  const sunday = new Date('2026-10-25T11:00:00');
  assert.equal(checkGymOpenStatus(sunday).isOpen, false);

  // Saturday morning 10:30 -> Open
  const satMorning = new Date('2026-10-24T10:30:00');
  assert.equal(checkGymOpenStatus(satMorning).isOpen, true);

  // Saturday afternoon 13:30 (break) -> Closed
  const satBreak = new Date('2026-10-24T13:30:00');
  assert.equal(checkGymOpenStatus(satBreak).isOpen, false);

  // Saturday afternoon 16:00 -> Open
  const satAfternoon = new Date('2026-10-24T16:00:00');
  assert.equal(checkGymOpenStatus(satAfternoon).isOpen, true);
});

test('formatWhatsAppUrl formats Brazilian phone and message safely', () => {
  const url = formatWhatsAppUrl('05532178863', 'Olá Bem Estar Pro');
  assert.ok(url.includes('555532178863'));
  assert.ok(url.includes('Ol%C3%A1%20Bem%20Estar%20Pro'));
});
