import React from 'react'
import StepLargeCustom from './StepLargeCustom'
import HighlightBox from './HighLightBox'
import WebEnv from './webEnv'

export default function Storing() {
    return (
        <>
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
            <div className='mt-4'>
                <HighlightBox className='font-semibold'>Input:</HighlightBox>
                {` Any query; Entrez database (&db); &usehistory=y`}
            </div>
            <div className='mt-4'>
                <HighlightBox className='font-semibold'>Output:</HighlightBox>
                {` Web environment (&WebEnv) and query key (&query_key).`}
            </div>
            <div className='mt-4'>
                <HighlightBox className='font-semibold'>Example:</HighlightBox>
                {` Get the PubMed IDs (PMIDs) for articles about breast cancer published in Science in 2008.`}
            </div>
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
        </>
    )
}
