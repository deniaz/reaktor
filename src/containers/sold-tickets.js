import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { SoldTickets } from '../compositions/sold-tickets';

const mapResultsToProps = ({ data }) => {
  if (!data.allTickets) {
    return { count: '∞' };
  }

  return { count: data.allTickets.reduce((sum, { soldTickets }) => sum + soldTickets, 0) };
};

export default graphql(
  gql`
    {
      allTickets {
        soldTickets
      }
    }
  `,
  {
    props: mapResultsToProps,
  },
)(SoldTickets);
