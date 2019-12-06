import React from 'react'
import styled from '@emotion/styled'
import {spacing} from '@workday/canvas-kit-react-core'

import Card from '@workday/canvas-kit-react-card'
import Tabs from './Tabs'
import SpecRow from './SpecRow'

const data = {
  points: {
    total: [
      {
        id: 1,
        name: 'tab-1',
        text: 'Spec',
        content: () => <div>tab 1</div>
      },
      {id: 2, name: 'tab-2', text: 'Failures', content: () => <div>tab 2</div>}
    ]
  }
}

const Container = styled('div')({
  margin: '0 10%',
  paddingTop: 50,
  maxHeight: '60%',
  overflowY: 'auto'
})

class SpecView extends React.Component<{}, {}> {
  static defaultProps = {
    projectTitle: 'Project Title',
    projectLink: ''
  }
  public render() {
    return (
      <Container>
        <Card padding={spacing.zero} style={{border: 'none'}}>
          <Tabs data={data} />
        </Card>
      </Container>
    )
  }
}

export default SpecView