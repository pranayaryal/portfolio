import React from 'react'
import StepLargeCustom from './StepLargeCustom'
import HighlightBox from './HighLightBox'

export default function Stats() {
    return (
        <>
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

        </>
    )
}
