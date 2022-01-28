import React from 'react';

import {
  Form,
  Input,
  ButtonSearch
} from './styles';

import { Search } from '../../styles/Icons';

export const InputSearch: React.FC = () => {
  return (
    <Form>
      <Input type='text' name='search' placeholder="O que você procura?" required autoComplete="off" autoFocus={true} />
    
      <ButtonSearch type="submit">
        <Search />
      </ButtonSearch>
    </Form>
  )
}