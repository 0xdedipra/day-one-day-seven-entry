# Production notes — "Day one, day seven"

## The concept

The bounty asks for one tiny agent-built game filmed twice: on the day it
was made, and again after a week of daily updates. The video cuts between
identical moments in the two builds — the same map, the same opening
second, the same stretch of play — with the camera held perfectly still,
so the only thing that changes on screen is the game itself. The growth
is the whole story: nothing moves except what seven days of work added.

Our subject is STARFALL GHOST, a one-file browser arcade game in which a
little ghost glides around a neon night sky catching falling stars and
dodging bombs against a 60-second clock.

## Build one — day one

The first build is the game as it shipped on its first day, written from a
single prompt in one HTML file:

- a canvas-drawn ghost with smooth mouse, touch and keyboard control
- golden stars that fall at varying speeds and score when caught
- bombs that cost one of three lives when touched
- a 60-second timer bar, a score display and a lives display
- a title screen, a game-over screen and a restart loop

It is deliberately plain: one mechanic, cleanly done, nothing extra.

## Build two — day seven

The second build is the same game after seven daily updates landed on it.
Same sky, same moon, same ghost, same opening frame — but the screen is
visibly busier from the first second:

- a combo multiplier (×2, ×3, ×5) with its own decaying combo meter
- a magnet power-up that bends falling stars toward the ghost
- a shield power-up that wraps the ghost in a bubble and eats one bomb
- golden meteor showers that flood the sky in bursts, with an event banner
- one very large bomb that splits into three smaller bombs mid-fall
- a fading trail behind the ghost and dust when it swoops
- background shooting stars, denser and faster spawns, and a
  "DAY 7 · LEVEL 7" badge on the title screen and in the HUD

## How the two builds were captured

A before-and-after only reads honestly if nothing but the game changes,
so both builds were recorded under identical conditions:

- the same still framing — the game rectangle sits in exactly the same
  place in the vertical frame for every segment of both builds
- the same seeded randomness, so stars and bombs fall in the same pattern
  at the same moments in each recording
- the same demo autopilot driving the ghost along the same path, so the
  movement lines up cut for cut

Each matched pair of moments was then placed back to back, which makes the
differences — the combo meter ticking up, the magnet ring, the meteor
banner — impossible to miss.

## The video's structure

- the title screens, day one then day seven, under a "same game · same
  start" caption
- an early-game pair, a few seconds into a run in each build
- a mid-game pair, where day seven is at its busiest
- a closing stretch played entirely on the day-seven build, under the line
  "One week of daily updates. Start yours at make.fun"
- make.fun's referral end card, with referral code 7h35kkm4 in its field,
  held to the final frame

The finished cut runs 36 seconds at 1080×1920 with an original synthesised
music bed, encoded once at high quality for a sharp TikTok upload.

## Posting facts

- posted publicly on TikTok by @dedipratm; VIDEO.json in this repository
  names the post
- play code: makefun-earmuff-ledge-dolphin
- referral code: 7h35kkm4
