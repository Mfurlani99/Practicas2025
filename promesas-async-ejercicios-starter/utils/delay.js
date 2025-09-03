// utils/delay.js
// Pequeña utilidad para "pausar" con Promesas (promisificación de setTimeout).
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));