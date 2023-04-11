#!/bin/bash
timestamp = $(%b-%d_%H:%M:%S)
scrot ~/Pictures/Screenshots/$timestamp.png -e 'xclip -selection clipboard -target image/png -i $f'
xclip -selection clipboard -t image/png -i $timestamp.png
notify-send "Screenshot taken"

