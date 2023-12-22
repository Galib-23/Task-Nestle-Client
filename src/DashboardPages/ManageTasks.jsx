import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ManageTasks = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tasks');
            return res.data;
        }
    })
    const myTasks = tasks?.filter(task => task.createdBy === user?.email);
    console.log("my tasks : ", myTasks);

    const [myTask, setMyTask] = useState(myTasks);

    const [todos, setTodos] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const fTodos = myTask?.filter(task => task.status === "todo");
        const fOngoing = myTask?.filter(task => task.status === "ongoing");
        const fCompleted = myTask?.filter(task => task.status === "completed");

        setTodos(fTodos);
        setOngoing(fOngoing);
        setCompleted(fCompleted);

    }, [myTask]);

    const statuses = ["todo", "ongoing", "completed"];

    return (
        <div className="flex gap-16">
            {statuses.map((status, index) =>
                <Section
                    key={index}
                    status={status}
                    myTask={myTask}
                    setMyTask={setMyTask}
                    todos={todos}
                    ongoing={ongoing}
                    completed={completed}></Section>
            )}
        </div>
    );
};

export default ManageTasks;


const Section = ({ status, myTask, setMyTask, todos, ongoing, completed }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = "todo";
    let bg = "bg-slate-500"
    let tasksToMap = todos;

    if (status === "ongoing") {
        text = "Ongoing"
        bg = "bg-purple-500"
        tasksToMap = ongoing
    }
    if (status === "completed") {
        text = "Completed"
        bg = "bg-green-500"
        tasksToMap = completed
    }

    const addItemToSection = (id) => {
        console.log("droped", id);
        setMyTask((prev) => {
            const mTasks = prev?.map(t => {
                if(t._id === id){
                    return {...t, status: status}
                }

                return t;
            });
            return mTasks;
        })
    }

    return <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}>
        <Header text={text} bg={bg} count={tasksToMap?.length}></Header>
        {
            tasksToMap?.length > 0 && tasksToMap.map(task => <Task key={task._id} myTask={myTask} setMyTask={setMyTask} task={task}></Task>)
        }
    </div>
}

const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
            {text} <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">{count}</div>
        </div>
    );
}

const Task = ({ task, myTask, setMyTask }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const handleRemove = (id) => {
        console.log(id);

        //TODL:::::::::::

        // const fTask = myTask?.filter(t => t._id !== id);
        // setMyTask(fTask);
    }
    return (
        <div ref={drag} className={`relative p-2 mt-5 shadow-md rounded-lg cursor-grab ${isDragging ? "opacity-25" : "opacity-100"}`}>
            <div className="border-[px] border-black rounded-lg p-5">
                <h2 className="text-blue-500 text-xl font-semibold">{task.title}</h2>
                <p className="mt-2">{task.description}</p>
                <p className="text-xs mt-2">Deadline: {task.deadline}</p>
                <button onClick={() => handleRemove(task._id)} className="btn btn-xs mt-3 btn-outline text-red-500">Remove</button>
            </div>
        </div>
    );
}