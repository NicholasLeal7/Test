"use client"

import { User } from '@/types/user';
import './Recommendation-item.scss';
import Link from 'next/link';
import { Button } from './Button';
import { useState } from 'react';

type Props = {
    user: User
};
export const RecommendationItem = ({ user }: Props) => {
    const [following, setFollowing] = useState(false);

    const handleFollowButton = () => {
        setFollowing(true);
    };

    return (
        <div className='recommendationItem'>
            <div className="img">
                <Link
                    href={`/${user.slug}`}
                >
                    <img src={user.avatar} alt={user.name} />
                </Link>
            </div>
            <div className="info">
                <Link
                    href={`/${user.slug}`}
                >
                    {user.name}
                </Link>
                <div>@{user.slug}</div>
            </div>
            <div className="follow">
                {!following && <Button
                    label="Seguir"
                    onClick={handleFollowButton}
                    size="sm"
                />}
            </div>
        </div>
    );
};

export const RecommendationItemSkeleton = () => {
    return (
        <div className='recommendationItemSkeleton'>
            <div className='img-skeleton'></div>
            <div className='info-skeleton'>
                <div className='label'></div>
                <div className='count'></div>
            </div>
        </div>
    );
};