// ==UserScript==
// @name         YouTube Music Unlike All Liked Songs (Updated)
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Unlike all songs in YouTube Music liked songs playlist
// @match        https://music.youtube.com/playlist?list=LM
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function unlikeAllSongs() {
        console.log("Starting to unlike all songs...");

        let unlikedCount = 0;
        let failedCount = 0;

        while (true) {
            const likeButtons = document.querySelectorAll('tp-yt-paper-icon-button.like[aria-pressed="true"]');
            if (likeButtons.length === 0) {
                console.log("No more liked songs found.");
                break;
            }

            for (let button of likeButtons) {
                try {
                    button.click();
                    unlikedCount++;
                    console.log(`Unliked song ${unlikedCount}`);
                    await sleep(500);
                } catch (error) {
                    console.error(`Failed to unlike a song: ${error}`);
                    failedCount++;
                }
            }

           
            window.scrollTo(0, document.body.scrollHeight);
            await sleep(1000);
        }

        console.log(`Finished unliking process. Unliked ${unlikedCount} songs. Failed to unlike ${failedCount} songs.`);
    }

   
    const button = document.createElement('button');
    button.textContent = 'Unlike All Songs';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';
    button.addEventListener('click', unlikeAllSongs);
    document.body.appendChild(button);
})();
