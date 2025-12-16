"use client";
import styles from './likeButton.module.scss';
import { useTransition, useState, useEffect } from "react";
import { toggleUserLike } from "@/actions/likes-actions";

interface LikeButtonProps {
  recipeId: string;
  onLikeChange?: (recipeId: string, liked: boolean) => void;
  initialLiked?: boolean;
}

export default function LikeButton({ recipeId, onLikeChange, initialLiked }: LikeButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [liked, setLiked] = useState<boolean>(initialLiked ?? false);

  // Update liked state if initialLiked prop changes (e.g., when parent refetches)
  useEffect(() => {
    if (initialLiked !== undefined) {
      setLiked(initialLiked);
    }
  }, [initialLiked]);

  function handleClick() {
    startTransition(async () => {
      const res = await toggleUserLike(recipeId);
      setLiked(res.liked);
      // Notify parent component of the change
      if (onLikeChange) {
        onLikeChange(recipeId, res.liked);
      }
    });
  }

  return (
    <button disabled={isPending} onClick={handleClick} className={`${styles.likeButton} ${liked ? styles.liked : ""}`}>
      <svg
        className={styles.heart}
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 21s-6.2-4.6-9.3-8.4C-1.2 8.7 1 4 5.2 3.3c1.9-.3 3.7.7 4.8 2.2C11.1 3.9 13 3 14.8 3.3 19 4 21.2 8.7 18.3 12.6 15.2 16.4 12 21 12 21z" />
      </svg>
    </button>
  );
}