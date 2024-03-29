import {useState} from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please fill the Task Field')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="add-form"> 
        <div className="form-control">
            <label>Task</label>
            <input 
            type="text" 
            placeholder="Add Task" 
            value={text}
            onChange={(e)=> setText(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label> Day & Time</label>
            <input 
            type="text" 
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            />
        </div>
        <input value="save" type="button" className="btn btn-block" onClick={onSubmit}/>
    </form>
  )
}

export default AddTask
