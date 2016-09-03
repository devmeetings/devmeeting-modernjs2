import React, {PropTypes, Component} from 'react';

// Dla komponentów w postaci klasy...
export default class SortingButtons extends Component {

  //4/ Możemy skorzystać z pól statycznych (stage-0)
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

