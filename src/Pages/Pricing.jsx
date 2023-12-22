import Navbar from "../Shared/Navbar";

const Pricing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-blue-400 text-center mt-20 mb-16">Choose Your Task Nestle Plan</h2>
            <div className="flex flex-col items-center md:flex-row gap-7 mx-2 md:mx-20">
                <div className="border md:h-[600px] p-10 my-4">
                    <h2 className="text-3xl font-bold">Basic</h2>
                    <p className="mt-3">Core task management features for single users</p>
                    <h2 className="mt-4 text-3xl font-bold">Free</h2>
                    <p className="text-lg">Per User/Forever</p>
                    <button className="mt-4 btn text-blue-400 btn-outline">Get Started</button>
                    <h4 className="text-xl font-semibold mt-5 mb-2">Task management with: </h4>
                    <p>Up to 3 projects</p>
                    <p>Unlimited project members</p>
                    <p>Customizable project boards</p>
                    <p>Up to 5 collaborative notes.</p>
                </div>
                <div className="border md:h-[600px] p-10 my-4">
                    <h2 className="text-3xl font-bold">Pro</h2>
                    <p className="mt-3">Simple, collaborative task management for teams</p>
                    <h2 className="mt-4 text-3xl font-bold">$6</h2>
                    <p className="text-lg">Per User/Forever</p>   
                    <button className="mt-4 btn text-blue-400 btn-outline">Get Started</button>
                    <h4 className="text-xl font-semibold mt-5 mb-2">Includes Basic and: </h4>
                    <p>External Sharing</p>
                    <p>Unlimited Projects & Notes</p>
                    <p>Agenda</p>
                    <p>Unlimited integrations</p>
                    <p>Private projects</p>
                    <p>Automations</p>
                    <p>Statistics and reports</p>
                </div>
                <div className="border md:h-[600px] border-blue-500 p-10 my-4">
                    <h2 className="text-3xl font-bold text-blue-500">Business <div className="badge badge-secondary">Premium</div></h2>
                    <p className="mt-3">Extended collaboration features for teams</p>
                    <h2 className="mt-4 text-3xl font-bold">$12</h2>
                    <p className="text-lg">Per User/Forever</p>
                    <button className="mt-4 btn text-blue-400 btn-outline">Get Started</button>
                    <h4 className="text-xl font-semibold mt-5 mb-2">Includes Pro and: </h4>
                    <p>New Subtasks</p>
                    <p>Timeline</p>
                    <p>Roles and permissions</p>
                    <p>Custom fields</p>
                    <p>Security restrictions</p>
                    <p>priority email and phone support</p>
                </div>
                <div className="border md:h-[600px] p-10 my-4">
                    <h2 className="text-3xl font-bold">Enterprise</h2>
                    <p className="mt-3">For companies with specific requirements</p>
                    <h2 className="mt-4 text-3xl font-bold">Custom</h2>
                    <button className="mt-4 btn text-blue-400 btn-outline">Get Started</button>
                    <h4 className="text-xl font-semibold mt-5 mb-2">Includes Business and: </h4>
                    <p>Tailored pricing offer</p>
                    <p>Dedicated account manager</p>
                    <p>Personalized onboarding assistance</p>
                    <p>SAML Single Sign-On</p>
                </div>
                
            </div>
        </div>
    );
};

export default Pricing;