<template>
    <div>
        <v-master/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import master from '@/components/layouts/master'

export default {
    components: {
        'v-master': master
    },
    data () {
        return {
            msg: 'navbar'
        }
    }
}
</script>

<style>
    /* body {
        background: #1f2847;
    } */
    .content {
        margin-top: 16px;
    }
</style>