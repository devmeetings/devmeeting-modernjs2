import React, {PropTypes, Component} from 'react';

export default class SortingButtons extends Component {

  static propTypes = {
    sortBy: PropTypes.string.isRequired,
    onSortingChange: PropTypes.func.isRequired
  };

  render () {
    const { sortBy, onSortingChange } = this.props;
    return (
      <div>
        <button disabled={sortBy === 'name'} onClick={e => onSortingChange('name')}>
          Sort by Name
        </button>
        <button disabled={sortBy === 'started'} onClick={e => onSortingChange('started')}>
          Sort by Start Time
        </button>
      </div>
    );
  }
}

