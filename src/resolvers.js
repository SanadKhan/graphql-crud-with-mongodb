// src/resolvers.js
// const mongoose = require('mongoose');




// const connect = async () => {
//     await mongoose.connect(db_url, { useNewUrlParser: true });
// }
const Post = require('./db/Post');

const resolvers = {
  Query: {
    // Implement your query resolvers here
    getAllPosts: async() => {
			try {
				console.log("inside get allpost");
				const result = await Post.find({});
				if(!result.length){
					throw new Error("No Posts Added!")
				}
				return result;
			} catch (error) {
				throw error;
			}
		},
		getPost: async(parent, args) => {
			try {
				const result = await Post.findById(args._id);
				if(!result){
					throw new Error("Post does not exists!")
				}
				return result
			} catch (error) {
				throw error
			}
		},
  },
  Mutation: {
    // Implement your mutation resolvers here
    createPost: async(parent, args ) => {		
			try { 
				const result = await Post.create({ 
					title: args.title, 
					content: args.content 
				});
				return result
			} catch (error) {
				throw error
			}
		},
		updatePost: async(parent, args) => {
			try {
				const result = await Post.findByIdAndUpdate(args._id, {
					title: args.title,
					content: args.content
				}, { new: true });
				if(!result){
					throw new Error("Post does not exists!")
				}
				return result
			} catch (error) {
				throw error
			}
		},
		deletePost: async(_, args) => {
			try {
				const result = await Post.findByIdAndDelete(args._id);
				if(!result) {
					return false
				}
				return true
			} catch (error) {
				throw error
			}
		},
  },
};

module.exports = resolvers;
