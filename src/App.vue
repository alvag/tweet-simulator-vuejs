<template>
    <Menu :openCloseForm="openCloseForm" :showForm="showForm"/>
    <TweetForm :showForm="showForm"
               :openCloseForm="openCloseForm"
               :reloadTweets="reloadTweets"/>

    <TweetList :tweets="tweets" :reloadTweets="reloadTweets"/>

</template>

<script>

import { ref } from 'vue';
import Menu from '@/components/Menu';
import TweetForm from '@/components/TweetForm';
import useFormTweet from '@/hooks/useFormTweet';
import TweetList from '@/components/TweetList';
import { getTweets } from '@/api/tweet';


export default {
    name: 'App',
    components: { TweetList, TweetForm, Menu },
    setup() {
        const tweets = ref( getTweets() );

        const reloadTweets = () => {
            tweets.value = getTweets();
        };

        return { ...useFormTweet(), tweets, reloadTweets };
    }
};
</script>

<style lang="scss">
@import "./scss/main";
</style>
