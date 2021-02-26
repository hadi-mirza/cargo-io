import React from 'react'
import { List, Button } from 'antd';
import { Link, Route } from "react-router-dom";
import PickupDetail from '../../../PickupDetail/PickupDetail'

function ConfirmPickup(props) {
  let incomingId = "/request-pickup/" + props.id
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
        // {
        //     title: 'Pickup Date',
        //     desc: props.date
        // },
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
      <Button type="primary" htmlType="submit">
      <Link id="logo-link" to={incomingId}>Track Request</Link>
    </Button>

        </div>
    )
}

export default ConfirmPickup
