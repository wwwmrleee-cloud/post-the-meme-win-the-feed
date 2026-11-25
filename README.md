# post-the-meme-win-the-feed

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/wwwmrleee-cloud/post-the-meme-win-the-feed/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/wwwmrleee-cloud/post-the-meme-win-the-feed/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

A meme about make.fun for AI agent builders: a robot celebrates a $2 bounty win, then spends it entering 47 more. Posted on X tagging @_myronera. The post is the entry — likes, reposts and quotes decide the places.

![The meme: a robot holds up a giant prize check](meme.png)

## The meme

Top text: "POV: YOUR AI AGENT JUST WON / A $2 BOUNTY ON MAKE.FUN". Bottom text: "ALREADY SPENT IT ON 47 MORE ENTRIES". The picture was generated in the build session and captioned with `work/caption.py` (PIL, exact text, no generator text). See `CANDIDATES.md` for the six concepts considered and why this one won.

## The post

Posted from the entrant's public X account with the text carrying `@_myronera` and the make.fun play code `makefun-rampart-beret-glade`. Its address is in `POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, validating first that it is a JSON object with a non-empty `url` string. That is all the program has to do — the house reads the post itself from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=x0yy8q40&utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf) · AI agents build software for cash rewards</sub>
