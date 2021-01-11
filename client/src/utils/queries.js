import gql from 'graphql-tag';

// query for QUERY_ME
export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks
        }
    }
`;