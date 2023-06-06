'use client';
import { useState } from "react";
import axios from 'axios'

const API_KEY = process.env.PUBMED_API_KEY
const BASE_URL = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/`
const SEARCH_ENDPOINT = `esearch.fcgi?db=pubmed&retmode=json&sort=pub_date&term=`
// const SUMMARY_ENDPOINT = `esummary.fcgi?db=pubmed&version=2.0&retmode=json&api_key=${API_KEY}&id=`
const SUMMARY_ENDPOINT = `esummary.fcgi?db=pubmed&version=2.0&retmode=json&id=`
const SPELLING_ENDPOINT = `espell.fcgi?db=pubmed&term=rhuinitis`
const RELATED_ENDPOINT = `elink.fcgi?dbfrom=pubmed&db=pubmed&id=`

export const metadata = {
    title: 'Pubmed Api for Randomized Controlled Trials',
    description: 'A simple demo on how to use pubmed api to search for Randomized Controlled Trials',
}



const Demo = () => {
    const [search, setSearch] = useState("")
    const [buttonText, setButtonText] = useState("Search")
    const [errorMessage, setErrorMessage] = useState("")
    const [articleSummaries, setArticleSummaries] = useState([])

    const getPmids = async (term) => {
        // Get the pubMed Ids associated with the search
        const url = `${BASE_URL}${SEARCH_ENDPOINT}${term}+randomized+controlled+trial[pubt]`
        // const url = `${BASE_URL}${SEARCH_ENDPOINT}${term}+review[pubt]`
        const response = await fetch(url)

        const search = await response.json()
        console.log(search)
        return search
    }

    const getSummary = async (idlist) => {
        const joined = idlist.toString();
        const url = `${BASE_URL}${SUMMARY_ENDPOINT}${joined}`
        const response = await fetch(url, {mode: 'cors'})

        const summary = await response.json()
        return summary
    }

    const handleKeyDown = (e) => {
        e.preventDefault()
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        setErrorMessage("")
    }

    const callPubMed = async (term) => {
        const { esearchresult, header } = await getPmids(term)
        console.log(esearchresult)
        const { idlist } = esearchresult;
        if (idlist.length > 0) {
            const joined = idlist.toString();
            const url = `${BASE_URL}${SUMMARY_ENDPOINT}${joined}`
            const summary = await getSummary(idlist)
            const { result } = summary
            const resultValues = Object.values(result)

            let summaries = []

            resultValues.map(r => {
                if (r.uid != undefined) {
                    // This wil eliminate the last part of the array
                    // which is nothing but the list uids
                    summaries.push(r)
                }
            })

            console.log(summaries)


            return { summaries, error: "" };

        }
        return { error: "No PMIDs were found for that search" }


    }

    const handleSubmit = async () => {
        setArticleSummaries([])
        setButtonText("Searching ...")
        if (search == "") {
            setErrorMessage("You must enter a search term")
            setButtonText("Search")
            return
        }
        setErrorMessage("")
        console.log(search)
        const res = callPubMed(search)
        // const res = await fetch(`/api/pubmed?term=${search}`, {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     method: "GET",
        // });

        // console.log(res)

        const { error, summaries } = await res;
        if (error) {
            setErrorMessage(`There was an error: ${error}`)
            setButtonText("Search")
            return
        }

        // // Set the pubMedIds from response
        setArticleSummaries(summaries)
        setButtonText("Search")


    }


    // const handleChange = (e) => {
    //   setSearch(e.target.value)
    // }

    return (
        <div className="lg:max-w-[650px]">
            <p className="mb-4">Search pubmed for a Randomized Controlled Trial</p>
            {errorMessage &&
                <p className="mt-4 mb-2 text-sm text-red-400">{errorMessage}</p>
            }
            <div className="flex flex-row justify-left space-x-2">
                <input
                    type="text"
                    autoFocus='true'
                    value={search}
                    onChange={(e) => handleChange(e)}
                    className="text-black w-1/2 h-10 rounded-md border border-indigo-200 py-1 px-2 focus:outline-none focus:border-gray-400 placeholder:text-sm  dark:bg-zinc-800 dark:border-gray-700 dark:text-white mb-1"
                    placeholder="Enter a search term"
                />
                <button
                    onClick={handleSubmit}
                    className="text-black bg-indigo-300 max-w-1/4 px-2 py-2 border-2 border-black  rounded-md font-bold text-sm dark:border-gray-700  mb-4"
                >{buttonText}</button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 grid-gap-2">
                {articleSummaries &&
                    articleSummaries.map(summary => {
                        return (
                            <div key={summary.uid} className="border rounded-xl px-4 py-2">
                                <a target="_blank"
                                    href={`https://pubmed.ncbi.nlm.nih.gov/${summary.uid}/`}>
                                    <p className="mt-4 text-sm text-gray-900" key={summary.uid}> {summary.title}</p>
                                    <span className="text-xs text-indigo-400">{summary.lastauthor} et al |</span>
                                    <span className="text-xs text-green-400"> {summary.pubdate} |</span>
                                    <span className="text-xs text-red-400"> {summary.source}</span>
                                </a>
                            </div>
                        )

                    })

                }


            </div>

        </div>
    );
};

export default Demo;
