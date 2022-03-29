const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers = {
    Query: {
    me: async (parent, args, context)=> {
        if (context.user) {
            const UserData = await User.findOne({
                _id: context.user._id})
                .select('-__v -password')

                return UserData
        }
        throw new AuthenticationError("You aren't logged in!")
    }},
    Mutation: {
      addUser: async(parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { user, token };
      }, 
      loginUser: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthenticationError('Invalid login!')
        }
        const correctPassword = await user.isCorrectPassword(password)

        if (!correctPassword) {
            throw new AuthenticationError('Invalid login')
        }
        return user; 
      },
      saveBook: async (parent, { bookInfo}, context) => {
        if (context.user){
            const updateUser = await User.findByIdAndUpdate(
                {_id: context.user._id}, {$push: {savedBooks: bookInfo} }, { new: true}
            );
            return updateUser; 
        }
        throw new AuthenticationError('Please login!')
      },
      removeBook: async (parent, { books }, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                    { _id: context.user._id }, { $pull: {savedBooks: {books}}}, { new: true }
                );
                return updateUser;
            }
            throw new AuthenticationError('Please login!')
      }
    }
  };
  
  module.exports = resolvers;