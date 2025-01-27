
import "././style/First.css/"
function First() {
    return (
        <div className="first-div">
            <h1 className="title1-1">Ongoing projects</h1>
            <div className="section2-3">
                <h3 className="text2-3">
                    Turpis facilisis tempor pulvinar in lobortis ornare magna.
                </h3>
                <img className="arrow2-3" src="./public/img/<-.svg" alt="left arrow"/>
                <img className="arrow2-3" src="./public/img/->.svg" alt="right arrow"/>
            </div>
            <div className="section3-3 ">
                {/*<img src={process.env.PUBLIC_URL + '/' + data.logo} className="image" alt={data.title}/>*/}
                <img className="imgFirst " src="./public/img/h3.svg" alt="vintage villa"/>
                <img className="imgFirst " src="./public/img/h4.svg" alt="vintage villa"/>
                <img className="imgFirst " src="./public/img/h5.svg" alt="vintage villa"/>
            </div>
        </div>
    );
}

export default First;