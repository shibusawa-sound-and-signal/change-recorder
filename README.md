#change-recorder

premise:

capture filesystem changes within a project directory as data, so that the history of those changes can be reconstructed and walked-through later for educational purposes.

`brew install fswatch`


###for reference:
`alias run_rsync='rsync -azP --exclude ".*/" --exclude ".*" --exclude "tmp/" ~/Documents/repos/my_repository username@host:~'
run_rsync; fswatch -o . | while read f; do run_rsync; done`

(via: [https://stackoverflow.com/a/38997026]())


###API sketch

from bash, call a `record` command.
fswatch starts watching the directory
it syncs to another directory (`~/.recordings/$project-name`), and records all changes as git commits with the current timestamp.

on Ctrl-C, just stop recording.

###Ok, then how do we use that data?
* create a slideshow, paging through and explaining the changes
* if something ended up being a dead-end, 

### Concerns
* race conditions - more changes happening while last change event being processed. mutex?
* performance generally -> watching + rsyncing + git committing. fast enough not to create issues?
* in theory, git as datastore works because it's linear and all commits will succeed, but maybe that won't prove to be the case.
* could instead record file diffs into subdirectories with timestamps, but how would we reconstruct that whole directory state from that?