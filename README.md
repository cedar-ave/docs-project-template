This starter Markdown documentation project supports Health Catalyst teams that want to begin managing their documentation as Markdown files. It uses the open-source tool [DocFx](https://dotnet.github.io/docfx) to generate a website and PDFs. The output is styled to align with Health Catalyst UI and print standards.

For an example of the web output, markdown cheatsheets, and details on things like icons, callouts, styles, etc., see [platformdocs.healthcatalyst.com](https://platformdocs.healthcatalyst.com).

## Install DocFx
- Create a folder in `C:\Program Files` called `docfx`.
- Download `docfx.zip` from the [DocFx releases page](https://github.com/dotnet/docfx/releases/latest).
- Extract contents to `C:\Program Files\docfx`.

### If you want to generate PDFs
- Download the [wkhtmltopdf installer](https://wkhtmltopdf.org/downloads.html).
- Run the installer. Use the default `C:\Program Files\wkhtmltopdf` as the destination folder.

### Add DocFx and wkhtmltopdf to `PATH` (in Windows)
- **Control Panel** > Change **View by** to **Small icons** > **System** > **Advanced system settings** > **Environment Variables...**
- Under the **System variables** section, scroll to **Path**. Select it and click **Edit...**.
- Depending on what version of Windows you're using, you see either a long string of values separated by semicolons or values in a vertical list.
  - If you see a long string of values, append to the end: `;C:\Program Files\DocFX;C:\Program Files\wkhtmltopdf\bin`
  - If you see values in a vertical list: Click **New** and paste `C:\Program Files\DocFX`. Click **New** again and paste `C:\Program Files\wkhtmltopdf\bin`.

## Build this project as a website
- On [this project's Github page](https://github.com/HealthCatalyst/docs-project-template), click **Clone or download** > **Download ZIP**. This is the directory you'll work in. Save it wherever is convenient, but don't save it in `C:\Program Files\docfx`.
- Open Windows Command Prompt.
- Enter `cd` then the filepath to your directory. For example, `cd C:\Docs`. If the filepath has spaces, put it in quotes (`cd "C:\My Docs"`).
- Run `docfx build docfx.json --serve`.
- In your browser, go to [http://localhost:8080](http://localhost:8080).
- Find the website files in the newly generated subdirectory `_site`. For an easy internal website, push to an Azure web app, secure with Active Directory, and request a healthcatalyst.com or healthcatalyst.net domain name.

## Generate PDFs
- Run `docfx pdf` in Windows Command Prompt.
- The PDFs are in your directory under `_site_pdf\docs_pdf`.

## How to change the order of articles
- `toc.yml` files determine the order of the articles in the site or PDF.
- The `toc.yml` files in `articles/<guide>` determine the order of articles in the site.
- The `toc.yml` files in `pdf/<guide>` determine the order of articles in the PDF.

## Other sample DocFx documentation projects
### Starter project
- Create a directory for your project.
- Inside that directory, open Windows Command Prompt.
- Run `docfx init -q`.

### Sample project
- Clone [DocFx seed](https://github.com/docascode/docfx-seed).

### Walkthroughs
See [DocFx walkthroughs](https://dotnet.github.io/docfx/tutorial/walkthrough/walkthrough_overview.html).

## Complication with the PDF title pages
The table of contents is always page 1. If you want a title page, create the title page as page 2 and use this script to flip the them.
- Install [PDFtk Free](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit).
- Install Windows Git. This installs Git Bash, which allows you to run the Bash script that flips the pages.
- Open Git Bash and `cd` to your docs directory. Enter `./pdf-flip.sh`.
- Find the flipped PDF in `_site_pdf`. Its filename is prepended with today's date.
