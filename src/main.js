import './style.css'
import { celsiusToFahrenheit } from './convertir'

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