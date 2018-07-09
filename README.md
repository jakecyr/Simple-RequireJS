# Simple-RequireJS
A simplified RequireJS library to import JavaScript files within each other

### Setup

To setup and use the Simple RequireJS library download the "require.js" file or clone this repo.
Add the following HTML tag in your main HTML file:

```
<script src="require.js" data-require="scripts.js"></script>
```

Replacing "scripts.js" with the entry point to your JavaScript application and updating the path of the "require.js" file based on where you placed it.

In your JavaScript files, simply use:

```
require("./anotherFile.js")
```

to include that file in the final JavaScript that is executed.
