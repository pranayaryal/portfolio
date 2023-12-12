
import React from 'react'
import StepLargeCustom from './StepLargeCustom'

export default function ApiKey() {
    const rateLimitError = {
        "error": `API rate limit exceeded`,
        "count": 11,
    }
    return (
        <>
            <StepLargeCustom number="1" title="API Key" className='mt-8' />
            <div className="mt-4">
                API keys can be obtained from
                <a href="http://www.ncbi.nlm.nih.gov/account"
                    target="_blank" className='break-words text-indigo-500'> http://www.ncbi.nlm.nih.gov/account/</a>
                after you create an account
            </div>
            <div className="mt-4">
                Once the key has been generated, users are required to incorporate it into every E-utility request by assigning it to the <span className="bg-pink-100 rounded">api_key</span> parameter.
            </div>
            <div className="mt-4">
                Example request including an API key:
            </div>
            <p className="mt-4 break-words">
                esummary.fcgi?db=pubmed&id=123456&api_key=ABCDE12345
            </p>
            <p className="mt-4">
                Example error message if rates are exceeded:
            </p>
            <pre className='text-sm md:text-normal px-4 py-4 break-words mt-4 border rounded-xl border-gray-200 bg-gray-50'>{JSON.stringify(rateLimitError, null, 2)}</pre>
        </>
    )
}
