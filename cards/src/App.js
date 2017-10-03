
import React, { Component } from 'react';
import Task from './Task.js'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      comments: [],
    };
    this._addCard    = this._addCard.bind(this);
    this._removeCard = this._removeCard.bind(this);
    this._updateCard = this._updateCard.bind(this);
  }

  _addCard(i) {
    if (i.length < 1) 
    {
      alert("You have to at least type one character!!!")
    }
    else 
    {
      const all = this.state.comments
      all.push(i)
      this.setState({ comments: all })
      this.refs.mmsg.value = ''
    }
  }

  _updateCard(i, msg) {
    const arr = this.state.comments
    arr[i] = msg
    this.setState({
      comments: arr,
    })
  }

  _removeCard(i) {
    const all = this.state.comments
    all.splice(i, 1)
    this.setState({ comments: all })
  }

  _countMax(e) {
    const msg = e.target.value
    const count = msg.length
    if (count > 81) 
    {
      alert("You are recommended to type only 81 characters!!!")
    }
  }

  render() {
    const listItems = this.state.comments.map((item, index) =>
      <Task key={index} index={index} count={this._countMax} remove={this._removeCard} edit={this._editCard} save={this._updateCard}>{item}</Task>
    )
    return (
      <div>
        <div className="addCard">
          <button type="button" className="btn btn-primary btn-sm mybutton" data-toggle="modal" data-target=".bd-example-modal-sm">Add card</button>
          <div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm">
              <div className="modal-content mymodal">
                <MuiThemeProvider>
                  <Paper
                    className="paperAdd"
                    zDepth={5}
                    rounded={false}
                    children={<textarea onChange={this._countMax} cols="21" rows="5" className="card-body" ref="mmsg"></textarea>}
                  />
                </MuiThemeProvider>
                <button type="button" className="btn btn-primary btn-sm mybutton" data-dismiss="modal" onClick={(i) => this._addCard(this.refs.mmsg.value)}>Add</button>
              </div>
            </div>
          </div>
        </div>
        {listItems}
      </div>
    )
  }
}

export default App;
