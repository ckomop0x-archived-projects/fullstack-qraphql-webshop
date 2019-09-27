import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({ page }) => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, error, loading }) => {
        if (error) return <p>Error...</p>;
        if (loading) return <p>Loading...</p>;
        const { count } = data.itemsConnection.aggregate;
        const pages = Math.ceil(count / perPage, 0);
        const currentPage = page >= pages ? pages : page;
        return (
          <PaginationStyles>
            <Head>
              <title>
                Sick Fits – page {currentPage} of {pages}
              </title>
            </Head>
            <Link
              prefetch
              href={{
                pathname: 'items',
                query: { page: currentPage - 1 }
              }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                ← Prev
              </a>
            </Link>
            <p>
              Page {currentPage} of {pages}
            </p>
            <Link
              prefetch
              href={{
                pathname: 'items',
                query: { page: currentPage + 1 }
              }}
            >
              <a className="next" aria-disabled={page >= pages}>
                Next →
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
};

export default Pagination;
