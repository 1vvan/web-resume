import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';

const MainPage = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <main className="main">
                <div className="main__container _container">
                    <Hero/>
                </div>
        </main>
      </div>
    );
}

export default MainPage;
