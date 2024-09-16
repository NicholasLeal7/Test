import { tweet } from '@/data/tweet';
import { TweetItem } from '../tweet/Tweet-item';
import './HomeFeed.scss';

export const HomeFeed = () => {
    return (
        <div>
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
        </div>
    );
};