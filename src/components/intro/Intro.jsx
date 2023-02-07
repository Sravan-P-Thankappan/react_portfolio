
import './Intro.css'
import Github from '../../images/github.png'
import LinkedIn from '../../images/linkedin.png'
import Instagram from '../../images/instagram.png'
import Vector1 from '../../images/Vector1.png'
import Vector2 from '../../images/Vector2.png'
import Boy from '../../images/boy.png'
import glassimoji from '../../images/glassesimoji.png'
import thumbup from '../../images/thumbup.png'
import Crown from '../../images/crown.png'
import FloatingDiv from '../floatingDiv/FloatingDiv'






const Intro = () => {

    return (
        <div className="intro">

            <div className="i-left">

                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Andrew Thomas</span>
                    <span>
                        Frontend Developer with high level of
                        experience in web designing and development,
                        producing the Quality work
                    </span>
                </div>

                <button className="button i-button">Hire me</button>

                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>

            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />

                <div>
                    <FloatingDiv crown = {Crown} text1={'Web'}  text2={'Developer'}/>
                </div>
            </div>



        </div>
    )
}

export default Intro