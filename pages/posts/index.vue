<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '../../components/Posts/PostList';

export default {
  name: 'index',
  components: {PostList},
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
  head() {
    return {
      title: process.env.siteName + ' - All posts',
    }
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
