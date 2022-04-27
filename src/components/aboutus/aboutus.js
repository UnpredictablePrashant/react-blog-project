import './aboutus.css';

const Aboutus = () => {
    return (
        <>
        <div className="container container-padding">
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-3 bg-cl">
                    <img src="https://via.placeholder.com/300/09f/fff.png"/><br/><br/>
                    <strong> Jack Carter</strong><br/>
                    <strong>jack@carter.com</strong>
                </div>
                <div className="col-md-1"></div>
            </div>       
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                <div className='description-block'>
                        The App will automatically start recording any sounds it hears, but hones in specifically on bird song.
    In this instance, when the bird started singing, the yellow in the wavelengths become more pronounced. The yellow line below was where this bird was singing its head off.
                        </div>

                </div>
                <div className="col-md-2"></div>

                
            </div>    
        </div>
        </>
    )
}
export default Aboutus