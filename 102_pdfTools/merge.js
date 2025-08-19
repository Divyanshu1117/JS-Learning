const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs = async (p1, p2) => {
  await merger.add(p1);  
  await merger.add(p2); 
  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`); 
  return d;
}
module.exports = {mergePdfs};


// const PDFMerger = require('pdf-merger-js');

// async function mergePdfs(p1, p2) {
//   const merger = new PDFMerger();
//   await merger.add(p1);             
//   await merger.add(p2);             
//   await merger.save('public/merged.pdf'); 
// }

// module.exports = { mergePdfs };