import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
const Review = () => {
    return (
        <div className='mt-32'>
            <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">What Our Users Say !</h2>
            <p className='text-center mb-12'>
            A unified media platform for connecting all company employees can be a powerful tool <br /> for fostering collaboration, improving communication, and nurturing a cohesive work environment. <br /> However, successful implementation requires careful planning, robust infrastructure, <br /> and ongoing support to maximize its benefits for the organization.
            </p>
            <div className='flex flex-col items-center'>
                <div className='md:w-1/2 flex flex-col items-center'>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 md:w-20 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src={user1} />
                            </div>
                        </div>
                        <div className="chat-bubble md:w-96">The best task management system I have seen. Very smooth and easy to use. Many features to improve your productivity by many percen</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 md:w-20 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src={user2} />
                            </div>
                        </div>
                        <div className="chat-bubble  md:w-96">It was a great experience with task nestle. I could not have imagined my life without the help of task nestle. It has boosted my productivity a lot. I was worried about managing the employees of my company . Then I found this website totally a life saver.</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 md:w-20 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src={user3} />
                            </div>
                        </div>
                        <div className="chat-bubble  md:w-96">Amazing!! Without any doubt. I would say this is the best task management site. It can also be used as a todo list. I am so much greatfull to Task Nestle.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;