import { TweetItem } from '@/components/tweet/Tweet-item';
import './page.scss';
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { tweet } from '@/data/tweet';
import { TweetPost } from '@/components/tweet/Tweet-post';

export default function Page() {
    return (
        <div>
            <GeneralHeader backHref="/">
                <div className="tweet-back">Voltar</div>
            </GeneralHeader>
            <div className="tweet-target">
                <TweetItem tweet={tweet} />

                <div className="tweet-answer">
                    <TweetPost />
                </div>

                <TweetItem tweet={tweet} hideComments />
                <TweetItem tweet={tweet} hideComments />
                <TweetItem tweet={tweet} hideComments />
            </div>
        </div>
    )
}