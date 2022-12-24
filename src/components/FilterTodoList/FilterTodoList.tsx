import classNames from 'classnames';
import React from 'react';
import { FilterType } from '../../types/FilterType';
import { Todo } from '../../types/Todo';

interface Props {
  todosLeft: number;
  setFilterType: (filterType: FilterType) => void,
  filterType: FilterType,
  clearAllHandler: () => void,
  visibleTodos: Todo[],
}

export const FilterTodoList: React.FC<Props> = ({
  todosLeft,
  setFilterType,
  filterType,
  clearAllHandler,
  visibleTodos,
}) => {
  const isClearButtondisabled = visibleTodos
    .some(todo => todo.completed === true);

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="todosCounter">
        {`${todosLeft} items left`}
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          data-cy="FilterLinkAll"
          href="#/"
          className={classNames(
            'filter__link',
            { selected: FilterType.All === filterType },
          )}
          onClick={() => setFilterType(FilterType.All)}
        >
          All
        </a>

        <a
          data-cy="FilterLinkActive"
          href="#/active"
          className={classNames(
            'filter__link',
            { selected: FilterType.Active === filterType },
          )}
          onClick={() => setFilterType(FilterType.Active)}
        >
          Active
        </a>
        <a
          data-cy="FilterLinkCompleted"
          href="#/completed"
          className={classNames(
            'filter__link',
            { selected: FilterType.Completed === filterType },
          )}
          onClick={() => setFilterType(FilterType.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        data-cy="ClearCompletedButton"
        type="button"
        className="todoapp__clear-completed"
        style={{ visibility: isClearButtondisabled ? 'visible' : 'hidden' }}
        onClick={clearAllHandler}
      >
        Clear completed
      </button>
    </footer>
  );
};