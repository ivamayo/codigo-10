import { useRef } from "react";

function TaskForm() {
   
    const inputElement = useRef();
    function inputChange(event){
        console.log(event.key);
        if(event.key==="Enter"){
            addButton();
        }
    }
    function addButton(){
        if(inputElement.current.value==="") return;
        console.log(inputElement.current.value);
        inputElement.current.value = "";
    }
    return (
        <div className="card p-3 shadow">
            <div class="input-group">
                <input 
                    id="input_task" 
                    type="text" 
                    className="form-control" 
                    placeholder="My new task..."
                    ref={inputElement}
                    onKeyPress={inputChange}
                    />
                <button 
                    className="btn btn-outline-primary" 
                    type="button" 
                    id="button-addon2" 
                    onClick={addButton}>
                        Add
                    </button>
            </div>   
        </div>

    );
}
export default TaskForm;