import Image1 from './../../../assets/projects/project1.png'
import Image2 from './../../../assets/projects/project2.png'
import Image3 from './../../../assets/projects/project3.png'
import './projects.css'

function Projects(){

    const projects = [
        {
            image: Image1,
            description: "That was one of my first projects, I tried to make a login scrre using HTML, CSS, JS and Bootstrap",
            name: 'Login Screen',
            tools: ['HTML', 'CSS', 'JS', 'Bootstrap'],
            link: 'https://github.com/TuttaDaWeb/Sistema-de-Login'
        },
        {
            image: Image2,
            description: "In this Project, I tried to develop a Anime-styled Backdropfilter-css Login Screen, however, I used React and CS to develop it completely",
            name: 'Anime-style Login Screen',
            tools: ['React.js', 'CSS'],
            link: "none"
        },
        {
            image: Image3,
            description: "Thais project was create to make a customer happy, I got a customer a few months ago, He wanted me to develop a landing page for his DayTrade E-book",
            name: 'Crypto E-book Landing Page',
            tools: ['React.js', 'CSS'],
            link: 'https://github.com/TuttaDaWeb/My-First-Job'
        }
    ]

    return(
        <div className="container_projects">
            {projects.map((map, index)=>(<div className='project' key={index}>
                <img src={map.image} alt={index} />
                    <div className="details_p">
                        <h1>{map.name}</h1>
                        <div className="desc_">
                            <p>{map.description}</p>
                        </div>
                        <div className="tools" key={index}>
                            {map.tools.map((tool)=>(
                                <h2>{tool}</h2>
                            ))}
                        </div>
                        <button className="btn-see-the-code">
                            see the code
                        </button>
                </div>
            </div>))}
        </div>
    )
}

export default Projects;