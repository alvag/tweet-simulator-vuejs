<template>
    <div class="container">
        <h1 class="text-center mb-4">Lista de Tweets</h1>

        <p v-if="!tweets.length">No hay tweets</p>

        <div v-for="tweet in tweets" :key="tweet.id" class="tweet">
            <p class="tweet__title">{{ tweet.username }}</p>
            <p class="tweet__message">{{ tweet.tweet }}</p>
            <span>{{ formatDate( tweet.createdAt ) }}</span>

            <icon-close
                @click="deleteItem(tweet.id)"
                class="tweet__close"
                height="20" width="20"
                role="button"/>
        </div>

    </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/es';
import { IconClose } from '@/components/icons';
import { deleteTweet } from '@/api/tweet';


export default {
    name: 'TweetList',
    components: { IconClose },
    props: {
        tweets: Array,
        reloadTweets: Function
    },
    setup( props ) {

        const formatDate = ( date ) => {
            return moment( date ).fromNow();
        };

        const deleteItem = ( id ) => {
            deleteTweet( id );
            props.reloadTweets();
        };

        return { formatDate, deleteItem };
    }
};
</script>

<style lang="scss" scoped>
.tweet {
    position: relative;
    border: 1px solid #CCCCCC;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin: 0;
    }

    &__close {
        &:hover {
            color: red;
        }
    }

    &__title {
        position: absolute;
        top: -12px;
        left: 10px;
        background-color: #FFFFFF;
        padding: 0 10px;
        font-weight: bold;
    }

    &__message {
        color: gray;
    }

    span {
        position: absolute;
        right: 10px;
        bottom: -9px;
        font-size: 12px;
        color: gray;
        background-color: #FFFFFF;
        padding: 0 20px;
        border: 1px solid #CCCCCC;
    }
}
</style>
