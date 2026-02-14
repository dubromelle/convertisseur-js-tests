// --- Logique métier (Isolée du DOM) ---
export function celsiusToFahrenheit(c) {
    if (typeof c !== 'number' || isNaN(c)) return NaN;
    return (c * 9/5) + 32;
}