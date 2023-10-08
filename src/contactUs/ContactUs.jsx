import Navbar from "../pages/shared/Navbar.jsx/Navbar";


const ContactUs = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="bg-gradient-to-b from-opacity-40 to-opacity-40 bg-no-repeat bg-cover min-h-screen flex flex-col items-center justify-center -mt-24">
                <div className="rounded-lg p-8 w-2/5 shadow-lg backdrop-blur-md bg-opacity-85 bg-white">
                    <h2 className="text-3xl font-semibold text-center mb-6">Contact Form</h2>
                    <form className="flex flex-col gap-4">
                        <div className="relative">
                            <input
                                className="input-field"
                                type="text"
                                name="full_name"
                                required
                            />
                            <label className="input-label" htmlFor="full_name">
                                Full Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                className="input-field"
                                type="email"
                                name="email"
                                required
                            />
                            <label className="input-label" htmlFor="email">
                                Email
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                className="input-field"
                                type="number"
                                name="phone_number"
                                required
                            />
                            <label className="input-label" htmlFor="phone_number">
                                Phone Number
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                className="textarea-field"
                                maxLength="420"
                                rows="3"
                                name="address"
                                required
                            ></textarea>
                            <label className="textarea-label" htmlFor="address">
                                Address
                            </label>
                        </div>

                        <div className="flex justify-center">
                            <button className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactUs;