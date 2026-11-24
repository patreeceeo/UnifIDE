# Define a function

This mockup shows what it looks like to define a function in the editor. It will show the look and behavior of:
- import statements
- function calls
- function definitions
- literal values

And that's it, because that's what the entire language consists of!

The function, as plain text:

```
from (flow control) import (yield <:Any>) (define <:Map> as <:Function>) (if <:Boolean> then <:Function>)
from (streams) import (latest from <:Stream>) (for each <:Map> react with <:Function>)
from (scope) import (let <:Map> in <:Function>)
from (error handling) import (Result (Ok <:Any>)) (invariant: <:Boolean> because <:String>)
from (game engines) import (Behaviors(Increment Y Velocity)) (Player State Stream) (<:Player> is alive) (<:Player> is on ground)
from (input) import (Key) (keypress with <:Key>)

define `bind <key: Key> to jump behavior using <player state stream: Player State Stream>` as ->
    for each `<:keypress with <:key>>` react with ->
        let
            `
            <player: latest from <:player state stream>>
            `
        in ->
            invariant: <:<:player> is alive> because <:"Dead players cannot jump"> // Aborts the reaction if the condition is false
            if <:<:player> is on ground> then ->
                yield <:Ok <:Increment Y Velocity>>
```

## Notes

1. This is not the language, but merely a textual mock of how code will be displayed in the editor.

2. Parentheses denote pills. Angle brackets denote slots. A slot can have a name preceding the colon. After the colon is the value of the slot, which can be a type.

3. Maps are denoted using backticks. Maps are ordered lists of slots and, optionally, strings. Literal string content goes between the slots within the backticks.

4. Arrows (->) and indentation indicate function literals.

5. There is a pattern used in (define ...), (let ...), etc: A function given alongside a map gets the map's named slots added to its scope.

6. (define ...) is a special form because it adds a mixfix function to the current scope. Functions normally cannot touch their containing scope.

7. (yield ...) and (invariant ...) are ordinary functions that perform (algebraic) effects handled by the nearest handler at run time. (define ...) handles yield: It emits a value on defined function's output stream, then resumes. Reactive control structures like (for each ...) handle when (invariant ...) needs to abort the current reaction. In that case, it also yields Error <reason>.

8. Types are values and their names are always capitalized.

9. Every identifier must be imported, except for those mentioned only in imports.

10. For the sake of legibility in this text mockup, it omits angle brackets around map and function literals. The actual editor will be visually consistent.
