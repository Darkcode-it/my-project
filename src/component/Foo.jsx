import "./style/Foo.css"
import data from "./Data.json"

function Foo() {
    return (
        <div className="footer">

            <div className="item">
                <h1>LUGAR</h1>
                <div className="imgLocation">
                <img src={data.data[8].logo}  />

                    {/* <img src="./public/img/location.svg" alt=""/> */}
                    <p >2118 Thornridge Cir. Dubai,UAE35624</p>

                </div>

                <div className="Phone">
                <img src={data.data[9].logo}  />
                {/* <img src={data.data[9].logo}  /> */}
                    {/* <img src="./public/img/phone.svg" alt=""/> */}
                    <p>+33 415 65356 - 9</p>
                </div>

                <div className="email">
                    <img src="./public/img/email.svg" alt=""/>
                    <p>contact@lugar.com</p>
                </div>

                <p className=" text-emerald-100  copy">Copyright @ 2022 Lugar Inc.</p>
            </div>


            <div className="item">
                <ol>
                    <h1>Quick links</h1>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
                </ol>
            </div>


            <div className="item">
                <ol>
                <h1>Legal Links</h1>
                <li>Terms</li>
                <li>Conition</li>
                <li>Policy</li>
                </ol>

            </div>


            <div className="item">
                <ol>
                <h1>xSocial media</h1>
                <li>Facebook</li>
                <li>X</li>
                <li>You Tub</li>
                <li>Linkdin</li>
                </ol>
            </div>


        </div>
    );
}

export default Foo;