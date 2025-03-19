# arma3-html-modlist-extractor
**Arma 3 Modlist Extractor for Server Administrator Use**

Use this simple JavaScript program with standard Arma 3 launcher modlist HTML files to get mod download commands as well as startup parameter lists for mods.

## Usage Instructions
![Screenshot comparing a normal Arma 3 modlist HTML file with one that has been used with arma3-html-modlist-extractor.](/example.png)
See example.png and example.html to see how the program is supposed to function.

1. Generate a modlist in the Arma 3 launcher, and then place the generated HTML file into the arma3-html-modlist-extractor folder.
2. Using a text editor, add this before the </body> tag at the end of the modlist HTML: `<script src="scripts/main.js"></script>`
3. Results are printed at the end of the HTML page. These can then be used as inputs while using SteamCMD (ideally with a download script), or used when launching a server via the command line.

### A note regarding very large mods (+1GB)
SteamCMD will time out any mod downloads which are larger than 1GB in size. For more information, see here:

https://steamcommunity.com/discussions/forum/1/215439774859993377/

https://steamcommunity.com/groups/SteamClientBeta/discussions/0/3104638636524557998/

As a work-around, one can "brute-force" the mod download to complete by repeating the download command without exiting SteamCMD. So long as SteamCMD is not shut down, the mod download progress remains, despite giving timeout error messages after every downloaded gigabyte.

I plan to rewrite the code to make this work more elegantly. The current implementation is very crude, but it works.
