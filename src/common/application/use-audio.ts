import { useEffect, useState } from "react";

interface UseAudioInterface {
  playing: boolean
  play: () => void
  changeAudio: (url: string) => void
}

export const useAudio = (url: string): UseAudioInterface => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true)
    audio.pause()
    // audio.load()
    audio.currentTime = 0
    audio.play()
  };

  const changeAudio = (url: string) => {
    setAudio(new Audio(url))
    audio.load()
  }

  // useEffect(() => {
  //   audio.pause()
  //   if (playing) audio.play()
  // }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return { playing, play, changeAudio };
};