import { ContentList } from "../../components/ContentList/ContentList"
import { Title } from "../../components/Title/Title"
export const Home = () => {
    return (
        <div className="d-flex flex-column justify-content-center">
            <Title children={"To-do list"} />
            <ContentList subtitle={"¡Manten al dia tus tareas y se productivo!"}/>
            
                
            
        </div>
  )
}
