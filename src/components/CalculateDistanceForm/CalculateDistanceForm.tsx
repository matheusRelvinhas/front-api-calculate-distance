'use client';

import React, { useState } from 'react';
import './CalculateDistanceForm.css';
import axios from 'axios';

const CalculateDistanceForm: React.FC = () => {
  const [originInput, setOriginInput] = useState('');
  const [destinyInput, setDestinyInput] = useState('');
  const [distanceInput, setDistanceInput] = useState('');

  async function calculateDistanceKm(origin: string, destiny: string) {
    try {
      const response = await axios.get(
        'https://calculate-distance-api.vercel.app/',
        {
          params: {
            origin: origin,
            destiny: destiny,
          },
        }
      );
      const distanceText = response.data.distance.text;
      const distanceValue = response.data.distance.value;
      console.log(distanceValue);
      setDistanceInput(distanceText)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="">
      <div>
        <label>Origem</label>
        <input
          placeholder="origem"
          type="text"
          value={originInput}
          onChange={(e) => setOriginInput(e.target.value)}
        />
      </div>
      <div>
        <label>Destino</label>
        <input
          placeholder="destino"
          type="text"
          value={destinyInput}
          onChange={(e) => setDestinyInput(e.target.value)}
        />
      </div>
      <button onClick={() => calculateDistanceKm(originInput, destinyInput)}>
        Calcular
      </button>
      <h2>{distanceInput}</h2>
    </div>
  );
};

export default CalculateDistanceForm;
