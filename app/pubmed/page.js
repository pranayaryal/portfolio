import Image from 'next/image'
import StepLargeCustom from '../../components/StepLargeCustom'
import HighlightBox from '../../components/HighLightBox'
import WebEnv from '../../components/webEnv'



export default function Pubmed() {
    const rateLimitError = {
        "error": `API rate limit exceeded`,
        "count": 11,
    }
    return (
        <div className="lg:max-w-[650px] text-lg">
            <div className="flex items-center space-x-2">
                <Image
                    alt="Pranay Aryal"
                    height={28}
                    width={28}
                    src="/self-night.jpg"
                    className="rounded-full"
                />
                <p className="text-sm text-gray-70">
                    {"Pranay Aryal / "}
                    {"19th May 2023"}
                </p>
            </div>
            <h1 className="mt-16 text-2xl md:text-5xl tracking-tight mb-4">
                Pubmed Api
            </h1>
            <h3 className="text-lg font-bold text-left mt-8 text-gray-900">
                What is pubmed?
            </h3>
            <div className="mt-4">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="text-indigo-500">
                    Pubmed
                </a>
                <p className="inline"> is a website clinicians and researchers visit to look for research articles.</p>
            </div>
            <div className="mt-4">
                I recently visited the <a className="text-indigo-500"
                    href="https://www.ncbi.nlm.nih.gov/books/NBK25501"
                    target="__blank"
                >API website</a>, but it appeared outdated and lacked a modern and polished look.
            </div>
            <div className="mt-4">
                I have selected and highlighted the favorable aspects mentioned there, although there might be a few omissions. For a comprehensive description, please refer to the provided link above.
            </div>
            <div className="mt-4">
                The <strong>base URI</strong> for the API is
                <span className="bg-green-100 rounded break-words"> https://eutils.ncbi.nlm.nih.gov/entrez/eutils/</span>
            </div>
            <div className='mt-4'>
                <span>See the demo </span>
                <a
                    href="/pubmed/demo"
                    className="text-indigo-400">here</a>
            </div>
            <h3 className="text-lg font-bold text-left mt-16 text-gray-900">
                Table of contents:
            </h3>
            <div className="mt-2 flex flex-col space-y-2">
                <p>1. API Key</p>
                <p>2. Basic Searching</p>
                <p>3. Storing Search Results</p>
                <p>4. Getting Summaries</p>
                <p>5. Getting Full Data</p>
                <p>6. Spelling Suggestions</p>
                <p>7. Related Articles</p>
                <p>8. Database Statistics annd Search Terms</p>
            </div>
            <StepLargeCustom number="1" title="API Key" className='mt-8' />
            <div className="mt-4">
                API keys can be obtained from
                <a href="http://www.ncbi.nlm.nih.gov/account"
                    target="_blank" className='break-words text-indigo-100'> http://www.ncbi.nlm.nih.gov/account/</a>
                after you create an account
            </div>
            <div className="mt-4">
                Once the key has been generated, users are required to incorporate it into every E-utility request by assigning it to the <span className="bg-pink-100 rounded">api_key</span> parameter.
            </div>
            <div className="mt-4">
                Example request including an API key:
                <p className="mt-4 break-words">
                    {/* <code className="bg-pink-100 rounded">esummary.fcgi?db=pubmed&id=123456&api_key=ABCDE12345</code> */}
                    esummary.fcgi?db=pubmed&id=123456&api_key=ABCDE12345
                </p>
            </div>
            <p className="mt-4">
                Example error message if rates are exceeded:
            </p>
            <pre className='text-sm md:text-normal px-4 py-4 break-words mt-4 border rounded-xl border-gray-200 bg-gray-50'>{JSON.stringify(rateLimitError, null, 2)}</pre>
            <br />
            <hr className='my-4' />
            <StepLargeCustom number="2" title="Basic Searching" className='mt-16' />
            <div className='mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                <p><HighlightBox>Endpoint:</HighlightBox></p>
                <span className="bg-pink-100 rounded px-4 py-2 md:p-0">{`esearch.fcgi?db=<database>&term=<query>`}</span>
            </div>
            <div className="mt-4">
                By utilizing this API endpoint, you can initiate a search for a specific term, and in response, you will receive a collection of UIDs, which serve as unique identifiers for articles.
            </div>
            <p className='mt-4'><HighlightBox className='font-semibold'>Functions:</HighlightBox> Provides a list of UIDs matching a text query.</p>
            <p className='mt-4'><HighlightBox>UID:</HighlightBox> Unique Identifier</p>
            <p className='mt-4'>BaseUrl: 
                <span className="bg-pink-100 rounded break-words">{` https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed`}</span></p>
            <p className='mt-4'><HighlightBox className='font-semibold'>Output:</HighlightBox>List of UIDs matching a query</p>
            <p className='mt-4'><HighlightBox>Example:</HighlightBox>
                {` Get the PubMed IDs (PMIDs) for articles about breast cancer published in Science in 2008`}
            </p>
            <p className='mt-4'><HighlightBox>Uri:</HighlightBox>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json" target="_blank"
                    className="text-indigo-500 break-words"
                >
                    {` https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]`}
                    <span className="text-indigo-800">{`&retmode=json`}</span>
                </a>
            </p>
            <div className='mt-4'>
                You can remove the <span className="bg-pink-100 rounded">{`&retmode=json`}</span> to default it to xml.
            </div>
            <br />
            <hr className='my-4' />
            <StepLargeCustom number="3" title="Storing Search Results" className='mt-16' />
            <div className='mt-4'>
                Can be used to save your query results in the pubmed server.
            </div>
            <div className='mt-4'>
                Later on, when combining the results as I will explain, it will be necessary for you to utilize this information.
            </div>

            <div className='mt-4'>
                <span className="bg-pink-100 rounded">{`esearch.fcgi?db=<database>&term=<query>&usehistory=y`}</span>
            </div>
            <p className='mt-4'>
                <HighlightBox className='font-semibold'>Input:</HighlightBox>
                {` Any query; Entrez database (&db); &usehistory=y`}
            </p>
            <p className='mt-4'>
                <HighlightBox className='font-semibold'>Output:</HighlightBox>
                {` Web environment (&WebEnv) and query key (&query_key).`}
            </p>
            <p className='mt-4'>
                <HighlightBox className='font-semibold'>Example:</HighlightBox>
                {` Get the PubMed IDs (PMIDs) for articles about breast cancer published in Science in 2008.`}
            </p>
            <div className='mt-4'>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&usehistory=y"
                    target="_blank"
                    className="text-indigo-400 break-words">
                    {`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]`}
                    <span className="text-indigo-800">{`&usehistory=y`}</span>
                </a>
            </div>
            <div className='mt-4'>
                Use <strong>&retmode=json</strong> to get the json output
            </div>
            <div className='mt-4'>
                This will return a <strong>WebEnvId</strong> in the repsonse.
            </div>
            <div className='mt-4'>
                Use <strong>WebEnvId</strong> in a subsequent request like this:
            </div>
            <div className='mt-4'>
                <span className="bg-pink-100 rounded break-words">{`esearch.fcgi?db=<database>&term=<query2>&usehistory=y&WebEnv=$web1`}</span>
            </div>
            <div className='mt-4'>
                Use the "epost" endpoint to save a set of UIDs in the database
            </div>
            <div className='mt-4'>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/epost.fcgi?db=gene&id=7173,22018,54314,403521,525013"
                    target="_blank"
                    className="text-indigo-400 break-words">
                    {`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/epost.fcgi?db=gene&id=7173,22018,54314,403521,525013`}
                </a>
            </div>
            <div className='mt-4'>
                This will also return a WebEnvId which you can use in a subsequent request.
            </div>
            <div className="text-sm mt-4 border border-gray-200 rounded-xl bg-gray-50 py-4 px-2 md:px-8">
                <WebEnv />
            </div>

            <br />
            <hr className='my-4' />
            <StepLargeCustom number="4" title="Getting Summary" className='mt-16' />
            <div className='mt-8'>
                It provides summaries of studies for a given list of pubmed IDs separate by commas.
            </div>
            <div className='mt-4'>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=16899775,33164953&version=2.0"
                    target="_blank"
                    className="text-indigo-400 break-words">
                    {`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=16899775,33164953&version=2.0`}
                </a>
            </div>
            <div className='mt-4'>
                Add a <strong>&retmode=json</strong> if you want the above in json format
            </div>
            <div className='mt-4'>
                You can also get the summary if you have used the usehistory=y as described above in
                <a className="text-indigo-600" href="/blog-new/pubmed#store"> Store Search Results</a>
            </div>
            <br />
            <hr className='my-4' />
            <StepLargeCustom number="5" title="Getting Full Data" className="mt-16" />
            <div className='mt-8'>
                <p>It downloads full data</p>
                <div className="mt-4">
                    <HighlightBox>Endpoint: </HighlightBox>
                </div>
                <span className="bg-pink-100">
                    {`efetch.fcgi?db=<database>&id=<uid_list>&rettype=<retrieval_type>&retmode=<retrieval_mode>`}
                </span>
            </div>
            <div className='mt-4'>
                <HighlightBox>Input: </HighlightBox>
                <span className="ml-2">
                    List of UIDs (&id); Entrez database (&db); Retrieval type (&rettype); Retrieval mode (&retmode)`
                </span>
            </div>
            <div className='mt-4'>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=34577062,24475906&rettype=json&retmode=text"
                    target="_blank"
                    className="text-indigo-400 break-words">
                    {`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=34577062,24475906&rettype=json&retmode=text`}
                </a>
            </div>
            <div id="spelling" className="mt-16">
                <StepLargeCustom number="6" title="Spelling Suggestions" />
            </div>
            <div className='mt-4'>
                <HighlightBox>Endpoint: </HighlightBox>
                <span className="ml-2 bg-pink-100">
                    {`espell.fcgi?term=<query>&db=<database>`}
                </span>
            </div>
            <div className='mt-4'>
                <HighlightBox>Input: </HighlightBox>
                <span className="ml-2">
                    Entrez text query (&term); Entrez database (&db)
                </span>
            </div>
            <div className='mt-4'>
                <HighlightBox>Output: </HighlightBox>
                <span className="ml-2">
                    XML or json containing the original query and spelling suggestions.
                </span>
            </div>
            <div className='mt-4'>
                <HighlightBox>Example: </HighlightBox>
                <span className="ml-2">
                    Find spelling suggestions for the PubMed Central query ‘fiberblast cell grwth’.
                </span>
            </div>
            <div className='mt-4'>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/espell.fcgi?term=rhuinitis&db=pubmed"
                    target="_blank"
                    className="text-indigo-400 break-words">
                    {`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/espell.fcgi?term=rhuinitis&db=pubmed`}
                </a>
            </div>
            <div id="related" className="mt-16">
                <StepLargeCustom number="7" title="Related Articles" />
            </div>
            <div className='mt-4'>
                Responds to a list of UIDs in a given database with either a list of related UIDs (and relevancy scores) in the same database or a list of linked UIDs in another Entrez database
            </div>
            <div className='mt-4'>
                Batch mode – finds only one set of linked UIDs
            </div>
            <div className='mt-4'>
                <span className="bg-pink-100 rounded">
                    {`elink.fcgi?dbfrom=<source_db>&db=<destination_db>&id=<uid_list></uid_list>`}
                </span>
            </div>
            <div className='mt-4'>
                <HighlightBox>Input: </HighlightBox>
                <span className="ml-2">
                    List of UIDs (&id); Source Entrez database (&dbfrom); Destination Entrez database (&db)
                </span>
            </div>
            <div className='mt-4'>
                <HighlightBox>Output: </HighlightBox>
                <span className="ml-2">
                    XML containing linked UIDs from source and destination databases
                </span>
            </div>
            <div className='mt-4'>
                <HighlightBox>Example: </HighlightBox>
                <span className="ml-2">
                    Find one set of Gene IDs linked to nuccore GIs 34577062 and 24475906
                </span>
            </div>
            <div className='mt-4'>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?dbfrom=pubmed&db=pubmed&id=34525277"
                    target="_blank"
                    className="text-indigo-400 break-words">
                    {`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?dbfrom=pubmed&db=pubmed&id=34525277`}
                </a>
            </div>
            <br />
            <hr className='my-4' />
            <div id="optional" className="mt-16">
                <StepLargeCustom number="7" title="Optional Parameters" />
            </div>
            <div className='mt-4'>
                <span>1. </span><HighlightBox>retmode: </HighlightBox>
                <p className="mt-2 ml-4">Set this to json to return in a <strong>json</strong> format </p>
            </div>
            <div className='mt-4'>
                <span>2. </span><HighlightBox>retstart: </HighlightBox>
                <p className="mt-2 ml-4">Index of first UID to be shown</p>
            </div>
            <div className='mt-4'>
                <span>3. </span><HighlightBox>retmax: </HighlightBox>
                <p className="mt-2 ml-4">Total number of UIDs to be shown</p>
            </div>
            <ul className='mt-4'>
                <span>4. </span><HighlightBox>sort: </HighlightBox>
                <li className="mt-2 ml-4">Sort by the following:</li>
                <li className="mt-2 ml-4 text-sm">- relevance (default)</li>
                <li className="mt-2 ml-4 text-sm">- pub_date (descending order by publication date)</li>
                <li className="mt-2 ml-4 text-sm">- Author - (by first author)</li>
                <li className="mt-2 ml-4 text-sm">- JournalName</li>
            </ul>
            <div className='mt-4'>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json&sort=pub_date"
                    target="_blank"
                    className="text-indigo-400 break-words">
                    {`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json&sort=pub_date`}
                </a>
            </div>
            <div className='mt-2'>
                <span>5. </span><HighlightBox>field: </HighlightBox>
                <p className="mt-2 ml-4">Search field. If used, the entire search term will be limited to the specified Entrez field. The following two URLs are equivalent:</p>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json&sort=pub_date"
                    target="_blank"
                    className="text-indigo-400 ml-4 break-words">
                    {`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json&sort=pub_date`}
                </a>

            </div>
            <div className='mt-4'>
                <span>3. </span><HighlightBox>datetype: </HighlightBox>
            </div>
            <ul className='mt-4'>
                <li className="mt-2 ml-4 text-sm">- &datetype=mdat - modification date</li>
                <li className="mt-2 ml-4 text-sm">- &datetype=pdat - publication date</li>
                <li className="mt-2 ml-4 text-sm">- &datetype=edat - entrez date</li>
            </ul>
            <div className='mt-4'>
                <span>3. </span><HighlightBox>mindate, maxdate: </HighlightBox>
            </div>
            <ul className='mt-4'>
                <li className="mt-2 ml-4 text-sm">- self-explanatory</li>
                <li className="mt-2 ml-4 text-sm">- format should be yyyy/mm/dd or yyyy or yyyy/mm</li>
            </ul>
            <br />
            <hr className='my-4' />
            <div id="stats" className="mt-16">
                <StepLargeCustom number="8" title="Database Statistics And Search Fields" />
            </div>
            <div className='mt-4'>
                <HighlightBox className='font-semibold'>Endpoint: </HighlightBox>
                <span className="bg-pink-100 rounded ml-2">{`einfo.fcgi?db=<database>`}</span>

            </div>
            <div className="mt-4">
                <HighlightBox className='font-semibold'>Output: </HighlightBox>
                <span className="ml-2">
                    XML containing database statistics
                </span>
            </div>
            <div className='mt-4'>
                Note: If no database parameter is supplied, einfo will return a list of all valid Entrez databases
            </div>
            <div className="mt-4">
                <HighlightBox className='font-semibold'>Example: </HighlightBox>
                <span className="ml-2">
                    Find database statistics for Entrez Pubmed
                </span>
            </div>
            <div className='mt-4'>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/einfo.fcgi?db=pubmed"
                    target="_blank"
                    className="text-indigo-400 break-words">
                    {`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/einfo.fcgi?db=pubmed`}
                </a>
            </div>
            <div className='mt-4'>
                Use <span className="font-semibold">&retmode=json</span> to get the json output
            </div>
            <div className='mt-8'>
                Have questions on above, shoot me a chat in the box below.
            </div>

        </div>
    )
}