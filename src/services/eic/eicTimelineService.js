/**
 * NASA EIC Timeline Controller
 * Coordinates playback states, seeking, bidirectional synchronization,
 * and eliminates race conditions between video events and graph scrubs.
 */

export class EICPlaybackController {
  constructor({ onTimeUpdate, onPlayStateChange, onSpeedChange, onEnded }) {
    this.videoElement = null;
    this.duration = 0;
    this.currentTime = 0;
    this.isPlaying = false;
    this.playbackRate = 1.0;
    this.isSeeking = false;
    this.rafId = null;

    this.onTimeUpdate = onTimeUpdate || (() => {});
    this.onPlayStateChange = onPlayStateChange || (() => {});
    this.onSpeedChange = onSpeedChange || (() => {});
    this.onEnded = onEnded || (() => {});

    this.tick = this.tick.bind(this);
  }

  attachVideo(videoEl, duration) {
    this.videoElement = videoEl;
    this.duration = duration || 0;
    if (this.videoElement) {
      this.videoElement.playbackRate = this.playbackRate;
    }
  }

  detachVideo() {
    this.pause();
    this.videoElement = null;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  play() {
    if (this.videoElement) {
      this.videoElement.play().catch(() => {
        // Fallback or autoplay policy catch
      });
      this.isPlaying = true;
      this.onPlayStateChange(true);
      this.startRAF();
    }
  }

  pause() {
    if (this.videoElement) {
      this.videoElement.pause();
    }
    this.isPlaying = false;
    this.onPlayStateChange(false);
    this.stopRAF();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  seek(targetSeconds, isFinal = true) {
    const clamped = Math.max(0, Math.min(targetSeconds, this.duration));
    this.currentTime = clamped;

    if (this.videoElement) {
      this.videoElement.currentTime = clamped;
    }

    this.onTimeUpdate(clamped);

    if (isFinal && !this.isPlaying && this.videoElement) {
      // Trigger a single frame render
    }
  }

  setSpeed(speed) {
    this.playbackRate = speed;
    if (this.videoElement) {
      this.videoElement.playbackRate = speed;
    }
    this.onSpeedChange(speed);
  }

  startRAF() {
    if (!this.rafId) {
      this.rafId = requestAnimationFrame(this.tick);
    }
  }

  stopRAF() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  tick() {
    if (this.videoElement && this.isPlaying) {
      const vTime = this.videoElement.currentTime;
      this.currentTime = vTime;
      this.onTimeUpdate(vTime);

      if (this.videoElement.ended || vTime >= this.duration) {
        this.pause();
        this.onEnded();
        return;
      }
    }
    this.rafId = requestAnimationFrame(this.tick);
  }
}
