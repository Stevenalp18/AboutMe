import React from 'react'

export default function SocialButtons() {
    return(
        <div className="social-btns">
            <a 
                target="_blank"
                href="https://stevenalp18.github.io/">
                <button className="social-btns--website">
                    <img 
                    src="https://cdn-icons-png.flaticon.com/512/646/646094.png" />
                    Website
                </button>
            </a>
            <a 
                target="_blank"
                href="https://www.linkedin.com/in/stevenalp18/">
                    <button className="social-btns--linkedin">
                    <img 
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" />
                    LinkedIn
                </button>
            </a>
        </div>
    )    
}