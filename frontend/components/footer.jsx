import React from 'react';
// import Github from '../../app/assets/images/github-light.png';
// import Li from '../../app/assets/images/linkedin.png';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='personal-links-container'>
                <a href="https://github.com/jayfang88/eventlite">
                    <img src={window.githubURL} alt='github' className='personal-link' />
                </a>
                <a href="https://linkedin.com/in/justinjfang">
                    <img src={window.linkedinURL} alt='linkedin' className='personal-link' />
                </a>
            </div>
        </div>
    )
};