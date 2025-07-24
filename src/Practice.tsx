
import UIButton from "./Practice2";
// import {UIButton} from "uimaterialpro";
const IMAGE = "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80";
function Practice() {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gray-100">
  {/* <!-- Product Cards --> */}
  <div className="bg-white shadow-xl rounded-xl overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?shoes" className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">Nike Air Max</h3>
      <p className="text-gray-600 text-sm">Comfortable and stylish running shoes.</p>
      <div className="mt-2 font-bold text-blue-600">₹4,999</div>
    </div>
  </div>

  <div className="bg-white shadow-xl rounded-xl overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?laptop" className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">MacBook Pro</h3>
      <p className="text-gray-600 text-sm">Powerful laptop for developers and designers.</p>
      <div className="mt-2 font-bold text-blue-600">₹1,29,999</div>
    </div>
  </div>

  <div className="bg-white shadow-xl rounded-xl overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?watch" className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">Fossil Watch</h3>
      <p className="text-gray-600 text-sm">Luxury stainless steel wristwatch.</p>
      <div className="mt-2 font-bold text-blue-600">₹8,499</div>
    </div>
  </div>

  <div className="bg-white shadow-xl rounded-xl overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?camera" className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">Canon DSLR</h3>
      <p className="text-gray-600 text-sm">Capture stunning images with high resolution.</p>
      <div className="mt-2 font-bold text-blue-600">₹52,000</div>
    </div>
  </div>

  <div className="bg-white shadow-xl rounded-xl overflow-hidden">
    <img src="https://source.unsplash.com/400x300/?headphones" className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">Sony Headphones</h3>
      <p className="text-gray-600 text-sm">Noise-cancelling wireless headphones.</p>
      <div className="mt-2 font-bold text-blue-600">₹7,200</div>
    </div>
  </div>

  {/* <!-- Statistics Cards --> */}
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-2xl font-bold text-blue-600">3,250</h2>
    <p className="text-gray-500">Page Views</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-2xl font-bold text-green-500">1,200</h2>
    <p className="text-gray-500">New Users</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-2xl font-bold text-red-500">850</h2>
    <p className="text-gray-500">Orders Today</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-2xl font-bold text-purple-500">₹2,50,000</h2>
    <p className="text-gray-500">Revenue</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-2xl font-bold text-yellow-500">72%</h2>
    <p className="text-gray-500">Conversion Rate</p>
  </div>

  {/* <!-- Feature Cards --> */}
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
    <h3 className="text-lg font-bold">Fast Delivery</h3>
    <p className="text-gray-500 text-sm">Get your products delivered in under 24 hours.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
    <h3 className="text-lg font-bold">24/7 Support</h3>
    <p className="text-gray-500 text-sm">Our team is available anytime to help you.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
    <h3 className="text-lg font-bold">Secure Payment</h3>
    <p className="text-gray-500 text-sm">Your transactions are encrypted and safe.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
    <h3 className="text-lg font-bold">Easy Returns</h3>
    <p className="text-gray-500 text-sm">Return products within 7 days hassle-free.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
    <h3 className="text-lg font-bold">Best Quality</h3>
    <p className="text-gray-500 text-sm">We offer only the best quality curated products.</p>
  </div>
</div>

    <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-2">
              {/* <ShoppingBag className="h-5 w-5 text-primary" /> */}
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <span className="text-sm text-muted-foreground">
                {/* ({calculateItemsCount()} {calculateItemsCount() === 1 ? 'item' : 'items'}) */}
              </span>
            </div>
            <button
              // onClick={handleClose}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
            >
              {/* <X className="h-5 w-5" /> */}
            </button>
          </div>
    <div className="p-4 ">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gray-100">
  <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition">
    <img src="https://source.unsplash.com/400x300/?nature" className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Nature Card</h2>
      <p className="text-gray-600 text-sm">Explore the beauty of nature through stunning photography.</p>
    </div>
  </div>

  <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl p-6 shadow-lg">
    <h2 className="text-2xl font-semibold mb-2">Gradient Card</h2>
    <p className="text-sm">This card uses a beautiful gradient and stands out visually.</p>
  </div>

  <div className="bg-white rounded-xl shadow-md overflow-hidden flex items-center space-x-4 p-4">
    <img className="h-16 w-16 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" />
    <div>
      <div className="text-lg font-medium text-black">Sarah Doe</div>
      <p className="text-gray-500 text-sm">UI/UX Designer</p>
    </div>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <h2 className="text-3xl font-bold">1,024</h2>
    <p className="text-gray-600">Followers</p>
  </div>

  <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition">
    <h3 className="text-lg font-semibold">Upgrade Plan</h3>
    <p className="text-gray-500 text-sm mb-3">Unlock premium features by upgrading your plan.</p>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Upgrade</button>
  </div>

  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
    <p className="font-bold">Warning</p>
    <p>Something might need your attention.</p>
  </div>

  <div className="bg-white shadow rounded-lg p-4">
    <img src="https://source.unsplash.com/400x300/?tech" className="w-full h-32 object-cover rounded" />
    <h3 className="font-bold text-lg mt-2">Tech Gadget</h3>
    <p className="text-sm text-gray-600">Latest trending technology product with advanced features.</p>
    <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Buy Now</button>
  </div>

  <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
    <h3 className="text-xl font-bold mb-1">Tailwind CSS Tips</h3>
    <p className="text-sm text-gray-500 mb-2">Learn how to create beautiful UI components using Tailwind.</p>
    <a href="#" className="text-blue-600 hover:underline">Read More</a>
  </div>
</div>


    </div>
     <div className="p-8 bg-slate-50 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {/* 1 */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="font-bold text-xl mb-2">Default Card</h2>
        <p className="text-gray-700">Some quick demo text to build on the card title.</p>
      </div>
      {/* 2 */}
      <div className="bg-white p-6 rounded-lg border shadow">
        <h4 className="font-semibold text-lg mb-1">Card with Button</h4>
        <p className="mb-4">Description about the action on this card.</p>
        <button className="bg-blue-600 text-white rounded px-4 py-2">Action</button>
      </div>
      {/* 3 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <img className="w-full h-36 object-cover" src={IMAGE} alt="" />
        <div className="p-4">
          <h5 className="text-lg font-bold mb-2">Card with Image</h5>
          <p>Supporting text below image.</p>
        </div>
      </div>
      {/* 4 */}
      <div className="bg-white flex flex-col md:flex-row rounded shadow overflow-hidden">
        <img className="w-full md:w-48 h-36 object-cover" src={IMAGE} alt="horizontal" />
        <div className="p-4">
          <h4 className="font-medium text-lg">Horizontal Card</h4>
          <p className="text-gray-600">Horizontal layout content.</p>
        </div>
      </div>
      {/* 5 */}
      <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
        <img className="w-20 h-20 rounded-full mb-3 object-cover" src="https://randomuser.me/api/portraits/men/12.jpg" alt="" />
        <h4 className="font-bold">Mike Wayne</h4>
        <span className="text-sm text-slate-500">UI Designer</span>
      </div>
      
      {/* 10 */}
      <div className="relative bg-white rounded-lg shadow overflow-hidden">
        <img className="w-full h-36 object-cover" src={IMAGE} alt="" />
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded">SALE</div>
        <div className="p-4">
          <h5 className="text-lg font-bold">Product Sale</h5>
          <span className="text-purple-600 font-bold">$15.99</span>
        </div>
      </div>
      
      {/* 13 */}
      
    
      <div className="bg-white rounded-lg border shadow p-6">
        <h5 className="font-semibold mb-2">Pricing Card</h5>
        <div className="text-2xl font-bold text-blue-600 mb-1">$29/mo</div>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>✔ Unlimited access</li>
          <li>✔ Email support</li>
        </ul>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Choose</button>
      </div>
      
      <div className="bg-white rounded-lg shadow border flex flex-col">
        <div className="p-4 border-b">
          <span className="text-slate-400 text-xs">HEADER</span>
        </div>
        <div className="p-4 flex-1">
          <h4 className="mb-2 font-bold">Header & Footer Card</h4>
          <p className="text-gray-500">Show extra structure.</p>
        </div>
        <div className="p-4 border-t">
          <button className="text-xs rounded bg-slate-700 text-white px-3 py-2">Action</button>
        </div>
      </div>
      
      {/* 24 */}
    
      {/* 25 */}
      
      {/* 27 */}
      <div className="bg-white p-6 rounded shadow">
        <h4 className="font-bold mb-2">Text & Stats Card</h4>
        <div className="text-4xl font-bold text-green-600 mb-1">72%</div>
        <p className="text-gray-400 text-xs">Conversions this month</p>
      </div>
      {/* 28 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <img className="w-full h-32 object-cover" src={IMAGE} alt="" />
        <div className="p-4 flex-1 flex flex-col">
          <h5 className="font-bold mb-1">Tall Blog Card</h5>
          <p className="text-sm text-gray-600 flex-1">This card has a taller layout for more text preview content.</p>
        </div>
      </div>
      {/* 29 */}
      <div className="bg-white rounded-lg p-6 shadow-md flex items-center justify-between">
        <div>
          <h4 className="mb-1 font-bold">User Invite</h4>
          <span className="text-sm text-gray-400">Invite sent</span>
        </div>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-xs">Accepted</div>
      </div>
      {/* 30 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="font-bold mb-2">With Avatar & Link</h4>
        <div className="flex items-center mb-2">
          <img className="w-8 h-8 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/25.jpg" alt="" />
          <a href="#" className="text-blue-700 hover:underline text-sm">View profile</a>
        </div>
        <p className="text-gray-600 text-xs">See who’s on your project.</p>
      </div>
      {/* 31 */}
      <div className="bg-white rounded-lg shadow-md px-6 py-4 border border-slate-100">
        <h5 className="font-bold text-lg mb-2">Task Checklist</h5>
        <ul className="text-sm text-gray-600">
          <li><input type="checkbox" className="mr-2" /> Research</li>
          <li><input type="checkbox" className="mr-2" /> Design</li>
          <li><input type="checkbox" className="mr-2" /> Development</li>
        </ul>
      </div>
      {/* 32 */}
      
    </div>
    
    </>



  );
}
export default Practice;
