import "../../src/component/style/menu.css"
export default  function Menu() {
    return (

        <div className="all">
            <div className="menu">
            <img src="" alt="" className="icon"/>
            <ol className="lists">
                <li className="list item1"><a>Home</a></li>
                <li className="list item2"><a>About</a></li>
                <li className="list item3"><a>MyProject</a></li>
                <li className="list item4"><a>Content</a></li>
            </ol>
            </div>


            <div className="title">
                <div className="subtitle">
                    <div>
                        <h1 className="text1">A home is build with love and dreams</h1>
                        <h2 className="text2">Real state farm that makes your dreams true</h2>
                     <div className="btn-Header">
                     <button className="btn1" type="button"> Projects</button>
                     <button className="btn2" type="button">Contact us</button>
                     </div>
                    </div>
                </div>
                <img className="right-img" src="./public/img/h1.png" alt="building"/>
            </div>


        </div>


    )
        ;
}

