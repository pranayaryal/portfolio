import React from 'react'
import StepLargeCustom from './StepLargeCustom'
import HighlightBox from './HighLightBox'

export default function BasicSearch() {
    return (
        <>
            <StepLargeCustom number="2" title="Basic Searching" className='mt-16' />
            <div className='mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                <HighlightBox>Endpoint:</HighlightBox>
                <span className="bg-pink-100 rounded px-4 py-2 md:p-0">{`esearch.fcgi?db=<database>&term=<query>`}</span>
            </div>
            <div className="mt-4">
                By utilizing this API endpoint, you can initiate a search for a specific term, and in response, you will receive a collection of UIDs, which serve as unique identifiers for articles.
            </div>
            <HighlightBox className='font-semibold mt-4'>Functions:</HighlightBox>
            <span>Provides a list of UIDs matching a text query.</span>
            <div className='mt-4'><HighlightBox>UID:</HighlightBox> Unique Identifier</div>
            <p className='mt-4'>BaseUrl: <span className="bg-pink-100 rounded break-words">{` https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed`}</span></p>
            <div className='mt-4'><HighlightBox className='font-semibold'>Output:</HighlightBox>List of UIDs matching a query</div>
            <div className='mt-4'><HighlightBox>Example:</HighlightBox>
                {` Get the PubMed IDs (PMIDs) for articles about breast cancer published in Science in 2008`}
            </div>
            <div className='mt-4'><HighlightBox>Uri:</HighlightBox>
                <a href="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]&retmode=json" target="_blank"
                    className="text-indigo-500 break-words"
                >
                    {` https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=science[journal]+AND+breast+cancer+AND+2008[pdat]`}
                    <span className="text-indigo-800">{`&retmode=json`}</span>
                </a>
            </div>
            <div className='mt-4'>
                You can remove the <span className="bg-pink-100 rounded">{`&retmode=json`}</span> to default it to xml.
            </div>
        </>
    )
}
