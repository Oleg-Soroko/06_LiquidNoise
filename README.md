# LIQUID NOISE

## Summary
LIQUID NOISE is an audio-reactive procedural displacement playground built with Three.js, TypeScript, and Vite.  
It renders a single high-density displaced plane with live sound analysis from either file playback or microphone input.

The project is tuned for smooth, controllable motion: audio can drive drift speed, final amplitude, and Z offset without forcing fully chaotic behavior.

## Features
- Audio-driven displacement with low/mid/high band mapping and envelope controls.
- Three noise core modes for the main shape:
  - Type 1 (`Simplex`)
  - Type 2 (`OpenSimplex`)
  - Type 3 (`OpenSimplexFixed`)
- Default soundtrack button wired to `public/Noise_Default.mp3`.
- File playback, microphone input, and video recording (`webm`) from the viewport.
- Playback transport with play/pause + seek bar.
- Audio mapping controls for `Drift Audio`, `Final Amp Audio`, `Z Offset Audio`, `Attack`, `Release`, and `Mic Sensitivity`.
- Matcap and PBR shading modes with dedicated shader/material controls.
- AO system present with AO disabled by default.
- Custom dark neumorphic UI, custom-styled dropdown menus, editable title/description, and UI width/size controls.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run in development:
   ```bash
   npm run dev
   ```
3. Build production bundle:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

Default audio file location:
- `public/Noise_Default.mp3`

If you want to replace the default track, keep the same filename/path or update `DEFAULT_AUDIO_URL` in `src/main.ts`.

## Controls
Top controls:
- `Default sound`: load and play `Noise_Default.mp3`.
- `Load mp3`: load your own local audio file.
- `Mic`: toggle microphone capture.
- `Record video`: start/stop viewport recording.
- `Play / Pause`: playback toggle.
- Seek bar: scrub playback position.

Visible tabs:
- `Noise`
  - Main shape: Noise Core, Main Noise Size, Output Min/Max, Final Amplitude, Lattice Warp, Symmetry, Drift Speed, Subdivisions.
  - Distortion layer: Distortion Noise Size, Roughness, Attenuation, Complement.
- `Audio`
  - Band gains: Low/Mid/High/Global.
  - Reactivity mapping: Drift Audio, Z Offset Audio, Final Amp Audio.
  - Signal shaping: Mic Sensitivity, Attack, Release.
- `Shader`
  - Material mode and material parameters (PBR/Matcap).
  - AO toggle/intensity.
  - Lighting controls.
  - FPS limiter.
- `Interation`
  - Mouse radius/strength, mouse noise offset, edge fade/radius/power.

Hidden (not removed) tabs:
- `Camera`
- `UI`

Viewport interaction:
- Orbit: left mouse drag
- Pan: right mouse drag
- Zoom: mouse wheel

## Deployment
Live demo (GitHub Pages):
- https://oleg-soroko.github.io/06_LiquidNoise/

Build locally for a static deploy:
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build with relative asset paths (required for GitHub Pages project pages):
   ```bash
   npm run build -- --base ./
   ```
3. Preview the production build locally:
   ```bash
   npm run preview
   ```

Deploy to `gh-pages` branch:
1. Build the project with relative paths:
   ```bash
   npm run build -- --base ./
   ```
2. Create/update a clean publish branch from `dist/` output (keep static structure like `index.html`, `assets/`, `.nojekyll`, optional `env/.gitkeep`).
3. Push that static bundle to `gh-pages`:
   ```bash
   git push origin gh-pages --force
   ```
4. In GitHub repo settings, set Pages source to the `gh-pages` branch.
