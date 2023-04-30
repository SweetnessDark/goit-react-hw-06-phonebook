import PropTypes from 'prop-types';
import { InputSearch, LabelFilter, WrapperFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);

  return (
    <WrapperFilter>
      <LabelFilter htmlFor="filter">Find contacts by name</LabelFilter>
      <InputSearch
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      />
    </WrapperFilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
