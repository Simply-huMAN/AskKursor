// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "ASK_KURSOR") {
    let originalActiveElement;
    let text;

    // If there's an active text input
    if (
      document.activeElement &&
      (document.activeElement.isContentEditable ||
        document.activeElement.nodeName.toUpperCase() === "TEXTAREA" ||
        document.activeElement.nodeName.toUpperCase() === "INPUT")
    ) {
      // Set as original for later
      originalActiveElement = document.activeElement;
      // Use selected text or all text in the input
      text =
        document.getSelection().toString().trim() ||
        document.activeElement.textContent.trim();
    } else {
      // If no active text input use any selected text on page
      text = document.getSelection().toString().trim();
    }

    if (!text) {
      //If no text is selected
      const myDiv = document.createElement("div");
      const myText = document.createElement("p");
      const closeLogo = document.createElement("img");
      const firstDiv = document.createElement("div");
      const kursorBrand = document.createElement("a");
      const lastDiv = document.createElement("div");
      const copyClipboard = document.createElement("button");
      const shareText = document.createElement("button");
      closeLogo.src = "https://img.icons8.com/3d-fluency/256/close-window.png";
      closeLogo.alt = "Close";
      kursorBrand.href = "https://www.kursor.in/";
      copyClipboard.textContent = "Copy";
      shareText.textContent = "Share";
      Object.assign(closeLogo.style, {
        height: "40px",
        cursor: "pointer",
      });
      Object.assign(copyClipboard.style, {
        display: "flex",
        background: "#2563eb",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "1rem 1rem",
        cursor: "pointer",
        fontSize: "15px",
        justifyContent: "center",
        margin: "5px",
        alignItems: "center",
      });
      Object.assign(shareText.style, {
        display: "flex",
        background: "#2563eb",
        color: "white",
        borderRadius: "10px",
        border: "none",
        padding: "1rem 1rem",
        cursor: "pointer",
        fontSize: "15px",
        justifyContent: "center",
        margin: "5px",
        alignItems: "center",
      });
      Object.assign(firstDiv.style, {
        padding: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      });
      Object.assign(lastDiv.style, {
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridGap: "3px",
      });
      Object.assign(myDiv.style, {
        backgroundColor: "white",
        color: "black",
        padding: "5px",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        minWidth: "270px",
        maxWidth: "40vw",
        maxHeight: "80vh",
        overflowY: "scroll",
        transform: "translate(-50%,-50%)",
        zIndex: "9999",
        borderRadius: "10px",
        boxShadow: "10px",
        backdropFilter: "blur(500px)",
      });
      kursorBrand.textContent = "Kursor.in";
      Object.assign(kursorBrand.style, {
        fontWeight: "900",
        fontSize: "30px",
        cursor: "pointer",
      });
      Object.assign(myText.style, {
        width: "",
        padding: "0.5rem",
        fontSize: "15px",
        maxHeight: "75vh",
        margin: "1rem",
      });
      myText.textContent = "No text found";
      // myText.contentEditable = true;
      firstDiv.appendChild(kursorBrand);
      firstDiv.appendChild(closeLogo);
      lastDiv.appendChild(copyClipboard);
      lastDiv.appendChild(shareText);
      myDiv.appendChild(firstDiv);
      myDiv.appendChild(myText);
      myDiv.appendChild(lastDiv);

      const backdrop = document.createElement("div");
      Object.assign(backdrop.style, {
        backgroundColor: "rgb(0,0,0,0.9)",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "9998",
      });

      document.body.appendChild(backdrop);
      document.body.appendChild(myDiv);
      copyClipboard.addEventListener("click", () => {
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = myText.textContent;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(tempTextarea.value);
        console.log("Text copied to clipboard!");
      });
      shareText.addEventListener("click", () => {
        if (navigator.share) {
          navigator
            .share({
              text: myText.textContent,
            })
            .catch((err) => console.log("Error sharing: ", err));
        } else console.log("Sharing not supported");
      });
      closeLogo.addEventListener("click", () => {
        myDiv.remove();
        backdrop.remove();
      });
      return;
    }
    const myDiv = document.createElement("div");
    const myText = document.createElement("p");
    const closeLogo = document.createElement("img");
    const firstDiv = document.createElement("div");
    const kursorBrand = document.createElement("a");
    const lastDiv = document.createElement("div");
    const copyClipboard = document.createElement("button");
    const shareText = document.createElement("button");
    closeLogo.src = "https://img.icons8.com/3d-fluency/256/close-window.png";
    closeLogo.alt = "Close";
    kursorBrand.href = "https://www.kursor.in/";
    copyClipboard.textContent = "Copy";
    shareText.textContent = "Share";
    Object.assign(closeLogo.style, {
      height: "40px",
      cursor: "pointer",
    });
    Object.assign(copyClipboard.style, {
      display: "flex",
      background: "#2563eb",
      color: "white",
      borderRadius: "10px",
      border: "none",
      padding: "1rem 1rem",
      cursor: "pointer",
      fontSize: "15px",
      justifyContent: "center",
      margin: "5px",
      alignItems: "center",
    });
    Object.assign(shareText.style, {
      display: "flex",
      background: "#2563eb",
      color: "white",
      borderRadius: "10px",
      border: "none",
      padding: "1rem 1rem",
      cursor: "pointer",
      fontSize: "15px",
      justifyContent: "center",
      margin: "5px",
      alignItems: "center",
    });
    Object.assign(firstDiv.style, {
      padding: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    });
    Object.assign(lastDiv.style, {
      padding: "10px",
      display: "grid",
      gridTemplateColumns: "auto auto",
      gridGap: "3px",
    });
    Object.assign(myDiv.style, {
      backgroundColor: "white",
      color: "black",
      padding: "5px",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      top: "50%",
      left: "50%",
      minWidth: "270px",
      maxWidth: "40vw",
      maxHeight: "80vh",
      overflowY: "scroll",
      transform: "translate(-50%,-50%)",
      zIndex: "9999",
      borderRadius: "10px",
      boxShadow: "10px",
      backdropFilter: "blur(500px)",
    });
    kursorBrand.textContent = "Kursor.in";
    Object.assign(kursorBrand.style, {
      fontWeight: "900",
      fontSize: "30px",
      cursor: "pointer",
    });
    Object.assign(myText.style, {
      width: "",
      padding: "0.5rem",
      fontSize: "15px",
      maxHeight: "75vh",
      margin: "1rem",
    });
    myText.textContent = text;
    myText.contentEditable = true;
    firstDiv.appendChild(kursorBrand);
    firstDiv.appendChild(closeLogo);
    lastDiv.appendChild(copyClipboard);
    lastDiv.appendChild(shareText);
    myDiv.appendChild(firstDiv);
    myDiv.appendChild(myText);
    myDiv.appendChild(lastDiv);

    const backdrop = document.createElement("div");
    Object.assign(backdrop.style, {
      backgroundColor: "rgb(0,0,0,0.9)",
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "9998",
    });

    document.body.appendChild(backdrop);
    document.body.appendChild(myDiv);
    copyClipboard.addEventListener("click", () => {
      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = myText.textContent;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      tempTextarea.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(tempTextarea.value);
      console.log("Text copied to clipboard!");
    });
    shareText.addEventListener("click", () => {
      if (navigator.share) {
        navigator
          .share({
            text: myText.textContent,
          })
          .catch((err) => console.log("Error sharing: ", err));
      } else console.log("Sharing not supported");
    });
    closeLogo.addEventListener("click", () => {
      myDiv.remove();
      backdrop.remove();
    });
    return;
  }
});
