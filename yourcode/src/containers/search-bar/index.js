import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MOVIES_FETCH_REQUESTED_ACTION } from '../../store/actions';

import { Container, Icon, Input } from './style';

export default function SearchBarContainer() {
  const dispatch = useDispatch();
  const lastFilter = useSelector((state) => state.lastFilter);

  function handleSearch(event) {
    dispatch(MOVIES_FETCH_REQUESTED_ACTION(event.target.value));
  }

  return (
    <Container>
      <Icon alt="Icon" title="Icon" />

      <Input placeholder="Search movies..." minLength={2} debounceTimeout={300} onChange={handleSearch} value={lastFilter} />
    </Container>
  );
}
