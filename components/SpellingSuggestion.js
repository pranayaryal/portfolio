import React from 'react'
import StepLargeCustom from './StepLargeCustom'
import HighlightBox from './HighLightBox'

export default function SpellingSuggestion() {
  return (
    <>
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
    </>
  )
}
