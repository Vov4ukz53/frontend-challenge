import { ButtonWrapper, Button } from './styled';

const FilterTodos = ({filter, setFilter}) => {

  return (
    <ButtonWrapper>
      <Button
        onClick={() => setFilter('all')}
        active={filter === 'all' ? "true" : undefined}
      >
        All
      </Button>
      <Button
        onClick={() => setFilter('undone')}
        active={filter === 'undone'? "true" : undefined}
      >
        Active
      </Button>
      <Button
        onClick={() => setFilter('done')}
        active={filter === 'done'? "true" : undefined}
      >
        Completed
      </Button>
    </ButtonWrapper>
  )
}

export default FilterTodos;