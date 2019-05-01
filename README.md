This starter Markdown documentation project supports Health Catalyst teams that want to begin managing their documentation as Markdown files. It uses the open-source tool [DocFx](https://dotnet.github.io/docfx) to generate a website and PDFs. The output aligns with Health Catalyst's [Fabric.Cashmere](https://github.com/HealthCatalyst/Fabric.Cashmere) style guide.

For Markdown cheatsheets and details on things like icons, callouts, styles, etc., see [Reference](#reference).

The following instructions apply to Windows, but DocFx and this project are also supported on Linux and macOS.

## Install DocFx
- Create a folder in `C:\Program Files` called `docfx`.
- Download `docfx.zip` from the [DocFx releases page](https://github.com/dotnet/docfx/releases/latest).
- Extract the contents to `C:\Program Files\docfx`.

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
- On [this project's Github page](https://github.com/HealthCatalyst/docs-project-template), click **Clone or download** > **Download ZIP**. Extract it to wherever is convenient. This is the directory you'll work in. Don't extract it to `C:\Program Files\docfx`. 
- Open Windows Command Prompt. Enter `cd` followed by the filepath to your directory. For example, `cd C:\docs-project-template-master`.
- Run `docfx build docfx.json --serve`.
- In your browser, go to [http://localhost:8080](http://localhost:8080).

### For an easy internal website
- Find the website files in the newly generated subdirectory `\_site` in your directory.
- Push the site to an Azure web app (see [Local Git Deployment to Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/app-service-deploy-local-git)).
- Set up authentication to be internal visitors only with Azure Active Directory (see [Configure your App Service app to use Azure Active Directory login](https://docs.microsoft.com/en-us/azure/app-service/app-service-mobile-how-to-configure-active-directory-authentication)).
- Request a healthcatalyst.com or healthcatalyst.net domain name from IT (for example, mydocs.healthcatalyst.com).

## Generate PDFs
- Run `docfx pdf` in Windows Command Prompt.
- The PDFs are in the newly generated subdirectory `_site_pdf\docs-project-template-master_pdf` in your directory.

## How to change the order of articles
- The `toc.yml` file in `articles` determines the tabs in the menu bar of the site.
- The `toc.yml` files in `articles/<guide-name>` determine the order of articles in the site.
- The `toc.yml` files in `pdf/<guide-name>` determine the order of articles in the PDF.

## If you want to use Font Awesome icons
[Font Awesome](https://fontawesome.com) is the icon font used in Catalyst apps.
- Install [Node.js](https://nodejs.org).
- Close and reopen Windows Command Prompt. Enter `cd` followed by the filepath to your directory. For example, `cd C:\docs-project-template-master`.
- Enter `npm install --save`.
- How to include an icon in a Markdown file: `<i class="fa fa-plus"></i>` (in this example, replace `fa-plus` with `fa-name-of-icon` found in this [cheatsheet](https://fontawesome.com/cheatsheet))

## Other sample DocFx documentation projects
### Starter project
- Create a directory for your project.
- Inside that directory, open Windows Command Prompt.
- Run `docfx init -q`.

### Sample project
- Clone [DocFx seed](https://github.com/docascode/docfx-seed).

### Walkthroughs
See [DocFx walkthroughs](https://dotnet.github.io/docfx/tutorial/walkthrough/walkthrough_overview.html).

# Reference

## Cheatsheets
> [Github-flavored Markdown](https://guides.github.com/features/mastering-markdown)
>
> [DocFx-flavored Markdown](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html?tabs=tabid-1%2Ctabid-a)
>
> [Font Awesome icons](http://fontawesome.io/icons)
>
> [Markdown tables generator](http://www.tablesgenerator.com/markdown_tables)
>
> [Code snippet language names and aliases](http://highlightjs.readthedocs.org/en/latest/css-classes-reference.html#language-names-and-aliases) (see [Code snippets](#code-snippets))

## About the metadata header
A metadata header is required at top of each article:
```md
---
uid: article.md
title: Article title
---
```
- The `uid` is the same as the Markdown filename (e.g., `article.md`).
- Two files with the same `uid` cause a build failure.

## Update the table of contents
Update references in:
- \<your filepath\>/articles/guide-name/toc.yml (the order of articles in the site)
- \<your filepath\>/articles/pdf/guide-name/toc.yml (the order of articles in the PDF)

## Rename an article
Change:
- The name of the .md file
- References in **\<your filepath\>/articles/guide-name/toc.yml** and **\<your filepath\>/articles/pdf/guide-name/toc.yml**
- `uid` in the metadata header of the .md file you renamed
- Cross references to that .md file within the docs

## Remove an article
Remove:
- The .md file
- Any associated images
- Cross references to the deleted .md file.
- The article from the table of contents (**toc.yml**) files

## Rename a guide
- Rename the guide's directory in:
  - **\<your filepath\>/articles/guide-name**
  - **\<your filepath\>/pdf/guide-name** (and adjust the `name` and `href` in **\<your filepath\>/pdf/guide-name/toc.yml**)
- Search the docs for the old **guide-name** and replace it with the new **guide-name**.

## Code snippets
### Designate a language in code snippets
Tag the code snippet with the language to apply syntax highlighting. [Language names and aliases](http://highlightjs.readthedocs.org/en/latest/css-classes-reference.html#language-names-and-aliases)

```md
```xml
code```
```
### Print code snippets in Markdown files
For long code examples, store the code in its native format in **\<your filepath>/articles/guide-name/snippets** and reference it like this:

```md
[!code-json[Main](snippets/example.json "Example")]
```

## Callouts
Add a note, tip, warning, important, or caution callout.
```md
> [!NOTE]
> This is a note.

> [!TIP]
> This is a tip.

> [!IMPORTANT]
> This is an important statement.

> [!CAUTION]
> This is a caution.

> [!WARNING]
> This is a warning.

```

## Icons
Insert as raw html.

[Font Awesome](http://fontawesome.io/icons): `<i class="fa fa-plus"></i>`

[Glyphicons](https://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp): `<span class="glyphicon glyphicon-envelope"></span>`

## Cross references
| Location | Notes | Pattern |
|----------|-------|---------|
| To a place in the same article | | `[link name](#heading-name)` |
| To another article | _If you want the link name match the title of the article you're referencing_<br>Link name is the title in the [metadata header](#about-the-metadata-header) | `@uid` |
| | _If you want to customize the link name_ | `[link name](articles/guide-name/article.md)` |
| | _If you want the reference inside parentheses_ | `(<xref:article.md>)` |
| | | `...(see [link name](articles/guide-name/article.md)).` |
| | _If the .md file is in a higher directory_ | `[link name](../../folder/article.md)` |
| To a specific place in another article | | `@uid#heading-name` |
| | | `[link name](articles/guide-name/article.md#heading-name)` |
