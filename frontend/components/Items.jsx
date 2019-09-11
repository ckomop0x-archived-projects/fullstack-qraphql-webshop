import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
      price
    }
  }
`;

const Center = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

class Items extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_ITEMS_QUERY} ssr={true}>
          {({ data, error, loading }) => {
            if (error) return <p>We got an error {error.message}</p>;
            if (loading) return <p>We load a data for you...</p>;
            return data ? (
              <Center>
                <ItemsList>
                  {data.items.map(item => (
                    <Item item={item} key={item.id} />
                  ))}
                </ItemsList>
              </Center>
            ) : null;
          }}
        </Query>
      </div>
    );
  }
}

export default Items;
