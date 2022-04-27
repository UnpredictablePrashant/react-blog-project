import React, {useEffect} from "react";
import { useParams } from "react-router";
import Img from '../../assets/images/pic5.jpg';
import './post.css';

const Post = () => {
    let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                                <h1>All about React</h1>
                                <span>Jack</span><br/>
                                <span>24th April 22</span>
                        
                            <img src={Img} className="postImg"></img>
                            
                            <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
            </div>
        </>
    );
}

export default Post;