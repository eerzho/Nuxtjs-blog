<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '../../../components/Admin/AdminPostForm';
import axios from 'axios';

export default {
  name: 'index',
  layout: 'admin',
  components: {AdminPostForm},
  asyncData(context) {
    return axios.get(process.env.baseUrl + '/posts/' + context.params.postId + '.json').then(res => {
      return {
        loadedPost: {...res.data, id: context.params.postId},
      };
    }).catch(e => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin');
      })
    },
  },
  head() {
    return {
      title: process.env.siteName + ' - ' + this.loadedPost.title,
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 769px) {
  .update-form {
    width: 500px;
  }
}
</style>
