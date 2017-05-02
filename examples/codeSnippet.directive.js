const encodeHtmlTags = (html) => {
    return html.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
};

const formatHtml = (html) => {
    return html
        .replace(/\n\s+/, "\n")
        .replace(/\"\s/g, "\"\n    ")
        .trim();
};

export default function codeSnippet() {
    return {
        restrict: "A",
        compile: function(ele) {
            const theHtml = ele.find("field")[0].outerHTML;
            let newHtml = encodeHtmlTags(theHtml);
            newHtml = formatHtml(newHtml);

            ele.append(`
                <div class="example__code col-md-6">
                    <pre class="example__code-pre"><code class="example__code-text prettyprint">${newHtml}</code></pre>
                </div>
            `);
        }
    };
}
