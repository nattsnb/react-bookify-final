import { useState } from "react";

export function useLinkBar({ DisplayedContentValue }) {
  const [displayedContent, setDisplayedContent] = useState("description");

  const handleDescriptionClick = () => {
    setDisplayedContent(DisplayedContentValue.description);
  };
  const handleGalleryClick = () => {
    setDisplayedContent(DisplayedContentValue.gallery);
  };
  const handleMapClick = () => {
    setDisplayedContent(DisplayedContentValue.map);
  };

  return {
    displayedContent,
    handleDescriptionClick,
    handleGalleryClick,
    handleMapClick,
  };
}
