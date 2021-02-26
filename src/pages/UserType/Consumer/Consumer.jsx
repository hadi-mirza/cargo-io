import React from "react";
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
import { Route } from "react-router-dom";
import ConfirmPickup from './ConfirmPickup/ConfirmPickup'
const { Option } = Select;

class Consumer extends React.Component {
constructor() {
  super()
  this.state = {
    id: '',
    when: '',
    pickupType: '',
    itemType: '',
    itemDesc: '',
    date: null,
    pickupLocation: '',
    formSubmitted: false
  };
}

onFinish = async (values) => {
  console.log('Success:', values);
  // values.preventDefault;
  try {
    let response = await requestService.addRequest(values);
    let responseId = response.newDoc._id
    this.setState({ id: responseId, when: values.when, pickupType: values.pickupType, itemType: values.itemType, itemDesc: values.itemDesc, date: values.itemDate, pickupLocation: values.pickupLocation, formSubmitted: true})
    console.log('await functions have ran')
    this.props.history.push('/request-pickup/');
  } catch (err) {
    console.log(err)
  }
};

onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  render() {
    const requestForm = this.state.formSubmitted === false ?
    <div>
    <Form
    labelCol={{
      span: 18,
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

    <Form.Item
    name="pickupLocation"
    label="Pickup Location"
    rules={[
      { type: 'array', required: true, message: 'Please select your pickup location!' },
    ]}
  >
    <Cascader options={[
{
value: 'ontario',
label: 'Ontario',
children: [
  {
    value: 'toronto',
    label: 'Toronto',
    children: [
      {
        value: 'city of toronto',
        label: 'Toronto',
      },
      {
        value: 'greater toronto',
        label: 'Greater Toronto Area',
      },
    ],
  },
  {
    value: 'hamilton',
    label: 'Hamilton',
    // children: [
    //   {
    //     value: 'durham region',
    //     label: 'Durham Region',
    //   },
    // ],
  },
  {
    value: 'barrie',
    label: 'Barrie',
    // children: [
    //   {
    //     value: 'durham region',
    //     label: 'Durham Region',
    //   },
    // ],
  },
],
},
{
value: 'quebec',
label: 'Quebec',
children: [
  {
    value: 'montreal',
    label: 'Montreal',
  },
  {
    value: 'quebec city',
    label: 'Quebec City',
  },
],
},
]} />
  </Form.Item>

    <Form.Item>
    <Button type="primary" htmlType="submit">
      Submit Request
    </Button>
    </Form.Item>
  </Form>

  </div>
  :
  <div>
    <ConfirmPickup id={this.state.id} when={this.state.when} pickupType={this.state.pickupType} itemType={this.state.itemType} itemDesc={this.state.itemDesc} date={this.state.date} pickupLocation={this.state.pickupLocation}/>
  </div>;

    return (
      <div>
        {requestForm}
      </div>
    )
  }
}

export default Consumer
