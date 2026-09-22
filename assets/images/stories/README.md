# Story illustration guidelines

All `audio_story_quiz` cover illustrations in this folder follow the project visual language.

- One scene = one independent PNG/WebP file. Never create sprite sheets or multi-image sheets for later slicing.
- Match the existing app assets and mascot: clean flat 2D shapes, rounded forms, saturated turquoise/orange accents, simple dark outlines, no photorealism, pseudo-3D, stock clipart, or mixed visual styles.
- Keep the main subject centered with 10–12% safe padding on every side. Do not crop faces, paws/hands, props, or important contextual details against the frame.
- Preferred canvas: 600×400 (3:2) for story covers; 512×512 only when a square composition is more appropriate.
- Export Retina-clean WebP/PNG and optimize file weight without visible blur or ringing.
- Story data references files through `image: "assets/images/stories/<file>.webp"`.
- UI must hide the cover container if the image fails to load; never leave a broken-image frame in the exercise.

Current approved covers:
- `story_cafe.webp` — café scene with coffee and croissant.
- `story_weekend.webp` — weekend planning / park scene.
- `story_hotel.webp` — hotel reception with room key card.
