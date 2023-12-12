import React from 'react'
import StepLargeCustom from './StepLargeCustom'
import HighlightBox from './HighLightBox'

export default function Related() {
    return (
        <>
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
        </>
    )
}
