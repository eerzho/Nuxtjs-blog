import Vuex from 'vuex'

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
        // if (!process.client) {
        //   console.log(context.req.session);
        // }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
                {
                  id: '1',
                  title: 'First Post',
                  previewText: 'This is our first post!',
                  thumbnail: 'https://m.buro247.kz/thumb/750x500_5/local/images/buro/new/high-tech-low-life-ili-kiberpank.gif'
                }, {
                  id: '2',
                  title: 'Second Post',
                  previewText: 'This is our second post!',
                  thumbnail: 'https://m.buro247.kz/thumb/750x500_5/local/images/buro/new/high-tech-low-life-ili-kiberpank.gif'
                }
              ])
            resolve()
          }, 1500)
          // reject(new Error());
        })
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