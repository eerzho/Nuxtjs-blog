import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      apiUrl: 'https://wb-blog.test',
      title: 'Wb Blog',
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxtjs-blog-55a0d-default-rtdb.firebaseio.com/posts.json').then(res => {
          const postsArray = [];
          for (const key in res.data) {
            // res.data[key].id = key;
            postsArray.push({...res.data[key], id: key});
          }
          vuexContext.commit('setPosts', postsArray);
        }).catch(e => context.error(e));
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };
        return axios
        .post('https://nuxtjs-blog-55a0d-default-rtdb.firebaseio.com/posts.json', createdPost)
        .then(result => {
          vuexContext.commit('addPost', {...createdPost, id: result.data.name});
        }).catch(e => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return axios
        .put('https://nuxtjs-blog-55a0d-default-rtdb.firebaseio.com/posts/' +
            editedPost.id +
            '.json', editedPost)
        .then(res => {
          vuexContext.commit('editPost', editedPost);
        }).catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
