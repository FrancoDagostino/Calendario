import { useCalendarStore, useUiStore } from "../../hooks"


export const FabDelete = () => {
    const {StartDeletingEvent,hasEventSelect} = useCalendarStore();
    const {isDateModalOpen} = useUiStore();
    const handleEventDelete = ()=>{
        StartDeletingEvent();
    }

  return (
    <button 
        className="btn btn-danger fab-danger"
        onClick={handleEventDelete}
        style={{
            display: hasEventSelect && !isDateModalOpen ? '' : 'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
