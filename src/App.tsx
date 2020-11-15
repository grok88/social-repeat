import React from 'react';
import './App.css';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                header
            </header>
            <nav className={'nav'}>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Users</a>
                </div>
                <div>
                    <a href="#">Setting</a>
                </div>
            </nav>
            <div className={'content'}>
               <div>
                   <img src="https://www.neuroarchitecting.org/background.jpg" alt="main_image" width={'100%'} height={'300px'}/>
               </div>
                <div>
                    ava + description
                </div>
                <div>
                    my Posts
                    <div>
                        Post
                    </div>
                </div>
                <div>
                    messages
                </div>
            </div>
        </div>
    );
}

export default App;
