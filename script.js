let data = [{
    id : 1,
    templateName : Computer,
    assetType : Desktop,
    version : 1,
    status : true,
    action : yes
},{
    id : 1,
    templateName : Computer,
    assetType : Desktop,
    version : 1,
    status : true,
    action : yes
},{
    id : 1,
    templateName : Computer,
    assetType : Desktop,
    version : 1,
    status : true,
    action : yes
}]

alert("Helllo world");
for (const element of data) {
     console.log(element.id, " " ,element.templateName, " " ,element.assetType, " " , element.version, " " ,element.status, " " ,element.action);
}