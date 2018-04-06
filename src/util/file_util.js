/**
 * bodyを本文に持つtext_typeの形式のファイルをtitleのファイル名でダウンロードする
 * (ダウンロードといっても、サーバには行かずJSだけの処理)
 * text_typeはMIMEに準拠のこと
 * 
 * 例）download_file('sample.csv', 'a,b,c\nd,e,f', 'text/csv')
 */
export function download_file(title, body, text_type){
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const data = new Blob([bom, body], {type: text_type});
    const fileURL = window.URL.createObjectURL(data);
    let tmpLink = document.createElement('a');
    tmpLink.href = csvURL;
    tmpLink.setAttribute('download', title)
    tmpLink.click();
}