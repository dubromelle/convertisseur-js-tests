import './style.css'

// --- Logique métier (Isolée du DOM) ---
export function celsiusToFahrenheit(c) {
    if (typeof c !== 'number' || isNaN(c)) return NaN;
    return (c * 9/5) + 32;
}

// --- Logique d'interface (DOM) ---
const celsiusInput = document.querySelector('#celsius');
const resultDiv = document.querySelector('#result');
const convertBtn = document.querySelector('#convertBtn'); // Ajout d'un ID pour le bouton

const handleConversion = () => {
    const value = parseFloat(celsiusInput.value);
    const fahrenheit = celsiusToFahrenheit(value);

    if (!isNaN(fahrenheit)) {
        resultDiv.innerText = `${value}°C est égal à ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultDiv.innerText = "Veuillez entrer un nombre valide.";
    }
};

// On attache l'événement au clic
convertBtn.addEventListener('click', handleConversion);