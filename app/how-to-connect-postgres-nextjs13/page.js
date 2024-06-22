// import CodeViolet from "@/components/CodeViolet";
// import CodeSky from "@/components/CodeSky";
import { CodeViolet, CodeSky, CodeAmber } from "@/components/CodeColors"

const NextWithPostGres = () => {
    return (
        <div>
            <div className="flex flex-row space-x-6 items-center justify-start">
                <img src='postgresql-icon.svg'/>
                <h2 className='text-xl'>How To Connect postgres with NextJS 13</h2>
            </div>
            <p className="mt-8">I'm assuming that you have set up postgresql locally.</p>
            <p className="mt-4">I had a difficult time finding something online on this topic.</p>
            <p>Thought I would share it here.</p>
            <p className="mt-4 mb-8">Install this npm package.</p>
            <code className="mt-4 bg-indigo-100 px-4 py-4 rounded-lg">npm install pg</code>
            <p className="mt-8">Then create a <span className="bold">lib/db.js</span></p>
            <p className="mt-4 mb-8">Inside this new file put this:</p>
            <div className="relative mt-4 text-sm leading-loose text-white  bg-gray-700 px-8 py-8 rounded-xl">
                <span className="text-black rounded px-2 bg-lime-300 text-xs absolute top-2 left-3">{`db/lib.js`}</span><br/>
                <CodeViolet>{`import `}</CodeViolet>
                <CodeSky>{`{ Pool } `}</CodeSky>
                <CodeViolet>{`from `}</CodeViolet>
                <CodeAmber>{`'pg'`}</CodeAmber><br />
                <CodeViolet>const </CodeViolet>
                <CodeSky>dotenv = </CodeSky>
                <CodeAmber>require(dotenv); </CodeAmber>
                <span className="text-green-300">// This is to load .env</span><br/>

                <CodeViolet>dotenv(</CodeViolet>
                <CodeAmber>config)</CodeAmber><br/><br/>
                <CodeViolet>let </CodeViolet>
                <CodeAmber>conn;</CodeAmber><br/>
                <CodeViolet>if </CodeViolet>
                <CodeAmber>{`(!conn){`}</CodeAmber><br/>

                <div className="ml-8">
                    <CodeViolet>{`conn = new Pool({`}</CodeViolet><br />
                    <CodeViolet>user:</CodeViolet>
                    <CodeSky>process.env.</CodeSky>
                    <CodeAmber>PGUSER</CodeAmber><br/>
                    <CodeViolet>host:</CodeViolet>
                    <CodeSky>process.env.</CodeSky>
                    <CodeAmber>PGHOST</CodeAmber><br/>
                    <CodeViolet>database:</CodeViolet>
                    <CodeSky>process.env.</CodeSky>
                    <CodeAmber>PGDATABASE</CodeAmber><br/>
                    <CodeViolet>password:</CodeViolet>
                    <CodeSky>process.env.</CodeSky>
                    <CodeAmber>PGPASSWORD</CodeAmber><br/>
                    <CodeViolet>port:</CodeViolet>
                    <CodeSky>process.env.</CodeSky>
                    <CodeAmber>PGPORT</CodeAmber>
                    {`})`}<br />
                </div>
                {`}`}<br /><br />
                <CodeViolet>export </CodeViolet>
                <CodeSky>default </CodeSky>
                <CodeAmber>conn;</CodeAmber>

            </div>
            <p className="mt-8">Make sure you have created your .env file and stored your environment variables there</p>
            <p className="mt-4">Then create an api route by creating a folder <span className="bg-rose-300 rounded-lg p-2">api/endpoint/route.js</span></p>
            <p className="mt-4">Inside that folder add this code</p>
            <div className="relative mt-4 text-sm leading-loose text-white  bg-gray-700 px-8 py-8 rounded-xl">
                <span className="text-black rounded px-2 bg-lime-300 text-xs absolute top-2 left-3">{`app/api/endpoint/route.js`}</span><br/>
                <CodeViolet>import </CodeViolet>
                <CodeSky>{`{ NextResponse } `}</CodeSky>
                <CodeViolet>from </CodeViolet>
                <CodeAmber>'next/server'</CodeAmber><br/>
                <CodeViolet>import </CodeViolet>
                <CodeSky>conn </CodeSky>
                <CodeViolet>from </CodeViolet>
                <CodeAmber>'../../../lib/db</CodeAmber><br/>
                <CodeViolet>export </CodeViolet>
                <CodeSky>async </CodeSky>
                <CodeViolet>function </CodeViolet>
                <CodeAmber>{`GET(){`}</CodeAmber><br/>
                <div className="ml-4">
                    <CodeViolet>{`try {`}</CodeViolet><br/>
                    <div className="ml-4">
                    <CodeViolet>const </CodeViolet>
                    <CodeSky>res </CodeSky>
                    <CodeAmber>await </CodeAmber>
                    <CodeViolet>conn.query</CodeViolet>
                    <CodeAmber>{`('SELECT * from table where index = 1')`}</CodeAmber>
                </div><br />
                    <CodeViolet className='ml-4'>return </CodeViolet>
                    <CodeSky>{`NextResponse.json({ res })`}</CodeSky>
                    {`}`}<br />
                </div>
                <CodeViolet className="ml-8">{`} catch (error){`}</CodeViolet><br/>
                <CodeViolet className='ml-8'>return </CodeViolet>
                <CodeSky>{`NextResponse.json({ err: \`There was an error`}</CodeSky>
                <CodeAmber>{` \${error}\`})`}</CodeAmber><br/>
                <CodeViolet>{`}}`}</CodeViolet><br /><br />

            </div>
            <p className="mt-8">Then call this from your component using axios as documented in their github page</p>
            <p className="mt-4">Use the endpoint /api/endpoint</p>
            <p className="mt-4">Make sure you use the 'use client' in the calling component</p>
        </div>
    )
}

export default NextWithPostGres;
