import React from 'react';
import { Icon, Menu, Input } from 'semantic-ui-react'

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <Menu secondary>
    <Menu.Item
      name='all'
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}
    >Все</Menu.Item>
    <Menu.Item
      name='price_right'
      active={filterBy === 'price_right'}
      onClick={setFilter.bind(this, 'price_right')}
    >Цена <Icon name="sort amount down" /></Menu.Item>
    <Menu.Item
      name='price_low'
      active={filterBy === 'price_low'}
      onClick={setFilter.bind(this, 'price_low')}
    >Цена <Icon name="sort amount up" /></Menu.Item>
    <Menu.Item
      name='author'
      active={filterBy === 'author'}
      onClick={setFilter.bind(this, 'author')}
    >Автор</Menu.Item>
    <Menu.Item>
      <Input
        icon="search"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Введите запрос..."
      />
    </Menu.Item>
  </Menu>
)

export default Filter;
