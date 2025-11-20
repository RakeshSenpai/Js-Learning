    const text = "Hello Rakesh";                       // 1
    const typeArea = document.getElementById('text-area'); // 2

    // We'll loop through characters and schedule each to appear later
    for (let i = 0; i < text.length; i++) {            // 3
      setTimeout(() => {                              // 4
        typeArea.innerText += text[i];                // 5
      }, i * 150);                                    // 6
    }
