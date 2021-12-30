import React from "react";

import { Form, Input, Button, DatePicker, Row, Select } from "antd";

import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";
import { IEvent } from '../models/IEvent'
import { Moment } from "moment";
import { formatDate } from "../utils/formatDate";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";


interface EventFormProps {
  guests: IUser[],
  submit: (e:IEvent) => void
}

const EventForm: React.FC<EventFormProps> = ({guests, submit}) => {
  const [event, setEvent] = React.useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: ''
  } as IEvent)

  const {user} = useTypedSelector(state => state.authReducer)
  const state = useTypedSelector(state => state)

  const selectDate = (date:Moment | null) => {
    if(date) {
      setEvent({...event, date: formatDate(date.toDate())})
    }
  }

  const submitForm = () => {
    setEvent({...event, author: user.username})
    submit(event)
  }
console.log(state)
  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Description"
        name="description"
        rules={[rules.required("Please input your description of Event!")]}
      >
        <Input  value={event.description} onChange={(e) => setEvent({...event, description: e.target.value}) }/>
      </Form.Item>
      
      <Form.Item
        label="Date"
        name="Date"
        rules={[rules.required("Please input the date of Event!")]}
      >
        <DatePicker 
        onChange={(date) => selectDate(date)}/>
      </Form.Item>

      <Form.Item label="Choose the guest" name="guest"
        rules={[rules.required("Please input the guest of Event!")]}>
        <Select onChange={(guest:string) => setEvent({...event, guest})}>
            {guests.map(guest => (
              <Select.Option value={guest.username} key={guest.username}>{guest.username}</Select.Option>
            ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Row>
    </Form>
  );
};

export default EventForm;
