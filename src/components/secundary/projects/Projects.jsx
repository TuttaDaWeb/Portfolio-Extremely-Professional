import Image1 from './../../../assets/projects/project1.png'
import Image2 from './../../../assets/projects/project2.png'
import './projects.css'

function Projects(){

    const projects = [
        {
            image: Image1,
            description: "That was one of my first projects, I tried to make a login scrre using HTML, CSS, JS and Bootstrap",
            name: 'Login Screen',
            tools: ['HTML', 'CSS', 'JS', 'Bootstrap']
        },
        {
            image: Image2,
            description: "In this Project, I tried to develop a Anime-styled Backdropfilter-css Login Screen, however, I used React and CS to develop it completely",
            name: 'Anime-style Login Screen',
            tools: ['React.js', 'CSS']
        }
    ]

    return(
        <div className="container_projects">
            {projects.map((map, index)=>(<div className='project' key={index}>
                <img src={map.image} alt={index} />
                <h1>{map.name}</h1>
                <div className="desc_">
                    <p>{map.description}</p>
                </div>
                <div className="tools" key={index}>
                    {map.tools.map((tool, index)=>(
                        <h2>{tool}</h2>
                    ))}
                </div>
            </div>))}
        </div>
    )
}

export default Projects;