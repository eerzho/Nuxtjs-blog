import Vuex from 'vuex';
import Cookie from 'js-cookie';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,
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
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get('/posts.json')
          .then(data => {
            const postsArray = [];
            for (const key in data) {
              // res.data[key].id = key;
              postsArray.push({...data[key], id: key});
            }
            vuexContext.commit('setPosts', postsArray);
          }).catch(e => context.error(e));
      },
      addPost(vuexContext, post) {
        const createdPost = {...post, updatedDate: new Date()};
        return this.$axios.$post('/posts.json?auth=' + vuexContext.state.token, createdPost)
          .then(data => {
            vuexContext.commit('addPost', {...createdPost, id: data.name});
          }).catch(e => console.log(e));
        },
      editPost(vuexContext, editedPost) {
        return this.$axios.$put('/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
          .then(data => {
            vuexContext.commit('editPost', editedPost);
          }).catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      },
      authenticateUser(vuexContext, authData) {
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

        if (!authData.isLogin) {
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        }

        return this.$axios.$post(url + process.env.fbApiKey,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then(result => {
            vuexContext.commit('setToken', result.idToken);
            localStorage.setItem('token', result.idToken);
            localStorage.setItem('tokenExpiration', new Date().getTime() +  Number.parseInt(result.expiresIn) * 1000);
            Cookie.set('jwt', result.idToken);
            Cookie.set('expirationDate', new Date().getTime() +  Number.parseInt(result.expiresIn) * 1000);
          })
          .catch(e => console.log(e));
      },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split('=')[1];

          expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate='));
          if (!expirationDate) {
            return;
          }
          expirationDate = expirationDate.split('=')[1];
        } else {
          token = localStorage.getItem('token');
          expirationDate = localStorage.getItem('tokenExpiration');
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log("token cleared");
          vuexContext.commit('clearToken');
          return;
        }
        vuexContext.commit('setToken', token);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token ? state.token : null;
      },
    },
  });
};

export default createStore;
