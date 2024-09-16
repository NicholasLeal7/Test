import { user } from '@/data/user';
import './Recommendation-area.scss';
import { RecommendationItem, RecommendationItemSkeleton } from './Recommendation-item';
import { TrendingItem, TrendingItemSkeleton } from './Trending-item';

export const RecommendationArea = () => {
    return (
        <div className="recommendationArea">
            <h2>Quem seguir</h2>
            <div className="items">
                <RecommendationItem user={user} />
                <RecommendationItemSkeleton />
            </div>
        </div>
    );
};