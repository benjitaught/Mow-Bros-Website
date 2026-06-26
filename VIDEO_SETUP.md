# Hero Video Setup Guide

## Converting Your Video for Web

Your hero video needs to be converted to a smaller, web-friendly format. The original MOV file is 91MB - too large for web. Here's how to convert it:

### Option 1: Using HandBrake (Easy - Recommended)
HandBrake is free and works on Mac, Windows, and Linux.

1. **Download HandBrake** from https://handbrake.fr/
2. **Open HandBrake**
3. **Click "Open Source"** and select your video:
   - `/Users/benjaminjbsmith/Desktop/Mow Bros Website/Mow Bros Site Content/24 - asfasdcasdcawaw.mov`
4. **Use these settings:**
   - **Format:** MP4
   - **Video Codec:** H.264
   - **Bitrate:** 4000 kbps (for good quality)
   - **Resolution:** 1920x1080
5. **Save as:** `hero-video.mp4`
6. **Save to:** `/Users/benjaminjbsmith/Desktop/Mow-Bros-Website/assets/`
7. **Click "Encode"** (takes 2-5 minutes)

### Option 2: Using QuickTime (Mac Only)
1. **Open the video** in QuickTime Player
2. **File → Export As**
3. **Format:** HEVC or MP4
4. **Quality:** High
5. **Save as:** `hero-video.mp4`
6. **Save to:** `/Users/benjaminjbsmith/Desktop/Mow-Bros-Website/assets/`

### Option 3: Using FFmpeg (Advanced)
If you have FFmpeg installed:
```bash
ffmpeg -i "24 - asfasdcasdcawaw.mov" \
  -vf "scale=1920:1080" \
  -c:v libx264 \
  -preset fast \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  hero-video.mp4
```

---

## File Requirements

**Filename:** `hero-video.mp4`  
**Location:** `/Users/benjaminjbsmith/Desktop/Mow-Bros-Website/assets/`  
**Format:** MP4 (video/mp4)  
**Resolution:** 1920x1080 (Full HD)  
**Target Size:** 10-30MB (for web)  
**Duration:** Can be any length (will loop)  

---

## After Converting

1. **Place the MP4 file** in the assets folder
2. **Open Terminal** and run:
```bash
cd /Users/benjaminjbsmith/Desktop/Mow-Bros-Website
git add assets/hero-video.mp4
git commit -m "Add hero video background"
git push
```

3. **Visit your website** to see the video in action!

---

## Video Features

✅ **Auto-plays** when page loads  
✅ **Muted** (no sound)  
✅ **Loops** continuously  
✅ **Mobile-friendly** (pauses on some devices to save data)  
✅ **Responsive** (covers full screen)  
✅ **Dark overlay** (makes text readable)  
✅ **Fallback image** (if video fails to load)  

---

## Troubleshooting

**Video not showing?**
- Make sure filename is exactly `hero-video.mp4`
- Make sure it's in the `assets/` folder
- Check browser console (F12) for errors
- Try clearing browser cache (Cmd+Shift+R)

**Video too large?**
- Re-convert with lower bitrate (3000 kbps instead of 4000)
- Use HandBrake's "Fast 1080p" preset

**Video has no audio?**
- That's correct! Hero video is muted for autoplay
- Audio is removed during conversion to reduce file size

---

## Video Tips

- **Keep it short** (5-15 seconds is ideal)
- **Use high-quality source** for best results
- **Test on mobile** to ensure it plays smoothly
- **Use landscape orientation** (wider than tall)
- **Avoid text/captions** in the video (use HTML text overlay instead)

---

## Alternative Approach

If you prefer not to convert the video, you can:
1. **Use a video hosting service** like YouTube or Vimeo
2. **Embed the video** as an iframe
3. **Keep the image background** as-is

Let me know if you'd like help with any of these options!
