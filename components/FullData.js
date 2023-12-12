import React from 'react'
import StepLargeCustom from './StepLargeCustom'
import HighlightBox from './HighLightBox'

export default function FullData() {
    return (
        <>

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
        </>
    )
}
