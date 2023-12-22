import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../Shared/Navbar';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xlk3eer', 'template_yrb0vmo', form.current, '7LHDRcM3zlRsAesTO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-28' id='contact'>
                <div className='flex flex-col-reverse mx-3 md:flex-row-reverse items-center justify-evenly'>
                    <div className='w-full md:w-1/3 mx-8'>
                        <form ref={form} onSubmit={sendEmail}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-black mt-6">Enter Your Name</span>
                                </div>
                                <input type="text" name='user_name' placeholder="Type here" className="input input-bordered rounded-md w-full bg-transparent border-[1px] border-black text-black focus:border-black" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-black mt-4">Enter Your Email</span>
                                </div>
                                <input type="text" name='user_email' placeholder="Type here" className="input input-bordered rounded-md w-full bg-transparent border-[1px] border-black text-black focus:border-black" />
                            </label>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text text-black mt-4">Your Message</span>
                                </div>
                                <textarea className="textarea textarea-bordered rounded-md h-24 bg-transparent border-[1px] border-black text-black focus:border-black" placeholder="Type Message" name='message'></textarea>
                            </label>
                            <input className='btn btn-outline text-cyan-500 mt-6' type="submit" value="Send Message" />
                        </form>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold text-gray-500'>Contact our Sales Team</h2>
                        <h1 className='text-black font-bold text-4xl mt-4'>Get in touch</h1>
                        <p className='mt-8 text-lg text-gray-500'>Tell us how we can help you succeed. We will: </p>
                        <p className='text-black mt-2'><IoCheckmarkDoneCircleSharp />Help increase your productivity.</p>
                        <p className='text-black mt-2'><IoCheckmarkDoneCircleSharp />Create a price and license plan best suited to your needs.</p>
                        <p className='text-black mt-2'><IoCheckmarkDoneCircleSharp />Introduce MeisterTask and explain its value to your business.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;