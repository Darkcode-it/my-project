import data from "./Data.json"
import "./style/Second.css"
function Second() {
    return (

        <div className="second-div">
            <h1 className="title1-4">Few smiles and comment</h1>
            <h3 className="text2-4">
                Turpis facilisis tempor pulvinar in lobortis ornare magna.
            </h3>
            <div className="section3-4">
            <img className="photo4-4" src={data.data[5].logo}  />
                {/* <img className="photo4-4" src="./public/img/person.svg" alt="person"/> */}
                <div className="part4right-">
                <img className="iconSecond" src={data.data[6].logo}  />
                    {/* <img className="iconSecond" src="./public/img/11.svg" alt="comma"/> */}
                    <h1 className="title4-4">Dream house isn’t dream anymore</h1>
                    <h3 className="text4-4">
                        Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
                        scelerisque. Ipsum, turpis facilisis tempor pulvinar.</h3>
                    <h2 className="name4-4">Brooklyn Simmons</h2>
                    <h3 className="artist4-4">Artist</h3>
                </div>
            </div>
        </div>


    );
}

export default Second;