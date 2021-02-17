<template>
    <div :class="{'open': showForm}" class="tweet-form mt-3">
        <div class="container">
            <form class="mb-5" @submit.prevent="sendTweet">
                <input v-model.trim="username" class="form-control mb-2" placeholder="Tu nombre" type="text">

                <textarea v-model.trim="tweet" class="form-control mb-2" placeholder="Escribe tu mensaje" rows="3"></textarea>

                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary px-5 text-right" type="submit">Enviar Tweet</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { saveTweetApi } from '@/api/tweet';


export default {
    name: 'TweetForm',
    props: {
        showForm: false,
        reloadTweets: Function,
        openCloseForm: Function,
    },
    setup( props ) {
        const username = ref( null );
        const tweet = ref( null );

        const sendTweet = () => {
            if ( tweet.value && username.value ) {
                saveTweetApi( tweet.value, username.value );

                username.value = null;
                tweet.value = null;

                props.reloadTweets();
                props.openCloseForm();
            }

        };

        return { sendTweet, username, tweet };
    }
};
</script>

<style lang="scss" scoped>

.tweet-form {
    max-height: 0;
    overflow: hidden;
    transition: all .5s;

    &.open {
        max-height: 250px;
    }
}

</style>
