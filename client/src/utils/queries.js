// import gql from 'graphql-tag';

// export const GET_ME = gql`
// {
//     me {
//         _id
//         email
//         username
//         savedBooks {
//             authors
//             bookId
//             image description
//             title
//             link
//         }
//     }
// }
// `




import gql from 'graphql-tag';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image  
                title
                description
                link
            }
        }
    }
`;