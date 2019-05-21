import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from './list-item/ListItem';

const mapStateToProps = state => ({ notes: state.notes });

class List extends Component {
  render() {
    const { notes } = this.props;
    return (
      <ul className="list-group list-group-flush">
        {notes.map(note => <ListItem key={note.id} note={{ ...note }} />)}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(List);
