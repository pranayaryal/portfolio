

const NextWithPostGres = () => {
    return (
        <div>
            <h2 className='text-xl'>How To Connect postgres with NextJS 13</h2>
            <p className="mt-4">I'm assuming that you have set up postgresql locally.</p>
            <p className="mt-4">I had a difficult time finding something online on this topic.</p>
            <p>Thought I would share it here.</p>
            <p className="mt-4 mb-8">Install this npm package.</p>
            <code className="mt-4 bg-indigo-100 px-4 py-4 rounded-lg">npm install pg</code>
            <p className="mt-8">Then create a <span className="bold">lib/db.js</span></p>
            <p className="mt-4 mb-8">Inside this new file put this:</p>
            <div className="relative mt-4 text-sm leading-loose text-white  bg-gray-700 px-8 py-8 rounded-xl">
                <span className="text-black rounded px-2 bg-lime-300 text-xs absolute top-2 left-3">{`db/lib.js`}</span><br/>
                {`import { Pool } from 'pg'`}<br />
                {`const dotenv = require("dotenv")`}<br />
                {`dotenv.config()`}<br /><br />
                {`let conn;`}<br />

                {`if (!conn) {`}<br />
                <div className="ml-4">
                    {`conn = new Pool({`}<br />
                    <span className="ml-4">{`user: process.env.PGUSER,`}</span><br />
                    <span className="ml-4">{`host: process.env.PGHOST,`}</span><br />
                    <span className="ml-4">{`database: process.env.PGDATABASE,`}</span><br />
                    <span className="ml-4">{`password: process.env.PGPASSWORD,`}</span><br />
                    <span className="ml-4">{`port: process.env.PGPORT`}</span><br />
                    {`})`}<br />
                </div>
                {`}`}<br /><br />

                {`export default conn;`}
            </div>
            <p className="mt-8">Make sure you have created your .env file and stored your environment variables there</p>
            <p className="mt-4">Then create an api route by creating a folder <span className="bg-rose-300 rounded px-2">api/endpoint/route.js</span></p>
            <p className="mt-4">Inside that folder add this code</p>
            <div className="relative mt-4 text-sm leading-loose text-white  bg-gray-700 px-8 py-8 rounded-xl">
                <span className="text-black rounded px-2 bg-lime-300 text-xs absolute top-2 left-3">{`app/api/endpoint/route.js`}</span><br/>
                <span>{`import { NextResponse } from 'next/server'`}</span><br />
                {`import conn from '../../../lib/db'`}<br /><br/>
                <span>{`export async function GET() {`}</span><br />
                <div className="ml-4">
                    {`try {`}<br />
                    <span className="ml-4">{`const res = await conn.query('SELECT embeddings from words_emb where index = 1')`}</span><br />
                    <span className="ml-4">{`return NextResponse.json({ res })`}</span><br />
                    {`}`}<br />
                </div>
                <span className="ml-4">{`} catch (error){`}</span><br/>
                <span className="ml-4">{`return NextResponse.json({ err: \`There was an error \${error}\`})`}</span><br/>
                <span>{`}}`}</span><br /><br />

                {`export default conn;`}
            </div>
            <p className="mt-8">Then call this from your component using axios as documented in their github page</p>
            <p className="mt-4">Use the endpoint /api/endpoint</p>
            <p className="mt-4">Make sure you use the 'use client' in the calling component</p>
        </div>
    )
}

export default NextWithPostGres;