import { useReducer, useEffect } from 'react';

function showsReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.showId];
    }

    case 'REMOVE': {
      return prevState.filter(showId => showId !== action.showId);
    }

    default:
      return prevState;
  }
}

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
    // JSON.parse will convert the string into json format
  });

  //   to synchronise whenever state updates i.e, localstorage updates
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

// if we use usePersistedReducer multiple times inside our code
// every time we need to pass a reducer for our shows,
// so to reuse the logic we create another hook on top of
// usePersistedReducer
export function useShows(key = 'shows') {
  // whatever return from usePersistedReducer
  // we will return here
  return usePersistedReducer(showsReducer, [], key);
}
