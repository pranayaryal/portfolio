import React from 'react'
import StepLargeCustom from './StepLargeCustom'

export default function Summary() {
    return (
        <>

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
        </>
    )
}
