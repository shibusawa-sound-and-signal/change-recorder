# change-recorder

## motivation
I've been recording screencasts, and thought it might be interesting to have the individual file changes as data in addition to the final git commit history and the video recording. Since git is a great tool for recording code changes, recording the individual changes as git commits seemed like a decent first thing to try.

### backlog

  - [ ] look at usability of command-line API
     - [ ] make the script executable and do other stuff for global npm/yarn install to work
     - [ ] have error messages / usage instructions
     - [ ] possibly do configuration with some kind of `.~~~rc` file
  - [ ] probably as a separate repo, make a tool for turning git history into webpage with animated transitions, play/pause controls, captions
  - [ ] probably won't publish as an npm package?
  - [ ] clever name?

### ok, then how do we use that data?
* create a slideshow, paging through and explaining the changes
* if something ended up being a dead-end, 

### possible concerns
* race conditions - more changes happening while last change event being processed. mutex?
* performance generally -> watching + rsyncing + git committing. fast enough not to create issues?
* in theory, git as datastore works because it's linear and all commits will succeed, but maybe that won't prove to be the case.
* could instead record file diffs into subdirectories with timestamps, but how would we reconstruct that whole directory state from that?

### acknowledgements:
Since I don't know rspec super well, [this StackOverlfow answer](https://stackoverflow.com/a/38997026) got me from zero to working prototype very fast.