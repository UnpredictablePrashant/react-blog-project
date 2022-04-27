import { useState } from 'react';
import './home.css'
const Home = () => {
    const [subscribe , setSubscribe] = useState('Subscribe');
    const [subCount , setSubCount] = useState(100300)

    const subscribers = () => {
        setSubscribe('Subscribed')
        setSubCount(subCount + 1)
    }
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className="col-md-2 col-sm-2 col-xs-12">
            <div className="sidebar-wrapper">
                <div className="user-img"></div>
                <div className="user-details">
                    <strong><i class="fa fa-user" aria-hidden="true"></i> Jack Carter</strong>
                    <strong><i class="fa fa-envelope" aria-hidden="true"></i> hero@gmail.com</strong>
                    <strong><i class="fa fa-phone-square" aria-hidden="true"></i> +91-1234567890</strong>
                    <h3> <i class="fa fa-users" aria-hidden="true"></i> {subCount} <br />  Subscribers</h3>
                </div>
            </div>
        </div>
        <div className="col-md-7 col-sm-7 col-xs-12">
            <div className='blog-wrapper'>
               
                <div className='post-wrapper'>
                    <h3>Heading 1</h3>
                    <p>Description..</p>
                    <div className='post-footer'>
                        <span><i class="fa fa-thumbs-up" aria-hidden="true"></i> 256</span>
                        <span>by AuthorName  on 25th jan 2022</span>
                        
                    </div>
                </div>

                <div className='post-wrapper'>
                    <h3>Heading 1</h3>
                    <p>Description..</p>
                    <div className='post-footer'>
                        <span><i class="fa fa-thumbs-up" aria-hidden="true"></i> 256</span>
                        <span>by AuthorName  on 25th jan 2022</span>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
            <div className='subs-wrapper'>
                <button className='btn btn-danger' onClick={subscribers}>{subscribe}</button>
                <h2>Recent Subscribers</h2>
                <div className='subs'>
                    <img src='https://placeimg.com/640/480/any' />
                    James
                </div>
                <div className='subs'>
                    <img src='https://placeimg.com/640/480/any' />
                    James
                </div>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Home;