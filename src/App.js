import React, { useState } from "react";
import marked from "marked";
const placeholder = `
Headers:

# Heading level 1
## Heading level 2
### Heading level 3...
___
Paragraphs:

I really like using Markdown.
___
Bold Text:

I just love **bold text**.
___
Italics:

Italicized text is the *cat's meow*.
___
Ordered Lists:

1. First item
2. Second item
3. Third item
4. Fourth item
___
Unordered Lists:

* First item
* Second item
* Third item
* Fourth item
___     
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
___   
[links](https://www.freecodecamp.com)
___
> Block Quotes!

___
![React Logo w/ Text](https://goo.gl/Umyytc)

    `;
const App = () => {
  // init state to take in user input markup
  const [input, setInput] = useState(placeholder);

  //set user input to state
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div id="container">
      <div id="displaybox">
        <h1 id="header">Instant Markdown Preview</h1>
        <textarea
          placeholder="Insert Your Markdown Here..."
          value={input}
          id="editor"
          type="text"
          onChange={handleChange}
        ></textarea>

        {/* display markdown properly formatted for html */}
        <div
          className="outputbox"
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(input) }}
        ></div>
      </div>
    </div>
  );
};

export default App;
