import React from "react";

import { Form, Input, Button, DatePicker, Row, Select } from "antd";

import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";
import { IEvent } from '../models/IEvent'
import { Moment } from "moment";


interface EventFormProps {
  guests: IUser[]
}

const EventForm: React.FC<EventFormProps> = ({guests}) => {
  const [event, setEvent] = React.useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: ''
  } as IEvent)
  console.log(event)

  const selectDate = (date:Moment | null) => {
    console.log(date?.toString())
  }
  return (
    <Form>
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
