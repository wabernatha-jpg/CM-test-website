"""Resize an image and save it as WebP for the website.

Usage:
    python tools/optimize_image.py SRC DEST [--width 900] [--quality 82] [--crop L,T,R,B]

--crop trims the source (pixel box, applied before resizing), e.g. to remove
a white photo border.

Originals are never modified. DEST should live under assets/img/.
Prints the output size and dimensions so the caller can set width/height
attributes on the <img> tag.
"""
import argparse
import os
from PIL import Image


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("src")
    parser.add_argument("dest")
    parser.add_argument("--width", type=int, default=900, help="max width in px")
    parser.add_argument("--quality", type=int, default=82)
    parser.add_argument("--crop", help="left,top,right,bottom in source pixels")
    args = parser.parse_args()

    img = Image.open(args.src).convert("RGB")
    if args.crop:
        img = img.crop(tuple(int(v) for v in args.crop.split(",")))
    if img.width > args.width:
        height = round(img.height * args.width / img.width)
        img = img.resize((args.width, height), Image.LANCZOS)

    os.makedirs(os.path.dirname(args.dest) or ".", exist_ok=True)
    img.save(args.dest, "WEBP", quality=args.quality, method=6)
    kb = os.path.getsize(args.dest) / 1024
    print(f"{args.dest}: {img.width}x{img.height}, {kb:.0f} KB")


if __name__ == "__main__":
    main()
