function formatTypeColors(desc, videoUrl, audioUrl) {
  if (desc)
    return {
      label: "Text",
      color: "#4cc9f0",
    };
  if (videoUrl)
    return {
      label: "Video",
      color: "#1f7a8c",
    };
  if (audioUrl)
    return {
      label: "Audio",
      color: "#f45b69",
    };
}

module.exports = formatTypeColors