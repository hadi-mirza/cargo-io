import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import requestService from '../../../utils/requestService'
import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
} from "antd";

class Consumer extends React.Component {
constructor() {
  super()
  this.state = {
    when: '',
    pickupType: '',
    itemType: '',
    itemDesc: '',
    date: ''
  };
}
  

  // handleChange = (e) => {
  //   // this.props.updateMessage('');
  //   console.log(e)
  //   // this.setState({
  //   //   [e.target.name]: e.target.value
  //   // });
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await userService.signup(this.state);
  //     this.props.handleSignup()
  //     this.props.history.push('/');
  //   } catch (err) {
  //     this.props.updateMessage(err.message);
  //   }
  // }

  onFinish = async (values) => {
    console.log('Success:', values);
    // values.preventDefault;
    try {
      await requestService.addRequest(values);
      console.log('await functions have ran')
      this.props.history.push('/');
    } catch (err) {
      console.log(err)
    }
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div>
        <Form
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="vertical" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}

      >
        <Form.Item name="when" label="When would you like your item picked up?">
          <Select>
            <Select.Option value="asap">ASAP</Select.Option>
            <Select.Option value="schedule">Schedule</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="pickupType" label="Who are we picking up from?">
          <Select>
            <Select.Option value="individual">Person</Select.Option>
            <Select.Option value="retail">Retail</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="itemType" label="What type of item is it?">
          <Cascader
            options={[
              {
                value: "household",
                label: "Household Items",
                children: [
                  {
                    value: "furniture",
                    label: "Furniture",
                    children: [
                        {
                            value: "indoor",
                            label: "Indoor"
                        },
                        {
                            value: "outdoor",
                            label: "Outdoor"
                        },
                    ]
                  },
                  {
                    value: "other",
                    label: "Other",
                  },
                ],
              },
              {
                value: "groceries",
                label: "Groceries",
                children: [
                  {
                    value: "perishable",
                    label: "Perishable",
                  },
                  {
                    value: "non-perishable",
                    label: "Non-Perishable",
                  },
                  {
                    value: "mixed",
                    label: "Mixed Groceries",
                  },
                ],
              },
              {
                value: "food",
                label: "Food",
              },
              {
                value: "building",
                label: "Building Materials",
                children: [
                  {
                    value: "lumber",
                    label: "Lumber",
                  },
                  {
                    value: "tools",
                    label: "Tools",
                  },
                  {
                    value: "landscaping",
                    label: "Landscaping",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="itemDesc" label="Short description of item(s)">
          <Input />
        </Form.Item>
        <Form.Item name="date" label="Please choose a date if this item is set for scheduled pickup. Choose Today if you want it picked up ASAP" >
          <DatePicker />
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

export default Consumer
