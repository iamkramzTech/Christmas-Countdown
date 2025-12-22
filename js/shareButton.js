const shareButton = document.getElementById("share-btn");
shareButton?.addEventListener("click", () => {
  const message = "🔔 Merry Christmas! 🎁 May the joy and peace of Christ fill your heart and home this Christmas.";
  if (navigator.share) {
    navigator.share({ text: message });
  } else {
    navigator.clipboard.writeText(message);
    alert("Greeting copied! You can now paste it anywhere.");
  }
});
