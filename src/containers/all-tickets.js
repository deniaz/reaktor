import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';

import { TicketListing } from '../compositions/ticket-listing';

const mapResultsToProps = ({ data, ownProps: { title } }) => ({
  title,
  tickets: (data.allTickets || []).map(({ id, title, description, price, soldOut, availableUntil, soldTickets }) => ({
    id,
    title,
    description,
    price,
    soldOut,
    soldTickets,
    expiry: new Date(availableUntil).toLocaleDateString(),
  })),
});

export default compose(
  graphql(
    gql`
      {
        allTickets {
          id
          title
          description
          price
          soldOut
          soldTickets
          availableUntil
        }
      }
    `,
    {
      props: mapResultsToProps,
      options: () => ({
        pollInterval: 10 * 1000,
      }),
    },
  ),
  graphql(
    gql`
      mutation updateTicket($id: ID!, $soldTickets: Int!) {
        updateTicket(id: $id, soldTickets: $soldTickets) {
          id
          title
          description
          price
          soldOut
          soldTickets
          availableUntil
        }
      }
    `,
    {
      options: ({ id, soldTickets }) => {
        return {
          variables: { id, soldTickets },
        };
      },
    },
  ),
)(TicketListing);
