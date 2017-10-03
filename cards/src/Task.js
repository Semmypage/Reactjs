
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Task extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      edit: false
    }
    this._editCard = this._editCard.bind(this)
  }

  _editCard() {
    this.setState({
      edit: true
    })
  }

  _remove(i) {
    this.props.remove(i);
  }

  _save(i, msg) {
    this.props.save(i, msg)
    this.setState({
      edit: false
    })
  }

  render() {
    if (!this.state.edit) {
      return (
        <div className="cards">
          <MuiThemeProvider>
            <Paper
              className="paper"
              zDepth={5}
              rounded={false}
              children={this.props.children}
            />
          </MuiThemeProvider>
          <div className="removebutton">
            <MuiThemeProvider>
              <FlatButton label="X" secondary={true} fullWidth={true} onClick={(i) => this._remove(this.props.index)} />
            </MuiThemeProvider>
          </div>
          <div className="editbutton">
            <MuiThemeProvider>
              <FlatButton label="edit" primary={true} fullWidth={true} onClick={this._editCard} />
            </MuiThemeProvider>
          </div>
        </div>
      )
    } else {
      return (
        <div className="cards">
          <MuiThemeProvider>
            <Paper
              className="paperEdit"
              zDepth={5}
              rounded={false}
              children={<textarea onChange={this.props.count} maxlength="13" cols="15" rows="3" className="card-body" ref="msg" defaultValue={this.props.children}></textarea>}
            />
          </MuiThemeProvider>
          <div className="savebutton">
            <MuiThemeProvider>
              <RaisedButton label="Save" primary={true} fullWidth={true} onClick={(i, msg) => this._save(this.props.index, this.refs.msg.value)} />
            </MuiThemeProvider>
          </div>
        </div>
      )
    }
  }
}

export default Task;