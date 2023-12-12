import React from 'react'
import StepLargeCustom from './StepLargeCustom'
import HighlightBox from './HighLightBox'

export default function Optional() {
    return (
        <>
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
        </>
    )
}
