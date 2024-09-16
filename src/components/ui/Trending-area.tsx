import './Trending-area.scss';
import { TrendingItem, TrendingItemSkeleton } from './Trending-item';

export const TrendingArea = () => {
    return (
        <div className="trendingArea">
            <h2>O que está acontecendo</h2>
            <div className="items">
                <TrendingItem label='#Teste' count={293} />
                <TrendingItem label='#Teste' count={293} />
                <TrendingItemSkeleton />
                <TrendingItemSkeleton />
            </div>
        </div>
    );
};