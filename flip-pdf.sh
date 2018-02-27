#!/bin/bash

# By default, page 1 of the PDF output is a table of contents. There is no setting to make page 1 a title page. To work around that, make page 2 a title page. Then run this script, which flips page 1 and page 2 of the generated PDF. It does this for all PDFs in `_site_pdf/docs-project-template_pdf`.

cd _site_pdf/docs_articles

for filename in *.pdf; do

pdftk "$filename" cat 2-1 3-end output "$(date +%F)_$filename"

done