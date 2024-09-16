"use client";

import { user } from '@/data/user';
import './Tweet-post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { Button } from '../ui/Button';

export const TweetPost = () => {

    const handleClickUpload = () => {

    };

    const handlePostClick = () => {

    };

    return (
        <div className="tweet">

            <img className='pfp' src={user.avatar} alt={user.name} />

            <div className="content">

                <div
                    className="type-content"
                    contentEditable
                    role="textbox"
                    data-placeholder="O que está acontecendo?"
                >

                </div>

                <div className="btn-content">
                    <div className="photo-upload" onClick={handleClickUpload}>
                        <FontAwesomeIcon icon={faImage} />
                    </div>
                    <div className="send">
                        <Button
                            label="Postar"
                            size='md'
                            onClick={handlePostClick}
                        />
                    </div>
                </div>

            </div>

        </div>
    );
};