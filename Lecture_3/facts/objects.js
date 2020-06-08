let types = {
    media: ["mp4", "mvk"],
    arcives: ["zip", "rar", "tar", "7z", "gz", "ar", "iso", "xz"],
    documents: ["pdf", "docx", "doc", "xlsx", "xls", "odt", "ods", "odp", "odg", "txt", "ps", "tex"],
    app: ["exe", "dmg", "pkg", "deb"]
}
for (let category in types) {
    console.log(category);
    console.log(types[category]);
    console.log("..............................");
}