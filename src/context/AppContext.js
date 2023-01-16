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
    console.log('onDragCard', result);
    const {source, destination} = result;
    const sourceCards = [...trello.lists[source.droppableId].cards];
    const destinationCards = [...trello.lists[destination.droppableId].cards];
    const sourceCard = sourceCards.splice(source.index,1)[0];
    if(source.droppableId === destination.droppableId ){
        sourceCards.splice(destination.index, 0 , sourceCard);
        setTrello(prevState => ({
            ...prevState,
            lists:{
                ...prevState.lists,
                [source.droppableId]:{
                    ...prevState.lists[source.droppableId],
                    cards:sourceCards,
                },
    
            }
    
        }))
    } else {
        destinationCards.splice(destination.index, 0 , sourceCard);
        setTrello(prevState => ({
            ...prevState,
            lists:{
                ...prevState.lists,
                [source.droppableId]:{
                    ...prevState.lists[source.droppableId],
                    cards: sourceCards,
                },
                [destination.droppableId]:{
                    ...prevState.lists[destination.droppableId],
                    cards: destinationCards,
                },
    
            }
    
        }))
    }
   
    console.log("sourceCards after",sourceCards)
    console.log("destinationCardsafter",destinationCards)
}
  return (
    <AppContext.Provider value={{ trello, onDragList, onDragCard }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);