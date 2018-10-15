import React from 'react'
import styled from 'styled-components'

class Flash extends React.Component {
  state = {...this.props}

  fade = () => {
    setTimeout( () => {
      this.clearFlash()
    }, this.props.duration || 10000)
  }

  clearFlash = () => {
    this.setState({ message: '', msgType: '' })
  }

  render() {
    let FlashComponent

    const { message, msgType } = this.state
    if (message) {
      switch(msgType) {
        case 'success':
          FlashComponent = FlashSuccess
          break
        case 'error':
          FlashComponent = FlashError
          break
        default:
          FlashComponent = FlashInfo
      }

    return (
      <FlashComponent>
        { message }
        { this.fade() }
        <Close onClick={this.clearFlash}>close</Close>
      </FlashComponent>
    )
    } else {
      return null
    }
  }
}

export default Flash