

const Subscribe = () => {
  return (
<section className="text-gray-600 body-font relative  bg-white rounded-lg">
  <div className="container px-5 py-24 max-sm:py-5 mx-auto flex sm:flex-nowrap flex-wrap gap-20">
   
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto   w-full md:py-8 mt-8 max-sm:mt-0  md:mt-0">
      <h2 className="text-gray-900 text-[52px] mb-1 font-medium title-font max-sm:text-[40px]">Contact <span className="text-coral-red">us</span></h2>
     
      <div className="relative mb-4">
        {/* <label for="name" className="leading-7 text-sm text-gray-600">Name</label> */}
        <input placeholder="Name" required type="text" id="name" name="name" className="w-full bg-white border-black  border-b-2 border-0 focus:border-coral-red focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        {/* <label for="email" className="leading-7 text-sm text-gray-600">Email</label> */}
        <input type="email" id="email" required name="email" placeholder="Email" className="mt-5 border-black  border-b-2 border-0 w-full bg-white    focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        {/* <label for="message" className="leading-7 text-sm text-gray-600">Message</label> */}
        <textarea id="message" placeholder="Message" required cols={30} rows={6} name="message" className="w-full bg-white border-black  border-b-2 border-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-coral-red border-0 py-2 px-6 mt-10 focus:outline-none  rounded-xl text-lg">Button</button>

    </div>
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.075404652772!2d75.91507067481575!3d22.725438527352274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2c12c2657c9%3A0xd4310cf787023f91!2s92%2C%20Sanchar%20Nagar%20Ext%2C%20Sanchar%20Nagar%20Main%2C%20Indore%2C%20Madhya%20Pradesh%20452016!5e0!3m2!1sen!2sin!4v1708492950060!5m2!1sen!2sin" width="100%" height="100%" className="absolute inset-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full max-sm:w-full ">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">92, Sanchar Nagar, Indore</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">customercare@<br className="hidden max-sm:block"/>mahashreedairies.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">9522444444, <br /> 09926550022</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Subscribe