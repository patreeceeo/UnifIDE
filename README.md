# UnifIDE

A programming language, editor and version control system, designed as one.

## Status

Creating interactive mockups (in `mockups/`) to assist with research and clarify ideas.

These mockups are to be implemented in modern HTML, and published on GitHub Pages.

## Concept

Modern programming languages, environments and platforms have evolved organically, leaving a fragmented landscape: the language, editor, test runner, version control, search tools and CI each model code differently and are glued together by text files. We can examine each bit of existing technology and put them back together around one shared model of the code, a tree, and possibly invent some new technology in the process. The resulting product is an extremely approachable, intuitive environment for humans and an efficient, safe environment for AI agents.

### Feature ideas

- Run in web browser or as native app
- Editor
  - Source tree can be explored various ways
    - Expanding text tree
    - Expanding call graph
  - Live evaluation
    - Code is built and run as you author it
    - Results and intermediates are displayed alongside source
    - Tests are also run live
  - Unit tests displayed alongside the tested function
- Language semantics
  - Modules
  - Lexical scoping
  - Mixfix functions
  - First class values
    - Functions
    - Tagged unions
    - Immutable associative arrays
    - Asynchronous streams
    - Numbers (of course)
    - Strings perhaps, though those could be implemented with associative arrays
  - No objects! No null!
  - All control structures are explicitly imported functions<sup>1</sup>
  - Booleans are a tagged union exported by a control structure library
  - Async streams everywhere
    - All input and external communication happens via asynchronous streams
    - The default control structure library handles these asynchronous streams reactively
    - If you want synchronicity, you wrap control structures in a synchronous block
  - Functions are anonymous until assigned to an identifier
- Version Control
  - There are no source files, just a tree structure representing your project's source code, stored in a database
  - A branch off of main is created whenever you want to make a change
  - Every change<sup>2</sup> is automatically committed to the branch
  - You can tag commits
- Search
  - Since source is stored as a tree, searching tools can explore that tree instead of scanning and parsing text
- AI Agents
  - A built-in coding agent
  - More efficient
    - Are offered only valid edits using mechanical inference methods against the source tree
    - Explore a source tree instead of plain text
- Could replace or absorb many external tools
  - Git (see Version Control), once merging is worked out
  - Much of what CI does during development (see Live Evaluation), though a clean shared environment is still needed for merges and deploys
  - Grep (see Search)
  - External coding agents (see AI Agents)

#### Footnotes

1. Control structures as plain functions are made ergonomic by the fact that functions are mixfix and first class. Example: `if c then a else b` is a call of an if-then-else mixfix function, where a and b are also functions.
2. The editor debounces user input, and when it settles, it considers all the changes made since the last commit to be one commit. When viewing history, the app can be configured to show the cumulative changes between tagged commits.

### Open questions

- How are branches merged? Structural merging of trees is to be explored while building the mockups.
- Can an automatic commit capture code that doesn't evaluate or has failing tests, and if so, how is that shown?
- How do collaboration features currently provided by hosts like GitHub (review, issues, permissions) fit in?
### Prior Art

Acknowledging some influences and inspiration.

#### Smalltalk and Self

Keyword messages and control flow as functions.

#### Unison

Code stored in a database instead of file system.

#### Elm and Roc

Tagged unions, no null.

#### Dark, Eve and Light Table

Live evaluation. Dark and Eve: no source files.

#### Clojure

Immutable maps, data-oriented style.
