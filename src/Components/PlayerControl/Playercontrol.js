import React, { useState, useEffect } from "react";
import "./Playercontrol.scss";

const Playercontrol = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPrevious, setIsPrevious] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const savedVolume = localStorage.getItem("volume");
    if (savedVolume) {
      setVolume(parseInt(savedVolume));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("volume", volume);
  }, [volume]);

  function handlePlaying() {
    setIsPlaying(!isPlaying);
  }

  function handlePrevious() {
    setIsPrevious(!isPrevious);
  }

  function handleNext() {
    setIsNext(!isNext);
  }

  function handleVolumeUp() {
    setVolume(volume + 5);
  }

  function handleVolumeDown() {
    setVolume(volume - 5);
  }

  return (
    <section className="playercontrol">
      <div className="top">
        <aside className="left">
          <button>
            <i class="fa-solid fa-heart"></i>
          </button>
          <button>
            <i class="fa-solid fa-music"></i>
          </button>
          <button>
            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
          </button>
        </aside>

        <aside className="center">
          <button onClick={handlePrevious}>
            <i class="fa-solid fa-backward fa-2x"></i>
          </button>

          <button onClick={handlePlaying}>
            <i
              className={`fa-solid fa-${isPlaying ? "play" : "pause"} fa-3x`}
            ></i>
          </button>

          <button onClick={handleNext}>
            <i class="fa-solid fa-forward fa-2x"></i>
          </button>
        </aside>

        <aside className="right">
          <button onClick={handleVolumeDown}>
            <i class="fa-solid fa-volume-xmark"></i>
          </button>

          <input
            type="range"
            name="range"
            id="range"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
          />

          <button onClick={handleVolumeUp}>
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </aside>
      </div>

      <div className="bottom"></div>
    </section>
  );
};

export default Playercontrol;
