import { TWEETS } from '@/utils/constants';

export function saveTweetApi( tweet, username ) {
	const newTweet = {
		id: new Date().getTime(),
		tweet,
		username,
		createdAt: new Date()
	};

	const tweets = getTweets();
	tweets.unshift( newTweet );

	localStorage.setItem( TWEETS, JSON.stringify( tweets ) );
}

export function getTweets() {
	return JSON.parse( localStorage.getItem( TWEETS ) ) || [];
}

export function deleteTweet( id ) {
	let tweets = getTweets();
	tweets = tweets.filter( tweet => tweet.id !== id );
	localStorage.setItem( TWEETS, JSON.stringify( tweets ) );
}
