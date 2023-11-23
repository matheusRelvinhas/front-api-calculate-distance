'use client';

import './CalculateDistanceForm.css';
import { useGlobalContext } from '@/Context/store';
import AddressLookup from '../AddressLookup/AddressLookup';

const CalculateDistanceForm: React.FC = () => {
  const {
    originInputRoad,
    setOriginInputRoad,
    originNumberInput,
    setOriginNumberInput,
    originInputDistrict,
    setOriginInputDistrict,
    originInputCity,
    setOriginInputCity,
    originInputState,
    setOriginInputState,
    destinyInputRoad,
    setDestinyInputRoad,
    destinyNumberInput,
    setDestinyNumberInput,
    destinyInputDistrict,
    setDestinyInputDistrict,
    destinyInputCity,
    setDestinyInputCity,
    destinyInputState,
    setDestinyInputState,
    calculateDistance,
    cepOrigin,
    handleCepOriginChange,
    cepDestiny,
    handleCepDestinyChange,
    distanceInput,
    cepOriginFound,
    cepDestinyFound,
    isLoadingOrigin,
    isLoadingDestiny,
    isLoading,
  } = useGlobalContext();

  return (
    <div>
      <div>
        {isLoading && <div>Loading...</div>}
        <span>Origem</span>
        <AddressLookup
          placeholder="ex.: 00000-000"
          value={cepOrigin}
          onChange={handleCepOriginChange}
        />
        {isLoadingOrigin ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          <>{cepOriginFound ? <span>Found</span> : <span>NotFound</span>}</>
        )}
        <input
          placeholder="rua"
          type="text"
          value={originInputRoad}
          onChange={(e) => setOriginInputRoad(e.target.value)}
        />
        <input
          placeholder="número"
          type="number"
          value={originNumberInput}
          onChange={(e) => setOriginNumberInput(e.target.value)}
        />
        <input
          placeholder="bairro"
          type="text"
          value={originInputDistrict}
          onChange={(e) => setOriginInputDistrict(e.target.value)}
        />
        <input
          placeholder="cidade"
          type="text"
          value={originInputCity}
          onChange={(e) => setOriginInputCity(e.target.value)}
        />
        <input
          placeholder="estado"
          type="text"
          value={originInputState}
          onChange={(e) => setOriginInputState(e.target.value)}
        />
      </div>
      <div>
        <span>Destino</span>
        <AddressLookup
          placeholder="ex.: 00000-000"
          value={cepDestiny}
          onChange={handleCepDestinyChange}
        />
        {isLoadingDestiny ? (
          <div>
            <span>Loading...</span>
          </div>
        ) : (
          <>{cepDestinyFound ? <span>Found</span> : <span>NotFound</span>}</>
        )}
        <input
          placeholder="endereço"
          type="text"
          value={destinyInputRoad}
          onChange={(e) => setDestinyInputRoad(e.target.value)}
        />
        <input
          placeholder="número"
          type="number"
          value={destinyNumberInput}
          onChange={(e) => setDestinyNumberInput(e.target.value)}
        />
        <input
          placeholder="bairro"
          type="text"
          value={destinyInputDistrict}
          onChange={(e) => setDestinyInputDistrict(e.target.value)}
        />
        <input
          placeholder="cidade"
          type="text"
          value={destinyInputCity}
          onChange={(e) => setDestinyInputCity(e.target.value)}
        />
        <input
          placeholder="estado"
          type="text"
          value={destinyInputState}
          onChange={(e) => setDestinyInputState(e.target.value)}
        />
      </div>
      <button
        onClick={() =>
          calculateDistance(
            `${originInputRoad},${originNumberInput},${originInputDistrict},${originInputCity},${originInputState}`,
            `${destinyInputRoad},${destinyNumberInput},${destinyInputDistrict},${destinyInputCity},${destinyInputState}`
          )
        }
        disabled={originInputRoad === '' || destinyInputRoad === ''}
      >
        Calcular
      </button>
      {distanceInput !== '' && (
        <div>
          <span>{distanceInput}</span>
        </div>
      )}
    </div>
  );
};

export default CalculateDistanceForm;
