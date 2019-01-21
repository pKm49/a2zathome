module.exports = {
    cosmosdb:
    {
        name:"cosmosdb",
        url:" mongodb://a2zonlineshoppy:Kdbwf2oSwyMrIedNycxLCKPwlfCkka1XDttcU6qyGOY0WCbABPiR4TSA8PqppgAtq54XHtErlj9jVbyXnSK84A==@a2zonlineshoppy.documents.azure.com:10255/a2zathome?ssl=true",
        port:10255
    },
    getStorageAccountName: () => {
        const matches = /AccountName=(.*?);/.exec(process.env.AZURE_STORAGE_CONNECTION_STRING);
        return matches[1];
    }
}