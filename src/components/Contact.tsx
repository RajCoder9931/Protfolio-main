import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const validate = () => {
    let tempErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;
    if (!formData.name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1000);
    }
  };
  return <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              {submitSuccess && <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                  Thank you for your message! I'll get back to you soon.
                </div>}
              <div className="mb-4">
                <label htmlFor="name" className="block text-slate-700 mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.name ? 'border-red-500' : 'border-slate-300'}`} placeholder="Your Name" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-slate-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.email ? 'border-red-500' : 'border-slate-300'}`} placeholder="your.email@example.com" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-700 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.message ? 'border-red-500' : 'border-slate-300'}`} placeholder="Your message..."></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className={`w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <p className="text-slate-600 mb-6">
                Have a project in mind or want to discuss potential
                opportunities? Feel free to reach out using the contact form or
                through any of the channels below.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-medium">tiwariraviraj50@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium">Govt Labour Colony Phagwara 144401 Punjab India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Connect With Me:</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/RajCoder9931" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-slate-900 text-white rounded-full flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/ravi-raj-tiwari-7770a724b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://x.com/raviraj_6771" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a  href="https://leetcode.com/u/rajcoder9931/"  target="_blank"  rel="noopener noreferrer"  className="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors">
                  <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo"/>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;