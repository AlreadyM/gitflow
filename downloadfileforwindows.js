var request = require('request');
var fs = require('fs');

/*
* url 网络文件地址
* filename 文件名
* callback 回调函数
*/
function downloadFile(uri,filename,callback){
    var stream = fs.createWriteStream(filename);
    request(uri).pipe(stream).on('close', callback); 
}

var fileUrl  = 'http://www.bookbao.cc/bookdown/%D3%F9%CC%EC%C9%F1%D7%E6.rar';
var filename = 'test.rar';  //文件名
let gitFileUrl = 'https://github.com/git-for-windows/git/releases/download/v2.30.0.windows.1/Git-2.30.0-32-bit.exe'
let gitFileName = 'git.exe'
let files = [
    {
        name:'git.exe',
        url:'https://github.com/git-for-windows/git/releases/download/v2.30.0.windows.1/Git-2.30.0-32-bit.exe'
    },
    {
        name:'vscode.exe',
        url:'https://code.visualstudio.com/sha/download?build=insider&os=win32-x64-user'
    }
]
for(let file in files){
    console.log(files[file])
}
downloadFile(fileUrl,filename,function(){
    console.log(filename+'下载完毕');
});