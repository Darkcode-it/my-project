import "../component/style/Third.css"
function Third() {
    return (

        <div className="third-div">
            <img className="photo1-5" src="./public/img/h6.svg" alt="house"/>
            <div className="right-part5">
                <span className="title1-5 ">Contact us</span>
                <h3 className="text2-5">
                    Turpis facilisis tempor pulvinar in lobortis ornare magna.
                </h3>
                <div className="inputs3-5">
                    <input className="input5" type="text" placeholder="First Name"/>
                    <input className="input5" type="text" placeholder="Last Name"/>
                </div>
                <div className="inputs4-5">
                    <input className="input5" type="text" placeholder="Email Address"/>
                    <input className="input5" type="text" placeholder="Phone Number"/>
                </div>
                <input className="input2-5" type="text" placeholder="Description"/>
                <div className="section6-5">
                    <button className="btnThird " type="button">Send</button>
                    <h3 className="text6-5"><a href="">We don’t sell your email and spam</a></h3>
                </div>
            </div>
        </div>

    );
}

export default Third;