import React from 'react'
import { Comment, Header } from 'semantic-ui-react'

const StatusHistorySection = () => (
  <Comment.Group size='mini'>
    <Header as='h3' dividing>
      Change History
    </Header>

    <Comment>
      <Comment.Content>
        <Comment.Text>Manikandan updated issue to 'In Progress' on 05-Jan-2021</Comment.Text>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Content>
        <Comment.Text>Manikandan updated issue to 'In Progress' on 05-Jan-2021</Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default StatusHistorySection
