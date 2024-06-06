import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isClicked: false,
    enterInput: '',
  }

  onChangeInput = event => {
    this.setState({
      enterInput: event.target.value,
    })
  }

  onClickSave = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, enterInput} = this.state
    return (
      <div className="main-container">
        <div className="edit-container">
          <h1 className="edit-heading">Editable Text Input</h1>
          <div className="input-container">
            {isClicked === true ? (
              <div className="para-container">
                <p className="para-input">{enterInput}</p>
                <button
                  type="button"
                  className="save-button"
                  onClick={this.onClickSave}
                >
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={enterInput}
                  className="input-label"
                  onChange={this.onChangeInput}
                />
                <button
                  className="save-button"
                  type="button"
                  onClick={this.onClickSave}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
