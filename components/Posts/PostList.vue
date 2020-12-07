<template>
  <section class="post-list">
    <PostPreview id="1"
                 :is-admin="isAdmin"
                 title="Hello there!"
                 previewText="This is my first post!"
                 thumbnail="https://m.buro247.kz/thumb/750x500_5/local/images/buro/new/high-tech-low-life-ili-kiberpank.gif"/>
    <PostPreview id="2"
                 :is-admin="isAdmin"
                 title="Hello there - the second time!"
                 previewText="This is my second post!"
                 thumbnail="https://m.buro247.kz/thumb/750x500_5/local/images/buro/new/high-tech-low-life-ili-kiberpank.gif"/>
    <PostPreview id="3"
                 :is-admin="isAdmin"
                 title="Hi!"
                 previewText="This is my third post!"
                 thumbnail="https://m.buro247.kz/thumb/750x500_5/local/images/buro/new/high-tech-low-life-ili-kiberpank.gif"/>
  </section>
</template>

<script>
import PostPreview from "../../components/Posts/PostPreview";
export default {
name: "PostList",
  components: {PostPreview},
  props: {
  isAdmin: {
    type: Boolean,
    default: false,
  }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
