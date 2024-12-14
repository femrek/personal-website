/**
 * Copies the given text to clipboard.
 * @param text the text will be put into clipboard.
 */
async function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.position = "absolute";
    textArea.style.left = "-100px";

    document.body.prepend(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (error) {
        console.error(error);
    } finally {
        textArea.remove();
    }
  }
}

export default copyToClipboard;

