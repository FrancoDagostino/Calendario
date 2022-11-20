import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { Navbar,CalendarEvent } from '../';
import { localizer,getMessagesES } from '../../auth/helpers';
import { useState } from 'react';


const event=[{
  title:'Cumpleaño del Jefe',
  notes:'Comprar pastel',
  start: new Date(),
  end: addHours(new Date(),2),
  bgColor:'#fafafa',
  user:{
    _id:'12345',
    name:'Franco'
  }
}]

export const CalendarPage = () => {

  const [lastVIew, setLastVIew] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event,start,end,isSelected) =>{

    const style = {
      backgroundColor: '#347CF7',
      borderRadius:'0px',
      opacity: '0.8',
      color:'white'
    }

    return{
      style
    }
  }

  const onDoubleClick = (event) => {

  }

  const onSelect = (event) => {

  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView',event)
  }


  return (
    <>
      <Navbar/>

      <Calendar
          culture='es'
          localizer={localizer}
          events={event}
          defaultView={lastVIew}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)' }}
          messages={getMessagesES()}
          eventPropGetter={eventStyleGetter}
          components={{
            event:CalendarEvent
          }}
          onDoubleClickEvent = {onDoubleClick}
          onSelectEvent = {onSelect}
          onView = {onViewChanged}


      />
    </>
  )
}