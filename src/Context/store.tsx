'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import axios from 'axios';


interface ContextProps {
  originInputRoad: string;
  setOriginInputRoad: React.Dispatch<React.SetStateAction<string>>;
  originNumberInput: string;
  setOriginNumberInput: React.Dispatch<React.SetStateAction<string>>;
  originInputDistrict: string;
  setOriginInputDistrict: React.Dispatch<React.SetStateAction<string>>;
  originInputCity: string;
  setOriginInputCity: React.Dispatch<React.SetStateAction<string>>;
  originInputState: string;
  setOriginInputState: React.Dispatch<React.SetStateAction<string>>;
  destinyInputRoad: string;
  setDestinyInputRoad: React.Dispatch<React.SetStateAction<string>>;
  destinyNumberInput: string;
  setDestinyNumberInput: React.Dispatch<React.SetStateAction<string>>;
  destinyInputDistrict: string;
  setDestinyInputDistrict: React.Dispatch<React.SetStateAction<string>>;
  destinyInputCity: string;
  setDestinyInputCity: React.Dispatch<React.SetStateAction<string>>;
  destinyInputState: string;
  setDestinyInputState: React.Dispatch<React.SetStateAction<string>>;
  calculateDistance: (origin: string, destiny: string) => void;
  cepOrigin: string;
  handleCepOriginChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cepDestiny: string;
  handleCepDestinyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  distanceInput: string;
  cepOriginFound: boolean;
  cepDestinyFound: boolean;
  isLoadingOrigin: boolean;
  isLoadingDestiny: boolean;
  isLoading: boolean;
}

const GlobalContext = createContext<ContextProps>({
  originInputRoad: '',
  setOriginInputRoad: () => {},
  originNumberInput: '',
  setOriginNumberInput: () => {},
  originInputDistrict: '',
  setOriginInputDistrict: () => {},
  originInputCity: '',
  setOriginInputCity: () => {},
  originInputState: '',
  setOriginInputState: () => {},
  destinyInputRoad: '',
  setDestinyInputRoad: () => {},
  destinyNumberInput: '',
  setDestinyNumberInput: () => {},
  destinyInputDistrict: '',
  setDestinyInputDistrict: () => {},
  destinyInputCity: '',
  setDestinyInputCity: () => {},
  destinyInputState: '',
  setDestinyInputState: () => {},
  calculateDistance: () => {},
  cepOrigin: '',
  handleCepOriginChange: () => {},
  cepDestiny: '',
  handleCepDestinyChange: () => {},
  distanceInput: '-',
  cepOriginFound: false,
  cepDestinyFound: false,
  isLoadingOrigin: false,
  isLoadingDestiny: false,
  isLoading: false,
});

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  
  const [originInputRoad, setOriginInputRoad] = useState('');
  const [originNumberInput, setOriginNumberInput] = useState('');
  const [originInputDistrict, setOriginInputDistrict] = useState('');
  const [originInputCity, setOriginInputCity] = useState('');
  const [originInputState, setOriginInputState] = useState('');
  const [destinyInputRoad, setDestinyInputRoad] = useState('');
  const [destinyNumberInput, setDestinyNumberInput] = useState('');
  const [destinyInputDistrict, setDestinyInputDistrict] = useState('');
  const [destinyInputCity, setDestinyInputCity] = useState('');
  const [destinyInputState, setDestinyInputState] = useState('');
  const [distanceInput, setDistanceInput] = useState('-');
  const [cepOrigin, setCepOrigin] = useState('');
  const [cepDestiny, setCepDestiny] = useState('');
  const [cepOriginFound, setCepOriginFound] = useState(false);
  const [cepDestinyFound, setCepDestinyFound] = useState(false);
  const [isLoadingOrigin, setIsLoadingOrigin] = useState(false);
  const [isLoadingDestiny, setIsLoadingDestiny] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
   
  async function calculateDistance(origin: string, destiny: string) {
    setIsLoading(true);
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
      if (response.data) {
        const distanceText = response.data.distance.text;
        const distanceValue = response.data.distance.value;
        console.log(distanceValue);
        setDistanceInput(distanceText)
      } else {
        setDistanceInput('-')
      }
    } catch (error) {
      console.log('Error: Not found');
      setDistanceInput('-')
    }
    setIsLoading(false);
  }

  const fetchAddressOrigin = async (inputCep: string) => {
    setIsLoadingOrigin(true);
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${inputCep}/json/`
      );
      if (response.data && response.data.logradouro !== undefined ) {
        setCepOriginFound(true);
        setOriginInputRoad(response.data.logradouro);
        setOriginNumberInput('');
        setOriginInputDistrict(response.data.bairro);
        setOriginInputCity(response.data.localidade);
        setOriginInputState(response.data.uf);
      } else {
        setCepOriginFound(false);
        setOriginInputRoad('');
        setOriginNumberInput('');
        setOriginInputDistrict('');
        setOriginInputCity('');
        setOriginInputState('');
      }
    } catch (err) {
      setCepOriginFound(false);
    }
    setIsLoadingOrigin(false);
  };

  const handleCepOriginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value.replace(/\D/g, ''); // Remove qualquer caracter que não seja número
    if (newCep.length <= 8) {
      setCepOrigin(newCep);
      if (newCep.length === 8) {
        fetchAddressOrigin(newCep);
      }
    }
  };

  const fetchAddressDestiny = async (inputCep: string) => {
    setIsLoadingDestiny(true);
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${inputCep}/json/`
      );
      if (response.data && response.data.logradouro !== undefined) {
        setCepDestinyFound(true);
        setDestinyInputRoad(response.data.logradouro);
        setDestinyNumberInput('');
        setDestinyInputDistrict(response.data.bairro);
        setDestinyInputCity(response.data.localidade);
        setDestinyInputState(response.data.uf);
      } else {
        setCepDestinyFound(false);
        setDestinyInputRoad('');
        setDestinyNumberInput('');
        setDestinyInputDistrict('');
        setDestinyInputCity('');
        setDestinyInputState('');
      }
    } catch (err) {
      setCepDestinyFound(false);
    }
    setIsLoadingDestiny(false);
  };

  const handleCepDestinyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value.replace(/\D/g, ''); // Remove qualquer caracter que não seja número
    if (newCep.length <= 8) {
      setCepDestiny(newCep);
      if (newCep.length === 8) {
        fetchAddressDestiny(newCep);
      }
    }
  };

  return (
    <GlobalContext.Provider
      value={{
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
