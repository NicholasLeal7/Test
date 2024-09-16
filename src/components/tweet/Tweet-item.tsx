"use client";

import { Tweet } from '@/types/tweet';
import './Tweet-item.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { formatRelativeTime } from '@/utils/format-relative';

type Props = {
    tweet: Tweet,
    hideComments?: boolean
};
export const TweetItem = ({ tweet, hideComments }: Props) => {
    const [liked, setLiked] = useState(tweet.liked);

    const handleLikeButton = () => {
        setLiked(!liked);
    };

    return (
        <div className='tweetItem'>

            <Link
                href={`/${tweet.user.slug}`}
            >
                <img className="pfp" src={tweet.user.avatar} alt={tweet.user.name} />
            </Link>

            <div className="content">

                <div className="user-info">
                    <div className="name">
                        <Link
                            href={`/${tweet.user.slug}`}
                        >
                            {tweet.user.name}
                        </Link>
                    </div>
                    <div className="slug">@{tweet.user.slug} - {formatRelativeTime(tweet.dataPost).replace('em', 'há')}</div>
                </div>
                <div className="tweet-body">{tweet.body}</div>
                {tweet.image &&
                    <div className="tweet-image">
                        <img src={tweet.image} alt="" />
                    </div>
                }
                <div className="tweet-btn">

                    {!hideComments &&
                        <div className="comment">
                            <Link
                                href={`/tweet/${tweet.id}`}
                            >
                                <div className="content">
                                    <FontAwesomeIcon className='icon' icon={faComment} />
                                    <div className="txt">{tweet.commentCount}</div>
                                </div>
                            </Link>
                        </div>
                    }

                    <div className="redirect">
                        <div className="content">
                            <FontAwesomeIcon className='icon' icon={faRetweet} />
                            <div className="txt">{tweet.retweetCount}</div>
                        </div>
                    </div>

                    <div className="like">
                        <div onClick={handleLikeButton} className={`content ${liked ? 'liked' : ''}`}>
                            <FontAwesomeIcon className='icon' icon={liked ? faHeartFilled : faHeart} />
                            <div className="txt">{tweet.likeCount}</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};