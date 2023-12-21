import Navbar from "../Shared/Navbar";
import cloud from '../assets/cloud.png';

import security from '../assets/security.png';
import scale from '../assets/scale.png';
import analytics from '../assets/analytics.png';
import compliance from '../assets/compliance.png';
import Footer from "../Shared/Footer";

const Enterprise = () => {
    return (
        <div className="">
            <Navbar></Navbar>

            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${cloud})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Secure, reliable development at scale</h1>
                            <p className="mb-5">Jira Cloud Enterprise unlocks advanced security, compliance, scale, and support for your teams.</p>
                            <button className="btn btn-primary text-white">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-28 flex flex-col items-center mb-9">
                <p className="text-xs">Enterprise Level Features</p>
                <h2 className="mt-3 text-4xl font-bold text-blue-600">We Work For Every Enterprise</h2>
                <p className="mt-3 mb-12 text-lg">Customization and control for large companies</p>
                <div className="w-1/2">
                    <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Security" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div className="hero h-96">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src={security} className="max-w-sm rounded-lg" />
                                    <div>
                                        <h1 className="text-5xl font-bold">Advanced security and controls</h1>
                                        <p className="py-6">Add an extra layer of protection with advanced security controls to protect your most critical work.</p>
                                        <button className="btn btn-outline btn-sm text-blue-400">Learn more </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Scale" checked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div className="hero h-96">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src={scale} className="max-w-sm rounded-lg" />
                                    <div>
                                        <h1 className="text-5xl font-bold">Multiple instances for global scale</h1>
                                        <p className="py-6">Scale confidently without compromising on reliability and performance. Jira Cloud Enterprise supports up to 35,000 users— plus all of their custom fields, issues, and workflows.</p>
                                        <button className="btn btn-outline btn-sm text-blue-400">Learn more </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Analytics" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div className="hero h-96">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src={analytics} className="max-w-sm rounded-lg" />
                                    <div>
                                        <h1 className="text-5xl font-bold">Intuitive analytics for faster decisions</h1>
                                        <p className="py-6">Power insight-driven decision-making by analyzing the impact of your development cycle, spotting blockers, and connecting data across tools with pre-built DevOps dashboards.</p>
                                        <button className="btn btn-outline btn-sm text-blue-400">Learn more </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Compliance" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div className="hero h-96">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src={compliance} className="max-w-sm rounded-lg" />
                                    <div>
                                        <h1 className="text-5xl font-bold">Advanced compliance for enterprises</h1>
                                        <p className="py-6">Stay ahead of the curve and meet global, national, and industry-specific compliance obligations and regulatory requirements such as HIPAA and EBA.</p>
                                        <button className="btn btn-outline btn-sm text-blue-400">Learn more </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Enterprise;