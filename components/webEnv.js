
export default function WebEnv() {
    const webEnvJson =
    {
        "header": {
            "type": "esearch",
        },

        "esearchresult": {
            "querykey": "1",
            "webenv": "MCID_63a5a3e077047a",
            "idlist": [
                "19008416",
                "18927361",
                "18937361",
                "28937361",
            ],
            "translationset": "..."
        }


    }
    return (
        <pre>
            {JSON.stringify(webEnvJson, null, 2)}
        </pre>
    );
}
