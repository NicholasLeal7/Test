import { HomeHeader } from "@/components/home/Header";
import { HomeFeed } from "@/components/home/HomeFeed";
import { TweetPost } from "@/components/tweet/Tweet-post";

export default function Page() {
    return (
        <div>
            <HomeHeader />
            <TweetPost />
            <HomeFeed />
        </div>
    );
}