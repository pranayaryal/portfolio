import Image from 'next/image'
import StepLargeCustom from '../../components/StepLargeCustom'
import HighlightBox from '../../components/HighLightBox'
import WebEnv from '../../components/webEnv'
import ApiKey from '@/components/ApiKey'
import BasicSearch from '@/components/BasicSearch'
import Storing from '@/components/Storing'
import Summary from '@/components/Summary'
import FullData from '@/components/FullData'
import SpellingSuggestion from '@/components/SpellingSuggestion'
import Related from '@/components/Related'
import Optional from '@/components/Optional'
import Stats from '@/components/Stats'

export const metadata = {
    title: 'Pubmed Api',
    description: 'Description of Pubmed Api and includes a demo of pubmed api to look for Randomized Controlled Trials',
}



export default function Pubmed() {
    return (
        <div className="lg:max-w-[650px]">
            <div className="flex items-center space-x-2">
                <Image
                    alt="Pranay Aryal"
                    height={42}
                    width={28}
                    src="/self-night.jpg"
                    className="rounded-full"
                />
                <p className="text-sm text-gray-70">Pranay Aryal / 19th May 2023</p>
            </div>
            <h1 className="mt-16 text-2xl md:text-5xl tracking-tight mb-4">
                Pubmed Api
            </h1>
            <h3 className="text-xl font-bold text-left mt-8 text-gray-900">
                What is pubmed?
            </h3>
            <div className='mt-4'>
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="text-indigo-500">Pubmed</a>
                <span className="inline"> is a website clinicians and researchers visit to look for research articles.
                I recently visited the <a className="text-indigo-500"
                    href="https://www.ncbi.nlm.nih.gov/books/NBK25501"
                    target="__blank"
                >API website</a>, but it appeared outdated and lacked a modern and polished look.</span>
                <p className='mt-4'>
                    I have selected and highlighted the favorable aspects mentioned there, although there might be a few omissions. For a comprehensive description, please refer to the provided link above.
                </p>
                <p className="mt-4">
                    The <strong>base URI</strong> for the API is
                    <span className="bg-green-100 rounded break-words"> https://eutils.ncbi.nlm.nih.gov/entrez/eutils/</span>
                </p>
                <div className='mt-4'>
                    <span>See the demo </span>
                    <a href="/pubmed/search-pubmed-randomized-controlled-trial" className="text-indigo-400">here</a>
                </div>
            </div>
            <h3 className="text-lg font-bold text-left mt-16 text-gray-900">
                Table of contents:
            </h3>
            <div className="mt-2 leading-7">
                <p>1. API Key</p>
                <p>2. Basic Searching</p>
                <p>3. Storing Search Results</p>
                <p>4. Getting Summaries</p>
                <p>5. Getting Full Data</p>
                <p>6. Spelling Suggestions</p>
                <p>7. Related Articles</p>
                <p>8. Database Statistics annd Search Terms</p>
            </div>
            <ApiKey />
            <BasicSearch />
            <Storing />

            <Summary />
            <FullData />
            <SpellingSuggestion />
            <Related />
            <Optional />
            <Stats />
            <div className='mt-8'>
                Have questions on above, shoot me a chat in the box below.
            </div>

        </div>
    )
}