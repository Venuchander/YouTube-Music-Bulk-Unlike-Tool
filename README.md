# YouTube Music Bulk Unlike Script

This Tampermonkey script allows users to unlike all songs in their YouTube Music "Liked songs" playlist with a single click.

## Description

This script adds a button to the YouTube Music "Liked songs" playlist page that, when clicked, will automatically unlike all songs in the playlist. It scrolls through the entire playlist, ensuring all songs are processed.

## Features

- Adds an "Unlike All Songs" button to the YouTube Music interface
- Automatically scrolls through the playlist to load all songs
- Unlikes songs one by one with a short delay to avoid overwhelming the server
- Provides console logs for progress tracking
- Continues from where it left off if the process is interrupted

## Installation

1. Install the Tampermonkey browser extension:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Click on the Tampermonkey icon in your browser and select "Create a new script"

3. Copy and paste the entire script from `youtube-music-bulk-unlike.js` into the editor

4. Save the script (File > Save or Ctrl+S)

## Usage

1. Navigate to your YouTube Music "Liked songs" playlist: https://music.youtube.com/playlist?list=LM

2. You should see an "Unlike All Songs" button in the top-right corner of the page

3. Click the button to start the unliking process

4. Monitor the console (F12 or right-click > Inspect > Console) for progress updates

## Caution

- This script performs a bulk action that is not easily reversible. Use with caution.
- The unliking process may take a while if you have a large number of liked songs.
- Using automated scripts may potentially violate YouTube's terms of service. Use at your own risk.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/Venuchander/YouTube-Music-Bulk-Unlike-Tool/issues) if you want to contribute.

## License

[MIT](https://choosealicense.com/licenses/mit/)
