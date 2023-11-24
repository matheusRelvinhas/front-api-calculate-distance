'use client';

import { useGlobalContext } from '@/Context/store';
import AddressLookup from '../AddressLookup/AddressLookup';
import GitHubLink from '../GitHubLink/GitHubLink';
import Loader from '../Loader/Loader';
import './CalculateDistanceForm.css';

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
    <div className="calculate-distance-form-container">
      <div className="calculate-distance-form-api-title">
        <h2>.Api Calcular Distância</h2>
        <div className="calculate-distance-form-img">
          <figure>
            <picture>
              <source src={'./img/calculate-distance.png'} type="image/png" />
              <img src={'./img/calculate-distance.png'} alt="icon-img" />
            </picture>
          </figure>
        </div>
      </div>
      <div className="calculate-distance-form-div">
        <div
          className="calculate-distance-form-origin-destiny"
          id="border-botton"
        >
          <div className="calculate-distance-form-title">
            <h3>Origem</h3>
          </div>
          <div className="calculate-distance-form-cep">
            <AddressLookup
              placeholder="cep"
              value={cepOrigin}
              onChange={handleCepOriginChange}
            />
            {isLoadingOrigin ? (
              <div>
                <Loader />
              </div>
            ) : (
              <>
                {cepOriginFound ? (
                  <div className="calculate-distance-form-cep-checked">
                    <figure>
                      <picture>
                        <source src={'./img/check.png'} type="image/png" />
                        <img src={'./img/check.png'} alt="icon-img" />
                      </picture>
                    </figure>
                  </div>
                ) : (
                  <div className="calculate-distance-form-cep-checked">
                    <figure>
                      <picture>
                        <source
                          src={'./img/do-not-check.png'}
                          type="image/png"
                        />
                        <img src={'./img/do-not-check.png'} alt="icon-img" />
                      </picture>
                    </figure>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="calculate-distance-form-road-number">
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
          </div>
          <div className="calculate-distance-form-dist-city-state">
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
        </div>
        <div className="calculate-distance-form-origin-destiny">
          <div className="calculate-distance-form-title">
            <h3>Destino</h3>
          </div>
          <div className="calculate-distance-form-cep">
            <AddressLookup
              placeholder="cep"
              value={cepDestiny}
              onChange={handleCepDestinyChange}
            />
            {isLoadingDestiny ? (
              <div>
                <Loader />
              </div>
            ) : (
              <>
                {cepDestinyFound ? (
                  <div className="calculate-distance-form-cep-checked">
                    <figure>
                      <picture>
                        <source src={'./img/check.png'} type="image/png" />
                        <img src={'./img/check.png'} alt="icon-img" />
                      </picture>
                    </figure>
                  </div>
                ) : (
                  <div className="calculate-distance-form-cep-checked">
                    <figure>
                      <picture>
                        <source
                          src={'./img/do-not-check.png'}
                          type="image/png"
                        />
                        <img src={'./img/do-not-check.png'} alt="icon-img" />
                      </picture>
                    </figure>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="calculate-distance-form-road-number">
            <input
              placeholder="rua"
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
          </div>
          <div className="calculate-distance-form-dist-city-state">
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
        </div>
        <div className="calculate-distance-form-button">
          <button
            onClick={() =>
              calculateDistance(
                `${originInputRoad},${originNumberInput},${originInputDistrict},${originInputCity},${originInputState}`,
                `${destinyInputRoad},${destinyNumberInput},${destinyInputDistrict},${destinyInputCity},${destinyInputState}`
              )
            }
            disabled={originInputRoad === '' || destinyInputRoad === ''}
          >
            <div className="calculate-distance-form-button-div">
              {isLoading ? <Loader /> : <span>Calcular</span>}
            </div>
          </button>
        </div>
      </div>
      <div className="calculate-distance-form-distance">
        <h2>{distanceInput}</h2>
      </div>
      <GitHubLink username="matheusRelvinhas/calculateDistanceAPI" />
    </div>
  );
};

export default CalculateDistanceForm;
