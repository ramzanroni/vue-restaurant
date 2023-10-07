<template>
    <Header></Header>
<h1>Content Loader</h1>
<content-loader viewBox="0 0 250 110">
    <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
    <rect x="0" y="20" rx="3" ry="3" width="120" height="20" />
    <rect x="130" y="20" rx="3" ry="3" width="120" height="20" />
    <rect x="0" y="45" rx="3" ry="3" width="250" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="120" height="20" />
    <rect x="130" y="60" rx="3" ry="3" width="120" height="20" />

    <!-- <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
    <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
    <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
    <rect x="20" y="100" rx="3" ry="3" width="80" height="10" /> -->
  </content-loader>
</template>
<script>
import Header from './Header.vue';
import { ContentLoader } from 'vue-content-loader'
export default{
    name:'ContentLoaderRe.vue',
    components:{
        Header,
        ContentLoader
    }
}
</script>