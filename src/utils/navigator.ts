import { NavigateFunction } from 'react-router-dom';

interface NavigateTypes {
  state: {
    number: number;
  };
}

const navigator = (navigate: NavigateFunction, param?: NavigateTypes) => {
  return {
    main: () => {
      navigate(`/`, param);
    },
    web: () => {
      navigate(`/web`, param);
    },
    dotNet: () => {
      navigate(`/dotNet`, param);
    },
    unity: () => {
      navigate(`/unity`, param);
    },
    mobile: () => {
      navigate(`/mobile`, param);
    },
    test: ()=>{
      navigate(`/test`,param);
    }
  };
};

export default navigator;
