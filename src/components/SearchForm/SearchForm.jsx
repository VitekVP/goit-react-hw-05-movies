import { useState } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

import { SForm, SearchFormButton, SearchFormInput } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    //   console.log(event.target.value);
    setQuery(event.target.value.toLowerCase());
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // console.dir(event.target);
    if (query.trim() === '') {
      alert('please enter a request');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SForm onSubmit={handleFormSubmit}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleInputChange}
      />
      <SearchFormButton type="submit">
        <FcSearch style={{ width: 30, height: 30 }} />
      </SearchFormButton>
    </SForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
