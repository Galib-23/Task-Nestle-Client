import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data, startDate);
        //send the dtata to the server
        const task = {
            title: data.title,
            description: data.description,
            deadline: startDate,
            priority: data.priority,
            createdBy: user?.email,
            status: "todo"
        }
        const taskRes = await axiosPublic.post('/tasks', task);
        if (taskRes.data.insertedId) {
            Swal.fire("Item added successfully!");
            reset();
        }
    }
    return (
        <div>
            <h2 className="text-center text-4xl font-bold">Add Task</h2>
            <div className="mx-2 md:mx-20 lg:mx-44">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full mt-6">
                        <div className="label">
                            <span className="label-text">Title</span>
                        </div>
                        <input {...register('title')} type="text" placeholder="Title" className="input input-bordered w-full" required />
                    </label>
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description Here" required></textarea>
                    </label>
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Choose Deadline</span>
                            </div>
                            <DatePicker className="border rounded-xl border-gray-300 p-3" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Set Priority</span>
                            </div>
                            <select defaultValue="default" {...register("priority")} className="select select-bordered w-full" required>
                                <option disabled value="default">Select</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>



                    <input className="btn text-blue-500 btn-outline mt-7" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddTask;