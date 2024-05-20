import React, { useState } from "react";

function getRandomHashCode() {
  var chars = "0123456789abcdef";
  var colorLength = 6;
  var color = "";

  for (var i = 0; i < colorLength; i++) {
    var randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return "#" + color;
}

function Footer() {
  return (
    <footer>
      <p>
        &#x3c; &#47; &#x3e; with ❤️ by
        <a href="https://swapnilsparsh.github.io/">Swapnil Srivastava</a>
        <br />
        Crafted in React by CodaMystique
        <br />
        <a
          href="https://github.com/swapnilsparsh/30DaysOfJavaScript"
          target="_blank"
        >
          #30DaysOfJavaScript
        </a>
      </p>
    </footer>
  );
}

function App() {
  const [colors, setColors] = useState(
    Array(9)
      .fill(null)
      .map(() => getRandomHashCode())
  );

  const handleRefresh = () => {
    const newColors = Array(9)
      .fill(null)
      .map(() => getRandomHashCode());
    setColors(newColors);
  };

  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    toastr.success("Now you can use it!", "Copied to clipboard", {
      timeOut: 3000,
    });
  }

  return (
    <>
      <h2 className="heading">Random Color Generator</h2>
      <div className="body">
        <div className="item">
          <button className="btn" onClick={handleRefresh}>
            Refresh
          </button>
          <div className="copy">Click on any box below to copy the code.</div>
        </div>
        <div className="cont">
          <section className="container">
            {colors.map((color, index) => (
              <div
                key={index}
                className="box"
                style={{
                  cursor: "pointer",
                  backgroundColor: color,
                }}
                onClick={() => handleCopy(color)}
              >
                {color}
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
