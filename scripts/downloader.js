const fileName = "SCSG_File";

export function SCSGDownload(characterInfos) {
    let fileType = document.querySelector("#downloadable-file-type").value;
    let fileContent = "";
    let fileExtension = "";

    console.log(characterInfos);

    switch (fileType) {
        case "json":
            fileContent = getJSONFileContent(characterInfos);
            fileExtension = ".json";
            break;

        default:
            return;
    }

    downloadContentToDevice(fileContent, fileExtension);
}

function getJSONFileContent(characterInfos) {
    return JSON.stringify(characterInfos);
}

function downloadContentToDevice(content, extension) {
    let blob = new Blob([content], { type: 'application/json' });
    let url = URL.createObjectURL(blob);

    let link = document.createElement('a');
    link.href = url;
    link.download = fileName + extension;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}