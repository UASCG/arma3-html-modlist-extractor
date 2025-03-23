# Arma 3 Modlist Parser and Related Server Administration Scripts
This is a collection of programs and scripts to automate Arma 3 Server administration and make downloading mods easier.

The HTML Modlist Parser can be used with any device that has a graphical user interface (GUI) and a browser (Firefox, Chrome, or such).

The scripts are primarily intended for Linux servers but should work with Windows servers as well, albeit with some adaptations required. The scripts and instructions assume that your Linux server has a user named "steam" with a home directory. Place the scripts in the home directory, or anywhere that you'll find them easily.

**Note that you require a Steam account that owns Arma 3 in order to download Arma 3 Workshop mods due to restrictions preventing anonymous workshop downloads. Ideally, this should be an account that you do not use for anything else besides server administration.**


## arma3-html-modlist-parser
**Arma 3 Modlist Parser for Server Administrator Use**

Use this simple JavaScript program with standard Arma 3 launcher modlist HTML files to get mod download commands as well as startup parameter lists for mods.

You can use this on your own computer or on a server that has a GUI.

### Usage Instructions
![Screenshot comparing a normal Arma 3 modlist HTML file with one that has been used with arma3-html-modlist-parser.](/arma3-html-modlist-parser/example.png)
See example.png and example.html to see how the program is supposed to function.

1. Generate a modlist in the Arma 3 launcher, and then place the generated HTML file into the arma3-html-modlist-parser-and-related-scripts folder.
2. Using a text editor, add this before the </body> tag at the end of the modlist HTML: `<script src="scripts/main.js"></script>`
3. Results are printed at the end of the HTML page. These can then be used as inputs while using SteamCMD (ideally with a download script), or used when launching a server via the command line.


## dlarma3server
**Simple SteamCMD Arma 3 Server Download Script**

This is a simple script to download Arma 3 Server using SteamCMD on your server. It saves you from a few command inputs and automatically exits SteamCMD once the download is complete.
1. (Optional) The default download directory is `../arma3server`, you can change this to anything you prefer by editing the `force_install_dir` line. It is recommended that you use lowercase letters and numbers only. If you do not set a directory, a default directory will be used.
2. Run the script by using the command `steamcmd +runscript /home/steam/dlarma3server`.


## dlmods
**Simple SteamCMD Mod Download Script**

This is a simple script to download Arma 3 Workshop mods using SteamCMD on your server. It automates the download process and saves you a large amount of time, especially if you have a long modlist.
1. Manually run SteamCMD at least once and log into the Steam account that you are using for server administration. It must be an account that owns Arma 3. After you've logged in, exit SteamCMD.
2. Create a `mods` sub-directory under your `arma3server` directory using `mkdir ~/.steam/steam/arma3server/mods`, or wherever you installed Arma 3 Server.
3. Edit `dlmods` by editing in your chosen Steam account's username at the first line, and then copy & pasting your modlist into the file between the login and exit lines.
4. Run the script using `steamcmd +runscript /home/steam/dlmods`.

## arma3modsrenameandmove.sh
**Lowercase and Move Mods On Linux**
This script changes all filenames and directory names to lowercase, then copies them to the Arma 3 Server directory. Lowercasing is particularly important on Linux servers which have trouble running Arma 3 mods correctly if they are not lowercased.

1. (Optional) Edit any paths in the file if necessary.
2. Make the file into an executable by using `chmod +x arma3modsrenameandmove.sh`.
3. Run the script by using `./arma3modsrenameandmove.sh`.


## A note regarding very large mods (+1GB)
SteamCMD will time out any mod downloads which are larger than 1GB in size. For more information, see here:

https://steamcommunity.com/discussions/forum/1/215439774859993377/

https://steamcommunity.com/groups/SteamClientBeta/discussions/0/3104638636524557998/

As a work-around, one can "brute-force" the mod download to complete by repeating the download command without exiting SteamCMD. So long as SteamCMD is not shut down, the mod download progress remains, despite giving timeout error messages after every downloaded gigabyte.

I plan to rewrite the code to make this work more elegantly. The current implementation is very crude, but it works.
