import React from 'react';
// import Github from '../../app/assets/images/github-light.png';
// import Li from '../../app/assets/images/linkedin.png';

export default function Footer() {
    return (
        <div className='footer'>
            <a href="https://github.com/jayfang88/eventlite">
                <img src={window.githubURL} alt='github' id='github' />
            </a>
            <a href="https://linkedin.com/in/justinjfang">
                <img src={window.linkedinURL} alt='linkedin' id='linkedin' />
            </a>
        </div>
    )
};