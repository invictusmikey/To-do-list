
export const AddTask = () => {
  return (
    <div>
        <div className="nav justify-content-center mt-5">
            <input className="w-50 rounded-2 " type="text" name="tasks" placeholder="Añade la tarea a realizar" />
            <button type="button" className="btn btn-outline-success ms-3">Add+</button>
        </div>
    </div>
  )
}
