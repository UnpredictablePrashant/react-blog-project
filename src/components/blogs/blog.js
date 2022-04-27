
import '../home/home.css';
import {Link} from 'react-router-dom';

const Blogs = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10 ">
                        <Link to='/post' className='blogsBox'><div className='post-wrapper '>
                            <h3>Heading 1</h3>
                            <p>Description..</p>
                            <div className='post-footer'>
                                <span><i class="fa fa-thumbs-up" aria-hidden="true"></i> 256&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;React
                                </span>
                                
                                <span>by AuthorName  on 25th jan 2022</span>

                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10 ">
                    <Link to='' className='blogsBox'><div className='post-wrapper '>
                            <h3>Heading 1</h3>
                            <p>Description..</p>
                            <div className='post-footer'>
                                <span><i class="fa fa-thumbs-up" aria-hidden="true"></i> 256&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;React
                                </span>
                                
                                <span>by AuthorName  on 25th jan 2022</span>

                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10 ">
                    <Link to='' className='blogsBox'><div className='post-wrapper '>
                            <h3>Heading 1</h3>
                            <p>Description..</p>
                            <div className='post-footer'>
                                <span><i class="fa fa-thumbs-up" aria-hidden="true"></i> 256&nbsp;&nbsp;&nbsp;&nbsp;
                                <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;React
                                </span>
                                
                                <span>by AuthorName  on 25th jan 2022</span>

                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
            </div>

        </>
    )
}
export default Blogs