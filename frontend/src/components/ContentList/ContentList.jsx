import { AddTask } from "../AddTask/AddTask"
import { List } from "../List/List"
export const ContentList = ({subtitle}) => {
  return (
    <div className="bg-dark-subtle ">
      <div className="nav justify-content-center  ">
        <h2 className="fs-5 mt-5 fuente-elegante">{subtitle}</h2>
      </div>
      <AddTask  />
      <List texto={"prueba 1"} />
      <List texto={"prueba2"} />
      <List texto={"prueba3"} />
    </div>
  )
}
