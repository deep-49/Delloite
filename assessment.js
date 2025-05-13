
class MusicPlayer {

    constructor() {
        this.playlist = [];
        this.currentSongIndex = -1;
    }

    @param{ string }
@throws{ TypeError }
@throws{ ValueError }

addSongToPlaylist(songTitle){
    if (typeof songTitle !== "string") {
        throw new Error("Invalid song title");

    }
    if (!songTitle) {
        throw new Error("Song title cannot be empty");
    }
    this.playlist.push(songTitle);
}
@returns { string | null }

playNextSong(){
    if (this.playlist.length === 0) {
        return null;
    }
    if (this.currentSongIndex === -1) {
        this.currentSongIndex = 0;
        return this.playlist[this.currentSongIndex];
    }
    this.currentSongIndex = (this.currentSongIndex + 1) % this.playlist.length;
    return this.playlist[this.currentSongIndex];
}
@returns { string | null }
playPreviousSong(){
    if (this.playlist.length === 0) {
        return null;
    }
    if (this.currentSongIndex === -1) {
        this.currentSongIndex = this.playlist.length - 1;
        return this.playlist[this.currentSongIndex];
    }
    this.currentsongIndex = (this.currentSongIndex - 1 + this.playlist.length) % this.playlist.length;
    return this.playlist[this.currentSongIndex];
}
@param { number }
@returns { string | null }
@throws { TypeError }

jumpToSong(songIndex){
    if (typeof songIndex !== "number") {
        throw new Error("Invalid song index");
    }
    if (songIndex >= 0 && songIndex < this.playlist.length) {
        this.currentSongIndex = songIndex;
        return this.playlist[this.currentSongIndex];
    }
    else {
        return null;
    }
    @returns{ string | null }
    getCurrentSong(){
        if (this.playlist.length === 0) {
            return null;
        }
        if (this.currentSongIndex >= 0 && this.currentSongIndex < this.playlist.length) {
            return this.playlist[this.currentSongIndex];
        } else {
            return null;
        }

    }
}