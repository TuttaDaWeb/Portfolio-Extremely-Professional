import Pic from './../assets/profilepicture.jpg'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import './main_page.css'

function MainPage(){

    const el = useRef(null)
    const desc = "I am a 17-year-old aspiring developer with experience in web technologies and a focus on React. I previously managed an online gaming news website, gaining hands-on experience in content management and digital communication. I am passionate about creating efficient and user-friendly interfaces and continuously improving my skills in front-end development."
    const name = "Arthur Vieira de Oliveira"

    const linkRedirect = (name) => {
        if(name === 'instagram'){
            window.location.href = "https://www.instagram.com/tuttadocs/"
        }
        if(name === 'github'){
            window.location.href = "https://github.com/TuttaDaWeb"
        }
    }

    return(
        <>
        <div className="container">
            <img src={Pic} alt="" />
            <div className="details">
                <h1>Front-End Programmer</h1>
                <h2>{name}</h2>
                <div className="desc">
                    <h4>{desc}</h4>
                    <div className="icons">
                        <div className="instagram" onClick={()=>linkRedirect('instagram')}><i class="ri-instagram-line"></i></div>
                        <div className="github" onClick={()=>linkRedirect('github')}><i class="ri-github-line"></i></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainPage;