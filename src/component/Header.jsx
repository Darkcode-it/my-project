import "../component/style/Header.css"
export default function Header() {
    return (
        <div className="header-div">
            <img className="left-part-2" src="./public/img/h2.svg" alt="building"/>
            <div className="Right-part2">
                <h1 className="title-2">Award winning real estate company in Dubai</h1>
                <h2 className="title2-2">
                    Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
                    scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis
                    ornare magna.
                </h2>
                <div className="titles3-2">
                    <h3 className="title3-2">Previous projects</h3>
                    <h3 className="title3-2">years experience</h3>
                    <h3 className="title3-2">Ongoing projects</h3>
                </div>
                <div className="numbers4-2">
                    <h2 className="number4-2">34+</h2>
                    <h2 className="number4-2">20y</h2>
                    <h2 className="number4-2">12</h2>
                </div>
            </div>
        </div>
    );
}