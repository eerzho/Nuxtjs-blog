<template>
<div class="admin-new-post-page">
  <section class="new-post-form">
    <AdminPostForm @submit="onSubmitted"/>
  </section>
</div>
</template>

<script>
import AdminPostForm from "../../../components/Admin/AdminPostForm";
export default {
  name: "index",
  layout: 'admin',
  components: {AdminPostForm},
  methods: {
    onSubmitted(postData) {

    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 769px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
