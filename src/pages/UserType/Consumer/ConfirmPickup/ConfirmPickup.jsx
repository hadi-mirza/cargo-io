import React from 'react'
import { List } from 'antd';


function ConfirmPickup(props) {
    return (
        <div className="confirm">
            <List
    itemLayout="horizontal"
    dataSource={[
        {
          title: 'Pickup Time',
          desc: props.when
        },
        {
          title: 'Pickup From',
          desc: props.pickupType
        },
        {
          title: 'Item Type',
          desc: props.itemType
        },
        {
          title: 'Item Description',
          desc: props.itemDesc
        },
        {
            title: 'Pickup Date',
            desc: props.date
        },
        {
            title: 'Pickup Location',
            desc: `Located in ${props.pickupLocation[0]}`
        },
      ]}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={item.title}
          description={item.desc}
        />
      </List.Item>
    )}
  />
  <p>Track Request</p>
        </div>
    )
}

export default ConfirmPickup
