import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TrelloList from "./components/TrelloList";
// ant core
import { Button } from "antd";

// ant icons
import { PlusOutlined } from "@ant-design/icons";
// context
import { useAppContext } from "./context/AppContext";

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

function App() {
  const { trello, onDragList, onDragCard, addList } = useAppContext();

  // using useCallback is optional
  // const onBeforeCapture = useCallback((result) => {
  //   console.log("onBeforeCapture: ", result);
  // }, []);
  // const onBeforeDragStart = useCallback((result) => {
  //   console.log("onBeforeDragStart: ", result);
  // }, []);
  // const onDragStart = useCallback((result) => {
  //   console.log("onBeforeDragStart: ", result);
  // }, []);
  // const onDragUpdate = useCallback((result) => {
  //   console.log("onBeforeDragStart: ", result);
  // }, []);
  const onDragEnd = (result) => {
    if (!result.destination) {
      console.log("no updated destination");
      return;
    }
    if (result.type === "LIST") {
      onDragList(result);
      return;
    }
    if (result.type === "CARD") {
      onDragCard(result);
      return;
    }
  };

  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__logo" />
          <div className="header__right">
            <div className="header__avatar">
              <img src="/assets/images/avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <DragDropContext
            // onBeforeCapture={onBeforeCapture}
            // onBeforeDragStart={onBeforeDragStart}
            // onDragStart={onDragStart}
            // onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
          >
            <Droppable
              droppableId="all-lists"
              direction="horizontal"
              type="LIST"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  className="listContainer"
                  {...provided.droppableProps}
                >
                  {trello.columns.map((listId, listIndex) => {
                    const listItems = trello.lists[listId];
                    const cards = listItems.cards.map(
                      (cardId) => trello.cards[cardId]
                    );
                    return (
                      <TrelloList
                        cards={cards}
                        title={listItems.title}
                        index={listIndex}
                        listId={listItems.id}
                        key={listItems.id}
                      />
                    );
                  })}

                  {provided.placeholder}
                  <Button type="text" onClick={() => addList()}>
                    <PlusOutlined /> Add another list
                  </Button>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </main>
    </>
  );
}

export default App;
