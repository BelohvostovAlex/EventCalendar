import Layout from 'antd/lib/layout/layout'
import { Row, Button } from 'antd'
import React from 'react'
import EventCalendarComponent from '../components/EventCalendarComponent'
import EventForm from '../components/EventForm'
import Modal from 'antd/lib/modal/Modal'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const EventCalendar: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const  {fetchGuests} = useActions()
    const {guests} = useTypedSelector(state => state.eventReducer)

    React.useEffect(() => {
      fetchGuests()
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
    return (
        <Layout>
            <EventCalendarComponent events={[]}/>
            <Row justify='center'>
                <Button onClick={showModal}>Add an Event</Button>
            </Row>
            <Modal title="Add an event" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <EventForm guests={guests}/>
            </Modal>
        </Layout>
    )
}

export default EventCalendar
