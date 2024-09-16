import { TweetItem } from '@/components/tweet/Tweet-item';
import './page.scss';
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { SearchInput } from "@/components/ui/Search-input";
import { redirect } from "next/navigation"
import { tweet } from '@/data/tweet';

type Props = {
    searchParams: {
        q: string | undefined
    }
}
export default function Page({ searchParams }: Props) {
    if (!searchParams.q) {
        redirect('/');
    }

    return (
        <div>
            <GeneralHeader backHref="/">
                <SearchInput defaultValue={searchParams.q} />
            </GeneralHeader>

            <div className="search-tweets">
                <TweetItem tweet={tweet}></TweetItem>
                <TweetItem tweet={tweet}></TweetItem>
                <TweetItem tweet={tweet}></TweetItem>
                <TweetItem tweet={tweet}></TweetItem>
            </div>
        </div>
    )
}