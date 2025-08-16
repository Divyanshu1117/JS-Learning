const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const html_to_pdf = require("html-pdf-node");

async function createPDF() {

    const templateHtml = fs.readFileSync(path.join(__dirname, "96_template.html"), "utf8");

    const template = handlebars.compile(templateHtml);

    const users = [
        { name: 'John Doe', age: 30, email: 'john@example.com' },
        { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
        { name: 'Tom', age: 40, email: 'tom@example.com' }
    ];

    const finalHtml = template({
        users: users,
        date: new Date().toLocaleDateString()
    });

    let file = { content: finalHtml };

    let options = {
        format: 'A4',
        printBackground: true,
        margin: { top: '40mm', bottom: '30mm', left: '10mm', right: '10mm' },
        headerTemplate: `<div style="text-align:center;font-size:14px;">Confidential Report</div>`,
        footerTemplate: `<div style="text-align:center;font-size:12px;color:#666;">Page <span class="pageNumber"></span> of <span   class="totalPages"></span></div>`
    };

    try {
        const pdfBuffer = await html_to_pdf.generatePdf(file, options);
        fs.writeFileSync("./user-report.pdf", pdfBuffer);
        console.log("PDF generated successfully: user-report.pdf");
    } catch (error) {
        console.error("Error generating PDF:", error);
    }
}

createPDF();

// npm install html-pdf-node handlebars fs path
// npm install
// npm init -y
// npm install handlebars html-pdf-node puppeteer@latest