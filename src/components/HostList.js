import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = props => {

  return(
    <Card.Group itemsPerRow={6}>
      {/* What do you think, partner? */}
      {props.hosts.map(host => <Host host={host} selectHost={props.selectHost} />)}
    </Card.Group>
  )
}

export default HostList
