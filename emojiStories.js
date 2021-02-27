const emojis = [
  "😀",
  "😆",
  "😅",
  "🤣",
  "🙃",
  "😍",
  "😡",
  "🥶",
  "😱",
  "👻",
  "👾",
  "😻",
  "💋",
  "👅",
  "🧵",
  "👠",
  "🥾",
  "👑",
  "🎓",
  "🐔",
  "🐧",
  "🦄",
  "🦇",
  "🌲",
  "🎄",
  "🌊",
  "🍓",
  "🍍",
  "🥯",
  "🌭",
  "🍕",
  "🍣",
  "🥡",
  "🤸",
  "🎯",
  "🧨",
  "🔮",
  "💉",
  "🦠",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "☢️",
  "🚫",
  "💯",
  "🔱",
  "🎊",
];

document.addEventListener("DOMContentLoaded", () => {
    const submitDescription = document.querySelector("#submit-description-btn")
    // const form = document.querySelector("form")
    const story = document.querySelector("#emoji-story")
    const generateButton = document.querySelector("#generate-story-btn");
    let n = 0
    const savedStories = document.querySelector("#saved-stories")
    
    generateButton.addEventListener("click", () => {
        let storystr = "Story: ";
        const storyLength = Number(document.querySelector("#story-length-input").value);
        for (i = 0; i < storyLength; i++) {
            let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            storystr += randomEmoji;
        }
        story.textContent = storystr ;       
    });
    
    submitDescription.addEventListener("click", (e) => {
        e.preventDefault();
        const history = document.querySelector("#history-title");
        const description = document.querySelector("#description-input").value;
        let li = document.createElement("li");
        n++
      if (n === 1){
          history.textContent = `1 Saved Story`;

      } else {
          history.textContent = `${n} Saved Stories`;
      }
      //li needs the description and emoji str
      debugger;
      li.textContent = story.textContent + description
      savedStories.appendChild(li)
      story.textContent = "";
      description.textContent = "";


  })
});
