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
				<p className='mt-8'>The USPS offers a service which software developers can use. This can be useful in e-commerce websites where accurate delivery is needed. Developers or the business will need to open a business account and register their application.</p>
				<p className='mt-4'>Note that the USPS doesn't allow this service to be used to clean addresses in bulk</p>
				<p className='mt-4'>The application needs to be registered in the USPS developer portal after which an api key and api secret will be granted.</p>
				<p className='mt-4'>Here is how a developer may do it:</p>
				<div className='flex space-x-8 items-center mt-4'>
					<div>
						<div className='bg-dot-color w-2 h-2 rounded-full'></div>
					</div>
					<div>
						<p>Make a POST request to the USPS oauth2 api endpoint to get the token</p>
					</div>
				</div>
				<div className='flex space-x-8 items-center mt-4'>
					<div>
						<div className='bg-dot-color w-2 h-2 rounded-full'></div>
					</div>
					<div>
						<p>Then make a GET request to the /v3/address endpoint using the above token</p>
					</div>
				</div>
			</div>
			<div className="flex mt-8 text-white rounded-md text-xs md:text-sm">
				<div className='hidden md:flex md:flex-col space-y-8 bg-vs-background w-[45px] py-5 px-3'>
					<div>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.5002 0H8.50024L7.00024 1.5V6H2.50024L1.00024 7.5V22.5699L2.50024 24H14.5702L16.0002 22.5699V18H20.7002L22.0002 16.5699V4.5L17.5002 0ZM17.5002 2.12L19.8802 4.5H17.5002V2.12ZM14.5002 22.5H2.50024V7.5H7.00024V16.5699L8.50024 18H14.5002V22.5ZM20.5002 16.5H8.50024V1.5H16.0002V6H20.5002V16.5Z" fill="white" />
						</svg>
					</div>
					<div>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.2502 1.02546e-06C13.6607 -0.000791296 12.1048 0.457574 10.7697 1.32007C9.43447 2.18256 8.37681 3.4124 7.724 4.8617C7.07118 6.31099 6.85102 7.91801 7.08984 9.4895C7.32867 11.061 8.01628 12.5301 9.07019 13.72L1.00024 22.88L2.12024 23.88L10.1703 14.76C11.2057 15.5693 12.4195 16.1196 13.7106 16.365C15.0017 16.6104 16.3328 16.5437 17.5929 16.1707C18.853 15.7976 20.0058 15.1288 20.9552 14.2201C21.9046 13.3114 22.6232 12.1891 23.0511 10.9465C23.4791 9.70396 23.6041 8.37703 23.4155 7.07642C23.227 5.77581 22.7304 4.53915 21.9673 3.46924C21.2041 2.39933 20.1964 1.52711 19.0281 0.925416C17.8597 0.323719 16.5644 0.00991516 15.2502 0.0100108V1.02546e-06ZM15.2502 15C13.9152 15 12.6102 14.6041 11.5001 13.8624C10.3901 13.1207 9.52493 12.0665 9.01404 10.8331C8.50315 9.59973 8.36943 8.24248 8.62988 6.93311C8.89033 5.62373 9.53329 4.42106 10.4773 3.47705C11.4213 2.53305 12.624 1.89009 13.9333 1.62964C15.2427 1.36919 16.6 1.5029 17.8334 2.01379C19.0668 2.52469 20.121 3.38985 20.8627 4.49988C21.6044 5.60991 22.0002 6.91498 22.0002 8.25C22.0002 10.0402 21.2891 11.7571 20.0232 13.023C18.7573 14.2888 17.0405 15 15.2502 15Z" fill="white" />
						</svg>

					</div>
					<div className='text-gray-400'>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21.007 8.22168C21.0105 7.52792 20.8207 6.84689 20.4591 6.25485C20.0974 5.66281 19.578 5.18315 18.9592 4.86957C18.3403 4.556 17.6463 4.42091 16.9551 4.47941C16.2637 4.53793 15.6025 4.78773 15.045 5.20085C14.4877 5.61397 14.0563 6.17409 13.7993 6.8185C13.5424 7.4629 13.4697 8.16613 13.5898 8.84944C13.7099 9.53274 14.0177 10.1692 14.4789 10.6874C14.9402 11.2056 15.5367 11.5852 16.2015 11.7836C15.956 12.2824 15.5763 12.703 15.1049 12.9979C14.6336 13.2929 14.0894 13.4505 13.5334 13.4532H10.544C9.43726 13.4571 8.37163 13.8727 7.55451 14.6191V7.39809C8.46184 7.21288 9.26808 6.69737 9.81692 5.95151C10.3658 5.20565 10.6181 4.28256 10.525 3.36121C10.4319 2.43987 10.0001 1.5859 9.31316 0.964873C8.62624 0.343845 7.73319 0 6.80716 0C5.88112 0 4.98807 0.343845 4.30114 0.964873C3.61422 1.5859 3.18236 2.43987 3.08928 3.36121C2.9962 4.28256 3.24855 5.20565 3.79739 5.95151C4.34623 6.69737 5.15247 7.21288 6.0598 7.39809V16.5159C5.15418 16.6891 4.34323 17.1877 3.77993 17.9176C3.21663 18.6476 2.93992 19.5585 3.00197 20.4785C3.06403 21.3984 3.46057 22.2639 4.1168 22.9115C4.77303 23.5592 5.6436 23.9444 6.56427 23.9944C7.48496 24.0445 8.39211 23.7558 9.11464 23.183C9.83718 22.6102 10.3251 21.7928 10.4865 20.885C10.6478 19.9771 10.4714 19.0417 9.99048 18.255C9.50957 17.4683 8.75741 16.8848 7.87588 16.6145C8.12176 16.1162 8.50167 15.6963 8.97296 15.4019C9.44426 15.1074 9.98827 14.9503 10.544 14.9479H13.5334C14.4661 14.9436 15.3742 14.6486 16.1313 14.1039C16.8884 13.5592 17.4568 12.792 17.7575 11.9091C18.6534 11.7914 19.4763 11.3528 20.0738 10.6748C20.6713 9.9968 21.0028 9.12533 21.007 8.22168ZM4.56508 3.73752C4.56508 3.29408 4.69657 2.8606 4.94293 2.4919C5.1893 2.12319 5.53947 1.83581 5.94915 1.66611C6.35884 1.49642 6.80965 1.45202 7.24456 1.53854C7.67948 1.62504 8.07898 1.83857 8.39254 2.15214C8.70611 2.4657 8.91964 2.8652 9.00615 3.30012C9.09266 3.73504 9.04827 4.18585 8.87857 4.59553C8.70887 5.00521 8.42149 5.35539 8.05278 5.60175C7.68408 5.84811 7.2506 5.9796 6.80716 5.9796C6.21252 5.9796 5.64224 5.74339 5.22177 5.32291C4.80129 4.90245 4.56508 4.33216 4.56508 3.73752ZM9.04923 20.1794C9.04923 20.6229 8.91774 21.0563 8.67138 21.425C8.42501 21.7937 8.07485 22.0811 7.66516 22.2508C7.25547 22.4205 6.80466 22.4649 6.36975 22.3784C5.93483 22.292 5.53533 22.0784 5.22177 21.7648C4.90821 21.4512 4.69467 21.0517 4.60816 20.6169C4.52165 20.1819 4.56605 19.7311 4.73575 19.3214C4.90545 18.9117 5.19282 18.5615 5.56153 18.3152C5.93023 18.0689 6.36371 17.9373 6.80716 17.9373C7.40179 17.9373 7.97207 18.1736 8.39254 18.594C8.81302 19.0145 9.04923 19.5848 9.04923 20.1794ZM17.2702 10.4638C16.8267 10.4638 16.3933 10.3322 16.0246 10.0859C15.6559 9.83954 15.3685 9.48937 15.1988 9.07969C15.0291 8.67 14.9847 8.2192 15.0712 7.78427C15.1576 7.34935 15.3712 6.94985 15.6848 6.63629C15.9984 6.32273 16.3979 6.10919 16.8327 6.02268C17.2677 5.93617 17.7185 5.98058 18.1281 6.15027C18.5379 6.31997 18.8881 6.60734 19.1344 6.97605C19.3807 7.34476 19.5123 7.77823 19.5123 8.22168C19.5123 8.81632 19.276 9.3866 18.8556 9.80706C18.4351 10.2275 17.8648 10.4638 17.2702 10.4638Z" fill="white" />
						</svg>
					</div>
					<div>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0)">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5002 1.5L15.0002 0H22.5002L24.0002 1.5V9L22.5002 10.5H15.0002L13.5002 9V1.5ZM15.0002 1.5V9H22.5002V1.5H15.0002ZM0.000244141 15V6L1.50024 4.5H9.00024L10.5002 6V13.5H18.0002L19.5002 15V22.5L18.0002 24H10.5002H9.00024H1.50024L0.000244141 22.5V15ZM9.00024 13.5V6H1.50024V13.5H9.00024ZM9.00024 15H1.50024V22.5H9.00024V15ZM10.5002 22.5H18.0002V15H10.5002V22.5Z" fill="white" />
							</g>
							<defs>
								<clipPath id="clip0">
									<rect width="24" height="24" fill="white" transform="translate(0.000244141)" />
								</clipPath>
							</defs>
						</svg>
					</div>
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
