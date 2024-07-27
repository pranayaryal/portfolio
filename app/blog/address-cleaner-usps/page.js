'use client'
import CodeViolet from "@/components/CodeViolet";
import { CodeSky, CodeAmber } from "@/components/CodeColors";
import StepLargeCustom from '@/components/StepLargeCustom'
import AddressForm from "@/components/AddressForm";


const AddressCleanerUsps = () => {
	return (
		<div>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className='w-40 h-8'
				viewBox="0 0 390 47">
				<polygon fill="#FFFFFF" points="66.3,47.2 76.3,0 10,0 0,47.2 " />
				<path fill="#333366" d="M49.3,9.9c7.7,1.8,7.9,3.7,7.9,3.7c5,0,6.3,0,7.2,0.9c2.9,2.7-2,9.3-2,9.3C61.8,24.2,6.6,45.8,6.6,45.8h58.1
	L74,1.9H11.6C11.6,1.9,48.4,9.7,49.3,9.9"/>
				<path fill="#333366" d="M55,16.3c-0.8,0.4-3.2,0.8-4,0.9c-0.8,0.1-1.2,0.1-1.2,0.3c0,0.3,1.1,0.2,1.5,0.2c1.8,0,8.9-0.5,10.6-0.2
	c1.3,0.2-0.2,2.8-0.6,4.4c-0.1,0.6,0.3,0.3,0.5,0c0.5-0.8,1.9-3.4,2-4.4c0.2-2-1.2-2.3-3.6-2.3h-3.7c-0.3,0-0.4,0.1-0.5,0.3
	C55.7,15.8,55.2,16.1,55,16.3"/>
				<path fill="#333366" d="M32,31.1L2.3,45.8l7.2-33.7h0h30c0.5,0,16.1,0,16.4,3.1h-27l4.2,12.8c4.8-2.3,16.6-7.1,23.7-7.4
	c3-0.1,4.2,0.4,3.6,0.8c-0.4,0.2-3.3,0.6-5.6,1.2c-4,1-4.2,1-8.4,2.4C41.7,26.6,37.8,28.4,32,31.1"/>
				<path fill="#333366" d="M94.2,46.8c-11.6,0-18.5-4.6-16.2-14.9c3.8-17.8,6.3-29.7,6.3-29.7h9.7c0,0-5.9,27.4-5.7,26.8
	c-1.5,6.8,0,10.9,7.4,10.9c7.1,0,10.7-4.1,12.2-10.9c0.9-3.9,5.7-26.8,5.7-26.8h9.7c-6.5,29.7,0,0-6.4,29.7
	C114.5,42.1,105.7,46.8,94.2,46.8"/>
				<path fill="#333366" d="M175.1,29.3c-1.5,0-4.7-0.2-6.3-0.5l1.2-6.3c1.2,0.1,2.8,0.3,4.3,0.3c6.6,0,9-4.5,9.5-7.2
	c1-4.8-1.4-6.5-4.9-6.5H171L163.2,46h-9.7l9.3-43.8h21c9.5,0,10.6,8.3,9.4,13.8C191.4,24.2,183.7,29.3,175.1,29.3"/>
				<path fill="#333366" d="M154.6,9.2h-10.3c-5.3,0-7.6,1.1-8.1,3.2c-1.5,7,17.4,12.5,15.6,23.3c-1,6-6.2,10.3-18.3,10.3h-14.8l1.5-7H132
	c3.7,0,8.2,0.2,9-3.5c1.4-6.3-17.2-12.5-15.8-23c0.9-6.3,6.5-10.3,17.8-10.3h13L154.6,9.2z"/>
				<path fill="#333366" d="M226.7,9.2h-10.3c-5.3,0-7.6,1.1-8.1,3.2c-1.5,7,17.4,12.5,15.6,23.3c-1,6-6.2,10.3-18.3,10.3h-14.8l1.5-7h11.9
	c3.7,0,8.2,0.2,9-3.5c1.4-6.3-17.2-12.5-15.8-23c0.9-6.3,6.5-10.3,17.8-10.3h13L226.7,9.2z"/>
				<path fill="#333366" d="M230,38.2c-2.1,0-3.9,1.7-3.9,3.9c0,2.1,1.7,3.9,3.9,3.9c2.1,0,3.9-1.7,3.9-3.9C233.9,39.9,232.1,38.2,230,38.2
	"/>
				<polygon fill='#333366' points="375.2,2 365.7,45.9 357.6,45.9 364.8,13.3 345.5,45.9 337.2,45.9 332.6,15.4 325.9,45.9 317.9,45.9 
	327.2,2 338.8,2 343.7,34.3 362.5,2 "/>
				<path fill="#333366" d="M255.6,46.8c-5.8,0-11-1.3-14.8-4.1c-3.8-2.8-6.1-7.2-6.1-13.1c0-1.8,0.2-3.7,0.7-5.8
	C238.6,8.1,251.7,1.1,265,1.1c3.2,0,6.7,0.4,9.8,1l0.7,0.1l-1.6,7.1l-0.6-0.1c-2.2-0.2-3.7-0.4-5.7-0.4c-1.8,0-3.5,0.1-5.4,0.3
	c-4.7,0.7-6.1,1.5-8.7,3.2c-3.9,2.4-7.3,6.5-8.5,11.9c-0.3,1.4-0.5,2.7-0.5,3.9c0,3.9,1.6,6.6,4.4,8.4c2.7,1.8,6.7,2.8,11.2,2.8
	c2.7,0,4-0.1,6.6-0.4l1-0.1l-1.5,6.9l-0.5,0.1C262.1,46.4,259.3,46.8,255.6,46.8L255.6,46.8z"/>
				<path fill="#333366" d="M299.8,1.9c-13.4,0-24.5,7-27.7,22.3c-2.6,12.3,4.9,22.4,18.2,22.4c13.5,0,24.3-6.7,27.7-22.4
	C320.6,11.4,313,1.9,299.8,1.9 M309,24.3c-2.1,11-8.7,15.7-17,15.7c-8.2,0-12.7-7.1-11.2-15.7c2-10.8,8.8-15.6,17-15.6
	C306,8.6,310.7,15.3,309,24.3"/>
				<path fill="#333366" d="M380,7.5c0-2.6,2-4.6,4.5-4.6c2.5,0,4.5,2,4.5,4.6c0,2.7-2,4.7-4.5,4.7C381.9,12.2,380,10.2,380,7.5 M379,7.5
	c0,3.1,2.5,5.5,5.5,5.5c3,0,5.5-2.4,5.5-5.5c0-3.1-2.5-5.4-5.5-5.4C381.5,2,379,4.4,379,7.5 M382.4,10.7h1V8h1.1l1.7,2.8h1.1
	l-1.8-2.8c1-0.1,1.7-0.6,1.7-1.7c0-1.2-0.7-1.8-2.2-1.8h-2.5V10.7 M383.4,5.1h1.3c0.7,0,1.4,0.1,1.4,1c0,1-0.8,1.1-1.7,1.1h-1V5.1z"
				/>
			</svg>
			<h1 className='text-3xl font-semibold mt-8'>Using the USPS Address Cleaner</h1>
			<p className="text-xl mt-8">Live Demo</p>
			<AddressForm />
			<h1 className="tracking-tight mt-12 leading-6 font-bold text-lg md:text-4xl">
				What is Address Cleaning?
			</h1>
			<div className='leading-7'>
				<p className='mt-8'>Address Cleaning is a process to standardize addresses to make them more deliverable.  It helps to improve the accuracy and readability of addresses.  Typos can be fixed.</p>
				<p className="mt-4">The benefits could include improved mail delivery, better targeting for marketing.</p>
				<p className="mt-4">So,</p>
			</div>
			<div className='flex mt-4 space-x-16'>
				<div>
					<p>328 west main street</p>
					<p>Pittsburgh</p>
					<p>OH 70202</p>
				</div>
				<div>
					<p>Becomes</p>
				</div>
				<div>
					<p>328 W Main St</p>
					<p>Pittsburgh</p>
					<p>OH 70202</p>
				</div>
			</div>
			<h1 className="tracking-tight mt-20 leading-6 font-bold text-lg md:text-4xl">
				How Do I Clean Up Or Scrub Address Data?
			</h1>
			<div className='leading-7'>
				<p className='mt-8'>The USPS offers a service which software developers can use. This can be useful in e-commerce websites where accurate delivery is needed.  The USPS doesn't allow this service to be used to clean addresses in bulk.  Addresses can only be cleaned one at a time.  Developers or the business will need to open a business account and register their application.</p>
				<p className='mt-4'>The application needs to be registered in the USPS developer portal after which an api key and api secret will be granted.</p>
				<p className='mt-4'>Here is how a developer may do it (Using Next.js):</p>
				<p className='mt-4'>You will first need to get the token using your credentials and making a POST request to the USPS oauth2 api endpoint</p>
				<p className='mt-4'>You will then use the token to make another GET request to clean the address</p>
			</div>
			<div className="flex mt-4 text-white rounded-md text-xs md:text-sm">
				<div className='hidden md:block bg-vs-background w-[45px] py-2 px-2'>
				</div>
				<div className='bg-code-background py-4 px-6 md:px-8 relative'>
					<p className='text-xs absolute right-2 top-1'>usps.js</p>
					<CodeViolet>{`export default `}</CodeViolet><CodeSky>async function</CodeSky> <CodeAmber>handler</CodeAmber><span>{`(req, res) {`}</span>
					<p className='ml-4 mt-2'><CodeViolet>const url = </CodeViolet><CodeAmber>'https://api.usps.com/oauth2/v3/token'</CodeAmber></p>
					<p className='ml-5 mt-1'><CodeSky>{`const headers = {`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeAmber>{`'Content-Type': 'application/json'`}</CodeAmber></p>
					<p className='ml-5 mt-1'><CodeSky>{`}`}</CodeSky></p>
					<p className='ml-5 mt-1'><CodeSky>{`const data = {`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`grant_type = "client_credentials"`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`client_id: process.env.NEXT_PUBLIC_USPS_KEY,`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`client_secret: process.env.NEXT_PUBLIC_USPS_SECRET,`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`scope: "addresses',`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`state: "'`}</CodeSky></p>
					<p className='ml-5 mt-1'><CodeSky>{`}`}</CodeSky></p>
					<p className='ml-5 mt-1 text-gray-400'>{`// Get the token from USPS`}</p>
					<p className='ml-5 mt-1'><CodeSky>{`const uspsTkn = await fetch(url, {`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`method: "POST",`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`headers = {`}</CodeSky></p>
					<p className='ml-10 mt-1'><CodeAmber>{`'Content-Type': 'application/json'`}</CodeAmber></p>
					<p className='ml-8 mt-1'><CodeSky>{`},`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`body = JSON.stringify(data)`}</CodeSky></p>
					<p className='ml-6 mt-1'><CodeSky>{`});`}</CodeSky></p>
					<p className='ml-5 mt-3'><CodeSky>{`const resp = await uspsTkn.json()`}</CodeSky></p>
					<p className='ml-5 mt-3'><CodeSky>{`const { access_token } = resp`}</CodeSky></p>
					<p className='ml-5 mt-3'><CodeSky>{`const params = req.body`}</CodeSky></p>
					<p className='ml-5 mt-3'><CodeSky>{`const queryString = Object.keys(params)`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{'.map(key => {encodeURIComponent(key)}={encodeURIComponent(params[key])})'}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`.join('&');`}</CodeSky></p>
					<p className='ml-4 mt-3'><CodeViolet>const addrBaseUrl = </CodeViolet><CodeAmber>'https://api.usps.com/addresses/v3/address'</CodeAmber></p>
					<p className='ml-4 mt-3'><CodeViolet>const addressUrl = </CodeViolet><CodeAmber>{'`${addrBaseUrl}?${queryString}`'}</CodeAmber></p>

					<p className='ml-5 mt-3 text-gray-400'>{`// Make a GET request with the Bearer token`}</p>
					<p className='ml-5 mt-1'><CodeSky>{`const respUspsAdd = await fetch(addressUrl, {`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`method: "GET",`}</CodeSky></p>
					<p className='ml-8 mt-1'><CodeSky>{`headers = {`}</CodeSky></p>
					<p className='ml-10 mt-1'><CodeAmber>{`'Content-Type': 'application/json'`}</CodeAmber></p>
					<p className='ml-10 mt-1'><CodeAmber>{"'Authorization': `Bearer ${access_token}`"}</CodeAmber></p>
					<p className='ml-8 mt-1'><CodeSky>{`},`}</CodeSky></p>
					<p className='ml-6 mt-1'><CodeSky>{`});`}</CodeSky></p>
					<p className='ml-5 mt-3'><CodeSky>{`const respUspsAddJson = await respUspsAdd.json()`}</CodeSky></p>
					<p className='ml-5 mt-3'><CodeSky>{`res.status(200).json({respUspsAddJson});`}</CodeSky></p>

					<p className='ml-4'>{`}`}</p>
					<span>{`}`}</span>
				</div>
			</div>


		</div>
	);
}


export default AddressCleanerUsps
