import { IAppliedInLocal } from "../types";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import TitleStatus from "../components/SendStatus";
import BoardItem from "./BoardItem";
import useSendList from "../hooks/useSendList";


export enum SendType {
  SEND = 0,
  START_INTERVIEWING = 1,
  MIDDLE_INTERVIEWING = 2,
  FINAL_INTERVIEWING = 3,
  OFFER = 4,
  REJECTED = 5,
}

const colors = {
  [SendType.SEND]: '#5BBCFF',
  [SendType.START_INTERVIEWING]: '#BFEA7C',
  [SendType.MIDDLE_INTERVIEWING]: '#9BCF53',
  [SendType.FINAL_INTERVIEWING]: '#416D19',
  [SendType.OFFER]: '#DBA39A',
  [SendType.REJECTED]: '#BDCDD6'
};
const groupByStatus = (data: IAppliedInLocal[]) => {
  return [
    SendType.SEND,
    SendType.START_INTERVIEWING,
    SendType.MIDDLE_INTERVIEWING,
    SendType.FINAL_INTERVIEWING,
    SendType.OFFER,
    SendType.REJECTED
  ].map((e, index) => {
    return {
      type: e,
      color: colors[e],
      data: data.filter(d => d.status === e)?.map((d, index2) => ({
        ...d,
        index: 100 * index + index2
      }))
    }
  })
}

const rejectStyle = {
  height: 61
}

const styles = {
  [SendType.REJECTED]: rejectStyle
} as Record<SendType, any>;

const Board = ({ data }: { data: IAppliedInLocal[] }) => {
  const { updateStatusById } = useSendList();
  const onDragEnd = (result: any) => {
    if ( !result?.draggableId || !result?.destination?.droppableId ) {
      return
    }
    const newStatusString = result.destination.droppableId;
    let newStatus;
    switch (newStatusString) {
      case "droppable0":
        newStatus = SendType.SEND;
        break;
      case "droppable1":
        newStatus = SendType.START_INTERVIEWING;
        break;
      case "droppable2":
        newStatus = SendType.MIDDLE_INTERVIEWING;
        break;
      case "droppable3":
        newStatus = SendType.FINAL_INTERVIEWING;
        break;
      case "droppable4":
        newStatus = SendType.OFFER;
        break;
      case "droppable5":
        newStatus = SendType.REJECTED;
        break;
      default:
        newStatus = SendType.SEND;
    }
    updateStatusById(result.draggableId, newStatus)
  };
  const finalGroupedData = groupByStatus(data);
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {
          finalGroupedData.map(d => (
            <div>
              <div style={{ textAlign: 'center', margin: 5 }}><TitleStatus value={d.type} /></div>
              <Droppable droppableId={"droppable" + d.type}>
                {(provided, snapshot) => (
                  <div style={{
                    minWidth: 200,
                    height: 600,
                    backgroundColor: d.color,
                    padding: 2,
                    margin: 2,
                    borderRadius: 4
                  }} ref={provided.innerRef} {...provided.droppableProps}>
                    {
                      d.data?.map((d) =>
                        <div>
                          <Draggable key={d.id} draggableId={d.id} index={d.index}>
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{ ...provided?.draggableProps?.style, ...styles[d.status] }}
                                >
                                  <BoardItem {...d} />
                                </div>
                              )
                            }}
                          </Draggable>
                        </div>
                      )
                    }
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))
        }
      </DragDropContext>
    </div>
  )
}

export default Board