<template>
<div class="admin-post-page">
  <section class="update-form">
    <AdminPostForm :post="loadedPost" />
  </section>
</div>
</template>

<script>
import AdminPostForm from "../../../components/Admin/AdminPostForm";
export default {
  name: "index",
  layout: 'admin',
  components: {AdminPostForm},
  data() {
    return {
      loadedPost: {
        author: 'Zhanbolat',
        title: 'My awesome Post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink: 'https://m.buro247.kz/thumb/750x500_5/local/images/buro/new/high-tech-low-life-ili-kiberpank.gif',
      }
    }
  }
}
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
