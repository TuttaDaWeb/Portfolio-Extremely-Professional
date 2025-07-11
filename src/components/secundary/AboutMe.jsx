import Picture from './../../assets/profilepicture.jpeg'
import './AboutMe.css'

function About_Me(){

    const name = 'Arthur Vieira de Oliveira'
    const country = 'Brazil'

    return(
        <>
        <div className="container_about">
            <div className="img_pic">
                <img src={Picture} alt="MyPhoto" />
            </div>
            <div className="desc_about">
                <h5>Name: <span style={{
                    color: 'blue'
                }}>{name}</span></h5>
                <h6>Country: <span>{country}</span></h6>
                <h6>I am a Brazilian aspiring developer based in São Paulo, passionate about technology and driven by a deep curiosity to master programming languages such as C++ and React Native. Living with Asperger’s Syndrome has significantly shaped my perspective, fostering a high level of focus, detail orientation, and responsiveness in everything I pursue. I bring a structured approach to problem-solving and value clarity and precision in communication. Moreover, I am committed to continuous learning, always seeking opportunities to expand my skill set and contribute meaningfully to innovative projects. I believe that adaptability and persistence are key to personal and professional growth, thereby guiding my journey in the tech field.</h6>
            </div>
        </div>
        </>
    )
}

export default About_Me;