import './aboutus.css';

const Aboutus = () => {
    return (
        <>
        <div className="container container-padding">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 bg-cl">
                    <img src="https://via.placeholder.com/300/09f/fff.png"/><br/><br/>
                    <strong> Max</strong><br/>
                    <strong>Max@min.com</strong>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className=' col-md-10 description-block'>
                        The App will automatically start recording any sounds it hears, but hones in specifically on bird song.
    In this instance, when the bird started singing, the yellow in the wavelengths become more pronounced. The yellow line below was where this bird was singing its head off.
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>           
        </div>
        </>
    )
}
export default Aboutus