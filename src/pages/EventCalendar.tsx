import Layout from 'antd/lib/layout/layout'
import { Row, Button } from 'antd'
import React from 'react'
import EventCalendarComponent from '../components/EventCalendarComponent'
import EventForm from '../components/EventForm'
import Modal from 'antd/lib/modal/Modal'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'

const EventCalendar: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const  {fetchGuests, fetchEvents} = useActions()
    const {guests, events} = useTypedSelector(state => state.eventReducer)
    const {user} = useTypedSelector(state => state.authReducer)
    const {createEvent} = useActions()

    React.useEffect(() => {
      fetchGuests()
      fetchEvents(user.username)
    }, [])
    
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const submit = (e: IEvent) => {
        createEvent(e)
        setIsModalVisible(false)
      }
    return (
        <Layout>
            <EventCalendarComponent events={events}/>
            <Row justify='center'>
                <Button onClick={showModal}>Add an Event</Button>
            </Row>
            <Modal title="Add an event" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <EventForm guests={guests} submit={submit}/>
            </Modal>
        </Layout>
    )
}

export default EventCalendar
