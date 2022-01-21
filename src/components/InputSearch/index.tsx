import React from 'react';

import {
  Form,
  Input,
  ButtonSearch
} from './styles';

import { Search } from '../../styles/Icons';

const InputSearch: React.FC = () => {
  return (
    <Form>
      <Input type='text' name='search' placeholder="O que você procura?" required autoFocus={true} />
    
      <ButtonSearch type="submit">
        <Search />
      </ButtonSearch>
    </Form>
  )
}

export default InputSearch;