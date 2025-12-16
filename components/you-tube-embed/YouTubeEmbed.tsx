"use client";
import styles from "./youTubeEmbed.module.scss";

interface YouTubeEmbedProps {
  url: string;
}

export default function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  // Extract the video ID from the URL
  const videoId = url.split("v=")[1]?.split("&")[0];

  if (!videoId) return null;

  return (
    <div className={styles.youTubeEmbed}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?controls=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}