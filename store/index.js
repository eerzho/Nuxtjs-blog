import Vuex from 'vuex';
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state:{
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxtjs-blog-55a0d-default-rtdb.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              // res.data[key].id = key;
              postsArray.push({ ...res.data[key], id:key });
            }
            vuexContext.commit('setPosts', postsArray);
          }).catch(e => context.error(e))
        // if (!process.client) {
        //   console.log(context.req.session);
        // }
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     vuexContext.commit('setPosts', [
        //         {
        //           id: '1',
        //           title: 'First Post',
        //           previewText: 'This is our first post!',
        //           thumbnail: 'https://m.buro247.kz/thumb/750x500_5/local/images/buro/new/high-tech-low-life-ili-kiberpank.gif'
        //         }, {
        //           id: '2',
        //           title: 'Second Post',
        //           previewText: 'This is our second post!',
        //           thumbnail: 'https://m.buro247.kz/thumb/750x500_5/local/images/buro/new/high-tech-low-life-ili-kiberpank.gif'
        //         }
        //       ])
        //     resolve()
        //   }, 1500)
        //   // reject(new Error());
        // })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
  })
}

export default createStore
