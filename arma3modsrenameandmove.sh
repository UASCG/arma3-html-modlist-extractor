#!/bin/bash
# This script changes all filenames and directory names to lowercase, then moves them to the Arma 3 Server directory.
cd ~/.steam/steam/steamapps/workshop/content/107410
echo "Making all filenames and directories lowercase, please wait..."
find . -depth -exec rename 's/(.*)\/([^\/]*)/$1\/\L$2/' {} \;
echo "Moving all downloaded mods, please wait..."
mv ~/.steam/steam/steamapps/workshop/content/107410/* ~/.steam/steam/steamapps/common/arma3server/mods
echo "Done!"
