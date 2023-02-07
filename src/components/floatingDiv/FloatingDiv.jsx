
import './FloatingDiv.css'
const FloatingDiv = ({ crown, text1, text2 }) => {

    return (
        <div className="floatingdiv">
            <img src={crown} alt="" />
            <div>

                <span>
                    {text1}
                    <br />
                    {text2}
                </span>

            </div>

        </div>
    )

}


export default FloatingDiv