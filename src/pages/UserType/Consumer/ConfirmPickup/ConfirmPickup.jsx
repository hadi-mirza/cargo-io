import React from 'react'
import { List } from 'antd';

const data = [
    {
      title: 'Pickup Time',
      desc: 'ASAP or schedule'
    },
    {
      title: 'Pickup From',
    },
    {
      title: 'Item Type',
    },
    {
      title: 'Item Description',
    },
    {
        title: 'Pickup Date',
    },
    {
        title: 'Pickup Location',
    },
  ];


function ConfirmPickup() {
    return (
        <div className="confirm">
            <p>Confirm PickUp</p>
            <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={item.title}
          description={item.desc}
        />
      </List.Item>
    )}
  />
        </div>
    )
}

export default ConfirmPickup
