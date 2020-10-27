import React from "react";

interface IState {
  episodes: [];
  favorites: [];
}

const initialStatus: IState = {
  episodes: [],
  favorites: []
};
export const Store = React.createContext<IState>(initialStatus);

function reducer() {
  // todo
}

export function StoreProvider(props: any): JSX.Element {
  return (
    <Store.Provider value={initialStatus}>{props.children}</Store.Provider>
  );
}
