# Broken Whack-a-Mole

A tiny browser whack-a-mole game. **It's broken in 3 ways.** Your job (with a little help from Claude Code) is to fix it.

## How to play along

1. Clone the repo:
   ```sh
   git clone git@github.com:premex-ab/broken-whack-a-mole.git
   cd broken-whack-a-mole
   ```
2. Open `index.html` in your browser (double-click it, or `open index.html` on macOS).
3. Click **Start** and try to play.
4. You'll notice things are… not right.
5. Open Claude Code in this folder:
   ```sh
   claude
   ```
6. Ask Claude to help you figure out why.

## What you should see when it's working

- Moles pop up out of the holes. Clicking a visible mole scores a point.
- Clicking an empty hole does **not** score.
- The timer counts down from 30 and the game ends at 0.
- The score and timer are both clearly readable.

## No build step

Plain HTML, CSS, and JavaScript. Just open the file — no `npm install`, no dev server.

## Resetting between rehearsals

If you're facilitating and want to restore the planted bugs after fixing them, use:

```sh
./reset.sh
```

That will discard all local changes and check out the `main` branch fresh.

## License

Do whatever you want with it. This is workshop material.
