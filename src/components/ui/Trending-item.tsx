import './Trending-item.scss';
import Link from "next/link";

type Props = {
    label: string,
    count: number
}
export const TrendingItem = ({ label, count }: Props) => {
    return (
        <Link
            className='trendingItem'
            href={`/search?q=${encodeURIComponent(label)}`}
        >
            <div className="label">{label}</div>
            <div className="count">{count} posts</div>
        </Link>
    );
};

export const TrendingItemSkeleton = () => {
    return (
        <div className="trendingItemSkeleton">
            <div className="label"></div>
            <div className="count"></div>
        </div>
    );
};