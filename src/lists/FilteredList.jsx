/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';

import './FilteredList.css';

const ItemIcon = ({ done }) => (done ? ' *' : null);

const FilteredList = (props) => {
  const {
    todoFilter, todoClick, doneFilter, doneClick, allFilter, allClick, items, filter,
  } = props;
  return (
    <section>
      <ButtonGroup aria-label="Basic example" className="filters">
        <Button active={todoFilter} onClick={todoClick}>Todo</Button>
        <Button active={doneFilter} onClick={doneClick}>Done</Button>
        <Button active={allFilter} onClick={allClick}>All</Button>
      </ButtonGroup>

      <ListGroup>
        {items.filter(filter).map(i => (
          <ListGroup.Item
            key={i.name}
            onClick={props.itemClick(i)}
            active={i.done}
          >
            {i.name}
            <ItemIcon done={i.done} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
};

FilteredList.propTypes = {
  allClick: PropTypes.func.isRequired,
  allFilter: PropTypes.bool.isRequired,
  doneClick: PropTypes.func.isRequired,
  doneFilter: PropTypes.bool.isRequired,
  filter: PropTypes.func.isRequired,
  itemClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  todoClick: PropTypes.func.isRequired,
  todoFilter: PropTypes.bool.isRequired,
};

export default FilteredList;
