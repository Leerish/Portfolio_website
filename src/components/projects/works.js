
import { projectsData } from './Data';

import WorkItems from './WorkItems';

import './projects.css'

const Works = () => {

    
    return(
        <div>
            
            <div className="work__container container grid">
                {projectsData.map((item) => {
                    return <WorkItems item={item} key={item.id}/>
                })}
            </div>
        </div>
        
    )
}

export default Works;
