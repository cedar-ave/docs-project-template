import os

path = 'articles'

searchFile = open( 'tipuesearch/tipuesearch_content.js', 'w' )
searchFile.write( 'var tipuesearch = {"pages": [' )
searchFile.write( '\n' )

firstLine = True

for root, dirs, files in os.walk(path, topdown=False):
    for name in files:
        if '.md' in name:
            if firstLine == True:
                firstLine = False
            else:
                searchFile.write( ',\n' );

            contentFile = open( os.path.join(root, name), 'r' )
            fileTitle = '';
            fileBody = '';
##        fileURL = root
            fileURL = root.replace( "\\", "/" ) + "/index.html"
##        fileURL = fileURL.replace( "\\" + name, "" ) + "/index.html"
        
            for line in contentFile:
                if "title:" in line:
                    fileTitle = line.replace( "title:", "" )
                    fileTitle = fileTitle.strip()
                elif "_model:" not in line and "---" not in line and "body:" not in line:
                    newLine = line.strip();
                    newLine = newLine.replace( '###', "" )
                    newLine = newLine.replace( '*', "" )
                    fileBody += newLine.replace( '"', "" ) + " "
                
            
            searchFile.write( '{"title": "' )
            searchFile.write( fileTitle )
            searchFile.write( '", "text": "' )
            searchFile.write( fileBody )
            searchFile.write( '", "tags": "", "url": "' )
            searchFile.write( fileURL )
            searchFile.write( '"}' )
        
searchFile.write( '\n' )
searchFile.write( ']};' )
searchFile.close()
