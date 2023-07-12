import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
export default function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nihil nesciunt unde mollitia officia quas sunt voluptatem nulla velit ipsum natus quae commodi ut rem pariatur ullam non cupiditate facilis debitis atque distinctio? Cumque incidunt, fugit magni iusto fugiat omnis est, laudantium, quasi rerum tempore id pariatur velit soluta quia.

        </p>
        <div className="gpt3__header-content__input">
          <input type='email' placeholder='Your Email Address'/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people}/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
     
      </div>
      <div className="gpt3__header-image">
      <img src={ai} alt='ai'/>
     </div>
      
    </div>
  )
}
