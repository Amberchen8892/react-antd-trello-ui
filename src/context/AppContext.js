import React from 'react';

// mock data
import data  from "../data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [trello, setTrello] = React.useState(data)
function onDragList (result) {
    const {source, destination} = result;
    const columns = [...trello.columns];
    const listSpliced = columns.splice(source.index,1)[0];
    columns.splice(destination.index, 0 , listSpliced);
    setTrello(prevState => ({
        ...prevState,
        columns
    }))

}
function onDragCard (result) {
    console.log('onDragCard', result)

}
  return (
    <AppContext.Provider value={{ trello, onDragList, onDragCard }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);